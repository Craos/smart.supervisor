/**
 * Created with JetBrains PhpStorm.
 * User: postgres
 * Date: 23/02/13
 * Time: 20:48
 * To change this template use File | Settings | File Templates.
 */
var main_layout;
var navlayout;
var body;
var header;
var menu_esquerda;
var formtop;
var nav_layout_principal;
var layout_principal_top;
var layout_principal;
var formPrincipal;
var formTopLayoutPrincipalTop;
var menu_lateral;
var informacoesdousuario;

let sys = new SystemCraos();
let admunidade = new AdmUnidade();

function main() {

    if (!sessionStorage.auth) {

        sessionStorage.credentials = JSON.stringify({
            id: '$2a$06$AFSMmoY2qaCqvZkT8esZGuqcXK3uFHPOtUiQJPq7ZpnYgPomRBaba',
            name: 'smart.supervisor',
            title: 'Smart Supervisor',
            redirect: '../smart.supervisor',
            typeuser: 'internal',
            version: '6'
        });

        window.location = '../smart.auth';
        return;
    }

    dhtmlx.image_path = 'js/dhtmlx/codebase/imgs/';
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

    informacoesdousuario = JSON.parse(sessionStorage.auth).user.perfil;

    /* controle de perfil */
    /*var userprofile = JSON.parse(sessionStorage.auth).user.perfil;

    if (userprofile != null) {
        menu_lateral.forEachItem(function (name) {
            if (menu_lateral.getItemType(name) === 'template') {
                var resultObject = search(name, userprofile);
                if (resultObject !== undefined) {
                    if (resultObject.acesso === '1') {
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
    }*/

    ExibeUnidade();

    formTopLayoutPrincipalTop.attachEvent("onKeyUp", function (inp, ev) {
        if (formTopLayoutPrincipalTop.getItemValue('left_bloco') == null && formTopLayoutPrincipalTop.getItemValue('left_unidade') == null)
            return;

        if (ev.keyCode === 13) {
            topSelecionarRegistro();
        }
    });

    ExecutaRecurso();

}

function ExecutaRecurso() {

    admunidade.AtualizaObjetos();

    if (sessionStorage.recursocorrente !== undefined) {
        switch (sessionStorage.recursocorrente) {
            case 'unidade_usuario':
                unidade_usuario();
                break;

            case 'unidade_moradores':
                unidade_moradores();
                break;
        }
    }

}

function isFunction(x) {
    return Object.prototype.toString.call(x) === '[object Function]';
}
function reSelecionar(name, value) {
    var f = this.getForm();
    return '<a href="#" onclick="topSelecionarRegistro();" style="text-decoration:none; color: #555; font-size: 13px"><img src="controles/main/img/main/alternar.png" style="width: 16px; margin-top: -0px; margin-right: 5px; float: left" /><b style="margin-top: -16px">Selecionar</b></a>';
}

function reLocalizar(name, value) {
    var f = this.getForm();
    return '<a href="#" onclick="pesquisa_avancada();" style="text-decoration:none; color: #555; font-size: 13px"><img src="controles/main/img/main/localizar.png" style="width: 16px; margin-top: -0px; margin-right: 5px; float: left" /><b style="margin-top: -16px">Pesquisa avan&ccedil;ada</b></a>';
}

function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].nome_recurso === nameKey) {
            return myArray[i];
        }
    }
}


function reInformacoesUsuario(name, value) {
    let f = this.getForm();
    let informacoesdousuario = JSON.parse(sessionStorage.auth).user;
    let perfil = informacoesdousuario.perfil;
    let nome_usuario = informacoesdousuario.primeironome;
    let num_operador = informacoesdousuario.id;

    return '<div style="border: 0 solid red; width: auto; height: auto; position: fixed;  left: 58%; top: 5px;">Bem vindo(a) ' + nome_usuario + ' | Operador:' + num_operador + ' | Perfil: ' + perfil[0].nome_perfil + ' <a href="#" onclick="meusuaurio();" style="text-decoration:none; color: #555; font-size: 13px"> | <img src="controles/main/img/main/user.png" style="width: 16px; margin-top: -1px; margin-right: 5px;" />Meu usu&aacute;rio</a><a href="#" onclick="logout();" style="text-decoration:none; color: #555; font-size: 13px">&nbsp;<img src="controles/main/img/main/sair.png" style="width: 16px; margin-top: -1px; margin-right: 5px;" />Sair</a></div>';
}

function topSelecionarRegistro() {

    admunidade = new AdmUnidade();

    admunidade.Identificar(
        formTopLayoutPrincipalTop.getItemValue('left_bloco'),
        formTopLayoutPrincipalTop.getItemValue('left_unidade'),
        function () {

            ExibeUnidade();

            if (wgridSeletor !== undefined)
                try {
                    wgridSeletor.close();
                }
                catch(err) {
                    // Handle error(s) here
                }

            ExecutaRecurso();
        }
    );
}

function ExibeUnidade() {

    if (sessionStorage.unidadecorrente === undefined)
        return;

    let info = JSON.parse(sessionStorage.unidadecorrente);

    let identificacao = 'Bloco: #nome_bloco# - Unidade:#unidade#  Responsável:#nome#';

    for (let k in info)
        if (info.hasOwnProperty(k))
            identificacao = identificacao.replace('#'+k+'#', info[k]);

    formtop.setItemLabel('identificacao', identificacao);

}

