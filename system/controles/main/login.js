/**
 * Created by Oberdan on 06/06/14.
 */

var windowLogin;
var loginstate;
var formLogin;
var username;
var autologin;
URL_Images = '../craosframework/ajax/img/aguarde.gif';

var torres = [];
torres[1] = '1 - Flore';
torres[2] = '2 - Sole';
torres[3] = '3 - Mare';
torres[4] = '4 - Gratia';
torres[5] = '5 - Dulce';
torres[6] = '6 - Ventura';
torres[7] = '7 - Cantare';
torres[8] = '8 - Alegro';
torres[9] = '9 - Animare';
torres[10] = '10 - Mundi';

function login() {


    dhtmlx.image_path = '../craosframework/dhtmlx/codebase/imgs/';
    dhtmlx.skin = 'dhx_terrace';

    var windowID = 'windowLogin';
    var windowsClientInfo;
    windowsClientInfo = new dhtmlXWindows();
    windowsClientInfo.setSkin('dhx_terrace');

    windowLogin = windowsClientInfo.createWindow(windowID, 0, 0, 580, 370);
    windowLogin.setText('Log-in sistema supervisor');
    windowLogin.denyResize();
    windowLogin.centerOnScreen();
    windowLogin.button('park').hide();
    windowLogin.button('minmax1').hide();
    windowLogin.button('close').hide();

    formLogin = windowLogin.attachForm(campos_login);
    formLogin.attachEvent("onButtonClick", function (name) {
        formLogin.validate();
        Auth(formLogin);
    });

    formLogin.attachEvent("onKeyUp", function (inp, ev, name, value) {
        if (ev.keyCode == 13)
            Auth(formLogin);
    });

	var logocraos = formLogin.getContainer("logocraos");
	logocraos.innerHTML = '<div style="margin-left: 10px; border-left: 1px solid #cecece; padding-left: 20px; padding-top: 10px; width: 270px; height: 250px">' +
	'<p><b>Bem vindo(a) ao sistema supervisor</b></p>' +
	'<br>Este servi&ccedil;o foi desenvolvido pela equipe de tecnologia da Craos. Todas as informa&ccedil;&otilde;es disponibilizadas neste servi&ccedil;os s&atilde;o de uso exclusivo do condom&iacute;nio. Envie suas d&uacute;vidas para equipe de suporte atrav&eacute;s do e-mail: suporte@craos.net <br>' +
	'<img style="margin-top: 40px; right: 100%; float: right; padding-right: 20px; width: 120px;" alt="" src="./controles/main/img/craos.gif"></div>';


}

function Auth(form) {

    username = form.getItemValue('login');
    var formAuthSend = {
        contenttype: 'xml',
        action: 'login',
        origem: 'portal.usuario',
        where: 'login/' + form.getItemValue('login'),
        login: username,
        password: base64_encode(form.getItemValue('password'))
    };

    sys.FormAction(sys.setParameters(formAuthSend), ResultAuth);

}

function ResultAuth(http) {
    var out;
    out = JSON.parse(http.responseText);

    if (out.num != undefined) {
        sessionStorage.userinfo = http.responseText;
        sessionStorage.originalUserInfo = http.responseText;

        var dados_do_perfil = {
            param: 'dados',
            gerar_sessao: true,
            nome_sessao: 'system_profile',
            contenttype: 'json',
            action: 'directjson',
            campos:'login, nome_perfil, nome_recurso, acesso, adicionar, editar, remover, importar, exportar, documentos, imagens, telefones, listar_registros',
            origem: 'portal.busca_perfil',
            where: 'login/' + username
        };

        sys.FormAction(sys.setParameters(dados_do_perfil), ResultUserProfile);

    } else {
        alert('Dados incorretos!');
    }
}

function ResultUserProfile(http) {
    var out;
    out = JSON.parse(http.responseText);

    // Grava o perfil no cookie
    //docCookies.setItem('perfil_usuario', http.responseText);

    sessionStorage.perfil_usuario = http.responseText;


    if (out[0] != undefined) {

        var informacoesdousuario = JSON.parse(sessionStorage.originalUserInfo);
        var userprofile = JSON.parse(http.responseText);
        var today = new Date();

        var paramLogin = {
            contenttype: 'xml',
            action: 'insert',
            origem: 'portal.acessos',
            returnkey: 'num',
            sistema:'Supervisor',
            login_date:today.format("yyyy-mm-dd"),
            login_time:today.format("HH:MM:ss"),
            uidins: informacoesdousuario.uidins,
            ipaddress: informacoesdousuario.ipaddress,
            macaddress: informacoesdousuario.macaddress,
            ativo:1
        };

        sys.FormAction(
            sys.setParameters(
                paramLogin
            ), aoRegistrarLogin
        );

    } else {
        alert('Dados incorretos!');
    }
}

function aoRegistrarLogin(http) {

    var out;
    out = JSON.parse(http.responseText);

    if (out != undefined)
        sessionStorage.serial_login = out.registro;


    //autologin = setTimeout(processaAutoLogin(out.registro), 300000);


    //autologin = setInterval(function(){ processaAutoLogin(out.registro) }, 300000);
    //var myVar = setInterval(function(){ myTimer(out.registro) }, 1000);


    loginstate = 'open';
    main();
}

function myTimer(registro) {

    var minutos = ['00:00', '05:00', '10:00', '15:00', '20:00', '25:00', '30:00', '35:00', '40:00', '45:00', '50:00', '55:00'];

    var d = new Date();
    var t = d.toLocaleTimeString();
    var minuto = t.substr(3,5);
    var a = minutos.indexOf(minuto);
    if (a == -1) {
        console.log('.');
    } else {
        processaAutoLogin(registro);
    }
}


function processaAutoLogin(registro) {

    var today = new Date();
    //var userprofile = JSON.parse(docCookies.getItem('perfil_usuario'));
    var userprofile = JSON.parse(sessionStorage.perfil_usuario);

    var paramLogin = {
        contenttype: 'xml',
        action: 'update',
        origem: 'portal.acessos',
        returnkey: 'num',
        sistema:'Supervisor',
        num:registro,
        logout_date:today.format("yyyy-mm-dd"),
        logout_time:today.format("HH:MM:ss"),
        uidins: userprofile[0].login,
        ativo:1
    };

    sys.FormAction(
        sys.setParameters(
            paramLogin
        ), aoRegistrarLogin
    );
}

function reSenha(name, value) {
    var f = this.getForm();
    return '<a href="#" onclick="recuperasenha();">Recuperar meu usu&aacute;rio/senha</a>';
}