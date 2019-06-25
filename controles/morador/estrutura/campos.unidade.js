/**
 * Created by Oberdan on 08/06/14.
 */

var campos_unidade = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "8", position: "label-top"},
    {type: "template", name: "titulo", value: "Cadastro de informa&ccedil;&otilde;es gerais da unidade", style: "font-weight:bold; color: #003366;"},
        {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
            {type: "button", name: "finalizar", value: "Atualizar"}
        ]},
    {type: "fieldset", name: "informacoes_unidade", label: "Informa&ccedil;&otilde;es da unidade", inputWidth: 955, list: [
        {type: "block", offsetTop: "0", list: [
            {type: "input", name: "num", readonly:true,  label: "Registro", inputWidth: 50, style: "font-weight:bold; color:red"},
            {type: "newcolumn"},
            {type: "input", name: "filedate", readonly:true,  label: "Data de registro", inputWidth: 100, style: "font-weight:bold; color:red"},
            {type: "newcolumn"},
            {type: "input", name: "bloco",  readonly:true, label: "Bloco", inputWidth: 100, style: "font-weight:bold; color:red"},
            {type: "newcolumn"},
            {type: "input", name: "andar",  readonly:true, label: "Andar", inputWidth: 100, style: "font-weight:bold; color:red"},
            {type: "newcolumn"},
            {type: "input", name: "unidade", readonly:true,  label: "Unidade", inputWidth: 100, style: "font-weight:bold; color:red"}
        ]},
        {type: "block", offsetTop: "0", list: [
            {type: "input", name: "email_correspondencias", label: "Endereços de e-mail para setor de correspond&ecirc;ncias", inputWidth: 350, style: "font-weight:bold;"}
            {type: "newcolumn"},
            {type: "input", name: "email_correspondencias2", label: "correspond&ecirc;ncias", inputWidth: 350, style: "font-weight:bold;"}
        ]}
    ]},
    {type: "block", offsetTop: "0", list: [
        {type: "radio", name: "situacao", value: "1", label: "Im&oacute;vel pr&oacute;prio", position: "absolute", inputTop: 24, inputLeft: 10, labelLeft: 35, labelTop: 30, labelWidth: 120, tooltip: "Marque esta opção se você é o propriet&aacute;rio do imóvel", required: true, info: true},
        {type: "radio", name: "situacao", value: "2", label: "Im&oacute;vel alugado", position: "absolute",  inputTop: 24,  inputLeft: 150, labelLeft: 175, labelTop: 30, labelWidth: 130, tooltip: "Marque esta opçãoo para informar os dados de contato com o propriet&aacute;rio do imóvel", required: true, info: true}
    ]},
    {type: "block", offsetTop: "40", list: [
        {type: "fieldset", name: "dados_proprietario", label: "Dados do propriet&aacute;rio", inputWidth: 300,
            list: [
                    {type: "input", required: true, name: "nome_proprietario", label: "Nome do propriet&aacute;rio", inputWidth: "260", style: "font-weight:bold;",
                        tooltip: "Informe o nome do propriet&aacute;rio."},
                    {type: "input", name: "rg", required: true, label: "Doc. de identifica&ccedil;&atilde;o", inputWidth: "260", style: "font-weight:bold;",
                        tooltip: "Informe o n&uacute;mero de RG ou RNE ou passaporte", info: true
                    },
                    {type: "input", required: true, name: "telefone_proprietario", label: "Telefone", inputWidth: "260", style: "font-weight:bold;"},
                    {type: "input", required: true, name: "email_proprietario", label: "E-mail", inputWidth: "260", style: "font-weight:bold;",
                        tooltip: "Informe o Endere&ccedil;o de e-mail do propriet&aacute;rio, para que ele possa receber comunicados do Condomm&iacute;nio.",
                        info: true, note: {text: "Endere&ccedil;o de e-mail do propriet&aacute;rio"}
                    }
            ]},
        {type: "newcolumn"},
        {type: "fieldset", name: "dados_imobiliaria", label: "Dados da imobili&aacute;ria", inputWidth: 638,
            list: [
                {type: "block", list: [
                    {type: "input", required: true, name: "imobiliaria", label: "Nome da imobili&aacute;ria", inputWidth: "300", style: "font-weight:bold;",
                        tooltip: "Preencha este campo para que possamos fornecer eventuais comunicados de procedimentos internos do Condomm&iacute;nio.",
                        info: true, note: {text: "Informe o nome da imobili&aacute;ria e a sua localiza&ccedil;&atilde;o. Exemplo: im&oacute;vel blueimovel - S&atilde;o Bernardo"}
                    },
                    {type: "input", required: true, name: "nome_proprietario_imobiliaria", label: "Nome do propriet&aacute;rio", inputWidth: "300", style: "font-weight:bold;",
                        tooltip: "Informe o nome do propriet&aacute;rio que está disponível no contrato de aluguel do imóvel."},
                    {type: "newcolumn"},
                    {type: "input", name: "telefone_imobiliaria", label: "Telefone", inputWidth: "200", style: "font-weight:bold;",
                        tooltip: "Informe o n&uacute;mero do telefone da imobili&aacute;ria.",
                        info: true, note: {text: "N&uacute;mero do telefone da imobili&aacute;ria com DDD"}
                    },
                    {type: "input", name: "telefone_proprietario_imobiliaria", label: "Telefone", inputWidth: "200", style: "font-weight:bold;"}
                ]},
                {type: "block", list: [
                    {type: "input", required: true, name: "email_proprietario_imobiliaria", label: "E-mail", inputWidth: "510", style: "font-weight:bold;",
                        tooltip: "Informe o Endere&ccedil;o de e-mail do propriet&aacute;rio, para que ele possa receber comunicados do Condomm&iacute;nio.",
                        info: true, note: {text: "Endere&ccedil;o de e-mail do propriet&aacute;rio"}
                    }
                ]}
            ]}
    ]}
];