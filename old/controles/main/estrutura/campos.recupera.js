/**
 * Created by Oberdan on 08/06/14.
 */

var campos_recupera = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "10", position: "label-top"},
    { type: "block", list: [
        {type: "template", value: "Recuperar o meu usu&aacute;rio e senha!", position: "label-left", style: "font-weight:bold; color: #003366;"}
    ]},
    { type: "block", list: [
        {type: "template", value: "Informe o mesmo endere&ccedil;o de e-mail em que voc&ecirc; recebeu seu usu&aacute;rio e senha", position: "label-left"}
    ]},
    { type: "block", list: [
        { type: "input", name: "email", required: true, label: "Endere&ccedil;o de e-mail", inputWidth: "400", style: "font-weight:bold;"}
    ]},
    { type: "block", list: [
        { type: "button", name: "enviar", offsetTop: "60", value: "Enviar meu usu&aacute;rio e senha novamente"}
    ]},
    { type: "block", list: [
        { type: "button", name: "finalizar", offsetTop: "180", offsetLeft: "100", value: "Cancelar"}
    ]},
    { type: "hidden", name: "action", value: "login"}
];