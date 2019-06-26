/**
 * Created by Oberdan on 06/06/14.
 */
var formTermo;
function termo() {

    sessionStorage.recursocorrente = 'termo()';
    formTermo = nav_layout_principal.attachForm(campos_termo);

    var formSourceTermo;
    formSourceTermo = {
        dados: 'teste',
        contenttype: 'xml',
        action: 'directjson',
        origem: 'portal.usuario',
        where: 'condominio/' + admunidade.condominio +
            '|bloco/' + admunidade.bloco +
            '|andar/' + admunidade.andar +
            '|admunidade/' + admunidade.pk_unidade +
            '|num/' + admunidade.num,
        chave: 'num'
    };

    sys.FormAction(
        sys.setParameters(formSourceTermo), LoadFormTermo
    );


    formTermo.attachEvent("onButtonClick", function (name) {

        if (name == 'visualizar') {
            ResultFormTermo();

        } else if (name == 'finalizar') {
            main();
        }
    });

}

function ResultFormTermo() {

        var params = '';
        params += '&condominio=' + admunidade.condominio;
        params += '&bloco=' + admunidade.bloco;
        params += '&andar=' + admunidade.andar;
        params += '&admunidade=' + admunidade.unidade;
        params += '&pk_unidade=' + admunidade.pk_unidade;
        params += '&num=' + admunidade.num;
        params += '&email=' + admunidade.email;

        var win = window.open('controles/main/controls/formularios/termo.php?i=' + base64_encode(params), '_blank');
        win.focus();

}

function LoadFormTermo(http) {
    var out;
    out = JSON.parse(http.responseText);

    var itens = out[0];
    for (var key in itens)
        if (itens.hasOwnProperty(key))
            formTermo.setItemValue(key, itens[key]);

    var espaco_termo = formTermo.getContainer("espaco_termo");
    espaco_termo.innerHTML = '<iframe scrolling="no" src="controles/main/controls/formularios/termo.html" style="border: 0; width: 800px; height: 870px"></iframe>';

}