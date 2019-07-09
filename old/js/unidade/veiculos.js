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
    tabbarVeiculos.addTab('tabCadastroVeiculo', 'Cadastro', '');

    var tabCadastroVeiculo = tabbarVeiculos.cells('tabCadastroVeiculo');
    formVeiculos = tabCadastroVeiculo.attachForm(campos_veiculos);
    tabbarVeiculos.setTabActive('tabCadastroVeiculo');

    tabbarVeiculos.addTab('tabVeiculosExcluidos', 'Histórico', '');
    var tabbarVeiculosExcluidos = tabbarVeiculos.cells('tabVeiculosExcluidos');
    formVeiculosExcluidos = tabbarVeiculosExcluidos.attachForm(campos_veiculos_excluidos);

    tabbarVeiculos.addTab('tabVeiculosPassagens', 'Passagem', '');
    var tabbarVeiculosPassagens = tabbarVeiculos.cells('tabVeiculosPassagens');
    formVeiculosPassagens = tabbarVeiculosPassagens.attachForm(campos_veiculos_passagens);

    var paramVeiculo;
    sessionStorage.recursocorrente = 'veiculos';
    formVeiculos.enableLiveValidation(true);

    var userprofile = JSON.parse(sessionStorage.auth).user.perfil;
    var perfil_corrente;
    for (var i = 0; i < userprofile.length; i++)
        if (userprofile[i].nome_recurso === 'veiculos') {
            perfil_corrente = userprofile[i];
            break;
        }

    if (perfil_corrente.adicionar === 0)
        formVeiculos.hideItem('novo');

    if (perfil_corrente.editar === 0)
        formVeiculos.hideItem('salvar');

    if (perfil_corrente.remover === 0) {
        formVeiculos.hideItem('remover');
        formVeiculos.hideItem('transferir');
    }

    var data_inicial = formVeiculosPassagens.getCalendar('data_inicial');
    data_inicial.loadUserLanguage('pt');
    data_inicial.hideTime();

    var data_final = formVeiculosPassagens.getCalendar('data_final');
    data_final.loadUserLanguage('pt');
    data_final.hideTime();


    function HistoricoPassagemPesquisar() {

        admunidade.veiculo.ListarPassagem(formVeiculosPassagens.getFormData(), function (response) {

            gridVeiculospassagem = new dhtmlXGridObject(formVeiculosPassagens.getContainer("gridveiculospassagem"));
            gridVeiculospassagem.setIconsPath('./codebase/imgs/');
            gridVeiculospassagem.setHeader("Id,Data cadastro,Tipo,Marca,Modelo,Cor");
            gridVeiculospassagem.setColumnIds("num,filedate,tipo_veiculo,marca,modelo,cor");
            gridVeiculospassagem.setColTypes("ro,ro,ro,ro,ro,ro");
            gridVeiculospassagem.setColSorting("str,str,str,str,str,str,str");
            gridVeiculospassagem.enableAutoWidth(true);
            gridVeiculospassagem.init();
            gridVeiculospassagem.attachEvent('onRowSelect', function (id) {

                admunidade.veiculo.id = id;
                admunidade.veiculo.ObterInfo(function (response) {
                    sys.FormClear(formVeiculosPassagens);
                    formVeiculosPassagens.setFormData(response);
                });

            });

        });
    }

    function HistoricoPassagemImprimir() {

    }

    function HistoricoPassagemExportar() {

    }

    formVeiculosPassagens.attachEvent("onButtonClick", function (name) {
        switch (name) {
            case 'buscar':
                HistoricoPassagemPesquisar();
                break;
            case 'imprimir':
                HistoricoPassagemImprimir();
                break;
            case 'exportar':
                HistoricoPassagemExportar();
                break;
        }
    });

    formVeiculos.attachEvent("onButtonClick", function (name) {

        if (name === 'novo') {
            sys.FormClear(formVeiculos);
            formVeiculos.setFormData({num: null});

        } else if (name === 'salvar') {
            formVeiculos.validate();

        } else if (name === 'remover') {

            let data = formVeiculos.getFormData();

            if (data.num.length === 0)
                return;

            dhtmlx.confirm("Voc&ecirc; confirma a exclus&atilde;o do registro", function (result) {

                if (result === true) {

                    admunidade.veiculo.Remover({
                        filter: {
                            num: data.num
                        },
                        last: 'num',
                        callback: function (response) {
                            console.debug(response);
                            sys.FormClear(formVeiculos);
                            gridLoadVeiculos();
                        }
                    });

                }

            });

        } else if (name === 'transferir') {

            let data = formVeiculos.getFormData();
            admunidade.veiculo.Transferir(data.nova_torre, data.nova_unidade, data.num, gridLoadVeiculos);

        }
    });

    formVeiculos.attachEvent("onAfterValidate", function (status) {

        if (status === false)
            return;

        let data = formMoradores.getFormData();
        let infounidade = JSON.parse(sessionStorage.unidadecorrente);

        data.condominio = infounidade.condominio;
        data.bloco = infounidade.bloco;
        data.andar = infounidade.andar;
        data.unidade = infounidade.pk_unidade;

        if (data.num.length === 0) {

            admunidade.morador.Adicionar({
                data: data,
                last: 'num',
                callback: function (response) {

                    console.debug(response);

                    admunidade.morador.Ativar({
                        bloco: infounidade.bloco,
                        unidade: infounidade.unidade,
                        registro: response.dados[0].num
                    }, function (response) {
                        console.debug(response);
                        gridLoadMoradores();
                    });
                }
            })

        } else {

            admunidade.morador.Atualizar({
                data: data,
                filter: {
                    num: data.num
                },
                last: 'num',
                callback: function (response) {

                    console.debug(response);
                    gridLoadMoradores();
                }
            })
        }

    });

    gridVeiculos = new dhtmlXGridObject(formVeiculos.getContainer("gridveiculos"));
    gridVeiculos.setIconsPath('./codebase/imgs/');
    gridVeiculos.setHeader("Id,Data cadastro,Tipo,Marca,Modelo,Cor");
    gridVeiculos.setColumnIds("num,filedate,tipo_veiculo,marca,modelo,cor");
    gridVeiculos.setColTypes("ro,ro,ro,ro,ro,ro");
    gridVeiculos.setColSorting("str,str,str,str,str,str,str");
    gridVeiculos.enableAutoWidth(true);
    gridVeiculos.init();
    gridVeiculos.attachEvent('onRowSelect', function (id) {

        admunidade.veiculo.id = id;
        admunidade.veiculo.ObterInfo(function (response) {
            sys.FormClear(formVeiculos);
            formVeiculos.setFormData(response);
        });

    });
    gridLoadVeiculos();

    gridVeiculosexcluidos = new dhtmlXGridObject(formVeiculosExcluidos.getContainer("gridveiculosexcluidos"));
    gridVeiculosexcluidos.setIconsPath('./codebase/imgs/');
    gridVeiculosexcluidos.setHeader("Id,Data cadastro,Tipo,Marca,Modelo,Cor");
    gridVeiculosexcluidos.setColumnIds("num,filedate,tipo_veiculo,marca,modelo,cor");
    gridVeiculosexcluidos.setColTypes("ro,ro,ro,ro,ro,ro");
    gridVeiculosexcluidos.setColSorting("str,str,str,str,str,str,str");
    gridVeiculosexcluidos.enableAutoWidth(true);
    gridVeiculosexcluidos.init();
    gridVeiculosexcluidos.attachEvent('onRowSelect', function (id) {

        admunidade.veiculo.id = id;
        admunidade.veiculo.ObterInfo(function (response) {
            sys.FormClear(formVeiculosExcluidos);
            formVeiculosExcluidos.setFormData(response);
        });

    });
    gridLoadVeiculosExcluidos();
}

