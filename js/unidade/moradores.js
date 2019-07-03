/**
 * Created by Oberdan on 06/06/14.
 */
let gridMoradores;
let formMoradores;

unidade_moradores = function (item) {

    let paramMorador;

    sessionStorage.recursocorrente = 'unidade_moradores';

    formMoradores = nav_layout_principal.attachForm(campos_moradores);

    let userprofile = JSON.parse(sessionStorage.auth).user.perfil;
    let perfil_corrente;

    for (var i = 0; i < userprofile.length; i++)
        if (userprofile[i].nome_recurso === 'moradores') {
            perfil_corrente = userprofile[i];
            break;
        }

    if (perfil_corrente.adicionar === 0)
        formMoradores.hideItem('novo');

    if (perfil_corrente.editar === 0) {
        formMoradores.hideItem('salvar');
        formMoradores.hideItem('fotomorador');
        formMoradores.hideItem('reserva');
    }

    if (perfil_corrente.remover === 0)
        formMoradores.hideItem('remover');

    if (perfil_corrente.telefones === 0)
        formMoradores.hideItem('telefone');

    if (perfil_corrente.documentos === 0) {
        formMoradores.hideItem('cpf');
        formMoradores.hideItem('rg');
    }

    if (perfil_corrente.imagens === 0) {
        formMoradores.hideItem('foto_morador');
    }

    formMoradores.attachEvent("onButtonClick", function (name) {

        if (name === 'novo') {
            formMoradores.reset();
            sys.FormClear(formMoradores);
            formMoradores.showItem('parentesco');
            novo = true;

        } else if (name === 'salvar') {

            if (formMoradores.getItemValue('proprietario') === '1' && formMoradores.getItemValue('rg').length === 0) {
                alert('Informe o numero do documento de identificação');
                return;
            }
            formMoradores.validate();

        } else if (name === 'remover') {

            let data = formMoradores.getFormData();

            if (data.num.length === 0)
                return;

            dhtmlx.confirm("Exclus&atilde;o do registro", "Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {

                if (result === true) {

                    admunidade.morador.Remover({
                        filter: {
                            num: data.num
                        },
                        last: 'num',
                        callback: function (response) {
                            console.debug(response);
                            sys.FormClear(formMoradores);
                            gridLoadMoradores();
                        }
                    });

                }
            });

        } else if (name === 'fotomorador') {
            if (formMoradores.getItemValue('num').length === 0 || formMoradores.getItemValue('num') === '') {
                alert('Selecione o registro antes de obter uma nova foto!');
                return;
            }

            var wfoto = new Foto();
            wfoto.Exibir();
            wfoto.AoConfirmarFoto(function (e) {
                sys.FormAction(sys.setParameters({
                    contenttype: 'xml',
                    action: 'updateimage',
                    origem: 'condominio.moradores',
                    num: formMoradores.getItemValue('num'),
                    targetfield: 'foto1',
                    foto1: e
                }), function (http) {
                    if (http.response.indexOf('sucesso') > -1) {
                        formMoradores.getContainer("foto_morador").innerHTML = '<img id="fotodwd" style="width: 120px;" alt="" src="' + e + '">';
                    }
                });

            });
        } else if (name === 'reserva') {

            if (formMoradores.getItemValue('num').length === 0 || formMoradores.getItemValue('num') === '') {
                dhtmlx.alert({
                    title: "Atenção",
                    type: "alert-warning",
                    text: "Selecione o registro para poder efetuar a reserva!"
                });
                return;
            }

            new ReservadeEspaco({
                unidade: admunidade,
                nome: formMoradores.getItemValue('nome'),
                autenticacao: formMoradores.getItemValue('autenticacao')
            }).Exibir();
        }
    });

    formMoradores.attachEvent("onAfterValidate", function (status) {

        if (status === false)
            return;

        let data = formMoradores.getFormData();
        let infounidade = JSON.parse(sessionStorage.unidadecorrente);

        data.condominio = infounidade.condominio;
        data.bloco = infounidade.bloco;
        data.andar = infounidade.andar;
        data.unidade = infounidade.pk_unidade;

        if (data.num.length === 0) {

            admunidade.morador.Adicionar({
                data: data,
                last: 'num',
                callback: function (response) {

                    console.debug(response);

                    admunidade.morador.Ativar({
                        bloco: infounidade.bloco,
                        unidade: infounidade.unidade,
                        registro: response.dados[0].num
                    }, function (response) {
                        console.debug(response);
                        gridLoadMoradores();
                    });
                }
            })

        } else {

            admunidade.morador.Atualizar({
                data: data,
                filter: {
                    num: data.num
                },
                last: 'num',
                callback: function (response) {

                    console.debug(response);
                    gridLoadMoradores();
                }
            })
        }



    });

    gridMoradores = new dhtmlXGridObject(formMoradores.getContainer("gridfamiliares"));
    gridMoradores.setIconsPath('./codebase/imgs/');
    gridMoradores.setHeader("Id,Data cadastro,Nome,Data de nascimento");
    gridMoradores.setColumnIds("num,filedate,nome,nascimento");
    gridMoradores.setColTypes("ro,ro,ro,ro");
    gridMoradores.setColSorting("str,str,str,str,str");
    gridMoradores.enableAutoWidth(true);
    gridMoradores.init();
    gridMoradores.attachEvent('onRowSelect', function (id) {

        admunidade.morador.id = id;
        admunidade.morador.ObterInfo(LoadFormMoradores);

    });
    gridLoadMoradores();
};


var rowdata;

function LoadFormMoradores(response) {

    sys.FormClear(formMoradores);

    formMoradores.setFormData(response);
    formMoradores.getContainer("foto_morador")
        .innerHTML = '<img id="fotodwd" style="width: 120px;" alt="" src="' + response.foto1 + '">';

    let data = new Date(response.ativacao);
    let hoje = new Date();
    let ativado = data > hoje;

    if (ativado === false) {
        formMoradores.setItemLabel('aviso_ativacao', 'Ativado');
    } else {
        formMoradores.setItemLabel('aviso_ativacao', 'Aguardando ativação');
    }

    formMoradores.setItemValue('ativacao', data.format("dd/mm/yyyy HH:MM:ss"))

}

function gridLoadMoradores() {

    admunidade.morador.ListarCadastros(function (response) {
        gridMoradores.clearAll();

        if (response.dados === null)
            return;

        response.dados.filter(function (item) {
            let data = new Date(item.filedate);
            gridMoradores.addRow(item.num, [item.num, data.format("dd/mm/yyyy"), item.nome, item.nascimento]);
        });
    });

}

function recebeImagemMorador(imagem) {

    var fotocadastro = formMoradores.getContainer("foto_morador");
    if (fotocadastro != null) {
        fotocadastro.innerHTML = '<img style="width: 120px;" alt="" src="' + imagem + '">';
    }
}

var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};