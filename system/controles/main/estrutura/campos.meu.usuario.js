/**
 * Created by Oberdan on 08/06/14.
 */

var campos_meuusuario = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "10", position: "label-top"},
    { type: "block", list: [
        { type: "input", name: "num", label: "Registro", inputWidth: "60", style: "font-weight:bold;"},
        { type: "newcolumn"},
        { type: "input", name: "nome", label: "Nome completo", inputWidth: "260", style: "font-weight:bold;", tooltip: "Informe o seu nome completo", info: true, note: {text: "Informe seu nome completo"}},
        { type: "newcolumn"},
        { type: "input", name: "nome_perfil", label: "Perfil", readonly: "true", inputWidth: "200", maxLength: "20", style: "font-weight:bold;"}
    ]},
    { type: "block", list: [
        { type: "input", name: "login", label: "Usu&aacute;rio", readonly: "true", inputWidth: "260", maxLength: "20", style: "font-weight:bold;"},
        { type: "newcolumn"},
        { type: "input", name: "email", label: "E-mail", inputWidth: "264", style: "font-weight:bold;", tooltip: "Informe o endere?o de e-mail v?lido", required: true, info: true, note: {text: "Informe o endere?o de e-mail"}}
    ]},
    { type: "block", list: [
        { type: "password", name: "password", label: "Nova senha", inputWidth: "170", maxLength: "10", style: "font-weight:bold;",
            tooltip: "Sua senha de acesso, deve possuir de 6 a 10 caracteres, podendo ser letras, n?meros e s?mbolos especiais.",
            required: true, info: true, note: {text: "Entre 6 a 10 caracteres, com letras, numeros e s?mbolos especiais."}
        },
        { type: "newcolumn"},
        { type: "password", name: "repassword", label: "Repita a nova senha", inputWidth: "170", maxLength: "10", style: "font-weight:bold;"},
        { type: "newcolumn"},
        { type: "input", name: "lbsenha", label: "Visualizar senha", inputWidth: "170", maxLength: "10", style: "font-weight:bold;"}
    ]},
    { type: "button", name: "salvar", label: "Salvar", offsetTop: "24", value: "Salvar"}
];