/**
 * Created by Oberdan on 08/06/14.
 */

var campos_acesso_veiculos = [
    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", offsetTop: "2", position: "label-top"},
    {
        type: "block", list: [
        {
            type: "template",
            name: "titulo",
            value: "Histórico de acesso veicular",
            style: "font-weight:bold; border: 0;"
        },

        {type: "container", name: "gridAcessoVeiculos", inputWidth: 1280, inputHeight: 500}

    ]
    }
];