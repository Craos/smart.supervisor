/**
 * Created by oberd on 20/08/2015.
 */

var campos_modelo_email = [
    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "0", position: "label-top"},
    {type: "hidden", name: "num"},
    {type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 590, list: [
            {type: "button", name: "novo", value: "1. Cadastrar novo"},
            {type: "newcolumn"},
            {type: "button", name: "salvar", value: "2. Salvar"},
            {type: "newcolumn"},
            {type: "button", name: "remover", value: "3. Apagar"}
        ]}
    ]},
    {type: "block", list: [
        {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "6", position: "label-top"},
        {type: "combo", name: "modelo", required: true, label: "Nome do Modelo", inputWidth: 590, style: "font-weight:bold;"},
        {type: "input", name: "titulo", required: true, label: "Título", inputWidth: 585, style: "font-weight:bold;",
            tooltip: "Informe o assunto que se refere a mensagem", info: true, note: {text: "Informe o assunto que se refere a mensagem"}
        },
        {type: "input", name: "mensagem", required: true, label: "Texto da mensagem", rows:20, inputHeight:250, inputWidth: 585, style: "font-weight:bold;"}
    ]}
];