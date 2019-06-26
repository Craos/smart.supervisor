/**
 * Created by Oberdan on 06/06/14.
 */
var gridRegistroVisitas;
var gridHistoricoRegistroVisitas;
var formVisitante;

function visitante() {

    formVisitantesHistorico = nav_layout_principal.attachForm(campos_historico_visitante);

	var paramVeiculo;
    sessionStorage.recursocorrente = 'visitante()';

	formVisitantesHistorico.attachEvent("onButtonClick", carregaHistoricoAutoricacoes);
	var data_inicial = formVisitantesHistorico.getCalendar('data_inicial');
	data_inicial.loadUserLanguage('pt');
	data_inicial.hideTime();

	var data_final = formVisitantesHistorico.getCalendar('data_final');
	data_final.loadUserLanguage('pt');
	data_final.hideTime();

	gridHistoricoRegistroVisitas = new dhtmlXGridObject(formVisitantesHistorico.getContainer("gridhistoricoautorizacoes"));
	gridHistoricoRegistroVisitas.setIconsPath('./codebase/imgs/');
	gridHistoricoRegistroVisitas.init();
    gridHistoricoRegistroVisitas.attachEvent('onRowSelect', function (id) {

        var formSourceVisitantes;
        formSourceVisitantes = {
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: 'visitante.detalhe_autorizacao',
            where: 'num/' + id,
            chave: 'num'
        };

        sys.FormAction(
            sys.setParameters(formSourceVisitantes), LoadFormVisitante
        );
    });

}

function ResultFormVisitante(http) {
	var out;
	out = {registro: '', situacao: ''};
	out = JSON.parse(http.responseText);

	if (out.registro != undefined && out.registro.length > 0) {
		sys.FormClear(formVisitante);
		gridLoadHistoricoVisitas();
	} else {
		alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
	}
}

function ResultBuscaVeiculoMorador(http) {

	var out;
	out = JSON.parse(http.responseText);

	if (out.length > 0) {
		alert('Tentativa de acesso do morador na passagem de visitante!\r\n' + 'Bloco:' + out[0].bloco + ' Unidade:' + out[0].unidade + '\r\n' + 'Responsavel:' + out[0].nome_proprietario);
	} else {
		formVisitante.validate();
	}
}

function LoadFormVisitante(http) {

	var out;
	out = JSON.parse(http.responseText);

	var itens = out[0];
	for (var key in itens)
		if (itens.hasOwnProperty(key))
            formVisitantesHistorico.setItemValue(key, itens[key]);

    var fotocadastro = formVisitantesHistorico.getContainer("f_documento");
    fotocadastro.innerHTML = '';

    if (fotocadastro != null && itens.foto_documento != null) {
        if (itens.foto_documento.length > 0) {
            fotocadastro.innerHTML = '<img style="width: 220px;" alt="" src="' + itens.foto_documento + '">';
        } else {

        }
    }

}

function gridLoadHistoricoVisitas() {

	if (unidadecorrente === undefined)
		return;

	var gridSourceHistoricoVisitas;
	gridSourceHistoricoVisitas = {
		teste: 'teste',
		contenttype: 'xml',
		action: 'dhtmlxgrid',
		usecheckbox: 'false',
		chave: 'num',
		origem: 'acesso.visitante_info'
	};

    var userprofile = JSON.parse(sessionStorage.auth).user.perfil;
    var perfil_corrente;
    for (var i = 0; i < userprofile.length; i++)
        if (userprofile[i].nome_recurso == 'visitante') {
            perfil_corrente = userprofile[i];
            break;
        }
}

function carregaHistoricoAutoricacoes() {

	var data_inicial = new Date(formVisitantesHistorico.getItemValue('data_inicial'));
	var dd = data_inicial.getDate();
	var mm = data_inicial.getMonth()+1;
	var yyyy = data_inicial.getFullYear();

	data_inicial = yyyy + '-' + mm + '-' + dd;

	var data_final = new Date(formVisitantesHistorico.getItemValue('data_final'));
	dd = data_final.getDate();
	mm = data_final.getMonth()+1;
	yyyy = data_final.getFullYear();

	data_final = yyyy + '-' + mm + '-' + dd;

	var torre = formVisitantesHistorico.getItemValue('buscar_torre');
	var unidade = formVisitantesHistorico.getItemValue('buscar_unidade');
	var placa = formVisitantesHistorico.getItemValue('buscar_placa').toUpperCase();
	var busca_localizacao = '';

	if (torre != undefined && torre != null && torre != '' && unidade != undefined && unidade != null && unidade != '')
		busca_localizacao += "' and bloco = '" + torre +"' and unidadecorrente = '" + unidade +" ";

	if (placa != undefined && placa != null && placa != '')
		busca_localizacao += "' and upper(placa) = '" + placa +" ";

	var gridSourceHistoricoAutorizacoes;
	gridSourceHistoricoAutorizacoes = {
		teste: 'teste',
		contenttype: 'xml',
		action: 'dhtmlxgrid',
		usecheckbox: 'false',
		campos:"registro, data, horario, bloco, unidadecorrente, nome, placa",
		chave: 'registro',
		origem: 'visitante.visitante_hist',
        where: "filedate between '"+data_inicial+"' and '"+data_final + busca_localizacao
	};

    var userprofile = JSON.parse(sessionStorage.auth).user.perfil;
    var perfil_corrente;
    for (var i = 0; i < userprofile.length; i++)
        if (userprofile[i].nome_recurso == 'visitante') {
            perfil_corrente = userprofile[i];
            break;
        }

    if (perfil_corrente.listar_registros == 1) {
        gridHistoricoRegistroVisitas.loadXML(sys.setParameters(gridSourceHistoricoAutorizacoes), function () {
            formVisitantesHistorico.setItemValue('totais', "Registros autorizados: " + gridHistoricoRegistroVisitas.getRowsNum());
        });
    }
}

// add once, make sure dhtmlxcalendar.js is loaded
dhtmlXCalendarObject.prototype.langData["pt"] = {
	// date format
	dateformat: "%d/%m/%Y",
	// full names of months
	monthesFNames: [
		"Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho",
		"Augusto","Setembro","Outubro","Novembro","Dezembro"
	],
	// short names of months
	monthesSNames: [
		"Jan","Fev","Mar","Abr","Mai","Jun",
		"Jul","Ago","Set","Out","Nov","Dez"
	],
	// full names of days
	daysFNames: [
		"Domingo","Segunda","Terça","Quarta",
		"Quinta","Sexta","Sábado"
	],
	// short names of days
	daysSNames: [
		"Do","Se","Te","Qu",
		"Qi","Sx","Sa"
	],
	// starting day of a week. Number from 1(Monday) to 7(Sunday)
	weekstart: 1,
	// the title of the week number column
	weekname: "w"
};
