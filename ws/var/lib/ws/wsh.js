/**
 * Created by oberd on 20/06/2017.
 */

var ws = function (target) {

    console.log(['target', target]);
    if (!target) {    
	var _ws = 'https://192.168.0.180/ws/';
    } else {
	var _ws = target;
    }
    
    console.log(['target', target, _ws]);

    this.ws = function () {
        return _ws;
    };

    this.mergeAttributes = function (obj1, obj2) {
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }

        for (var attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    };

    var setParameters = function (parametros) {
        var result = '';
        for (var key in parametros)
            if (parametros.hasOwnProperty(key))
                result += key + '=' + parametros[key] + '&';

        return _ws + '?p=0&' + result.substring(0, result.length - 1);
    };

    this.Request = function (data, callback) {

        var xhr = new XMLHttpRequest();
        xhr.open('POST', _ws, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr);
            } else if (xhr.status !== 200 && xhr.status !== 304) {
                callback(false);
            }
        };
        xhr.send(setParameters(data));
    }
};
