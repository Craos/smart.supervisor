let forms = {
    cadastro: [
        {type:"radio", name: "situacao", value: 1, required: true, label:"Informações do proprietário", list:[
            {type: "input", required: true, name: "nome_proprietario", label: "Nome do proprietário"},
            {type: "input", required: true, name: "rg", label: "Doc. de identificação"},
            {type: "input", required: true, name: "telefone_proprietario", label: "Telefone"}
        ]},
        {type: "newcolumn"},
        {type:"radio", name: "situacao", value: 1, required: true, label:"Informações da imobiliária", list:[
            {type: "input", required: true, name: "imobiliaria", label: "Nome da imobiliária"},
            {type: "input", required: true, name: "nome_proprietario_imobiliaria", label: "Nome do proprietário"},
            {type: "input", required: true, name: "telefone_imobiliaria", label: "Telefone"},
            {type: "input", name: "telefone_proprietario_imobiliaria", label: "Telefone"}
        ]}
    ],
    usuario: [
        { type: "input", name: "nome", label: "Nome completo"},
        { type: "input", name: "login", label: "Usuário", readonly: true},
        { type: "input", name: "email", label: "E-mail"},
        { type: "password", name: "password", label: "Nova senha", maxLength: 10},
        { type: "password", name: "repassword", label: "Repita a nova senha", maxLength: 10},
    ],
    moradores:[
        {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
        {type: "block", list: [
            {type: "block", list: [
            {type: "fieldset", name: "foto", label: "Identifica&ccedil;&atilde;o", width: 140, list: [
                {type: "container", name: "foto_morador", inputWidth: 120, inputHeight: 120}
            ]},
            {type: "newcolumn"},
            {type: "fieldset", label: "Informa&ccedil;&otilde;es gerais do morador", width: 800, list: [
                {type: "block", list: [
                    {type: "input", name: "nome", label: "Nome completo", inputWidth: 350, style: "font-weight:bold;", tooltip: "Informe o nome completo do morador", required: true, info: true, note: {text: "Nome completo do morador"}},
                    {type: "newcolumn"},
                    {type: "input", name: "nascimento", label: "Data de nascimento", inputWidth: 130, style: "font-weight:bold;", tooltip: "Data de nascimento do morador", required: true, info: true, note: {text: "Ex.: 12/06/1981"}},
                    {type: "newcolumn"},
                    {type: "input", name: "local_nascimento", label: "Local de nascimento", inputWidth: 220, style: "font-weight:bold;", tooltip: "Cidade e Estado se for no Brasil; cidade e pa&iacute;s se for no estrangeiro. Ex.: Campinas-S&atilde;o Paulo ou Roma-It&aacute;lia", required: true, info: true, note: {text: "Cidade e Estado brasileiro ou pa?s estrangeiro"}}
                ]},
                {type: "block", list: [
                    {type: "input", name: "rg", label: "Doc. de identifica&ccedil;&atilde;o", inputWidth: "140", style: "font-weight:bold;", tooltip: "Informe o n&uacute;mero de RG ou RNE ou passaporte", info: true},
                    {type: "newcolumn"},
                    {type: "input", name: "cpf", label: "CPF", inputWidth: "120", style: "font-weight:bold;"},
                    {type: "newcolumn"},
                    {type: "combo", name: "genero", label: "G&ecirc;nero", inputWidth: "100", style: "font-weight:bold;", required: true, options: [
                        {value: "", text: "Selecione", selected: true},
                        {value: "1", text: "Masculino"},
                        {value: "2", text: "Feminino"}
                    ]},
                    {type: "newcolumn"},
                    {type: "combo", name: "parentesco", label: "Parentesco/Proximidade", required: true, inputWidth: "150", style: "font-weight:bold;", options: [
                        {value: "", text: "Selecione", selected: true},
                        {value: "1", text: "Cônjuge"},
                        {value: "2", text: "Filho/a"},
                        {value: "3", text: "Pai/Mãe"},
                        {value: "4", text: "Sogro/a"},
                        {value: "5", text: "Cunhado/a"},
                        {value: "6", text: "Irmã(o)"},
                        {value: "7", text: "Tio/a"},
                        {value: "8", text: "Primo/a"},
                        {value: "9", text: "Neto/a"},
                        {value: "10", text: "Avó/Avô"},
                        {value: "11", text: "Parente"},
                        {value: "12", text: "Amigo/a"},
                        {value: "13", text: "Proprietário"},
                        {value: "14", text: "Locatário"}
                    ]},
                    {type: "newcolumn"},
                    {type: "input", name: "telefone", label: "Telefone", inputWidth: "170", offsetLeft: "10", style: "font-weight:bold;"}
                ]}
            ]}
        ]},
    {type: "block", list: [
        {type: "fieldset", name: "autorizacao", label: "Registro", width: 140, list: [
            {type: "input", name: "autenticacao", label: "Autoriza&ccedil;&atilde;o", inputWidth: 120, style: "font-weight:bold; color:blue"},
            {type: "input", name: "num", readonly:true,  label: "Matrícula", inputWidth: 120, style: "font-weight:bold; color:red"},
            {type: "input", name: "filedate", readonly:true, label: "Data Cadastro", inputWidth: 120, style: "font-weight:bold; color:red"},
            {type: "input", name: "ativacao", readonly:true, label: "Data Ativação", inputWidth: 120, style: "font-weight:bold; color:red"},
            {type: "label", name:"aviso_ativacao"}
        ]},
        {type: "newcolumn"},
        {type: "fieldset", name: "opcoes", label: "Informa&ccedil;&otilde;es complementares", width: 800, list: [
            {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "20", offsetTop: "2", position: "label-top"},
            {type: "input", name: "emg_plano_saude", label: "Nome do plano de sa&uacute;de", inputWidth: "250", style: "font-weight:bold;"},
            {type: "input", name: "emg_alergia_medicamentos", label: "Al&eacute;rgico a medicamentos / Quais?", inputWidth: "250", style: "font-weight:bold;"},
            {type: "input", name: "emg_parente", label: "Em caso de emerg&ecirc;ncia quem contactar", inputWidth: "250", style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "input", name: "emg_necessidade_especial", label: "Descreva as necessidades especiais", inputWidth: "250", style: "font-weight:bold;"},
            {type: "input", name: "emg_remedio", label: "Usu&aacute;rio de medicamento controlado / Qual?", inputWidth: "250", style: "font-weight:bold;"},
            {type: "input", name: "emg_parente_telefone", label: "N&uacute;mero do telefone", inputWidth: "250", style: "font-weight:bold;"},
            {type: "newcolumn"},
            {type: "combo", name: "emg_tipo_sanguineo", label: "Tipo sangu&iacute;neo", inputWidth: "100", style: "font-weight:bold;", options: [
                {value: "", text: "Selecione", selected: true},
                {value: "1", text: "O +"},
                {value: "2", text: "A +"},
                {value: "3", text: "B +"},
                {value: "4", text: "AB +"},
                {value: "5", text: "O -"},
                {value: "6", text: "A -"},
                {value: "7", text: "B -"},
                {value: "8", text: "AB -"}
            ]}
        ]}
    ]},
    ]}
],
    veiculos:[
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
                            label: "<!--suppress HtmlUnknownTarget --><img alt='' src='./img/forms/veiculos.png' width='32px' />&nbsp;Carro",
                            checked: true
                        },
                        {type: "newcolumn"},
                        {
                            type: "radio",
                            name: "tipo_veiculo",
                            value: "2",
                            label: "<!--suppress HtmlUnknownTarget --><img alt='' src='./img/forms/moto.png' width='32px' />&nbsp;Moto"
                        },
                        {type: "newcolumn"},
                        {
                            type: "radio",
                            name: "tipo_veiculo",
                            value: "3",
                            label: "<!--suppress HtmlUnknownTarget --><img alt='' src='./img/forms/bicicleta.png' width='32px' />&nbsp;Bicicleta"
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
    ],
    funcionarios:[
        {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
        {type: "block", list: [
            {type: "fieldset", name: "info_geral", label: "Informa&ccedil;&otilde;es gerais do funcion&aacute;rio", width: 955, list: [
                    {type: "block", list: [
                            {type: "input", name: "nome", label: "Nome completo", inputWidth: "280", style: "font-weight:bold;",
                                tooltip: "Forneça o nome completo do funcionário para identificação na portaria",
                                required: true, info: true, note: {text: "Nome completo do funcion&aacute;rio"}
                            },
                            {type: "newcolumn"},
                            {type: "input", name: "servico_prestado", label: "Descri&ccedil;&atilde;o dos servi&ccedil;os prestados", inputWidth: "460", style: "font-weight:bold;"}
                        ]}
                ]},
            {type: "fieldset", name: "info_endereco", label: "Informa&ccedil;&otilde;es gerais", width: 955, list: [
                    {type: "block", list: [
                            {type: "input", name: "rg", label: "RG", inputWidth: "160", style: "font-weight:bold;", required: true},
                            {type: "newcolumn"},
                            {type: "input", name: "cpf", label: "CPF", inputWidth: "160", style: "font-weight:bold;", required: true},
                            {type: "newcolumn"},
                            {type: "input", name: "telefone_cel", label: "Telefone Celular", inputWidth: "140", style: "font-weight:bold;"}
                        ]},
                    {type: "block", list: [
                        ]}
                ]}
        ]}
    ],
    hospedes:[
        {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
        {type: "template", offsetLeft: "20", offsetTop: "20", name: "titulo", value: "Cadastro de todos os hospedes da admunidade", style: "font-weight:bold; border: 0;"},
        {type: "block", list: [
                {type: "fieldset", name: "opcoes", label: "Informa&ccedil;&otilde;es do h&oacute;spede", width: 955, list: [
                        {type: "block", list: [
                                {type: "container", name: "foto_hospede", inputWidth: 120, inputHeight: 120, style: "border: 1px solid #CECECE;"}
                            ]},
                        {type: "newcolumn"},
                        {type: "block", list: [
                                {type: "input", name: "nome", label: "Nome completo", inputWidth: 350, required: true, style: "font-weight:bold;", tooltip: "Informe o nome completo do hospede", info: true, note: {text: "Nome completo do hospede"}},
                                {type: "newcolumn"},
                                {type: "combo",name: "genero",label: "G&ecirc;nero",inputWidth: "100",style: "font-weight:bold;",options: [
                                        {value: "", text: "Selecione", selected: true},
                                        {value: "1", text: "Masculino"},
                                        {value: "2", text: "Feminino"}
                                    ]},
                                {type: "newcolumn"},
                                {type: "input",name: "nascimento",label: "Data de nascimento",inputWidth: 145, required: true, style: "font-weight:bold;",tooltip: "Data de nascimento do hospede",info: true,note: {text: "Ex.: 12/06/1981"}}
                            ]},
                        {type: "block", list: [
                                {type: "input",name: "rg",label: "Doc. de identifica&ccedil;&atilde;o",inputWidth: 130, required: true, style: "font-weight:bold;",tooltip: "Informe o número de RG ou RNE ou passaporte",info: true},
                                {type: "newcolumn"},
                                {type: "combo",name: "parentesco",label: "Parentesco",inputWidth: 120, style: "font-weight:bold;",options: [
                                        {value: "", text: "Selecione", selected: true},
                                        {value: "1", text: "Cônjuge"},
                                        {value: "2", text: "Filho/a"},
                                        {value: "3", text: "Pai/Mãe"},
                                        {value: "4", text: "Sogro/a"},
                                        {value: "5", text: "Cunhado/a"},
                                        {value: "6", text: "Irmã(o)"},
                                        {value: "7", text: "Tio/a"},
                                        {value: "8", text: "Primo/a"},
                                        {value: "9", text: "Neto/a"},
                                        {value: "10", text: "Avó/ô"},
                                        {value: "11", text: "Parente"},
                                        {value: "12", text: "Amigo/a"},
                                        {value: "13", text: "Outro/a"}
                                    ]},
                                {type: "newcolumn"},
                                {type: "input",name: "telefone",label: "Telefone",inputWidth: 120,offsetLeft: "8", style: "font-weight:bold;"}
                            ]}
                    ]}
            ]},
        { type: "block", list: [
                {type: "fieldset", name: "autorizacao", label: "Registro", width: 955, list: [
                        {type: "input", name: "autenticacao", label: "Autoriza&ccedil;&atilde;o", inputWidth: 120, style: "font-weight:bold; color:blue"},
                        {type: "newcolumn"},
                        {type: "input", name: "num", readonly:true,  label: "Matrícula", inputWidth: 120, style: "font-weight:bold; color:red"},
                        {type: "newcolumn"},
                        {type: "input",name: "data_entrada",label: "Data do cadastro", readonly:true, required: true, inputWidth: 120,offsetLeft: "8",style: "font-weight:bold; color:red;"},
                        {type: "newcolumn"},
                        {type: "input",name: "timerg",label: "Horário", readonly:true, inputWidth: 60,offsetLeft: "8",style: "font-weight:bold; color:red;"},
                        {type: "newcolumn"},
                        {type: "input", name: "ativacao", readonly:true, label: "Data da ativação", inputWidth: 120, style: "font-weight:bold; color:red"},
                        {type: "newcolumn"},
                        {type: "template",name: "aviso_ativacao",label: "Situa&ccedil;&atilde;o do cadastro",inputWidth: 130,offsetLeft: "18",style: "font-weight:bold;"},
                        {type: "newcolumn"},
                        {type: "template",name: "situacao_hospede",label: "Disponibilidade",inputWidth: 130,offsetLeft: "18",style: "font-weight:bold;"}
                    ]}
            ]}
    ],
    pets:[
        { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
        {type: "template", name: "titulo", value: "Cadastro dos animais dom&eacute;sticos da admunidade", style: "font-weight:bold; color: #003366;"},
        {type: "block", list: [
                {type: "fieldset", name: "dados_saude", label: "Informa&ccedil;&otilde;es gerais do animal", width: 955, list: [
                        {type: "block", list: [
                                {type: "input", name: "nome", label: "Nome a que atende o animal", inputWidth: "180", style: "font-weight:bold;",
                                    tooltip: "Informe o nome a que atende o animal",
                                    required: true, info: true, note: {text: "Nome do animal"}
                                },
                                {type: "newcolumn"},
                                {type: "input", name: "especie", label: "Esp&eacute;cie do animal", inputWidth: "180", style: "font-weight:bold;",
                                    tooltip: "Informe a espécie do animal. Ex.: Cachorro, Gato, Passarinho etc.",
                                    required: true, info: true, note: {text: "Esp&eacute;cie do animal"}
                                },
                                {type: "newcolumn"},
                                {type: "input", name: "raca", label: "Ra&ccedil;a", inputWidth: "122", style: "font-weight:bold;", required: true},
                                {type: "newcolumn"},
                                {type: "input", name: "cor", label: "Cor", inputWidth: "122", style: "font-weight:bold;", required: true}
                            ]}
                    ]},
            ]}
    ],
    preautorizados: [
        { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
        {type: "template", name: "titulo", value: "Cadastro de visitantes que podem entrar sem a presen&ccedil;a de um morador", style: "font-weight:bold; color: #003366;"},
        {type: "hidden", name: "num"},
        {type: "block", list: [
                {type: "fieldset", name: "info_geral", label: "Informa&ccedil;&otilde;es gerais do visitante", width: 955, list: [
                        {type: "block", list: [
                                {type: "input", name: "nome", label: "Nome completo", inputWidth: "260", style: "font-weight:bold;",
                                    tooltip: "Forneça o nome completo do visitante para identificação",
                                    required: true, info: true, note: {text: "Nome completo do visitante"}
                                },
                                {type: "newcolumn"},
                                {type: "input", required: true, name: "rg", label: "Doc. de Identifica&ccedil;&atilde;o", inputWidth: "145", style: "font-weight:bold;", tooltip: "Informe o número de RG ou RNE ou passaporte", info: true
                                },
                                {type: "newcolumn"},
                                {type: "input", name: "cpf", label: "CPF", inputWidth: "105", style: "font-weight:bold;"},
                                {type: "newcolumn"},
                                {type: "input", name: "telefone_res", label: "Tel. residencial", inputWidth: "105", style: "font-weight:bold;"},
                                {type: "newcolumn"},
                                {type: "input", name: "telefone_cel", label: "Tel. celular", inputWidth: "105", style: "font-weight:bold;"}
                            ]}
                    ]}
            ]}
    ]
};