/**
 * Created by Oberdan on 06/06/14.
 */
var gridAnimais;
var formAnimais;
function animais() {

    var paramAnimal;
    sessionStorage.recursocorrente = 'animais';
    formAnimais = nav_layout_principal.attachForm(campos_animais);

    var userprofile = JSON.parse(sessionStorage.auth).user.perfil;
    var perfil_corrente;
    for (var i = 0; i < userprofile.length; i++)
        if (userprofile[i].nome_recurso == 'animais') {
            perfil_corrente = userprofile[i];
            break;
        }

    if (perfil_corrente.adicionar == 0)
        formAnimais.hideItem('novo');

    if (perfil_corrente.editar == 0)
        formAnimais.hideItem('salvar');

    if (perfil_corrente.remover == 0)
        formAnimais.hideItem('remover');

    formAnimais.attachEvent("onButtonClick", function (name) {

        if (name == 'novo') {
            sys.FormClear(formAnimais);
            formAnimais.setFormData({num:null});

        } else if (name == 'salvar') {
            formAnimais.validate();

        } else if (name == 'remover') {

            if (formAnimais.getItemValue('num') == '')
                return;

	        dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {
		        if (result == true) {

			        paramAnimal = {
				        contenttype: 'xml',
				        action: 'delete',
				        origem: 'condominio.animais',
				        returnkey: 'num',
				        condominio: admunidade.condominio,
				        bloco: admunidade.bloco,
				        andar: admunidade.andar,
				        unidade: admunidade.pk_unidade
			        };

			        sys.FormAction(
				        sys.setParameters(
					        sys.mergeAttributes(paramAnimal, formAnimais.getFormData())
				        ), ResultFormAnimais
			        );
		        }
	        });

        } else if (name == 'finalizar') {
            main();
        }
    });

    formAnimais.attachEvent("onAfterValidate", function (status) {
        if (status == false)
            return;

        var today = new Date();

        paramAnimal = {
            contenttype: 'xml',
            action: 'insert',
            origem: 'condominio.animais',
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
                sys.mergeAttributes(paramAnimal, formAnimais.getFormData())
            ), ResultFormAnimais
        );

    });

        gridAnimais = new dhtmlXGridObject(formAnimais.getContainer("gridanimais"));
    gridAnimais.setIconsPath('./codebase/imgs/');
    gridAnimais.init();
    gridAnimais.attachEvent('onRowSelect', function (id) {

        var formSourceAnimais;
        formSourceAnimais = {
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: 'condominio.animais',
            where: 'condominio/' + admunidade.condominio +
                '|bloco/' + admunidade.bloco +
                '|andar/' + admunidade.andar +
                '|admunidade/' + admunidade.pk_unidade +
                '|num/' + id,
            chave: 'num'
        };

        sys.FormAction(
            sys.setParameters(formSourceAnimais), LoadFormAnimais
        );

    });
    gridLoadAnimais();
}

function ResultFormAnimais(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.registro != undefined && out.registro.length > 0) {
        gridLoadAnimais();
        sys.FormClear(formAnimais);
        alert(out.situacao);
    } else {
        alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
    }
}

function LoadFormAnimais(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formAnimais.setItemValue(key,  itens[key]);

    formAnimais.setItemValue('nome_condominio', admunidade.nome_condominio);
    formAnimais.setItemValue('nome_bloco', admunidade.nome_bloco);
    formAnimais.setItemValue('nome_andar', admunidade.nome_andar);
    formAnimais.setItemValue('nome_unidade', admunidade.unidade);

}

function gridLoadAnimais() {

    if (admunidade === undefined)
        return;

    var gridSourceAnimais;
    gridSourceAnimais = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        origem: 'condominio.animais',
        campos: 'num,nome,especie,raca',
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

    gridAnimais.loadXML(sys.setParameters(gridSourceAnimais));
}