function gridLoadVeiculos() {

    admunidade.veiculo.ListarCadastros(function (response) {
        gridVeiculos.clearAll();

        if (response.dados === null)
            return;

        response.dados.filter(function (item) {
            let data = new Date(item.filedate);
            gridVeiculos.addRow(item.num, [item.num, data.format("dd/mm/yyyy"), item.tipo_veiculo, item.marca, item.modelo, item.cor]);
        });
    });
}

function gridLoadVeiculosExcluidos() {

    admunidade.veiculo.Expurgados(function (response) {
        gridVeiculosexcluidos.clearAll();

        response.filter(function (item) {
            let data = new Date(item.filedate);
            gridVeiculosexcluidos.addRow(item.num, [item.num, data.format("dd/mm/yyyy"), item.tipo_veiculo, item.marca, item.modelo, item.cor]);
        });
    });

}

function buscaInformacoes(tipo) {

    if (unidade === undefined)
        return;

    var data_inicial = new Date(formVeiculosPassagens.getItemValue('data_inicial'));
    var dd = data_inicial.getDate();
    var mm = data_inicial.getMonth() + 1;
    var yyyy = data_inicial.getFullYear();

    data_inicial = yyyy + '-' + mm + '-' + dd;


    var data_final = new Date(formVeiculosPassagens.getItemValue('data_final'));
    dd = data_final.getDate();
    mm = data_final.getMonth() + 1;
    yyyy = data_final.getFullYear();

    data_final = yyyy + '-' + mm + '-' + dd;

    var torre = unidade.bloco;
    var unidade = admunidade.pk_unidade.trim();
    var placa = formVeiculosPassagens.getItemValue('buscar_placa').toUpperCase();
    var busca_localizacao = '';

    if (torre != undefined && torre != null && torre != '' && unidade != undefined && unidade != null && unidade != '')
        busca_localizacao += "' and bloco = '" + torre + "' and pk_unidade = '" + unidade;

    if (placa != undefined && placa != null && placa != '')
        busca_localizacao += "' and upper(placa_letras) = '" + placa.substr(0, 3).trim() + "' and placa_numeros::int = '" + placa.substr(4, 4);

    var parametros;
    parametros = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        origem: 'acesso.historico_veicular_unidade',
        campos: "filedate, timerg, num, portaid, modelo,placa_letras || '-' || placa_numeros as placa, cor",
        where: "filedate::date between '" + data_inicial + "' and '" + data_final + busca_localizacao,
        orderby: 'num desc',
        usecheckbox: 'false',
        usedecimal: 'filedate',
        chave: 'num',
        displaychave: 'false'
    };

    if (tipo === 'exportar') {

        parametros = {
            dados: 'teste',
            contenttype: 'xml',
            action: 'exportexcel',
            origem: 'acesso.historico_veicular_unidade',
            whereexp: "filedate::date between '" + data_inicial + "' and '" + data_final + busca_localizacao + "'",
            orderby: 'num desc',
            usecheckbox: 'false',
            usedecimal: 'filedate',
            chave: 'num',
            displaychave: 'false'
        };

        sys.FormAction(
            sys.setParameters(parametros), function (http) {
                var win = window.open(window.location.href.substr(0, window.location.href.length - 1) + 'controles/main/controls/' + http.responseText, '_blank');
                win.focus();
            }
        );
    } else if (tipo === 'imprimir') {

        parametros = {
            dados: 'teste',
            whereexp: "filedate::date between '" + data_inicial + "' and '" + data_final + busca_localizacao + "'",
            data_inicial: formVeiculosPassagens.getCalendar('data_inicial').getFormatedDate("%d/%m/%Y"),
            data_final: formVeiculosPassagens.getCalendar('data_final').getFormatedDate("%d/%m/%Y"),
            torre: unidade.bloco,
            unidade: unidade.unidade,
            placa: formVeiculosPassagens.getItemValue('buscar_placa').toUpperCase()
        };

        var win = window.open(window.location.href.substr(0, window.location.href.length - 1) + 'controles/main/relatorios/001.php?d=' + sys.setParameters(parametros), '_blank');
        win.focus();
        win.onload = function () {
            win.print();
        }

    } else {
        gridVeiculospassagem.loadXML(sys.setParameters(parametros));
    }
}

