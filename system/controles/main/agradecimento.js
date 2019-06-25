/**
 * Created by Oberdan on 06/06/14.
 */

var windowLogin;
function agradecimento() {

    var windowID = 'windowLogin';
    var windowsClientInfo;
    windowsClientInfo = new dhtmlXWindows();
    windowsClientInfo.setSkin('dhx_terrace');

    windowLogin = windowsClientInfo.createWindow(windowID, 0, 0, 600, 500);
    windowLogin.setText('Cadastro para novo usu&aacute;rio');
    windowLogin.denyResize();
    windowLogin.centerOnScreen();
    windowLogin.button('park').hide();
    windowLogin.button('minmax1').hide();
    windowLogin.button('close').hide();

    var formCadastroUsuario = windowLogin.attachForm(campos_agradecimento);

}