/**
 * Created by Oberdan on 13/11/14.
 */
var gridcadastro;
var gridHistoricoAcesso;
var formcadastro;

function prestadores() {

	var paramcadastro;
    sessionStorage.recursocorrente = 'cadastro';
	formcadastro = nav_layout_principal.attachForm(campos_cadastro_portaria);

	var userprofile = JSON.parse(sessionStorage.auth).user.perfil;
	/*var profile_cadastro;
	 for (var i = 0; i < userprofile.length; i++)
	 if (userprofile[i].nome_recurso == 'cadastro') {
	 profile_cadastro = userprofile[i];
	 break;
	 }

	 if (profile_cadastro.adicionar == 0)
	 formcadastro.hideItem('novo');

	 if (profile_cadastro.editar == 0)
	 formcadastro.hideItem('salvar');

	 if (profile_cadastro.remover == 0)
	 formcadastro.hideItem('remover');

	 if (profile_cadastro.remover == 0)
	 formcadastro.hideItem('remover');

	 if (profile_cadastro.documentos == 0) {
	 formcadastro.hideItem('cpf');
	 formcadastro.hideItem('rg');
	 formcadastro.hideItem('telefone');
	 formcadastro.hideItem('fotocadastro');
	 }*/

	formcadastro.attachEvent("onButtonClick", function (name) {

		if (name == 'novo') {
			formcadastro.reset();
			sys.FormClear(formcadastro);
			formcadastro.showItem('parentesco');

		} else if (name == 'salvar') {
			if (formcadastro.getItemValue('proprietario') == '1' && formcadastro.getItemValue('rg').length == 0) {
				alert('Informe o numero do documento de identifica��o');
				return;
			}
			formcadastro.validate();

		} else if (name == 'remover') {

			if (formcadastro.getItemValue('num') == '')
				return;

			dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {
				if (result == true) {
					paramcadastro = {
						contenttype: 'xml',
						action: 'delete',
						origem: 'portaria.cadastro',
						returnkey: 'num',
						condominio: admunidade.condominio,
						bloco: admunidade.bloco,
						andar: admunidade.andar,
						unidade: admunidade.pk_unidade
					};

					sys.FormAction(
						sys.setParameters(
							sys.mergeAttributes(paramcadastro, formcadastro.getFormData())
						), ResultFormcadastro
					);
				}
			});

		} else if (name == 'finalizar') {
			main();
		} else if (name == 'fotocadastro') {
			foto(formcadastro.getItemValue('num'), 'Obter foto do cadastro', 'portaria.cadastro', 'foto1', ResultFormCadastrocadastro);

		} else if (name == 'registrar_entrada') {

			var registro = formcadastro.getItemValue('num');

			if (registro == '') {
				alert('Primeiro selecione um cadastro na lista');
				return;
			}

            var today = new Date();

			paramcadastro = {
				contenttype: 'xml',
				action: 'insert',
				origem: 'acesso.passagem',
				returnkey: 'num',
				condominio: admunidade.condominio,
				bloco: admunidade.bloco,
				andar: admunidade.andar,
				unidade: admunidade.pk_unidade,
				autenticacao: formcadastro.getItemValue('num'),
				portaid: 1,
				sistema: 3,
				situacao: 1,
				sentido: 1,
                lastdate: today.format("yyyy-mm-dd"),
                lasttime: today.format("HH:MM:ss"),
                lastuser: informacoesdousuario.uidins
			};

			sys.FormAction(
				sys.setParameters(
					paramcadastro
				), ResultRegistroPassagem
			);

			Impressao_Acesso(registro);
		} else if (name == 'registrar_saida') {

			var registro = formcadastro.getItemValue('num');

			if (registro == '') {
				alert('Primeiro selecione um cadastro na lista');
				return;
			}

            var today = new Date();

			paramcadastro = {
				contenttype: 'xml',
				action: 'insert',
				origem: 'acesso.passagem',
				returnkey: 'num',
				condominio: admunidade.condominio,
				bloco: admunidade.bloco,
				andar: admunidade.andar,
				unidade: admunidade.pk_unidade,
				autenticacao: formcadastro.getItemValue('num'),
				observacoes: formcadastro.getItemValue('observacoes_porteiro'),
				portaid: 1,
				sistema: 3,
				situacao: 1,
				sentido: 0,
                lastdate: today.format("yyyy-mm-dd"),
                lasttime: today.format("HH:MM:ss"),
                lastuser: informacoesdousuario.uidins
			};

			sys.FormAction(
				sys.setParameters(
					paramcadastro
				), ResultRegistroPassagem
			);

		}
	});

	formcadastro.attachEvent("onAfterValidate", function (status) {
		if (status == false)
			return;

        var today = new Date();

		paramcadastro = {
			contenttype: 'xml',
			action: 'insert',
			origem: 'portaria.cadastro',
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
				sys.mergeAttributes(paramcadastro, formcadastro.getFormData())
			), ResultFormcadastro
		);

	});

	gridHistoricoAcesso = new dhtmlXGridObject(formcadastro.getContainer("gridhistoricoacesso"));
	gridHistoricoAcesso.setIconsPath('./codebase/imgs/');
	gridHistoricoAcesso.init();

	gridcadastro = new dhtmlXGridObject(formcadastro.getContainer("gridfamiliares"));
	gridcadastro.setIconsPath('./codebase/imgs/');
	gridcadastro.init();
	gridcadastro.attachEvent('onRowSelect', function (id) {

		var formSourcecadastro;
		formSourcecadastro = {
			dados: 'teste',
			contenttype: 'xml',
			action: 'directjson',
			origem: 'portaria.cadastro',
			where: 'num/' + id,
			chave: 'num'
		};

		sys.FormAction(
			sys.setParameters(formSourcecadastro), LoadFormcadastro
		);

	});
	gridLoadcadastro();

}

