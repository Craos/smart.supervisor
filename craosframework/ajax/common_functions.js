/**
 * Created by Oberdan on 25/05/14.
 */

var URL_Bind_Combo;
var URL_Images;

/**
 * Busca as informacoes para abastecer um combobox do formulario
 * @param parameters
 */
function bindcombo(parameters) {

    var grava_sessao = parameters.grava_sessao;
    var recordset = parameters.recordset;
    var objeto = parameters.objeto;
    var criterios = parameters.criterios;
    var campos = parameters.campos;
    var orderby = parameters.orderby;
    var system = parameters.system;

    var envia_criterios = '';
    var envia_campos = '';
    var envia_ordem = '';

    if (campos != null && campos != undefined)
        envia_campos = '&campos=' + campos;

    if (criterios != null && criterios != undefined)
        envia_criterios = '&criterios=' + criterios;

    if (orderby != null && orderby != undefined)
        envia_ordem = '&orderby=' + orderby;

    system.FormAction(URL_Bind_Combo + 'grava_sessao=' + grava_sessao +
        '&nome_sessao=' + recordset + '&recordset=' + recordset + envia_criterios + envia_campos + envia_ordem, function (loader) {
        var resultxml;

        console.clear();
        console.log(loader);
        if (loader.xmlDoc.responseXML != null) {
            resultxml = loader.doSerialization();
            objeto.loadXMLString(resultxml);
            objeto.enableFilteringMode(true);
        }
    });
}

function SomenteNumero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58)) return true;
    else {
        if (tecla == 8 || tecla == 0) return true;
        else return false;
    }
}


function waitForm() {
    var div = document.createElement('div');
    div.id = 'aguarde';
    div.innerHTML = "<img id='img-aguarde' src='" + URL_Images + "' /><div id='msg-aguarde'>Aguarde</div>";
    document.body.appendChild(div);
}

function closewaitForm() {
    var aguarde = document.getElementById('aguarde');
    if (aguarde != null || aguarde != undefined) {
        aguarde.remove();
    }
}

function messageForm(message) {
    var div = document.createElement('div');
    div.id = 'messagem-erro';
    div.innerHTML = message;
    document.body.appendChild(div);
}

var docCookies = {
    getItem: function (sKey) {
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
        if (!sKey || !this.hasItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function (sKey) {
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: /* optional method: you can safely remove it! */ function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};

function getCurrentFormName()
{
    var currentName = arguments.callee.toString();
    currentName = currentName.substr('function '.length);
    currentName = currentName.substr(0, currentName.indexOf('('));

    return currentName;
}