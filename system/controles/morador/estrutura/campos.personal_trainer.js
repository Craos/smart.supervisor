/**
 * Created by Oberdan on 08/06/14.
 */

var campos_personal_trainer = [
	{ type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
	{type: "template", name: "titulo", value: "Cadastro de personal trainer", style: "font-weight:bold; border: 0;"},
    { type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
            {type: "block", list: [
                {type: "button", name: "novo", value: "1. Cadastrar novo"},
                {type: "newcolumn"},
                {type: "button", name: "salvar", value: "2. Salvar dados"},
                {type: "newcolumn"},
                {type: "button", name: "remover", value: "3. Apagar dados"},
                {type: "newcolumn"},
                {type: "button", name: "foto", value: "4. Obter foto"},
                {type: "newcolumn"},
                {type: "button", name: "atividades", value: "5. Registro de atividades"}
            ]}
        ]}
    ]},
    { type: "block", list: [
        {type: "fieldset", name: "foto", label: "Identifica&ccedil;&atilde;o", width: 140, list: [
            {type: "container", name: "foto_personal", inputWidth: 120, inputHeight: 120}
        ]},
        {type: "newcolumn"},
        {type: "fieldset", name: "informacoes_gerais_do_personal", label: "Informa&ccedil;&otilde;es gerais do personal", width: 565, list: [
            {type: "block", list: [
                {type: "input", name: "nome", label: "Nome completo", inputWidth: 522, style: "font-weight:bold;", tooltip: "Informe o nome completo do personal", required: true, info: true, note: {text: "Nome completo do personal"}}
            ]},
            { type: "block", list: [
                {type: "input", name: "telefone", label: "Telefone", inputWidth: 130, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "email", label: "E-mail", inputWidth: 382, style: "font-weight:bold;"}
            ]},
            {type: "block", list: [
                {type: "input", name: "rg", label: "RG", inputWidth: 130, style: "font-weight:bold;",
                    tooltip: "Informe o número de RG ou RNE ou passaporte", info: true, required: true
                },
                {type: "newcolumn"},
                {type: "input", name: "cpf", label: "CPF", inputWidth: 130, style: "font-weight:bold;",
                    tooltip: "Informe o número CPF", info: true
                },
                {type: "newcolumn"},
                {type: "input", name: "cref", label: "CREF", inputWidth: 130, style: "font-weight:bold;",
                    tooltip: "Informe o número de registro de formação profissional", info: true, required: true
                },
                {type: "newcolumn"},
                {type: "input", name: "placa_letras", label: "Placa", offsetLeft: "10", inputWidth: "35", maxLength: "3", style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "placa_numeros", label: "do ve&iacute;culo", validate: "ValidNumeric", inputWidth: "50", maxLength: "4", style: "font-weight:bold;"}
            ]}
        ]},
        {type: "newcolumn"},
        {type: "fieldset", name: "autorizacao", label: "Registro do personal", width: 235, list: [
            { type: "block", list: [
                {type: "input", name: "data_registro", readonly:true,  label: "Data do registro", inputWidth: 90, style: "font-weight:bold; color:red"},
                {type: "newcolumn"},
                {type: "input", name: "expiracao", offsetTop: "4", readonly:true, label: "Expiração", inputWidth: 90, style: "font-weight:bold; color:red"}
            ]},
            { type: "block", list: [
                {type: "input", name: "autenticacao", label: "Autenticação", inputWidth: 90, style: "font-weight:bold; color:blue", tooltip: "Utilizado apenas para personal do condomínio", info: true, note: {text: "Somente adm"}},
                {type: "newcolumn"},
                {type: "input", name: "num", label: "N&uacute;mero", inputWidth: 90, style: "font-weight:bold; color:blue", tooltip: "Digite o numero do personal e prescione Enter para buscar", info: true, note: {text: "Enter para buscar"}}
            ]},
            { type: "block", list: [
                {type: "checkbox", offsetTop: 16, position: "label-right", name: "bloqueio", value: "1", label: "Acesso bloqueado", labelWidth: 120, tooltip: "Marque esta opção se desejar interromper o acesso do personal durante o processo de autenticação nas portas do condomínio", info: true}
            ]}
        ]}
    ]},
    { type: "block", list: [
        {type: "fieldset", name: "registro_morador", label: "Situação", width: 955, list: [
            {type: "checkbox", offsetTop: "15", position: "label-right", name: "situacao", value: "1", label: "O Personal mora no condomínio?", labelWidth: 220, tooltip: "Marque esta opção se o personal mora no condomínio", info: true},
            {type: "newcolumn"},
            {type: "input", name: "bloco", disabled:"true", label: "Torre", offsetLeft: "4", offsetTop: "10", inputWidth: 45, style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "input", name: "unidade", disabled:"true", label: "Unidade", offsetLeft: "4", offsetTop: "10", inputWidth: 45, style: "font-weight:bold;"}
        ]}
    ]},
    { type: "block", list: [
        {type: "fieldset", name: "lista_cadastro_personal", label: "Cadastros", width: 955, list: [
            {type: "container", name: "gridpersonal", inputWidth: 900, inputHeight: 200}
        ]}
    ]},
	{type: "hidden", name: "timerg"},
	{type: "hidden", name: "registroentrada"}
];