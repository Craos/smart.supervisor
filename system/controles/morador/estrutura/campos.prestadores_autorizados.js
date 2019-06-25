/**
 * Created by Oberdan on 08/06/14.
 */

var campos_registro_acesso_geral = [
	{type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "block", list: [
        {type: "fieldset", label: "Opera&ccedil;&otilde;es", width: 955, list: [
                {type: "button", name: "novo", value: "1. Cadastrar novo"},
                {type: "newcolumn"},
                {type: "button", name: "salvar", value: "2. Salvar dados"},
                {type: "newcolumn"},
                {type: "button", name: "remover", value: "3. Apagar dados"},
                {type: "newcolumn"},
                {type: "button", name: "fotomorador", value: "4. Obter foto"},
                {type: "newcolumn"},
                {type: "button", name: "registrar_entrada", value: "5. Registrar entrada"},
                {type: "newcolumn"},
                {type: "button", name: "registrar_saida", value: "6. Registrar sa&iacute;da"}
        ]},
        {type: "fieldset", label: "Localizar", width: 955, list: [
            {type: "input", name: "localizar_num", label: "Registro", inputWidth: 100, style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "input", name: "localizar_rg", label: "RG", inputWidth: 100},
            {type: "newcolumn"},
            {type: "input", name: "localizar_nome", label: "Nome", inputWidth: 150},
            {type: "newcolumn"},
            {type: "checkbox", name: "localizar_antigos", label: "Pesquisa avançada", offsetTop: 16, labelAlign: "right", position: "label-right" },
            {type: "newcolumn"},
            {type: "button", offsetTop: "16", name: "localizar", value: "Localizar"}
        ]}

    ]},

    { type: "block", list: [
        {type: "fieldset", name: "foto", label: "Identifica&ccedil;&atilde;o", width: 140, list: [
            {type: "container", name: "foto_prestador", inputWidth: 120, inputHeight: 120}
        ]},
        {type: "newcolumn"},
        {type: "fieldset", name: "informacoes_gerais_do_prestador", label: "Informa&ccedil;&otilde;es gerais do prestador", width: 565, list: [
            { type: "block", list: [
                {type: "input", name: "nome", label: "Nome completo", inputWidth: 250, style: "font-weight:bold;", tooltip: "Informe o nome completo do prestador", required: true, info: true, note: {text: "Nome completo do prestador"}},
                {type: "newcolumn"},
                {type: "combo", name: "tipoacesso", label: "Tipo de acesso", inputWidth: 250, style: "font-weight:bold;", required: true, options: [
                    {value: "", text: "Selecione", selected: true},
                    {value: "1", text: "Prestador de serviço"},
                    {value: "2", text: "Fornecedor"},
                    {value: "3", text: "Visitante"},
                    {value: "4", text: "Diarista"},
                    {value: "5", text: "Funcionário da unidade"}
                ]}
            ]},
            { type: "block", list: [
                {type: "input", name: "rg", label: "Doc. de identifica&ccedil;&atilde;o", inputWidth: "140", style: "font-weight:bold;",
                    tooltip: "Informe o n&uacute;mero de RG ou RNE ou passaporte", info: true, required: true
                },
                {type: "newcolumn"},
                {type: "input", name: "empresa", label: "Empresa", inputWidth: 250, style: "font-weight:bold;"}
            ]}
        ]},
        {type: "newcolumn"},
        {type: "fieldset", name: "autorizacao", label: "Registro do prestador", width: 235, list: [
            { type: "block", list: [
                {type: "input", name: "data_registro", readonly:true,  label: "Data do registro", inputWidth: 90, style: "font-weight:bold; color:red"},
                {type: "newcolumn"},
                {type: "input", name: "expiracao", offsetTop: "4", readonly:true, label: "Expira&ccedil;&atilde;o", inputWidth: 90, style: "font-weight:bold; color:red"}
            ]},
            { type: "block", list: [
                {type: "input", name: "autenticacao", label: "Autentica&ccedil;&atilde;o", inputWidth: 90, style: "font-weight:bold; color:blue"},
                {type: "newcolumn"},
                {type: "input", name: "num", label: "N&uacute;mero", inputWidth: 90, style: "font-weight:bold; color:blue"}
            ]}
        ]}
    ]},
    { type: "block", list: [
        {type: "container", name: "gridempregadosunidade", inputWidth: 957, inputHeight: 180}
    ]},
    { type: "block", list: [
        {type: "fieldset", name: "registro_de_acesso", label: "Controle de acesso", width: 955, list: [
            { type: "block", list: [
                {type: "input", name: "bloco", label: "Torre", inputWidth: 45, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "unidade", label: "Unidade", inputWidth: 45, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "placa_letras", label: "Placa", offsetLeft: "10", inputWidth: "35", maxLength: "3", style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "placa_numeros", label: "do ve&iacute;culo", validate: "ValidNumeric", inputWidth: "50", maxLength: "4", style: "font-weight:bold;"}
            ]},
            { type: "block", list: [
                {type: "input", name: "observacoes_porteiro", inputHeight: 80, rows: 5, label: "Observa&ccedil;&otilde;es do porteiro", inputWidth: 550, style: "font-weight:bold;"},
                {type: "input", name: "observacoes_morador", label: "Observa&ccedil;&otilde;es morador", inputWidth: 550, style: "font-weight:bold;"},
                {type: "input", name: "situacao", label: "Situa&ccedil;&atilde;o", inputWidth: 550, style: "font-weight:bold; color:red", readonly:true}
            ]},
            { type: "block", list: [
                {type: "container", name: "gridfamiliares", inputWidth: 900, inputHeight: 180}
            ]}
        ]}
    ]},
	{type: "hidden", name: "timerg"},
	{type: "hidden", name: "cadastro_origem"},
	{type: "hidden", name: "registroentrada"}
];

