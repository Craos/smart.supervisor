/**
 * Created by Oberdan on 08/06/14.
 */

var campos_main_layout_top = [
    {type: "settings", labelAlign: "left", offsetLeft: "1", offsetTop: "0", position: "label-top"},
	{type: "input", name: "left_bloco", label: "Torre", offsetLeft: "4", offsetTop: "10", inputWidth: 45, style: "font-weight:bold;"},
	{type: "newcolumn"},
	{type: "input", name: "left_unidade", label: "Unidade", offsetLeft: "4", offsetTop: "10", inputWidth: 45, style: "font-weight:bold;"},
	{type: "newcolumn"},
	{type: "template", name: "selecionar", offsetTop: "33", offsetLeft: "10", format: "reSelecionar"},
	{type: "newcolumn"},
	/*{type: "input", name: "buscar_todos", label: "Pessoas / Ve&iacute;culos", offsetLeft: "40", offsetTop: "10", inputWidth: 200, style: "font-weight:bold;"},
	{type: "newcolumn"},
	{type: "template", name: "buscar_veiculo", offsetTop: "33", offsetLeft: "10", format: "reSelecionarVeiculo"},
	{type: "newcolumn"},*/
	{type: "template", name: "localizar", offsetTop: "33", offsetLeft: "40", format: "reLocalizar"}
];