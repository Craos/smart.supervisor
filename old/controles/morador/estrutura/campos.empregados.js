/**
 * Created by Oberdan on 08/06/14.
 */

var campos_empregados = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", name: "titulo", value: "Cadastro de todos os funcion&aacute;rios da admunidade", style: "font-weight:bold; color: #003366;"},
	{type: "hidden", name: "num"},
	{ type: "block", list: [
		{type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
			{type: "button", name: "novo", value: "1. Cadastrar novo funcion&aacute;rio"},
			{type: "newcolumn"},
			{type: "button", name: "salvar", value: "2. Salvar dados do funcion&aacute;rio"},
			{type: "newcolumn"},
			{type: "button", name: "remover", value: "3. Apagar dados do funcion&aacute;rio"}
		]}
	]},
    { type: "block", list: [
        {type: "fieldset", name: "info_geral", label: "Informa&ccedil;&otilde;es gerais do funcion&aacute;rio", width: 955, list: [
            {type: "block", list: [
                {type: "input", name: "nome", label: "Nome completo", inputWidth: "280", style: "font-weight:bold;",
                    tooltip: "Forneça o nome completo do funcionário para identificação na portaria",
                    required: true, info: true, note: {text: "Nome completo do funcion&aacute;rio"}
                },
                {type: "newcolumn"},
                {type: "input", name: "servico_prestado", label: "Descri&ccedil;&atilde;o dos servi&ccedil;os prestados", inputWidth: "460", style: "font-weight:bold;"}
            ]}
        ]},
        {type: "fieldset", name: "info_endereco", label: "Informa&ccedil;&otilde;es gerais", width: 955, list: [
            {type: "block", list: [
                {type: "input", name: "rg", label: "RG", inputWidth: "160", style: "font-weight:bold;", required: true},
                {type: "newcolumn"},
                {type: "input", name: "cpf", label: "CPF", inputWidth: "160", style: "font-weight:bold;", required: true},
                {type: "newcolumn"},
                {type: "input", name: "telefone_cel", label: "Telefone Celular", inputWidth: "140", style: "font-weight:bold;"}
            ]},
            {type: "block", list: [
            ]}
        ]},
        {type: "fieldset", name: "opcoes", label: "Funcion&aacute;rios cadastrados", width: 955, list: [
            {type: "container", name: "gridempregados", inputWidth: 920, inputHeight: 160}
        ]}
    ]}
];