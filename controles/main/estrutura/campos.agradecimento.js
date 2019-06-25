/**
 * Created by Oberdan on 08/06/14.
 */

var campos_agradecimento = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "10", position: "label-top"},
    { type: "block", list: [
        {type: "template", value: "Obrigado pelo seu cadastro!", position: "label-left", style: "font-weight:bold; color: #003366;"}
    ]},
    { type: "block", list: [
        {type: "template", value: "Suas informa&ccedil;&otilde;es foram cadastradas com sucesso. A partir de agora voc&ecirc; poder&aacute; utilizar nosso sistema para atualiza&ccedil;&atilde;o cadastral, registrar melhorias no condom&iacute;nio e reservar \n os espa&ccedil;os dispon&iacute;veis.", position: "label-left"}
    ]},
    { type: "block", list: [
        {type: "template", offsetTop: "40", value: "Uma mensagem de confirma&ccedil;&atilde;o foi enviada para o seu e-mail. Por favor verifique sua caixa de mensagem. Caso n&atilde;o seja encontrada nenhuma informa&ccedil;&atilde;o a respeito deste cadastro, verifique as regras e Span do seu e-mail. Caso deseje receber novamente a mensagem de confirma&ccedil;&atilde;o, aperte na op&ccedil;&atilde;o (Enviar o e-mail de confirma&ccedil;&atilde;o novamente)", position: "label-left"}
    ]},
    { type: "block", list: [
        { type: "button", name: "acesso", offsetTop: "60", value: "Enviar o e-mail de confirma&ccedil;&atilde;o novamente"}
    ]},
    { type: "block", list: [
        { type: "button", name: "acesso", offsetTop: "180", offsetLeft: "100", value: "Finalizar"}
    ]},
    { type: "hidden", name: "action", value: "login"}
];