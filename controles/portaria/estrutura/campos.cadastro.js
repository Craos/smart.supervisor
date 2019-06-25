/**
 * Created by Oberdan on 08/06/14.
 */

var campos_cadastro_portaria = [
	{ type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
	{type: "template", name: "titulo", value: "Cadastro de todos os cadastro da unidade", style: "font-weight:bold; border: 0;"},
	{type: "block", list: [
		{ type: "block", list: [
			{type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 755, list: [
				{type: "button", name: "novo", value: "1. Cadastrar"},
				{type: "newcolumn"},
				{type: "button", name: "salvar", value: "2. Salvar"},
				{type: "newcolumn"},
				{type: "button", name: "remover", value: "3. Apagar"}
			]}
		]},
		{ type: "block", list: [
			{ type: "block", list: [
				{type: "fieldset", name: "foto", label: "Identifica&ccedil;&atilde;o", width: 140, list: [
					{type: "container", name: "foto_cadastro", inputWidth: 120, inputHeight: 120},
					{type: "button", name: "fotocadastro", value: "Obter foto", width: 120}
				]},
				{type: "newcolumn"},
				{type: "fieldset", name: "opcoes", label: "Informa&ccedil;&otilde;es gerais do cadastro", width: 600, list: [
					{ type: "block", list: [
						{type: "input", name: "nome", label: "Nome completo", inputWidth: 250, style: "font-weight:bold;", tooltip: "Informe o nome completo do cadastro", required: true, info: true, note: {text: "Nome completo do cadastro"}},
						{type: "newcolumn"},
						{type: "input", name: "empresa", label: "Empresa", inputWidth: 250, style: "font-weight:bold;"}
					]},
					{ type: "block", list: [
						{type: "input", name: "rg", label: "Doc. de identifica&ccedil;&atilde;o", inputWidth: "140", style: "font-weight:bold;",
							tooltip: "Informe o número de RG ou RNE ou passaporte", info: true, required: true
						},
						{type: "newcolumn"},
						{type: "input", name: "cpf", label: "CPF", inputWidth: "120", style: "font-weight:bold;"},
						{type: "newcolumn"},
						{type: "combo",  name: "tipo_acesso", label: "Tipo de acesso", inputWidth: "100", style: "font-weight:bold;", required: true, options: [
							{value: "", text: "Selecione", selected: true},
							{value: "1", text: "Prestador"},
							{value: "2", text: "Entregador"},
							{value: "3", text: "Diarista"}
						]},
						{type: "newcolumn"},
						{type: "input", name: "num", label: "Registro", inputWidth: 120, style: "font-weight:bold; color:red",
							tooltip: "Número da matricula para acesso", info: true, readonly:true
						}
					]}
				]}
			]},
			{ type: "block", list: [
				{type: "fieldset", name: "opcoes", label: "cadastro cadastrados na unidade", width: 750, list: [
					{type: "container", name: "gridfamiliares", inputWidth: 730, inputHeight: 400}
				]}
			]}
		]}
	]},
	{type: "hidden", name: "filedate"},
	{type: "hidden", name: "timerg"}
];