function ResultFormcadastro(http) {
	var out;
	out = {registro: '', situacao: ''};
	out = JSON.parse(http.responseText);

	if (out.registro != undefined && out.registro.length > 0) {
		gridLoadcadastro();
		sys.FormClear(formcadastro);
		formcadastro.showItem('parentesco');

		var fotocadastro = formcadastro.getContainer("foto_cadastro");
		if (fotocadastro != null)
			fotocadastro.innerHTML = '';

		alert(out.situacao);
	} else {
		alert('Houve um erro ao enviar os dados. Por favor aguarde um instante!');
	}
}
function ResultRegistroPassagem(http) {
	var out;
	out = JSON.parse(http.responseText);
	formcadastro.setItemValue('situacao', out.situacao + ' registro:' + out.registro);
}

function LoadFormcadastro(http) {

	var out;
	out = JSON.parse(http.responseText);

	var itens = out[0];
	for (var key in itens)
		if (itens.hasOwnProperty(key))
			formcadastro.setItemValue(key, itens[key]);

	formcadastro.setItemValue('nome_condominio', admunidade.nome_condominio);
	formcadastro.setItemValue('nome_bloco', admunidade.nome_bloco);
	formcadastro.setItemValue('nome_andar', admunidade.nome_andar);
	formcadastro.setItemValue('nome_unidade', admunidade.unidade);

	var fotocadastro = formcadastro.getContainer("foto_cadastro");
	fotocadastro.innerHTML = '';

	if (fotocadastro != null && itens.foto1 != null) {
		if (itens.foto1.length > 0) {
			fotocadastro.innerHTML = '<img style="width: 120px;" alt="" src="' + itens.foto1 + '">';
		}
	}
}

function gridLoadcadastro() {

	if (admunidade === undefined)
		return;

	var gridSourcecadastro;
	gridSourcecadastro = {
		contenttype: 'xml',
		action: 'dhtmlxgrid',
		origem: 'portaria.cadastro',
		campos: "num,num as registro, nome,empresa, to_char(expiracao, 'dd/mm/YYYY') as expiracao",
		orderby: 'num',
		usecheckbox: 'false',
		chave: 'num',
		displaychave: 'false'
	};

	gridcadastro.loadXML(sys.setParameters(gridSourcecadastro));
}

function ResultFormCadastrocadastro(http) {
	var out;

	out = JSON.parse(http.responseText);

	if (out.situacao.indexOf('sucesso') > 0) {
		recebeImagemPrestador(ultimaimagem);
		windowAtualizarDadosFoto.close();
	} else {
		alert('Erro no envio dos dados');
	}
}

function recebeImagemPrestador(imagem) {

	var fotocadastro = formcadastro.getContainer("foto_cadastro");
	if (fotocadastro != null) {
		fotocadastro.innerHTML = '<img style="width: 120px;" alt="" src="' + imagem + '">';
	}
}

function Impressao_Acesso(num) {

	var width = 400;
	var height = 550;
	var left = 99;
	var top = 99;
	window.open('./controles/portaria/estrutura/barcode.php?registro=' + num, 'acesso', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', scrollbars=no, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');

}