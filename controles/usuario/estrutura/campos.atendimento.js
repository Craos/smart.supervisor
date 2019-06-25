/**
 * Created by Oberdan on 08/06/14.
 */

var campos_atendimento = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "8", position: "label-top"},
    { type: "block", list: [
        {type: "block", list: [
            {type: "input", name: "assunto", required: true, label: "Assunto", inputWidth: "400", style: "font-weight:bold;"},
            {type: "input", name: "solicitacao", required: true,rows:5, label: "Solicita&ccedil;&atilde;o", inputWidth: "400", inputHeight:"217", style: "font-weight:bold;"}
        ]},
        {type: "button", name: "salvar", value: "Enviar"}
    ]},
    {type: "newcolumn"},
    {type: "fieldset", name: "instrucoes", label: "Instru&ccedil;&otilde;es", width: 280, list: [
        { type: "block", list: [
            {type: "template", name: "texto_instrucoes1", value: 'Utilize este espa&ccedil;o, para enviar as d&uacute;vidas de preenchimento de informa&ccedil;&otilde;es. Exemplo: Quantidade de ve&iacute;culos, como alterar informa&ccedil;&otilde;es j&aacute; cadastradas etc.', style: "color: #137da1; height: 80px;"},
            {type: "template", name: "texto_instrucoes2", value: 'As solicita&ccedil;&otilde;es enviadas, ser&atilde;o respondidas pela equipe de desenvolvimento da Craos.NET junto a comiss&atilde;o de comunica&ccedil;&atilde;o do Condom&iacute;nio &Acirc;nima, diretamente no seu endere&ccedil;o de e-mail que foi cadastrado no sistema do morador.', style: "color: #137da1; height: 120px;"},
            {type: "template", name: "texto_instrucoes3", value: 'Grato!', style: "color: #137da1; height: 50px;"}
        ]}
    ]}
];