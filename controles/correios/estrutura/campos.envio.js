/**
 * Created by Oberdan on 08/06/14.
 */

var campos_correios = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", name: "titulo_pagina", value: "Envio de mensagens ao morador", style: "font-weight:bold; color: #003366;"},
	{type: "hidden", name: "num"},
	{type: "block", list: [
		{type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
			{type: "button", name: "novo", value: "1. Novo"},
			{type: "newcolumn"},
			{type: "button", name: "enviar", value: "2. Enviar"},
			{type: "newcolumn"},
			{type: "button", name: "modelos", value: "3. Modelos"}
		]}
	]},
    {type: "block", list: [
        {type: "fieldset", name: "info_geral", label: "Informa&ccedil;&otilde;es gerais para envio da mensagem", width: 955, list: [
            {type: "block", list: [
                {type: "container", name: "gridemails", inputHeight:160, inputWidth:450},
                {type: "newcolumn"},
                {type: "combo", name: "modelo", required: true, label: "Modelo", inputWidth: 450, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "titulo", required: true, label: "Título", inputWidth: 285, style: "font-weight:bold;",
                    tooltip: "Informe o assunto que se refere a mensagem", info: true, note: {text: "Informe o assunto que se refere a mensagem"}
                },
                {type: "newcolumn"},
                {type: "input", name: "codigo_rastreamento", label: "Código de rastreamento", inputWidth: 150, style: "font-weight:bold;"}
            ]},
            {type: "block", list: [
                {type: "input", name: "mensagem", required: true, label: "Texto da mensagem", rows:7, inputHeight:150, inputWidth: 900, style: "font-weight:bold;"}
            ]}
        ]},
        {type: "fieldset", name: "opcoes", label: "Histórico de mensagens", width: 955, list: [
            {type: "container", name: "gridcorreios", inputWidth: 920, inputHeight: 160}
        ]}
    ]}
];