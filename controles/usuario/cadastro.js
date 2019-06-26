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
    windowAtualizarDadosUsuario.setText('Atualiza&ccedil;&atilde;o de Cadastro');
    windowAtualizarDadosUsuario.denyResize();
    windowAtualizarDadosUsuario.centerOnScreen();
    windowAtualizarDadosUsuario.button('park').hide();
    windowAtualizarDadosUsuario.button('minmax1').hide();

    var formCadastroUsuario = windowAtualizarDadosUsuario.attachForm(campos_cadastro);


    if (unidadecorrente !== undefined) {

        var formSourceCadastroUsuario;
        formSourceCadastroUsuario = {
            contenttype: 'xml',
            action: 'dhtmlxform',
            origem: 'portal.usuario_info',
            where: 'pk_unidade/' + unidadecorrente.unidade,
            chave: 'num'
        };

        formCadastroUsuario.load(sys.setParameters(formSourceCadastroUsuario), function() {
            var senha = base64_decode(formCadastroUsuario.getItemValue('lbsenha'));
            formCadastroUsuario.setItemValue('lbsenha', senha);
        });

    }


    formCadastroUsuario.attachEvent("onButtonClick", function (name) {

        formCadastroUsuario.validate();
        if (formCadastroUsuario.getItemValue('password') !== formCadastroUsuario.getItemValue('repassword')) {
            alert('A senha enviada n�o est� igual a sua confirma��o');
            return;
        }

        var formAuthSend = {
            contenttype: 'xml',
            action: 'update',
            origem: 'portal.usuario',
            where: 'pk_unidade/' + unidadecorrente.unidade,
            pk_unidade: unidadecorrente.unidade,
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
