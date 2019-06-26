/**
 * Created by oberdan on 23/09/2015.
 */

var windowPersonalAtividades;
var formPersonalAtividades;
var gridAtividades;
var current_personal;
var combomoradores;

function personal_trainer_atividades(numpersonal) {

    current_personal = numpersonal;

    var windowsClientInfo;
    windowsClientInfo = new dhtmlXWindows();
    windowsClientInfo.setSkin('dhx_terrace');

    var titulo = 'Registro de atividades do personal trainer';
    var windowID = 'windowAtualizarPersonalAtividades';

    windowPersonalAtividades = windowsClientInfo.createWindow(windowID, 0, 0, 1010, 600);
    windowPersonalAtividades.setText(titulo);
    windowPersonalAtividades.denyResize();
    windowPersonalAtividades.centerOnScreen();
    windowPersonalAtividades.button('park').hide();
    windowPersonalAtividades.button('minmax1').hide();

    formPersonalAtividades = windowPersonalAtividades.attachForm(campos_personal_trainer_atividades);

    formPersonalAtividades.attachEvent("onButtonClick", function (name) {

        if (name == 'novo') {
            formPersonalAtividades.reset();
            formPersonalAtividades.setItemValue('num', null);
            sys.FormClear(formPersonalAtividades);

        } else if (name == 'salvar') {
            formPersonalAtividades.validate();

        } else if (name == 'remover') {

            if (formPersonalAtividades.getItemValue('num') == '')
                return;

            dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {
                if (result == true) {
                    var paramPersonal = {
                        contenttype: 'xml',
                        action: 'delete',
                        origem: 'condominio.personal_atividades',
                        returnkey: 'num',
                        condominio: unidadecorrente.condominio,
                        bloco: unidadecorrente.bloco,
                        andar: unidadecorrente.andar,
                        unidade: unidadecorrente.pk_unidade
                    };

                    sys.FormAction(
                        sys.setParameters(
                            sys.mergeAttributes(paramPersonal, formPersonal.getFormData())
                        ), ResultFormPersonalAtividades
                    );
                }
            });
        }
    });

    formPersonalAtividades.attachEvent("onKeyUp",function(inp, ev, name, value){
        if (inp.name = 'unidadecorrente' && ev.code == 'Enter') {

            var bindcombomordores = {
                parametros: true,
                contenttype: 'xml',
                action: 'select_combo',
                grava_sessao: 'false',
                orderby: 'num',
                campos: "condominio || '|' || andar || '|' || autenticacao as num, initcap(nome) as tipo",
                origem: 'condominio.morador_info',
                where: 'condominio/' + unidadecorrente.condominio +
                '|bloco/' + formPersonalAtividades.getItemValue('bloco') +
                '|unidadecorrente/' + formPersonalAtividades.getItemValue('unidadecorrente')
            };

            sys.FormAction(sys.setParameters(bindcombomordores), ResultBindcomboMoradores);

        }
    });

    combomoradores = formPersonalAtividades.getCombo('nome_aluno');
    combomoradores.attachEvent("onChange", function(){
        var selecao = combomoradores.getSelectedValue().split('|');

        formPersonalAtividades.setItemValue('condominio', selecao[0]);
        formPersonalAtividades.setItemValue('andar', selecao[1]);
        formPersonalAtividades.setItemValue('autenticacao', selecao[2].toUpperCase());

    });

    formPersonalAtividades.attachEvent("onAfterValidate", function (status) {
        if (status == false)
            return;

        var today = new Date();
        var nome_aluno = combomoradores.getSelectedText();

        var paramPersonal = {
            contenttype: 'xml',
            action: 'insert',
            origem: 'condominio.personal_atividades',
            returnkey: 'num',
            nome: nome_aluno,
            lastdate: today.format("yyyy-mm-dd"),
            lasttime: today.format("HH:MM:ss"),
            lastuser: informacoesdousuario.uidins
        };

        sys.FormAction(
            sys.setParameters(
                sys.mergeAttributes(paramPersonal, formPersonalAtividades.getFormData())
            ), ResultFormPersonalAtividades
        );

    });

    gridAtividades = new dhtmlXGridObject(formPersonalAtividades.getContainer("gridatividades"));
    gridAtividades.setIconsPath('./codebase/imgs/');
    gridAtividades.init();
    gridAtividades.attachEvent('onRowSelect', function (id) {

        var formSourcePersonal;
        formSourcePersonal = {
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: 'condominio.personal_atividades_info',
            where: 'num/' + id,
            chave: 'num'
        };

        sys.FormAction(
            sys.setParameters(formSourcePersonal), LoadFormPersonalAtividadesAluno
        );

    });

    formPersonalAtividades.setItemValue('personal', numpersonal);
    loadgridAtividadesPersonal(numpersonal);

}

function ResultBindcomboMoradores(http) {
    var moradores = formPersonalAtividades.getCombo('nome_aluno');
    moradores.loadXMLString(http.responseText);
}

function loadgridAtividadesPersonal(numpersonal) {

    var gridSourcePersonal;
    gridSourcePersonal = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        origem: 'condominio.personal_atividades_info',
        campos: 'num, bloco, unidadecorrente, nome, tipo_aula',
        where: 'personal/' + numpersonal,
        usecheckbox: 'false',
        chave: 'num',
        displaychave: 'false'
    };

    gridAtividades.loadXML(sys.setParameters(gridSourcePersonal));

}

function LoadFormPersonalAtividadesAluno(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formPersonalAtividades.setItemValue(key, itens[key]);

    formPersonalAtividades.setItemValue('nome_aluno', itens['nome']);

}

function ResultFormPersonalAtividades(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.registro != undefined && out.registro.length > 0) {
        alert(out.situacao);
        loadgridAtividadesPersonal(current_personal);
    } else {
        alert('Houve um erro ao enviar os dados. Por favor aguarde um instante!');
    }
}