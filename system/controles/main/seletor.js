/**
 * Created by Oberdan on 06/06/14.
 */

var windowAtualizarDadosSeletor;
var formCadastroSeletor;
var windowIDSeletor;
var lasthttpResponse;

function seletor() {

	windowIDSeletor = 'windowAtualizarDadosSeletor';
	var windowsClientInfo;
	windowsClientInfo = new dhtmlXWindows();
	windowsClientInfo.setSkin('dhx_terrace');

	windowAtualizarDadosSeletor = windowsClientInfo.createWindow(windowIDSeletor, 0, 0, 860, 600);
	windowAtualizarDadosSeletor.setText('Selecionar registro');
	windowAtualizarDadosSeletor.denyResize();
	windowAtualizarDadosSeletor.centerOnScreen();
	windowAtualizarDadosSeletor.button('park').hide();
	windowAtualizarDadosSeletor.button('minmax1').hide();

	formCadastroSeletor = windowAtualizarDadosSeletor.attachForm(campos_seletor);
	formCadastroSeletor.attachEvent("onButtonClick", function (name) {

		switch (name) {
			case 'selecionar':
				selecionarregistro(formCadastroSeletor);
				break;

			case 'confirmar':
				topResultBuscaMorador(lasthttpResponse);
				windowAtualizarDadosSeletor.close();
				break;

			case 'localizar_morador':
				localizaMorador();
				break;

			case 'localizar_veiculo':
				localizaVeiculo();
				break;

			default:
				break;

		}

	});

	var bindcombocondominios = {
		parametros: true,
		contenttype: 'xml',
		action: 'select_combo',
		grava_sessao: 'true',
		nome_sessao: 'combo_condominios',
		campos: 'num, nome as tipo',
		origem: 'condominio.condominios'
	};

	sys.FormAction(sys.setParameters(bindcombocondominios), ResultBindcomboCondominios);

	var bindcomboblocos = {
		parametros: true,
		contenttype: 'xml',
		action: 'select_combo',
		grava_sessao: 'true',
		nome_sessao: 'combo_blocos',
		orderby: 'num',
		campos: 'num, nome as tipo',
		origem: 'condominio.blocos'
	};

	sys.FormAction(sys.setParameters(bindcomboblocos), ResultBindcomboBlocos);

	var bindcombounidades = {
		parametros: true,
		contenttype: 'xml',
		action: 'select_combo',
		grava_sessao: 'true',
		nome_sessao: 'combo_unidades',
		campos: 'unidade as num, unidade as tipo',
		origem: 'condominio.unidades',
		groupby: '1, 2',
		orderby: '1'
	};

	sys.FormAction(sys.setParameters(bindcombounidades), ResultBindcomboUnidades);

}

function ResultBuscaMorador(http) {

	var out;
	out = JSON.parse(http.responseText);

	var itens = out[0];
	for (var key in itens)
		if (itens.hasOwnProperty(key))
			formCadastroSeletor.setItemValue(key, itens[key]);

	if (wgridSeletor != undefined)
		wgridSeletor.close();

	lasthttpResponse = http;
}

function ResultBindcomboCondominios(http) {
	var condominios = formCadastroSeletor.getCombo('condominio');
	condominios.loadXMLString(http.responseText);
	condominios.setComboValue(1);
}

function ResultBindcomboBlocos(http) {
	var blocos = formCadastroSeletor.getCombo('bloco');
	blocos.loadXMLString(http.responseText);
}

function ResultBindcomboUnidades(http) {
	var unidades = formCadastroSeletor.getCombo('unidade');
	unidades.loadXMLString(http.responseText);
}

function selecionarregistro(form) {

	var condominio = (form.getCombo('condominio') == undefined) ? 1 : form.getCombo('condominio');
	var bloco = form.getCombo('bloco');
	var unidade = form.getCombo('unidade');

	var buscamorador = {
		parametros: true,
		contenttype: 'xml',
		action: 'directjson',
		origem: 'condominio.unidade_info',
		where: 'condominio/' + condominio.getSelectedValue() +
		'|bloco/' + bloco.getSelectedValue() +
		'|unidade/' + unidade.getSelectedValue()
	};

	sys.FormAction(sys.setParameters(buscamorador), ResultBuscaMorador);

}

