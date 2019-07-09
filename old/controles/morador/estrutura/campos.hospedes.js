/**
 * Created by Oberdan on 08/06/14.
 */

var campos_hospedes = [
    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", offsetLeft: "20", offsetTop: "20", name: "titulo", value: "Cadastro de todos os hospedes da admunidade", style: "font-weight:bold; border: 0;"},
    { type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
            {type: "button", name: "novo", value: "1. Cadastrar novo"},
            {type: "newcolumn"},
            {type: "button", name: "salvar", value: "2. Salvar dados"},
            {type: "newcolumn"},
            {type: "button", name: "remover", value: "3. Apagar dados"},
            {type: "newcolumn"},
            {type: "button", name: "fotohospede", value: "4. Obter foto"},
            {type: "newcolumn"},
            {type: "button", name: "renovar", value: " 5. Renovar Autentica&ccedil;&atilde;o"}
        ]}
    ]},
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
        ]},
        { type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "H&oacute;spedes cadastrados na admunidade", width: 955, list: [
            {type: "container", name: "gridfamiliares", inputWidth: 930, inputHeight: 180}
        ]}
    ]}
];

var campos_hospedes_historico_cadastro = [
    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", offsetLeft: "20", offsetTop: "20", name: "titulo", value: "Hist&oacute;rico de cadastro nesta admunidade", style: "font-weight:bold; border: 0;"},
    {type: "hidden", name: "num"},
        {type: "block", list: [
            {type: "fieldset", name: "opcoes", label: "Informa&ccedil;&otilde;es do h&oacute;spede", width: 955, list: [
                {type: "block", list: [
                    {type: "container", name: "hist_foto_hospede", inputWidth: 120, inputHeight: 120, style: "border: 1px solid #CECECE;"}
                ]},
                {type: "newcolumn"},
                {type: "block", list: [
                    {type: "template", name: "hist_nome", label: "Nome completo", inputWidth: 443, style: "font-weight:bold; color:red"},
                    {type: "newcolumn"},
                    {type: "template",name: "hist_nascimento",label: "Data de nascimento",inputWidth: 145, style: "font-weight:bold; color:red"},
                    {type: "newcolumn"},
                    {type: "template",name: "hist_autenticacao",label: "Autentica&ccedil;&atilde;o",inputWidth: 170, style: "font-weight:bold; color:red"}
                ]},
                {type: "block", offsetTop: 50, list: [
                    {type: "template",name: "hist_rg",label: "Doc. de identifica&ccedil;&atilde;o",inputWidth: 130, style: "font-weight:bold; color:red"},
                    {type: "newcolumn"},
                    {type: "template",name: "hist_genero",label: "G&ecirc;nero",inputWidth: "100",style: "font-weight:bold; color:red"},
                    {type: "newcolumn"},
                    {type: "template",name: "hist_parentesco",label: "Parentesco",inputWidth: 120, style: "font-weight:bold; color:red"},
                    {type: "newcolumn"},
                    {type: "template",name: "hist_telefone",label: "Telefone",inputWidth: 120,offsetLeft: "8",style: "font-weight:bold; color:red"},
                    {type: "newcolumn"},
                    {type: "template",name: "hist_data_entrada",label: "Data do cadastro",inputWidth: 120,offsetLeft: "8",style: "font-weight:bold; color:red"},
                    {type: "newcolumn"},
                    {type: "template",name: "hist_situacao_hospede",label: "Hist&oacute;rico da Situa&ccedil;&atilde;o",inputWidth: 130,offsetLeft: "8",style: "font-weight:bold; color:red"}
                ]}
            ]}
        ]},
    { type: "block", list: [
        {type: "fieldset", name: "opcoes", label: "Hist&oacute;rico de registros da admunidade", width: 955, list: [
            {type: "container", name: "hist_gridfamiliares", inputWidth: 930, inputHeight: 180}
        ]}
    ]}
];