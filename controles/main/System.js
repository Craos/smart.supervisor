/**
 * Created by Oberdan on 02/08/14.
 */


let SystemCraos;
let Server;
let Parameters;
let parametrosparaEnvio;
let CurrentForm;
let CurrentTable;
let windowView;
let CallbackServer;
let PostServer;

Parameters = {
    contenttype: '',
    action: '',
    origem: '',
    campos: '',
    where: '',
    usecheckbox: '',
    chave: '',
    displaychave: ''
};


let XMLHttpFactories = [
    function () {
        return new XMLHttpRequest()
    },
    function () {
        return new ActiveXObject("Msxml2.XMLHTTP")
    },
    function () {
        return new ActiveXObject("Msxml3.XMLHTTP")
    },
    function () {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
];

SystemCraos = function () {

    this.FormAction = function (Params, CallBack) {

        sys.CallbackServer = this.createXMLHTTPObject();
        sys.CallbackServer.open('POST', this.Server.substr(0, this.Server.length - 1), true);
        sys.CallbackServer.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        sys.CallbackServer.onreadystatechange = function () {
            if (sys.CallbackServer.readyState !== 4) return;
            if (sys.CallbackServer.status !== 200 && sys.CallbackServer.status !== 304) {
                console.log('Erro na resolucao da resposta no lado servidor');
                console.log(sys.CallbackServer);
                return;
            }
            CallBack(sys.CallbackServer);
        };
        sys.CallbackServer.send(Params);

    };

    this.createXMLHTTPObject = function () {
        let xmlhttp = false;
        for (let i = 0; i < XMLHttpFactories.length; i++) {
            try {
                xmlhttp = XMLHttpFactories[i]();
            }
            catch (e) {
                continue;
            }
            break;
        }
        return xmlhttp;
    };

    /**
     * Limpa um formulario especifico
     * @param Form O Objeto do Formulario
     * @param Focus O Campo que receberar um foco ao final do procedimento
     * @param ClearContainer Se verdadeiro limpa o campo container do formulario
     * @constructor
     */
    this.FormClear = function (Form, Focus, ClearContainer) {

        Form.forEachItem(function (id) {

            let obj = Form.getItemType(id);
            if (obj === 'calendar') {
                Form.getCalendar(id).setDate(new Date());

            } else if (obj === 'combo') {
                Form.getCombo(id).setComboValue('');

            } else if (obj === 'checkbox') {
                Form.uncheckItem(id);

            } else if (obj === 'input') {
                Form.setItemValue(id, '');

            } else if (obj === 'container') {
                if (ClearContainer === true) {
                    let item = Form.getContainer(id);
                    item.innerHTML = '';
                }
            } else if (obj === 'template') {
                Form.setItemValue(id, '');
            }
        });
    };

    this.FormSave = function (Form) {

        Form.forEachItem(function (id) {

            let obj = Form.getItemType(id);
            if (obj === 'calendar') {
                Form.getCalendar(id).setDate(new Date());

            } else if (obj === 'combo') {
                Form.getCombo(id).setComboValue('');

            } else if (obj === 'checkbox') {
                Form.uncheckItem(id);

            } else if (obj === 'input') {
                Form.setItemValue(id, '');

            } else if (obj === 'container') {
                if (ClearContainer === true) {
                    let item = Form.getContainer(id);
                    item.innerHTML = '';
                }
            } else if (obj === 'template') {
                Form.setItemValue(id, '');
            }
        });

        if (Focus !== undefined)
            Form.setItemFocus(Focus);
    };

    this.LimpaFormulario = function (ClearContainer) {

        let Form = this.CurrentForm;
        Form.forEachItem(function (id) {
            let obj = Form.getItemType(id);
            if (obj === 'calendar') {
                Form.getCalendar(id).setDate(new Date());

            } else if (obj === 'combo') {
                Form.getCombo(id).setComboValue(null);

            } else if (obj === 'checkbox') {
                Form.uncheckItem(id);

            } else if (obj === 'input') {
                Form.setItemValue(id, '');

            } else if (obj === 'container') {
                if (ClearContainer === true) {
                    let item = Form.getContainer(id);
                    item.innerHTML = '';
                }
            } else if (obj === 'template') {
                Form.setItemValue(id, '');
            }
        });
    };

    this.obtemDataEntradaFormatada = function (filedate) {

        let arrayMes = new Array(12);
        arrayMes[0] = "01";
        arrayMes[1] = "02";
        arrayMes[2] = "03";
        arrayMes[3] = "04";
        arrayMes[4] = "05";
        arrayMes[5] = "06";
        arrayMes[6] = "07";
        arrayMes[7] = "08";
        arrayMes[8] = "09";
        arrayMes[9] = "10";
        arrayMes[10] = "11";
        arrayMes[11] = "12";

        let dataAtual = new Date(filedate);
        let dia = dataAtual.getDate();
        let mes = arrayMes[dataAtual.getMonth()];
        let ano = dataAtual.getFullYear();
        return dia + '/' + mes + '/' + ano;

    };

    this.FormLoad = function (Form, http, foto) {

        let out;
        out = JSON.parse(http.responseText);

        let itens = out[0];
        if (itens === undefined)
            return;

        for (let key in itens)
            if (itens.hasOwnProperty(key))
                Form.setItemValue(key, itens[key]);

        if (itens.foto1 !== undefined && foto !== undefined) {
            let fotocadastro = Form.getContainer(foto);
            fotocadastro.innerHTML = '';

            if (itens.foto1 !== null) {
                if (itens.foto1.length > 0) {
                    fotocadastro.innerHTML = '<img style="width: 120px;" alt="" src="' + itens.foto1 + '">';
                } else {

                }
            }
        }
    };

    /**
     * Transforma os parametros enviados na string URL + Parametros para envio ao servidor
     * @param parametros
     * @returns {string}
     * @param ignoretarget
     */
    this.setParameters = function (parametros, ignoretarget) {
        let result = '';
        for (let key in parametros)
            if (parametros.hasOwnProperty(key))
                result += key + '=' + parametros[key] + '&';

        return (ignoretarget === undefined) ? this.Server + result.substring(0, result.length - 1) : result.substring(0, result.length - 1);
    };

    this.mergeAttributes = function (obj1, obj2) {
        let obj3 = {};
        for (let attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }

        for (let attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    };

    this.wordToHex = function (lValue) {
        let wordToHexValue = "", wordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            wordToHexValue_temp = "0" + lByte.toString(16);

            if (wordToHexValue.length === 4)
                break;

            wordToHexValue = wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2) + wordToHexValue;
        }

        return wordToHexValue;
    };

    this.OpenInNewTab = function(url) {
        let win = window.open(url, '_blank');
        win.focus();
    };

    /**
     * Configura as opcoes disponiveis dentro do formulario conforme o perfil do usuario
     * @param Recurso
     * @param Campos
     */
    this.configuraOpcoesDisponiveisdoPerfil = function (Recurso, Campos) {

        let userprofile = JSON.parse(sessionStorage.perfil_usuario);
        let opcaodoformulario;
        for (let i = 0; i < userprofile.length; i++)
            if (userprofile[i].nome_recurso === Recurso) {
                opcaodoformulario = userprofile[i];
                break;
            }

        if (opcaodoformulario === undefined)
            return;

        if (opcaodoformulario.adicionar === 0)
            this.CurrentForm.hideItem('novo');

        if (opcaodoformulario.editar === 0)
            this.CurrentForm.hideItem('salvar');

        if (opcaodoformulario.remover === 0)
            this.CurrentForm.hideItem('remover');

        if (opcaodoformulario.documentos === 0)
            for (let j = 0; j < Campos.length; j++)
                this.CurrentForm.hideItem(Campos[j]);

    };

    /**
     * Remove registro da tabela e retorna o resultado (CallBack)
     */
    this.removerRegistro = function () {

        parametrosparaEnvio = {
            contenttype: 'xml',
            action: 'delete',
            origem: this.CurrentTable,
            returnkey: 'num',
            condominio: unidadecorrente.condominio,
            bloco: unidadecorrente.bloco,
            andar: unidadecorrente.andar,
            unidade: unidadecorrente.pk_unidade
        };

        sys.FormAction(
            sys.setParameters(
                sys.mergeAttributes(parametrosparaEnvio, this.CurrentForm.getFormData())
            ), this.trataRetornodoServidor
        );

    };

    this.obterRegistros = function (grid, campos) {

        parametrosparaEnvio = {
            contenttype: 'xml',
            action: 'dhtmlxgrid',
            origem: this.CurrentTable,
            campos: campos,
            where: 'condominio/' + unidadecorrente.condominio +
                '|bloco/' + unidadecorrente.bloco +
                '|andar/' + unidadecorrente.andar +
                '|unidadecorrente/' + unidadecorrente.pk_unidade,
            orderby: 'num',
            usecheckbox: 'false',
            usedecimal: 'nome',
            chave: 'num',
            displaychave: 'false'
        };

        grid.loadXML(sys.setParameters(parametrosparaEnvio));

    };

    this.obterRegistro = function (registro, callback) {

        parametrosparaEnvio = {
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: this.CurrentTable,
            where: 'condominio/' + unidadecorrente.condominio +
                '|bloco/' + unidadecorrente.bloco +
                '|andar/' + unidadecorrente.andar +
                '|unidadecorrente/' + unidadecorrente.pk_unidade +
                '|num/' + registro,
            chave: 'num'
        };

        sys.FormAction(
            sys.setParameters(parametrosparaEnvio), callback
        );
    };

    this.salvaRegistro = function () {

        let today = new Date();
        let lastdate = today.format("yyyy-mm-dd");
        let lasttime = today.format("HH:MM:ss");
        let originalUserInfo = JSON.parse(sessionStorage.originalUserInfo);

        parametrosparaEnvio = {
            contenttype: 'xml',
            action: 'insert',
            origem: this.CurrentTable,
            returnkey: 'num',
            lastdate: lastdate,
            lasttime: lasttime,
            lastuser: originalUserInfo.uidins,
            condominio: unidadecorrente.condominio,
            bloco: unidadecorrente.bloco,
            andar: unidadecorrente.andar,
            unidade: unidadecorrente.pk_unidade
        };

        sys.FormAction(
            sys.setParameters(
                sys.mergeAttributes(parametrosparaEnvio, this.CurrentForm.getFormData())
            ), this.trataRetornodoServidor
        );

    };

    this.trataRetornodoServidor = function (http) {

        let matrixinformacoesservidor;
        matrixinformacoesservidor = JSON.parse(http.responseText);

        let mensagemalerta = 'Houve um erro ao enviar suas informações. Por favor tente mais tarde!';
        if (matrixinformacoesservidor.registro !== undefined && matrixinformacoesservidor.registro.length > 0)
            mensagemalerta = matrixinformacoesservidor.situacao;

        if (sys.PostServer !== undefined)
            for (let i = 0; i < sys.PostServer.length; i++)
                eval(sys.PostServer[i]);

        dhtmlx.message({
            type: 'alert',
            text: mensagemalerta
        });
    };

    this.formtoWindow = function (Titulo, Largura, Altura, Estrutura, Informacoes, foto, OcultarItens) {

        let windowID = 'windowView';
        let windowsformtoWindow;
        windowsformtoWindow = new dhtmlXWindows();
        windowView = windowsformtoWindow.createWindow(windowID, 0, 0, Largura, Altura);
        windowView.setText(Titulo);
        windowView.denyResize();
        windowView.centerOnScreen();
        windowView.button('park').hide();
        windowView.button('minmax1').hide();
        let formview = windowView.attachForm(Estrutura);

        this.FormLoad(formview, Informacoes, foto);

        if (OcultarItens !== undefined)
            for (let i = 0; i < OcultarItens.length; i++) {
                formview.hideItem(OcultarItens[i]);
                console.log(OcultarItens[i]);
            }

    };

    this.validaCPF = function (strCPF) {

        let Soma;
        let Resto;
        Soma = 0;

        if (strCPF === "00000000000" || strCPF === null || strCPF === undefined)
            return false;

        for (let i = 1; i <= 9; i++)
            Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11))
            Resto = 0;

        if (Resto !== parseInt(strCPF.substring(9, 10)))
            return false;

        Soma = 0;
        for (i = 1; i <= 10; i++)
            Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);

        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11))
            Resto = 0;

        return Resto === parseInt(strCPF.substring(10, 11));
    };

    this.idade = function (ano_aniversario, mes_aniversario, dia_aniversario) {

        let d = new Date;
        let quantos_anos;
        let ano_atual = d.getFullYear();
        let mes_atual = d.getMonth() + 1;
        let dia_atual = d.getDate();

        ano_aniversario = +ano_aniversario;
        mes_aniversario = +mes_aniversario;
        dia_aniversario = +dia_aniversario;

        quantos_anos = ano_atual - ano_aniversario;

        if (mes_atual < mes_aniversario || mes_atual === mes_aniversario && dia_atual < dia_aniversario)
            quantos_anos--;

        return quantos_anos < 0 ? 0 : quantos_anos;
    };

    this.mask = function(type, value) {

        if (type === 'cpf') {
            return VMasker.toPattern(value, '99999999999');

        } else if (type === 'rg') {
            return VMasker.toPattern(value, '99.999.999-9');

        } else if (type === 'cnpj') {
            return VMasker.toPattern(value, '99999999999999');

        } else if (type === 'data') {
            return VMasker.toPattern(value, '99/99/9999');

        } else if (type === 'hora') {
            return VMasker.toPattern(value, '99:99');

        } else if (type === 'cep') {
            return VMasker.toPattern(value, '99999-999');

        } else if (type === 'telefone') {
            return VMasker.toPattern(value, '(99) 9999-9999');

        } else if (type === 'celular') {
            return VMasker.toPattern(value, '(99) 9 9999-9999');

        } else if (type === 'placa') {
            return VMasker.toPattern(value, 'AAA-9999');

        }

    };
};