/**
 * Created by Oberdan on 06/06/14.
 */
var gridCorreios;
var gridEmails;
var formCorreios;
var combomodelos;
function correios() {

    var paramCorreios;
    sessionStorage.recursocorrente = 'correios()';
    formCorreios = nav_layout_principal.attachForm(campos_correios);

    var userprofile = JSON.parse(sessionStorage.auth).user.perfil;
    var perfil_corrente;
    for (var i = 0; i < userprofile.length; i++)
        if (userprofile[i].nome_recurso == 'correios') {
            perfil_corrente = userprofile[i];
            break;
        }

    if (perfil_corrente.adicionar == 0)
        formCorreios.hideItem('novo');

    if (perfil_corrente.editar == 0)
        formCorreios.hideItem('salvar');

    if (perfil_corrente.remover == 0)
        formCorreios.hideItem('remover');

    if (perfil_corrente.telefones == 0) {
        formCorreios.hideItem('telefone_res');
        formCorreios.hideItem('telefone_cel');
    }

    if (perfil_corrente.documentos == 0)
        formCorreios.hideItem('cpf');

    formCorreios.attachEvent("onButtonClick", function (name) {

        if (name == 'novo') {
            sys.FormClear(formCorreios);
            formCorreios.setFormData({num:null});

        } else if (name == 'enviar') {
            formCorreios.validate();

        } else if (name == 'modelos') {
            modelos_emails();

        }
    });

    formCorreios.attachEvent("onAfterValidate", function (status) {
        if (status == false)
            return;

        var today = new Date();
        var destinatarios = '';

        gridEmails.forEachRow(function(id){
            if (gridEmails.cells(id,0).getValue() == 1)
                destinatarios += gridEmails.cells(id,2).getValue() + ',';
        });

        paramCorreios = {
            contenttype: 'xml',
            action: 'insert',
            origem: 'condominio.mensagens',
            returnkey: 'num',
            condominio: admunidade.condominio,
            bloco: admunidade.bloco,
            andar: admunidade.andar,
            unidade: admunidade.pk_unidade,
            destinatarios: destinatarios.substring(0, destinatarios.length-1),
            lastdate: today.format("yyyy-mm-dd"),
            lasttime: today.format("HH:MM:ss"),
            lastuser: informacoesdousuario.uidins
        };

        sys.FormAction(
            sys.setParameters(
                sys.mergeAttributes(paramCorreios, formCorreios.getFormData())
            ), ResultFormCorreios
        );
    });

    combomodelos = formCorreios.getCombo('modelo');
    combomodelos.attachEvent('onSelectionChange', function(value, text) {

        var formSourceCorreios;
        formSourceCorreios = {
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: 'condominio.emails',
            where: 'num/' + combomodelos.getSelectedValue()
        };

        sys.FormAction(
            sys.setParameters(formSourceCorreios), LoadFormFromModelo
        );

    });

    gridCorreios = new dhtmlXGridObject(formCorreios.getContainer("gridcorreios"));
    gridCorreios.setIconsPath('./codebase/imgs/');
    gridCorreios.init();
    gridCorreios.attachEvent('onRowSelect', function (id) {

        var formSourceCorreios;
        formSourceCorreios = {
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: 'condominio.mensagens',
            where: 'condominio/' + admunidade.condominio +
                '|bloco/' + admunidade.bloco +
                '|andar/' + admunidade.andar +
                '|admunidade/' + admunidade.pk_unidade +
                '|num/' + id,
            chave: 'num'
        };

        sys.FormAction(
            sys.setParameters(formSourceCorreios), LoadFormCorreios
        );

    });
    gridLoadCorreios();

    gridEmails = new dhtmlXGridObject(formCorreios.getContainer("gridemails"));
    gridEmails.setIconsPath('./codebase/imgs/');
    gridEmails.init();
    gridLoadEmails();

    refreshcomboEnvioEmail();
}

function refreshcomboEnvioEmail() {
    var bindcombomodelos = {
        parametros: true,
        contenttype: 'xml',
        action: 'select_combo',
        grava_sessao: 'true',
        nome_sessao: 'combo_modelos_mensagens',
        orderby: 'num',
        campos: 'num, modelo as tipo',
        origem: 'condominio.emails'
    };

    sys.FormAction(sys.setParameters(bindcombomodelos), ResultBindcomboModelos);
}

function ResultBindcomboModelos(http) {
    var modelos = formCorreios.getCombo('modelo');
    modelos.loadXMLString(http.responseText);
}

function ResultFormCorreios(http) {

    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.registro != undefined && out.registro.length > 0) {

        var paramRecupera = {
            contenttype: 'xml',
            action: 'sendnotice',
            origem: 'condominio.mensagens',
            smtpmessage:'envio_correios',
            where: 'num/' + out.registro
        };

        sys.FormAction(sys.setParameters(paramRecupera), ResultFormRecupera
        );

    } else {

        alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');

    }
}

function ResultFormRecupera(http) {

    if (http.responseText.indexOf("Mailer Error")>0) {
        dhtmlx.message({
            type:"alert-error",
            text:"Não foi possível enviar a mensagem, devido um erro de conexão do servidor SMTP."
        });
    } else if (http.responseText.indexOf("Enviada com sucesso")>0) {
        dhtmlx.message({
            type:"alert-error",
            text:"Mensagem enviada com sucesso"
        });
    }


    //gridLoadCorreios();
    //sys.FormClear(formCorreios);


}


function LoadFormCorreios(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formCorreios.setItemValue(key,  itens[key]);
}

function LoadFormFromModelo(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            if (key != 'modelo' && key != 'num')
                formCorreios.setItemValue(key, itens[key]);
}

function gridLoadCorreios() {

    if (admunidade === undefined)
        return;

    var gridSourceCorreios;
    gridSourceCorreios = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        origem: 'condominio.listagem_emails_enviados',
        campos: 'registro, titulo, codigo_rastreamento as "Código de rastreamento", destinatarios as "Destinatários"',
        where: 'condominio/' + admunidade.condominio +
            '|bloco/' + admunidade.bloco +
            '|andar/' + admunidade.andar +
            '|admunidade/' + admunidade.pk_unidade,
        orderby:'num desc',
        usecheckbox: 'false',
        usedecimal:'num',
        chave: 'num',
        displaychave: 'false'
    };

    gridCorreios.loadXML(sys.setParameters(gridSourceCorreios));
}

function gridLoadEmails() {

    if (admunidade === undefined)
        return;

    var gridSourceEmails;
    gridSourceEmails = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        campos: 'num as "Tipo de email", tipo as "Email", email as "   "',
        origem: 'condominio.lista_emails_unidade',
        where: 'condominio/' + admunidade.condominio +
            '|bloco/' + admunidade.bloco +
            '|admunidade/' + admunidade.unidade,
        usecheckbox: 'true',
        chave: 'num',
        displaychave: 'false'
    };

    gridEmails.loadXML(sys.setParameters(gridSourceEmails));
}