/**
 * Created by Oberdan on 06/06/14.
 */

var objformUnidade;
var gridnotificacoes;
var formnotificacoes;
var data_ocorrencia;
var data_retirada;

function unidade() {

    var formSourceUnidade;
    var formUnidade;
    var paramUnidade;

    var tabbarUnidade = nav_layout_principal.attachTabbar();
    tabbarUnidade.addTab('tabInformacoes', 'Cadastro', '');
    tabbarUnidade.addTab('tabNotificacoes', 'Notifica&ccedil;&otilde;es', '');

    tabbarUnidade.attachEvent("onSelect", function (id) {
        sessionStorage.activetab = id;
        return true;
    });

    if (sessionStorage.activetab === undefined) {
        tabbarUnidade.setTabActive('tabInformacoes');
    } else {
        tabbarUnidade.setTabActive(sessionStorage.activetab);
    }

    formUnidade = tabbarUnidade.cells('tabInformacoes').attachForm([
        {
            type: "settings",
            labelAlign: "left",
            inputHeight: "18",
            offsetLeft: "4",
            offsetTop: "8",
            position: "label-top"
        },
        {
            type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
            {type: "button", name: "finalizar", value: "Atualizar"},
            {type: "newcolumn"},
            {type: "button", name: "mudanca", value: "Registrar atividade"}
        ]
        },
        {
            type: "fieldset",
            name: "informacoes_unidade",
            label: "Informa&ccedil;&otilde;es da admunidade",
            inputWidth: 955,
            list: [
                {type: "block", offsetTop: "0", list: [
                    {type: "input", name: "num", readonly: true, label: "Registro", inputWidth: 50, style: "font-weight:bold; color:red"},
                    {type: "newcolumn"},
                    {type: "input", name: "filedate", readonly: true, label: "Data de registro", inputWidth: 100, style: "font-weight:bold; color:red"},
                    {type: "newcolumn"},
                    {type: "input",name: "bloco",readonly: true,label: "Bloco",inputWidth: 100,style: "font-weight:bold; color:red"},
                    {type: "newcolumn"},
                    {type: "input",name: "andar",readonly: true,label: "Andar",inputWidth: 100,style: "font-weight:bold; color:red"},
                    {type: "newcolumn"},
                    {type: "input",name: "unidade",readonly: true,label: "Unidade",inputWidth: 100,style: "font-weight:bold; color:red"}
                ]},
                {type: "block", offsetTop: "0", list: [
                    {type: "input", name: "email_correspondencias", label: "E-mail para setor de correspond&ecirc;ncias 1", inputWidth: 350, style: "font-weight:bold;"},
                    {type: "newcolumn"},
                    {type: "input", name: "email_correspondencias2", label: "E-mail para setor de correspond&ecirc;ncias 2", inputWidth: 350, style: "font-weight:bold;"}
                ]}
            ]},
        {
            type: "block", offsetTop: "0", list: [
            {
                type: "radio",
                name: "situacao",
                value: "1",
                label: "Im&oacute;vel pr&oacute;prio",
                position: "absolute",
                inputTop: 24,
                inputLeft: 10,
                labelLeft: 35,
                labelTop: 30,
                labelWidth: 120,
                tooltip: "Marque esta opção se você é o propriet&aacute;rio do imóvel",
                required: true,
                info: true
            },
            {
                type: "radio",
                name: "situacao",
                value: "2",
                label: "Im&oacute;vel alugado",
                position: "absolute",
                inputTop: 24,
                inputLeft: 150,
                labelLeft: 175,
                labelTop: 30,
                labelWidth: 130,
                tooltip: "Marque esta opção para informar os dados de contato com o propriet&aacute;rio do imóvel",
                required: true,
                info: true
            }
        ]
        },
        {
            type: "block", offsetTop: "40", list: [
            {
                type: "fieldset", name: "dados_proprietario", label: "Dados do propriet&aacute;rio", inputWidth: 300,
                list: [
                    {
                        type: "input",
                        required: true,
                        name: "nome_proprietario",
                        label: "Nome do propriet&aacute;rio",
                        inputWidth: "260",
                        style: "font-weight:bold;",
                        tooltip: "Informe o nome do propriet&aacute;rio."
                    },
                    {
                        type: "input",
                        name: "rg",
                        required: true,
                        label: "Doc. de identifica&ccedil;&atilde;o",
                        inputWidth: "260",
                        style: "font-weight:bold;",
                        tooltip: "Informe o n&uacute;mero de RG ou RNE ou passaporte",
                        info: true
                    },
                    {
                        type: "input",
                        required: true,
                        name: "telefone_proprietario",
                        label: "Telefone",
                        inputWidth: "260",
                        style: "font-weight:bold;"
                    },
                    {
                        type: "input",
                        required: true,
                        name: "email_proprietario",
                        label: "E-mail",
                        inputWidth: "260",
                        style: "font-weight:bold;",
                        tooltip: "Informe o Endere&ccedil;o de e-mail do propriet&aacute;rio, para que ele possa receber comunicados do Condomm&iacute;nio.",
                        info: true,
                        note: {text: "Endere&ccedil;o de e-mail do propriet&aacute;rio"}
                    }
                ]
            },
            {type: "newcolumn"},
            {
                type: "fieldset", name: "dados_imobiliaria", label: "Dados da imobili&aacute;ria", inputWidth: 638,
                list: [
                    {
                        type: "block", list: [
                        {
                            type: "input",
                            required: true,
                            name: "imobiliaria",
                            label: "Nome da imobili&aacute;ria",
                            inputWidth: "300",
                            style: "font-weight:bold;",
                            tooltip: "Preencha este campo para que possamos fornecer eventuais comunicados de procedimentos internos do Condomm&iacute;nio.",
                            info: true,
                            note: {text: "Informe o nome da imobili&aacute;ria e a sua localiza&ccedil;&atilde;o. Exemplo: im&oacute;vel blueimovel - S&atilde;o Bernardo"}
                        },
                        {
                            type: "input",
                            required: true,
                            name: "nome_proprietario_imobiliaria",
                            label: "Nome do propriet&aacute;rio",
                            inputWidth: "300",
                            style: "font-weight:bold;",
                            tooltip: "Informe o nome do propriet&aacute;rio que está disponível no contrato de aluguel do imóvel."
                        },
                        {type: "newcolumn"},
                        {
                            type: "input",
                            name: "telefone_imobiliaria",
                            label: "Telefone",
                            inputWidth: "200",
                            style: "font-weight:bold;",
                            tooltip: "Informe o n&uacute;mero do telefone da imobili&aacute;ria.",
                            info: true,
                            note: {text: "N&uacute;mero do telefone da imobili&aacute;ria com DDD"}
                        },
                        {
                            type: "input",
                            name: "telefone_proprietario_imobiliaria",
                            label: "Telefone",
                            inputWidth: "200",
                            style: "font-weight:bold;"
                        }
                    ]
                    },
                    {
                        type: "block", list: [
                        {
                            type: "input",
                            required: true,
                            name: "email_proprietario_imobiliaria",
                            label: "E-mail",
                            inputWidth: "510",
                            style: "font-weight:bold;",
                            tooltip: "Informe o Endere&ccedil;o de e-mail do propriet&aacute;rio, para que ele possa receber comunicados do Condomm&iacute;nio.",
                            info: true,
                            note: {text: "Endere&ccedil;o de e-mail do propriet&aacute;rio"}
                        }
                    ]
                    }
                ]
            }
        ]
        }
    ]);

    var tabnotificacoes = tabbarUnidade.cells('tabNotificacoes');

    sessionStorage.recursocorrente = 'admunidade()';

    var userprofile = JSON.parse(sessionStorage.auth).user.perfil;
    var perfil_corrente;
    for (var i = 0; i < userprofile.length; i++)
        if (userprofile[i].nome_recurso == 'unidade') {
            perfil_corrente = userprofile[i];
            break;
        }

    if (perfil_corrente.adicionar == 0)
        formUnidade.hideItem('novo');

    if (perfil_corrente.editar == 0)
        formUnidade.hideItem('finalizar');

    if (perfil_corrente.remover == 0)
        formUnidade.hideItem('remover');

    if (perfil_corrente.remover == 0)
        formUnidade.hideItem('remover');

    if (perfil_corrente.documentos == 0) {
        formUnidade.hideItem('rg');
        formUnidade.hideItem('telefone_proprietario');
        formUnidade.hideItem('email_proprietario');
        formUnidade.hideItem('telefone_proprietario_imobiliaria');
        formUnidade.hideItem('email_proprietario_imobiliaria');
    }

    formUnidade.attachEvent("onButtonClick", function (name) {
        if (name === 'finalizar') {
            formUnidade.validate();
        } else if (name === 'mudanca') {
            MudancanaUnidade();
        }
    });

    formUnidade.attachEvent("onAfterValidate", function (status) {
        if (status === false)
            return;

        var today = new Date();

        paramUnidade = {
            contenttype: 'xml',
            action: 'update',
            origem: 'condominio.unidades',
            returnkey: 'num',
            where: 'condominio/' + unidade.condominio +
            '|bloco/' + unidade.bloco +
            '|andar/' + unidade.andar +
            '|admunidade/' + unidade.pk_unidade,
            num: unidade.pk_unidade,
            lastdate: today.format("yyyy-mm-dd"),
            lasttime: today.format("HH:MM:ss"),
            lastuser: informacoesdousuario.uidins
        };

        sys.FormAction(
            sys.setParameters(
                sys.mergeAttributes(paramUnidade, formUnidade.getFormData())
            ), ResultFormUnidades
        );

    });

    formUnidade.attachEvent("onChange", function (name, value) {
        if (name === 'situacao') {
            if (value === 1) {
                formUnidade.disableItem('dados_imobiliaria');
                formUnidade.enableItem('dados_proprietario');
            } else {
                formUnidade.enableItem('dados_imobiliaria');
                formUnidade.disableItem('dados_proprietario');
            }
        }
    });

    objformUnidade = formUnidade;


    sys.FormClear(formUnidade, null, false, null);

    if (unidade !== undefined) {

        objformUnidade.setItemValue('nome_condominio', unidade.nome_condominio);
        objformUnidade.setItemValue('nome_bloco', unidade.nome_bloco);
        objformUnidade.setItemValue('nome_andar', unidade.nome_andar);
        objformUnidade.setItemValue('nome_unidade', unidade.unidade);

    }

    var layoutnotificacoes = tabnotificacoes.attachLayout('2E');
    var cell_a = layoutnotificacoes.cells('a');
    cell_a.setHeight('320');
    cell_a.hideHeader();
    formnotificacoes = cell_a.attachForm([
        {
            type: "block", list: [
            {
                type: "block", list: [
                {type: "radio", name: "tipo", value: "Notificação", label: "Notificação", required: true},
                {type: "newcolumn"},
                {type: "radio", name: "tipo", value: "Multa", label: "Multa", required: true, offsetLeft: "15"},
                {type: "newcolumn"},
                {type: "radio", name: "tipo", value: "Comunicado", label: "Comunicado", required: true, offsetLeft: "15"}
            ]
            },
            {
                type: "block", list: [
                {
                    type: "settings",
                    labelAlign: "left",
                    inputHeight: "18",
                    inputWidth: "104",
                    offsetLeft: "4",
                    offsetTop: "8",
                    position: "label-top"
                },
                {type: "input", required: true, name: "livro", label: "Livro", style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", required: true, name: "pagina", label: "Página", style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", required: true, name: "ocorrencia", label: "Ocorrência", style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", required: true, name: "data_ocorrencia", label: "Data", style: "font-weight:bold;"},
            ]
            },
            {
                type: "block", list: [
                {
                    type: "settings",
                    labelAlign: "left",
                    inputHeight: "18",
                    inputWidth: "646",
                    offsetLeft: "4",
                    offsetTop: "8",
                    position: "label-top"
                },
                {type: "input", required: true, name: "motivo", label: "Motivo", style: "font-weight:bold;"},
                {
                    type: "input",
                    name: "observacoes",
                    label: "Observações",
                    inputHeight: "110",
                    rows: 5,
                    style: "font-weight:bold;"
                }
            ]
            },
            {
                type: "block", list: [
                {type: "button", name: "novo", value: "Novo"},
                {type: "newcolumn"},
                {type: "button", name: "salvar", value: "Registrar"},
                {type: "newcolumn"},
                {type: "button", name: "remover", value: "Remover"}
            ]
            }
        ]
        },
        {type: "hidden", name: "num"},
        {type: "newcolumn"},
        {
            type: "fieldset", label: "Entrega da notificação", offsetLeft: "10", list: [
            {
                type: "settings",
                labelAlign: "left",
                inputHeight: "18",
                inputWidth: "220",
                labelWidth: "155",
                offsetLeft: "4",
                offsetTop: "8",
                position: "label-left"
            },
            {type: "input", name: "protocolo", label: "Número do Protocolo:", style: "font-weight:bold;"},
            {type: "input", name: "responsavel_retirada", label: "Responsável pela retirada:", style: "font-weight:bold;"},
            {type: "input", name: "data_retirada", label: "Data e horário:", style: "font-weight:bold;"}
        ]
        }
    ]);

    formnotificacoes.attachEvent("onButtonClick", function (name) {

        if (name === 'novo') {
            sys.FormClear(formnotificacoes);
            formnotificacoes.setFormData({num: null});

        } else if (name === 'salvar') {
            formnotificacoes.validate();

        } else if (name === 'remover') {

            if (formnotificacoes.getItemValue('num') === '')
                return;

            dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {
                if (result === true) {

                    sys.FormAction(
                        sys.setParameters(
                            sys.mergeAttributes({
                                contenttype: 'xml',
                                action: 'delete',
                                origem: 'condominio.notificacoes',
                                returnkey: 'num',
                                condominio: unidade.condominio,
                                bloco: unidade.bloco,
                                andar: unidade.andar,
                                unidade: unidade.pk_unidade
                            }, formnotificacoes.getFormData())
                        ), Resultformnotificacoes
                    );
                }
            });
        }
    });

    formnotificacoes.attachEvent("onAfterValidate", function (status) {
        if (status === false)
            return;

        var today = new Date();

        sys.FormAction(
            sys.setParameters(
                sys.mergeAttributes({
                    contenttype: 'xml',
                    action: 'insert',
                    origem: 'condominio.notificacoes',
                    returnkey: 'num',
                    condominio: unidade.condominio,
                    bloco: unidade.bloco,
                    andar: unidade.andar,
                    unidade: unidade.pk_unidade,
                    lastdate: today.format("yyyy-mm-dd"),
                    lasttime: today.format("HH:MM:ss"),
                    lastuser: informacoesdousuario.uidins
                }, formnotificacoes.getFormData())
            ), Resultformnotificacoes
        );
    });


    var cell_b = layoutnotificacoes.cells('b');
    cell_b.hideHeader();

    gridnotificacoes = cell_b.attachGrid();
    gridnotificacoes.setIconsPath('./codebase/imgs/');
    gridnotificacoes.setHeader(["Registro", "Tipo", "Livro", "Pagina", "Ocorrência", "Data", "Motivo"]);
    gridnotificacoes.attachHeader("&nbsp;,#text_filter,#text_filter,#text_filter,#text_filter,#text_filter,#text_filter");
    gridnotificacoes.setInitWidths("100,110,110,110,110,110,*");
    gridnotificacoes.setColTypes("ro,ro,ro,ro,ro,ro,ro");
    gridnotificacoes.setColSorting('str,str,str,str,str,str,str');
    gridnotificacoes.init();
    gridnotificacoes.attachEvent("onRowSelect", function (id) {
        CarregaNotificacao(id);
    });

    if (unidade !== undefined)
        CarregaInformacoes(true);

}

