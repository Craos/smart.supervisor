/**
 * Created by Oberdan on 06/06/14.
 */
var gridRegistroConvidados;
var formConvidado;

function convidados() {

	var paramVeiculo;
    sessionStorage.recursocorrente = 'convidados()';
	formConvidado = nav_layout_principal.attachForm(campos_convidados);
	formConvidado.enableLiveValidation(true);
	formConvidado.attachEvent("onButtonClick", function (name) {

		if (name == 'localizar') {
			var busca_convidado = {
				param: 'dados',
				contenttype: 'json',
				action: 'directjson',
				origem: 'condominio.eventos_info',
				where: 'rg/' + formConvidado.getItemValue('localizar_rg').toUpperCase()
			};

			sys.FormAction(sys.setParameters(busca_convidado), ResultBuscaConvidado);


		} else if (name == 'salvar') {

		}
	});

	formConvidado.attachEvent("onAfterValidate", function (status) {
		if (status == false)
			return;

		var dados = formConvidado.getFormData();

        var today = new Date();

		paramVeiculo = {
			contenttype: 'xml',
			action: 'insert',
			origem: 'condominio.convidado',
			returnkey: 'num',
			condominio: userinfo.condominio,
			bloco: userinfo.bloco,
			andar: userinfo.andar,
			unidade: userinfo.pk_unidade,
            lastdate: today.format("yyyy-mm-dd"),
            lasttime: today.format("HH:MM:ss"),
            lastuser: informacoesdousuario.uidins
		};

		var width = 400;
		var height = 550;
		var left = 99;
		var top = 99;

		var placa_letras = formConvidado.getItemValue('placa_letras');
		var placa_numeros = formConvidado.getItemValue('placa_numeros');
		var descricao = formConvidado.getItemValue('descricao');
		var morador_bloco = docCookies.getItem('morador_bloco');
		var morador_unidade = docCookies.getItem('morador_unidade');

		window.open('./controles/portaria/estrutura/convidado.php?registro=' + userinfo.pk_unidade + '&bloco=' + morador_bloco + '&unidade=' + morador_unidade + '&placa_letras=' + placa_letras + '&placa_numeros=' + placa_numeros + '&descricao=' + descricao, 'acesso', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', scrollbars=no, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');

		sys.FormAction(
			sys.setParameters(
				sys.mergeAttributes(paramVeiculo, formConvidado.getFormData())
			), ResultFormConvidado
		);
	});

	gridRegistroConvidados = new dhtmlXGridObject(formConvidado.getContainer("gridhistoricoconvidados"));
	gridRegistroConvidados.setIconsPath('./codebase/imgs/');
	gridRegistroConvidados.init();
	gridLoadHistoricoConvidados();

}

function ResultFormConvidado(http) {
	var out;
	out = {registro: '', situacao: ''};
	out = JSON.parse(http.responseText);

	if (out.registro != undefined && out.registro.length > 0) {
		sys.FormClear(formConvidado);
	} else {
		alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
	}
}

function ResultBuscaConvidado(http) {
	var out;
	out = JSON.parse(http.responseText);

	var itens = out[0];
	for (var key in itens)
		if (itens.hasOwnProperty(key))
			formConvidado.setItemValue(key, itens[key]);

}

function LoadFormConvidado(http) {

	var out;
	out = JSON.parse(http.responseText);

	var itens = out[0];
	for (var key in itens)
		if (itens.hasOwnProperty(key))
			formConvidado.setItemValue(key, itens[key]);

	formConvidado.setItemValue('nome_condominio', userinfo.nome_condominio);
	formConvidado.setItemValue('nome_bloco', userinfo.nome_bloco);
	formConvidado.setItemValue('nome_andar', userinfo.nome_andar);
	formConvidado.setItemValue('nome_unidade', userinfo.unidade);

}

function gridLoadHistoricoConvidados() {

	if (userinfo === undefined)
		return;

	var gridSourceHistoricoConvidados;
	gridSourceHistoricoConvidados = {
		teste: 'teste',
		contenttype: 'xml',
		action: 'dhtmlxgrid',
		usecheckbox: 'false',
		campos:'num, bloco as Bloco, unidade, nome',
		chave: 'num',
		origem: 'condominio.eventos_info'
	};

	gridRegistroConvidados.loadXML(sys.setParameters(gridSourceHistoricoConvidados), function () {
	});

}