/**
 * Created by Oberdan on 06/06/14.
 */
var gridAcessoVeiculos;
var formAcessoVeiculos;
function monitor_veiculo() {

    sessionStorage.recursocorrente = 'monitor_veiculo()';
    userinfo = JSON.parse(sessionStorage.userinfo);
    formAcessoVeiculos = nav_layout_principal.attachForm(campos_acesso_veiculos);

    gridAcessoVeiculos = new dhtmlXGridObject(formAcessoVeiculos.getContainer("gridAcessoVeiculos"));
    gridAcessoVeiculos.setIconsPath('./codebase/imgs/');
    gridAcessoVeiculos.init();
    gridLoadacesso_veiculos();

}

function gridLoadacesso_veiculos() {

    userinfo = JSON.parse(sessionStorage.userinfo);
    if (userinfo == undefined)
        return;

    var gridSourceacesso_veiculos;
    gridSourceacesso_veiculos = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        origem: 'acesso.monitor_veiculo',
        orderby: '1 desc',
        usecheckbox: 'false',
        usedecimal: 'nome',
        chave: 'num',
        displaychave: 'false'
    };
    //gridAcessoVeiculos.clearAll();
    gridAcessoVeiculos.loadXML(sys.setParameters(gridSourceacesso_veiculos));
}