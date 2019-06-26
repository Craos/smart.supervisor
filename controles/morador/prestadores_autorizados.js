/**
 * Created by Oberdan on 13/11/14.
 */
var gridPrestadores;
var gridhistAcesso;
var gridemdpararegistrar;
var formRegistroAcesso;
var formRegistroAcessoHist;
var sentidoprestador;
var registroprestador;
var autenticacaoprestador;

function prestadores_autorizados() {


    var tabbarRegistroAcesso = nav_layout_principal.attachTabbar();
    tabbarRegistroAcesso.addTab('tabCadastroPrestador', 'Cadastro', '');

    var tabCadastroCadastro = tabbarRegistroAcesso.cells('tabCadastroPrestador');
    formRegistroAcesso = tabCadastroCadastro.attachForm(campos_registro_acesso_geral);
    tabbarRegistroAcesso.setTabActive('tabCadastroPrestador');
    formRegistroAcesso.setItemValue('cadastro_origem', 'condominio.prestadores');

    tabbarRegistroAcesso.addTab('tabHistoricoAcesso', 'Histórico', '');
    var tabbarVeiculosExcluidos = tabbarRegistroAcesso.cells('tabHistoricoAcesso');
    formRegistroAcessoHist = tabbarVeiculosExcluidos.attachForm(campos_historico_registro_acesso_geral);

    var data_inicial = formRegistroAcessoHist.getCalendar('data_inicial');
    data_inicial.loadUserLanguage('pt');
    data_inicial.hideTime();

    var data_final = formRegistroAcessoHist.getCalendar('data_final');
    data_final.loadUserLanguage('pt');
    data_final.hideTime();

    var paramPrestador;
    sessionStorage.recursocorrente = 'prestadores_autorizados';

    formRegistroAcesso.attachEvent("onButtonClick", function (name) {

        if (name == 'novo') {
            formRegistroAcesso.reset();
            formRegistroAcesso.setItemValue('num', null);
            sys.FormClear(formRegistroAcesso);
            formRegistroAcesso.showItem('parentesco');
            gridPrestadores.clearAll();
            var fotocadastro = formRegistroAcesso.getContainer("foto_prestador");
            fotocadastro.innerHTML = '';


        } else if (name == 'salvar') {
            if (formRegistroAcesso.getItemValue('proprietario') == '1' && formRegistroAcesso.getItemValue('rg').length == 0) {
                alert('Informe o numero do documento de identificação');
                return;
            }
            formRegistroAcesso.validate();

        } else if (name == 'remover') {

            if (formRegistroAcesso.getItemValue('num') == '')
                return;

            dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {
                if (result == true) {
                    paramPrestador = {
                        contenttype: 'xml',
                        action: 'delete',
                        origem: 'condominio.prestadores',
                        returnkey: 'num',
                        condominio: admunidade.condominio,
                        bloco: admunidade.bloco,
                        andar: admunidade.andar,
                        unidade: admunidade.pk_unidade
                    };

                    sys.FormAction(
                        sys.setParameters(
                            sys.mergeAttributes(paramPrestador, formRegistroAcesso.getFormData())
                        ), function (http) {

                            paramPrestador = {
                                contenttype: 'xml',
                                action: 'delete',
                                origem: 'expurgo.prestadores',
                                returnkey: 'num',
                                condominio: admunidade.condominio,
                                bloco: admunidade.bloco,
                                andar: admunidade.andar,
                                unidade: admunidade.pk_unidade
                            };

                            sys.FormAction(
                                sys.setParameters(
                                    sys.mergeAttributes(paramPrestador, formRegistroAcesso.getFormData())
                                ), function (http) {
                                    console.log(http);
                                    ResultFormPrestadores(http);
                                });

                        }
                    );
                }
            });

        } else if (name === 'localizar') {
            grid_prestadores();

        } else if (name === 'fotomorador') {

            if (formRegistroAcesso.getItemValue('num').length === 0 || formRegistroAcesso.getItemValue('num') === '') {
                alert('Selecione o registro antes de obter uma nova foto!');
                return;
            }

            var wfoto = new Foto();
            wfoto.Exibir();
            wfoto.AoConfirmarFoto(function (e) {
                sys.FormAction(sys.setParameters({
                    contenttype: 'xml',
                    action: 'updateimage',
                    origem: destino,
                    num: formRegistroAcesso.getItemValue('num'),
                    targetfield: 'foto1',
                    foto1: e
                }), function (http) {

                    if (http.response.indexOf('sucesso') > -1) {
                        formRegistroAcesso.getContainer("foto_prestador").innerHTML = '<img style="width: 120px;" alt="" src="' + e + '">';
                    }
                });
            });


        } else if (name == 'registrar_entrada') {
            registroprestador = formRegistroAcesso.getItemValue('num');
            sentidoprestador = 1;
            RegistraPassagemdoPrestador();

        } else if (name == 'registrar_saida') {
            sentidoprestador = 0;
            RegistraPassagemdoPrestador();

        }
    });

    formRegistroAcesso.attachEvent("onAfterValidate", function (status) {
        if (status == false)
            return;

        var today = new Date();

        if (formRegistroAcesso.getItemValue('cadastro_origem') == 'condominio.empregados')
            formRegistroAcesso.setItemValue('admunidade', admunidade.pk_unidade);

        paramPrestador = {
            contenttype: 'xml',
            action: 'insert',
            origem: formRegistroAcesso.getItemValue('cadastro_origem'),
            returnkey: 'num',
            lastdate: today.format("yyyy-mm-dd"),
            lasttime: today.format("HH:MM:ss"),
            lastuser: informacoesdousuario.uidins
        };

        sys.FormAction(
            sys.setParameters(
                sys.mergeAttributes(paramPrestador, formRegistroAcesso.getFormData())
            ), ResultFormPrestadores
        );

    });

    formRegistroAcessoHist.attachEvent("onButtonClick", function (name) {

        var data_inicial = new Date(formRegistroAcessoHist.getItemValue('data_inicial'));
        var data_final = new Date(formRegistroAcessoHist.getItemValue('data_final'));
        var torre = formRegistroAcessoHist.getItemValue('bloco');
        var unidade = formRegistroAcessoHist.getItemValue('admunidade');

        var local = '';
        if ((torre != null && torre.length > 0) && (unidade != null && unidade.length > 0)) {
            local = "bloco::varchar = '" + torre + "' and admunidade::varchar = '" + unidade;
        }

        var datas = '';
        if (data_inicial.format("yyyy-mm-dd") != '1969-12-31') {
            datas = "filedate between '" + data_inicial.format("yyyy-mm-dd") + "' and '" + data_final.format("yyyy-mm-dd");
        }

        var where = '';
        if (local != '') {
            where = local;
        }

        if (datas != '') {
            where = datas;
        }

        if ((local != '') && (datas != '')) {
            where = local + "' and " + datas;
        }

        var gridSource;
        gridSource = {
            contenttype: 'xml',
            action: 'dhtmlxgrid',
            campos: 'num,data,bloco,admunidade,nome,tipoacesso as "Tipo de Acesso"',
            origem: 'acesso.historico_registro_acesso',
            where: where,
            orderby: 'num',
            limit: '500',
            usecheckbox: 'false',
            chave: 'num',
            displaychave: 'false'
        };

        gridhistAcesso.loadXML(sys.setParameters(gridSource));
    });

    gridPrestadores = new dhtmlXGridObject(formRegistroAcesso.getContainer("gridfamiliares"));
    gridPrestadores.setIconsPath('./codebase/imgs/');
    gridPrestadores.init();

    gridhistAcesso = new dhtmlXGridObject(formRegistroAcessoHist.getContainer("gridhistorico_acesso"));
    gridhistAcesso.setIconsPath('./codebase/imgs/');
    gridhistAcesso.init();
    gridhistAcesso.attachEvent('onRowSelect', function (id) {

        sys.FormAction(
            sys.setParameters({
                dados: 'teste',
                contenttype: 'xml',
                action: 'directjson',
                origem: 'acesso.historico_registro_acesso',
                where: 'num/' + id,
                chave: 'num'
            }), function (http) {

                var out;
                out = JSON.parse(http.responseText);

                var itens = out[0];
                for (var key in itens)
                    if (itens.hasOwnProperty(key))
                        formRegistroAcessoHist.setItemValue(key, itens[key]);
            }
        );
    });

    gridemdpararegistrar = new dhtmlXGridObject(formRegistroAcesso.getContainer("gridempregadosunidade"));
    gridemdpararegistrar.setIconsPath('./codebase/imgs/');
    gridemdpararegistrar.init();
    gridemdpararegistrar.attachEvent('onRowSelect', function (id) {

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
            sys.setParameters(formSourceEmpregados), LoadFormEmpregadoParaRegistro
        );

    });
    gridCarregaEmpregadoParaRegistro();
}

