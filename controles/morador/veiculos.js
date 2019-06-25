/**
 * Created by Oberdan on 06/06/14.
 */
var gridVeiculos;
var gridVeiculosexcluidos;
var gridVeiculospassagem;
var formVeiculos;
var formVeiculosExcluidos;
var formVeiculosPassagens;

function veiculos() {

	var tabbarVeiculos = nav_layout_principal.attachTabbar();
    tabbarVeiculos.addTab('tabCadastroVeiculo','Cadastro','');

	var tabCadastroVeiculo = tabbarVeiculos.cells('tabCadastroVeiculo');
    formVeiculos = tabCadastroVeiculo.attachForm(campos_veiculos);
    tabbarVeiculos.setTabActive('tabCadastroVeiculo');

	tabbarVeiculos.addTab('tabVeiculosExcluidos','Histórico','');
	var tabbarVeiculosExcluidos = tabbarVeiculos.cells('tabVeiculosExcluidos');
	formVeiculosExcluidos = tabbarVeiculosExcluidos.attachForm(campos_veiculos_excluidos);

	tabbarVeiculos.addTab('tabVeiculosPassagens','Passagem','');
	var tabbarVeiculosPassagens = tabbarVeiculos.cells('tabVeiculosPassagens');
	formVeiculosPassagens = tabbarVeiculosPassagens.attachForm(campos_veiculos_passagens);

	var paramVeiculo;
	userinfo = JSON.parse(sessionStorage.userinfo);
    sessionStorage.recursocorrente = 'veiculos()';
	formVeiculos.enableLiveValidation(true);

    var userprofile = JSON.parse(sessionStorage.perfil_usuario);
    var perfil_corrente;
    for (var i = 0; i < userprofile.length; i++)
        if (userprofile[i].nome_recurso == 'veiculos') {
            perfil_corrente = userprofile[i];
            break;
        }

    if (perfil_corrente.adicionar == 0)
        formVeiculos.hideItem('novo');

    if (perfil_corrente.editar == 0)
        formVeiculos.hideItem('salvar');

    if (perfil_corrente.remover == 0) {
        formVeiculos.hideItem('remover');
        formVeiculos.hideItem('transferir');
    }

/*    if (perfil_corrente.documentos == 0) {
        formVeiculos.hideItem('placa_letras');
        formVeiculos.hideItem('placa_numeros');
    }
*/
	var data_inicial = formVeiculosPassagens.getCalendar('data_inicial');
	data_inicial.loadUserLanguage('pt');
	data_inicial.hideTime();

	var data_final = formVeiculosPassagens.getCalendar('data_final');
	data_final.loadUserLanguage('pt');
	data_final.hideTime();


	formVeiculosPassagens.attachEvent("onButtonClick", function (name) {
		buscaInformacoes(name);
    });

    formVeiculos.attachEvent("onButtonClick", function (name) {

		if (name == 'novo') {
			sys.FormClear(formVeiculos);
			formVeiculos.setFormData({num: null});

		} else if (name == 'salvar') {
			formVeiculos.validate();

		} else if (name == 'remover') {

			if (formVeiculos.getItemValue('num') == '')
				return;

			dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {
				if (result == true) {
					paramVeiculo = {
						contenttype: 'xml',
						action: 'delete',
						origem: 'condominio.veiculos',
						returnkey: 'num',
						condominio: userinfo.condominio,
						bloco: userinfo.bloco,
						andar: userinfo.andar,
						unidade: userinfo.pk_unidade
					};

					sys.FormAction(
						sys.setParameters(
							sys.mergeAttributes(paramVeiculo, formVeiculos.getFormData())
						), ResultFormVeiculos
					);
				}
			});

		} else if (name == 'transferir') {

			var busca_nova_unidade = {
				dados: 'teste',
				contenttype: 'xml',
				action: 'directjson',
				campos: 'num,condominio,bloco,andar,unidade',
				origem: 'condominio.unidades',
				where: 'condominio/' + userinfo.condominio +
				'|bloco/' + formVeiculos.getItemValue('nova_torre') +
				'|unidade/' + formVeiculos.getItemValue('nova_unidade'),
				chave: 'num'
			};

			sys.FormAction(
				sys.setParameters(busca_nova_unidade), ResultNovaLocalizacao
			);

		} else if (name == 'finalizar') {
			main();
		}
	});

	formVeiculos.attachEvent("onAfterValidate", function (status) {
		if (status == false)
			return;

		var dados = formVeiculos.getFormData();

        var today = new Date();

		paramVeiculo = {
			contenttype: 'xml',
			action: 'insert',
			origem: 'condominio.veiculos',
			returnkey: 'num',
			condominio: userinfo.condominio,
			bloco: userinfo.bloco,
			andar: userinfo.andar,
			unidade: userinfo.pk_unidade,
            lastdate: today.format("yyyy-mm-dd"),
            lasttime: today.format("HH:MM:ss"),
            lastuser: informacoesdousuario.uidins
		};

		sys.FormAction(
			sys.setParameters(
				sys.mergeAttributes(paramVeiculo, formVeiculos.getFormData())
			), ResultFormVeiculos
		);
	});

	gridVeiculos = new dhtmlXGridObject(formVeiculos.getContainer("gridveiculos"));
	gridVeiculos.setIconsPath('./codebase/imgs/');
	gridVeiculos.init();
	gridVeiculos.attachEvent('onRowSelect', function (id) {

		var formSourceVeiculos;
		formSourceVeiculos = {
			dados: 'teste',
			contenttype: 'xml',
			action: 'directjson',
			origem: 'condominio.veiculos_info',
			where: 'condominio/' + userinfo.condominio +
			'|bloco/' + userinfo.bloco +
			'|andar/' + userinfo.andar +
			'|unidade/' + userinfo.pk_unidade +
			'|num/' + id,
			chave: 'num'
		};

		sys.FormAction(
			sys.setParameters(formSourceVeiculos), LoadFormVeiculos
		);

	});
	gridLoadVeiculos();

	gridVeiculosexcluidos = new dhtmlXGridObject(formVeiculosExcluidos.getContainer("gridveiculosexcluidos"));
    gridVeiculosexcluidos.setIconsPath('./codebase/imgs/');
    gridVeiculosexcluidos.init();
    gridVeiculosexcluidos.attachEvent('onRowSelect', function (id) {

		var formSourceVeiculos;
		formSourceVeiculos = {
			dados: 'teste',
			contenttype: 'xml',
			action: 'directjson',
			origem: 'expurgo.veiculos_info',
			where: 'condominio/' + userinfo.condominio +
			'|bloco/' + userinfo.bloco +
			'|andar/' + userinfo.andar +
			'|unidade/' + userinfo.pk_unidade +
			'|num/' + id,
			chave: 'num'
		};

		sys.FormAction(
			sys.setParameters(formSourceVeiculos), LoadFormVeiculosExcluidos
		);

	});
    gridLoadVeiculosExcluidos();

    gridVeiculospassagem = new dhtmlXGridObject(formVeiculosPassagens.getContainer("gridveiculospassagem"));
    gridVeiculospassagem.setIconsPath('./codebase/imgs/');
    gridVeiculospassagem.init();
    gridVeiculospassagem.attachEvent('onRowSelect', function (id) {

        var formSourceVeiculos;
        formSourceVeiculos = {
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: 'acesso.historico_veicular_unidade',
            where: 'condominio/' + userinfo.condominio +
            '|bloco/' + userinfo.bloco +
            '|pk_unidade/' + userinfo.pk_unidade +
            '|num/' + id,
            chave: 'num'
        };

        sys.FormAction(
            sys.setParameters(formSourceVeiculos), LoadFormVeiculosPassagem
        );

    });

}

