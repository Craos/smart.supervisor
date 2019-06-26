/**
 * Created by Oberdan on 06/06/14.
 */

var windowAtualizarDadosUsuario;
function cadastro() {

    var windowID = 'windowAtualizarDadosUsuario';
    var windowsClientInfo;
    windowsClientInfo = new dhtmlXWindows();
    windowsClientInfo.setSkin('dhx_terrace');
    sessionStorage.recursocorrente = 'cadastro()';
    windowAtualizarDadosUsuario = windowsClientInfo.createWindow(windowID, 0, 0, 600, 500);
    windowAtualizarDadosUsuario.setText('Configuração de conta do usuário');
    windowAtualizarDadosUsuario.denyResize();
    windowAtualizarDadosUsuario.centerOnScreen();
    windowAtualizarDadosUsuario.button('park').hide();
    windowAtualizarDadosUsuario.button('minmax1').hide();

    var formCadastroUsuario = windowAtualizarDadosUsuario.attachForm(campos_cadastro);

    if (admunidade !== undefined) {
        admunidade.Usuario(function (response) {
            formCadastroUsuario.setFormData(response);
        });
    }

    formCadastroUsuario.attachEvent("onButtonClick", function (name) {

        formCadastroUsuario.validate();
        if (formCadastroUsuario.getItemValue('password') !== formCadastroUsuario.getItemValue('repassword')) {
            alert('A senha informada não está igual a confirmação');
            return;
        }

        var formAuthSend = {
            contenttype: 'xml',
            action: 'update',
            origem: 'portal.usuario',
            where: 'pk_unidade/' + admunidade.unidade,
            pk_unidade: admunidade.unidade,
            login: formCadastroUsuario.getItemValue('login'),
            password: base64_encode(formCadastroUsuario.getItemValue('password'))
        };

        sys.FormAction(sys.setParameters(formAuthSend), ResultFormCadastroUsuario);
    });

}

function ResultFormCadastroUsuario(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.situacao !== undefined && out.situacao.length > 0) {
        alert('Informa��o cadastrada com sucesso!');
        windowAtualizarDadosUsuario.close();
    } else {
        alert('Houve um erro ao enviar suas informa��es. Por favor tente mais tarde!');
    }
}
