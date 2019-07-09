/**
 * Created by Oberdan on 13/11/14.
 */
var gridPersonal;
var formPersonal;
var sentidopersonal;
var autenticacaopersonal;

function personal_trainer() {

    var paramPersonal;
    sessionStorage.recursocorrente = 'personal_trainer';
    formPersonal = nav_layout_principal.attachForm(campos_personal_trainer);

    var userprofile = JSON.parse(sessionStorage.auth).user.perfil;
    var perfil_corrente;
    for (var i = 0; i < userprofile.length; i++)
        if (userprofile[i].nome_recurso == 'personal_trainer') {
            perfil_corrente = userprofile[i];
            break;
        }

    if (perfil_corrente.adicionar == 0)
        formPersonal.hideItem('novo');

    if (perfil_corrente.editar == 0)
        formPersonal.hideItem('salvar');

    if (perfil_corrente.remover == 0)
        formPersonal.hideItem('remover');

    if (perfil_corrente.telefones == 0)
        formPersonal.hideItem('telefone_cel');

    if (perfil_corrente.documentos == 0) {
        formPersonal.hideItem('rg');
        formPersonal.hideItem('cpf');
    }

    formPersonal.attachEvent("onButtonClick", function (name) {

        if (name == 'novo') {
            formPersonal.reset();
            formPersonal.setItemValue('num', null);
            sys.FormClear(formPersonal);
            var fotocadastro = formPersonal.getContainer("foto_personal");
            fotocadastro.innerHTML = '';


        } else if (name == 'salvar') {
            if (formPersonal.getItemValue('proprietario') == '1' && formPersonal.getItemValue('rg').length == 0) {
                alert('Informe o numero do documento de identificação');
                return;
            }
            formPersonal.validate();

        } else if (name == 'remover') {

            if (formPersonal.getItemValue('num') == '')
                return;

            dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {
                if (result == true) {
                    paramPersonal = {
                        contenttype: 'xml',
                        action: 'delete',
                        origem: 'condominio.personal',
                        returnkey: 'num',
                        condominio: admunidade.condominio,
                        bloco: admunidade.bloco,
                        andar: admunidade.andar,
                        unidade: admunidade.pk_unidade
                    };

                    sys.FormAction(
                        sys.setParameters(
                            sys.mergeAttributes(paramPersonal, formPersonal.getFormData())
                        ), ResultFormPersonal
                    );
                }
            });

        } else if (name === 'foto') {

            if (formPersonal.getItemValue('num').length === 0 || formPersonal.getItemValue('num') === '') {
                alert('Selecione o registro antes de obter uma nova foto!');
                return;
            }

            var wfoto = new Foto();
            wfoto.Exibir();
            wfoto.AoConfirmarFoto(function (e) {
                sys.FormAction(sys.setParameters({
                    contenttype: 'xml',
                    action: 'updateimage',
                    origem: 'condominio.personal',
                    num: formPersonal.getItemValue('num'),
                    targetfield: 'foto1',
                    foto1: e
                }), function (http) {

                    if (http.response.indexOf('sucesso') > -1) {
                        formPersonal.getContainer("foto_personal").innerHTML = '<img style="width: 120px;" alt="" src="' + e + '">';
                    }
                });
            });

        } else if (name == 'atividades') {
            if (formPersonal.getItemValue('num').length == 0 || formPersonal.getItemValue('num') == '') {
                alert('Selecione o registro antes de visualizar o registro de atividades!');
                return;
            }
            personal_trainer_atividades(formPersonal.getItemValue('num'));
        }
    });

    formPersonal.attachEvent("onChange", function (name, value, state){
        if (name == 'situacao') {
            if (state == true) {
                formPersonal.enableItem('bloco');
                formPersonal.enableItem('admunidade');
            } else {
                formPersonal.setItemValue('bloco', null);
                formPersonal.setItemValue('admunidade', null);
                formPersonal.disableItem('bloco');
                formPersonal.disableItem('admunidade');
            }
        }
    });

    formPersonal.attachEvent("onAfterValidate", function (status) {
        if (status == false)
            return;

        var today = new Date();
        var isChecked = formPersonal.isItemChecked('situacao');

        if (isChecked == true) {
            var bloco = formPersonal.getItemValue('bloco');
            var unidade = formPersonal.getItemValue('admunidade');
            if ((bloco == undefined || bloco == '') || (unidade == undefined || unidade == '')) {
                alert('Informe corretamente a torre e admunidade');
                return;
            }
        }

        paramPersonal = {
            contenttype: 'xml',
            action: 'insert',
            origem: 'condominio.personal',
            returnkey: 'num',
            lastdate: today.format("yyyy-mm-dd"),
            lasttime: today.format("HH:MM:ss"),
            lastuser: informacoesdousuario.uidins
        };

        sys.FormAction(
            sys.setParameters(
                sys.mergeAttributes(paramPersonal, formPersonal.getFormData())
            ), ResultFormPersonal
        );

    });

    formPersonal.attachEvent("onKeyUp",function(inp, ev, name, value){
        if (inp.name = 'num' && ev.code == 'Enter') {
            SelecionaRegistroPersonal(formPersonal.getItemValue('num'));

        }
    });

    gridPersonal = new dhtmlXGridObject(formPersonal.getContainer("gridpersonal"));
    gridPersonal.setIconsPath('./codebase/imgs/');
    gridPersonal.init();
    gridPersonal.attachEvent('onRowSelect', function (id) {

        var formSourcePersonal;
        formSourcePersonal = {
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: 'condominio.personal_info',
            where: 'num/' + id,
            chave: 'num'
        };

        sys.FormAction(
            sys.setParameters(formSourcePersonal), LoadFormPersonal
        );

    });

    loadgridPersonal();
}

