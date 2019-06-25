/**
 * Created by Oberdan on 06/06/14.
 */
var gridAcessoMoradores;
var formAcessoMoradores;
var userinfo;
function acesso_morador() {

    var paramMorador;
    userinfo = JSON.parse(sessionStorage.userinfo);
    formAcessoMoradores = nav_layout_principal.attachForm(campos_acesso_morador);

    gridAcessoMoradores = new dhtmlXGridObject(formAcessoMoradores.getContainer("gridAcessoMoradores"));
    gridAcessoMoradores.setIconsPath('./codebase/imgs/');
    gridAcessoMoradores.init();
    gridLoadacesso_moradores();
}

function gridLoadacesso_moradores() {

    userinfo = JSON.parse(sessionStorage.userinfo);
    if (userinfo == undefined)
        return;

    var gridSourceacesso_moradores;
    gridSourceacesso_moradores = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        origem: 'acesso.historico_passagem_morador',
        campos: 'filedate as data, timerg as horário, bloqueio, nome_local, situcacao, sentido, nome',
        where: 'condominio/' + userinfo.condominio +
        '|bloco/' + userinfo.bloco +
        '|andar/' + userinfo.andar +
        '|unidade/' + userinfo.pk_unidade,
        orderby: '1 desc, 2 desc',
        usecheckbox: 'false',
        usedecimal: 'num',
        chave: 'num',
        displaychave: 'false'
    };

    gridAcessoMoradores.loadXML(sys.setParameters(gridSourceacesso_moradores));
}