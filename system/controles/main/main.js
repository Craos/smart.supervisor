/**
 * Created with JetBrains PhpStorm.
 * User: postgres
 * Date: 23/02/13
 * Time: 20:48
 * To change this template use File | Settings | File Templates.
 */
var userinfo;
var main_layout;
var navlayout;
var body;
var header;
var sys;
var monitorInterval;
var menu_esquerda;

sys = new SystemCraos();
sys.Server = './controles/main/controls/config.php?';

var formtop;
var nav_layout_principal;
var layout_principal_top;
var layout_principal;
var formPrincipal;
var formTopLayoutPrincipalTop;
var menu_lateral;
var informacoesdousuario;

function main() {

    clearInterval(monitorInterval);

    try {
        if (loginstate == 'open')
            windowLogin.close();
    } catch (e) {

    }

    dhtmlx.image_path = '../craosframework/dhtmlx/codebase/imgs/';
    dhtmlx.skin = 'dhx_terrace';
    main_layout = new dhtmlXLayoutObject(document.body, '2E', 'dhx_terrace');
    main_layout.cont.obj._offsetTop = 0;
    main_layout.cont.obj._offsetLeft = 0;
    main_layout.cont.obj._offsetHeight = 0;
    main_layout.cont.obj._offsetWidth = 0;
    main_layout.setSizes();

    header = main_layout.cells('a');
    header.setHeight('67');
    header.hideHeader();
    header.fixSize(0, 1);
    formtop = header.attachForm(campos_top, 'topsystem');

    var imagelogo = formtop.getContainer("logo");
    if (imagelogo != null)
        imagelogo.innerHTML = '<img src="controles/main/img/anima.png">';

    body = main_layout.cells('b');
    body.hideHeader();

    var layout_domeio = body.attachLayout('2U');

    menu_esquerda = layout_domeio.cells('a');
    menu_esquerda.hideHeader();
    menu_esquerda.setWidth('220');
    menu_lateral = menu_esquerda.attachForm(campos_main_esquerda);

    navlayout = layout_domeio.cells('b');
    navlayout.hideHeader();

    layout_principal = navlayout.attachLayout('2E');
    layout_principal_top = layout_principal.cells('a');
    layout_principal_top.hideHeader();
    layout_principal_top.setHeight('60');
    formTopLayoutPrincipalTop = layout_principal_top.attachForm(campos_main_layout_top);

    nav_layout_principal = layout_principal.cells('b');
    nav_layout_principal.hideHeader();
    formPrincipal = nav_layout_principal.attachForm(campos_main);

    informacoesdousuario = JSON.parse(sessionStorage.originalUserInfo);

    /* controle de perfil */
    //var userprofile = JSON.parse(docCookies.getItem('perfil_usuario'));
    var userprofile = JSON.parse(sessionStorage.perfil_usuario);
    if (userprofile != null) {
        menu_lateral.forEachItem(function (name) {
            if (menu_lateral.getItemType(name) == 'template') {
                var resultObject = search(name, userprofile);
                if (resultObject != undefined) {
                    if (resultObject.acesso == '1') {
                    } else {
                        menu_lateral.hideItem(name);
                        formPrincipal.hideItem(name);
                    }
                } else {
                    menu_lateral.hideItem(name);
                    formPrincipal.hideItem(name);
                }
            }
        });
    }

    formtop.setItemLabel('condominio', sessionStorage.morador_condominio);
    formtop.setItemLabel('bloco', sessionStorage.morador_bloco);
    formtop.setItemLabel('andar', sessionStorage.morador_andar);
    formtop.setItemLabel('unidade', sessionStorage.morador_unidade);
    formtop.setItemLabel('responsavel', sessionStorage.morador_corrente);

    formTopLayoutPrincipalTop.attachEvent("onKeyUp", function (inp, ev, name, value) {
        if (formTopLayoutPrincipalTop.getItemValue('left_bloco') == null && formTopLayoutPrincipalTop.getItemValue('left_unidade') == null)
            return;

        if (ev.keyCode == 13) {
            statselect();
        }
    });

    eval(sessionStorage.recursocorrente);
}

function statselect() {
    topSelecionarRegistro();
}

function replaceAll(string, token, newtoken) {
    while (string.indexOf(token) != -1) {
        string = string.replace(token, newtoken);
    }
    return string;
}