function LoadFormEmpregadoParaRegistro(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formRegistroAcesso.setItemValue(key, itens[key]);


    var fotocadastro = formRegistroAcesso.getContainer("foto_prestador");
    fotocadastro.innerHTML = '';

    if (fotocadastro != null && itens.foto1 != null) {
        if (itens.foto1.length > 0) {
            fotocadastro.innerHTML = '<img style="width: 120px;" alt="" src="' + itens.foto1 + '">';
        }
    }

    formRegistroAcesso.setItemValue('admunidade', admunidade.unidade);
    formRegistroAcesso.setItemValue('nome_condominio', admunidade.nome_condominio);
    formRegistroAcesso.setItemValue('nome_bloco', admunidade.nome_bloco);
    formRegistroAcesso.setItemValue('nome_andar', admunidade.nome_andar);
    formRegistroAcesso.setItemValue('nome_unidade', admunidade.unidade);
    formRegistroAcesso.setItemValue('cadastro_origem', 'condominio.empregados');


}


function gridCarregaEmpregadoParaRegistro() {

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
        orderby: 'num',
        usecheckbox: 'false',
        usedecimal: 'nome',
        chave: 'num',
        displaychave: 'false'
    };

    gridemdpararegistrar.loadXML(sys.setParameters(gridSourceEmpregados));
}