function localizaMorador() {

	var nome = formCadastroSeletor.getItemValue('nome_morador').toLowerCase();
	var rg = formCadastroSeletor.getItemValue('documento').toLowerCase().replace(/[^a-z0-9]/gi, '');
	var cpf = formCadastroSeletor.getItemValue('documento').toLowerCase().replace(/[^a-z0-9]/gi, '');
	var autenticacao = formCadastroSeletor.getItemValue('autenticacao_pessoa').toLowerCase().replace(/[^a-z0-9]/gi, '');

	var criterios = "";
	var operador = "";

	if (nome.length > 0)
		criterios = " nome like '" + nome + "%";

	if (rg.length > 0) {
		if (criterios.length > 0)
			operador = " OR ";
		criterios += operador + "lower(regexp_replace(rg, '[^0-9a-zA-Z ]', '', 'g')) like '" + rg + "%'";
	}

	if (cpf.length > 0) {
		if (criterios.length > 0)
			operador = " OR ";
		criterios += operador + "lower(regexp_replace(cpf, '[^0-9a-zA-Z ]', '', 'g')) like '" + cpf + "%";
	}

	if (autenticacao.length > 0) {
		if (criterios.length > 0)
			operador = " OR ";
		criterios += operador + "lower(regexp_replace(autenticacao, '[^0-9a-zA-Z ]', '', 'g')) like '" + autenticacao + "%";
	}

	var gridSourceMoradores;
	gridSourceMoradores = {
		contenttype: 'xml',
		action: 'dhtmlxgrid',
		origem: 'condominio.morador_info',
		campos: 'num, condominio, bloco, unidade,nome',
		where: criterios,
		orderby: 'num',
		usecheckbox: 'false',
		chave: 'num',
		displaychave: 'false'
	};
	seletor_grid(gridSourceMoradores);

}

function localizaVeiculo() {

	var marca = formCadastroSeletor.getItemValue('marca').toLowerCase();
	var modelo = formCadastroSeletor.getItemValue('modelo').toLowerCase();
	var placa_letras = formCadastroSeletor.getItemValue('placa_letras').toLowerCase();
	var placa_numeros = formCadastroSeletor.getItemValue('placa_numeros').toLowerCase().replace(/[^a-z0-9]/gi, '');
	var autenticacao = formCadastroSeletor.getItemValue('autenticacao_carro').toLowerCase().replace(/[^a-z0-9]/gi, '');

	var criterios = "";
	var operador = "";

	if (marca.length > 0)
		criterios = " marca like '" + marca + "%";

	if (modelo.length > 0) {
		if (criterios.length > 0)
			operador = " OR ";
		criterios += operador + "modelo like '" + modelo + "%";
	}

	if (placa_letras.length > 0) {
		if (criterios.length > 0)
			operador = " OR ";
		criterios += operador + "placa_letras like '" + placa_letras + "%";
	}

	if (placa_numeros.length > 0) {
		if (criterios.length > 0)
			operador = " OR ";
		criterios += operador + "lower(regexp_replace(placa_numeros, '[^0-9a-zA-Z ]', '', 'g')) like '" + placa_numeros + "%";
	}

	if (autenticacao.length > 0) {
		if (criterios.length > 0)
			operador = " OR ";
		criterios += operador + "lower(regexp_replace(autenticacao, '[^0-9a-zA-Z ]', '', 'g')) like '" + autenticacao + "%";
	}

	var gridSourceVeiculos;
	gridSourceVeiculos = {
		contenttype: 'xml',
		action: 'dhtmlxgrid',
		origem: 'condominio.veiculo_info',
		campos: 'num, nome_proprietario, marca, modelo, placa_letras, placa_numeros',
		where: criterios,
		orderby: 'num',
		usecheckbox: 'false',
		chave: 'num',
		displaychave: 'false'
	};
	seletor_grid(gridSourceVeiculos);

}