function isFunction(x) {
    return Object.prototype.toString.call(x) == '[object Function]';
}
function reSelecionar(name, value) {
    var f = this.getForm();
    return '<a href="#" onclick="topSelecionarRegistro();" style="text-decoration:none; color: #555; font-size: 13px"><img src="controles/main/img/main/alternar.png" style="width: 16px; margin-top: -0px; margin-right: 5px; float: left" /><b style="margin-top: -16px">Selecionar</b></a>';
}

function reLocalizar(name, value) {
    var f = this.getForm();
    return '<a href="#" onclick="seletor();" style="text-decoration:none; color: #555; font-size: 13px"><img src="controles/main/img/main/localizar.png" style="width: 16px; margin-top: -0px; margin-right: 5px; float: left" /><b style="margin-top: -16px">Pesquisa avan&ccedil;ada</b></a>';
}

function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].nome_recurso === nameKey) {
            return myArray[i];
        }
    }
}


function reInformacoesUsuario(name, value) {
    var f = this.getForm();
    var informacoesdousuario = JSON.parse(sessionStorage.originalUserInfo);
    var perfil = JSON.parse(sessionStorage.perfil_usuario);
    var nome_usuario = informacoesdousuario.nome.substring(0, informacoesdousuario.nome.indexOf(' '));
    var num_operador = informacoesdousuario.num;

    return '<div style="border: 0 solid red; width: auto; height: auto; position: fixed;  left: 58%; top: 5px;">Bem vindo(a) ' + nome_usuario + ' | Operador:' + num_operador + ' | Perfil: ' + perfil[0].nome_perfil + ' <a href="#" onclick="meusuaurio();" style="text-decoration:none; color: #555; font-size: 13px"> | <img src="controles/main/img/main/user.png" style="width: 16px; margin-top: -1px; margin-right: 5px;" />Meu usu&aacute;rio</a><a href="#" onclick="logout();" style="text-decoration:none; color: #555; font-size: 13px">&nbsp;<img src="controles/main/img/main/sair.png" style="width: 16px; margin-top: -1px; margin-right: 5px;" />Sair</a></div>';
}
/*
 function reSair(name, value) {
 var f = this.getForm();
 return '<div style="width: 50px; height: 20px; position: fixed; left: 96%; top: 7px;"></div>';
 }*/

function topSelecionarRegistro() {

    var numbloco = formTopLayoutPrincipalTop.getItemValue('left_bloco');
    var numunidade = formTopLayoutPrincipalTop.getItemValue('left_unidade');


    var buscamorador = {
        parametros: true,
        contenttype: 'xml',
        action: 'directjson',
        origem: 'condominio.supervisor_unidade_info',
        where: 'condominio/1' +
        '|bloco/' + numbloco +
        '|unidade/' + numunidade
    };

    sys.FormAction(sys.setParameters(buscamorador), topResultBuscaMorador);

}

function topResultBuscaMorador(http) {

    var out;
    out = JSON.parse(http.responseText);

    if (out[0] == undefined || out.length == 0) {
        alert('Sem acesso para esta unidade');
        return;
    }

    sessionStorage.morador_condominio = null;
    sessionStorage.morador_bloco = null;
    sessionStorage.morador_andar = null;
    sessionStorage.morador_unidade = null;
    sessionStorage.morador_corrente = null;

    sessionStorage.morador_condominio = "Condom&iacute;nio:" + out[0].nome_condominio;
    sessionStorage.morador_bloco = "Torre:" + out[0].nome_bloco;
    sessionStorage.morador_andar = "Andar:" + out[0].nome_andar;
    sessionStorage.morador_unidade = "Unidade:" + out[0].unidade;
    sessionStorage.morador_corrente = "Respons&aacute;vel: " + out[0].nome;

    formtop.setItemLabel('condominio', sessionStorage.morador_condominio);
    formtop.setItemLabel('bloco', sessionStorage.morador_bloco);
    formtop.setItemLabel('andar', sessionStorage.morador_andar);
    formtop.setItemLabel('unidade', sessionStorage.morador_unidade);
    formtop.setItemLabel('responsavel', sessionStorage.morador_corrente);

    if (wgridSeletor != undefined)
        try {
            wgridSeletor.close();
        }
        catch(err) {
            // Handle error(s) here
        }

    sessionStorage.userinfo = http.responseText.replace('[', '').replace(']', '');
    userinfo = sessionStorage.userinfo;
    eval(sessionStorage.recursocorrente);

}