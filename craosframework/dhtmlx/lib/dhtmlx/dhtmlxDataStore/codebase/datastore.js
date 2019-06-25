/*
 This software is allowed to use under GPL or you need to obtain Commercial or Enterise License
 to use it in non-GPL project. Please contact sales@dhtmlx.com for details
 */
window.dhx || (dhx = {});
dhx.version = "3.0";
dhx.codebase = "./";
dhx.name = "Core";
dhx.clone = function (a) {
    var b = dhx.clone.xa;
    b.prototype = a;
    return new b
};
dhx.clone.xa = function () {
};
dhx.extend = function (a, b, c) {
    if (a.q)return dhx.PowerArray.insertAt.call(a.q, b, 1), a;
    for (var d in b)if (!a[d] || c)a[d] = b[d];
    b.defaults && dhx.extend(a.defaults, b.defaults);
    b.$init && b.$init.call(a);
    return a
};
dhx.copy = function (a) {
    if (arguments.length > 1)var b = arguments[0], a = arguments[1]; else b = dhx.isArray(a) ? [] : {};
    for (var c in a)a[c] && typeof a[c] == "object" && !dhx.isDate(a[c]) ? (b[c] = dhx.isArray(a[c]) ? [] : {}, dhx.copy(b[c], a[c])) : b[c] = a[c];
    return b
};
dhx.single = function (a) {
    var b = null, c = function (c) {
        b || (b = new a({}));
        b.Ia && b.Ia.apply(b, arguments);
        return b
    };
    return c
};
dhx.protoUI = function () {
    var a = arguments, b = a[0].name, c = function (a) {
        if (!c)return dhx.ui[b].prototype;
        var e = c.q;
        if (e) {
            for (var f = [e[0]], g = 1; g < e.length; g++)f[g] = e[g], f[g].q && (f[g] = f[g].call(dhx, f[g].name)), f[g].prototype && f[g].prototype.name && (dhx.ui[f[g].prototype.name] = f[g]);
            dhx.ui[b] = dhx.proto.apply(dhx, f);
            if (c.r)for (g = 0; g < c.r.length; g++)dhx.Type(dhx.ui[b], c.r[g]);
            c = e = null
        }
        return this != dhx ? new dhx.ui[b](a) : dhx.ui[b]
    };
    c.q = Array.prototype.slice.call(arguments, 0);
    return dhx.ui[b] = c
};
dhx.proto = function () {
    for (var a = arguments, b = a[0], c = !!b.$init, d = [], e = a.length - 1; e > 0; e--) {
        if (typeof a[e] == "function")a[e] = a[e].prototype;
        a[e].$init && d.push(a[e].$init);
        if (a[e].defaults) {
            var f = a[e].defaults;
            if (!b.defaults)b.defaults = {};
            for (var g in f)dhx.isUndefined(b.defaults[g]) && (b.defaults[g] = f[g])
        }
        if (a[e].type && b.type)for (g in a[e].type)b.type[g] || (b.type[g] = a[e].type[g]);
        for (var h in a[e])b[h] || (b[h] = a[e][h])
    }
    c && d.push(b.$init);
    b.$init = function () {
        for (var a = 0; a < d.length; a++)d[a].apply(this, arguments)
    };
    var i = function (a) {
        this.$ready = [];
        this.$init(a);
        this.$ && this.$(a, this.defaults);
        for (var b = 0; b < this.$ready.length; b++)this.$ready[b].call(this)
    };
    i.prototype = b;
    b = a = null;
    return i
};
dhx.bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
dhx.require = function (a, b, c, d, e) {
    if (typeof a != "string") {
        var f = a.length || 0, g = b;
        if (f)b = function () {
            if (f)f--, dhx.require(a[a.length - f - 1], b, c); else return g.apply(this, arguments)
        }, b(); else {
            for (var h in a)f++;
            b = function () {
                f--;
                f == 0 && g.apply(this, arguments)
            };
            for (h in a)dhx.require(h, b, c)
        }
    } else if (dhx.i[a] !== !0)if (a.substr(-4) == ".css") {
        var i = dhx.html.create("LINK", {type:"text/css", rel:"stylesheet", href:dhx.codebase + a});
        document.head.appendChild(i);
        b && b.call(c || window)
    } else {
        var j = e;
        b ? dhx.i[a] ? dhx.i[a].push([b,
            c]) : (dhx.i[a] = [
            [b, c]
        ], dhx.ajax(dhx.codebase + a, function (b) {
            dhx.exec(b);
            var c = dhx.i[a];
            dhx.i[a] = !0;
            for (var d = 0; d < c.length; d++)c[d][0].call(c[d][1] || window, !d)
        })) : (dhx.exec(dhx.ajax().sync().get(dhx.codebase + a).responseText), dhx.i[a] = !0)
    }
};
dhx.i = {};
dhx.exec = function (a) {
    window.execScript ? window.execScript(a) : window.eval(a)
};
dhx.wrap = function (a, b) {
    return!a ? b : function () {
        var c = a.apply(this, arguments);
        b.apply(this, arguments);
        return c
    }
};
dhx.isUndefined = function (a) {
    return typeof a == "undefined"
};
dhx.delay = function (a, b, c, d) {
    return window.setTimeout(function () {
        var d = a.apply(b, c || []);
        a = b = c = null;
        return d
    }, d || 1)
};
dhx.uid = function () {
    if (!this.R)this.R = (new Date).valueOf();
    this.R++;
    return this.R
};
dhx.toNode = function (a) {
    return typeof a == "string" ? document.getElementById(a) : a
};
dhx.toArray = function (a) {
    return dhx.extend(a || [], dhx.PowerArray, !0)
};
dhx.toFunctor = function (a) {
    return typeof a == "string" ? eval(a) : a
};
dhx.isArray = function (a) {
    return Array.isArray ? Array.isArray(a) : Object.prototype.toString.call(a) === "[object Array]"
};
dhx.isDate = function (a) {
    return a instanceof Date
};
dhx.L = {};
dhx.event = function (a, b, c, d) {
    var a = dhx.toNode(a), e = dhx.uid();
    d && (c = dhx.bind(c, d));
    dhx.L[e] = [a, b, c];
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c);
    return e
};
dhx.eventRemove = function (a) {
    if (a) {
        var b = dhx.L[a];
        b[0].removeEventListener ? b[0].removeEventListener(b[1], b[2], !1) : b[0].detachEvent && b[0].detachEvent("on" + b[1], b[2]);
        delete this.L[a]
    }
};
dhx.EventSystem = {$init:function () {
    if (!this.e)this.e = {}, this.s = {}, this.M = {}
}, blockEvent:function () {
    this.e.T = !0
}, unblockEvent:function () {
    this.e.T = !1
}, mapEvent:function (a) {
    dhx.extend(this.M, a, !0)
}, on_setter:function (a) {
    if (a)for (var b in a)typeof a[b] == "function" && this.attachEvent(b, a[b])
}, callEvent:function (a, b) {
    if (this.e.T)return!0;
    var a = a.toLowerCase(), c = this.e[a.toLowerCase()], d = !0;
    if (c)for (var e = 0; e < c.length; e++)if (c[e].apply(this, b || []) === !1)d = !1;
    this.M[a] && !this.M[a].callEvent(a, b) && (d = !1);
    return d
},
    attachEvent:function (a, b, c) {
        var a = a.toLowerCase(), c = c || dhx.uid(), b = dhx.toFunctor(b), d = this.e[a] || dhx.toArray();
        d.push(b);
        this.e[a] = d;
        this.s[c] = {f:b, t:a};
        return c
    }, detachEvent:function (a) {
        if (this.s[a]) {
            var b = this.s[a].t, c = this.s[a].f, d = this.e[b];
            d.remove(c);
            delete this.s[a]
        }
    }, hasEvent:function (a) {
        a = a.toLowerCase();
        return this.e[a] ? !0 : !1
    }};
