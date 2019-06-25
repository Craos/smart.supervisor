/**
 * Created by Oberdan on 08/06/14.
 */

var campos_foto = [
    { type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "8", position: "label-top"},
    { type: "block", list: [
        {type: "container", name: "displayfoto", inputWidth: 500, inputHeight: 200},
        {type: "newcolumn"},
        {type: "block", list:[
            {type: "button", name: "salvar", value: "Obter foto"},
            {type: "button", name: "confirmar", value: "Confirmar"}
        ]},
        {type: "block", list:[
            {type: "container", name: "fotocadastro", inputWidth: 300, inputHeight: 200}
        ]}
    ]}
];