/**
 * Created by Oberdan on 06/06/14.
 */

var windowMeuUsuario;
function meusuaurio() {

    var windowID = 'windowMeuUsuario';
    var windowsMeuUsuarioInfo;
    windowsMeuUsuarioInfo = new dhtmlXWindows();
    windowsMeuUsuarioInfo.setSkin('dhx_terrace');
    sessionStorage.recursocorrente = 'meusuaurio()';
    windowMeuUsuario = windowsMeuUsuarioInfo.createWindow(windowID, 0, 0, 600, 500);
    windowMeuUsuario.setText('Meu usu&aacute;rio');
    windowMeuUsuario.denyResize();
    windowMeuUsuario.centerOnScreen();
    windowMeuUsuario.button('park').hide();
    windowMeuUsuario.button('minmax1').hide();

    var formMeuUsuario = windowMeuUsuario.attachForm(campos_meuusuario);
    var perfil = JSON.parse(sessionStorage.auth).user.perfil;

    var formSourceCadastroUsuario;
    formSourceCadastroUsuario = {
        contenttype: 'xml',
        action: 'dhtmlxform',
        origem: 'portal.usuario_info',
        where: 'condominio/' + userinfo.condominio +
            '|bloco/' + userinfo.bloco +
            '|andar/' + userinfo.andar +
            '|unidade/' + userinfo.unidade +
            '|num/' + userinfo.num,
        chave: 'num'
    };
    
    formMeuUsuario.load(sys.setParameters(formSourceCadastroUsuario), function() {
	    var senha = base64_decode(formMeuUsuario.getItemValue('lbsenha'));
	    formMeuUsuario.setItemValue('lbsenha', senha);
	    formMeuUsuario.setItemValue('nome_perfil', perfil[0].nome_perfil);
    });

    formMeuUsuario.attachEvent("onButtonClick", function (name) {

        formMeuUsuario.validate();
        if (formMeuUsuario.getItemValue('password') != formMeuUsuario.getItemValue('repassword')) {
            alert('A senha enviada não está igual a sua confirmação');
            return;
        }

        var formAuthSend = {
            contenttype: 'xml',
            action: 'update',
            origem: 'portal.usuario',
            where: 'condominio/' + userinfo.condominio +
                '|bloco/' + userinfo.bloco +
                '|andar/' + userinfo.andar +
                '|unidade/' + userinfo.unidade +
                '|num/' + userinfo.num,
            num: userinfo.num,
            login: formMeuUsuario.getItemValue('login'),
            password: base64_encode(formMeuUsuario.getItemValue('password'))
        };

        sys.FormAction(sys.setParameters(formAuthSend), ResultFormCadastroUsuario);
    });

}

function ResultFormCadastroUsuario(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.situacao != undefined && out.situacao.length > 0) {
        alert('Informação cadastrada com sucesso!');
        windowMeuUsuario.close();
    } else {
        alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
    }
}
