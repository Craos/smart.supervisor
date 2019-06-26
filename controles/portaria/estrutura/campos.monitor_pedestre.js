/**
 * Created by Morador on 08/06/14.
 */

var campos_monitor_pedestre = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    { type: "block", list: [
        {type: "template", name: "entrada", value: "Entrada", style: "font-weight:bold; border: 0;"},
        { type: "block", list: [
            {type: "container", name: "foto_morador_entrada", inputWidth: 420, inputHeight: 200},
            { type: "block", list: [
                {type: "input", name: "nome_entrada", label: "Nome", inputWidth: 350, style: "font-weight:bold;"},
	            {type: "newcolumn"},
	            {type: "input", name: "bloco_entrada", label: "Bloco", inputWidth: 100, style: "font-weight:bold;"},
	            {type: "newcolumn"},
	            {type: "input", name: "unidade_entrada", label: "Unidade", inputWidth: 100, style: "font-weight:bold;"}
            ]}
        ]},
	    {type: "newcolumn"},
	    {type: "template", name: "saida", value: "Saida", style: "font-weight:bold; border: 0;"},
	    { type: "block", list: [
            {type: "container", name: "foto_morador_saida", inputWidth: 420, inputHeight: 200},
            { type: "block", list: [
                {type: "input", name: "nome_saida", label: "Nome", inputWidth: 350, style: "font-weight:bold;"},
	            {type: "newcolumn"},
	            {type: "input", name: "bloco_saida", label: "Bloco", inputWidth: 100, style: "font-weight:bold;"},
	            {type: "newcolumn"},
	            {type: "input", name: "unidade_saida", label: "Unidade", inputWidth: 100, style: "font-weight:bold;"}
            ]}
        ]}
    ]}
];

/*
var campos_monitor_pedestre = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    { type: "block", list: [
        {type: "template", name: "titulo", value: "Monitor de acessos", style: "font-weight:bold; border: 0;"},
        { type: "block", list: [
            {type: "fieldset", name: "opcoes", label: "Informa&ccedil;&otilde;es gerais do morador", width: 800, list: [
                {type: "fieldset", name: "foto", label: "Identifica��o",  width: 210, height: 190, list: [
                    {type: "container", name: "foto_morador", inputWidth: 200, inputHeight: 160}
                ]},
                {type: "newcolumn"},
                { type: "block", list: [
                    {type: "input", name: "nome", label: "Nome", inputWidth: 350, style: "font-weight:bold;", note: {text: "Nome completo do morador"}},
                    {type: "newcolumn"},
                    {type: "input", name: "local", label: "Local", inputWidth: 170, style: "font-weight:bold;", note: {text: "Local de passagem utilizada"}}
                ]},
                { type: "block", list: [
                    {type: "input", name: "bloco", label: "Torre/Bloco", inputWidth: 125, style: "font-weight:bold;", note: {text: "Local de moradia"}},
                    {type: "newcolumn"},
                    {type: "input", name: "unidadecorrente", label: "Unidade", inputWidth: 125, style: "font-weight:bold;", note: {text: "Numero do apartamento"}},
                    {type: "newcolumn"},
                    {type: "input", name: "sentido", label: "Sentido", inputWidth: 125, style: "font-weight:bold;", note: {text: "Sentido de passagem"}},
                    {type: "newcolumn"},
                    {type: "input", name: "porta", label: "Porta", inputWidth: 125, style: "font-weight:bold;", note: {text: "Porta utilizada"}}
                ]},
                { type: "block", list: [
                    {type: "input", name: "situacao", label: "Situa��o", inputWidth: 300, style: "font-weight:bold; color: red;", note: {text: "Motivo para libera��o ou paraliza��o da porta"}},
                    {type: "newcolumn"},
                    {type: "input", name: "datahora", label: "Data/Hor�rio", inputWidth: 220, style: "font-weight:bold;", note: {text: "Registro do dia e hor�rio da passagem"}}
                ]}
            ]}
        ]},
        { type: "block", list: [
            {type: "fieldset", name: "opcoes", label: "Acessos anteriores", width: 800, list: [
                {type: "fieldset", name: "foto1", label: "Morador", width: 180, list: [
                    {type: "container", name: "foto_morador1", inputWidth: 110, inputHeight: 110},
                    {type: "label", name:"torre_unidade1", label: "Torre/Unidade"}
                ]},
                {type: "newcolumn"},
                {type: "fieldset", name: "foto2", offsetLeft: "10", label: "Morador", width: 180, list: [
                    {type: "container", name: "foto_morador2", inputWidth: 110, inputHeight: 110},
                    {type: "label", name:"torre_unidade2", label: "Torre/Unidade"}
                ]},
                {type: "newcolumn"},
                {type: "fieldset", name: "foto3", offsetLeft: "10", label: "Morador", width: 180, list: [
                    {type: "container", name: "foto_morador3", inputWidth: 110, inputHeight: 110},
                    {type: "label", name:"torre_unidade3", label: "Torre/Unidade"}
                ]},
                {type: "newcolumn"},
                {type: "fieldset", name: "foto4", offsetLeft: "10", label: "Morador", width: 180, list: [
                    {type: "container", name: "foto_morador4", inputWidth: 110, inputHeight: 110},
                    {type: "label", name:"torre_unidade4", label: "Torre/Unidade"}
                ]}
            ]}
        ]}
    ]},
    {type: "newcolumn"},
    { type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 280, list: [
            {type: "combo", name: "selecao_local", label: "Selecionar Local", inputWidth: "250", style: "font-weight:bold;", required: true, options: [
                {value: "", text: "Selecione", selected: true},
                {value: "1", text: "Portaria 1"},
                {value: "2", text: "Portaria 2"},
                {value: "3", text: "Portaria 3"},
                {value: "4", text: "Garagem"},
                {value: "5", text: "Piscina Aberta"},
                {value: "6", text: "Piscina Coberta"},
                {value: "7", text: "Academia"}
            ]},
            {type: "button", name: "filtrar", value: "1. Selecionar os acessos pelo local"},
            {type: "button", name: "finalizar", value: "2. Finalizar este cadastro"}
        ]},
        {type: "fieldset", name: "instrucoes", label: "Instru&ccedil;&otilde;es", width: 280, list: [
            { type: "block", list: [
                {type: "template", name: "texto_instrucoes1", value: 'Cadastre primeiro o morador respons�vel pela unidadecorrente, desconsiderando o campo "Parentesco�, e feche esse cadastro clicando em "Salvar dados do morador�.', style: "color: #137da1; height: 80px;"},
                {type: "template", name: "texto_instrucoes2", value: 'Para todos os demais moradores, clique em "Cadastrar novo morador� e continue preenchendo e salvando, de modo que todos apare�am no bloco "Moradores cadastrados da unidadecorrente�.', style: "color: #137da1; height: 100px;"},
                {type: "template", name: "texto_instrucoes3", value: 'Depois do cadastro de todos os moradores da unidadecorrente, clique em "Finalizar este cadastro�, para passar para outra p�gina.', style: "color: #137da1; height: 70px;"}
            ]}
        ]}
    ]},
    {type: "hidden", name: "filedate"},
    {type: "hidden", name: "timerg"}
];*/
