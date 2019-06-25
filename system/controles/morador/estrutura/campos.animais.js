/**
 * Created by Oberdan on 08/06/14.
 */

var campos_animais = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", name: "titulo", value: "Cadastro dos animais dom&eacute;sticos da unidade", style: "font-weight:bold; color: #003366;"},
	{type: "hidden", name: "num"},
    { type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
            {type: "button", name: "novo", value: "1. Cadastrar novo"},
            {type: "newcolumn"},
            {type: "button", name: "salvar", value: "2. Salvar dados"},
            {type: "newcolumn"},
            {type: "button", name: "remover", value: "3. Apagar dados"}
        ]}
    ]},
    {type: "block", list: [
        {type: "fieldset", name: "dados_saude", label: "Informa&ccedil;&otilde;es gerais do animal", width: 955, list: [
            {type: "block", list: [
                {type: "input", name: "nome", label: "Nome a que atende o animal", inputWidth: "180", style: "font-weight:bold;",
                    tooltip: "Informe o nome a que atende o animal",
                    required: true, info: true, note: {text: "Nome do animal"}
                },
                {type: "newcolumn"},
                {type: "input", name: "especie", label: "Esp&eacute;cie do animal", inputWidth: "180", style: "font-weight:bold;",
                    tooltip: "Informe a espécie do animal. Ex.: Cachorro, Gato, Passarinho etc.",
                    required: true, info: true, note: {text: "Esp&eacute;cie do animal"}
                },
                {type: "newcolumn"},
                {type: "input", name: "raca", label: "Ra&ccedil;a", inputWidth: "122", style: "font-weight:bold;", required: true},
                {type: "newcolumn"},
                {type: "input", name: "cor", label: "Cor", inputWidth: "122", style: "font-weight:bold;", required: true}
            ]}
        ]},
        {type: "fieldset", name: "opcoes", label: "Animais cadastrados", width: 955, list: [
            {type: "container", name: "gridanimais", inputWidth: 920, inputHeight: 160}
        ]}
    ]}
];