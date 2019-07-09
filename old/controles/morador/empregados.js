/**
 * Created by Oberdan on 06/06/14.
 */
var gridEmpregados;
var formEmpregados;
function empregados() {

    var paramEmpregado;
    sessionStorage.recursocorrente = 'empregados';
    formEmpregados = nav_layout_principal.attachForm(campos_empregados);

    var userprofile = JSON.parse(sessionStorage.auth).user.perfil;
    var perfil_corrente;
    for (var i = 0; i < userprofile.length; i++)
        if (userprofile[i].nome_recurso == 'empregados') {
            perfil_corrente = userprofile[i];
            break;
        }

    if (perfil_corrente.adicionar == 0)
        formEmpregados.hideItem('novo');

    if (perfil_corrente.editar == 0)
        formEmpregados.hideItem('salvar');

    if (perfil_corrente.remover == 0)
        formEmpregados.hideItem('remover');

    if (perfil_corrente.telefones == 0)
        formEmpregados.hideItem('telefone_cel');

    if (perfil_corrente.documentos == 0) {
        formEmpregados.hideItem('rg');
        formEmpregados.hideItem('cpf');
    }

    formEmpregados.attachEvent("onButtonClick", function (name) {

        if (name == 'novo') {
            sys.FormClear(formEmpregados);
            formEmpregados.setFormData({num:null});

        } else if (name == 'salvar') {
            formEmpregados.validate();

        } else if (name == 'remover') {

            if (formEmpregados.getItemValue('num') == '')
                return;

	        dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {
		        if (result == true) {

			        paramEmpregado = {
				        contenttype: 'xml',
				        action: 'delete',
				        origem: 'condominio.empregados',
				        returnkey: 'num',
				        condominio: admunidade.condominio,
				        bloco: admunidade.bloco,
				        andar: admunidade.andar,
				        unidade: admunidade.pk_unidade
			        };

			        sys.FormAction(
				        sys.setParameters(
					        sys.mergeAttributes(paramEmpregado, formEmpregados.getFormData())
				        ), ResultFormEmpregados
			        );
		        }
	        });
        } else if (name == 'finalizar') {
            main();
        }
    });

    formEmpregados.attachEvent("onAfterValidate", function (status) {
        if (status == false)
            return;

        var today = new Date();

        paramEmpregado = {
            contenttype: 'xml',
            action: 'insert',
            origem: 'condominio.empregados',
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
                sys.mergeAttributes(paramEmpregado, formEmpregados.getFormData())
            ), ResultFormEmpregados
        );

    });

    gridEmpregados = new dhtmlXGridObject(formEmpregados.getContainer("gridempregados"));
    gridEmpregados.setIconsPath('./codebase/imgs/');
    gridEmpregados.init();
    gridEmpregados.attachEvent('onRowSelect', function (id) {

        var formSourceEmpregados;
        formSourceEmpregados = {
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: 'condominio.empregados',
            where: 'condominio/' + admunidade.condominio +
                '|bloco/' + admunidade.bloco +
                '|andar/' + admunidade.andar +
                '|admunidade/' + admunidade.pk_unidade +
                '|num/' + id,
            chave: 'num'
        };

        sys.FormAction(
            sys.setParameters(formSourceEmpregados), LoadFormEmpregados
        );

    });
    gridLoadEmpregados();
}

function ResultFormEmpregados(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.registro != undefined && out.registro.length > 0) {
        gridLoadEmpregados();
        sys.FormClear(formEmpregados);
        alert(out.situacao);
    } else {
        alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
    }
}

function LoadFormEmpregados(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formEmpregados.setItemValue(key,  itens[key]);

    formEmpregados.setItemValue('nome_condominio', admunidade.nome_condominio);
    formEmpregados.setItemValue('nome_bloco', admunidade.nome_bloco);
    formEmpregados.setItemValue('nome_andar', admunidade.nome_andar);
    formEmpregados.setItemValue('nome_unidade', admunidade.unidade);

}

function gridLoadEmpregados() {

    if (admunidade === undefined)
        return;

    var gridSourceEmpregados;
    gridSourceEmpregados = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        origem: 'condominio.empregados',
        campos: 'num,nome,servico_prestado',
        where: 'condominio/' + admunidade.condominio +
            '|bloco/' + admunidade.bloco +
            '|andar/' + admunidade.andar +
            '|admunidade/' + admunidade.pk_unidade,
        orderby:'num',
        usecheckbox: 'false',
        usedecimal:'nome',
        chave: 'num',
        displaychave: 'false'
    };

    gridEmpregados.loadXML(sys.setParameters(gridSourceEmpregados));
}