/**
 * Created by Oberdan on 08/06/14.
 */

var campos_manual = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", name: "titulo", value: "Cadastro passo a passo", style: "font-weight:bold; color: #003366;"},
    {type: "container", name: "espaco_manual", inputWidth: 800, inputHeight: 870},
    {type: "newcolumn"},
    { type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 280, list: [
            {type: "button", name: "finalizar", value: "2. Voltar ao menu principal"}
        ]}
    ]}
];