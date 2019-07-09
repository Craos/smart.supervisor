/**
 * Created by Oberdan on 06/06/14.
 */

var windowAlterarSenha;
function recuperasenha() {

    var windowID = 'windowAlterarSenha';
    var windowsClientInfo;
    windowsClientInfo = new dhtmlXWindows();
    windowsClientInfo.setSkin('dhx_terrace');

    windowAlterarSenha = windowsClientInfo.createWindow(windowID, 0, 0, 600, 500);
    windowAlterarSenha.setText('Recuperar meu usu&aacute;rio e senha');
    windowAlterarSenha.denyResize();
    windowAlterarSenha.centerOnScreen();
    windowAlterarSenha.button('park').hide();
    windowAlterarSenha.button('minmax1').hide();
    windowAlterarSenha.button('close').hide();

    var formRecuperaDados = windowAlterarSenha.attachForm(campos_recupera);
    formRecuperaDados.attachEvent("onButtonClick", function (name) {
       if (name == 'enviar') {
           formRecuperaDados.validate();
       } else if (name == 'finalizar') {
           windowAlterarSenha.close();
       }
    });

    formRecuperaDados.attachEvent("onAfterValidate", function (status) {
        if (status == false)
            return;

        var paramRecupera = {
            contenttype: 'xml',
            action: 'sendmail',
            origem: 'portal.usuario',
            smtpsubject:'Retorno de Senha do Morador',
            smtpmessage:'recupera_senha',
            where: 'email/' + formRecuperaDados.getItemValue('email')
        };

        sys.FormAction(sys.setParameters(paramRecupera), ResultFormRecupera
        );

    });

}

function ResultFormRecupera(http) {


}