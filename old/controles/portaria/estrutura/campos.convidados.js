/**
 * Created by Oberdan on 08/06/14.
 */

var campos_convidados = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", name: "titulo", value: "Lista de convidados", style: "font-weight:bold;"},
	{type: "hidden", name: "num"},
    { type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
            {type: "button", name: "localizar", value: "1. Localizar"},
            {type: "newcolumn"},
            {type: "button", name: "salvar", value: "2. Confirmar convidado"}
        ]}
    ]},
    {type: "block", list: [
        {type: "fieldset", name: "detalhes_evento", label: "Localizar convidado", width: 955, list: [
            {type: "block", list: [
                {type: "input", name: "localizar_nome", label: "Nome do convidado", inputWidth: 300, style: "font-weight:bold;",
                    tooltip: "Informe o primeiro nome do convidado.",  info: true, note: {text: "Informe o primeiro nome do visitante."}
                },
                {type: "newcolumn"},
                {type: "input", name: "localizar_rg", label: "Documento RG",  inputWidth: 100, style: "font-weight:bold;"}
            ]}
        ]}
    ]},
    {type: "block", list: [
        {type: "fieldset", name: "detalhes_convidado", label: "Detalhes do evento", width: 955, list: [
            {type: "block", list: [
                {type: "template", name: "evento", label: "Evento", inputWidth: 100, style: "color: #137DA1;"},
                {type: "newcolumn"},
                {type: "template", name: "data_evento", label: "Data", inputWidth: 100, style: "color: #137DA1;"},
                {type: "newcolumn"},
                {type: "template", name: "espaco", label: "Espaco", inputWidth: 400, style: "color: #137DA1;"},
                {type: "newcolumn"},
                {type: "template", name: "horario_inicio", label: "In&iacute;cio", inputWidth: 100, style: "color: #137DA1;"},
                {type: "newcolumn"},
                {type: "template", name: "horario_final", label: "Final", inputWidth: 100, style: "color: #137DA1;"}
            ]}
        ]},
        {type: "fieldset", name: "detalhes", label: "Detalhes do convidado", width: 955, list: [
            {type: "block", list: [
                {type: "template", name: "bloco", label: "Bloco", inputWidth: 100, style: "color: #137DA1;"},
                {type: "newcolumn"},
                {type: "template", name: "admunidade", label: "Unidade", inputWidth: 100, style: "color: #137DA1;"},
                {type: "newcolumn"},
                {type: "template", name: "nome", label: "Convidado",  inputWidth: 400, style: "color: #137DA1;"},
	            {type: "newcolumn"},
                {type: "template", name: "rg_original", label: "Documento RG",  inputWidth: 100, style: "color: #137DA1;"},
	            {type: "newcolumn"},
                {type: "template", name: "confirmado", label: "Confirmar entrada"}
            ]}
        ]}
    ]},
	{type: "block", list: [
		{type: "fieldset", name: "dados_convidados", label: "Lista de convidados do dia", inputHeight: 500, width: 955, list: [
			{type: "container", name: "gridhistoricoconvidados", inputWidth: 915, inputHeight: 480}
		]}
	]},
    {type: "hidden", name: "filedate"},
    {type: "hidden", name: "timerg"}
];