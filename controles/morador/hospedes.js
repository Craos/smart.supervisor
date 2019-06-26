/**
 * Created by Oberdan on 01/02/2015
 */
var gridHospedes;
var formHospedes;
var formHospedesHistorico;
var currentNum;
var currentFoto;

function hospedes() {

	var tabbarHospedes = nav_layout_principal.attachTabbar();
	tabbarHospedes.addTab('tabCadastroHospede','Cadastro','');

	var tabCadastroHospede = tabbarHospedes.cells('tabCadastroHospede');
	formHospedes = tabCadastroHospede.attachForm(campos_hospedes);
	tabbarHospedes.setTabActive('tabCadastroHospede');

	tabbarHospedes.addTab('tabHistoricoHospedeUnidade','Histórico da admunidade','');
	var tabHistoricoHospedeUnidade = tabbarHospedes.cells('tabHistoricoHospedeUnidade');
	formHospedesHistorico = tabHistoricoHospedeUnidade.attachForm(campos_hospedes_historico_cadastro);

	//tabbarHospedes.addTab('tabMonitordeAcessoHospede','Monitor de acessos','');
	//var tabMonitordeAcessoHospede = tabbarHospedes.cells('tabMonitordeAcessoHospede');

	var paramHospede;
    sessionStorage.recursocorrente = 'hospedes()';

	var userprofile = JSON.parse(sessionStorage.auth).user.perfil;
	var perfil_corrente;
	for (var i = 0; i < userprofile.length; i++)
		if (userprofile[i].nome_recurso == 'hospedes') {
			perfil_corrente = userprofile[i];
			break;
		}

	if (perfil_corrente.adicionar == 0)
		formHospedes.hideItem('novo');

	if (perfil_corrente.editar == 0) {
        formHospedes.hideItem('salvar');
        formHospedes.hideItem('renovar');
    }

	if (perfil_corrente.remover == 0)
		formHospedes.hideItem('remover');

	if (perfil_corrente.documentos == 0) {
		formHospedes.hideItem('cpf');
		formHospedes.hideItem('rg');
		formHospedes.hideItem('telefone');
		formHospedes.hideItem('fotohospede');
	}

	formHospedes.attachEvent("onButtonClick", function (name) {

		if (name == 'novo') {
			if (gridHospedes.getRowsNum() >= 2) {
				alert('Limite de pessoas cadastradas');
				return;
			}
			formHospedes.reset();

			var fotocadastro = formHospedes.getContainer("foto_hospede");
			fotocadastro.innerHTML = '';

			formHospedes.setItemValue('num', null);

			sys.FormClear(formHospedes);
			formHospedes.showItem('parentesco');
			formHospedes.setItemValue('data_entrada', obtemDataEntradaHospede());

			gridLoadHospedes();


		} else if (name == 'salvar') {
			formHospedes.validate();

		} else if (name == 'remover') {

			if (formHospedes.getItemValue('num') == '')
				return;

			dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {
				if (result == true) {

					var paramHospede = {
						contenttype: 'xml',
						action: 'delete',
						origem: 'condominio.hospedes',
						returnkey: 'num',
						condominio: admunidade.condominio,
						bloco: admunidade.bloco,
						andar: admunidade.andar,
						unidade: admunidade.pk_unidade
					};

					sys.FormAction(
						sys.setParameters(
							sys.mergeAttributes(paramHospede, formHospedes.getFormData())
						), ResultFormHospedes
					);

				}
			});

		} else if (name == 'finalizar') {
			main();
		} else if (name == 'fotohospede') {

			if (formHospedes.getItemValue('num').length == 0 || formHospedes.getItemValue('num') == '') {
				alert('Selecione o registro antes de obter uma nova foto!');
				return;
			}
			foto_hospede(formHospedes.getItemValue('num'));
		} else if (name == 'renovar') {

			paramHospede = {
				contenttype: 'xml',
				action: 'update',
				origem: 'condominio.hospedes',
				returnkey: 'num',
				num: formHospedes.getItemValue('num'),
				data_entrada: obtemDataEntradaHospede(),
				condominio: admunidade.condominio,
				bloco: admunidade.bloco,
				andar: admunidade.andar,
				unidade: admunidade.pk_unidade,
				where: 'condominio/' + admunidade.condominio +
				'|bloco/' + admunidade.bloco +
				'|andar/' + admunidade.andar +
				'|admunidade/' + admunidade.pk_unidade +
				'|num/' + formHospedes.getItemValue('num')
			};

			sys.FormAction(
				sys.setParameters(
					paramHospede
				), ResultFormHospedes
			);

		}
	});

	formHospedes.attachEvent("onAfterValidate", function (status) {
		if (status == false)
			return;

        var today = new Date();

		paramHospede = {
			contenttype: 'xml',
			action: 'insert',
			origem: 'condominio.hospedes',
			returnkey: 'num',
			condominio: admunidade.condominio,
			bloco: admunidade.bloco,
			andar: admunidade.andar,
			unidade: admunidade.pk_unidade,
            lastdate: today.format("yyyy-mm-dd"),
            lasttime: today.format("HH:MM:ss"),
            lastuser: informacoesdousuario.uidins
		};

		sys.FormAction(
			sys.setParameters(
				sys.mergeAttributes(paramHospede, formHospedes.getFormData())
			), ResultFormHospedes
		);

	});

	gridHospedes = new dhtmlXGridObject(formHospedes.getContainer("gridfamiliares"));
	gridHospedes.setIconsPath('./codebase/imgs/');
	gridHospedes.init();
	gridHospedes.attachEvent('onRowSelect', function (id) {

		var formSourceHospedes;
		formSourceHospedes = {
			dados: 'teste',
			contenttype: 'xml',
			action: 'directjson',
			origem: 'condominio.hospedes_info',
			where: 'condominio/' + admunidade.condominio +
			'|bloco/' + admunidade.bloco +
			'|andar/' + admunidade.andar +
			'|admunidade/' + admunidade.pk_unidade +
			'|num/' + id,
			chave: 'num'
		};

		sys.FormAction(
			sys.setParameters(formSourceHospedes), LoadFormHospedes
		);

	});

	gridHospedesHistoricoCadastro = new dhtmlXGridObject(formHospedesHistorico.getContainer("hist_gridfamiliares"));
	gridHospedesHistoricoCadastro.setIconsPath('./codebase/imgs/');
	gridHospedesHistoricoCadastro.init();
	gridHospedesHistoricoCadastro.attachEvent('onRowSelect', function (id) {

		var formSourceHospedesHistoricoCadastro;
		formSourceHospedesHistoricoCadastro = {
			dados: 'teste',
			contenttype: 'xml',
			action: 'directjson',
			origem: 'expurgo.hospedes_info',
			where: 'condominio/' + admunidade.condominio +
			'|bloco/' + admunidade.bloco +
			'|andar/' + admunidade.andar +
			'|admunidade/' + admunidade.pk_unidade +
			'|num/' + id,
			chave: 'num'
		};

		sys.FormAction(
			sys.setParameters(formSourceHospedesHistoricoCadastro), LoadFormHospedesHistoricoCadastro
		);

	});

	gridLoadHospedes();
	gridLoadHospedesHistoricoCadastro();

}

