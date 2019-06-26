/**
 * Created by Oberdan on 06/06/14.
 */

var windowAtualizarDadosUsuario;
function unidade_usuario() {

    let windowID = 'windowAtualizarDadosUsuario';
    let windowsClientInfo;
    windowsClientInfo = new dhtmlXWindows();
    windowsClientInfo.setSkin('dhx_terrace');
    sessionStorage.recursocorrente = 'unidade_usuario';
    windowAtualizarDadosUsuario = windowsClientInfo.createWindow(windowID, 0, 0, 600, 500);
    windowAtualizarDadosUsuario.setText('Configuração de conta do usuário');
    windowAtualizarDadosUsuario.denyResize();
    windowAtualizarDadosUsuario.centerOnScreen();
    windowAtualizarDadosUsuario.button('park').hide();
    windowAtualizarDadosUsuario.button('minmax1').hide();

    windowAtualizarDadosUsuario.attachEvent("onClose", function(){
        sessionStorage.recursocorrente = undefined;
        return true;
    });

    let formCadastroUsuario = windowAtualizarDadosUsuario.attachForm(campos_cadastro);

    if (admunidade !== undefined) {
        admunidade.usuario.Obter(function (response) {
            formCadastroUsuario.setFormData(response);
        });
    }

    formCadastroUsuario.attachEvent("onButtonClick", function () {

        if (formCadastroUsuario.getItemValue('password') !== formCadastroUsuario.getItemValue('repassword')) {
            alert('A senha informada não está igual a confirmação');
            return;
        }

        formCadastroUsuario.validate();

    });

    formCadastroUsuario.attachEvent("onAfterValidate", function (status) {

        if (status === false || admunidade === undefined)
            return;

        let data = formCadastroUsuario.getFormData();
        delete data.repassword;
        delete data.lbsenha;
        delete data.acesso;
        delete data.cliente;
        delete data.equipe;
        delete data.tecnico_suporte;


        let today = new Date();
        data.lastdate = today.format("yyyy-mm-dd");
        data.lasttime = today.format("HH:MM:ss");
        data.password = base64_encode(data.password);
        data.lastuser = JSON.parse(sessionStorage.auth).user.login;

        admunidade.usuario.Editar(data, function (response) {
            alert('Informações alteradas com sucesso!');
            windowAtualizarDadosUsuario.close();
        });

    })

}