dhx.extend(dhx, dhx.EventSystem);
dhx.PowerArray = {removeAt:function (a, b) {
    a >= 0 && this.splice(a, b || 1)
}, remove:function (a) {
    this.removeAt(this.find(a))
}, insertAt:function (a, b) {
    if (!b && b !== 0)this.push(a); else {
        var c = this.splice(b, this.length - b);
        this[b] = a;
        this.push.apply(this, c)
    }
}, find:function (a) {
    for (var b = 0; b < this.length; b++)if (a == this[b])return b;
    return-1
}, each:function (a, b) {
    for (var c = 0; c < this.length; c++)a.call(b || this, this[c])
}, map:function (a, b) {
    for (var c = 0; c < this.length; c++)this[c] = a.call(b || this, this[c]);
    return this
}, filter:function (a, b) {
    for (var c = 0; c < this.length; c++)a.call(b || this, this[c]) || (this.splice(c, 1), c--);
    return this
}};
dhx.env = {};
(function () {
    if (navigator.userAgent.indexOf("Mobile") != -1)dhx.env.mobile = !0;
    if (dhx.env.mobile || navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1)dhx.env.touch = !0;
    navigator.userAgent.indexOf("Opera") != -1 ? dhx.env.isOpera = !0 : (dhx.env.isIE = !!document.all, dhx.env.isFF = !document.all, dhx.env.isWebKit = navigator.userAgent.indexOf("KHTML") != -1, dhx.env.isSafari = dhx.env.isWebKit && navigator.userAgent.indexOf("Mac") != -1);
    if (navigator.userAgent.toLowerCase().indexOf("android") != -1)dhx.env.isAndroid = !0;
    dhx.env.transform = !1;
    dhx.env.transition = !1;
    for (var a = {names:["transform", "transition"], transform:["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"], transition:["transition", "WebkitTransition", "MozTransition", "OTransition", "msTransition"]}, b = document.createElement("DIV"), c = 0; c < a.names.length; c++)for (var d = a[a.names[c]], e = 0; e < d.length; e++)if (typeof b.style[d[e]] != "undefined") {
        dhx.env[a.names[c]] = d[e];
        break
    }
    b.style[dhx.env.transform] = "translate3d(0,0,0)";
    dhx.env.translate = b.style[dhx.env.transform] ? "translate3d" : "translate";
    var f = "", g = !1;
    dhx.env.isOpera && (f = "-o-", g = "O");
    dhx.env.isFF && (f = "-Moz-");
    dhx.env.isWebKit && (f = "-webkit-");
    dhx.env.isIE && (f = "-ms-");
    dhx.env.transformCSSPrefix = f;
    dhx.env.transformPrefix = g || dhx.env.transformCSSPrefix.replace(/-/gi, "");
    dhx.env.transitionEnd = dhx.env.transformCSSPrefix == "-Moz-" ? "transitionend" : dhx.env.transformPrefix + "TransitionEnd"
})();
dhx.env.svg = function () {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
}();
dhx.html = {v:0, denySelect:function () {
    if (!dhx.v)dhx.v = document.onselectstart;
    document.onselectstart = dhx.html.stopEvent
}, allowSelect:function () {
    if (dhx.v !== 0)document.onselectstart = dhx.v || null;
    dhx.v = 0
}, index:function (a) {
    for (var b = 0; a = a.previousSibling;)b++;
    return b
}, ga:{}, createCss:function (a) {
    var b = "", c;
    for (c in a)b += c + ":" + a[c] + ";";
    var d = this.ga[b];
    d || (d = "s" + dhx.uid(), this.addStyle("." + d + "{" + b + "}"), this.ga[b] = d);
    return d
}, addStyle:function (a) {
    var b = document.createElement("style");
    b.setAttribute("type",
        "text/css");
    b.setAttribute("media", "screen");
    b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
    document.getElementsByTagName("head")[0].appendChild(b)
}, create:function (a, b, c) {
    var b = b || {}, d = document.createElement(a), e;
    for (e in b)d.setAttribute(e, b[e]);
    if (b.style)d.style.cssText = b.style;
    if (b["class"])d.className = b["class"];
    if (c)d.innerHTML = c;
    return d
}, getValue:function (a) {
    a = dhx.toNode(a);
    return!a ? "" : dhx.isUndefined(a.value) ? a.innerHTML : a.value
}, remove:function (a) {
    if (a instanceof
        Array)for (var b = 0; b < a.length; b++)this.remove(a[b]); else a && a.parentNode && a.parentNode.removeChild(a)
}, insertBefore:function (a, b, c) {
    a && (b && b.parentNode ? b.parentNode.insertBefore(a, b) : c.appendChild(a))
}, locate:function (a, b) {
    if (a.tagName)var c = a; else a = a || event, c = a.target || a.srcElement;
    for (; c;) {
        if (c.getAttribute) {
            var d = c.getAttribute(b);
            if (d)return d
        }
        c = c.parentNode
    }
    return null
}, offset:function (a) {
    if (a.getBoundingClientRect) {
        var b = a.getBoundingClientRect(), c = document.body, d = document.documentElement, e =
            window.pageYOffset || d.scrollTop || c.scrollTop, f = window.pageXOffset || d.scrollLeft || c.scrollLeft, g = d.clientTop || c.clientTop || 0, h = d.clientLeft || c.clientLeft || 0, i = b.top + e - g, j = b.left + f - h;
        return{y:Math.round(i), x:Math.round(j)}
    } else {
        for (j = i = 0; a;)i += parseInt(a.offsetTop, 10), j += parseInt(a.offsetLeft, 10), a = a.offsetParent;
        return{y:i, x:j}
    }
}, posRelative:function (a) {
    a = a || event;
    return dhx.isUndefined(a.offsetX) ? {x:a.layerX, y:a.layerY} : {x:a.offsetX, y:a.offsetY}
}, pos:function (a) {
    a = a || event;
    if (a.pageX || a.pageY)return{x:a.pageX,
        y:a.pageY};
    var b = dhx.env.isIE && document.compatMode != "BackCompat" ? document.documentElement : document.body;
    return{x:a.clientX + b.scrollLeft - b.clientLeft, y:a.clientY + b.scrollTop - b.clientTop}
}, preventEvent:function (a) {
    a && a.preventDefault && a.preventDefault();
    return dhx.html.stopEvent(a)
}, stopEvent:function (a) {
    (a || event).cancelBubble = !0;
    return!1
}, addCss:function (a, b) {
    a.className += " " + b
}, removeCss:function (a, b) {
    a.className = a.className.replace(RegExp(" " + b, "g"), "")
}};
dhx.ready = function (a) {
    this.Ga ? a.call() : this.D.push(a)
};
dhx.D = [];
(function () {
    var a = document.getElementsByTagName("SCRIPT");
    if (a.length)a = (a[a.length - 1].getAttribute("src") || "").split("/"), a.splice(a.length - 1, 1), dhx.codebase = a.slice(0, a.length).join("/") + "/";
    dhx.event(window, "load", function () {
        dhx.callEvent("onReady", []);
        dhx.delay(function () {
            dhx.Ga = !0;
            for (var a = 0; a < dhx.D.length; a++)dhx.D[a].call();
            dhx.D = []
        })
    })
})();
dhx.locale = dhx.locale || {};
dhx.ready(function () {
    dhx.event(document.body, "click", function (a) {
        dhx.callEvent("onClick", [a || event])
    })
});
(function () {
    var a = {}, b = RegExp("(\\r\\n|\\n)", "g"), c = RegExp('(\\")', "g");
    dhx.Template = function (d) {
        if (typeof d == "function")return d;
        if (a[d])return a[d];
        d = (d || "").toString();
        if (d.indexOf("->") != -1)switch (d = d.split("->"), d[0]) {
            case "html":
                d = dhx.html.getValue(d[1]);
                break;
            case "http":
                d = (new dhx.ajax).sync().get(d[1], {uid:dhx.uid()}).responseText
        }
        d = (d || "").toString();
        d = d.replace(b, "\\n");
        d = d.replace(c, '\\"');
        d = d.replace(/\{obj\.([^}?]+)\?([^:]*):([^}]*)\}/g, '"+(obj.$1?"$2":"$3")+"');
        d = d.replace(/\{common\.([^}\(]*)\}/g,
            "\"+(common.$1||'')+\"");
        d = d.replace(/\{common\.([^\}\(]*)\(\)\}/g, '"+(common.$1?common.$1.apply(this, arguments):"")+"');
        d = d.replace(/\{obj\.([^}]*)\}/g, '"+(obj.$1)+"');
        d = d.replace("{obj}", '"+obj+"');
        d = d.replace(/#([^#'";, ]+)#/gi, '"+(obj.$1)+"');
        try {
            a[d] = Function("obj", "common", 'return "' + d + '";')
        } catch (e) {
        }
        return a[d]
    };
    dhx.Template.empty = function () {
        return""
    };
    dhx.Template.bind = function (a) {
        return dhx.bind(dhx.Template(a), this)
    };
    dhx.Type = function (a, b) {
        if (a.q) {
            if (!a.r)a.r = [];
            a.r.push(b)
        } else {
            if (typeof a ==
                "function")a = a.prototype;
            if (!a.types)a.types = {"default":a.type}, a.type.name = "default";
            var c = b.name, g = a.type;
            c && (g = a.types[c] = dhx.clone(b.baseType ? a.types[b.baseType] : a.type));
            for (var h in b)g[h] = h.indexOf("template") === 0 ? dhx.Template(b[h]) : b[h];
            return c
        }
    }
})();
dhx.Settings = {$init:function () {
    this.a = this.config = {}
}, define:function (a, b) {
    return typeof a == "object" ? this.Q(a) : this.U(a, b)
}, U:function (a, b) {
    var c = this[a + "_setter"];
    return this.a[a] = c ? c.call(this, b, a) : b
}, Q:function (a) {
    if (a)for (var b in a)this.U(b, a[b])
}, $:function (a, b) {
    var c = {};
    b && (c = dhx.extend(c, b));
    typeof a == "object" && !a.tagName && dhx.extend(c, a, !0);
    this.Q(c)
}, Ba:function (a, b) {
    for (var c in b)switch (typeof a[c]) {
        case "object":
            a[c] = this.Ba(a[c] || {}, b[c]);
            break;
        case "undefined":
            a[c] = b[c]
    }
    return a
}};
dhx.ajax = function (a, b, c) {
    if (arguments.length !== 0) {
        var d = new dhx.ajax;
        if (c)d.master = c;
        return d.get(a, null, b)
    }
    return!this.getXHR ? new dhx.ajax : this
};
dhx.ajax.count = 0;
dhx.ajax.prototype = {master:null, getXHR:function () {
    return dhx.env.isIE ? new ActiveXObject("Microsoft.xmlHTTP") : new XMLHttpRequest
}, send:function (a, b, c) {
    var d = this.getXHR();
    dhx.isArray(c) || (c = [c]);
    if (typeof b == "object") {
        var e = [], f;
        for (f in b) {
            var g = b[f];
            if (g === null || g === dhx.undefined)g = "";
            e.push(f + "=" + encodeURIComponent(g))
        }
        b = e.join("&")
    }
    b && this.request === "GET" && (a = a + (a.indexOf("?") != -1 ? "&" : "?") + b, b = null);
    d.open(this.request, a, !this.Na);
    this.request === "POST" && d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var h = this;
    d.onreadystatechange = function () {
        if (!d.readyState || d.readyState == 4) {
            dhx.ajax.count++;
            if (c && h)for (var a = 0; a < c.length; a++)if (c[a]) {
                var b = c[a].success || c[a];
                if (d.status >= 400 || !d.status && !d.responseText)b = c[a].error;
                b && b.call(h.master || h, d.responseText, d.responseXML, d)
            }
            if (h)h.master = null;
            c = h = null
        }
    };
    d.send(b || null);
    return d
}, get:function (a, b, c) {
    this.request = "GET";
    return this.send(a, b, c)
}, post:function (a, b, c) {
    this.request = "POST";
    return this.send(a, b, c)
}, put:function (a, b, c) {
    this.request = "PUT";
    return this.send(a, b, c)
}, del:function (a, b, c) {
    this.request = "DELETE";
    return this.send(a, b, c)
}, sync:function () {
    this.Na = !0;
    return this
}, bind:function (a) {
    this.master = a;
    return this
}};
dhx.send = function (a, b, c, d) {
    var e = dhx.html.create("FORM", {target:d || "_self", action:a, method:c || "POST"}, ""), f;
    for (f in b) {
        var g = dhx.html.create("INPUT", {type:"hidden", name:f, value:b[f]}, "");
        e.appendChild(g)
    }
    e.style.display = "none";
    document.body.appendChild(e);
    e.submit();
    document.body.removeChild(e)
};
dhx.AtomDataLoader = {$init:function (a) {
    this.data = {};
    if (a)this.a.datatype = a.datatype || "json", this.$ready.push(this.Aa)
}, Aa:function () {
    this.aa = !0;
    this.a.url && this.url_setter(this.a.url);
    this.a.data && this.data_setter(this.a.data)
}, url_setter:function (a) {
    if (!this.aa)return a;
    this.load(a, this.a.datatype);
    return a
}, data_setter:function (a) {
    if (!this.aa)return a;
    this.parse(a, this.a.datatype);
    return!0
}, load:function (a, b, c) {
    if (a.$proxy)a.load(this, typeof b == "string" ? b : "json"); else {
        this.callEvent("onXLS", []);
        if (typeof b == "string")this.data.driver = dhx.DataDriver[b], b = c; else if (!this.data.driver)this.data.driver = dhx.DataDriver.json;
        var d = [
            {success:this.P, error:this.C}
        ];
        b && (dhx.isArray(b) ? d.push.apply(d, b) : d.push(b));
        return dhx.ajax(a, d, this)
    }
}, parse:function (a, b) {
    this.callEvent("onXLS", []);
    this.data.driver = dhx.DataDriver[b || "json"];
    this.P(a, null)
}, P:function (a, b, c) {
    var d = this.data.driver, e = d.toObject(a, b);
    if (e) {
        var f = d.getRecords(e)[0];
        this.data = d ? d.getDetails(f) : a
    } else this.C(a, b, c);
    this.callEvent("onXLE",
        [])
}, C:function (a, b, c) {
    this.callEvent("onXLE", []);
    this.callEvent("onLoadError", arguments);
    dhx.callEvent("onLoadError", [a, b, c, this])
}, z:function (a) {
    if (!this.a.dataFeed || this.N || !a)return!0;
    var b = this.a.dataFeed;
    if (typeof b == "function")return b.call(this, a.id || a, a);
    b = b + (b.indexOf("?") == -1 ? "?" : "&") + "action=get&id=" + encodeURIComponent(a.id || a);
    this.callEvent("onXLS", []);
    dhx.ajax(b, function (a, b, e) {
        this.N = !0;
        var f = dhx.DataDriver.toObject(a, b);
        f ? this.setValues(f.getDetails(f.getRecords()[0])) : this.C(a, b,
            e);
        this.N = !1;
        this.callEvent("onXLE", [])
    }, this);
    return!1
}};
dhx.DataDriver = {};
dhx.DataDriver.json = {toObject:function (a) {
    a || (a = "[]");
    if (typeof a == "string") {
        try {
            eval("dhx.temp=" + a)
        } catch (b) {
            return null
        }
        a = dhx.temp
    }
    if (a.data) {
        var c = a.data.config = {}, d;
        for (d in a)d != "data" && (c[d] = a[d]);
        a = a.data
    }
    return a
}, getRecords:function (a) {
    return a && !dhx.isArray(a) ? [a] : a
}, getDetails:function (a) {
    return typeof a == "string" ? {id:dhx.uid(), value:a} : a
}, getInfo:function (a) {
    var b = a.config;
    return!b ? {} : {n:b.total_count || 0, m:b.pos || 0, Ea:b.parent || 0, K:b.config, O:b.dhx_security}
}, child:"data"};
dhx.DataDriver.html = {toObject:function (a) {
    if (typeof a == "string") {
        var b = null;
        a.indexOf("<") == -1 && (b = dhx.toNode(a));
        if (!b)b = document.createElement("DIV"), b.innerHTML = a;
        return b.getElementsByTagName(this.tag)
    }
    return a
}, getRecords:function (a) {
    for (var b = [], c = 0; c < a.childNodes.length; c++) {
        var d = a.childNodes[c];
        d.nodeType == 1 && b.push(d)
    }
    return b
}, getDetails:function (a) {
    return dhx.DataDriver.xml.tagToObject(a)
}, getInfo:function () {
    return{n:0, m:0}
}, tag:"LI"};
dhx.DataDriver.jsarray = {toObject:function (a) {
    return typeof a == "string" ? (eval("dhx.temp=" + a), dhx.temp) : a
}, getRecords:function (a) {
    return a
}, getDetails:function (a) {
    for (var b = {}, c = 0; c < a.length; c++)b["data" + c] = a[c];
    return b
}, getInfo:function () {
    return{n:0, m:0}
}};
dhx.DataDriver.csv = {toObject:function (a) {
    return a
}, getRecords:function (a) {
    return a.split(this.row)
}, getDetails:function (a) {
    for (var a = this.stringToArray(a), b = {}, c = 0; c < a.length; c++)b["data" + c] = a[c];
    return b
}, getInfo:function () {
    return{n:0, m:0}
}, stringToArray:function (a) {
    for (var a = a.split(this.cell), b = 0; b < a.length; b++)a[b] = a[b].replace(/^[ \t\n\r]*(\"|)/g, "").replace(/(\"|)[ \t\n\r]*$/g, "");
    return a
}, row:"\n", cell:","};
dhx.DataDriver.xml = {Y:function (a) {
    return!a || !a.documentElement ? null : a.getElementsByTagName("parsererror").length ? null : a
}, toObject:function (a) {
    if (this.Y(b))return b;
    var b = typeof a == "string" ? this.fromString(a.replace(/^[\s]+/, "")) : a;
    return this.Y(b) ? b : null
}, getRecords:function (a) {
    return this.xpath(a, this.records)
}, records:"/*/item", child:"item", config:"/*/config", getDetails:function (a) {
    return this.tagToObject(a, {})
}, getInfo:function (a) {
    var b = this.xpath(a, this.config), b = b.length ? this.assignTypes(this.tagToObject(b[0],
        {})) : null;
    return{n:a.documentElement.getAttribute("total_count") || 0, m:a.documentElement.getAttribute("pos") || 0, Ea:a.documentElement.getAttribute("parent") || 0, K:b, O:a.documentElement.getAttribute("dhx_security") || null}
}, xpath:function (a, b) {
    if (window.XPathResult) {
        var c = a;
        if (a.nodeName.indexOf("document") == -1)a = a.ownerDocument;
        for (var d = [], e = a.evaluate(b, c, null, XPathResult.ANY_TYPE, null), f = e.iterateNext(); f;)d.push(f), f = e.iterateNext();
        return d
    } else {
        var g = !0;
        try {
            typeof a.selectNodes == "undefined" && (g = !1)
        } catch (h) {
        }
        if (g)return a.selectNodes(b); else {
            var i = b.split("/").pop();
            return a.getElementsByTagName(i)
        }
    }
}, assignTypes:function (a) {
    for (var b in a) {
        var c = a[b];
        typeof c == "object" ? this.assignTypes(c) : typeof c == "string" && c !== "" && (c == "true" ? a[b] = !0 : c == "false" ? a[b] = !1 : c == c * 1 && (a[b] *= 1))
    }
    return a
}, tagToObject:function (a, b) {
    var b = b || {}, c = !1, d = a.attributes;
    if (d && d.length) {
        for (var e = 0; e < d.length; e++)b[d[e].name] = d[e].value;
        c = !0
    }
    for (var f = a.childNodes, g = {}, e = 0; e < f.length; e++)if (f[e].nodeType == 1) {
        var h = f[e].tagName;
        typeof b[h] != "undefined" ? (dhx.isArray(b[h]) || (b[h] = [b[h]]), b[h].push(this.tagToObject(f[e], {}))) : b[f[e].tagName] = this.tagToObject(f[e], {});
        c = !0
    }
    if (!c)return this.nodeValue(a);
    b.value = b.value || this.nodeValue(a);
    return b
}, nodeValue:function (a) {
    return a.firstChild ? a.firstChild.data : ""
}, fromString:function (a) {
    try {
        if (window.DOMParser)return(new DOMParser).parseFromString(a, "text/xml");
        if (window.ActiveXObject) {
            var b = new ActiveXObject("Microsoft.xmlDOM");
            b.loadXML(a);
            return b
        }
    } catch (c) {
        return null
    }
}};
dhx.DataLoader = dhx.proto({$init:function (a) {
    a = a || "";
    this.o = dhx.toArray();
    this.data = new dhx.DataStore;
    this.data.attachEvent("onClearAll", dhx.bind(this.oa, this));
    this.data.attachEvent("onServerConfig", dhx.bind(this.na, this));
    this.data.feed = this.sa
}, sa:function (a, b, c) {
    if (this.u)return this.u = [a, b, c]; else this.u = !0;
    this.W = [a, b];
    this.ua.call(this, a, b, c)
}, ua:function (a, b, c) {
    var d = this.data.url;
    a < 0 && (a = 0);
    this.load(d + (d.indexOf("?") == -1 ? "?" : "&") + (this.dataCount() ? "continue=true&" : "") + "start=" + a + "&count=" +
        b, [this.ta, c])
}, ta:function () {
    var a = this.u, b = this.W;
    this.u = !1;
    typeof a == "object" && (a[0] != b[0] || a[1] != b[1]) && this.data.feed.apply(this, a)
}, load:function (a, b) {
    var c = dhx.AtomDataLoader.load.apply(this, arguments);
    this.o.push(c);
    if (!this.data.url)this.data.url = a
}, loadNext:function (a, b, c, d, e) {
    this.a.datathrottle && !e ? (this.ha && window.clearTimeout(this.ha), this.ha = dhx.delay(function () {
        this.loadNext(a, b, c, d, !0)
    }, this, 0, this.a.datathrottle)) : (!b && b !== 0 && (b = this.dataCount()), this.data.url = this.data.url || d, this.callEvent("onDataRequest",
        [b, a, c, d]) && this.data.url && this.data.feed.call(this, b, a, c))
}, Ra:function (a, b) {
    var c = this.W;
    return this.u && c && c[0] <= b && c[1] + c[0] >= a + b ? !0 : !1
}, P:function (a, b, c) {
    this.o.remove(c);
    var d = this.data.driver.toObject(a, b);
    if (d)this.data.Fa(d); else return this.C(a, b, c);
    this.pa();
    this.callEvent("onXLE", [])
}, removeMissed_setter:function (a) {
    return this.data.Ja = a
}, scheme_setter:function (a) {
    this.data.scheme(a)
}, dataFeed_setter:function (a) {
    this.data.attachEvent("onBeforeFilter", dhx.bind(function (a, c) {
        if (this.a.dataFeed) {
            var d =
            {};
            if (a || c) {
                if (typeof a == "function") {
                    if (!c)return;
                    a(c, d)
                } else d = {text:c};
                this.clearAll();
                var e = this.a.dataFeed, f = [];
                if (typeof e == "function")return e.call(this, c, d);
                for (var g in d)f.push("dhx_filter[" + g + "]=" + encodeURIComponent(d[g]));
                this.load(e + (e.indexOf("?") < 0 ? "?" : "&") + f.join("&"), this.a.datatype);
                return!1
            }
        }
    }, this));
    return a
}, pa:function () {
    if (this.a.ready && !this.Ha) {
        var a = dhx.toFunctor(this.a.ready);
        a && dhx.delay(a, this, arguments);
        this.Ha = !0
    }
}, oa:function () {
    for (var a = 0; a < this.o.length; a++)this.o[a].abort();
    this.o = dhx.toArray()
}, na:function (a) {
    this.Q(a)
}}, dhx.AtomDataLoader);
dhx.DataStore = function () {
    this.name = "DataStore";
    dhx.extend(this, dhx.EventSystem);
    this.setDriver("json");
    this.pull = {};
    this.order = dhx.toArray();
    this.d = {}
};
dhx.DataStore.prototype = {setDriver:function (a) {
    this.driver = dhx.DataDriver[a]
}, Fa:function (a) {
    this.callEvent("onParse", [this.driver, a]);
    this.c && this.filter();
    var b = this.driver.getInfo(a);
    if (b.O)dhx.securityKey = b.O;
    b.K && this.callEvent("onServerConfig", [b.K]);
    var c = this.driver.getRecords(a);
    this.za(b, c);
    this.ba && this.ya && this.ya(this.ba);
    this.da && (this.blockEvent(), this.sort(this.da), this.unblockEvent());
    this.callEvent("onStoreLoad", [this.driver, a]);
    this.refresh()
}, za:function (a, b) {
    var c = (a.m || 0) * 1,
        d = !0, e = !1;
    if (c === 0 && this.order[0]) {
        if (this.Ja)for (var e = {}, f = 0; f < this.order.length; f++)e[this.order[f]] = !0;
        d = !1;
        c = this.order.length
    }
    for (var g = 0, f = 0; f < b.length; f++) {
        var h = this.driver.getDetails(b[f]), i = this.id(h);
        this.pull[i] ? d && this.order[g + c] && g++ : (this.order[g + c] = i, g++);
        this.pull[i] ? (dhx.extend(this.pull[i], h, !0), this.H && this.H(this.pull[i]), e && delete e[i]) : (this.pull[i] = h, this.G && this.G(h))
    }
    if (e) {
        this.blockEvent();
        for (var j in e)this.remove(j);
        this.unblockEvent()
    }
    if (!this.order[a.n - 1])this.order[a.n -
        1] = dhx.undefined
}, id:function (a) {
    return a.id || (a.id = dhx.uid())
}, changeId:function (a, b) {
    this.pull[a] && (this.pull[b] = this.pull[a]);
    this.pull[b].id = b;
    this.order[this.order.find(a)] = b;
    this.c && (this.c[this.c.find(a)] = b);
    this.d[a] && (this.d[b] = this.d[a], delete this.d[a]);
    this.callEvent("onIdChange", [a, b]);
    this.Ka && this.Ka(a, b);
    delete this.pull[a]
}, item:function (a) {
    return this.pull[a]
}, update:function (a, b) {
    dhx.isUndefined(b) && (b = this.item(a));
    this.H && this.H(b);
    if (this.callEvent("onBeforeUpdate", [a, b]) === !1)return!1;
    this.pull[a] = b;
    this.callEvent("onStoreUpdated", [a, b, "update"])
}, refresh:function (a) {
    this.fa || (a ? this.callEvent("onStoreUpdated", [a, this.pull[a], "paint"]) : this.callEvent("onStoreUpdated", [null, null, null]))
}, silent:function (a, b) {
    this.fa = !0;
    a.call(b || this);
    this.fa = !1
}, getRange:function (a, b) {
    a = a ? this.indexById(a) : this.$min || this.startOffset || 0;
    b ? b = this.indexById(b) : (b = Math.min(this.$max || this.endOffset || Infinity, this.dataCount() - 1), b < 0 && (b = 0));
    if (a > b)var c = b, b = a, a = c;
    return this.getIndexRange(a,
        b)
}, getIndexRange:function (a, b) {
    for (var b = Math.min(b || Infinity, this.dataCount() - 1), c = dhx.toArray(), d = a || 0; d <= b; d++)c.push(this.item(this.order[d]));
    return c
}, dataCount:function () {
    return this.order.length
}, exists:function (a) {
    return!!this.pull[a]
}, move:function (a, b) {
    var c = this.idByIndex(a), d = this.item(c);
    this.order.removeAt(a);
    this.order.insertAt(c, Math.min(this.order.length, b));
    this.callEvent("onStoreUpdated", [c, d, "move"])
}, scheme:function (a) {
    this.F = {};
    this.G = a.$init;
    this.H = a.$update;
    this.ca = a.$serialize;
    this.ba = a.$group;
    this.da = a.$sort;
    for (var b in a)b.substr(0, 1) != "$" && (this.F[b] = a[b])
}, sync:function (a, b, c) {
    typeof a == "string" && (a = $$("source"));
    typeof b != "function" && (c = b, b = null);
    this.I = !1;
    if (a.name != "DataStore")a.data && a.data.name == "DataStore" ? a = a.data : this.I = !0;
    var d = dhx.bind(function (d, f, g) {
        if (this.I) {
            if (!d)return;
            if (d.indexOf("change") == 0) {
                if (d == "change")this.pull[f.id] = f.attributes, this.refresh(f.id);
                return
            }
            d == "reset" && (g = f);
            this.order = [];
            this.pull = {};
            this.c = null;
            for (var h = 0; h < g.models.length; h++) {
                var i =
                    g.models[h].id;
                this.order.push(i);
                this.pull[i] = g.models[h].attributes
            }
        } else this.c = null, this.order = dhx.toArray([].concat(a.order)), this.pull = a.pull;
        b && this.silent(b);
        this.Z && this.Z();
        this.callEvent("onSyncApply", []);
        c ? c = !1 : this.refresh()
    }, this);
    this.I ? a.bind("all", d) : this.w = [a.attachEvent("onStoreUpdated", d)];
    d()
}, add:function (a, b, c) {
    if (this.F)for (var d in this.F)dhx.isUndefined(a[d]) && (a[d] = this.F[d]);
    this.G && this.G(a);
    var e = this.id(a), f = c || this.order, g = f.length;
    if (dhx.isUndefined(b) || b < 0)b = g;
    b >
        g && (b = Math.min(f.length, b));
    if (this.callEvent("onBeforeAdd", [e, a, b]) === !1)return!1;
    this.pull[e] = a;
    f.insertAt(e, b);
    if (this.c) {
        var h = this.c.length;
        !b && this.order.length && (h = 0);
        this.c.insertAt(e, h)
    }
    this.callEvent("onAfterAdd", [e, b]);
    this.callEvent("onStoreUpdated", [e, a, "add"]);
    return e
}, remove:function (a) {
    if (dhx.isArray(a))for (var b = 0; b < a.length; b++)this.remove(a[b]); else {
        if (this.callEvent("onBeforeDelete", [a]) === !1)return!1;
        var c = this.item(a);
        this.order.remove(a);
        this.c && this.c.remove(a);
        delete this.pull[a];
        this.d[a] && delete this.d[a];
        this.callEvent("onAfterDelete", [a]);
        this.callEvent("onStoreUpdated", [a, c, "delete"])
    }
}, clearAll:function () {
    this.pull = {};
    this.order = dhx.toArray();
    this.c = null;
    this.callEvent("onClearAll", []);
    this.refresh()
}, idByIndex:function (a) {
    return this.order[a]
}, indexById:function (a) {
    var b = this.order.find(a);
    return b
}, next:function (a, b) {
    return this.order[this.indexById(a) + (b || 1)]
}, first:function () {
    return this.order[0]
}, last:function () {
    return this.order[this.order.length - 1]
}, previous:function (a, b) {
    return this.order[this.indexById(a) - (b || 1)]
}, sort:function (a, b, c) {
    var d = a;
    typeof a == "function" ? d = {as:a, dir:b} : typeof a == "string" && (d = {by:a.replace(/#/g, ""), dir:b, as:c});
    var e = [d.by, d.dir, d.as];
    this.callEvent("onBeforeSort", e) && (this.Ma(d), this.refresh(), this.callEvent("onAfterSort", e))
}, Ma:function (a) {
    if (this.order.length) {
        var b = this.La.qa(a), c = this.getRange(this.first(), this.last());
        c.sort(b);
        this.order = c.map(function (a) {
            return this.id(a)
        }, this)
    }
}, wa:function (a) {
    if (this.c && !a)this.order = this.c,
        delete this.c
}, va:function (a, b, c) {
    for (var d = dhx.toArray(), e = 0; e < this.order.length; e++) {
        var f = this.order[e];
        a(this.item(f), b) && d.push(f)
    }
    if (!c || !this.c)this.c = this.order;
    this.order = d
}, filter:function (a, b, c) {
    if (this.callEvent("onBeforeFilter", [a, b]) && (this.wa(c), this.order.length)) {
        if (a) {
            var d = a, b = b || "";
            typeof a == "string" && (a = a.replace(/#/g, ""), b = b.toString().toLowerCase(), d = function (b, c) {
                return(b[a] || "").toString().toLowerCase().indexOf(c) != -1
            });
            this.va(d, b, c, this.Pa)
        }
        this.refresh();
        this.callEvent("onAfterFilter",
            [])
    }
}, each:function (a, b) {
    for (var c = 0; c < this.order.length; c++)a.call(b || this, this.item(this.order[c]))
}, Ca:function (a, b) {
    return function () {
        return a[b].apply(a, arguments)
    }
}, addMark:function (a, b, c, d) {
    var e = this.d[a] || {};
    this.d[a] = e;
    if (!e[b] && (e[b] = d || !0, c))this.item(a).$css = (this.item(a).$css || "") + " " + b, this.refresh(a);
    return e[b]
}, removeMark:function (a, b, c) {
    var d = this.d[a];
    d && d[b] && delete d[b];
    if (c) {
        var e = this.item(a).$css;
        e && (e = this.item(a).$css.replace(b, ""), this.refresh(a))
    }
}, hasMark:function (a, b) {
    var c = this.d[a];
    return c && c[b]
}, provideApi:function (a, b) {
    b && this.mapEvent({onbeforesort:a, onaftersort:a, onbeforeadd:a, onafteradd:a, onbeforedelete:a, onafterdelete:a, onbeforeupdate:a});
    for (var c = "sort,add,remove,exists,idByIndex,indexById,item,update,refresh,dataCount,filter,next,previous,clearAll,first,last,serialize,sync,addMark,removeMark,hasMark".split(","), d = 0; d < c.length; d++)a[c[d]] = this.Ca(this, c[d])
}, serialize:function () {
    for (var a = this.order, b = [], c = 0; c < a.length; c++) {
        var d = this.pull[a[c]];
        if (this.ca && (d = this.ca(d), d === !1))continue;
        b.push(d)
    }
    return b
}, La:{qa:function (a) {
    return this.ra(a.dir, this.ma(a.by, a.as))
}, ja:{date:function (a, b) {
    a -= 0;
    b -= 0;
    return a > b ? 1 : a < b ? -1 : 0
}, "int":function (a, b) {
    a *= 1;
    b *= 1;
    return a > b ? 1 : a < b ? -1 : 0
}, string_strict:function (a, b) {
    a = a.toString();
    b = b.toString();
    return a > b ? 1 : a < b ? -1 : 0
}, string:function (a, b) {
    if (!b)return 1;
    if (!a)return-1;
    a = a.toString().toLowerCase();
    b = b.toString().toLowerCase();
    return a > b ? 1 : a < b ? -1 : 0
}}, ma:function (a, b) {
    if (!a)return b;
    typeof b != "function" &&
    (b = this.ja[b || "string"]);
    return function (c, d) {
        return b(c[a], d[a])
    }
}, ra:function (a, b) {
    return a == "asc" || !a ? b : function (a, d) {
        return b(a, d) * -1
    }
}}};
dhx.BaseBind = {bind:function (a, b, c) {
    typeof a == "string" && (a = dhx.ui.get(a));
    a.b && a.b();
    this.b && this.b();
    a.getBindData || dhx.extend(a, dhx.BindSource);
    if (!this.ka) {
        var d = this.render;
        if (this.filter) {
            var e = this.a.id;
            this.data.Z = function () {
                a.l[e] = !1
            }
        }
        this.render = function () {
            if (!this.X) {
                this.X = !0;
                var a = this.callEvent("onBindRequest");
                this.X = !1;
                return d.apply(this, a === !1 ? arguments : [])
            }
        };
        if (this.getValue || this.getValues)this.save = function () {
            if (!this.validate || this.validate())a.setBindData(this.getValue ? this.getValue :
                this.getValues(), this.a.id)
        };
        this.ka = !0
    }
    a.addBind(this.a.id, b, c);
    var f = this.a.id;
    this.attachEvent(this.touchable ? "onAfterRender" : "onBindRequest", function () {
        return a.getBindData(f)
    });
    !this.a.dataFeed && this.loadNext && this.data.attachEvent("onStoreLoad", function () {
        a.l[f] = !1
    });
    this.isVisible(this.a.id) && this.refresh()
}, g:function (a) {
    a.removeBind(this.a.id);
    var b = this.w || (this.data ? this.data.w : 0);
    if (b && a.data)for (var c = 0; c < b.length; c++)a.data.detachEvent(b[c])
}};
dhx.BindSource = {$init:function () {
    this.p = {};
    this.l = {};
    this.A = {};
    this.la(this)
}, saveBatch:function (a) {
    this.V = !0;
    a.call(this);
    this.V = !1;
    this.k()
}, setBindData:function (a, b) {
    b && (this.A[b] = !0);
    if (this.setValue)this.setValue(a); else if (this.setValues)this.setValues(a); else {
        var c = this.getCursor();
        c && (a = dhx.extend(this.item(c), a, !0), this.update(c, a))
    }
    this.callEvent("onBindUpdate", [a, b]);
    this.save && this.save();
    b && (this.A[b] = !1)
}, getBindData:function (a, b) {
    if (this.l[a])return!1;
    var c = dhx.ui.get(a);
    c.isVisible(c.a.id) &&
    (this.l[a] = !0, this.J(c, this.p[a][0], this.p[a][1]), b && c.filter && c.refresh())
}, addBind:function (a, b, c) {
    this.p[a] = [b, c]
}, removeBind:function (a) {
    delete this.p[a];
    delete this.l[a];
    delete this.A[a]
}, la:function (a) {
    a.filter ? dhx.extend(this, dhx.CollectionBind) : a.setValue ? dhx.extend(this, dhx.ValueBind) : dhx.extend(this, dhx.RecordBind)
}, k:function () {
    if (!this.V)for (var a in this.p)this.A[a] || (this.l[a] = !1, this.getBindData(a, !0))
}, S:function (a, b, c) {
    a.setValue ? a.setValue(c ? c[b] : c) : a.filter ? a.data.silent(function () {
        this.filter(b,
            c)
    }) : !c && a.clear ? a.clear() : a.z(c) && a.setValues(dhx.clone(c));
    a.callEvent("onBindApply", [c, b, this])
}};
dhx.DataValue = dhx.proto({name:"DataValue", isVisible:function () {
    return!0
}, $init:function (a) {
    var b = (this.data = a) && a.id ? a.id : dhx.uid();
    this.a = {id:b};
    dhx.ui.views[b] = this
}, setValue:function (a) {
    this.data = a;
    this.callEvent("onChange", [a])
}, getValue:function () {
    return this.data
}, refresh:function () {
    this.callEvent("onBindRequest")
}}, dhx.EventSystem, dhx.BaseBind);
dhx.DataRecord = dhx.proto({name:"DataRecord", isVisible:function () {
    return!0
}, $init:function (a) {
    this.data = a || {};
    var b = a && a.id ? a.id : dhx.uid();
    this.a = {id:b};
    dhx.ui.views[b] = this
}, getValues:function () {
    return this.data
}, setValues:function (a) {
    this.data = a;
    this.callEvent("onChange", [a])
}, refresh:function () {
    this.callEvent("onBindRequest")
}}, dhx.EventSystem, dhx.BaseBind, dhx.AtomDataLoader, dhx.Settings);
dhx.DataCollection = dhx.proto({name:"DataCollection", isVisible:function () {
    return!this.data.order.length && !this.data.c && !this.a.dataFeed ? !1 : !0
}, $init:function (a) {
    this.data.provideApi(this, !0);
    var b = a && a.id ? a.id : dhx.uid();
    this.a.id = b;
    dhx.ui.views[b] = this;
    this.data.attachEvent("onStoreLoad", dhx.bind(function () {
        this.callEvent("onBindRequest", [])
    }, this))
}, refresh:function () {
    this.callEvent("onBindRequest", [])
}}, dhx.DataLoader, dhx.EventSystem, dhx.BaseBind, dhx.Settings);
dhx.ValueBind = {$init:function () {
    this.attachEvent("onChange", this.k)
}, J:function (a, b, c) {
    var d = this.getValue() || "";
    c && (d = c(d));
    if (a.setValue)a.setValue(d); else if (a.filter)a.data.silent(function () {
        this.filter(b, d)
    }); else {
        var e = {};
        e[b] = d;
        a.z(d) && a.setValues(e)
    }
    a.callEvent("onBindApply", [d, b, this])
}};
dhx.RecordBind = {$init:function () {
    this.attachEvent("onChange", this.k)
}, J:function (a, b) {
    var c = this.getValues() || null;
    this.S(a, b, c)
}};
dhx.CollectionBind = {$init:function () {
    this.h = null;
    this.attachEvent("onSelectChange", function () {
        var a = this.getSelected();
        this.setCursor(a ? a.id || a : null)
    });
    this.attachEvent("onAfterCursorChange", this.k);
    this.data.attachEvent("onStoreUpdated", dhx.bind(function (a, b, c) {
        a && a == this.getCursor() && c != "paint" && this.k()
    }, this));
    this.data.attachEvent("onClearAll", dhx.bind(function () {
        this.h = null
    }, this));
    this.data.attachEvent("onIdChange", dhx.bind(function (a, b) {
        if (this.h == a)this.h = b
    }, this))
}, setCursor:function (a) {
    if (!(a ==
        this.h || a !== null && !this.item(a)))this.callEvent("onBeforeCursorChange", [this.h]), this.h = a, this.callEvent("onAfterCursorChange", [a])
}, getCursor:function () {
    return this.h
}, J:function (a, b) {
    var c = this.item(this.getCursor()) || this.a.defaultData || null;
    this.S(a, b, c)
}};
if (!dhx.ui)dhx.ui = {};
if (!dhx.ui.views)dhx.ui.views = {}, dhx.ui.get = function (a) {
    return a.a ? a : dhx.ui.views[a]
};
dhtmlXDataStore = function (a) {
    var b = new dhx.DataCollection(a), c = "_dp_init";
    b[c] = function (a) {
        var b = "_methods";
        a[b] = ["dummy", "dummy", "changeId", "dummy"];
        this.data.Da = {add:"inserted", update:"updated", "delete":"deleted"};
        this.data.attachEvent("onStoreUpdated", function (b, c, e) {
            b && !a.ea && a.setUpdated(b, !0, this.Da[e])
        });
        b = "_getRowData";
        a[b] = function (a) {
            var b = this.obj.data.item(a), c = {id:a, "!nativeeditor_status":this.obj.getUserData(a)};
            if (b)for (var d in b)d.indexOf("_") !== 0 && (c[d] = b[d]);
            return c
        };
        this.changeId =
            function (b, c) {
                this.data.changeId(b, c);
                a.ea = !0;
                this.data.callEvent("onStoreUpdated", [c, this.item(c), "update"]);
                a.ea = !1
            };
        b = "_clearUpdateFlag";
        a[b] = function () {
        };
        this.ia = {}
    };
    b.dummy = function () {
    };
    b.setUserData = function (a, b, c) {
        this.ia[a] = c
    };
    b.getUserData = function (a) {
        return this.ia[a]
    };
    b.dataFeed = function (a) {
        this.define("dataFeed", a)
    };
    dhx.extend(b, dhx.BindSource);
    return b
};
if (window.dhtmlXDataView)dhtmlXDataView.prototype.b = function () {
    this.isVisible = function () {
        return!this.data.order.length && !this.data.c && !this.a.dataFeed ? !1 : !0
    };
    var a = "_settings";
    this.a = this.a || this[a];
    if (!this.a.id)this.a.id = dhx.uid();
    this.unbind = dhx.BaseBind.unbind;
    this.unsync = dhx.BaseBind.unsync;
    dhx.ui.views[this.a.id] = this
};
if (window.dhtmlXChart)dhtmlXChart.prototype.b = function () {
    this.isVisible = function () {
        return!this.data.order.length && !this.data.Qa && !this.a.dataFeed ? !1 : !0
    };
    var a = "_settings";
    this.a = this.a || this[a];
    if (!this.a.id)this.a.id = dhx.uid();
    this.unbind = dhx.BaseBind.unbind;
    this.unsync = dhx.BaseBind.unsync;
    dhx.ui.views[this.a.id] = this
};
dhx.BaseBind.unsync = function (a) {
    return dhx.BaseBind.g.call(this, a)
};
dhx.BaseBind.unbind = function (a) {
    return dhx.BaseBind.g.call(this, a)
};
dhx.BaseBind.legacyBind = function () {
    return dhx.BaseBind.bind.apply(this, arguments)
};
dhx.BaseBind.legacySync = function (a, b) {
    this.b && this.b();
    a.b && a.b();
    this.attachEvent("onAfterEditStop", function (a) {
        this.save(a);
        return!0
    });
    this.attachEvent("onDataRequest", function (b, d) {
        for (var e = b; e < b + d; e++)if (!a.data.order[e])return a.loadNext(d, b), !1
    });
    this.save = function (b) {
        b || (b = this.getCursor());
        var d = this.item(b), e = a.item(b), f;
        for (f in d)f.indexOf("$") !== 0 && (e[f] = d[f]);
        a.refresh(b)
    };
    return a && a.name == "DataCollection" ? a.data.sync.apply(this.data, arguments) : this.data.sync.apply(this.data, arguments)
};
if (window.dhtmlXForm)dhtmlXForm.prototype.bind = function (a) {
    dhx.BaseBind.bind.apply(this, arguments);
    a.getBindData(this.a.id)
}, dhtmlXForm.prototype.unbind = function (a) {
    dhx.BaseBind.g.call(this, a)
}, dhtmlXForm.prototype.b = function () {
    if (dhx.isUndefined(this.a))this.a = {id:dhx.uid(), dataFeed:this.j}, dhx.ui.views[this.a.id] = this
}, dhtmlXForm.prototype.z = function (a) {
    if (!this.a.dataFeed || this.N || !a)return!0;
    var b = this.a.dataFeed;
    if (typeof b == "function")return b.call(this, a.id || a, a);
    b = b + (b.indexOf("?") == -1 ? "?" :
        "&") + "action=get&id=" + encodeURIComponent(a.id || a);
    this.load(b);
    return!1
}, dhtmlXForm.prototype.setValues = dhtmlXForm.prototype.setFormData, dhtmlXForm.prototype.getValues = function () {
    return this.getFormData(!1, !0)
}, dhtmlXForm.prototype.dataFeed = function (a) {
    this.a ? this.a.dataFeed = a : this.j = a
}, dhtmlXForm.prototype.refresh = dhtmlXForm.prototype.isVisible = function () {
    return!0
};
if (window.scheduler) {
    if (!window.Scheduler)window.Scheduler = {};
    Scheduler.$syncFactory = function (a) {
        a.sync = function (b, c) {
            this.b && this.b();
            b.b && b.b();
            var d = "_process_loading", e = function () {
                a.clearAll();
                for (var e = b.data.order, g = b.data.pull, h = [], i = 0; i < e.length; i++)h[i] = c && c.copy ? dhx.clone(g[e[i]]) : g[e[i]];
                a[d](h)
            };
            this.save = function (a) {
                a || (a = this.getCursor());
                var c = this.item(a), d = b.item(a);
                this.callEvent("onStoreSave", [a, c, d]) && (dhx.extend(b.item(a), c, !0), b.update(a))
            };
            this.item = function (a) {
                return this.getEvent(a)
            };
            this.w = [b.data.attachEvent("onStoreUpdated", function () {
                e.call(this)
            }), b.data.attachEvent("onIdChange", function (a, b) {
                combo.changeOptionId(a, b)
            })];
            this.attachEvent("onEventChanged", function (a) {
                this.save(a)
            });
            this.attachEvent("onEventAdded", function (a, c) {
                b.data.pull[a] || b.add(c)
            });
            this.attachEvent("onEventDeleted", function (a) {
                b.data.pull[a] && b.remove(a)
            });
            e()
        };
        a.unsync = function (a) {
            dhx.BaseBind.g.call(this, a)
        };
        a.b = function () {
            if (!this.a)this.a = {id:dhx.uid()}
        }
    };
    Scheduler.$syncFactory(window.scheduler)
}
if (window.dhtmlXCombo)dhtmlXCombo.prototype.bind = function () {
    dhx.BaseBind.bind.apply(this, arguments)
}, dhtmlXCombo.unbind = function (a) {
    dhx.BaseBind.g.call(this, a)
}, dhtmlXCombo.unsync = function (a) {
    dhx.BaseBind.g.call(this, a)
}, dhtmlXCombo.prototype.dataFeed = function (a) {
    this.a ? this.a.dataFeed = a : this.j = a
}, dhtmlXCombo.prototype.sync = function (a) {
    this.b && this.b();
    a.b && a.b();
    var b = this, c = function () {
        b.clearAll();
        b.addOption(this.serialize())
    };
    this.w = [a.data.attachEvent("onStoreUpdated", function () {
        c.call(this)
    }),
        a.data.attachEvent("onIdChange", function (a, c) {
            b.changeOptionId(a, c)
        })];
    c.call(a)
}, dhtmlXCombo.prototype.b = function () {
    if (dhx.isUndefined(this.a))this.a = {id:dhx.uid(), dataFeed:this.j}, dhx.ui.views[this.a.id] = this, this.data = {silent:dhx.bind(function (a) {
        a.call(this)
    }, this)}, dhtmlxEventable(this.data), this.attachEvent("onChange", function () {
        this.callEvent("onSelectChange", [this.getSelectedValue()])
    }), this.attachEvent("onXLE", function () {
        this.callEvent("onBindRequest", [])
    })
}, dhtmlXCombo.prototype.item = function () {
    return this.Sa
},
    dhtmlXCombo.prototype.getSelected = function () {
        return this.getSelectedValue()
    }, dhtmlXCombo.prototype.isVisible = function () {
    return!this.optionsArr.length && !this.a.dataFeed ? !1 : !0
}, dhtmlXCombo.prototype.refresh = function () {
    this.render(!0)
}, dhtmlXCombo.prototype.filter = function () {
    alert("not implemented")
};
if (window.dhtmlXGridObject)dhtmlXGridObject.prototype.bind = function (a, b, c) {
    dhx.BaseBind.bind.apply(this, arguments)
}, dhtmlXGridObject.prototype.unbind = function (a) {
    dhx.BaseBind.g.call(this, a)
}, dhtmlXGridObject.prototype.unsync = function (a) {
    dhx.BaseBind.g.call(this, a)
}, dhtmlXGridObject.prototype.dataFeed = function (a) {
    this.a ? this.a.dataFeed = a : this.j = a
}, dhtmlXGridObject.prototype.sync = function (a, b) {
    this.b && this.b();
    a.b && a.b();
    var c = this, d = "_parsing", e = "_parser", f = "_locator", g = "_process_store_row", h = "_get_store_data";
    this.save = function (b) {
        b || (b = this.getCursor());
        dhx.extend(a.item(b), this.item(b), !0);
        a.update(b)
    };
    var i = function () {
        var a = 0;
        c.B ? (a = c.B, c.B = !1) : c.clearAll();
        var b = this.dataCount();
        if (b) {
            c[d] = !0;
            for (var i = a; i < b; i++) {
                var k = this.order[i];
                if (k && (!a || !c.rowsBuffer[i]))c.rowsBuffer[i] = {idd:k, data:this.pull[k]}, c.rowsBuffer[i][e] = c[g], c.rowsBuffer[i][f] = c[h], c.rowsAr[k] = this.pull[k]
            }
            if (!c.rowsBuffer[b - 1])c.rowsBuffer[b - 1] = dhtmlx.undefined, c.xmlFileUrl = c.xmlFileUrl || !0;
            c.pagingOn ? c.changePage() : c.Ta && c.Oa ? c.Ua() :
                (c.render_dataset(), c.callEvent("onXLE", []));
            c[d] = !1
        }
    };
    this.w = [a.data.attachEvent("onStoreUpdated", function (a, b, d) {
        d == "delete" ? (c.deleteRow(a), c.data.callEvent("onStoreUpdated", [a, b, d])) : d == "update" ? (c.callEvent("onSyncUpdate", [b, d]), c.update(a, b), c.data.callEvent("onStoreUpdated", [a, b, d])) : d == "add" ? (c.callEvent("onSyncUpdate", [b, d]), c.add(a, b, this.indexById(a)), c.data.callEvent("onStoreUpdated", [a, b, d])) : i.call(this)
    }), a.data.attachEvent("onStoreLoad", function (b, d) {
        c.xmlFileUrl = a.data.url;
        c.B = b.getInfo(d).m
    }),
        a.data.attachEvent("onIdChange", function (a, b) {
            c.changeRowId(a, b)
        })];
    c.attachEvent("onDynXLS", function (b, d) {
        for (var e = b; e < b + d; e++)if (!a.data.order[e])return a.loadNext(d, b), !1;
        c.B = b;
        i.call(a.data)
    });
    i.call(a.data);
    c.attachEvent("onEditCell", function (a, b) {
        a == 2 && this.save(b);
        return!0
    });
    c.attachEvent("onClearAll", function () {
        var a = "_f_rowsBuffer";
        this[a] = null
    });
    b && b.sort && c.attachEvent("onBeforeSorting", function (b, d, e) {
        if (d == "connector")return!1;
        var f = this.getColumnId(b);
        a.sort("#" + f + "#", e == "asc" ? "asc" :
            "desc", d == "int" ? d : "string");
        c.setSortImgState(!0, b, e);
        return!1
    });
    if (b && b.filter)c.attachEvent("onFilterStart", function (b, d) {
        var e = "_con_f_used";
        if (c[e] && c[e].length)return!1;
        a.data.silent(function () {
            a.filter();
            for (var e = 0; e < b.length; e++)if (d[e] != "") {
                var f = c.getColumnId(b[e]);
                a.filter("#" + f + "#", d[e], e != 0)
            }
        });
        a.refresh();
        return!1
    }), c.collectValues = function (b) {
        var c = this.getColumnId(b);
        return function (a) {
            var b = [], c = {};
            this.data.each(function (d) {
                var e = d[a];
                c[e] || (c[e] = !0, b.push(e))
            });
            return b
        }.call(a,
            c)
    };
    b && b.select && c.attachEvent("onRowSelect", function (b) {
        a.setCursor(b)
    });
    c.clearAndLoad = function (b) {
        a.clearAll();
        a.load(b)
    }
}, dhtmlXGridObject.prototype.b = function () {
    if (dhx.isUndefined(this.a)) {
        this.a = {id:dhx.uid(), dataFeed:this.j};
        dhx.ui.views[this.a.id] = this;
        this.data = {silent:dhx.bind(function (a) {
            a.call(this)
        }, this)};
        dhtmlxEventable(this.data);
        for (var a = "_cCount", b = 0; b < this[a]; b++)this.columnIds[b] || (this.columnIds[b] = "cell" + b);
        this.attachEvent("onSelectStateChanged", function (a) {
            this.callEvent("onSelectChange",
                [a])
        });
        this.attachEvent("onSelectionCleared", function () {
            this.callEvent("onSelectChange", [null])
        });
        this.attachEvent("onEditCell", function (a, b) {
            a === 2 && this.getCursor && b && b == this.getCursor() && this.k();
            return!0
        });
        this.attachEvent("onXLE", function () {
            this.callEvent("onBindRequest", [])
        })
    }
}, dhtmlXGridObject.prototype.item = function (a) {
    if (a === null)return null;
    var b = this.getRowById(a);
    if (!b)return null;
    var c = "_attrs", d = dhx.copy(b[c]);
    d.id = a;
    for (var e = this.getColumnsNum(), f = 0; f < e; f++)d[this.columnIds[f]] = this.cells(a,
        f).getValue();
    return d
}, dhtmlXGridObject.prototype.update = function (a, b) {
    for (var c = 0; c < this.columnIds.length; c++) {
        var d = this.columnIds[c];
        dhx.isUndefined(b[d]) || this.cells(a, c).setValue(b[d])
    }
    var e = "_attrs", f = this.getRowById(a)[e];
    for (d in b)f[d] = b[d];
    this.callEvent("onBindUpdate", [a])
}, dhtmlXGridObject.prototype.add = function (a, b, c) {
    for (var d = [], e = 0; e < this.columnIds.length; e++) {
        var f = this.columnIds[e];
        d[e] = dhx.isUndefined(b[f]) ? "" : b[f]
    }
    this.addRow(a, d, c);
    var g = "_attrs";
    this.getRowById(a)[g] = dhx.copy(b)
},
    dhtmlXGridObject.prototype.getSelected = function () {
        return this.getSelectedRowId()
    }, dhtmlXGridObject.prototype.isVisible = function () {
    var a = "_f_rowsBuffer";
    return!this.rowsBuffer.length && !this[a] && !this.a.dataFeed ? !1 : !0
}, dhtmlXGridObject.prototype.refresh = function () {
    this.render_dataset()
}, dhtmlXGridObject.prototype.filter = function (a, b) {
    if (this.a.dataFeed) {
        var c = {};
        if (!a && !b)return;
        if (typeof a == "function") {
            if (!b)return;
            a(b, c)
        } else dhx.isUndefined(a) ? c = b : c[a] = b;
        this.clearAll();
        var d = this.a.dataFeed;
        if (typeof d ==
            "function")return d.call(this, b, c);
        var e = [], f;
        for (f in c)e.push("dhx_filter[" + f + "]=" + encodeURIComponent(c[f]));
        this.load(d + (d.indexOf("?") < 0 ? "?" : "&") + e.join("&"));
        return!1
    }
    if (b === null)return this.filterBy(0, function () {
        return!1
    });
    this.filterBy(0, function (c, d) {
        return a.call(this, d, b)
    })
};
if (window.dhtmlXTreeObject)dhtmlXTreeObject.prototype.bind = function () {
    dhx.BaseBind.bind.apply(this, arguments)
}, dhtmlXTreeObject.prototype.unbind = function (a) {
    dhx.BaseBind.g.call(this, a)
}, dhtmlXTreeObject.prototype.dataFeed = function (a) {
    this.a ? this.a.dataFeed = a : this.j = a
}, dhtmlXTreeObject.prototype.b = function () {
    if (dhx.isUndefined(this.a))this.a = {id:dhx.uid(), dataFeed:this.j}, dhx.ui.views[this.a.id] = this, this.data = {silent:dhx.bind(function (a) {
        a.call(this)
    }, this)}, dhtmlxEventable(this.data), this.attachEvent("onSelect",
        function (a) {
            this.callEvent("onSelectChange", [a])
        }), this.attachEvent("onEdit", function (a, b) {
        a === 2 && b && b == this.getCursor() && this.k();
        return!0
    })
}, dhtmlXTreeObject.prototype.item = function (a) {
    return a === null ? null : {id:a, text:this.getItemText(a)}
}, dhtmlXTreeObject.prototype.getSelected = function () {
    return this.getSelectedItemId()
}, dhtmlXTreeObject.prototype.isVisible = function () {
    return!0
}, dhtmlXTreeObject.prototype.refresh = function () {
}, dhtmlXTreeObject.prototype.filter = function (a, b) {
    if (this.a.dataFeed) {
        var c =
        {};
        if (a || b) {
            if (typeof a == "function") {
                if (!b)return;
                a(b, c)
            } else dhx.isUndefined(a) ? c = b : c[a] = b;
            this.deleteChildItems(0);
            var d = this.a.dataFeed;
            if (typeof d == "function")return d.call(this, [data.id || data, data]);
            var e = [], f;
            for (f in c)e.push("dhx_filter[" + f + "]=" + encodeURIComponent(c[f]));
            this.loadXML(d + (d.indexOf("?") < 0 ? "?" : "&") + e.join("&"));
            return!1
        }
    }
}, dhtmlXTreeObject.prototype.update = function (a, b) {
    dhx.isUndefined(b.text) || this.setItemText(a, b.text)
};