function Resultformnotificacoes(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (unidade !== undefined && out.registro !== undefined && out.registro.length > 0) {
        CarregaInformacoes(true);
        formnotificacoes.clear();
        alert(out.situacao);
    } else {
        alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
    }
}


function CarregaInformacoes(CarregaNotificacoes) {

    sys.FormAction(
        sys.setParameters({
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: 'condominio.unidades',
            where: 'condominio/' + unidade.condominio +
            '|bloco/' + unidade.bloco +
            '|andar/' + unidade.andar +
            '|num/' + unidade.pk_unidade,
            chave: 'num'
        }), function (http) {
            var out;
            out = JSON.parse(http.responseText);

            var itens = out[0];
            for (var key in itens)
                if (itens.hasOwnProperty(key))
                    objformUnidade.setItemValue(key, itens[key]);

            if (itens !== undefined) {
                if (itens.situacao === '1')
                    objformUnidade.disableItem('dados_imobiliaria');

                objformUnidade.setItemValue('filedate', sys.obtemDataEntradaFormatada(itens['filedate']));
            }

            if (CarregaNotificacoes === true) {
                sys.FormAction(
                    sys.setParameters({
                        dados: 'teste',
                        contenttype: 'xml',
                        action: 'directjson',
                        origem: 'condominio.lista_notificacoes',
                        where: 'condominio/' + unidade.condominio +
                        '|bloco/' + unidade.bloco +
                        '|andar/' + unidade.andar +
                        '|admunidade/' + unidade.pk_unidade
                    }), function (http) {

                        var out = JSON.parse(http.responseText);
                        gridnotificacoes.clearAll();
                        for (var i = 0; i < out.length; i++) {
                            var item = out[i];
                            gridnotificacoes.addRow(item.num, [
                                item.num, item.tipo, item.livro, item.pagina, item.ocorrencia, item.data_ocorrencia, item.motivo
                            ]);
                        }
                    });
            }
        }
    );
}