var campos_historico_registro_acesso_geral = [
    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
            {type: "input", name: "bloco", label: "Torre", inputWidth: 45, style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "input", name: "unidade", label: "Unidade", inputWidth: 45, style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "calendar", name: "data_inicial", label: "Data", enableTime: true, enableTodayButton: true, dateFormat: "%d/%m/%Y", calendarPosition: "right", inputWidth: 80, style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "calendar", name: "data_final", label: "Data Final", enableTime: true, enableTodayButton: true, dateFormat: "%d/%m/%Y", calendarPosition: "right", inputWidth: 80, style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "button", name: "novo",  offsetTop: "16", value: "1. Pesquisar"}
        ]}
    ]},
    {type: "block", list: [
        {type: "fieldset", name: "informacoes_registro", label: "Informa&ccedil;&otilde;es do registro", width: 955, list: [
            {type: "block", list: [
                {type: "template", value: "Registro N.:", inputWidth: 80, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "registro", offsetLeft: "2", inputWidth: 60, style: "color: gray"},
                {type: "newcolumn"},
                {type: "template", value: "Acesso N.:", inputWidth: 80, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "num", offsetLeft: "2", inputWidth: 60, style: "color: gray"},
                {type: "newcolumn"},
                {type: "template", value: "Data da entrada:", inputWidth: 110, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "data", offsetLeft: "2", inputWidth: 80, style: "color: gray"},
                {type: "newcolumn"},
                {type: "template", name: "horario_entrada", value: "Hor&aacute;rio:", inputWidth: 80, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "timerg", offsetLeft: "2", inputWidth: 80, style: "color: gray"},
                {type: "newcolumn"},
                {type: "template", name: "usuario_entrada", value: "Usu&aacute;rio respons&aacute;vel:", inputWidth: "150", style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "uidins", offsetLeft: "2", inputWidth: "80", style: "color: gray"}
            ]},
            {type: "block", list: [
                {type: "template", value: "Nome:", inputWidth: 60, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "nome", offsetLeft: "2", inputWidth: 400, style: "color: gray"},
                {type: "newcolumn"},
                {type: "template", value: "Tipo de acesso:", inputWidth: 110, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "tipoacesso", offsetLeft: "2", inputWidth: 200, style: "color: gray"}
            ]}
        ]}
    ]},
    {type: "block", list: [
        {type: "fieldset", name: "lista_historico_registros", label: "Registros de Acesso", width: 955, list: [
            {type: "container", name: "gridhistorico_acesso", inputWidth: 930, inputHeight: 450}
        ]}
    ]}
];