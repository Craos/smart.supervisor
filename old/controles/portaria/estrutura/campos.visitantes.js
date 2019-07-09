/**
 * Created by Oberdan on 08/06/14.
 */
var campos_historico_visitante = [
    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", name: "titulo", value: "Hist�rico de acesso", offsetLeft: 20, offsetTop: 20, style: "font-weight:bold;"},
	{type: "hidden", name: "num"},
    {type: "block", list: [
        {type: "fieldset", label: "Par�metros para licaliza��o do hist�rico", width: 955, list: [
            {type:"calendar", dateFormat:"%d/%m/%Y", name:"data_inicial", label:"Data inicial", enableTime:false, inputWidth: 70},
            {type: "newcolumn"},
            {type:"calendar", dateFormat:"%d/%m/%Y", name:"data_final", label:"Data final", enableTime:false, inputWidth: 70},
            {type: "newcolumn"},
            {type: "input", name: "buscar_torre", label: "Torre", offsetLeft: "10", inputWidth: 45, maxLength: "3", style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "input", name: "buscar_unidade", label: "Unidade", offsetLeft: "10", inputWidth: 45, maxLength: "3", style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "input", name: "buscar_placa", label: "Placa", offsetLeft: "10", inputWidth: 100, maxLength: "8", style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "button", name: "buscar", offsetLeft: 30, offsetTop: 15, value: "Listar autoriza��es"}
        ]}
    ]},
    {type: "block", list: [
        {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "2", offsetTop: "2", position: "label-top"},
        {type: "fieldset", name: "foto", label: "Documento", width: 250, list: [
            {type: "container", name: "f_documento", inputWidth: 220, inputHeight: 147}
        ]},
        {type: "newcolumn"},
        {type: "fieldset", name: "data_entrada", label: "Entrada", width: 170, list: [
                {type: "template", name: "lbfiledate", value: "Data:", inputWidth: 60, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "filedate", inputWidth: 90, style: "color: gray"},
                {type: "newcolumn"},
                {type: "template", name: "lbtimerg", value: "Hor�rio:", inputWidth: 60, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "timerg", inputWidth: 90, style: "color: gray"}
        ]},
        {type: "newcolumn"},
        {type: "fieldset", name: "data_saida", label: "Sa�da", width: 170, list: [
                {type: "template", name: "lbdata_saida", value: "Data:", inputWidth: 60, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "exitdate", inputWidth: 90, style: "color: gray"},
                {type: "newcolumn"},
                {type: "template", name: "lbhorario_saida", value: "Hor�rio:", inputWidth: 60, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "exittime", inputWidth: 90, style: "color: gray"}
        ]},
        {type: "newcolumn"},
        {type: "fieldset", name: "identificacao", label: "Identifica&ccedil;&atilde;o", width: 350, list: [
            {type: "template", name: "lbnome", value: "Nome:", inputWidth: 45, style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "template", name: "nome", inputWidth: 230, style: "color: gray"},
            {type: "newcolumn"},
            {type: "template", name: "lbacesso", value: "Acesso N�:", inputWidth: 70, style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "template", name: "cadastro", inputWidth: 80, style: "color: gray"},
            {type: "newcolumn"},
            {type: "template", name: "lbbloco", value: "Bloco:", inputWidth: 45, style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "template", name: "bloco", inputWidth: 25, style: "color: gray"},
            {type: "newcolumn"},
            {type: "template", name: "lbunidade", value: "Unidade:", inputWidth: 60, style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "template", name: "admunidade", inputWidth: 30, style: "color: gray"}
        ]},
        {type: "newcolumn"},
        {type: "fieldset", label: "Informa��es da autoriza��o", width: 700, list: [
            {type: "block", list: [
                {type: "template", name: "lbtipoacesso", value: "Tipo de acesso:", inputWidth: 110, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "tipoacesso", inputWidth: 550, style: "color: gray"},
                {type: "newcolumn"},
                {type: "template", name: "lbplaca", value: "Placa:", inputWidth: 45, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "placa", inputWidth: 90, style: "color: gray"},
                {type: "newcolumn"},
                {type: "template", name: "lbestacionamento", value: "Estacionamento:", inputWidth: 110, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "estacionamento", inputWidth: 150, style: "color: gray"},
                {type: "newcolumn"},
                {type: "template", name: "lbvaga", value: "Vaga:", inputWidth: 45, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "template", name: "vaga", inputWidth: 25, style: "color: gray"}
            ]}
        ]}
    ]},
    {type: "block", list: [
		{type: "fieldset", name: "dados_veiculos", label: "Registro do dia (Ordem decrescente de hor&aacute;rio)", inputHeight: 500, width: 955, list: [
			{type: "template", name: "totais", style: "font-weight:bold;"},
			{type: "container", name: "gridhistoricoautorizacoes", inputWidth: 915, inputHeight: 480}
		]}
	]}
];