function RegistraPassagemdoPrestador() {

    if (formRegistroAcesso.getItemValue('num') == '') {
        alert('Primeiro informe os dados do prestador');
        return;
    }

    if (sentidoprestador == 1) {
        if (formRegistroAcesso.getItemValue('bloco') == '') {
            alert('Informe a torre no controle de acesso');
            return;
        }

        if (formRegistroAcesso.getItemValue('admunidade') == '') {
            alert('Informe a admunidade no controle de acesso');
            return;
        }
    }

    autenticacaoprestador = formRegistroAcesso.getItemValue('autenticacao');
    if (autenticacaoprestador == null || autenticacaoprestador == '' || autenticacaoprestador == undefined)
        autenticacaoprestador = formRegistroAcesso.getItemValue('num');

    var paramPrestador = {
        contenttype: 'xml',
        action: 'insert',
        origem: 'acesso.passagem',
        returnkey: 'num',
        portaid: 1,
        sistema: 3,
        situacao: 1,
        uidins: informacoesdousuario.uidins,
        nome: formRegistroAcesso.getItemValue('nome'),
        autenticacao: autenticacaoprestador,
        bloco: formRegistroAcesso.getItemValue('bloco'),
        unidade: formRegistroAcesso.getItemValue('admunidade'),
        placa_letras: formRegistroAcesso.getItemValue('placa_letras'),
        placa_numeros: formRegistroAcesso.getItemValue('placa_numeros'),
        sentido: sentidoprestador
    };

    if (sentidoprestador == 0) {
        var today = new Date();
        paramPrestador.num = formRegistroAcesso.getItemValue('registroentrada');
        paramPrestador.datasaida = today.format("yyyy-mm-dd");
        paramPrestador.horariosaida = today.format("HH:MM:ss");
        paramPrestador.lastdate = today.format("yyyy-mm-dd");
        paramPrestador.lasttime = today.format("HH:MM:ss");
        paramPrestador.lastuser = informacoesdousuario.uidins;
    }

    sys.FormAction(
        sys.setParameters(
            paramPrestador
        ), ResultRegistroPassagemPrestador
    );
}

var origem, destino;

function SelecionaRegistroPrestador(num, tipo) {

    formRegistroAcesso.setItemValue('localizar_num', null);
    formRegistroAcesso.setItemValue('localizar_rg', null);
    formRegistroAcesso.setItemValue('localizar_nome', null);

    origem = 'condominio.pesquisa_cadastros_empregados';
    destino = 'condominio.empregados';
    formRegistroAcesso.setItemValue('cadastro_origem', 'condominio.empregados');

    if (tipo === 'cadastrado geral') {
        origem = 'condominio.pesquisa_cadastros_prestadores';
        destino = 'condominio.prestadores';
        formRegistroAcesso.setItemValue('cadastro_origem', 'condominio.prestadores');
    } else if (tipo === 'cadastrado expurgado') {
        origem = 'condominio.pesquisa_cadastros_prestadores_expurgados';
        destino = 'condominio.prestadores';
        formRegistroAcesso.setItemValue('cadastro_origem', 'condominio.prestadores');
    }

    console.clear();
    console.log({'origem': origem});

    var formSourcePrestadores;
    formSourcePrestadores = {
        dados: 'teste',
        contenttype: 'xml',
        action: 'directjson',
        origem: origem,
        where: 'rg/' + num,
        chave: 'num'
    };

    sys.FormAction(
        sys.setParameters(formSourcePrestadores), LoadFormPrestadores
    );
}

function ResultFormPrestadores(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.registro !== undefined && out.registro.length > 0) {
        formRegistroAcesso.setItemValue('situacao', out.situacao);
        formRegistroAcesso.setItemValue('num', out.registro);
        formRegistroAcesso.setItemValue('admunidade', admunidade.unidade);

    } else {
        alert('Houve um erro ao enviar os dados. Por favor aguarde um instante!');
    }
}

