/*
 Copyright DHTMLX LTD. http://www.dhtmlx.com
 You allowed to use this component or parts of it under GPL terms
 To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
 */
window.dhtmlx || (dhtmlx = {});
dhtmlx.version = "3.0";
dhtmlx.codebase = "./";
dhtmlx.copy = function (a) {
    var b = dhtmlx.copy._function;
    b.prototype = a;
    return new b
};
dhtmlx.copy._function = function () {
};
dhtmlx.extend = function (a, b) {
    for (var c in b)a[c] = b[c];
    b._init && a._init();
    return a
};
dhtmlx.proto_extend = function () {
    for (var a = arguments, b = a[0], c = [], d = a.length - 1; d > 0; d--) {
        if (typeof a[d] == "function")a[d] = a[d].prototype;
        for (var e in a[d])e == "_init" ? c.push(a[d][e]) : b[e] || (b[e] = a[d][e])
    }
    a[0]._init && c.push(a[0]._init);
    b._init = function () {
        for (var a = 0; a < c.length; a++)c[a].apply(this, arguments)
    };
    b.base = a[1];
    var f = function (a) {
        this._init(a);
        this._parseSettings && this._parseSettings(a, this.defaults)
    };
    f.prototype = b;
    b = a = null;
    return f
};
dhtmlx.bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
dhtmlx.require = function (a) {
    dhtmlx._modules[a] || (dhtmlx.exec(dhtmlx.ajax().sync().get(dhtmlx.codebase + a).responseText), dhtmlx._modules[a] = !0)
};
dhtmlx._modules = {};
dhtmlx.exec = function (a) {
    window.execScript ? window.execScript(a) : window.eval(a)
};
dhtmlx.methodPush = function (a, b) {
    return function () {
        var c = !1;
        return c = a[b].apply(a, arguments)
    }
};
dhtmlx.isNotDefined = function (a) {
    return typeof a == "undefined"
};
dhtmlx.delay = function (a, b, c, d) {
    setTimeout(function () {
        var d = a.apply(b, c);
        a = b = c = null;
        return d
    }, d || 1)
};
dhtmlx.uid = function () {
    if (!this._seed)this._seed = (new Date).valueOf();
    this._seed++;
    return this._seed
};
dhtmlx.toNode = function (a) {
    return typeof a == "string" ? document.getElementById(a) : a
};
dhtmlx.toArray = function (a) {
    return dhtmlx.extend(a || [], dhtmlx.PowerArray)
};
dhtmlx.toFunctor = function (a) {
    return typeof a == "string" ? eval(a) : a
};
dhtmlx._events = {};
dhtmlx.event = function (a, b, c, d) {
    var a = dhtmlx.toNode(a), e = dhtmlx.uid();
    dhtmlx._events[e] = [a, b, c];
    d && (c = dhtmlx.bind(c, d));
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c);
    return e
};
dhtmlx.eventRemove = function (a) {
    if (a) {
        var b = dhtmlx._events[a];
        b[0].removeEventListener ? b[0].removeEventListener(b[1], b[2], !1) : b[0].detachEvent && b[0].detachEvent("on" + b[1], b[2]);
        delete this._events[a]
    }
};
dhtmlx.EventSystem = {_init:function () {
    this._events = {};
    this._handlers = {};
    this._map = {}
}, block:function () {
    this._events._block = !0
}, unblock:function () {
    this._events._block = !1
}, mapEvent:function (a) {
    dhtmlx.extend(this._map, a)
}, callEvent:function (a, b) {
    if (this._events._block)return!0;
    var a = a.toLowerCase(), c = this._events[a.toLowerCase()], d = !0;
    if (c)for (var e = 0; e < c.length; e++)if (c[e].apply(this, b || []) === !1)d = !1;
    this._map[a] && !this._map[a].callEvent(a, b) && (d = !1);
    return d
}, attachEvent:function (a, b, c) {
    var a = a.toLowerCase(),
        c = c || dhtmlx.uid(), b = dhtmlx.toFunctor(b), d = this._events[a] || dhtmlx.toArray();
    d.push(b);
    this._events[a] = d;
    this._handlers[c] = {f:b, t:a};
    return c
}, detachEvent:function (a) {
    if (this._handlers[a]) {
        var b = this._handlers[a].t, c = this._handlers[a].f, d = this._events[b];
        d.remove(c);
        delete this._handlers[a]
    }
}};
dhtmlx.PowerArray = {removeAt:function (a, b) {
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
    for (i = 0; i < this.length; i++)if (a == this[i])return i;
    return-1
}, each:function (a, b) {
    for (var c = 0; c < this.length; c++)a.call(b || this, this[c])
}, map:function (a, b) {
    for (var c = 0; c < this.length; c++)this[c] = a.call(b || this, this[c]);
    return this
}};
dhtmlx.env = {};
if (navigator.userAgent.indexOf("Opera") != -1)dhtmlx._isOpera = !0; else {
    dhtmlx._isIE = !!document.all;
    dhtmlx._isFF = !document.all;
    dhtmlx._isWebKit = navigator.userAgent.indexOf("KHTML") != -1;
    if (navigator.appVersion.indexOf("MSIE 8.0") != -1 && document.compatMode != "BackCompat")dhtmlx._isIE = 8;
    if (navigator.appVersion.indexOf("MSIE 9.0") != -1 && document.compatMode != "BackCompat")dhtmlx._isIE = 9
}
dhtmlx.env = {};
(function () {
    dhtmlx.env.transform = !1;
    dhtmlx.env.transition = !1;
    for (var a = {names:["transform", "transition"], transform:["transform", "WebkitTransform", "MozTransform", "oTransform", "msTransform"], transition:["transition", "WebkitTransition", "MozTransition", "oTransition"]}, b = document.createElement("DIV"), c, d = 0; d < a.names.length; d++)for (; p = a[a.names[d]].pop();)typeof b.style[p] != "undefined" && (dhtmlx.env[a.names[d]] = !0)
})();
dhtmlx.env.transform_prefix = function () {
    var a;
    dhtmlx._isOpera ? a = "-o-" : (a = "", dhtmlx._isFF && (a = "-moz-"), dhtmlx._isWebKit && (a = "-webkit-"));
    return a
}();
dhtmlx.env.svg = function () {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
}();
dhtmlx.zIndex = {drag:1E4};
dhtmlx.html = {create:function (a, b, c) {
    var b = b || {}, d = document.createElement(a), e;
    for (e in b)d.setAttribute(e, b[e]);
    if (b.style)d.style.cssText = b.style;
    if (b["class"])d.className = b["class"];
    if (c)d.innerHTML = c;
    return d
}, getValue:function (a) {
    a = dhtmlx.toNode(a);
    return!a ? "" : dhtmlx.isNotDefined(a.value) ? a.innerHTML : a.value
}, remove:function (a) {
    if (a instanceof Array)for (var b = 0; b < a.length; b++)this.remove(a[b]); else a && a.parentNode && a.parentNode.removeChild(a)
}, insertBefore:function (a, b, c) {
    a && (b ? b.parentNode.insertBefore(a,
        b) : c.appendChild(a))
}, locate:function (a, b) {
    for (var a = a || event, c = a.target || a.srcElement; c;) {
        if (c.getAttribute) {
            var d = c.getAttribute(b);
            if (d)return d
        }
        c = c.parentNode
    }
    return null
}, offset:function (a) {
    if (a.getBoundingClientRect) {
        var b = a.getBoundingClientRect(), c = document.body, d = document.documentElement, e = window.pageYOffset || d.scrollTop || c.scrollTop, f = window.pageXOffset || d.scrollLeft || c.scrollLeft, g = d.clientTop || c.clientTop || 0, h = d.clientLeft || c.clientLeft || 0, j = b.top + e - g, i = b.left + f - h;
        return{y:Math.round(j),
            x:Math.round(i)}
    } else {
        for (i = j = 0; a;)j += parseInt(a.offsetTop, 10), i += parseInt(a.offsetLeft, 10), a = a.offsetParent;
        return{y:j, x:i}
    }
}, pos:function (a) {
    a = a || event;
    if (a.pageX || a.pageY)return{x:a.pageX, y:a.pageY};
    var b = dhtmlx._isIE && document.compatMode != "BackCompat" ? document.documentElement : document.body;
    return{x:a.clientX + b.scrollLeft - b.clientLeft, y:a.clientY + b.scrollTop - b.clientTop}
}, preventEvent:function (a) {
    a && a.preventDefault && a.preventDefault();
    dhtmlx.html.stopEvent(a)
}, stopEvent:function (a) {
    (a || event).cancelBubble = !0;
    return!1
}, addCss:function (a, b) {
    a.className += " " + b
}, removeCss:function (a, b) {
    a.className = a.className.replace(RegExp(b, "g"), "")
}};
(function () {
    var a = document.getElementsByTagName("SCRIPT");
    if (a.length)a = (a[a.length - 1].getAttribute("src") || "").split("/"), a.splice(a.length - 1, 1), dhtmlx.codebase = a.slice(0, a.length).join("/") + "/"
})();
if (!dhtmlx.ui)dhtmlx.ui = {};
dhtmlx.Template = {_cache:{}, empty:function () {
    return""
}, setter:function (a) {
    return dhtmlx.Template.fromHTML(a)
}, obj_setter:function (a) {
    var b = dhtmlx.Template.setter(a), c = this;
    return function () {
        return b.apply(c, arguments)
    }
}, fromHTML:function (a) {
    if (typeof a == "function")return a;
    if (this._cache[a])return this._cache[a];
    a = (a || "").toString();
    a = a.replace(/[\r\n]+/g, "\\n");
    a = a.replace(/\{obj\.([^}?]+)\?([^:]*):([^}]*)\}/g, '"+(obj.$1?"$2":"$3")+"');
    a = a.replace(/\{common\.([^}\(]*)\}/g, '"+common.$1+"');
    a = a.replace(/\{common\.([^\}\(]*)\(\)\}/g,
        '"+(common.$1?common.$1(obj):"")+"');
    a = a.replace(/\{obj\.([^}]*)\}/g, '"+obj.$1+"');
    a = a.replace(/#([a-z0-9_]+)#/gi, '"+obj.$1+"');
    a = a.replace(/\{obj\}/g, '"+obj+"');
    a = a.replace(/\{-obj/g, "{obj");
    a = a.replace(/\{-common/g, "{common");
    a = 'return "' + a + '";';
    return this._cache[a] = Function("obj", "common", a)
}};
dhtmlx.Type = {add:function (a, b) {
    if (!a.types && a.prototype.types)a = a.prototype;
    var c = b.name || "default";
    this._template(b);
    this._template(b, "edit");
    this._template(b, "loading");
    a.types[c] = dhtmlx.extend(dhtmlx.extend({}, a.types[c] || this._default), b);
    return c
}, _default:{css:"default", template:function () {
    return""
}, template_edit:function () {
    return""
}, template_loading:function () {
    return"..."
}, width:150, height:80, margin:5, padding:0}, _template:function (a, b) {
    var b = "template" + (b ? "_" + b : ""), c = a[b];
    if (c && typeof c == "string") {
        if (c.indexOf("->") != -1)switch (c = c.split("->"), c[0]) {
            case "html":
                c = dhtmlx.html.getValue(c[1]).replace(/\"/g, '\\"');
                break;
            case "http":
                c = (new dhtmlx.ajax).sync().get(c[1], {uid:(new Date).valueOf()}).responseText
        }
        a[b] = dhtmlx.Template.fromHTML(c)
    }
}};
dhtmlx.Settings = {_init:function () {
    this._settings = this.config = {}
}, define:function (a, b) {
    return typeof a == "object" ? this._parseSeetingColl(a) : this._define(a, b)
}, _define:function (a, b) {
    var c = this[a + "_setter"];
    return this._settings[a] = c ? c.call(this, b) : b
}, _parseSeetingColl:function (a) {
    if (a)for (var b in a)this._define(b, a[b])
}, _parseSettings:function (a, b) {
    var c = dhtmlx.extend({}, b);
    typeof a == "object" && !a.tagName && dhtmlx.extend(c, a);
    this._parseSeetingColl(c)
}, _mergeSettings:function (a, b) {
    for (var c in b)switch (typeof a[c]) {
        case "object":
            a[c] =
                this._mergeSettings(a[c] || {}, b[c]);
            break;
        case "undefined":
            a[c] = b[c]
    }
    return a
}, _parseContainer:function (a, b, c) {
    if (typeof a == "object" && !a.tagName)a = a.container;
    this._obj = dhtmlx.toNode(a);
    if (!this._obj && c)this._obj = c(a);
    this._obj.className += " " + b;
    this._obj.onselectstart = function () {
        return!1
    };
    this._dataobj = this._obj
}, _set_type:function (a) {
    if (typeof a == "object")return this.type_setter(a);
    this.type = dhtmlx.extend({}, this.types[a]);
    this.customize()
}, customize:function (a) {
    a && dhtmlx.extend(this.type, a);
    this.type._item_start =
        dhtmlx.Template.fromHTML(this.template_item_start(this.type));
    this.type._item_end = this.template_item_end(this.type);
    this.render()
}, type_setter:function (a) {
    this._set_type(typeof a == "object" ? dhtmlx.Type.add(this, a) : a);
    return a
}, template_setter:function (a) {
    return this.type_setter({template:a})
}, css_setter:function (a) {
    this._obj.className += " " + a;
    return a
}};
dhtmlx.Destruction = {_init:function () {
    dhtmlx.destructors.push(this)
}, destructor:function () {
    this.destructor = function () {
    };
    this._htmlrows = this._htmlmap = null;
    this._html && document.body.appendChild(this._html);
    this._html = null;
    if (this._obj)this._obj.innerHTML = "", this._obj._htmlmap = null;
    this.data = this._obj = this._dataobj = null;
    this._events = this._handlers = {}
}};
dhtmlx.destructors = [];
dhtmlx.event(window, "unload", function () {
    for (var a = 0; a < dhtmlx.destructors.length; a++)dhtmlx.destructors[a].destructor();
    dhtmlx.destructors = [];
    for (var b in dhtmlx._events) {
        var c = dhtmlx._events[b];
        c[0].removeEventListener ? c[0].removeEventListener(c[1], c[2], !1) : c[0].detachEvent && c[0].detachEvent("on" + c[1], c[2]);
        delete dhtmlx._events[b]
    }
});
dhtmlx.ui.pager = function (a) {
    this.name = "Pager";
    dhtmlx.extend(this, dhtmlx.Settings);
    this._parseContainer(a, "dhx_pager");
    dhtmlx.extend(this, dhtmlx.EventSystem);
    dhtmlx.extend(this, dhtmlx.SingleRender);
    dhtmlx.extend(this, dhtmlx.MouseEvents);
    this._parseSettings(a, {size:10, page:-1, group:5, count:0, type:"default"});
    this.data = this._settings;
    this.refresh()
};
dhtmlx.ui.pager.prototype = {_id:"dhx_p_id", on_click:{dhx_pager_item:function (a, b) {
    this.select(b)
}}, select:function (a) {
    switch (a) {
        case "next":
            a = this._settings.page + 1;
            break;
        case "prev":
            a = this._settings.page - 1;
            break;
        case "first":
            a = 0;
            break;
        case "last":
            a = this._settings.limit - 1
    }
    a < 0 && (a = 0);
    a >= this.data.limit && (a = this.data.limit - 1);
    if (this.callEvent("onBeforePageChange", [this._settings.page, a]))this.data.page = a * 1, this.refresh(), this.callEvent("onAfterPageChange", [a])
}, types:{"default":{template:dhtmlx.Template.fromHTML("{common.pages()}"),
    pages:function (a) {
        var b = "";
        if (a.page == -1)return"";
        a.min = a.page - Math.round((a.group - 1) / 2);
        a.max = a.min + a.group - 1;
        if (a.min < 0)a.max += a.min * -1, a.min = 0;
        if (a.max >= a.limit)a.min -= Math.min(a.min, a.max - a.limit + 1), a.max = a.limit - 1;
        for (var c = a.min || 0; c <= a.max; c++)b += this.button({id:c, index:c + 1, selected:c == a.page ? "_selected" : ""});
        return b
    }, page:function (a) {
        return a.page + 1
    }, first:function () {
        return this.button({id:"first", index:" &lt;&lt; ", selected:""})
    }, last:function () {
        return this.button({id:"last", index:" &gt;&gt; ",
            selected:""})
    }, prev:function () {
        return this.button({id:"prev", index:"&lt;", selected:""})
    }, next:function () {
        return this.button({id:"next", index:"&gt;", selected:""})
    }, button:dhtmlx.Template.fromHTML("<div dhx_p_id='{obj.id}' class='dhx_pager_item{obj.selected}'>{obj.index}</div>")}}, refresh:function () {
    var a = this._settings;
    a.limit = Math.ceil(a.count / a.size);
    if (a.limit && a.limit != a.old_limit)a.page = Math.min(a.limit - 1, a.page);
    var b = a.page;
    if (b != -1 && b != a.old_page || a.limit != a.old_limit)this.render(), this.callEvent("onRefresh",
        []), a.old_limit = a.limit, a.old_page = a.page
}, template_item_start:dhtmlx.Template.fromHTML("<div>"), template_item_end:dhtmlx.Template.fromHTML("</div>")};
dhtmlx.SingleRender = {_init:function () {
}, _toHTML:function (a) {
    return this.type._item_start(a, this.type) + this.type.template(a, this.type) + this.type._item_end
}, render:function () {
    if (!this.callEvent || this.callEvent("onBeforeRender", [this.data])) {
        if (this.data)this._dataobj.innerHTML = this._toHTML(this.data);
        this.callEvent && this.callEvent("onAfterRender", [])
    }
}};
dhtmlx.ui.Tooltip = function (a) {
    this.name = "Tooltip";
    this.version = "3.0";
    typeof a == "string" && (a = {template:a});
    dhtmlx.extend(this, dhtmlx.Settings);
    dhtmlx.extend(this, dhtmlx.SingleRender);
    this._parseSettings(a, {type:"default", dy:0, dx:20});
    this._dataobj = this._obj = document.createElement("DIV");
    this._obj.className = "dhx_tooltip";
    dhtmlx.html.insertBefore(this._obj, document.body.firstChild)
};
dhtmlx.ui.Tooltip.prototype = {show:function (a, b) {
    if (!this._disabled) {
        if (this.data != a)this.data = a, this.render(a);
        this._obj.style.top = b.y + this._settings.dy + "px";
        this._obj.style.left = b.x + this._settings.dx + "px";
        this._obj.style.display = "block"
    }
}, hide:function () {
    this.data = null;
    this._obj.style.display = "none"
}, disable:function () {
    this._disabled = !0
}, enable:function () {
    this._disabled = !1
}, types:{"default":dhtmlx.Template.fromHTML("{obj.id}")}, template_item_start:dhtmlx.Template.empty, template_item_end:dhtmlx.Template.empty};
dhtmlx.AutoTooltip = {tooltip_setter:function (a) {
    var b = new dhtmlx.ui.Tooltip(a);
    this.attachEvent("onMouseMove", function (a, d) {
        b.show(this.get(a), dhtmlx.html.pos(d))
    });
    this.attachEvent("onMouseOut", function () {
        b.hide()
    });
    this.attachEvent("onMouseMoving", function () {
        b.hide()
    });
    return b
}};
dhtmlx.compat = function (a, b) {
    if (dhtmlx.compat[a])dhtmlx.compat[a](b)
};
(function () {
    if (!window.dhtmlxError) {
        var a = function () {
        };
        window.dhtmlxError = {catchError:a, throwError:a};
        window.convertStringToBoolean = function (a) {
            return!!a
        };
        window.dhtmlxEventable = function (a) {
            dhtmlx.extend(a, dhtmlx.EventSystem)
        };
        var b = {getXMLTopNode:function () {
        }, doXPath:function (a) {
            return dhtmlx.DataDriver.xml.xpath(this.xml, a)
        }, xmlDoc:{responseXML:!0}};
        dhtmlx.compat.dataProcessor = function (a) {
            var d = "_sendData", e = "_in_progress", f = "_tMode", g = "_waitMode";
            a[d] = function (a, c) {
                if (a) {
                    c && (this[e][c] = (new Date).valueOf());
                    if (!this.callEvent("onBeforeDataSending", c ? [c, this.getState(c)] : []))return!1;
                    var d = this, k = this.serverProcessor;
                    this[f] != "POST" ? dhtmlx.ajax().get(k + (k.indexOf("?") != -1 ? "&" : "?") + this.serialize(a, c), "", function (a, c) {
                        b.xml = dhtmlx.DataDriver.xml.checkResponse(a, c);
                        d.afterUpdate(d, null, null, null, b)
                    }) : dhtmlx.ajax().post(k, this.serialize(a, c), function (a, c) {
                        b.xml = dhtmlx.DataDriver.xml.checkResponse(a, c);
                        d.afterUpdate(d, null, null, null, b)
                    });
                    this[g]++
                }
            }
        }
    }
})();
dhtmlx.DataProcessor = {_dp_init:function (a) {
    var b = "_methods";
    a[b] = ["setItemStyle", "", "changeId", "remove"];
    this.attachEvent("onAfterAdd", function (b) {
        a.setUpdated(b, !0, "inserted")
    });
    this.data.attachEvent("onStoreLoad", dhtmlx.bind(function (a, b) {
        a.getUserData && a.getUserData(b, this._userdata)
    }, this));
    this.attachEvent("onBeforeDelete", function (b) {
        var d = a.getState(b);
        if (d == "inserted")return a.setUpdated(b, !1), !0;
        if (d == "deleted")return!1;
        if (d == "true_deleted")return!0;
        a.setUpdated(b, !0, "deleted");
        return!1
    });
    this.attachEvent("onAfterEditStop", function (b) {
        a.setUpdated(b, !0, "updated")
    });
    this.attachEvent("onBindUpdate", function (b) {
        window.setTimeout(function () {
            a.setUpdated(b.id, !0, "updated")
        }, 1)
    });
    b = "_getRowData";
    a[b] = function (a) {
        var b = this.obj.data.get(a), e = {}, f;
        for (f in b)f.indexOf("_") !== 0 && (e[f] = b[f]);
        return e
    };
    b = "_clearUpdateFlag";
    a[b] = function () {
    };
    this._userdata = {};
    a.attachEvent("insertCallback", this._dp_callback);
    a.attachEvent("updateCallback", this._dp_callback);
    a.attachEvent("deleteCallback", function (a, b) {
        this.obj.setUserData(b, this.action_param, "true_deleted");
        this.obj.remove(b)
    });
    dhtmlx.compat("dataProcessor", a)
}, _dp_callback:function (a, b) {
    this.obj.data.set(b, dhtmlx.DataDriver.xml.getDetails(a.firstChild));
    this.obj.data.refresh(b)
}, setItemStyle:function (a, b) {
    var c = this._locateHTML(a);
    c && (c.style.cssText += ";" + b)
}, changeId:function (a, b) {
    this.data.changeId(a, b);
    this.refresh()
}, setUserData:function (a, b, c) {
    a ? this.data.get(a)[b] = c : this._userdata[b] = c
}, getUserData:function (a, b) {
    return a ? this.data.get(a)[b] :
        this._userdata[b]
}};
(function () {
    var a = "_dp_init";
    dhtmlx.DataProcessor[a] = dhtmlx.DataProcessor._dp_init
})();
dhtmlx.compat.dnd = function () {
    if (window.dhtmlDragAndDropObject) {
        var a = "_dragged", b = dhtmlDragAndDropObject.prototype.checkLanding;
        dhtmlDragAndDropObject.prototype.checkLanding = function (a, c, d) {
            b.apply(this, arguments);
            if (!d) {
                var e = dhtmlx.DragControl._drag_context = dhtmlx.DragControl._drag_context || {};
                if (!e.from)e.from = this.dragStartObject;
                dhtmlx.DragControl._checkLand(a, c, !0)
            }
        };
        var c = dhtmlDragAndDropObject.prototype.stopDrag;
        dhtmlDragAndDropObject.prototype.stopDrag = function (a, b, e) {
            if (!e && dhtmlx.DragControl._last)dhtmlx.DragControl._active =
                d.dragStartNode, dhtmlx.DragControl._stopDrag(a, !0);
            c.apply(this, arguments)
        };
        var d = new dhtmlDragAndDropObject, e = dhtmlx.DragControl._startDrag;
        dhtmlx.DragControl._startDrag = function () {
            e.apply(this, arguments);
            var b = dhtmlx.DragControl._drag_context;
            if (b) {
                for (var c = [], f = [], g = 0; g < b.source.length; g++)c[g] = {idd:b.source[g]}, f.push(b.source[g]);
                d.dragStartNode = {parentNode:{}, parentObject:{idd:c, id:f.length == 1 ? f[0] : f, treeNod:{object:b.from}}};
                d.dragStartNode.parentObject.treeNod[a] = c;
                d.dragStartObject = b.from
            }
        };
        var f = dhtmlx.DragControl._checkLand;
        dhtmlx.DragControl._checkLand = function (a, b, c) {
            f.apply(this, arguments);
            !this._last && !c && (a = d.checkLanding(a, b, !0))
        };
        var g = dhtmlx.DragControl._stopDrag;
        dhtmlx.DragControl._stopDrag = function (a, b) {
            g.apply(this, arguments);
            d.lastLanding && !b && d.stopDrag(a, !1, !0)
        };
        var h = dhtmlx.DragControl.getMaster;
        dhtmlx.DragControl.getMaster = function (b) {
            var c = null;
            b && (c = h.apply(this, arguments));
            if (!c) {
                for (var c = d.dragStartObject, e = [], f = c[a], g = 0; g < f.length; g++)e.push(f[g].idd || f[g].id);
                dhtmlx.DragControl._drag_context.source = e
            }
            return c
        }
    }
};
dhtmlx.DataMove = {_init:function () {
}, copy:function (a, b, c, d) {
    var e = this.get(a);
    if (e)return c && (e = c.externalData(e)), c = c || this, c.add(c.externalData(e, d), b)
}, move:function (a, b, c, d) {
    if (a instanceof Array)for (var e = 0; e < a.length; e++) {
        var f = (c || this).indexById(this.move(a[e], b, c, dhtmlx.uid()));
        a[e + 1] && (b = f + (this.indexById(a[e + 1]) < f ? 0 : 1))
    } else if (nid = a, !(b < 0)) {
        var g = this.get(a);
        if (g)return!c || c == this ? this.data.move(this.indexById(a), b) : (nid = c.add(c.externalData(g, d), b), this.remove(a)), nid
    }
}, moveUp:function (a, b) {
    return this.move(a, this.indexById(a) - (b || 1))
}, moveDown:function (a, b) {
    return this.moveUp(a, (b || 1) * -1)
}, moveTop:function (a) {
    return this.move(a, 0)
}, moveBottom:function (a) {
    return this.move(a, this.data.dataCount() - 1)
}, externalData:function (a, b) {
    var c = dhtmlx.extend({}, a);
    c.id = b || dhtmlx.uid();
    c.$selected = c.$template = null;
    return c
}};
dhtmlx.DragControl = {_drag_masters:dhtmlx.toArray(["dummy"]), addDrop:function (a, b, c) {
    a = dhtmlx.toNode(a);
    a.dhx_drop = this._getCtrl(b);
    if (c)a.dhx_master = !0
}, _getCtrl:function (a) {
    var a = a || dhtmlx.DragControl, b = this._drag_masters.find(a);
    if (b < 0)b = this._drag_masters.length, this._drag_masters.push(a);
    return b
}, addDrag:function (a, b) {
    a = dhtmlx.toNode(a);
    a.dhx_drag = this._getCtrl(b);
    dhtmlx.event(a, "mousedown", this._preStart, a)
}, _preStart:function (a) {
    dhtmlx.DragControl._active && (dhtmlx.DragControl._preStartFalse(),
        dhtmlx.DragControl.destroyDrag());
    dhtmlx.DragControl._active = this;
    dhtmlx.DragControl._start_pos = {x:a.pageX, y:a.pageY};
    dhtmlx.DragControl._dhx_drag_mm = dhtmlx.event(document.body, "mousemove", dhtmlx.DragControl._startDrag);
    dhtmlx.DragControl._dhx_drag_mu = dhtmlx.event(document.body, "mouseup", dhtmlx.DragControl._preStartFalse);
    dhtmlx.DragControl._dhx_drag_sc = dhtmlx.event(this, "scroll", dhtmlx.DragControl._preStartFalse);
    a.cancelBubble = !0;
    return!1
}, _preStartFalse:function () {
    dhtmlx.DragControl._dhx_drag_mm =
        dhtmlx.eventRemove(dhtmlx.DragControl._dhx_drag_mm);
    dhtmlx.DragControl._dhx_drag_mu = dhtmlx.eventRemove(dhtmlx.DragControl._dhx_drag_mu);
    dhtmlx.DragControl._dhx_drag_sc = dhtmlx.eventRemove(dhtmlx.DragControl._dhx_drag_sc)
}, _startDrag:function (a) {
    var b = {x:a.pageX, y:a.pageY};
    if (!(Math.abs(b.x - dhtmlx.DragControl._start_pos.x) < 5 && Math.abs(b.y - dhtmlx.DragControl._start_pos.y) < 5) && (dhtmlx.DragControl._preStartFalse(), dhtmlx.DragControl.createDrag(a)))dhtmlx.DragControl.sendSignal("start"), dhtmlx.DragControl._dhx_drag_mm =
        dhtmlx.event(document.body, "mousemove", dhtmlx.DragControl._moveDrag), dhtmlx.DragControl._dhx_drag_mu = dhtmlx.event(document.body, "mouseup", dhtmlx.DragControl._stopDrag), dhtmlx.DragControl._moveDrag(a)
}, _stopDrag:function (a) {
    dhtmlx.DragControl._dhx_drag_mm = dhtmlx.eventRemove(dhtmlx.DragControl._dhx_drag_mm);
    dhtmlx.DragControl._dhx_drag_mu = dhtmlx.eventRemove(dhtmlx.DragControl._dhx_drag_mu);
    dhtmlx.DragControl._last && (dhtmlx.DragControl.onDrop(dhtmlx.DragControl._active, dhtmlx.DragControl._last, this._landing,
        a), dhtmlx.DragControl.onDragOut(dhtmlx.DragControl._active, dhtmlx.DragControl._last, null, a));
    dhtmlx.DragControl.destroyDrag();
    dhtmlx.DragControl.sendSignal("stop")
}, _moveDrag:function (a) {
    var b = dhtmlx.html.pos(a);
    dhtmlx.DragControl._html.style.top = b.y + dhtmlx.DragControl.top + "px";
    dhtmlx.DragControl._html.style.left = b.x + dhtmlx.DragControl.left + "px";
    dhtmlx.DragControl._skip ? dhtmlx.DragControl._skip = !1 : dhtmlx.DragControl._checkLand(a.srcElement || a.target, a);
    a.cancelBubble = !0;
    return!1
}, _checkLand:function (a, b) {
    for (; a && a.tagName != "BODY";) {
        if (a.dhx_drop) {
            if (this._last && (this._last != a || a.dhx_master))this.onDragOut(this._active, this._last, a, b);
            if (!this._last || this._last != a || a.dhx_master)if (this._last = null, this._landing = this.onDragIn(dhtmlx.DragControl._active, a, b))this._last = a;
            return
        }
        a = a.parentNode
    }
    if (this._last)this._last = this._landing = this.onDragOut(this._active, this._last, null, b)
}, sendSignal:function (a) {
    dhtmlx.DragControl.active = a == "start"
}, getMaster:function (a) {
    return this._drag_masters[a.dhx_drag ||
        a.dhx_drop]
}, getContext:function () {
    return this._drag_context
}, createDrag:function (a) {
    var b = dhtmlx.DragControl._active, c = this._drag_masters[b.dhx_drag], d;
    if (c.onDragCreate)d = c.onDragCreate(b, a), d.style.position = "absolute", d.style.zIndex = dhtmlx.zIndex.drag, d.onmousemove = dhtmlx.DragControl._skip_mark; else {
        var e = dhtmlx.DragControl.onDrag(b, a);
        if (!e)return!1;
        d = document.createElement("DIV");
        d.innerHTML = e;
        d.className = "dhx_drag_zone";
        d.onmousemove = dhtmlx.DragControl._skip_mark;
        document.body.appendChild(d)
    }
    dhtmlx.DragControl._html =
        d;
    return!0
}, _skip_mark:function () {
    dhtmlx.DragControl._skip = !0
}, destroyDrag:function () {
    var a = dhtmlx.DragControl._active, b = this._drag_masters[a.dhx_drag];
    if (b && b.onDragDestroy)b.onDragDestroy(a, dhtmlx.DragControl._html); else dhtmlx.html.remove(dhtmlx.DragControl._html);
    dhtmlx.DragControl._landing = dhtmlx.DragControl._active = dhtmlx.DragControl._last = dhtmlx.DragControl._html = null
}, top:5, left:5, onDragIn:function (a, b, c) {
    var d = this._drag_masters[b.dhx_drop];
    if (d.onDragIn && d != this)return d.onDragIn(a, b, c);
    b.className += " dhx_drop_zone";
    return b
}, onDragOut:function (a, b, c, d) {
    var e = this._drag_masters[b.dhx_drop];
    if (e.onDragOut && e != this)return e.onDragOut(a, b, c, d);
    b.className = b.className.replace("dhx_drop_zone", "");
    return null
}, onDrop:function (a, b, c, d) {
    var e = this._drag_masters[b.dhx_drop];
    dhtmlx.DragControl._drag_context.from = dhtmlx.DragControl.getMaster(a);
    if (e.onDrop && e != this)return e.onDrop(a, b, c, d);
    b.appendChild(a)
}, onDrag:function (a, b) {
    var c = this._drag_masters[a.dhx_drag];
    if (c.onDrag && c != this)return c.onDrag(a,
        b);
    dhtmlx.DragControl._drag_context = {source:a, from:a};
    return"<div style='" + a.style.cssText + "'>" + a.innerHTML + "</div>"
}};
dhtmlx.DragItem = {_init:function () {
    if (!this._settings || this._settings.drag)dhtmlx.DragItem._initHandlers(this); else if (this._settings)this.drag_setter = function (a) {
        a && (this._initHandlers(this), delete this.drag_setter);
        return a
    };
    this.dragMarker && (this.attachEvent("onBeforeDragIn", this.dragMarker), this.attachEvent("onDragOut", this.dragMarker))
}, _initHandlers:function (a) {
    dhtmlx.DragControl.addDrop(a._obj, a, !0);
    dhtmlx.DragControl.addDrag(a._obj, a)
}, onDragIn:function (a, b, c) {
    var d = this.locate(c) || null, e =
        dhtmlx.DragControl._drag_context, f = dhtmlx.DragControl.getMaster(a), g = this._locateHTML(d) || this._obj;
    if (g == dhtmlx.DragControl._landing)return g;
    e.target = d;
    e.to = f;
    if (!this.callEvent("onBeforeDragIn", [e, c]))return e.id = null;
    dhtmlx.html.addCss(g, "dhx_drag_over");
    return g
}, onDragOut:function (a, b, c, d) {
    var e = this.locate(d) || null;
    c != this._dataobj && (e = null);
    var f = this._locateHTML(e) || (c ? dhtmlx.DragControl.getMaster(c)._obj : window.undefined);
    if (f == dhtmlx.DragControl._landing)return null;
    var g = dhtmlx.DragControl._drag_context;
    dhtmlx.html.removeCss(dhtmlx.DragControl._landing, "dhx_drag_over");
    g.target = g.to = null;
    this.callEvent("onDragOut", [g, d]);
    return null
}, onDrop:function (a, b, c, d) {
    var e = dhtmlx.DragControl._drag_context;
    e.to = this;
    e.index = e.target ? this.indexById(e.target) : this.dataCount();
    e.new_id = dhtmlx.uid();
    this.callEvent("onBeforeDrop", [e, d]) && (e.from == e.to ? this.move(e.source, e.index) : e.from && e.from.move(e.source, e.index, e.to, e.new_id), this.callEvent("onAfterDrop", [e, d]))
}, onDrag:function (a, b) {
    var c = this.locate(b), d =
        [c];
    if (c) {
        if (this.getSelected) {
            var e = this.getSelected();
            dhtmlx.PowerArray.find.call(e, c) != -1 && (d = e)
        }
        var f = dhtmlx.DragControl._drag_context = {source:d, start:c};
        f.from = this;
        if (this.callEvent("onBeforeDrag", [f, b]))return f.html || this._toHTML(this.get(c))
    }
    return null
}};
dhtmlx.EditAbility = {_init:function () {
    this._edit_bind = this._edit_id = null;
    this.attachEvent("onEditKeyPress", function (a, b, c) {
        a == 13 && !c ? this.stopEdit() : a == 27 && this.stopEdit(!0)
    });
    this.attachEvent("onBeforeRender", function () {
        this.stopEdit()
    })
}, isEdit:function () {
    return this._edit_id
}, edit:function (a) {
    if (this.stopEdit(!1, a) && this.callEvent("onBeforeEditStart", [a])) {
        var b = this.data.get(a);
        if (!b.$template)b.$template = "edit", this.data.refresh(a), this._edit_id = a, this._save_binding(a), this._edit_bind(!0, b), this.callEvent("onAfterEditStart",
            [a])
    }
}, stopEdit:function (a, b) {
    if (!this._edit_id)return!0;
    if (this._edit_id == b)return!1;
    var c = {};
    a ? c = null : this._edit_bind(!1, c);
    if (!this.callEvent("onBeforeEditStop", [this._edit_id, c]))return!1;
    var d = this.data.get(this._edit_id);
    d.$template = null;
    a || this._edit_bind(!1, d);
    var e = this._edit_id;
    this._edit_bind = this._edit_id = null;
    this.data.refresh(e);
    this.callEvent("onAfterEditStop", [e, c]);
    return!0
}, _save_binding:function (a) {
    var b = this._locateHTML(a), c = "", d = "", e = [];
    if (b) {
        for (var f = b.getElementsByTagName("*"),
                 g = "", h = 0; h < f.length; h++)if (f[h].nodeType == 1 && (g = f[h].getAttribute("bind")))c += "els[" + e.length + "].value=" + g + ";", d += g + "=els[" + e.length + "].value;", e.push(f[h]), f[h].className += " dhx_allow_selection", f[h].onselectstart = this._block_native;
        f = null
    }
    c = Function("obj", "els", c);
    d = Function("obj", "els", d);
    this._edit_bind = function (a, b) {
        a ? (c(b, e), e.length && e[0].select && e[0].select()) : d(b, e)
    }
}, _block_native:function (a) {
    return(a || event).cancelBubble = !0
}};
dhtmlx.KeyEvents = {_init:function () {
    dhtmlx.event(this._obj, "keypress", this._onKeyPress, this)
}, _onKeyPress:function (a) {
    var a = a || event, b = a.which || a.keyCode;
    this.callEvent(this._edit_id ? "onEditKeyPress" : "onKeyPress", [b, a.ctrlKey, a.shiftKey, a])
}};
dhtmlx.MouseEvents = {_init:function () {
    this.on_click && (dhtmlx.event(this._obj, "click", this._onClick, this), dhtmlx.event(this._obj, "contextmenu", this._onContext, this));
    this.on_dblclick && dhtmlx.event(this._obj, "dblclick", this._onDblClick, this);
    this.on_mouse_move && (dhtmlx.event(this._obj, "mousemove", this._onMouse, this), dhtmlx.event(this._obj, dhtmlx._isIE ? "mouseleave" : "mouseout", this._onMouse, this))
}, _onClick:function (a) {
    return this._mouseEvent(a, this.on_click, "ItemClick")
}, _onDblClick:function (a) {
    return this._mouseEvent(a,
        this.on_dblclick, "ItemDblClick")
}, _onContext:function (a) {
    var b = dhtmlx.html.locate(a, this._id);
    if (b && !this.callEvent("onBeforeContextMenu", [b, a]))return dhtmlx.html.preventEvent(a)
}, _onMouse:function (a) {
    dhtmlx._isIE && (a = document.createEventObject(event));
    this._mouse_move_timer && window.clearTimeout(this._mouse_move_timer);
    this.callEvent("onMouseMoving", [a]);
    this._mouse_move_timer = window.setTimeout(dhtmlx.bind(function () {
        a.type == "mousemove" ? this._onMouseMove(a) : this._onMouseOut(a)
    }, this), 500)
}, _onMouseMove:function (a) {
    this._mouseEvent(a,
        this.on_mouse_move, "MouseMove") || this.callEvent("onMouseOut", [a || event])
}, _onMouseOut:function (a) {
    this.callEvent("onMouseOut", [a || event])
}, _mouseEvent:function (a, b, c) {
    for (var a = a || event, d = a.target || a.srcElement, e = "", f = null, g = !1; d && d.parentNode;) {
        if (!g && d.getAttribute && (f = d.getAttribute(this._id))) {
            d.getAttribute("userdata") && this.callEvent("onLocateData", [f, d]);
            if (!this.callEvent("on" + c, [f, a, d]))return;
            g = !0
        }
        if (e = d.className)if (e = e.split(" "), e = e[0] || e[1], b[e])return b[e].call(this, a, f || dhx.html.locate(a,
            this._id), d);
        d = d.parentNode
    }
    return g
}};
dhtmlx.SelectionModel = {_init:function () {
    this._selected = dhtmlx.toArray();
    this.data.attachEvent("onStoreUpdated", dhtmlx.bind(this._data_updated, this));
    this.data.attachEvent("onStoreLoad", dhtmlx.bind(this._data_loaded, this));
    this.data.attachEvent("onAfterFilter", dhtmlx.bind(this._data_filtered, this));
    this.data.attachEvent("onIdChange", dhtmlx.bind(this._id_changed, this))
}, _id_changed:function (a, b) {
    for (var c = this._selected.length - 1; c >= 0; c--)this._selected[c] == a && (this._selected[c] = b)
}, _data_filtered:function () {
    for (var a =
        this._selected.length - 1; a >= 0; a--) {
        if (this.data.indexById(this._selected[a]) < 0)var b = this._selected[a];
        var c = this.item(b);
        c && delete c.$selected;
        this._selected.splice(a, 1);
        this.callEvent("onSelectChange", [b])
    }
}, _data_updated:function (a, b, c) {
    if (c == "delete")this._selected.remove(a); else if (!this.data.dataCount() && !this.data._filter_order)this._selected = dhtmlx.toArray()
}, _data_loaded:function () {
    this._settings.select && this.data.each(function (a) {
        a.$selected && this.select(a.id)
    }, this)
}, _select_mark:function (a, b, c) {
    if (!c && !this.callEvent("onBeforeSelect", [a, b]))return!1;
    this.data.item(a).$selected = b;
    c ? c.push(a) : (b ? this._selected.push(a) : this._selected.remove(a), this._refresh_selection(a));
    return!0
}, select:function (a, b, c) {
    if (!a)return this.selectAll();
    if (a instanceof Array)for (var d = 0; d < a.length; d++)this.select(a[d], b, c); else if (this.data.exists(a)) {
        if (c && this._selected.length)return this.selectAll(this._selected[this._selected.length - 1], a);
        if (!b && (this._selected.length != 1 || this._selected[0] != a))this._silent_selection = !0, this.unselectAll(), this._silent_selection = !1;
        this.isSelected(a) ? b && this.unselect(a) : this._select_mark(a, !0) && this.callEvent("onAfterSelect", [a])
    }
}, unselect:function (a) {
    if (!a)return this.unselectAll();
    this.isSelected(a) && this._select_mark(a, !1)
}, selectAll:function (a, b) {
    var c, d = [];
    c = a || b ? this.data.getRange(a || null, b || null) : this.data.getRange();
    c.each(function (a) {
        var b = this.data.item(a.id);
        b.$selected || (this._selected.push(a.id), this._select_mark(a.id, !0, d));
        return a.id
    }, this);
    this._refresh_selection(d)
},
    unselectAll:function () {
        var a = [];
        this._selected.each(function (b) {
            this._select_mark(b, !1, a)
        }, this);
        this._selected = dhtmlx.toArray();
        this._refresh_selection(a)
    }, isSelected:function (a) {
        return this._selected.find(a) != -1
    }, getSelected:function (a) {
        switch (this._selected.length) {
            case 0:
                return a ? [] : "";
            case 1:
                return a ? [this._selected[0]] : this._selected[0];
            default:
                return[].concat(this._selected)
        }
    }, _is_mass_selection:function (a) {
        return a.length > 100 || a.length > this.data.dataCount / 2
    }, _refresh_selection:function (a) {
        typeof a !=
            "object" && (a = [a]);
        if (a.length) {
            if (this._is_mass_selection(a))this.data.refresh(); else for (var b = 0; b < a.length; b++)this.render(a[b], this.data.item(a[b]), "update");
            this._silent_selection || this.callEvent("onSelectChange", [a])
        }
    }};
dhtmlx.RenderStack = {_init:function () {
    this._html = document.createElement("DIV")
}, _toHTML:function (a) {
    this.callEvent("onItemRender", [a]);
    return this.type._item_start(a, this.type) + (a.$template ? this.type["template_" + a.$template] : this.type.template)(a, this.type) + this.type._item_end
}, _toHTMLObject:function (a) {
    this._html.innerHTML = this._toHTML(a);
    return this._html.firstChild
}, _locateHTML:function (a) {
    if (this._htmlmap)return this._htmlmap[a];
    this._htmlmap = {};
    for (var b = this._dataobj.childNodes, c = 0; c < b.length; c++) {
        var d =
            b[c].getAttribute(this._id);
        d && (this._htmlmap[d] = b[c])
    }
    return this._locateHTML(a)
}, locate:function (a) {
    return dhtmlx.html.locate(a, this._id)
}, show:function (a) {
    var b = this._locateHTML(a);
    if (b)this._dataobj.scrollTop = b.offsetTop - this._dataobj.offsetTop
}, render:function (a, b, c) {
    if (a) {
        var d = this._locateHTML(a);
        switch (c) {
            case "update":
                if (!d)return;
                var e = this._htmlmap[a] = this._toHTMLObject(b);
                dhtmlx.html.insertBefore(e, d);
                dhtmlx.html.remove(d);
                break;
            case "delete":
                if (!d)return;
                dhtmlx.html.remove(d);
                delete this._htmlmap[a];
                break;
            case "add":
                e = this._htmlmap[a] = this._toHTMLObject(b);
                dhtmlx.html.insertBefore(e, this._locateHTML(this.data.next(a)), this._dataobj);
                break;
            case "move":
                this.render(a, b, "delete"), this.render(a, b, "add")
        }
    } else if (this.callEvent("onBeforeRender", [this.data]))this._dataobj.innerHTML = this.data.getRange().map(this._toHTML, this).join(""), this._htmlmap = null;
    this.callEvent("onAfterRender", [])
}, pager_setter:function (a) {
    this.attachEvent("onBeforeRender", function () {
        var a = this._settings.pager._settings;
        if (a.page == -1)return!1;
        this.data.min = a.page * a.size;
        this.data.max = (a.page + 1) * a.size - 1;
        return!0
    });
    var b = new dhtmlx.ui.pager(a), c = dhtmlx.bind(function () {
        this.data.refresh()
    }, this);
    b.attachEvent("onRefresh", c);
    this.data.attachEvent("onStoreUpdated", function () {
        var a = this.dataCount();
        if (a != b._settings.count) {
            b._settings.count = a;
            if (b._settings.page == -1)b._settings.page = 0;
            b.refresh()
        }
    });
    return b
}, height_setter:function (a) {
    a == "auto" && (this.attachEvent("onAfterRender", this._correct_height), dhtmlx.event(window, "resize",
        dhtmlx.bind(this._correct_height, this)));
    return a
}, _correct_height:function () {
    this._dataobj.style.overflow = "hidden";
    this._dataobj.style.height = "1px";
    var a = this._dataobj.scrollHeight;
    this._dataobj.style.height = a + "px";
    if (dhtmlx._isFF) {
        var b = this._dataobj.scrollHeight;
        if (b != a)this._dataobj.style.height = b + "px"
    }
    this._obj.style.height = this._dataobj.style.height
}, _getDimension:function () {
    var a = this.type, b = (a.border || 0) + (a.padding || 0) * 2 + (a.margin || 0) * 2;
    return{x:a.width + b, y:a.height + b}
}, x_count_setter:function (a) {
    var b =
        this._getDimension();
    this._dataobj.style.width = b.x * a + (this._settings.height != "auto" ? 18 : 0) + "px";
    return a
}, y_count_setter:function (a) {
    var b = this._getDimension();
    this._dataobj.style.height = b.y * a + "px";
    return a
}};
dhtmlx.VirtualRenderStack = {_init:function () {
    this._htmlmap = {};
    this._dataobj.style.overflowY = "scroll";
    dhtmlx.event(this._dataobj, "scroll", dhtmlx.bind(this._render_visible_rows, this));
    dhtmlx.event(window, "resize", dhtmlx.bind(function () {
        this.render()
    }, this));
    this.data._unrendered_area = [];
    this.data.getIndexRange = this._getIndexRange
}, _locateHTML:function (a) {
    return this._htmlmap[a]
}, show:function (a) {
    range = this._getVisibleRange();
    var b = this.data.indexById(a), c = Math.floor(b / range._dx) * range._y;
    this._dataobj.scrollTop =
        c
}, _getIndexRange:function (a, b) {
    b !== 0 && (b = Math.min(b || Infinity, this.dataCount() - 1));
    for (var c = dhtmlx.toArray(), d = a || 0; d <= b; d++) {
        var e = this.item(this.order[d]);
        this.order.length > d && (e ? e.$template == "loading" && this._unrendered_area.push(this.order[d]) : (this.order[d] = dhtmlx.uid(), e = {id:this.order[d], $template:"loading"}, this._unrendered_area.push(this.order[d])), c.push(e))
    }
    return c
}, render:function (a, b, c) {
    if (a) {
        var d = this._locateHTML(a);
        switch (c) {
            case "update":
                if (!d)break;
                var e = this._htmlmap[a] = this._toHTMLObject(b);
                dhtmlx.html.insertBefore(e, d);
                dhtmlx.html.remove(d);
                break;
            default:
                this._render_delayed()
        }
    } else if (this.callEvent("onBeforeRender", [this.data]))this._htmlmap = {}, this._render_visible_rows(null, !0), this._wait_for_render = !1, this.callEvent("onAfterRender", [])
}, _render_delayed:function () {
    if (!this._wait_for_render)this._wait_for_render = !0, window.setTimeout(dhtmlx.bind(function () {
        this.render()
    }, this), 1)
}, _create_placeholder:function (a) {
    var b = document.createElement("DIV");
    b.style.cssText = "height:" + a + "px; width:100%; overflow:hidden;";
    return b
}, _render_visible_rows:function (a, b) {
    this.data._unrendered_area = [];
    var c = this._getVisibleRange();
    if (!this._dataobj.firstChild || b)this._dataobj.innerHTML = "", this._dataobj.appendChild(this._create_placeholder(c._max)), this._htmlrows = [this._dataobj.firstChild];
    for (var d = c._from, e = this.data.max || this.data.max === 0 ? this.data.max : Infinity; d <= c._height;) {
        for (; this._htmlrows[d] && this._htmlrows[d]._filled && d <= c._height;)d++;
        if (d > c._height)break;
        for (var f = d; !this._htmlrows[f];)f--;
        var g = this._htmlrows[f],
            h = d * c._dx + (this.data.min || 0);
        if (h > e)break;
        var j = Math.min(h + c._dx - 1, e), i = this._create_placeholder(c._y), k = this.data.getIndexRange(h, j);
        if (!k.length)break;
        i.innerHTML = k.map(this._toHTML, this).join("");
        for (var n = 0; n < k.length; n++)this._htmlmap[this.data.idByIndex(h + n)] = i.childNodes[n];
        var q = parseInt(g.style.height, 10), l = (d - f) * c._y, o = q - l - c._y;
        dhtmlx.html.insertBefore(i, l ? g.nextSibling : g, this._dataobj);
        this._htmlrows[d] = i;
        i._filled = !0;
        if (l <= 0 && o > 0)g.style.height = o + "px", this._htmlrows[d + 1] = g; else if (l < 0 ?
            dhtmlx.html.remove(g) : g.style.height = l + "px", o > 0) {
            var r = this._htmlrows[d + 1] = this._create_placeholder(o);
            dhtmlx.html.insertBefore(r, i.nextSibling, this._dataobj)
        }
        d++
    }
    if (this.data._unrendered_area.length) {
        var m = this.indexById(this.data._unrendered_area[0]), p = this.indexById(this.data._unrendered_area.pop()) + 1;
        if (p > m) {
            if (!this.callEvent("onDataRequest", [m, p - m]))return!1;
            this.data.feed.call(this, m, p - m)
        }
    }
    if (dhtmlx._isIE) {
        var s = this._getVisibleRange();
        s._from != c._from && this._render_visible_rows()
    }
}, _getVisibleRange:function () {
    var a =
        this._dataobj.scrollTop, b = Math.max(this._dataobj.scrollWidth, this._dataobj.offsetWidth) - 18, c = this._dataobj.offsetHeight, d = this.type, e = this._getDimension(), f = Math.floor(b / e.x) || 1, g = Math.floor(a / e.y), h = Math.ceil((c + a) / e.y) - 1, j = this.data.max ? this.data.max - this.data.min : this.data.dataCount(), i = Math.ceil(j / f) * e.y;
    return{_from:g, _height:h, _top:a, _max:i, _y:e.y, _dx:f}
}};
dhtmlx.ajax = function (a, b, c) {
    if (arguments.length !== 0) {
        var d = new dhtmlx.ajax;
        if (c)d.master = c;
        d.get(a, null, b)
    }
    return!this.getXHR ? new dhtmlx.ajax : this
};
dhtmlx.ajax.prototype = {getXHR:function () {
    return dhtmlx._isIE ? new ActiveXObject("Microsoft.xmlHTTP") : new XMLHttpRequest
}, send:function (a, b, c) {
    var d = this.getXHR();
    typeof c == "function" && (c = [c]);
    if (typeof b == "object") {
        var e = [], f;
        for (f in b) {
            var g = b[f];
            if (g === null || g === dhtmlx.undefined)g = "";
            e.push(f + "=" + encodeURIComponent(g))
        }
        b = e.join("&")
    }
    b && !this.post && (a = a + (a.indexOf("?") != -1 ? "&" : "?") + b, b = null);
    d.open(this.post ? "POST" : "GET", a, !this._sync);
    this.post && d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var h = this;
    d.onreadystatechange = function () {
        if (!d.readyState || d.readyState == 4) {
            if (c && h)for (var a = 0; a < c.length; a++)c[a] && c[a].call(h.master || h, d.responseText, d.responseXML, d);
            c = h = h.master = null
        }
    };
    d.send(b || null);
    return d
}, get:function (a, b, c) {
    this.post = !1;
    return this.send(a, b, c)
}, post:function (a, b, c) {
    this.post = !0;
    return this.send(a, b, c)
}, sync:function () {
    this._sync = !0;
    return this
}};
dhtmlx.AtomDataLoader = {_init:function (a) {
    this.data = {};
    if (a)this._settings.datatype = a.datatype || "json", this._after_init.push(this._load_when_ready)
}, _load_when_ready:function () {
    this._ready_for_data = !0;
    this._settings.url && this.url_setter(this._settings.url);
    this._settings.data && this.data_setter(this._settings.data)
}, url_setter:function (a) {
    if (!this._ready_for_data)return a;
    this.load(a, this._settings.datatype);
    return a
}, data_setter:function (a) {
    if (!this._ready_for_data)return a;
    this.parse(a, this._settings.datatype);
    return!0
}, load:function (a, b, c) {
    this.callEvent("onXLS", []);
    typeof b == "string" ? (this.data.driver = dhtmlx.DataDriver[b], b = c) : this.data.driver = dhtmlx.DataDriver.xml;
    dhtmlx.ajax(a, [this._onLoad, b], this)
}, parse:function (a, b) {
    this.callEvent("onXLS", []);
    this.data.driver = dhtmlx.DataDriver[b || "xml"];
    this._onLoad(a, null)
}, _onLoad:function (a, b) {
    var c = this.data.driver, d = c.getRecords(c.toObject(a, b))[0];
    this.data = c ? c.getDetails(d) : a;
    this.callEvent("onXLE", [])
}, _check_data_feed:function (a) {
    if (!this._settings.dataFeed ||
        this._ignore_feed || !a)return!0;
    var b = this._settings.dataFeed;
    if (typeof b == "function")return b.call(this, a.id || a, a);
    b = b + (b.indexOf("?") == -1 ? "?" : "&") + "action=get&id=" + encodeURIComponent(a.id || a);
    this.callEvent("onXLS", []);
    dhtmlx.ajax(b, function (a) {
        this._ignore_feed = !0;
        this.setValues(dhtmlx.DataDriver.json.toObject(a)[0]);
        this._ignore_feed = !1;
        this.callEvent("onXLE", [])
    }, this);
    return!1
}};
dhtmlx.DataDriver = {};
dhtmlx.DataDriver.json = {toObject:function (a) {
    a || (a = "[]");
    return typeof a == "string" ? (eval("dhtmlx.temp=" + a), dhtmlx.temp) : a
}, getRecords:function (a) {
    return a && !(a instanceof Array) ? [a] : a
}, getDetails:function (a) {
    return a
}, getInfo:function (a) {
    return{_size:a.total_count || 0, _from:a.pos || 0, _key:a.dhx_security}
}};
dhtmlx.DataDriver.json_ext = {toObject:function (a) {
    a || (a = "[]");
    if (typeof a == "string") {
        var b;
        eval("temp=" + a);
        dhtmlx.temp = [];
        for (var c = b.header, d = 0; d < b.data.length; d++) {
            for (var e = {}, f = 0; f < c.length; f++)typeof b.data[d][f] != "undefined" && (e[c[f]] = b.data[d][f]);
            dhtmlx.temp.push(e)
        }
        return dhtmlx.temp
    }
    return a
}, getRecords:function (a) {
    return a && !(a instanceof Array) ? [a] : a
}, getDetails:function (a) {
    return a
}, getInfo:function (a) {
    return{_size:a.total_count || 0, _from:a.pos || 0}
}};
dhtmlx.DataDriver.html = {toObject:function (a) {
    if (typeof a == "string") {
        var b = null;
        a.indexOf("<") == -1 && (b = dhtmlx.toNode(a));
        if (!b)b = document.createElement("DIV"), b.innerHTML = a;
        return b.getElementsByTagName(this.tag)
    }
    return a
}, getRecords:function (a) {
    return a.tagName ? a.childNodes : a
}, getDetails:function (a) {
    return dhtmlx.DataDriver.xml.tagToObject(a)
}, getInfo:function () {
    return{_size:0, _from:0}
}, tag:"LI"};
dhtmlx.DataDriver.jsarray = {toObject:function (a) {
    return typeof a == "string" ? (eval("dhtmlx.temp=" + a), dhtmlx.temp) : a
}, getRecords:function (a) {
    return a
}, getDetails:function (a) {
    for (var b = {}, c = 0; c < a.length; c++)b["data" + c] = a[c];
    return b
}, getInfo:function () {
    return{_size:0, _from:0}
}};
dhtmlx.DataDriver.csv = {toObject:function (a) {
    return a
}, getRecords:function (a) {
    return a.split(this.row)
}, getDetails:function (a) {
    for (var a = this.stringToArray(a), b = {}, c = 0; c < a.length; c++)b["data" + c] = a[c];
    return b
}, getInfo:function () {
    return{_size:0, _from:0}
}, stringToArray:function (a) {
    for (var a = a.split(this.cell), b = 0; b < a.length; b++)a[b] = a[b].replace(/^[ \t\n\r]*(\"|)/g, "").replace(/(\"|)[ \t\n\r]*$/g, "");
    return a
}, row:"\n", cell:","};
dhtmlx.DataDriver.xml = {toObject:function (a, b) {
    return b && (b = this.checkResponse(a, b)) ? b : typeof a == "string" ? this.fromString(a) : a
}, getRecords:function (a) {
    return this.xpath(a, this.records)
}, records:"/*/item", getDetails:function (a) {
    return this.tagToObject(a, {})
}, getInfo:function (a) {
    return{_size:a.documentElement.getAttribute("total_count") || 0, _from:a.documentElement.getAttribute("pos") || 0, _key:a.documentElement.getAttribute("dhx_security")}
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
            var j = b.split("/").pop();
            return a.getElementsByTagName(j)
        }
    }
}, tagToObject:function (a, b) {
    var b = b || {}, c = !1, d = a.attributes;
    if (d && d.length) {
        for (var e = 0; e < d.length; e++)b[d[e].name] = d[e].value;
        c = !0
    }
    for (var f = a.childNodes, g = {}, e = 0; e < f.length; e++)if (f[e].nodeType ==
        1) {
        var h = f[e].tagName;
        typeof b[h] != "undefined" ? (b[h]instanceof Array || (b[h] = [b[h]]), b[h].push(this.tagToObject(f[e], {}))) : b[f[e].tagName] = this.tagToObject(f[e], {});
        c = !0
    }
    if (!c)return this.nodeValue(a);
    b.value = this.nodeValue(a);
    return b
}, nodeValue:function (a) {
    return a.firstChild ? a.firstChild.data : ""
}, fromString:function (a) {
    if (window.DOMParser && !dhtmlx._isIE)return(new DOMParser).parseFromString(a, "text/xml");
    if (window.ActiveXObject) {
        var b = new ActiveXObject("Microsoft.xmlDOM");
        b.loadXML(a);
        return b
    }
},
    checkResponse:function (a, b) {
        if (b && b.firstChild && b.firstChild.tagName != "parsererror")return b;
        var c = this.fromString(a.replace(/^[\s]+/, ""));
        if (c)return c
    }};
dhtmlx.DataLoader = {_init:function (a) {
    a = a || "";
    this.name = "DataStore";
    this.data = a.datastore || new dhtmlx.DataStore;
    this._readyHandler = this.data.attachEvent("onStoreLoad", dhtmlx.bind(this._call_onready, this))
}, load:function (a, b) {
    dhtmlx.AtomDataLoader.load.apply(this, arguments);
    if (!this.data.feed)this.data.feed = function (b, d) {
        if (this._load_count)return this._load_count = [b, d]; else this._load_count = !0;
        this.load(a + (a.indexOf("?") == -1 ? "?" : "&") + "posStart=" + b + "&count=" + d, function () {
            var a = this._load_count;
            this._load_count = !1;
            typeof a == "object" && this.data.feed.apply(this, a)
        })
    }
}, _onLoad:function (a, b) {
    this.data._parse(this.data.driver.toObject(a, b));
    this.callEvent("onXLE", []);
    if (this._readyHandler)this.data.detachEvent(this._readyHandler), this._readyHandler = null
}, dataFeed_setter:function (a) {
    this.data.attachEvent("onBeforeFilter", dhtmlx.bind(function (a, c) {
        if (this._settings.dataFeed) {
            var d = {};
            if (a || d) {
                if (typeof a == "function") {
                    if (!c)return;
                    a(c, d)
                } else d = {text:c};
                this.clearAll();
                var e = this._settings.dataFeed;
                if (typeof e ==
                    "function")return e.call(this, c, d);
                var f = [], g;
                for (g in d)f.push("dhx_filter[" + g + "]=" + encodeURIComponent(d[g]));
                this.load(e + (e.indexOf("?") < 0 ? "?" : "&") + f.join("&"), this._settings.datatype);
                return!1
            }
        }
    }, this));
    return a
}, _call_onready:function () {
    if (this._settings.ready) {
        var a = dhtmlx.toFunctor(this._settings.ready);
        a && a.call && a.apply(this, arguments)
    }
}};
dhtmlx.DataStore = function () {
    this.name = "DataStore";
    dhtmlx.extend(this, dhtmlx.EventSystem);
    this.setDriver("xml");
    this.pull = {};
    this.order = dhtmlx.toArray()
};
dhtmlx.DataStore.prototype = {setDriver:function (a) {
    this.driver = dhtmlx.DataDriver[a]
}, _parse:function (a) {
    this.callEvent("onParse", [this.driver, a]);
    this._filter_order && this.filter();
    var b = this.driver.getInfo(a);
    if (b._key)dhtmlx.security_key = b._key;
    var c = this.driver.getRecords(a), d = (b._from || 0) * 1;
    if (d === 0 && this.order[0])d = this.order.length;
    for (var e = 0, f = 0; f < c.length; f++) {
        var g = this.driver.getDetails(c[f]), h = this.id(g);
        this.pull[h] || (this.order[e + d] = h, e++);
        this.pull[h] = g;
        this.extraParser && this.extraParser(g);
        this._scheme && (this._scheme.$init ? this._scheme.$update(g) : this._scheme.$update && this._scheme.$update(g))
    }
    for (f = 0; f < b._size; f++)this.order[f] || (h = dhtmlx.uid(), g = {id:h, $template:"loading"}, this.pull[h] = g, this.order[f] = h);
    this.callEvent("onStoreLoad", [this.driver, a]);
    this.refresh()
}, id:function (a) {
    return a.id || (a.id = dhtmlx.uid())
}, changeId:function (a, b) {
    this.pull[b] = this.pull[a];
    this.pull[b].id = b;
    this.order[this.order.find(a)] = b;
    this._filter_order && (this._filter_order[this._filter_order.find(a)] = b);
    this.callEvent("onIdChange", [a, b]);
    this._render_change_id && this._render_change_id(a, b)
}, get:function (a) {
    return this.item(a)
}, set:function (a, b) {
    return this.update(a, b)
}, item:function (a) {
    return this.pull[a]
}, update:function (a, b) {
    this._scheme && this._scheme.$update && this._scheme.$update(b);
    if (this.callEvent("onBeforeUpdate", [a, b]) === !1)return!1;
    this.pull[a] = b;
    this.refresh(a)
}, refresh:function (a) {
    this._skip_refresh || (a ? this.callEvent("onStoreUpdated", [a, this.pull[a], "update"]) : this.callEvent("onStoreUpdated",
        [null, null, null]))
}, silent:function (a) {
    this._skip_refresh = !0;
    a.call(this);
    this._skip_refresh = !1
}, getRange:function (a, b) {
    a = a ? this.indexById(a) : this.startOffset || 0;
    b ? b = this.indexById(b) : (b = Math.min(this.endOffset || Infinity, this.dataCount() - 1), b < 0 && (b = 0));
    if (a > b)var c = b, b = a, a = c;
    return this.getIndexRange(a, b)
}, getIndexRange:function (a, b) {
    for (var b = Math.min(b || Infinity, this.dataCount() - 1), c = dhtmlx.toArray(), d = a || 0; d <= b; d++)c.push(this.item(this.order[d]));
    return c
}, dataCount:function () {
    return this.order.length
},
    exists:function (a) {
        return!!this.pull[a]
    }, move:function (a, b) {
        if (!(a < 0 || b < 0)) {
            var c = this.idByIndex(a), d = this.item(c);
            this.order.removeAt(a);
            this.order.insertAt(c, Math.min(this.order.length, b));
            this.callEvent("onStoreUpdated", [c, d, "move"])
        }
    }, scheme:function (a) {
        this._scheme = a
    }, sync:function (a, b, c) {
        typeof b != "function" && (c = b, b = null);
        if (dhtmlx.debug_bind)this.debug_sync_master = a;
        var d = a;
        if (a.name != "DataStore")a = a.data;
        var e = dhtmlx.bind(function (d, e, h) {
            if (h != "update" || b)d = null;
            if (!d)this.order = dhtmlx.toArray([].concat(a.order)),
                this._filter_order = null, this.pull = a.pull, b && this.silent(b), this._on_sync && this._on_sync();
            c ? c = !1 : this.refresh(d)
        }, this);
        a.attachEvent("onStoreUpdated", e);
        this.feed = function (a, b) {
            d.loadNext(b, a)
        };
        e()
    }, add:function (a, b) {
        if (this._scheme) {
            var a = a || {}, c;
            for (c in this._scheme)a[c] = a[c] || this._scheme[c];
            this._scheme && (this._scheme.$init ? this._scheme.$update(a) : this._scheme.$update && this._scheme.$update(a))
        }
        var d = this.id(a), e = this.dataCount();
        if (dhtmlx.isNotDefined(b) || b < 0)b = e;
        b > e && (b = Math.min(this.order.length,
            b));
        if (this.callEvent("onBeforeAdd", [d, a, b]) === !1)return!1;
        if (this.exists(d))return null;
        this.pull[d] = a;
        this.order.insertAt(d, b);
        if (this._filter_order) {
            var f = this._filter_order.length;
            !b && this.order.length && (f = 0);
            this._filter_order.insertAt(d, f)
        }
        this.callEvent("onafterAdd", [d, b]);
        this.callEvent("onStoreUpdated", [d, a, "add"]);
        return d
    }, remove:function (a) {
        if (a instanceof Array)for (var b = 0; b < a.length; b++)this.remove(a[b]); else {
            if (this.callEvent("onBeforeDelete", [a]) === !1)return!1;
            if (!this.exists(a))return null;
            var c = this.item(a);
            this.order.remove(a);
            this._filter_order && this._filter_order.remove(a);
            delete this.pull[a];
            this.callEvent("onafterdelete", [a]);
            this.callEvent("onStoreUpdated", [a, c, "delete"])
        }
    }, clearAll:function () {
        this.pull = {};
        this.order = dhtmlx.toArray();
        this._filter_order = this.feed = null;
        this.callEvent("onClearAll", []);
        this.refresh()
    }, idByIndex:function (a) {
        return this.order[a]
    }, indexById:function (a) {
        var b = this.order.find(a);
        return b
    }, next:function (a, b) {
        return this.order[this.indexById(a) + (b || 1)]
    },
    first:function () {
        return this.order[0]
    }, last:function () {
        return this.order[this.order.length - 1]
    }, previous:function (a, b) {
        return this.order[this.indexById(a) - (b || 1)]
    }, sort:function (a, b, c) {
        var d = a;
        typeof a == "function" ? d = {as:a, dir:b} : typeof a == "string" && (d = {by:a, dir:b, as:c});
        var e = [d.by, d.dir, d.as];
        if (this.callEvent("onbeforesort", e)) {
            if (this.order.length) {
                var f = dhtmlx.sort.create(d), g = this.getRange(this.first(), this.last());
                g.sort(f);
                this.order = g.map(function (a) {
                    return this.id(a)
                }, this)
            }
            this.refresh();
            this.callEvent("onaftersort", e)
        }
    }, filter:function (a, b) {
        if (this.callEvent("onBeforeFilter", [a, b])) {
            if (this._filter_order)this.order = this._filter_order, delete this._filter_order;
            if (this.order.length) {
                if (a) {
                    var c = a, b = b || "";
                    typeof a == "string" && (a = dhtmlx.Template.fromHTML(a), b = b.toString().toLowerCase(), c = function (b, c) {
                        return a(b).toLowerCase().indexOf(c) != -1
                    });
                    for (var d = dhtmlx.toArray(), e = 0; e < this.order.length; e++) {
                        var f = this.order[e];
                        c(this.item(f), b) && d.push(f)
                    }
                    this._filter_order = this.order;
                    this.order =
                        d
                }
                this.refresh();
                this.callEvent("onAfterFilter", [])
            }
        }
    }, each:function (a, b) {
        for (var c = 0; c < this.order.length; c++)a.call(b || this, this.item(this.order[c]))
    }, provideApi:function (a, b) {
        this.debug_bind_master = a;
        b && this.mapEvent({onbeforesort:a, onaftersort:a, onbeforeadd:a, onafteradd:a, onbeforedelete:a, onafterdelete:a, onbeforeupdate:a});
        for (var c = "get,set,sort,add,remove,exists,idByIndex,indexById,item,update,refresh,dataCount,filter,next,previous,clearAll,first,last,serialize".split(","), d = 0; d < c.length; d++)a[c[d]] =
            dhtmlx.methodPush(this, c[d])
    }, serialize:function () {
        for (var a = this.order, b = [], c = 0; c < a.length; c++)b.push(this.pull[a[c]]);
        return b
    }};
dhtmlx.sort = {create:function (a) {
    return dhtmlx.sort.dir(a.dir, dhtmlx.sort.by(a.by, a.as))
}, as:{"int":function (a, b) {
    a *= 1;
    b *= 1;
    return a > b ? 1 : a < b ? -1 : 0
}, string_strict:function (a, b) {
    a = a.toString();
    b = b.toString();
    return a > b ? 1 : a < b ? -1 : 0
}, string:function (a, b) {
    a = a.toString().toLowerCase();
    b = b.toString().toLowerCase();
    return a > b ? 1 : a < b ? -1 : 0
}}, by:function (a, b) {
    if (!a)return b;
    typeof b != "function" && (b = dhtmlx.sort.as[b || "string"]);
    a = dhtmlx.Template.fromHTML(a);
    return function (c, d) {
        return b(a(c), a(d))
    }
}, dir:function (a, b) {
    return a == "asc" ? b : function (a, d) {
        return b(a, d) * -1
    }
}};
if (!dhtmlx.attaches)dhtmlx.attaches = {};
dhtmlx.attaches.attachAbstract = function (a, b) {
    var c = document.createElement("DIV");
    c.id = "CustomObject_" + dhtmlx.uid();
    c.style.width = "100%";
    c.style.height = "100%";
    c.cmp = "grid";
    document.body.appendChild(c);
    this.attachObject(c.id);
    b.container = c.id;
    var d = this.vs[this.av];
    d.grid = new window[a](b);
    d.gridId = c.id;
    d.gridObj = c;
    d.grid.setSizes = function () {
        this.resize ? this.resize() : this.render()
    };
    var e = "_viewRestore";
    return this.vs[this[e]()].grid
};
dhtmlx.attaches.attachDataView = function (a) {
    return this.attachAbstract("dhtmlXDataView", a)
};
dhtmlx.attaches.attachChart = function (a) {
    return this.attachAbstract("dhtmlXChart", a)
};
dhtmlx.compat.layout = function () {
};
dhtmlXDataView = function (a) {
    this.name = "DataView";
    this.version = "3.0";
    dhtmlx.extend(this, dhtmlx.Settings);
    this._parseContainer(a, "dhx_dataview");
    dhtmlx.extend(this, dhtmlx.AtomDataLoader);
    dhtmlx.extend(this, dhtmlx.DataLoader);
    dhtmlx.extend(this, dhtmlx.EventSystem);
    dhtmlx.extend(this, dhtmlx.RenderStack);
    dhtmlx.extend(this, dhtmlx.SelectionModel);
    dhtmlx.extend(this, dhtmlx.MouseEvents);
    dhtmlx.extend(this, dhtmlx.KeyEvents);
    dhtmlx.extend(this, dhtmlx.EditAbility);
    dhtmlx.extend(this, dhtmlx.DataMove);
    dhtmlx.extend(this,
        dhtmlx.DragItem);
    dhtmlx.extend(this, dhtmlx.DataProcessor);
    dhtmlx.extend(this, dhtmlx.AutoTooltip);
    dhtmlx.extend(this, dhtmlx.Destruction);
    this.data.attachEvent("onStoreUpdated", dhtmlx.bind(function () {
        this.render.apply(this, arguments)
    }, this));
    this._parseSettings(a, {drag:!1, edit:!1, select:"multiselect", type:"default"});
    this._settings.height != "auto" && !this._settings.renderAll && dhtmlx.extend(this, dhtmlx.VirtualRenderStack);
    this.data.provideApi(this, !0)
};
dhtmlXDataView.prototype = {bind:function () {
    dhx.BaseBind.legacyBind.apply(this, arguments)
}, sync:function () {
    dhx.BaseBind.legacySync.apply(this, arguments)
}, dragMarker:function (a) {
    var b = this._locateHTML(a.target);
    if (this.type.drag_marker) {
        if (this._drag_marker)this._drag_marker.style.backgroundImage = "", this._drag_marker.style.backgroundRepeat = "";
        if (b)b.style.backgroundImage = "url(" + (dhtmlx.image_path || "") + this.type.drag_marker + ")", b.style.backgroundRepeat = "no-repeat", this._drag_marker = b
    }
    if (b && this._settings.auto_scroll) {
        var c =
            b.offsetTop, d = b.offsetHeight, e = this._obj.scrollTop, f = this._obj.offsetHeight;
        c - d >= 0 && c - d * 0.75 < e ? e = Math.max(c - d, 0) : c + d / 0.75 > e + f && (e += d);
        this._obj.scrollTop = e
    }
    return!0
}, _id:"dhx_f_id", on_click:{dhx_dataview_item:function (a, b) {
    this.stopEdit(!1, b) && this._settings.select && (this._settings.select == "multiselect" ? this.select(b, a.ctrlKey, a.shiftKey) : this.select(b))
}}, on_dblclick:{dhx_dataview_item:function (a, b) {
    this._settings.edit && this.edit(b)
}}, on_mouse_move:{}, types:{"default":{css:"default", template:dhtmlx.Template.fromHTML("<div style='padding:10px; white-space:nowrap; overflow:hidden;'>{obj.text}</div>"),
    template_edit:dhtmlx.Template.fromHTML("<div style='padding:10px; white-space:nowrap; overflow:hidden;'><textarea style='width:100%; height:100%;' bind='obj.text'></textarea></div>"), template_loading:dhtmlx.Template.fromHTML("<div style='padding:10px; white-space:nowrap; overflow:hidden;'>Loading...</div>"), width:210, height:115, margin:0, padding:10, border:1}}, template_item_start:dhtmlx.Template.fromHTML("<div dhx_f_id='{-obj.id}' class='dhx_dataview_item dhx_dataview_{obj.css}_item{-obj.$selected?_selected:}' style='width:{obj.width}px; height:{obj.height}px; padding:{obj.padding}px; margin:{obj.margin}px; float:left; overflow:hidden;'>"),
    template_item_end:dhtmlx.Template.fromHTML("</div>")};
dhtmlx.compat("layout");