function ResultFormVeiculos(http) {
	var out;
	out = {registro: '', situacao: ''};
	out = JSON.parse(http.responseText);

	if (out.registro != undefined && out.registro.length > 0) {
		gridLoadVeiculos();
		sys.FormClear(formVeiculos);
		alert(out.situacao);
	} else {
		alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
	}
}

function LoadFormVeiculos(http) {

	var out;
	out = JSON.parse(http.responseText);

	var itens = out[0];
	for (var key in itens)
		if (itens.hasOwnProperty(key))
			formVeiculos.setItemValue(key, itens[key]);

	if (itens['situacao_estacionamento'] == 1) {
		formVeiculos.setItemValue('situacao_estacionamento', true);
	} else {
		formVeiculos.setItemValue('situacao_estacionamento', false);
	}

	formVeiculos.setItemValue('nome_condominio', userinfo.nome_condominio);
	formVeiculos.setItemValue('nome_bloco', userinfo.nome_bloco);
	formVeiculos.setItemValue('nome_andar', userinfo.nome_andar);
	formVeiculos.setItemValue('nome_unidade', userinfo.unidade);
	//formVeiculos.setItemValue('filedate', sys.obtemDataEntradaFormatada(itens['filedate']));

	var bindcombobloqueios = {
		parametros: true,
		contenttype: 'xml',
		action: 'select_combo',
		grava_sessao: 'true',
		nome_sessao: 'combo_bloqueios',
		orderby: 'num',
		campos: 'num, descricao as tipo',
		origem: 'acesso.bloqueio'
	};

	sys.FormAction(sys.setParameters(bindcombobloqueios), ResultBindcomboBloqueios);


}