function ResultRegistroPassagemPrestador(http) {
    var out;
    out = JSON.parse(http.responseText);
    //formRegistroAcesso.setItemValue('situacao', out.situacao + ' registro:' + out.registro);
    formRegistroAcesso.setItemValue('registroentrada', out.registro);

    var paramPrestador = {
        contenttype: 'xml',
        action: 'insert',
        origem: 'condominio.prestadores',
        returnkey: 'num',
        registroentrada: out.registro,
        placa_letras: formRegistroAcesso.getItemValue('placa_letras'),
        placa_numeros: formRegistroAcesso.getItemValue('placa_numeros'),
        num: formRegistroAcesso.getItemValue('num')
    };

    sys.FormAction(
        sys.setParameters(
            paramPrestador
        ), atualizahistoricopassagemprestador
    );

}

function atualizahistoricopassagemprestador(http) {

    var out;
    out = JSON.parse(http.responseText);
    formRegistroAcesso.setItemValue('registroentrada', out.registro);

    gridHistoricoAcessoPrestadores(autenticacaoprestador);

    if (sentidoprestador === 1)
        Impressao_Acesso(formRegistroAcesso.getItemValue('registroentrada'));

}

function LoadFormPrestadores(http) {

    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formRegistroAcesso.setItemValue(key, itens[key]);

    var fotocadastro = formRegistroAcesso.getContainer("foto_prestador");
    fotocadastro.innerHTML = '';

    if (fotocadastro != null && itens !== undefined && itens.foto1 !== null) {
        if (itens.foto1.length > 0) {
            fotocadastro.innerHTML = '<img style="width: 120px;" alt="" src="' + itens.foto1 + '">';
        }
    }

    autenticacaoprestador = formRegistroAcesso.getItemValue('autenticacao');
    if (autenticacaoprestador == null || autenticacaoprestador == '' || autenticacaoprestador == undefined)
        autenticacaoprestador = formRegistroAcesso.getItemValue('num');

    formRegistroAcesso.setItemValue('cadastro_origem', 'condominio.prestadores');
    gridHistoricoAcessoPrestadores(autenticacaoprestador);
}

function gridHistoricoAcessoPrestadores(autenticacao) {

    var gridSourcePrestadores;
    gridSourcePrestadores = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        origem: 'acesso.prestador_passagem',
        where: 'autenticacao/' + autenticacao,
        usecheckbox: 'false',
        chave: 'num',
        displaychave: 'false'
    };

    gridPrestadores.loadXML(sys.setParameters(gridSourcePrestadores));
}

function ResultFormCadastroPrestadores(http) {
    var out;

    out = JSON.parse(http.responseText);

    if (out.situacao.indexOf('sucesso') > 0) {
        recebeImagemPrestador_autorizado(ultimaimagem);
        windowAtualizarDadosFoto.close();
    } else {
        alert('Erro no envio dos dados');
    }
}

function recebeImagemPrestador_autorizado(imagem) {

    var fotocadastro = formRegistroAcesso.getContainer("foto_prestador");
    if (fotocadastro != null) {
        fotocadastro.innerHTML = '<img style="width: 120px;" alt="" src="' + imagem + '">';
    }
}

function Impressao_Acesso(num, bloco, unidade, placa_letras, placa_numeros, descricao) {

    var width = 400;
    var height = 550;
    var left = 99;
    var top = 99;

    window.open('./controles/portaria/estrutura/visitante.php?registro=' + num + '&bloco=' + bloco + '&admunidade=' + unidade + '&placa_letras=' + placa_letras + '&placa_numeros=' + placa_numeros + '&descricao=' + descricao, 'acesso', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', scrollbars=no, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');

}

// add once, make sure dhtmlxcalendar.js is loaded
dhtmlXCalendarObject.prototype.langData["pt"] = {
    // date format
    dateformat: "%d/%m/%Y",
    // full names of months
    monthesFNames: [
        "Janeiro", "Fevereiro", "Mar?o", "Abril", "Maio", "Junho", "Julho",
        "Augusto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ],
    // short names of months
    monthesSNames: [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ],
    // full names of days
    daysFNames: [
        "Domingo", "Segunda", "Ter?a", "Quarta",
        "Quinta", "Sexta", "S?bado"
    ],
    // short names of days
    daysSNames: [
        "Do", "Se", "Te", "Qu",
        "Qi", "Sx", "Sa"
    ],
    // starting day of a week. Number from 1(Monday) to 7(Sunday)
    weekstart: 1,
    // the title of the week number column
    weekname: "w"
};