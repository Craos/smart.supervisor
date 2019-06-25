/**
 * Created by oberdan on 23/09/2015.
 */

var campos_personal_trainer_atividades = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    { type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
            {type: "block", list: [
                {type: "button", name: "novo", value: "1. Cadastrar novo"},
                {type: "newcolumn"},
                {type: "button", name: "salvar", value: "2. Salvar dados"},
                {type: "newcolumn"},
                {type: "button", name: "remover", value: "3. Apagar dados"}
            ]}
        ]}
    ]},
    { type: "block", list: [
        {type: "fieldset", name: "informacoes_gerais_do_aluno", label: "Informa&ccedil;&otilde;es gerais do aluno", width: 955, list: [
            {type: "block", list: [
                {type: "input", name: "bloco", label: "Torre", offsetLeft: "0", offsetTop: "4", inputWidth: 45, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "unidade", label: "Unidade", offsetLeft: "4", offsetTop: "4", inputWidth: 45, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "combo", name: "nome_aluno", label: "Aluno", required: true, inputWidth: 350, style: "font-weight:bold;"},
                {type: "newcolumn"},
                {type: "input", name: "autenticacao", label: "Autenticação",  readonly:true, inputWidth: 90, style: "font-weight:bold; color: red"},
                {type: "newcolumn"},
                {type: "input", name: "tipo_aula", label: "Tipo de aula que ministra", inputWidth: 325, style: "font-weight:bold;",
                    tooltip: "Descreva o nome ou tipo de treinamento", info: true, required: true
                }
            ]}
        ]}
    ]},
    { type: "block", list: [
        {type: "fieldset", name: "registro_de_atividades_personal", label: "Situação", width: 955, list: [
            {type: "input", name: "janeiro", label: "Janeiro", inputWidth: 65, style: "font-weight:bold"},
            {type: "newcolumn"},
            {type: "input", name: "fevereiro", label: "Fevereiro", inputWidth: 65, style: "font-weight:bold"},
            {type: "newcolumn"},
            {type: "input", name: "marco", label: "Março", inputWidth: 65, style: "font-weight:bold"},
            {type: "newcolumn"},
            {type: "input", name: "abril", label: "Abril", inputWidth: 65, style: "font-weight:bold"},
            {type: "newcolumn"},
            {type: "input", name: "maio", label: "Maio", inputWidth: 65, style: "font-weight:bold"},
            {type: "newcolumn"},
            {type: "input", name: "junho", label: "Junho", inputWidth: 65, style: "font-weight:bold"},
            {type: "newcolumn"},
            {type: "input", name: "julho", label: "Julho", inputWidth: 65, style: "font-weight:bold"},
            {type: "newcolumn"},
            {type: "input", name: "agosto", label: "Agosto", inputWidth: 65, style: "font-weight:bold"},
            {type: "newcolumn"},
            {type: "input", name: "setembro", label: "Setembro", inputWidth: 65, style: "font-weight:bold"},
            {type: "newcolumn"},
            {type: "input", name: "outubro", label: "Outubro", inputWidth: 65, style: "font-weight:bold"},
            {type: "newcolumn"},
            {type: "input", name: "novembro", label: "Novembro", inputWidth: 65, style: "font-weight:bold"},
            {type: "newcolumn"},
            {type: "input", name: "dezembro", label: "Dezembro", inputWidth: 65, style: "font-weight:bold"}
        ]}
    ]},
    { type: "block", list: [
        {type: "fieldset", name: "lista_atividades_personal", label: "Lista de atividades do personal", width: 955, list: [
            {type: "container", name: "gridatividades", inputWidth: 900, inputHeight: 200}
        ]}
    ]},
    {type: "hidden", name: "num"},
    {type: "hidden", name: "condominio"},
    {type: "hidden", name: "andar"},
    {type: "hidden", name: "personal"},
    {type: "hidden", name: "timerg"}
];
