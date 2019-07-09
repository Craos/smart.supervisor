Foto = function() {

    var ultimaimagem, form, win;

    this.Exibir = function () {

        win = new dhtmlXWindows();
        var winfoto = win.createWindow('obterfoto', 0, 0, 900, 550);

        winfoto.setText('Obter foto');
        winfoto.denyResize();
        winfoto.centerOnScreen();
        winfoto.button('park').hide();
        winfoto.button('minmax1').hide();

        form = winfoto.attachForm([
            { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "8", position: "label-top"},
            { type: "block", list: [
                {type: "container", name: "displayfoto", inputWidth: 500, inputHeight: 200},
                {type: "newcolumn"},
                {type: "block", list:[
                        {type: "button", name: "obter", value: "Obter foto"},
                        {type: "button", name: "confirmar", value: "Confirmar"}
                    ]},
                {type: "block", list:[
                        {type: "container", name: "fotocadastro", inputWidth: 300, inputHeight: 200}
                ]}
            ]}
        ]);

        var obterfoto = form.getContainer("displayfoto");
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isChrome = !!window.chrome && !!window.chrome.webstore;

        if (isChrome) {
            obterfoto.innerHTML = "<iframe id='obtfoto' width='450' height='350' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='./controles/main/ScreenCastWebkit.html'></iframe>";
        } else if (isFirefox) {
            obterfoto.innerHTML = "<iframe id='obtfoto' width='450' height='350' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='./controles/main/ScreenCastMozilla.html'></iframe>";
        }

        form.attachEvent("onButtonClick", function (name) {
            if (name === 'obter') {
                obterImagem();
            } else if (name === 'confirmar') {
                createeventConfirmarFoto();
            }
        });
    };
    
    this.AoConfirmarFoto = function (callback) {
        window.addEventListener('FotoConfirmada', function (e) {
            callback(e.detail);
        });
    };

    function createeventConfirmarFoto() {
        var evt = new CustomEvent('FotoConfirmada', {detail: ultimaimagem});
        window.dispatchEvent(evt);
        win.window('obterfoto').close();
    }

    function obterImagem() {

        var iframe = document.getElementById('obtfoto');
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

        var video = innerDoc.getElementById('localVideo');
        var canvas = document.createElement('canvas');
        var ratio = 400 / video.videoHeight;

        canvas.width = ratio * video.videoWidth;
        canvas.height = 400;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, canvas.height);
        ultimaimagem = canvas.toDataURL("image/png;base64;charset=utf-8");

        var fotocadastro = form.getContainer("fotocadastro");
        if (fotocadastro != null)
            fotocadastro.innerHTML = '<img style="width: 248px; height: 180px;" alt="" src="' + ultimaimagem + '">';

    }
    
};

ScreenCastWebkit = function () {

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
};

ScreenCastMozilla = function () {

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
        console.log('mozilla:' + navigator.mozGetUserMedia);
        console.log('usermedia' + navigator.msGetUserMedia);

        return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    };

    ScreenCast.prototype.setUserMediaObject = function () {
        this.userMediaObject = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
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
            } else if (navigator.mozGetUserMedia !== undefined || navigator.msGetUserMedia !== undefined) {
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
};