function ResultFormHospedes(http) {

	var out;
	out = {registro: '', situacao: ''};
	out = JSON.parse(http.responseText);

	if (out.registro != undefined && out.registro.length > 0) {
		gridLoadHospedes();
		gridLoadHospedesHistoricoCadastro();
		sys.FormClear(formHospedes);
		formHospedes.showItem('parentesco');

		var fotocadastro = formHospedes.getContainer("foto_hospede");
		if (fotocadastro != null)
			fotocadastro.innerHTML = '';

		alert(out.situacao);
	} else {
		alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
	}
}

var rowdata;
function LoadFormHospedes(http) {

	var out;
	out = JSON.parse(http.responseText);

	var itens = out[0];
		rowdata = itens;
	for (var key in itens)
		if (itens.hasOwnProperty(key))
			formHospedes.setItemValue(key, itens[key]);

	formHospedes.setItemValue('nome_condominio', admunidade.nome_condominio);
	formHospedes.setItemValue('nome_bloco', admunidade.nome_bloco);
	formHospedes.setItemValue('nome_andar', admunidade.nome_andar);
	formHospedes.setItemValue('nome_unidade', admunidade.unidade);

	var fotocadastro = formHospedes.getContainer("foto_hospede");
	fotocadastro.innerHTML = '';

	if (fotocadastro != null && itens.foto1 != null) {
		if (itens.foto1.length > 0) {
			currentFoto = itens.foto1;
			fotocadastro.innerHTML = '<img id="imgfotodohospede" style="width: 120px;" alt="" src="' + itens.foto1 + '">';
		} else {

		}
	}

	var data = new Date(itens.ativacao);
	var hoje = new Date();
	var ativado = data > hoje;

	if (ativado === false) {
		formHospedes.setItemValue('aviso_ativacao', 'Ativado');
	} else {
		formHospedes.setItemValue('aviso_ativacao', 'Aguardando ativação');
	}
}

