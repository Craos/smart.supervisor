/**
 * Created by oberd on 20/08/2015.
 */

var windowModeloEmail;
var formModeloEmail;
var combomodelos;

function modelos_emails() {

    var windowsClientInfo;
    windowsClientInfo = new dhtmlXWindows();
    windowsClientInfo.setSkin('dhx_terrace');

    var titulo = 'Modelos para envio';
    var windowID = 'windowAtualizarModelosEmails';

    windowModeloEmail = windowsClientInfo.createWindow(windowID, 0, 0, 650, 550);
    windowModeloEmail.setText(titulo);
    windowModeloEmail.denyResize();
    windowModeloEmail.centerOnScreen();
    windowModeloEmail.button('park').hide();
    windowModeloEmail.button('minmax1').hide();

    formModeloEmail = windowModeloEmail.attachForm(campos_modelo_email);

    formModeloEmail.attachEvent("onButtonClick", function (name) {

        if (name == 'novo') {
            sys.FormClear(formModeloEmail);
            formModeloEmail.setFormData({num:null});

        } else if (name == 'salvar') {
            formModeloEmail.validate();

        } else if (name == 'remover') {

            if (formModeloEmail.getItemValue('num') == '')
                return;

            dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {
                if (result == true) {

                    var paramModelo = {
                        contenttype: 'xml',
                        action: 'delete',
                        origem: 'condominio.emails',
                        returnkey: 'num',
                        num: formModeloEmail.getItemValue('num')
                    };

                    sys.FormAction(
                        sys.setParameters(
                            sys.mergeAttributes(paramModelo, formModeloEmail.getFormData())
                        ), ResultFormModelo
                    );
                }
            });
        }
    });

    formModeloEmail.attachEvent("onAfterValidate", function (status) {
        if (status == false)
            return;

        var today = new Date();

        var paramModelo = {
            contenttype: 'xml',
            action: 'insert',
            origem: 'condominio.emails',
            returnkey: 'num',
            lastdate: today.format("yyyy-mm-dd"),
            lasttime: today.format("HH:MM:ss"),
            lastuser: informacoesdousuario.uidins
        };

        sys.FormAction(
            sys.setParameters(
                sys.mergeAttributes(paramModelo, formModeloEmail.getFormData())
            ), ResultFormModelo
        );
    });

    combomodelos = formModeloEmail.getCombo('modelo');
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
            sys.setParameters(formSourceCorreios), LoadFormModeloEmail
        );

    });
    refreshcombomodelo();

}

function refreshcombomodelo() {
    var bindcombomodelos = {
        parametros: true,
        contenttype: 'xml',
        action: 'select_combo',
        grava_sessao: 'true',
        nome_sessao: 'combo_modelos_emails',
        orderby: 'num',
        campos: 'num, modelo as tipo',
        origem: 'condominio.emails'
    };

    sys.FormAction(sys.setParameters(bindcombomodelos), ResultBindcomboModelosEmail);
}

function ResultBindcomboModelosEmail(http) {
    var modelos = formModeloEmail.getCombo('modelo');
    modelos.loadXMLString(http.responseText);
}

function LoadFormModeloEmail(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formModeloEmail.setItemValue(key,  itens[key]);
}

function ResultFormModelo(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.registro != undefined && out.registro.length > 0) {
        sys.FormClear(formModeloEmail);
        refreshcomboEnvioEmail();
        refreshcombomodelo();
        alert(out.situacao);
    } else {
        alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
    }
}
