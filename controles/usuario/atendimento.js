/**
 * Created by Oberdan on 06/06/14.
 */

var windowAtualizarDadosAtendimento;
var formCadastroAtendimento;
function atendimento() {

    var windowID = 'windowAtualizarDadosAtendimento';
    var windowsClientInfo;
    windowsClientInfo = new dhtmlXWindows();
    windowsClientInfo.setSkin('dhx_terrace');
    sessionStorage.recursocorrente = 'atendimento()';

    windowAtualizarDadosAtendimento = windowsClientInfo.createWindow(windowID, 0, 0, 800, 500);
    windowAtualizarDadosAtendimento.setText('Registro de solicita&ccedil;&atilde;o');
    windowAtualizarDadosAtendimento.denyResize();
    windowAtualizarDadosAtendimento.centerOnScreen();
    windowAtualizarDadosAtendimento.button('park').hide();
    windowAtualizarDadosAtendimento.button('minmax1').hide();

    formCadastroAtendimento = windowAtualizarDadosAtendimento.attachForm(campos_atendimento);
    formCadastroAtendimento.attachEvent("onButtonClick", function (name) {

        formCadastroAtendimento.validate();

        var formAtendimentoSend = {
            contenttype: 'xml',
            action: 'insert',
            origem: 'portal.atendimento',
            condominio: admunidade.condominio,
            bloco: admunidade.bloco,
            andar: admunidade.andar,
            unidade: admunidade.unidade,
            assunto: formCadastroAtendimento.getItemValue('assunto'),
            solicitacao: formCadastroAtendimento.getItemValue('solicitacao')
        };

        sys.FormAction(sys.setParameters(formAtendimentoSend), ResultFormCadastroAtendimento);
    });

}

function ResultFormCadastroAtendimento(http) {
    var out;

    out = JSON.parse(http.responseText);

    if (out.situacao.indexOf('sucesso') > 0) {

        var paramSendSolicitacao = {
            contenttype: 'xml',
            action: 'sendmail',
            origem: 'portal.usuario',
            smtpsubject: 'Registro de Atendimento',
            smtpmessage: 'antendimento',
            assunto: formCadastroAtendimento.getItemValue('assunto'),
            solicitacao: formCadastroAtendimento.getItemValue('solicitacao'),
            where: 'email/' + admunidade.email
        };

        sys.FormAction(sys.setParameters(paramSendSolicitacao), resultemailAtendimento);

    } else {
        alert('Houve um erro ao enviar suas informa��es. Por favor tente mais tarde!');
    }
}

function resultemailAtendimento(http) {

    alert('Informa��o envaiada com sucesso!');
    windowAtualizarDadosAtendimento.close();

}