function SelecionaRegistroPersonal(num) {

    var formSourcePersonal;
    formSourcePersonal = {
        dados: 'teste',
        contenttype: 'xml',
        action: 'directjson',
        origem: 'condominio.personal_info',
        where: 'num/' + num,
        chave: 'num'
    };

    sys.FormAction(
        sys.setParameters(formSourcePersonal), LoadFormPersonal
    );


}

function ResultFormPersonal(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.registro != undefined && out.registro.length > 0) {
        alert(out.situacao);
        loadgridPersonal();
    } else {
        alert('Houve um erro ao enviar os dados. Por favor aguarde um instante!');
    }
}

function LoadFormPersonal(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formPersonal.setItemValue(key, itens[key]);

    var fotocadastro = formPersonal.getContainer("foto_personal");
    fotocadastro.innerHTML = '';

    if (fotocadastro != null && itens.foto1 != null) {
        if (itens.foto1.length > 0) {
            fotocadastro.innerHTML = '<img style="width: 120px;" alt="" src="' + itens.foto1 + '">';
        }
    }

    var isChecked = formPersonal.isItemChecked('situacao');

    if (isChecked == true) {
        formPersonal.enableItem('bloco');
        formPersonal.enableItem('admunidade');
    }

        autenticacaopersonal = formPersonal.getItemValue('autenticacao');
    if (autenticacaopersonal == null || autenticacaopersonal == '' || autenticacaopersonal == undefined)
        autenticacaopersonal = formPersonal.getItemValue('num');
}

function loadgridPersonal() {

    var gridSourcePersonal;
    gridSourcePersonal = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        campos: 'num,nome',
        origem: 'condominio.personal',
        usecheckbox: 'false',
        chave: 'num',
        displaychave: 'false'
    };

    gridPersonal.loadXML(sys.setParameters(gridSourcePersonal));
}

function ResultFormCadastroPersonal(http) {
    var out;

    out = JSON.parse(http.responseText);

    if (out.situacao.indexOf('sucesso') > 0) {
        recebeImagemPersonal_autorizado(ultimaimagem);
        windowAtualizarDadosFoto.close();
    } else {
        alert('Erro no envio dos dados');
    }
}

function recebeImagemPersonal_autorizado(imagem) {

    var fotocadastro = formPersonal.getContainer("foto_personal");
    if (fotocadastro != null) {
        fotocadastro.innerHTML = '<img style="width: 120px;" alt="" src="' + imagem + '">';
    }
}