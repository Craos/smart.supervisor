/**
 * Created by Oberdan on 08/06/14.
 */

var campos_moradores = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {type: "template", name: "titulo", value: "Cadastro de todos os moradores da admunidade", style: "font-weight:bold; border: 0;"},
    {type: "block", list: [
            {type: "fieldset", name: "opcoes", label: "Opera&ccedil;&otilde;es", width: 955, list: [
                    {type: "button", name: "novo", value: "1. Cadastrar novo"},
                    {type: "newcolumn"},
                    {type: "button", name: "salvar", value: "2. Salvar dados"},
                    {type: "newcolumn"},
                    {type: "button", name: "remover", value: "3. Apagar dados"},
                    {type: "newcolumn"},
                    {type: "button", name: "fotomorador", value: "4. Obter foto"},
                    {type: "newcolumn"},
                    {type: "button", name: "reserva", value: "5. Reservar espaço"}
                ]}
        ]},
    { type: "block", list: [
        { type: "block", list: [
            {type: "fieldset", name: "foto", label: "Identifica&ccedil;&atilde;o", width: 140, list: [
                {type: "container", name: "foto_morador", inputWidth: 120, inputHeight: 120}
            ]},
            {type: "newcolumn"},
            {type: "fieldset", name: "opcoes", label: "Informa&ccedil;&otilde;es gerais do morador", width: 800, list: [
                { type: "block", list: [
                    {type: "input", name: "nome", label: "Nome completo", inputWidth: 350, style: "font-weight:bold;", tooltip: "Informe o nome completo do morador", required: true, info: true, note: {text: "Nome completo do morador"}},
                    {type: "newcolumn"},
                    {type: "input", name: "nascimento", label: "Data de nascimento", inputWidth: 130, style: "font-weight:bold;", tooltip: "Data de nascimento do morador", required: true, info: true, note: {text: "Ex.: 12/06/1981"}},
                    {type: "newcolumn"},
                    {type: "input", name: "local_nascimento", label: "Local de nascimento", inputWidth: 220, style: "font-weight:bold;", tooltip: "Cidade e Estado se for no Brasil; cidade e pa&iacute;s se for no estrangeiro. Ex.: Campinas-S&atilde;o Paulo ou Roma-It&aacute;lia", required: true, info: true, note: {text: "Cidade e Estado brasileiro ou pa?s estrangeiro"}}
                ]},
                { type: "block", list: [
                    {type: "input", name: "rg", label: "Doc. de identifica&ccedil;&atilde;o", inputWidth: "140", style: "font-weight:bold;",
                        tooltip: "Informe o n&uacute;mero de RG ou RNE ou passaporte", info: true
                    },
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
        { type: "block", list: [
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
        {type: "block", list: [
            {type: "fieldset", name: "opcoes", label: "Moradores cadastrados na admunidade", width: 945, list: [
                {type: "container", name: "gridfamiliares", inputWidth: 920, inputHeight: 180}
            ]}
        ]}
    ]},
    {type: "hidden", name: "timerg"}
];