/**
 * Created by Oberdan on 06/06/14.
 */

function pesquisa_avancada() {

    let win;
    win = new dhtmlXWindows();

    let winpesquisa = win.createWindow('pesquisa', 0, 0, 1000, 600);
    winpesquisa.setText('Selecionar registro');
    winpesquisa.centerOnScreen();

    let layout = winpesquisa.attachLayout('2E');
    let top = layout.cells('a');
    top.hideHeader();
    top.setHeight('120');

    let form = top.attachForm([
        {type: "settings", labelAlign: "left", position: "label-top", inputWidth: 450},
        {
            type: 'block', list: [
                {
                    type: "input",
                    name: "valor",
                    required: true,
                    label: "Nome da pessoa, documento, modelo do veículo, placa"
                }
            ]
        },
        {
            type: 'label', label: 'Tipo de pesquisa', offsetTop: 12, list: [
                {type: "settings", labelAlign: "left", position: "label-left", offsetLeft: 30},
                {type: "radio", name: "tipo", value: "pessoa", label: "Pessoa", checked: true},
                {type: "newcolumn"},
                {type: "radio", name: "tipo", value: "veiculo", label: "Veículo"},
                {type: "newcolumn"},
                {type: "radio", name: "tipo", value: "pet", label: "Pet"}
            ]
        },
        {type: "newcolumn", offset: 20},
        {type: "button", name: "iniciar", offsetLeft: 20, offsetTop: 12, value: "Pesquisar"}
    ]);

    let botton = layout.cells('b');
    botton.hideHeader();

    form.attachEvent("onButtonClick", function () {
        form.validate();
    });

    form.attachEvent("onAfterValidate", function (status) {

        if (status === false)
            return;

        new ResultadoPesquisaAvancada(form.getFormData(), botton);
    });

}

let ResultadoPesquisaAvancada = function (data, cell) {

    let grid;

    admunidade.Pesquisar({
        tipo: data.tipo,
        valor: data.valor
    }, function (response) {

        if (response.dados === null)
            return;

        DefineGrid(data.tipo, cell);
        CarregaGrid(response);

    });

    function DefineGrid(tipo, cell) {

        switch (tipo) {

            case 'veiculo':
                grid = cell.attachGrid();
                grid.setIconsPath('./codebase/imgs/');
                grid.setHeader("Origem,Id,Torre,Unidade,Tipo,Identificação,Placa,Cor");
                grid.setColumnIds("origem,id,torre,unidade,cadastro,identificacao,rg,cpf");
                grid.setInitWidths("0,90,90,90,110,*,120,120");
                grid.setColAlign("left,left,center,center,left,left,left,left");
                grid.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro");
                grid.setColSorting("str,int,int,int,str,str,str,str");
                break;

            case 'pet':
                grid = cell.attachGrid();
                grid.setIconsPath('./codebase/imgs/');
                grid.setHeader("Origem,Id,Torre,Unidade,Tipo,Identificação,Raça,Cor");
                grid.setColumnIds("origem,id,torre,unidade,cadastro,identificacao,rg,cpf");
                grid.setInitWidths("0,90,90,90,110,*,120,120");
                grid.setColAlign("left,left,center,center,left,left,left,left");
                grid.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro");
                grid.setColSorting("str,int,int,int,str,str,str,str");
                break;

            default:
                grid = cell.attachGrid();
                grid.setIconsPath('./codebase/imgs/');
                grid.setHeader("Origem,Id,Torre,Unidade,Tipo,Identificação,RG,CPF");
                grid.setColumnIds("origem,id,torre,unidade,cadastro,identificacao,rg,cpf");
                grid.setInitWidths("0,90,90,90,110,*,120,120");
                grid.setColAlign("left,left,center,center,left,left,left,left");
                grid.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro");
                grid.setColSorting("str,int,int,int,str,str,str,str");
                break;

        }

    }

    function CarregaGrid(data) {

        grid.enableAutoWidth(true);
        grid.init();
        grid.clearAll();
        data.dados.filter(function (item) {
            grid.addRow(item.id, [
                item.origem,
                item.id,
                item.torre,
                item.unidade,
                item.cadastro,
                item.identificacao,
                item.rg,
                item.cpf
            ])
        });

        grid.attachEvent("onRowDblClicked", function (id) {

            let item  = data.dados.filter(function (item) {
                if (item.id === id)
                    return item
            })[0];

            console.debug(item);

            switch (item.origem) {
                case 'condominio.moradores':
                    new unidade_moradores(item);
                    break;
                case 'condominio.empregados':
                    break;
                case 'condominio.hospedes':
                    break;
                case 'condominio.personal':
                    break;
                case 'condominio.visitantes':
                    break;
                case 'condominio.veiculos':
                    break;
                case 'condominio.animais':
                    break;

            }
        });

    }

};