/**
 * Created by Oberdan on 08/06/14.
 */

var campos_visitantes = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", name: "titulo", value: "Cadastro de visitantes que podem entrar sem a presen&ccedil;a de um morador", style: "font-weight:bold; color: #003366;"},
	{type: "hidden", name: "num"},
	{type: "block", list: [
		{type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
			{type: "button", name: "novo", value: "1. Cadastrar novo"},
			{type: "newcolumn"},
			{type: "button", name: "salvar", value: "2. Salvar dados"},
			{type: "newcolumn"},
			{type: "button", name: "remover", value: "3. Apagar dados"}
		]}
	]},
    {type: "block", list: [
        {type: "fieldset", name: "info_geral", label: "Informa&ccedil;&otilde;es gerais do visitante", width: 955, list: [
            {type: "block", list: [
                {type: "input", name: "nome", label: "Nome completo", inputWidth: "260", style: "font-weight:bold;",
                    tooltip: "Forneça o nome completo do visitante para identificação",
                    required: true, info: true, note: {text: "Nome completo do visitante"}
                },
                {type: "newcolumn"},
                {type: "input", required: true, name: "rg", label: "Doc. de Identifica&ccedil;&atilde;o", inputWidth: "145", style: "font-weight:bold;", tooltip: "Informe o número de RG ou RNE ou passaporte", info: true
                },
                {type: "newcolumn"},
                {type: "input", name: "cpf", label: "CPF", inputWidth: "105", style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "telefone_res", label: "Tel. residencial", inputWidth: "105", style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "telefone_cel", label: "Tel. celular", inputWidth: "105", style: "font-weight:bold;"}
            ]}
        ]},
        {type: "fieldset", name: "opcoes", label: "Visitantes cadastrados", width: 955, list: [
            {type: "container", name: "gridvisitantes", inputWidth: 920, inputHeight: 160}
        ]}
    ]}
];