function LoadFormHospedesHistoricoCadastro(http) {

	var out;
	out = JSON.parse(http.responseText);

	var itens = out[0];
	for (var key in itens)
		if (itens.hasOwnProperty(key))
			formHospedesHistorico.setItemValue('hist_'+key, itens[key]);

	var fotocadastro = formHospedesHistorico.getContainer("hist_foto_hospede");
	fotocadastro.innerHTML = '<img id="imghistoricocadastrohospede" style="width: 120px;" alt="" src="' + itens.foto1 + '">';

	if (fotocadastro != null && itens.foto1 != null) {
		if (itens.foto1.length > 0) {
			fotocadastro.innerHTML = '<img id="imgfotodohospede" style="width: 120px;" alt="" src="' + itens.foto1 + '">';
		}
	}
}

function gridLoadHospedes() {

	if (admunidade === undefined)
		return;

	var gridSourceHospedes;
	gridSourceHospedes = {
		contenttype: 'xml',
		action: 'dhtmlxgrid',
		origem: 'condominio.hospedes_info',
		campos: 'num,nome,filedate as entrada,nascimento as "Data de nascimento",situacao_hospede as situacao',
		where: 'condominio/' + admunidade.condominio +
		'|bloco/' + admunidade.bloco +
		'|andar/' + admunidade.andar +
		'|admunidade/' + admunidade.pk_unidade,
		orderby: 'num',
		usecheckbox: 'false',
		usedecimal: 'nome',
		chave: 'num',
		displaychave: 'false'
	};

	gridHospedes.loadXML(sys.setParameters(gridSourceHospedes));
}

function gridLoadHospedesHistoricoCadastro() {

	if (admunidade === undefined)
		return;

	var gridSourceHospedesHistoricoCadastro;
	gridSourceHospedesHistoricoCadastro = {
		contenttype: 'xml',
		action: 'dhtmlxgrid',
		origem: 'expurgo.hospedes_info',
		campos: 'num,nome,filedate as entrada,nascimento as "Data de nascimento",situacao_hospede as situacao',
		where: 'condominio/' + admunidade.condominio +
		'|bloco/' + admunidade.bloco +
		'|andar/' + admunidade.andar +
		'|admunidade/' + admunidade.pk_unidade,
		orderby: 'num',
		usecheckbox: 'false',
		usedecimal: 'nome',
		chave: 'num',
		displaychave: 'false'
	};

	gridHospedesHistoricoCadastro.loadXML(sys.setParameters(gridSourceHospedesHistoricoCadastro));
}

function obtemDataEntradaHospede() {

	var arrayMes = new Array(12);
	arrayMes[0] = "01";
	arrayMes[1] = "02";
	arrayMes[2] = "03";
	arrayMes[3] = "04";
	arrayMes[4] = "05";
	arrayMes[5] = "06";
	arrayMes[6] = "07";
	arrayMes[7] = "08";
	arrayMes[8] = "09";
	arrayMes[9] = "10";
	arrayMes[10] = "11";
	arrayMes[11] = "12";

	var dataAtual = new Date();
	var dia = dataAtual.getDate();
	var mes = arrayMes[dataAtual.getMonth()];
	var ano = dataAtual.getFullYear();
	return dia + '/' + mes + '/' + ano;

}