function LoadFormVeiculosExcluidos(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formVeiculosExcluidos.setItemValue(key, itens[key]);

    if (itens['situacao_estacionamento'] == 1) {
        formVeiculosExcluidos.setItemValue('situacao_estacionamento', true);
    } else {
        formVeiculosExcluidos.setItemValue('situacao_estacionamento', false);
    }

}


function LoadFormVeiculosPassagem(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formVeiculosPassagens.setItemValue(key, itens[key]);
}


function ResultBindcomboBloqueios(http) {
    var bloqueios = formVeiculos.getCombo('bloqueio');
    bloqueios.loadXMLString(http.responseText);
}

function ResultNovaLocalizacao(http) {

	var out;
	out = JSON.parse(http.responseText);

	var itens = out[0];
	var num = itens['num'];
	var condominio = itens['condominio'];
	var bloco = itens['bloco'];
	var andar = itens['andar'];

	var troca_unidade = {
		contenttype: 'xml',
		action: 'insert',
		origem: 'condominio.veiculos',
		returnkey: 'num',
		condominio: condominio,
		bloco: bloco,
		andar: andar,
		unidade: num,
		where: 'condominio/' + userinfo.condominio +
		'|bloco/' + userinfo.bloco +
		'|andar/' + userinfo.andar +
		'|unidade/' + userinfo.pk_unidade
	};

	sys.FormAction(
		sys.setParameters(
			sys.mergeAttributes(troca_unidade, formVeiculos.getFormData())
		), ResultTransferenciaVeiculo
	);

}

function ResultTransferenciaVeiculo(http) {

	var out;
	out = JSON.parse(http.responseText);

	if (out.situacao.indexOf('sucesso') > 0) {
		gridLoadVeiculos();
		sys.FormClear(formVeiculos);
		alert('Comando realizado com sucesso!');
	} else {
		alert('Falha no comando');
	}
}

function gridLoadVeiculos() {

	userinfo = JSON.parse(sessionStorage.userinfo);
	if (userinfo == undefined)
		return;

	var gridSourceVeiculos;
	gridSourceVeiculos = {
		contenttype: 'xml',
		action: 'dhtmlxgrid',
		origem: 'condominio.veiculos',
		campos: 'num,modelo,marca,cor',
		where: 'condominio/' + userinfo.condominio +
		'|bloco/' + userinfo.bloco +
		'|andar/' + userinfo.andar +
		'|unidade/' + userinfo.pk_unidade,
		orderby: 'num',
		usecheckbox: 'false',
		usedecimal: 'modelo',
		chave: 'num',
		displaychave: 'false'
	};

	gridVeiculos.loadXML(sys.setParameters(gridSourceVeiculos));
}

