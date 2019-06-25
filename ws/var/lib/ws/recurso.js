/**
 * Created by oberd on 19/07/2017.
 */


var recurso = recurso || {};

recurso.servicos = {

    LayoutFormGrid: function (Info) {

        var layout = Info.Target.attachLayout({
            pattern: '2E',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {
                    id: 'a',
                    header: false
                },
                {
                    id: 'b',
                    header: false
                }
            ]
        });

        var CurrentForm = recurso.servicos.Formulario(layout.cells('a'), Info, AtualizaLista);

        if (Info.Iniciar.barradecomandos) {
            var CurrentBar = recurso.servicos.BarradeComandos(layout.cells('a'), Info, CurrentForm, function (id) {
                AtualizaLista();

                if (Info.Iniciar.barradecomandos.callback)
                    Info.Iniciar.barradecomandos.callback(id);
            });
        }

        var grid = layout.cells('b').attachGrid();
        grid.setIconsPath('./codebase/imgs/');
        grid.setHeader(Info.Iniciar.grid.Header);
        grid.setColumnIds(Info.Iniciar.grid.ColumnIds);
        grid.attachHeader(Info.Iniciar.grid.Filter);
        grid.setInitWidths(Info.Iniciar.grid.Widths);
        grid.setColTypes(Info.Iniciar.grid.ColTypes);
        grid.setColSorting(Info.Iniciar.grid.ColSorting);
        grid.init();
        grid.attachEvent('onRowSelect', function (id) {
            recurso.servicos.SelecionaRegistro(layout.cells('a'), id, CurrentForm, Info);
        });

        function AtualizaLista() {
            recurso.servicos.ListaRegistros(Info, layout.cells('b'), CurrentForm, function (resultado) {
                grid.clearAll();
                resultado.filter(function (item) {
                    var info = JSON.parse(item.query);
                    grid.addRow(info[Info.Iniciar.grid.ColumnId], Object.keys(info).map(function (k) {
                        return info[k]
                    }));
                });
            });
        }

        AtualizaLista();

    },
    LayoutFormList: function (Info) {

        var layout = Info.Target.attachLayout({
            pattern: '2U',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {
                    id: 'a',
                    width: 200,
                    header: false
                },
                {
                    id: 'b',
                    header: false
                }
            ]
        });

        var CurrentForm = recurso.servicos.Formulario(layout.cells('b'), Info, AtualizaLista);

        if (Info.Iniciar.barradecomandos) {
            var CurrentBar = recurso.servicos.BarradeComandos(layout.cells('b'), Info, CurrentForm.form(), AtualizaLista);
        }


        var list = layout.cells('a').attachList(Info.Iniciar.list.config);
        list.attachEvent('onItemClick', function (id) {
            recurso.servicos.SelecionaRegistro(layout.cells('b'), id, CurrentForm.form(), Info);
            return true;
        });

        function AtualizaLista() {
            recurso.servicos.ListaRegistros(Info, layout.cells('b'), CurrentForm.form(), function (resultado) {
                list.clearAll();
                resultado.filter(function (item) {
                    var valor = JSON.parse(item.query);
                    list.add(valor, 0);
                });
            });
        }

        AtualizaLista();

    },
    LayoutForm: function (Info) {

        var layout = Info.Target.attachLayout({
            pattern: '1C',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {
                    id: 'a',
                    header: false
                }
            ]
        });

        var CurrentForm = recurso.servicos.Formulario(layout.cells('a'), Info);

        if (Info.Iniciar.barradecomandos)
            var CurrentBar = recurso.servicos.BarradeComandos(layout.cells('a'), Info, CurrentForm, atualizaForm);

        function atualizaForm() {
            layout.cells('a').progressOn();
            Info.Webservice.Request({
                c: 7,
                cn: 'as',
                process: 'query',
                params: JSON.stringify({
                    command: 'select',
                    fields: '*',
                    from: Info.Iniciar.selecaoRegistro.origem,
                    where: Info.Iniciar.selecaoRegistro.Where
                })
            }, function (http) {
                CurrentForm.form().setFormData(JSON.parse(JSON.parse(http.response)[0].query));
                layout.cells('a').progressOff();
            });
        }

        if (Info.Iniciar.selecaoRegistro !== undefined && Info.Iniciar.selecaoRegistro.origem !== undefined)
            atualizaForm();

        return {form:CurrentForm, bar: CurrentBar};

    },
    Formulario: function (Cell, Info, CallBack) {

        var _form = Cell.attachForm();
        _form.loadStruct(Info.Iniciar.formulario.estrutura, function () {
            if (Info.Iniciar.formulario.combo !== undefined) {
                Info.Iniciar.formulario.combo.filter(function (combo) {
                    combo.values(function (http) {
                        var valores = JSON.parse(http.response);
                        var comboItem = _form.getCombo(combo.name);
                        valores.filter(function (option) {
                            var item = JSON.parse(option.query);
                            comboItem.addOption([{value: item.num, text: item.nome}]);
                        });
                    });
                });
            }
        });

        if (Info.Iniciar.formulario.avaliacaoautomatica === undefined)
            _form.attachEvent('onAfterValidate', function (status) {
            if (status === false)
                return;

            recurso.servicos.SalvaRegistros(Info, Cell, _form, CallBack);
        });

        return _form;

    },
    BarradeComandos: function (Cell, Info, Form, CallBack) {

        var _toolbar = Cell.attachToolbar({
            icon_path: Info.Iniciar.barradecomandos.localimagens,
            items: Info.Iniciar.barradecomandos.comandos
        });


        _toolbar.attachEvent('onClick', function (id) {

            if (id === 'novo') {
                Form.clear();

            } else if (id === 'salvar' && Info.Iniciar.formulario.avaliacaoautomatica === undefined) {
                Form.validate();

            } else if (id === 'salvar' && Info.Iniciar.formulario.avaliacaoautomatica !== undefined) {
                Info.Iniciar.formulario.avaliacaoautomatica();

            } else if (id === 'remover') {
                recurso.servicos.RemoverRegistro(Info, Form, CallBack);

            } else if (id === 'obterfoto' && _toolbar.getItemText('obterfoto') === 'Obter foto') {

                _toolbar.setItemText('obterfoto', 'Confirmar foto');
                var isFirefox = typeof InstallTrigger !== 'undefined';
                var isChrome = !!window.chrome && !!window.chrome.webstore;

                //if (isChrome) {
                   Form.getContainer(Info.Iniciar.imagem.exibefoto).innerHTML = "<iframe id='obtfoto' width='450' height='450' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://192.168.0.180/ws/var/lib/ws/ScreenCastWebkit.html'></iframe>";

                //} else if (isFirefox) {
                    //Form.getContainer(Info.Iniciar.imagem.exibefoto).innerHTML = "<iframe id='obtfoto' width='450' height='450' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://192.168.0.180/ws/var/lib/ws/ScreenCastMozilla.html'></iframe>";

                /*} else {

                    _toolbar.setItemText('obterfoto', 'Obter foto');
                    dhtmlx.alert({
                        title: 'Atenção',
                        type: 'alert-warning',
                        text: 'Não será possível utilizar este recurso neste navegador.'
                    });

                }*/

            }
            else if ((id === 'obterfoto' && _toolbar.getItemText('obterfoto') === 'Confirmar foto')) {

                _toolbar.setItemText('obterfoto', 'Obter foto');
                var ifr = document.getElementById('obtfoto');
                var video = ifr.contentWindow.document.getElementById('localVideo');
                var canvas = ifr.contentWindow.document.createElement('canvas');

                canvas.width = video.videoWidth || video.width;
                canvas.height = video.videoHeight || video.height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
                var ultimaimagem = canvas.toDataURL();
                Form.getContainer(Info.Iniciar.imagem.exibefoto).innerHTML = '<img style="width: 450px;" src="' + ultimaimagem + '">';
                Form.setItemValue(Info.Iniciar.imagem.campo, ultimaimagem);

            } else {

                Info.Iniciar.barradecomandos.comandos.filter(function (item) {
                    if (item.id === id && item.callback) {
                        item.callback();
                    }
                });
            }
        });

        return _toolbar;
    },
    ListaRegistros: function (Info, Cell, Form, CallBack) {

        if (Cell)
            Cell.progressOn();

        Info.Webservice.Request({
            c: 7,
            cn: 'as',
            process: 'query',
            params: JSON.stringify({
                command: 'select',
                fields: (!Info.Iniciar.grid) ? Info.Iniciar.visao.campos : Info.Iniciar.grid.ColumnIds,
                from: Info.Iniciar.visao.origem,
                where: Info.Iniciar.visao.where,
                order: Info.Iniciar.visao.ordem
            })
        }, function (http) {

            if (Form) {
                Form.clear();
                Form.setFormData(null);
                if (Info.Iniciar.imagem)
                    Form.getContainer(Info.Iniciar.imagem.exibefoto).innerHTML = '';
            }

            if (http.response === 'null') {

                dhtmlx.alert({
                    title: 'Atenção',
                    type: 'alert-error',
                    text: 'Não foi possível enviar a solicitação. Nenhuma conexão está disponível'
                });

                if (Cell)
                    Cell.progressOff();

                return;

            } else if (http.response === 'false') {

                if (Cell)
                    Cell.progressOff();

                return;
            }

            if (Cell)
                Cell.progressOff();

            CallBack(JSON.parse(http.response));

        });
    },
    SelecionaRegistro: function (Cell,  id, Form, Info) {

        Cell.progressOn();
        Form.clear();
        if (Info.Iniciar.imagem)
            Form.getContainer(Info.Iniciar.imagem.exibefoto).innerHTML = '';

        Info.Webservice.Request({
            c: 7,
            cn: 'as',
            process: 'query',
            params: JSON.stringify({
                command: 'select',
                fields: '*',
                from: Info.Iniciar.selecaoRegistro.origem,
                where: Info.Iniciar.selecaoRegistro.chave + '=' + id
            })
        }, function (http) {

            if (http.response === 'null') {

                dhtmlx.alert({
                    title: 'Atenção',
                    type: 'alert-error',
                    text: 'Houve uma falha na busca das informações'
                });

                Cell.progressOff();
                return;

            } else if (http.response === 'false') {

                dhtmlx.alert({
                    title: 'Atenção',
                    type: 'alert-error',
                    text: 'Não foi possível localizar este registro'
                });

                Cell.progressOff();
                return;
            }

            Form.setFormData(JSON.parse(JSON.parse(http.response)[0].query));

            if (!Info.Iniciar.imagem) {
                Cell.progressOff();
                return;
            }

            Info.Webservice.Request({
                c: 7,
                cn: 'as',
                process: 'query',
                params: JSON.stringify({
                    command: 'select',
                    fields: Info.Iniciar.imagem.campo,
                    from: Info.Iniciar.imagem.origem,
                    where: Info.Iniciar.selecaoRegistro.chave + '=' + id
                })
            }, function (http) {

                Cell.progressOff();
                if (http.response === 'null' || http.response === 'false')
                    return;

                var resultado = JSON.parse(JSON.parse(http.response)[0].query);
                var imagem = resultado[Object.keys(resultado)[0]];
                Form.getContainer(Info.Iniciar.imagem.exibefoto).innerHTML = '<img style="width: 450px;" src="' + imagem + '">';
            });
        });
    },
    SalvaRegistros: function (Info, Cell, Form, CallBack) {

        var command = 'insert';
        if (Form.getItemValue(Info.Iniciar.selecaoRegistro.chave) !== '')
            command = 'update';

        Cell.progressOn();
        Info.Webservice.Request({
            c: 7,
            cn: 'as',
            process: 'query',
            params: JSON.stringify({
                command: command,
                fields: Info.Webservice.mergeAttributes(Info.Iniciar.dadosadicionais, Form.getFormData()),
                from: Info.Iniciar.tabela,
                where: Info.Iniciar.selecaoRegistro.chave + '=' + Form.getItemValue(Info.Iniciar.selecaoRegistro.chave),
                returning: Info.Iniciar.selecaoRegistro.chave
            })
        }, function (http) {

            if (http.response === 'null') {

                dhtmlx.alert({
                    title: 'Atenção',
                    type: 'alert-error',
                    text: 'Não foi possível enviar a solicitação. Nenhuma conexão está disponível'
                });
                Cell.progressOff();
                return;

            } else if (http.response === 'false') {

                dhtmlx.alert({
                    title: 'Atenção',
                    type: 'alert-error',
                    text: 'Erro ao salvar as informações'
                });
                Cell.progressOff();
                return;

            }

            // Remove a imagem do usuário caso exista
            if (Info.Iniciar.imagem) {
                recurso.servicos.SalvaImagem(Info, Cell, function () {
                    recurso.servicos.PosRegistro(Form, Cell, CallBack);
                });
            } else {
                recurso.servicos.PosRegistro(Form, Cell, CallBack);
            }
        });

    },
    RemoverRegistro: function (Info, Form, CallBack) {

        if (Form.getItemValue(Info.Iniciar.selecaoRegistro.chave) === '')
            return;

        dhtmlx.confirm({
            title: "Confirmação de exclusão",
            text: "Voc&ecirc; confirma a exclus&atilde;o do registro?",
            callback: function (result) {
                if (result === true) {

                    Info.Webservice.Request({
                        c: 7,
                        cn: 'as',
                        process: 'query',
                        params: JSON.stringify({
                            command: 'delete',
                            from: Info.Iniciar.tabela,
                            where: Info.Iniciar.selecaoRegistro.chave + '=' + Form.getItemValue(Info.Iniciar.selecaoRegistro.chave)
                        })
                    }, function () {
                        Form.clear();

                        if (CallBack)
                            CallBack('remover');

                    });
                }
            }
        });
    },
    PosRegistro: function (Form, Cell, CallBack) {

        dhtmlx.message({
            text: 'Registro salvo com sucesso'
        });

        Cell.progressOff();
        if (CallBack)
            CallBack();

        var aviso = new CustomEvent('AoSalvarcomSucesso', {
            detail: {
                form: Form.getFormData()
            }
        });

        Form.clear();
        document.dispatchEvent(aviso);


    },
    SalvaImagem:function (Info, Cell, CallBack) {

        Info.Webservice.Request({
            c: 7,
            cn: 'as',
            process: 'query',
            params: JSON.stringify({
                command: 'delete',
                from: Info.Iniciar.imagem.origem,
                where: Info.Iniciar.selecaoRegistro.chave + '=' + Form.getItemValue(Info.Iniciar.selecaoRegistro.chave)
            })
        }, function (http) {

            Info.Webservice.Request({
                c: 7,
                cn: 'as',
                process: 'query',
                params: JSON.stringify({
                    command: 'insert',
                    fields: Info.Webservice.mergeAttributes(Info.Iniciar.dadosadicionais, Form.getFormData()),
                    from: Info.Iniciar.imagem.origem,
                    where: Info.Iniciar.selecaoRegistro.chave + '=' + Form.getItemValue(Info.Iniciar.selecaoRegistro.chave),
                    returning: Info.Iniciar.selecaoRegistro.chave
                })
            }, function (http) {

                if (http.response === 'null') {

                    dhtmlx.alert({
                        title: 'Atenção',
                        type: 'alert-error',
                        text: 'Não foi possível enviar a solicitação. Nenhuma conexão está disponível'
                    });
                    Cell.progressOff();
                    return;

                } else if (http.response === 'false') {

                    dhtmlx.alert({
                        title: 'Atenção',
                        type: 'alert-error',
                        text: 'Erro ao salvar as informações'
                    });
                    Cell.progressOff();
                    return;

                }
                CallBack();
            });
        });
    },
    ScreenCastWebkit: function () {
        var startButton = document.getElementById('startButton');
        var callButton = document.getElementById('callButton');
        var hangupButton = document.getElementById('hangupButton');
        callButton.disabled = true;
        hangupButton.disabled = true;
        startButton.onclick = start;
        callButton.onclick = call;
        hangupButton.onclick = hangup;

        var startTime;
        var localVideo = document.getElementById("localVideo");
        var remoteVideo = document.getElementById("remoteVideo");

        localVideo.addEventListener('loadedmetadata', function () {
            trace('Local video videoWidth: ' + this.videoWidth +
                'px,  videoHeight: ' + this.videoHeight + 'px');
        });

        remoteVideo.addEventListener('loadedmetadata', function () {
            trace('Remote video videoWidth: ' + this.videoWidth +
                'px,  videoHeight: ' + this.videoHeight + 'px');
        });

        remoteVideo.onresize = function () {
            trace('Remote video size changed to ' +
                remoteVideo.videoWidth + 'x' + remoteVideo.videoHeight);
            // We'll use the first onresize callback as an indication that video has started
            // playing out.
            if (startTime) {
                var elapsedTime = window.performance.now() - startTime;
                trace('Setup time: ' + elapsedTime.toFixed(3) + 'ms');
                startTime = null;
            }
        };

        var localStream;
        var pc1;
        var pc2;
        var offerOptions = {
            offerToReceiveAudio: 1,
            offerToReceiveVideo: 1
        };

        function getName(pc) {
            return (pc === pc1) ? 'pc1' : 'pc2';
        }

        function getOtherPc(pc) {
            return (pc === pc1) ? pc2 : pc1;
        }

        function gotStream(stream) {
            trace('Received local stream');
            localVideo.srcObject = stream;
            window.localStream = localStream = stream;
            callButton.disabled = false;
        }

        function start() {
            trace('Requesting local stream');
            startButton.disabled = true;
            navigator.mediaDevices.getUserMedia({
                audio: false,
                video: true
            })
                .then(gotStream)
                .catch(function (e) {
                    dhtmlx.alert({
                        title: 'Atenção',
                        type: 'alert-error',
                        text: 'Não foi possível iniciar a webcam. Por favor reinicie o navegador'
                    });
                });
        }

        function call() {
            callButton.disabled = true;
            hangupButton.disabled = false;
            trace('Starting call');
            startTime = window.performance.now();
            var videoTracks = localStream.getVideoTracks();
            var audioTracks = localStream.getAudioTracks();
            if (videoTracks.length > 0) {
                trace('Using video device: ' + videoTracks[0].label);
            }
            if (audioTracks.length > 0) {
                trace('Using audio device: ' + audioTracks[0].label);
            }
            var servers = null;
            window.pc1 = pc1 = new RTCPeerConnection(servers);
            trace('Created local peer connection object pc1');
            pc1.onicecandidate = function (e) {
                onIceCandidate(pc1, e);
            };

            window.pc2 = pc2 = new RTCPeerConnection(servers);
            trace('Created remote peer connection object pc2');
            pc2.onicecandidate = function (e) {
                onIceCandidate(pc2, e);
            };
            pc1.oniceconnectionstatechange = function (e) {
                onIceStateChange(pc1, e);
            };
            pc2.oniceconnectionstatechange = function (e) {
                onIceStateChange(pc2, e);
            };
            pc2.onaddstream = gotRemoteStream;

            pc1.addStream(localStream);
            trace('Added local stream to pc1');

            trace('pc1 createOffer start');
            pc1.createOffer(
                offerOptions
            ).then(
                onCreateOfferSuccess,
                onCreateSessionDescriptionError
            );
        }

        function onCreateSessionDescriptionError(error) {
            trace('Failed to create session description: ' + error.toString());
        }

        function onCreateOfferSuccess(desc) {
            trace('Offer from pc1\n' + desc.sdp);
            trace('pc1 setLocalDescription start');
            pc1.setLocalDescription(desc).then(
                function () {
                    onSetLocalSuccess(pc1);
                },
                onSetSessionDescriptionError
            );
            trace('pc2 setRemoteDescription start');
            pc2.setRemoteDescription(desc).then(
                function () {
                    onSetRemoteSuccess(pc2);
                },
                onSetSessionDescriptionError
            );
            trace('pc2 createAnswer start');
            // Since the 'remote' side has no media stream we need
            // to pass in the right constraints in order for it to
            // accept the incoming offer of audio and video.
            pc2.createAnswer().then(
                onCreateAnswerSuccess,
                onCreateSessionDescriptionError
            );
        }

        function onSetLocalSuccess(pc) {
            trace(getName(pc) + ' setLocalDescription complete');
        }

        function onSetRemoteSuccess(pc) {
            trace(getName(pc) + ' setRemoteDescription complete');
        }

        function onSetSessionDescriptionError(error) {
            trace('Failed to set session description: ' + error.toString());
        }

        function gotRemoteStream(e) {
            window.remoteStream = remoteVideo.srcObject = e.stream;
            trace('pc2 received remote stream');
        }

        function onCreateAnswerSuccess(desc) {
            trace('Answer from pc2:\n' + desc.sdp);
            trace('pc2 setLocalDescription start');
            pc2.setLocalDescription(desc).then(
                function () {
                    onSetLocalSuccess(pc2);
                },
                onSetSessionDescriptionError
            );
            trace('pc1 setRemoteDescription start');
            pc1.setRemoteDescription(desc).then(
                function () {
                    onSetRemoteSuccess(pc1);
                },
                onSetSessionDescriptionError
            );
        }

        function onIceCandidate(pc, event) {
            if (event.candidate) {
                getOtherPc(pc).addIceCandidate(
                    new RTCIceCandidate(event.candidate)
                ).then(
                    function () {
                        onAddIceCandidateSuccess(pc);
                    },
                    function (err) {
                        onAddIceCandidateError(pc, err);
                    }
                );
                trace(getName(pc) + ' ICE candidate: \n' + event.candidate.candidate);
            }
        }

        function onAddIceCandidateSuccess(pc) {
            trace(getName(pc) + ' addIceCandidate success');
        }

        function onAddIceCandidateError(pc, error) {
            trace(getName(pc) + ' failed to add ICE Candidate: ' + error.toString());
        }

        function onIceStateChange(pc, event) {
            if (pc) {
                trace(getName(pc) + ' ICE state: ' + pc.iceConnectionState);
                console.log('ICE state change event: ', event);
            }
        }

        function hangup() {
            trace('Ending call');
            pc1.close();
            pc2.close();
            pc1 = null;
            pc2 = null;
            hangupButton.disabled = true;
            callButton.disabled = false;
        }


        function trace(text) {
            if (text[text.length - 1] === '\n') {
                text = text.substring(0, text.length - 1);
            }
            if (window.performance) {
                var now = (window.performance.now() / 1000).toFixed(3);
                console.log(now + ': ' + text);
            } else {
                console.log(text);
            }
        }

        start();
    },
    ScreenCastMozilla: function () {

        function ScreenCast(element) {
            this.element = element;
            this.userMediaObject = null;
            this.stream = null;

            // should be refactored
            this.recorder = null;
            this.initialize();
        }

        ScreenCast.prototype.initialize = function () {
            if (!this.isSupported()) {
                console.log('Your browser doesn\'t support ScreenCast.');
                return;
            }

            this.setUserMediaObject();
        };

        ScreenCast.prototype.isSupported = function () {
            console.log('chrome:' + navigator.getUserMedia);
            console.log('webkit:' + navigator.webkitGetUserMedia);
            console.log('mozilla:' + navigator.mediaDevices.getUserMedia);
            console.log('usermedia' + navigator.msGetUserMedia);

            return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mediaDevices.getUserMedia || navigator.msGetUserMedia);
        };

        ScreenCast.prototype.setUserMediaObject = function () {
            this.userMediaObject = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mediaDevices.getUserMedia || navigator.msGetUserMedia;
        };

        ScreenCast.prototype.start = function () {
            this.userMediaObject.call(navigator, {
                video: true,
                audio: true
            }, function (localMediaStream) {
                this.stream = localMediaStream;

                // should be separated from this class?
                this.element.src = window.URL.createObjectURL(localMediaStream);

                if (navigator.getUserMedia !== undefined || navigator.webkitGetUserMedia !== undefined) {
                    this.element.getUserMedia = function (e) {
                        console.log('O objeto getUserMedia existe');
                    };
                } else if (navigator.mediaDevices.getUserMedia !== undefined || navigator.msGetUserMedia !== undefined) {
                    this.element.onloadedmetadata = function (e) {
                        console.log('onloadedmetadata');
                    };
                }

            }.bind(this), function (e) {
                if (e.code === 1) {
                    console.log('User declined permissions.');
                }
            });
        };

        (function () {
            var videoElement = document.getElementById('localVideo');
            var screenCast = new ScreenCast(videoElement);
            screenCast.start();
        }());
    }

};