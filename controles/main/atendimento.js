/**
 * Created by Oberdan on 06/06/14.
 */

var windowCentralAtendimento;
function atendimento() {

    var windowID = 'windowCentralAtendimento';
    var windowsClientInfo;
    windowsClientInfo = new dhtmlXWindows();
    windowsClientInfo.setSkin('dhx_terrace');

    windowCentralAtendimento = windowsClientInfo.createWindow(windowID, 0, 0, 600, 500);
    windowCentralAtendimento.setText('Central de Atendimento');
    windowCentralAtendimento.denyResize();
    windowCentralAtendimento.centerOnScreen();
    windowCentralAtendimento.button('park').hide();
    windowCentralAtendimento.button('minmax1').hide();

    var formCadastroUsuario = windowCentralAtendimento.attachForm(campos_cadastro);

    var formSourceCadastroUsuario;
    formSourceCadastroUsuario = {
        contenttype: 'xml',
        action: 'dhtmlxform',
        origem: 'portal.usuario',
        where: 'condominio/' + userinfo.condominio +
            '|bloco/' + userinfo.bloco +
            '|andar/' + userinfo.andar +
            '|unidade/' + userinfo.unidade +
            '|num/' + userinfo.num,
        chave: 'num'
    };
    formCadastroUsuario.load(sys.setParameters(formSourceCadastroUsuario));

    formCadastroUsuario.attachEvent("onButtonClick", function (name) {

        formCadastroUsuario.validate();
        if (formCadastroUsuario.getItemValue('password') != formCadastroUsuario.getItemValue('repassword')) {
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
            login: formCadastroUsuario.getItemValue('login'),
            password: base64_encode(formCadastroUsuario.getItemValue('password'))
        };

        sys.FormAction(sys.setParameters(formAuthSend), ResultFormCentralAtendimento);
    });

}

function ResultFormCentralAtendimento(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.situacao != undefined && out.situacao.length > 0) {
        alert('Informação enviada com sucesso!');
        windowCentralAtendimento.close();
    } else {
        alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
    }
}
