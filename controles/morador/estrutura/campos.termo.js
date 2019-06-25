/**
 * Created by Oberdan on 08/06/14.
 */

var campos_termo = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", name: "titulo", value: "Termo de responsabilidade e aceite", style: "font-weight:bold; color: #003366;"},
    {type: "container", name: "espaco_termo", inputWidth: 800, inputHeight: 870},
    {type: "newcolumn"},
    { type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 280, list: [
            {type: "button", name: "visualizar", value: "1. Visualizar o resumo cadastral"},
            {type: "button", name: "finalizar", value: "2. Voltar ao menu principal"}
        ]},
        {type: "fieldset", name: "instrucoes", label: "Instru&ccedil;&otilde;es", width: 280, list: [
            { type: "block", list: [
                {type: "template", name: "texto_instrucoes1", value: 'Clique em &ldquo;Visualizar dados cadastrados&rdquo; para visualizar o resumo de todos os dados cadastrados e para a possibilidade de imprimi-lo para sua confer&ecirc;ncia pessoal.', style: "color: #137da1; height: 80px;"},
                {type: "template", name: "texto_instrucoes2", value: 'Leia com aten&ccedil;&atilde;o o &ldquo;Termo de responsabilidade e aceite&rdquo;, disponibilizado ao lado. Ele ser&aacute; impresso pela Administra&ccedil;&atilde;o, juntamente com o resumo cadastral, e dever&aacute; ser assinado pelo morador respons&aacute;vel pela unidade no ato da valida&ccedil;&atilde;o.', style: "color: #137da1; height: 150px;"}
            ]}
        ]}
    ]}
];