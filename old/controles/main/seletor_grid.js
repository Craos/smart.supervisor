/**
 * Created by Oberdan on 06/06/14.
 */

var wgridSeletor;
var formSeletorLocalizar;
var windowGridSeletor;

function seletor_grid(parametros) {

	windowGridSeletor = 'sseletor_grid';
    var windowsClientInfo;
    windowsClientInfo = new dhtmlXWindows();
    windowsClientInfo.setSkin('dhx_terrace');

    wgridSeletor = windowsClientInfo.createWindow(windowGridSeletor, 0, 0, 860, 500);
    wgridSeletor.setText('Selecionar registro');
    wgridSeletor.denyResize();
    wgridSeletor.centerOnScreen();
    wgridSeletor.button('park').hide();
    wgridSeletor.button('minmax1').hide();


    var campos_seletor_grid = [
        {type: "container", name: "gridresultadosseetor", inputWidth: 800, inputHeight: 400}
    ];

    formSeletorLocalizar = wgridSeletor.attachForm(campos_seletor_grid);
    var gridresultados = new dhtmlXGridObject(formSeletorLocalizar.getContainer("gridresultadosseetor"));
    gridresultados.setIconsPath('./codebase/imgs/');
    gridresultados.init();

    gridresultados.attachEvent("onRowDblClicked", function(rId,cInd){

	    var buscamorador = {
		    parametros: true,
		    contenttype: 'xml',
		    action: 'directjson',
		    origem: 'condominio.supervisor_unidade_info',
		    where: 'pk_unidade/' +rId
	    };

	    if (winpesquisaavancada != undefined)
		    winpesquisaavancada.close();

	    sys.FormAction(sys.setParameters(buscamorador), topResultBuscaMorador);



    });

    gridresultados.loadXML(sys.setParameters(parametros));

}