function CarregaNotificacao(id) {

    sys.FormAction(
        sys.setParameters({
            dados: 'teste',
            contenttype: 'xml',
            action: 'directjson',
            origem: 'condominio.abre_notificacao',
            where: 'num/' + id
        }), function (http) {

            var out;
            out = JSON.parse(http.responseText);
            console.log(out);
            var itens = out[0];
            for (var key in itens)
                if (itens.hasOwnProperty(key) && itens[key] != null)
                    formnotificacoes.setItemValue(key, itens[key]);

        });
}

function ResultFormUnidades(http) {
    var out;
    out = {registro: '', situacao: ''};
    out = JSON.parse(http.responseText);

    if (out.registro !== undefined && out.registro.length > 0) {
        alert(out.situacao);
        supervisor();
    } else {
        alert('Houve um erro ao enviar suas informações. Por favor tente mais tarde!');
    }
}


function removeitem(arr, item) {
    for (var i = arr.length; i--;) {
        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
}

function MudancanaUnidade() {

    var ec = new ws('as');

    var windowMudanca;
    windowMudanca = new dhtmlXWindows();
    windowMudanca.setSkin('dhx_terrace');

    var titulo = 'Registro de atividades na admunidade';
    var windowID = 'unidadeAtividade';

    var windowUnidadeAtv = windowMudanca.createWindow(windowID, 0, 0, 400, 400);
    windowUnidadeAtv.setText(titulo);
    windowUnidadeAtv.denyResize();
    windowUnidadeAtv.centerOnScreen();
    windowUnidadeAtv.button('park').hide();
    windowUnidadeAtv.button('minmax1').hide();

    var tabbarAtividades = windowUnidadeAtv.attachTabbar();
    tabbarAtividades.addTab('tabMudanca', 'Mudança', '');
    tabbarAtividades.addTab('tabReformas', 'Reforma', '');
    tabbarAtividades.setTabActive('tabMudanca');

    var formAlteracao = tabbarAtividades.cells('tabMudanca').attachForm([
        {
            type: "settings",
            labelAlign: "left",
            inputHeight: "18",
            offsetLeft: "4",
            offsetTop: "0",
            position: "label-top"
        },
        {type: "block", offsetTop: 14, list: [
            {type: "label", label: "Ativação de cadastro", width: 955, list: [
                {type: "input", name: "ativacao_data", label: "Data",  inputWidth: 80, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "ativacao_hora", label: "Horário", inputWidth: 80, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "button", offsetTop: 14, name: "ativar", value: "Ativar admunidade"}
            ]},
            {type: "label", offsetTop: 12, label: "Entrada no condomínio", width: 955, list: [
                {type: "input", name: "entrada_data_inicial", label: "Data inicial",  inputWidth: 80, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "entrada_data_final", label: "Data Final", inputWidth: 80, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "button", offsetTop: 14, name: "entrada", value: "Informar entrada"}
            ]},
            {type: "label", offsetTop: 12, label: "Saída do condomínio", width: 955, list: [
                {type: "input", name: "saida_data_inicial", label: "Data inicial", inputWidth: 80, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "saida_data_final", label: "Data Final", inputWidth: 80, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "button", offsetTop: 14, name: "saida", value: "Informar saída"}
            ]}
        ]}
    ]);
    formAlteracao.attachEvent("onButtonClick", function (name) {

        if (name === 'ativar') {

            if (formAlteracao.getItemValue('ativacao_data') === '' || formAlteracao.getItemValue('ativacao_hora') === '') {
                alert('Informe a data e o horário para ativação da admunidade');
                return;
            }

            dhtmlx.confirm("Aten&ccedil;&atilde;o. Ao executar esta opera&ccedil;&atilde;o todas as informa&ccedil;&otilde;es desta admunidade ser&atilde;o expurgadas! voc&ecirc; confirma esta opera&ccedil;&atilde;o?", function (result) {
                if (result === true) {

                    var dados = JSON.stringify({
                        'condominio': unidade.condominio,
                        'bloco': unidade.bloco,
                        'andar': unidade.andar,
                        'unidade': unidade.unidade,
                        'pkunidade': unidade.pk_unidade,
                        'usuario':JSON.parse(sessionStorage.auth).login,
                        'ativacao_data':formAlteracao.getItemValue('ativacao_data'),
                        'ativacao_hora':formAlteracao.getItemValue('ativacao_hora')
                    });

                    ec.Request({
                        c: 7,
                        cn: 'as',
                        process: 'condominio.expurgar_unidade',
                        params: dados
                    }, function (http) {
                        location.reload();
                    });
                }
            });


        } else if (name === 'entrada') {

            console.log('entrada');

            if (formAlteracao.getItemValue('entrada_data_inicial') === '' || formAlteracao.getItemValue('entrada_data_final') === '') {
                alert('Informe os campos de inicio e final da entrada');
                return;
            }

            ec.Request({
                c: 7,
                cn: 'as',
                process: 'query',
                params: JSON.stringify({
                    command: 'update',
                    fields: {
                        entrada_data_inicial: formAlteracao.getItemValue('entrada_data_inicial'),
                        entrada_data_final: formAlteracao.getItemValue('entrada_data_final')
                    },
                    from: 'condominio.unidades',
                    where: "bloco=" + unidade.bloco + " and num =" + unidade.pk_unidade,
                    returning: 'num'
                })
            }, function (http) {
                console.log(http);
            });

        } else if (name === 'saida') {

            console.log('saída');

            if (formAlteracao.getItemValue('saida_data_inicial') === '' || formAlteracao.getItemValue('saida_data_inicial') === '') {
                alert('Informe os campos de início e final da saída');
                return;
            }

            ec.Request({
                c: 7,
                cn: 'as',
                process: 'query',
                params: JSON.stringify({
                    command: 'update',
                    fields: {
                        saida_data_inicial: formAlteracao.getItemValue('saida_data_inicial'),
                        saida_data_final: formAlteracao.getItemValue('saida_data_final')
                    },
                    from: 'condominio.unidades',
                    where: "bloco=" + unidade.bloco + " and num =" + unidade.pk_unidade,
                    returning: 'num'
                })
            }, function (http) {
                console.log(http);
            });

        }
    });
    var formReforma = tabbarAtividades.cells('tabReformas').attachForm([
        {
            type: "settings",
            labelAlign: "left",
            inputHeight: "18",
            offsetLeft: "4",
            offsetTop: "0",
            position: "label-top"
        },
        {type: "block", offsetTop: 14, list: [
            {type: "label", offsetTop: 12, label: "Informativo de obras", width: 955, list: [
                {type: "input", name: "reforma_data_incial", label: "Data inicial",  inputWidth: 80, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "reforma_data_final", label: "Data Final", inputWidth: 80, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "button", offsetTop: 14, name: "obras", value: "Informar"}
            ]}
        ]}
    ]);
    formReforma.attachEvent("onButtonClick", function (name) {

        var ec = new ws('as');

        if (name === 'obras') {

            console.log('obras');

            if (formAlteracao.getItemValue('reforma_data_incial') === '' || formAlteracao.getItemValue('reforma_data_final') === '') {
                alert('Informe os campos de inicio e final da previsão de reforma');
                return;
            }

            ec.Request({
                c: 7,
                cn: 'as',
                process: 'query',
                params: JSON.stringify({
                    command: 'update',
                    fields: {
                        reforma_data_incial: formAlteracao.getItemValue('reforma_data_incial'),
                        reforma_data_final: formAlteracao.getItemValue('reforma_data_final')
                    },
                    from: 'condominio.unidades',
                    where: "bloco=" + unidade.bloco + " and num =" + unidade.pk_unidade,
                    returning: 'num'
                })
            }, function (http) {
                console.log(http);
            });

        }

    });

    ec.Request({
        c: 7,
        cn: 'as',
        process: 'query',
        params: JSON.stringify({
            command: 'select',
            fields: '*',
            from: 'condominio.unidade_alteracao',
            where: "bloco=" + unidade.bloco + " and num =" + unidade.pk_unidade
        })
    }, function (http) {

        var info = JSON.parse(JSON.parse(http.response)[0].query);
        formAlteracao.setFormData(info);
        formReforma.setFormData(info);


    });


}