function logout() {

    let user = JSON.parse(sessionStorage.auth).user;
    new Usuarios().Logout(user.login, 'Supervisor', function() {
        sessionStorage.auth = undefined;
        sessionStorage.clear();
        main();
    });

}

var campos_top = [
    { type: "settings", labelAlign: "left", position: "label-top"},
    {type: "container", name: "logo", offsetLeft: "8", offsetTop: "10", inputWidth: 137},
    {type: "newcolumn"},
    {type: "label", name: "identificacao", offsetTop: "33", offsetLeft: "50",  format: "IdentificacaoUnidade"},
    {type: "newcolumn"},
    {type: "template", name: "informacoesUsuario",  offsetTop: "33",  format: "reInformacoesUsuario"}
];

var campos_main_layout_top = [
    {type: "settings", labelAlign: "left", offsetLeft: "1", offsetTop: "0", position: "label-top"},
    {type: "input", name: "left_bloco", label: "Torre", offsetLeft: "4", offsetTop: "10", inputWidth: 45, style: "font-weight:bold;"},
    {type: "newcolumn"},
    {type: "input", name: "left_unidade", label: "Unidade", offsetLeft: "4", offsetTop: "10", inputWidth: 45, style: "font-weight:bold;"},
    {type: "newcolumn"},
    {type: "template", name: "selecionar", offsetTop: "33", offsetLeft: "10", format: "reSelecionar"},
    {type: "newcolumn"},
    {type: "template", name: "localizar", offsetTop: "33", offsetLeft: "40", format: "reLocalizar"}
];

var campos_main_esquerda = [
    {type: "settings", name:"config", labelAlign: "left", inputHeight: 40, offsetLeft: "1", offsetTop: "0", position: "label-top"},
    {
        type: "block", name: "bloco_opcoes", list: [
            {
                type: "template", name: "usuario", value: "<a style='text-decoration: none' href='#' onclick='unidade_usuario();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/user.png' alt='Conta do usu&aacute;rio'>\
                        <p>Conta do usu&aacute;rio</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "unidade", value: "<a style='text-decoration: none' href='#' onclick='unidade_cadastro();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/unidade.png' alt='Minha Unidade'>\
                        <p>Informa&ccedil;&otilde;es gerais</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "moradores", value: "<a style='text-decoration: none' href='#' onclick='unidade_moradores();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/familiares.png' alt='Meus Familiares'>\
                        <p>Moradores</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "veiculos", value: "<a style='text-decoration: none' href='#' onclick='veiculos();'> \
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/carro.png' alt='Veículos'>\
                        <p>Ve&iacute;culos</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "empregados", value: "<a style='text-decoration: none' href='#' onclick='empregados();'> \
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/empregados.png' alt='Empregados'>\
                        <p>Funcion&aacute;rios da admunidade</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "visitantes", value: "<a style='text-decoration: none' href='#' onclick='visitantes();'> \
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/visitantes.png' alt='Empregados'>\
                        <p>Visitantes pr&eacute;-autorizados</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "prestadores", value: "<a style='text-decoration: none' href='#' onclick='prestadores_autorizados();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/dossier.png' alt='Prestadores'>\
                        <p>Registro de acesso</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "personal_trainer", value: "<a style='text-decoration: none' href='#' onclick='personal_trainer();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/personal.png' alt='Personal trainer'>\
                        <p>Personal trainer</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "correios", value: "<a style='text-decoration: none' href='#' onclick='correios();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/forward.png' alt='Prestadores'>\
                        <p>Correios</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "hospedes", value: "<a style='text-decoration: none' href='#' onclick='hospedes();'> \
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/hospedes.png' alt='H&oacute;spedes'>\
                        <p>Controle de H&oacute;spedes</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "animais", value: "<a style='text-decoration: none' href='#' onclick='animais();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/animais.png' alt='Meus Familiares'>\
                        <p>Animais dom&eacute;sticos</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "termo", value: "<a style='text-decoration: none' href='#' onclick='termo();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Termo de responsabilidade</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "manual", value: "<a style='text-decoration: none' href='#' onclick='manual();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/manual.png' alt='Termo'>\
                        <p>Cadastro passo a passo</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "prestadores", value: "<a style='text-decoration: none' href='#' onclick='prestadores();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/prestadores.png' alt='Cadastro de prestadores'>\
                        <p>Cadastro de prestadores</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "acesso_moradores", value: "<a style='text-decoration: none' href='#' onclick='acesso_morador();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Acessos dos moradores</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "monitor_veiculo", value: "<a style='text-decoration: none' href='#' onclick='acesso_veiculos();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Acessos veicular</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "monitor_pedestre", value: "<a style='text-decoration: none' href='#' onclick='monitor_pedestre();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Monitor de pedestres</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "monitor_veiculo", value: "<a style='text-decoration: none' href='#' onclick='monitor_veiculo();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Monitor de veiculos</p>\
                    </div>\
                </a>"
            },
            {
                type: "template", name: "visitante", value: "<a style='text-decoration: none' href='#' onclick='visitante();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Histórico da triagem</p>\
                    </div>\
                </a>"
            },
            {type: "template", name:"monitor_veiculo_tag", value: "<a style='text-decoration: none' href='#' onclick='monitor_veiculo();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Monitor de veiculos</p>\
                    </div>\
                </a>"
            }
        ]}
];