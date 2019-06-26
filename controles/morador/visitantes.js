/**
 * Created by Oberdan on 06/06/14.
 */
var gridVisitantes;
var formVisitantes;
function visitantes() {

    var paramVisitante;
    sessionStorage.recursocorrente = 'visitantes()';
    formVisitantes = nav_layout_principal.attachForm(campos_visitantes);

    var userprofile = JSON.parse(sessionStorage.auth).user.perfil;
    var perfil_corrente;
    for (var i = 0; i < userprofile.length; i++)
        if (userprofile[i].nome_recurso == 'visitantes') {
            perfil_corrente = userprofile[i];
            break;
        }

    if (perfil_corrente.adicionar == 0)
        formVisitantes.hideItem('novo');

    if (perfil_corrente.editar == 0)
        formVisitantes.hideItem('salvar');

    if (perfil_corrente.remover == 0)
        formVisitantes.hideItem('remover');

    if (perfil_corrente.telefones == 0) {
        formVisitantes.hideItem('telefone_res');
        formVisitantes.hideItem('telefone_cel');
    }

    if (perfil_corrente.documentos == 0)
        formVisitantes.hideItem('cpf');

    formVisitantes.attachEvent("onButtonClick", function (name) {

        if (name == 'novo') {
            sys.FormClear(formVisitantes);
            formVisitantes.setFormData({num:null});

        } else if (name == 'salvar') {
            formVisitantes.validate();

        } else if (name == 'remover') {

            if (formVisitantes.getItemValue('num') == '')
                return;

	        dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {
		        if (result == true) {

			        paramVisitante = {
				        contenttype: 'xml',
				        action: 'delete',
				        origem: 'condominio.visitantes',
				        returnkey: 'num',
				        condominio: unidadecorrente.condominio,
				        bloco: unidadecorrente.bloco,
				        andar: unidadecorrente.andar,
				        unidade: unidadecorrente.pk_unidade
			        };

			        sys.FormAction(
				        sys.setParameters(
					        sys.mergeAttributes(paramVisitante, formVisitantes.getFormData())
				        ), ResultFormVisitantes
			        );

		        }
	        });

        } else if (name == 'finalizar') {
            main();
        }
    });

    formVisitantes.attachEvent("onAfterValidate", function (status) {
        if (status == false)
            return;

        var today = new Date();

        paramVisitante = {
            contenttype: 'xml',
            action: 'insert',
            origem: 'condominio.visitantes',
            returnkey: 'num',
            condominio: unidadecorrente.condominio,
            bloco: unidadecorrente.bloco,
            andar: unidadecorrente.andar,
            unidade: unidadecorrente.pk_unidade,
            lastdate: today.format("yyyy-mm-dd"),
            lasttime: today.format("HH:MM:ss"),
            lastuser: informacoesdousuario.uidins
        };

        sys.FormAction(
            sys.setParameters(
                sys.mergeAttributes(paramVisitante, formVisitantes.getFormData())
            ), ResultFormVisitantes
        );
    });

    gridVisitantes = new dhtmlXGridObject(formVisitantes.getContainer("gridvisitantes"));
    gridVisitantes.setIconsPath('./codebase/imgs/');
    gridVisitantes.init();
    gridVisitantes.attachEvent('onRowSelect', function (id) {

        var formSourceVisitantes;
        formSourceVisitantes = {
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: 'condominio.visitantes',
            where: 'condominio/' + unidadecorrente.condominio +
                '|bloco/' + unidadecorrente.bloco +
                '|andar/' + unidadecorrente.andar +
                '|unidadecorrente/' + unidadecorrente.pk_unidade +
                '|num/' + id,
            chave: 'num'
        };

        sys.FormAction(
            sys.setParameters(formSourceVisitantes), LoadFormVisitantes
        );

    });
    gridLoadVisitantes();
}

function ResultFormVisitantes(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.registro != undefined && out.registro.length > 0) {
        gridLoadVisitantes();
        sys.FormClear(formVisitantes);
        alert(out.situacao);
    } else {
        alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
    }
}

function LoadFormVisitantes(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formVisitantes.setItemValue(key,  itens[key]);

    formVisitantes.setItemValue('nome_condominio', unidadecorrente.nome_condominio);
    formVisitantes.setItemValue('nome_bloco', unidadecorrente.nome_bloco);
    formVisitantes.setItemValue('nome_andar', unidadecorrente.nome_andar);
    formVisitantes.setItemValue('nome_unidade', unidadecorrente.unidade);

}

function gridLoadVisitantes() {

    if (unidadecorrente === undefined)
        return;

    var gridSourceVisitantes;
    gridSourceVisitantes = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        origem: 'condominio.visitantes',
        campos: 'num,nome,rg,cpf',
        where: 'condominio/' + unidadecorrente.condominio +
            '|bloco/' + unidadecorrente.bloco +
            '|andar/' + unidadecorrente.andar +
            '|unidadecorrente/' + unidadecorrente.pk_unidade,
        orderby:'num',
        usecheckbox: 'false',
        usedecimal:'nome',
        chave: 'num',
        displaychave: 'false'
    };

    gridVisitantes.loadXML(sys.setParameters(gridSourceVisitantes));
}