function gridLoadVeiculosExcluidos() {

	userinfo = JSON.parse(sessionStorage.userinfo);
	if (userinfo == undefined)
		return;

	var gridSourceVeiculos;
	gridSourceVeiculos = {
		contenttype: 'xml',
		action: 'dhtmlxgrid',
		origem: 'expurgo.veiculos',
		campos: 'num,modelo,marca,cor',
		where: 'condominio/' + userinfo.condominio +
		'|bloco/' + userinfo.bloco +
		'|andar/' + userinfo.andar +
		'|unidade/' + userinfo.pk_unidade,
		orderby: 'num',
		usecheckbox: 'false',
		usedecimal: 'modelo',
		chave: 'num',
		displaychave: 'false'
	};

    gridVeiculosexcluidos.loadXML(sys.setParameters(gridSourceVeiculos));
}

function buscaInformacoes(tipo) {

	userinfo = JSON.parse(sessionStorage.userinfo);
	if (userinfo == undefined)
		return;

	var data_inicial = new Date(formVeiculosPassagens.getItemValue('data_inicial'));
	var dd = data_inicial.getDate();
	var mm = data_inicial.getMonth()+1;
	var yyyy = data_inicial.getFullYear();

	data_inicial = yyyy + '-' + mm + '-' + dd;


	var data_final = new Date(formVeiculosPassagens.getItemValue('data_final'));
	dd = data_final.getDate();
	mm = data_final.getMonth()+1;
	yyyy = data_final.getFullYear();

	data_final = yyyy + '-' + mm + '-' + dd;

	var torre = userinfo.bloco;
	var unidade = userinfo.pk_unidade.trim();
	var placa = formVeiculosPassagens.getItemValue('buscar_placa').toUpperCase();
	var busca_localizacao = '';

	if (torre != undefined && torre != null && torre != '' && unidade != undefined && unidade != null && unidade != '')
		busca_localizacao += "' and bloco = '" + torre +"' and pk_unidade = '" + unidade;

	if (placa != undefined && placa != null && placa != '')
		busca_localizacao += "' and upper(placa_letras) = '" + placa.substr(0, 3).trim() +"' and placa_numeros::int = '" + placa.substr(4, 4);

	var parametros;
	parametros = {
		contenttype: 'xml',
		action: 'dhtmlxgrid',
		origem: 'acesso.historico_veicular_unidade',
		campos: "filedate, timerg, num, portaid, modelo,placa_letras || '-' || placa_numeros as placa, cor",
		where: "filedate::date between '"+data_inicial+"' and '"+data_final + busca_localizacao,
		orderby: 'num desc',
		usecheckbox: 'false',
		usedecimal: 'filedate',
		chave: 'num',
		displaychave: 'false'
	};

	if (tipo == 'exportar') {

		parametros = {
			dados: 'teste',
			contenttype: 'xml',
			action: 'exportexcel',
			origem: 'acesso.historico_veicular_unidade',
			whereexp: "filedate::date between '"+data_inicial+"' and '"+data_final + busca_localizacao + "'",
			orderby: 'num desc',
			usecheckbox: 'false',
			usedecimal: 'filedate',
			chave: 'num',
			displaychave: 'false'
		};

		sys.FormAction(
			sys.setParameters(parametros), function(http) {
					var win = window.open(window.location.href.substr(0, window.location.href.length-1) + 'controles/main/controls/' + http.responseText, '_blank');
					win.focus();
				}
		);
	} else if (tipo == 'imprimir') {

		parametros = {
			dados: 'teste',
			whereexp: "filedate::date between '"+data_inicial+"' and '"+data_final + busca_localizacao + "'",
			data_inicial: formVeiculosPassagens.getCalendar('data_inicial').getFormatedDate("%d/%m/%Y"),
			data_final: formVeiculosPassagens.getCalendar('data_final').getFormatedDate("%d/%m/%Y"),
			torre:userinfo.bloco,
			unidade:userinfo.unidade,
			placa:formVeiculosPassagens.getItemValue('buscar_placa').toUpperCase()
		};

		var win = window.open(window.location.href.substr(0, window.location.href.length-1) + 'controles/main/relatorios/001.php?d='+sys.setParameters(parametros), '_blank');
		win.focus();
		win.onload = function() {
			win.print();
		}

	} else {
		gridVeiculospassagem.loadXML(sys.setParameters(parametros));
	}
}