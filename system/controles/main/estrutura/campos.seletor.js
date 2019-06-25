/**
 * Created by Oberdan on 08/06/14.
 */

var campos_seletor = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "8", position: "label-top"},
    {type: "fieldset", name: "info", label: "Informa&ccedil;&otilde;es da unidade", width: 400, list: [
        {type: "block", list: [
            {type: "combo", name: "condominio", required: true, label: "Condom&iacute;nio", inputWidth: "350", style: "font-weight:bold;"}
        ]},
        {type: "block", list: [
            {type: "combo", name: "bloco", required: true, label: "Bloco/Torre", inputWidth: "185", style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "combo", name: "unidade", required: true, label: "Unidade", inputWidth: "160", style: "font-weight:bold;"}
        ]},
        {type: "block", list: [
            {type: "input", name: "nome", label: "Nome", inputWidth: "350", style: "font-weight:bold;"}
        ]},
        {type: "block", list: [
            {type: "button", name: "selecionar", value: "Selecionar"},
            {type: "newcolumn"},
            {type: "button", name: "confirmar", value: "Confirmar"}
        ]}
    ]},
    {type: "newcolumn"},
    {type: "fieldset", name: "localizar_morador", label: "Localizar registro", width: 400, list: [
        {type: "block", list: [
            {type: "input", name: "nome_morador", label: "Nome", inputWidth: "350", style: "font-weight:bold;"}
        ]},
        {type: "block", list: [
            {type: "input", name: "documento", label: "Documento", inputWidth: "180", style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "input", name: "autenticacao_pessoa", label: "Autentica&ccedil;&atilde;o da pessoa", inputWidth: "160", style: "font-weight:bold;"}
        ]},
        {type: "block", list: [
            {type: "button", name: "localizar_morador", value: "Localizar"}
        ]}
    ]},
    {type: "fieldset", name: "localizar_veiculo", label: "Localizar ve&iacute;culo", width: 400, list: [
        {type: "block", list: [
            {type: "input", name: "modelo", label: "Modelo", inputWidth: "120", style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "input", name: "marca", label: "Marca", inputWidth: "120", style: "font-weight:bold;"}
        ]},
        {type: "block", list: [
            {type: "input", name: "placa_letras", label: "Placa", inputWidth: "35", style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "input", name: "placa_numeros", label: "N&uacute;meros", inputWidth: "50", style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "input", name: "autenticacao_carro", label: "Autentica&ccedil;&atilde;o do ve&iacute;culo", inputWidth: "160", style: "font-weight:bold;"}
        ]},
        {type: "block", list: [
            {type: "button", name: "localizar_veiculo", value: "Localizar"}
        ]}
    ]},
    {type: "hidden", name: "pk_unidade"}
];