var campos_veiculos = [
    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {
        type: "template",
        name: "titulo",
        value: "Cadastro de todos os ve&iacute;culos da admunidade",
        style: "font-weight:bold;"
    },
    {
        type: "block", list: [
            {
                type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
                    {type: "button", name: "novo", value: "1. Cadastrar novo"},
                    {type: "newcolumn"},
                    {type: "button", name: "salvar", value: "2. Salvar dados"},
                    {type: "newcolumn"},
                    {type: "button", name: "remover", value: "3. Apagar dados"},
                    {type: "newcolumn"},
                    {type: "button", name: "transferir", value: "4. Transferir ve&iacute;culo"}
                ]
            }
        ]
    },
    {
        type: "block", list: [
            {
                type: "fieldset", name: "informacoes_registro", label: "Registro do ve&iacute;culo", width: 955, list: [
                    {
                        type: "settings",
                        labelAlign: "left",
                        inputHeight: "18",
                        offsetLeft: "2",
                        offsetTop: "2",
                        position: "label-top"
                    },
                    {
                        type: "block", list: [
                            {
                                type: "template",
                                name: "numero_registro",
                                value: "C&oacute;digo:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {type: "template", name: "num", offsetLeft: "2", inputWidth: "80", style: "color: gray"},
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "data_entrada",
                                value: "Data de cadastro:",
                                inputWidth: "112",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "filedate",
                                offsetLeft: "2",
                                inputWidth: "80",
                                style: "color: gray"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "horario_entrada",
                                value: "Hor&aacute;rio:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {type: "template", name: "timerg", offsetLeft: "2", inputWidth: "80", style: "color: gray"},
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "usuario_entrada",
                                value: "Usu&aacute;rio respons&aacute;vel:",
                                inputWidth: "150",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {type: "template", name: "uidins", offsetLeft: "2", inputWidth: "80", style: "color: gray"}
                        ]
                    },
                    {
                        type: "block", list: [
                            {
                                type: "template",
                                name: "data_alteracao",
                                value: "&Uacute;ltima altera&ccedil;&atilde;o:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "lastdate",
                                offsetLeft: "2",
                                inputWidth: "80",
                                style: "color: gray"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "horario_alteracao",
                                value: "Hor&aacute;rio:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "lasttime",
                                offsetLeft: "2",
                                inputWidth: "80",
                                style: "color: gray"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "usuario_alteracao",
                                value: "Alterado por:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "lastuser",
                                offsetLeft: "2",
                                inputWidth: "80",
                                style: "color: gray"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        type: "block", list: [
            {
                type: "fieldset", name: "detalhes", label: "Detalhes do ve&iacute;culo", width: 765, list: [
                    {
                        type: "block", list: [
                            {
                                type: "input",
                                name: "marca",
                                label: "Marca",
                                inputWidth: "150",
                                style: "font-weight:bold;",
                                validate: "NotEmpty",
                                tooltip: "Informe a marca. Ex.: Fiat, General Motors etc.",
                                required: true,
                                info: true,
                                note: {text: "Informe a marca. Ex.: Fiat, General Motors etc."}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "modelo",
                                label: "Modelo",
                                inputWidth: "150",
                                style: "font-weight:bold;",
                                validate: "NotEmpty",
                                tooltip: "Informe o modelo. Ex.: Palio, Golf etc.",
                                required: true,
                                info: true,
                                note: {text: "Informe o modelo. Ex.: Palio, Golf etc."}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "placa_letras",
                                label: "Placa",
                                offsetLeft: "10",
                                inputWidth: "35",
                                maxLength: "3",
                                style: "font-weight:bold;",
                                note: {text: "Letras"}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "placa_numeros",
                                label: "do ve&iacute;culo",
                                inputWidth: "50",
                                maxLength: "4",
                                style: "font-weight:bold;",
                                note: {text: "N&uacute;meros"}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input", name: "cor", label: "Cor", inputWidth: "100", style: "font-weight:bold;",
                                tooltip: "Indique a cor do ve&iacute;culo de acordo com a documenta&ccedil;&atilde;o. Ex.: Branco, Preto, Vermelho, Prata etc.",
                                required: true, info: true, note: {text: "Descreva a cor do ve&iacute;culo"}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "autenticacao",
                                label: "Autentica&ccedil;&atilde;o",
                                inputWidth: 140,
                                style: "font-weight:bold; color:blue",
                                tooltip: "Conforme o adesivo a ser colado no ve&iacute;culo. O ID deve possuir todas as letras em maiusculo.",
                                info: true
                            }
                        ]
                    },
                    {
                        type: "block", list: [
                            {
                                type: "combo",
                                name: "proprietario",
                                offsetTop: 12,
                                label: "Propriet&aacute;rio",
                                inputWidth: "155",
                                style: "font-weight:bold;",
                                required: true,
                                options: [
                                    {value: "", text: "Selecione", selected: true},
                                    {value: "morador", text: "Morador"},
                                    {value: "condominio", text: "Condomínio"},
                                    {value: "prestador", text: "Prestador"},
                                    {value: "vanescolar", text: "Van Escolar"},
                                    {value: "hospede", text: "Hóspede"},
                                    {value: "seguradora", text: "Seguradora"}
                                ]
                            },
                            {type: "newcolumn"},
                            {
                                type: "combo",
                                name: "bloqueio",
                                offsetTop: 12,
                                label: "Bloqueio operacional",
                                inputWidth: "375",
                                style: "font-weight:bold;"
                            }
                        ]
                    }
                ]
            },
            {type: "newcolumn"},
            {
                type: "fieldset", name: "transferencia", label: "Transfer&ecirc;ncia de admunidade", width: 180, list: [
                    {
                        type: "block", list: [
                            {
                                type: "input",
                                name: "nova_torre",
                                label: "Torre",
                                inputWidth: 140,
                                style: "font-weight:bold;",
                                tooltip: "Indique a nova localiza&ccedil;&atilde;o",
                                info: true,
                                note: {text: "Indique a nova localiza&ccedil;&atilde;o"}
                            }
                        ]
                    },
                    {
                        type: "block", list: [
                            {
                                type: "input",
                                name: "nova_unidade",
                                label: "Unidade",
                                inputWidth: 140,
                                style: "font-weight:bold;",
                                tooltip: "Indique a nova admunidade",
                                info: true,
                                note: {text: "Indique a nova admunidade"}
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        type: "block", list: [
            {
                type: "fieldset", label: "Tipo de ve&iacute;culo", width: 955, list: [
                    {
                        type: "settings",
                        labelAlign: "left",
                        inputHeight: "18",
                        offsetLeft: "20",
                        offsetTop: "2",
                        position: "label-right"
                    },
                    {
                        type: "radio",
                        name: "tipo_veiculo",
                        value: "1",
                        label: "<img src='./controles/morador/estrutura/carro.png' width='32px' />&nbsp;Carro",
                        checked: true
                    },
                    {type: "newcolumn"},
                    {
                        type: "radio",
                        name: "tipo_veiculo",
                        value: "2",
                        label: "<img src='./controles/morador/estrutura/moto.png' width='32px' />&nbsp;Moto"
                    },
                    {type: "newcolumn"},
                    {
                        type: "radio",
                        name: "tipo_veiculo",
                        value: "3",
                        label: "<img src='./controles/morador/estrutura/bike.png' width='32px' />&nbsp;Bicicleta"
                    }
                ]
            }
        ]
    },
    {
        type: "fieldset",
        name: "dados_veiculos",
        offsetTop: 20,
        label: "Ve&iacute;culos cadastrados",
        width: 955,
        list: [
            {type: "container", name: "gridveiculos", inputWidth: 915, inputHeight: 300}
        ]
    }
];

var campos_veiculos_excluidos = [
    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {
        type: "template",
        name: "titulo",
        value: "Registro de ve&iacute;culos exclu&iacute;dos da admunidade",
        style: "font-weight:bold;"
    },
    {
        type: "block", list: [
            {
                type: "fieldset", name: "informacoes_registro", label: "Registro do ve&iacute;culo", width: 955, list: [
                    {
                        type: "settings",
                        labelAlign: "left",
                        inputHeight: "18",
                        offsetLeft: "2",
                        offsetTop: "2",
                        position: "label-top"
                    },
                    {
                        type: "block", list: [
                            {
                                type: "template",
                                name: "numero_registro",
                                value: "C&oacute;digo:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {type: "template", name: "num", offsetLeft: "2", inputWidth: "80", style: "color: gray"},
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "data_entrada",
                                value: "Data de cadastro:",
                                inputWidth: "112",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "filedate",
                                offsetLeft: "2",
                                inputWidth: "80",
                                style: "color: gray"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "horario_entrada",
                                value: "Hor&aacute;rio:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {type: "template", name: "timerg", offsetLeft: "2", inputWidth: "80", style: "color: gray"},
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "usuario_entrada",
                                value: "Usu&aacute;rio respons&aacute;vel:",
                                inputWidth: "150",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {type: "template", name: "uidins", offsetLeft: "2", inputWidth: "80", style: "color: gray"}
                        ]
                    },
                    {
                        type: "block", list: [
                            {
                                type: "template",
                                name: "data_alteracao",
                                value: "&uacute;ltima altera&ccedil;&atilde;o:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "lastdate",
                                offsetLeft: "2",
                                inputWidth: "80",
                                style: "color: gray"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "horario_alteracao",
                                value: "Hor&aacute;rio:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "lasttime",
                                offsetLeft: "2",
                                inputWidth: "80",
                                style: "color: gray"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "usuario_alteracao",
                                value: "Alterado por:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "lastuser",
                                offsetLeft: "2",
                                inputWidth: "80",
                                style: "color: gray"
                            }
                        ]
                    },
                    {
                        type: "block", list: [
                            {
                                type: "template",
                                name: "data_exclusao",
                                value: "ve&iacute;culo removido em:",
                                inputWidth: "180",
                                style: "font-weight:bold; color: red"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "purgedate",
                                offsetLeft: "2",
                                inputWidth: "80",
                                style: "color: red"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "horario_exclusao",
                                value: "As:",
                                inputWidth: "110",
                                style: "font-weight:bold; color: red"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "purgetime",
                                offsetLeft: "2",
                                inputWidth: "80",
                                style: "color: red"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        type: "block", list: [
            {
                type: "fieldset", name: "detalhes", label: "Detalhes do ve&iacute;culo", width: 765, list: [
                    {
                        type: "block", list: [
                            {
                                type: "input",
                                name: "marca",
                                label: "Marca",
                                inputWidth: "150",
                                readonly: true,
                                style: "font-weight:bold; color: red",
                                validate: "NotEmpty",
                                tooltip: "Informe a marca. Ex.: Fiat, General Motors etc.",
                                required: true,
                                info: true,
                                note: {text: "Informe a marca. Ex.: Fiat, General Motors etc."}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "modelo",
                                label: "Modelo",
                                inputWidth: "150",
                                readonly: true,
                                style: "font-weight:bold; color: red",
                                validate: "NotEmpty",
                                tooltip: "Informe o modelo. Ex.: Palio, Golf etc.",
                                required: true,
                                info: true,
                                note: {text: "Informe o modelo. Ex.: Palio, Golf etc."}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "placa_letras",
                                label: "Placa",
                                offsetLeft: "10",
                                readonly: true,
                                inputWidth: "35",
                                maxLength: "3",
                                style: "font-weight:bold; color: red",
                                note: {text: "Letras"}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "placa_numeros",
                                label: "do ve&iacute;culo",
                                readonly: true,
                                inputWidth: "50",
                                maxLength: "4",
                                style: "font-weight:bold; color: red",
                                note: {text: "N&uacute;meros"}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "cor",
                                label: "Cor",
                                readonly: true,
                                inputWidth: "100",
                                style: "font-weight:bold; color: red",
                                tooltip: "Indique a cor do ve&iacute;culo de acordo com a documenta&ccedil;&atilde;o. Ex.: Branco, Preto, Vermelho, Prata etc.",
                                required: true,
                                info: true,
                                note: {text: "Descreva a cor do ve&iacute;culo"}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "autenticacao",
                                readonly: true,
                                label: "Autentica&ccedil;&atilde;o",
                                inputWidth: 140,
                                style: "font-weight:bold; color:red",
                                tooltip: "Conforme o adesivo a ser colado no ve&iacute;culo. O ID deve possuir todas as letras em maiusculo.",
                                info: true
                            }
                        ]
                    },
                    {
                        type: "block", list: [
                            {
                                type: "combo",
                                name: "proprietario",
                                readonly: true,
                                offsetTop: 12,
                                label: "Propriet&aacute;rio",
                                inputWidth: "155",
                                style: "font-weight:bold; color:red",
                                required: true,
                                options: [
                                    {value: "", text: "Selecione", selected: true},
                                    {value: "morador", text: "Morador"},
                                    {value: "condominio", text: "Condom&iacute;nio"},
                                    {value: "prestador", text: "Prestador"},
                                    {value: "hospede", text: "H&oacute;spede"},
                                    {value: "seguradora", text: "Seguradora"}
                                ]
                            },
                            {type: "newcolumn"},
                            {
                                type: "combo",
                                name: "bloqueio",
                                offsetTop: 12,
                                readonly: true,
                                label: "Bloqueio operacional",
                                inputWidth: "375",
                                style: "font-weight:bold;"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        type: "block", list: [
            {
                type: "fieldset", label: "Tipo de ve&iacute;culo", width: 955, list: [
                    {
                        type: "settings",
                        labelAlign: "left",
                        inputHeight: "18",
                        offsetLeft: "20",
                        offsetTop: "2",
                        position: "label-right"
                    },
                    {
                        type: "radio",
                        name: "tipo_veiculo",
                        value: "1",
                        label: "<img src='./controles/morador/estrutura/carro.png' width='32px' />&nbsp;Carro",
                        checked: true
                    },
                    {type: "newcolumn"},
                    {
                        type: "radio",
                        name: "tipo_veiculo",
                        value: "2",
                        label: "<img src='./controles/morador/estrutura/moto.png' width='32px' />&nbsp;Moto"
                    },
                    {type: "newcolumn"},
                    {
                        type: "radio",
                        name: "tipo_veiculo",
                        value: "3",
                        label: "<img src='./controles/morador/estrutura/bike.png' width='32px' />&nbsp;Bicicleta"
                    }
                ]
            }
        ]
    },
    {
        type: "fieldset", name: "dados_veiculos_excluidos", label: "Ve&iacute;culos cadastrados", width: 955, list: [
            {type: "container", name: "gridveiculosexcluidos", inputWidth: 915, inputHeight: 300}
        ]
    }
];

var campos_veiculos_passagens = [
    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", name: "titulo", value: "Registro de acesso dos ve&iacute;culos", style: "font-weight:bold;"},
    {
        type: "block", list: [
            {
                type: "fieldset",
                label: "Par&acirc;metros para localiza&ccedil;&atilde;o do hist&oacute;rico de acesso",
                width: 955,
                list: [
                    {
                        type: "calendar",
                        dateFormat: "%d/%m/%Y",
                        name: "data_inicial",
                        label: "Data inicial",
                        enableTime: false,
                        inputWidth: 70
                    },
                    {type: "newcolumn"},
                    {
                        type: "calendar",
                        dateFormat: "%d/%m/%Y",
                        name: "data_final",
                        label: "Data final",
                        enableTime: false,
                        inputWidth: 70
                    },
                    {type: "newcolumn"},
                    {
                        type: "input",
                        name: "buscar_placa",
                        label: "Placa",
                        offsetLeft: "10",
                        inputWidth: 100,
                        maxLength: "8",
                        style: "font-weight:bold;"
                    },
                    {type: "newcolumn"},
                    {type: "button", name: "buscar", offsetTop: 15, value: "Listar acessos"},
                    {type: "newcolumn"},
                    {type: "button", name: "imprimir", offsetTop: 15, value: "Imprimir"},
                    {type: "newcolumn"},
                    {type: "button", name: "exportar", offsetTop: 15, value: "Exportar para o Excel"}
                ]
            }
        ]
    },
    {
        type: "block", list: [
            {
                type: "fieldset", name: "informacoes_registro", label: "Registro do ve&iacute;culo", width: 955, list: [
                    {
                        type: "settings",
                        labelAlign: "left",
                        inputHeight: "18",
                        offsetLeft: "2",
                        offsetTop: "2",
                        position: "label-top"
                    },
                    {
                        type: "block", list: [
                            {
                                type: "template",
                                name: "numero_registro",
                                value: "C&oacute;digo de acesso:",
                                inputWidth: "180",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {type: "template", name: "num", offsetLeft: "2", inputWidth: "80", style: "color: gray"},
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "data_entrada",
                                value: "Data:",
                                inputWidth: "112",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "filedate",
                                offsetLeft: "2",
                                inputWidth: "80",
                                style: "color: gray"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "horario_entrada",
                                value: "As:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {type: "template", name: "timerg", offsetLeft: "2", inputWidth: "80", style: "color: gray"},
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "porta_entrada",
                                value: "Local:",
                                inputWidth: "110",
                                style: "font-weight:bold;"
                            },
                            {type: "newcolumn"},
                            {
                                type: "template",
                                name: "portaid",
                                offsetLeft: "2",
                                inputWidth: "100",
                                style: "color: gray"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        type: "block", list: [
            {
                type: "fieldset", name: "detalhes", label: "Detalhes do ve&iacute;culo", width: 955, list: [
                    {
                        type: "block", list: [
                            {
                                type: "input",
                                name: "modelo",
                                label: "Modelo",
                                inputWidth: "150",
                                readonly: true,
                                style: "font-weight:bold; color: red",
                                validate: "NotEmpty",
                                tooltip: "Informe o modelo. Ex.: Palio, Golf etc.",
                                required: true,
                                info: true,
                                note: {text: "Informe o modelo. Ex.: Palio, Golf etc."}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "placa_letras",
                                label: "Placa",
                                offsetLeft: "10",
                                readonly: true,
                                inputWidth: "35",
                                maxLength: "3",
                                style: "font-weight:bold; color: red",
                                note: {text: "Letras"}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "placa_numeros",
                                label: "do ve&iacute;culo",
                                readonly: true,
                                required: true,
                                validate: "ValidNumeric",
                                inputWidth: "50",
                                maxLength: "4",
                                style: "font-weight:bold; color: red",
                                note: {text: "N&uacute;meros"}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "cor",
                                label: "Cor",
                                readonly: true,
                                inputWidth: "100",
                                style: "font-weight:bold; color: red",
                                tooltip: "Indique a cor do ve&iacute;culo de acordo com a documenta&ccedil;&atilde;o. Ex.: Branco, Preto, Vermelho, Prata etc.",
                                required: true,
                                info: true,
                                note: {text: "Descreva a cor do ve&iacute;culo"}
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "autenticacao",
                                readonly: true,
                                label: "Autentica&ccedil;&atilde;o",
                                inputWidth: 140,
                                style: "font-weight:bold; color:red",
                                tooltip: "Conforme o adesivo a ser colado no ve&iacute;culo. O ID deve possuir todas as letras em maiusculo.",
                                info: true
                            }
                        ]
                    },
                    {
                        type: "block", list: [
                            {
                                type: "input",
                                name: "dsc_situacao",
                                label: "Situa&ccedil;&atilde;o",
                                inputWidth: "310",
                                readonly: true,
                                style: "font-weight:bold; color: red"
                            },
                            {type: "newcolumn"},
                            {
                                type: "input",
                                name: "bloqueio",
                                label: "Bloqueio",
                                inputWidth: "370",
                                readonly: true,
                                style: "font-weight:bold; color: red"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        type: "fieldset", name: "dados_veiculos_passagem", label: "Hist&oacute;rico de passagem", width: 955, list: [
            {type: "container", name: "gridveiculospassagem", inputWidth: 915, inputHeight: 300}
        ]
    }
];