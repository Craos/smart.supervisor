/**
 * Created by Oberdan on 06/06/14.
 */
var formManual;
function manual() {

    var userinfo = JSON.parse(sessionStorage.userinfo);
    sessionStorage.recursocorrente = 'manual()';
    formManual = nav_layout_principal.attachForm(campos_manual);

    var formSourceManual;
    formSourceManual = {
        dados: 'teste',
        contenttype: 'xml',
        action: 'directjson',
        origem: 'portal.usuario',
        where: 'condominio/' + userinfo.condominio +
            '|bloco/' + userinfo.bloco +
            '|andar/' + userinfo.andar +
            '|unidade/' + userinfo.pk_unidade +
            '|num/' + userinfo.num,
        chave: 'num'
    };

    sys.FormAction(
        sys.setParameters(formSourceManual), LoadFormManual
    );


    formManual.attachEvent("onButtonClick", function (name) {

        if (name == 'visualizar') {
            ResultFormManual();

        } else if (name == 'finalizar') {
            main();
        }
    });

}

function ResultFormManual() {

        var userinfo = JSON.parse(sessionStorage.userinfo);
        var params = '';
        params += '&condominio=' + userinfo.condominio;
        params += '&bloco=' + userinfo.bloco;
        params += '&andar=' + userinfo.andar;
        params += '&unidade=' + userinfo.unidade;
        params += '&num=' + userinfo.num;
        params += '&email=' + userinfo.email;

        var win = window.open('controles/main/controls/formularios/manual.php?i=' + base64_encode(params), '_blank');
        win.focus();

}

function LoadFormManual(http) {
    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formManual.setItemValue(key, itens[key]);

    var espaco_manual = formManual.getContainer("espaco_manual");
    espaco_manual.innerHTML = '<iframe scrolling="no" src="controles/main/controls/formularios/manual.html" style="border: 0; width: 800px; height: 870px"></iframe>';

}