/**
 * Created by Oberdan on 06/06/14.
 */

function logout() {

    var today = new Date();

    var paramLogout = {
        contenttype: 'xml',
        action: 'insert',
        origem: 'portal.acessos',
        returnkey: 'num',
        num: sessionStorage.serial_login,
        logout_date: today.format("yyyy-mm-dd"),
        logout_time: today.format("HH:MM:ss"),
        ativo: 0
    };

    sys.FormAction(
        sys.setParameters(
            paramLogout
        ), aoRegistrarLogout
    );

}

function aoRegistrarLogout(http) {
    clearInterval(autologin);
    window.location.assign('controles/main/sair.php');
}