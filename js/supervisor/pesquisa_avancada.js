/**
 * Created by Oberdan on 06/06/14.
 */

function pesquisa_avancada() {

	let win;
	win = new dhtmlXWindows();

	let winpesquisa = win.createWindow('pesquisa', 0, 0, 1000, 600);
	winpesquisa.setText('Selecionar registro');
	winpesquisa.centerOnScreen();

	let layout = winpesquisa.attachLayout('2E');
	let top = layout.cells('a');
	top.hideHeader();
	top.setHeight('120');

	let form = top.attachForm([
		{type: "settings", labelAlign: "left", position: "label-top", inputWidth: 450},
		{type: 'block', list:[
			{type: "input", name: "valor", label: "Nome da pessoa, documento, modelo do veículo, placa"}
		]},
		{type: 'label', label:'Tipo de pesquisa', offsetTop: 12, list:[
			{type: "settings", labelAlign: "left", position: "label-left", offsetLeft: 30},
			{type:"radio", name:"tipo", value:"pessoa", label:"Pessoa", checked:true},
			{type: "newcolumn"},
			{type:"radio", name:"tipo", value:"veiculo", label:"Veículo"},
			{type: "newcolumn"},
			{type:"radio", name:"tipo", value:"pet", label:"Pet"}
		]},
		{type: "newcolumn", offset: 20},
		{type: "button", name: "iniciar", offsetLeft:20, offsetTop: 12, value: "Pesquisar"}
	]);

	let botton = layout.cells('b');
	botton.hideHeader();
	let grid = botton.attachGrid();
	grid.setIconsPath('./codebase/imgs/');
	grid.setHeader("Id,Torre,Unidade,Cadastro,Identificação,Documento");
	grid.setColumnIds("id,torre,unidade,cadastro,identificacao,documento");
	grid.enableAutoWidth(true);
	grid.init();


	form.attachEvent("onButtonClick", function () {
		let data = form.getFormData();
		admunidade.Executar({
			tipo: data.tipo,
			valor: data.valor,
			callback: function (response) {
				console.debug(response);
			}
		})
	});

}