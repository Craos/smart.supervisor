/**
 * Created by Oberdan on 08/06/14.
 */

var campos_seletor_new = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "8", position: "label-top"},
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
    {type: "newcolumn"},
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