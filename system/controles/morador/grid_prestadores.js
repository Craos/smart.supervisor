/**
 * Created by Oberdan on 06/06/14.
 */

var wgridSeletor;
var formSeletorLocalizar;
var userinfo;
var windowGridSeletor;
var gridresultados;

function grid_prestadores() {

	windowGridSeletor = 'grid_prestadores';
    var windowsClientInfo;
    windowsClientInfo = new dhtmlXWindows();
    windowsClientInfo.setSkin('dhx_terrace');

    wgridSeletor = windowsClientInfo.createWindow(windowGridSeletor, 0, 0, 860, 500);
    wgridSeletor.setText('Selecionar o registro');
    wgridSeletor.denyResize();
    wgridSeletor.centerOnScreen();
    wgridSeletor.button('park').hide();
    wgridSeletor.button('minmax1').hide();

    var campos_seletor_grid = [
        {type: "container", name: "gridresultadosseetor", inputWidth: 800, inputHeight: 400}
    ];

    formSeletorLocalizar = wgridSeletor.attachForm(campos_seletor_grid);
    gridresultados = new dhtmlXGridObject(formSeletorLocalizar.getContainer("gridresultadosseetor"));
    gridresultados.setIconsPath('./codebase/imgs/');
    gridresultados.init();

    gridresultados.attachEvent("onRowDblClicked", function(rId){
        SelecionaRegistroPrestador(gridresultados.cells(rId,3).getValue(), gridresultados.cells(rId,4).getValue());
    });

    var num = formRegistroAcesso.getItemValue('localizar_num');
    var rg = formRegistroAcesso.getItemValue('localizar_rg');
    var nome = formRegistroAcesso.getItemValue('localizar_nome');
    var pesquisa_expurgo = formRegistroAcesso.isItemChecked('localizar_antigos');

    if (num.length > 0) {

        gridLoadLocalizarPrestadores("num = " + num, pesquisa_expurgo);

    } else if (rg.length > 0) {

        rg = rg.toLowerCase().replace(/[^a-z0-9]/gi,'');
        gridLoadLocalizarPrestadores("regexp_replace(lower(rg::varchar), '[^a-z0-9]*', '', 'g') = '" + rg + "'", pesquisa_expurgo);

    } else if (nome.length > 0) {

        nome = nome.toLowerCase().replace(/[^a-z0-9 ]/gi,'');
        gridLoadLocalizarPrestadores("lower(nome::varchar) like '%" + nome + "%'", pesquisa_expurgo);
    }
}

function gridLoadLocalizarPrestadores(criterios, pesquisa_expurgo) {

    var origem = 'condominio.pesquisa_cadastros_grid';
    if (pesquisa_expurgo === true)
        origem = 'condominio.pesquisa_cadastros_grid_expurgados';

    var gridSourcePrestadores;
    gridSourcePrestadores = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        origem: origem,
        campos: 'num,registro,nome,empresa,rg,origem',
        whereexp: criterios,
        orderby: 'num',
        usecheckbox: 'false',
        chave: 'num',
        displaychave: 'false'
    };

    gridresultados.loadXML(sys.setParameters(gridSourcePrestadores));
}
