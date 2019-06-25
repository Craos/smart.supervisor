/**
 * Created by Oberdan on 08/06/14.
 */

var campos_login = [
    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "9", position: "label-top"},
	{type: "block", list: [
		{type: "block", list: [
	        {type: "input", name: "login", label: "Usu&aacute;rio", validate: "NotEmpty", inputWidth: "200", maxLength: "255", note: {text: "Nome fornecido por e-mail"}, required: "true", style: "font-weight:bold;"}
	    ]},
	    {type: "block", list: [
	        {type: "password", name: "password", label: "Senha", validate: "NotEmpty", inputWidth: "200", maxLength: "12", note: {text: "Senha fornecida por e-mail"}, required: "true", style: "font-weight:bold;"}
	    ]},
	    {type: "block", list: [
	        {type: "template", name: "resenha", format: "reSenha", offsetLeft: "33"}
	    ]},
	    {type: "block", list: [
	        {type: "button", name: "acesso", label: "Acessar", value: "Acessar", offsetLeft: "110"}
	    ]}
	]},
	{type: "newcolumn"},
	{type: "block", list: [
		{type: "container", name: "logocraos", inputWidth: 32, inputHeight: 32}
	]}
];