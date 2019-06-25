//v.3.5 build 120822

/*
 Copyright DHTMLX LTD. http://www.dhtmlx.com
 You allowed to use this component or parts of it under GPL terms
 To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
 */
function dhtmlXComboFromSelect(a, b) {
    typeof a == "string" && (a = document.getElementById(a));
    b = b || a.getAttribute("width") || (window.getComputedStyle ? window.getComputedStyle(a, null).width : a.currentStyle ? a.currentStyle.width : 0);
    if (!b || b == "auto")b = a.offsetWidth || 100;
    var c = document.createElement("SPAN");
    a.parentNode.insertBefore(c, a);
    a.style.display = "none";
    for (var e = a.getAttribute("opt_type"), d = new dhtmlXCombo(c, a.name, b, e, a.tabIndex), f = [], h = -1, g = 0; g < a.options.length; g++) {
        a.options[g].selected && (h = g);
        var j =
            a.options[g].innerHTML, i = a.options[g].getAttribute("value");
        if (typeof i == "undefined" || i === null)i = j;
        f[g] = {value: i, text: j, img_src: a.options[g].getAttribute("img_src")}
    }
    f.length && d.addOption(f);
    a.parentNode.removeChild(a);
    h >= 0 && d.selectOption(h, null, !0);
    a.onchange && d.attachEvent("onChange", a.onchange);
    a.style.direction == "rtl" && d.setRTL && d.setRTL(!0);
    return d
}
var dhtmlXCombo_optionTypes = [];
function dhtmlXCombo(a, b, c, e, d) {
    typeof a == "string" && (a = document.getElementById(a));
    this.dhx_Event();
    this.optionType = e != window.undefined && dhtmlXCombo_optionTypes[e] ? e : "default";
    this._optionObject = dhtmlXCombo_optionTypes[this.optionType];
    this._disabled = !1;
    this.readonlyDelay = 750;
    this.filterEntities = "[,],{,},(,),+,*,\\,?,.,$,^".split(",");
    if (!window.dhx_glbSelectAr)window.dhx_glbSelectAr = [], window.dhx_openedSelect = null, window.dhx_SelectId = 1, dhtmlxEvent(document.body, "click", this.closeAll), dhtmlxEvent(document.body,
        "keydown", function (a) {
            try {
                (a || event).keyCode == 9 && window.dhx_glbSelectAr[0].closeAll()
            } catch (b) {
            }
            return!0
        });
    if (a.tagName == "SELECT")return dhtmlXComboFromSelect(a); else this._createSelf(a, b, c, d);
    dhx_glbSelectAr.push(this)
}
dhtmlXCombo.prototype.setSize = function (a) {
    this.DOMlist.style.width = a + "px";
    if (this.DOMlistF)this.DOMlistF.style.width = a + "px";
    this.DOMelem.style.width = a + "px";
    this.DOMelem_input.style.width = Math.max(0, a - 19) + "px"
};
dhtmlXCombo.prototype.enableFilteringMode = function (a, b, c, e) {
    a == "between" ? this._autoDisabled = this._anyPosition = this._filter = !0 : this._filter = convertStringToBoolean(a);
    if (b)this._xml = b, this._autoxml = convertStringToBoolean(e);
    if (convertStringToBoolean(c))this._xmlCache = []
};
dhtmlXCombo.prototype.setFilteringParam = function (a, b) {
    if (!this._prs)this._prs = [];
    this._prs.push([a, b])
};
dhtmlXCombo.prototype.disable = function (a) {
    var b = convertStringToBoolean(a);
    if (this._disabled != b)this._disabled = this.DOMelem_input.disabled = b
};
dhtmlXCombo.prototype.readonly = function (a, b) {
    this.DOMelem_input.readOnly = a ? !0 : !1;
    if (b === !1 || a === !1)this.DOMelem.onkeyup = function () {
    }; else {
        var c = this;
        this.DOMelem.onkeyup = function (a) {
            a = a || window.event;
            c._searchTimeout && window.clearTimeout(c._searchTimeout);
            if (a.keyCode != 9)a.cancelBubble = !0;
            if (a.keyCode >= 48 && a.keyCode <= 57 || a.keyCode >= 65 && a.keyCode <= 90) {
                if (!c._searchText)c._searchText = "";
                c._searchText += String.fromCharCode(a.keyCode);
                for (var b = 0; b < c.optionsArr.length; b++) {
                    var f = c.optionsArr[b].text;
                    if (f.toString().toUpperCase().indexOf(c._searchText) ==
                        0) {
                        c.selectOption(b);
                        break
                    }
                }
                c._searchTimeout = window.setTimeout(function () {
                    c._searchText = ""
                }, c.readonlyDelay);
                a.cancelBubble = !0
            }
        }
    }
};
dhtmlXCombo.prototype.getOption = function (a) {
    for (var b = 0; b < this.optionsArr.length; b++)if (this.optionsArr[b].value == a)return this.optionsArr[b];
    return null
};
dhtmlXCombo.prototype.getOptionByLabel = function (a) {
    for (var b = 0; b < this.optionsArr.length; b++)if (this.optionsArr[b].text == a || this.optionsArr[b]._ctext == a)return this.optionsArr[b];
    return null
};
dhtmlXCombo.prototype.getOptionByIndex = function (a) {
    return this.optionsArr[a]
};
dhtmlXCombo.prototype.clearAll = function (a) {
    a && this.setComboText("");
    this.optionsArr = [];
    this.redrawOptions();
    a && (this._selOption && this._selOption.RedrawHeader(this, !0), this._confirmSelection())
};
dhtmlXCombo.prototype.deleteOption = function (a) {
    var b = this.getIndexByValue(a);
    if (!(b < 0)) {
        if (this.optionsArr[b] == this._selOption)this._selOption = null;
        this.optionsArr.splice(b, 1);
        this.redrawOptions()
    }
};
dhtmlXCombo.prototype.render = function (a) {
    this._skiprender = !convertStringToBoolean(a);
    this.redrawOptions()
};
dhtmlXCombo.prototype.updateOption = function (a, b, c, e) {
    var d = this.getOption(a);
    typeof b != "object" && (b = {text: c, value: b, css: e});
    d.setValue(b);
    this.redrawOptions()
};
dhtmlXCombo.prototype.addOption = function (a) {
    args = !arguments[0].length || typeof arguments[0] != "object" ? [arguments] : a;
    this.render(!1);
    for (var b = 0; b < args.length; b++) {
        var c = args[b];
        if (c.length)c.value = c[0] || "", c.text = c[1] || "", c.css = c[2] || "";
        this._addOption(c)
    }
    this.render(!0)
};
dhtmlXCombo.prototype._addOption = function (a) {
    dOpt = new this._optionObject;
    this.optionsArr.push(dOpt);
    dOpt.setValue.apply(dOpt, [a]);
    this.redrawOptions()
};
dhtmlXCombo.prototype.getIndexByValue = function (a) {
    for (var b = 0; b < this.optionsArr.length; b++)if (this.optionsArr[b].value == a)return b;
    return-1
};
dhtmlXCombo.prototype.getSelectedValue = function () {
    return this._selOption ? this._selOption.value : null
};
dhtmlXCombo.prototype.getComboText = function () {
    return this.DOMelem_input.value
};
dhtmlXCombo.prototype.setComboText = function (a) {
    this.DOMelem_input.value = a
};
dhtmlXCombo.prototype.setComboValue = function (a) {
    this.setComboText(a);
    for (var b = 0; b < this.optionsArr.length; b++)if (this.optionsArr[b].data()[0] == a)return this.selectOption(b, null, !0);
    this.DOMelem_hidden_input.value = a
};
dhtmlXCombo.prototype.getActualValue = function () {
    return this.DOMelem_hidden_input.value
};
dhtmlXCombo.prototype.getSelectedText = function () {
    return this._selOption ? this._selOption.text : ""
};
dhtmlXCombo.prototype.getSelectedIndex = function () {
    for (var a = 0; a < this.optionsArr.length; a++)if (this.optionsArr[a] == this._selOption)return a;
    return-1
};
dhtmlXCombo.prototype.setName = function (a) {
    this.DOMelem_hidden_input.name = a;
    this.DOMelem_hidden_input2 = a.replace(/(\]?)$/, "_new_value$1");
    this.name = a
};
dhtmlXCombo.prototype.show = function (a) {
    this.DOMelem.style.display = convertStringToBoolean(a) ? "" : "none"
};
dhtmlXCombo.prototype.destructor = function () {
    this.DOMParent.removeChild(this.DOMelem);
    this.DOMlist.parentNode.removeChild(this.DOMlist);
    this.DOMlistF && this.DOMlistF.parentNode.removeChild(this.DOMlistF);
    var a = dhx_glbSelectAr;
    this.DOMParent = this.DOMlist = this.DOMlistF = this.DOMelem = 0;
    for (var b = this.DOMlist.combo = this.DOMelem.combo = 0; b < a.length; b++)if (a[b] == this) {
        a[b] = null;
        a.splice(b, 1);
        break
    }
};
dhtmlXCombo.prototype._createSelf = function (a, b, c, e) {
    if (c.toString().indexOf("%") != -1) {
        var d = this, f = parseInt(c) / 100;
        window.setInterval(function () {
            if (a.parentNode) {
                var b = a.parentNode.offsetWidth * f - 2;
                if (!(b < 0) && b != d._lastTs)d.setSize(d._lastTs = b)
            }
        }, 500);
        c = parseInt(a.offsetWidth)
    }
    c = parseInt(c || 100);
    this.ListPosition = "Bottom";
    this.DOMParent = a;
    this._inID = null;
    this.name = b;
    this._selOption = null;
    this.optionsArr = [];
    var h = new this._optionObject;
    h.DrawHeader(this, b, c, e);
    this.DOMlist = document.createElement("DIV");
    this.DOMlist.className = "dhx_combo_list " + (dhtmlx.skin ? dhtmlx.skin + "_list" : "");
    this.DOMlist.style.width = c - (_isIE ? 0 : 0) + "px";
    if (_isOpera || _isKHTML)this.DOMlist.style.overflow = "auto";
    this.DOMlist.style.display = "none";
    document.body.insertBefore(this.DOMlist, document.body.firstChild);
    if (_isIE)this.DOMlistF = document.createElement("IFRAME"), this.DOMlistF.style.border = "0px", this.DOMlistF.className = "dhx_combo_list", this.DOMlistF.style.width = c - (_isIE ? 0 : 0) + "px", this.DOMlistF.style.display = "none", this.DOMlistF.src =
        "javascript:false;", document.body.insertBefore(this.DOMlistF, document.body.firstChild);
    this.DOMlist.combo = this.DOMelem.combo = this;
    this.DOMelem_input.onkeydown = this._onKey;
    this.DOMelem_input.onkeypress = this._onKeyF;
    this.DOMelem_input.onblur = this._onBlur;
    this.DOMelem.onclick = this._toggleSelect;
    this.DOMlist.onclick = this._selectOption;
    this.DOMlist.onmousedown = function () {
        this._skipBlur = !0
    };
    this.DOMlist.onkeydown = function (a) {
        (a || event).cancelBubble = !0;
        this.combo.DOMelem_input.onkeydown(a)
    };
    this.DOMlist.onmouseover =
        this._listOver
};
dhtmlXCombo.prototype._listOver = function (a) {
    a = a || event;
    a.cancelBubble = !0;
    var b = _isIE ? event.srcElement : a.target, c = this.combo;
    if (b.parentNode == c.DOMlist) {
        c._selOption && c._selOption.deselect();
        c._tempSel && c._tempSel.deselect();
        for (var e = 0; e < c.DOMlist.childNodes.length; e++)if (c.DOMlist.childNodes[e] == b)break;
        var d = c.optionsArr[e];
        c._tempSel = d;
        c._tempSel.select();
        c._autoxml && e + 1 == c._lastLength && c._fetchOptions(e + 1, c._lasttext || "")
    }
};
dhtmlXCombo.prototype._positList = function () {
    var a = this.getPosition(this.DOMelem);
    this.ListPosition == "Bottom" ? (this.DOMlist.style.top = a[1] + this.DOMelem.offsetHeight - 1 + "px", this.DOMlist.style.left = a[0] + "px") : this.ListPosition == "Top" ? (this.DOMlist.style.top = a[1] - this.DOMlist.offsetHeight + "px", this.DOMlist.style.left = a[0] + "px") : (this.DOMlist.style.top = a[1] + "px", this.DOMlist.style.left = a[0] + this.DOMelem.offsetWidth + "px")
};
dhtmlXCombo.prototype.getPosition = function (a, b) {
    if (_isIE && _isIE < 8) {
        if (!b)b = document.body;
        for (var c = a, e = 0, d = 0; c && c != b;)e += c.offsetLeft - c.scrollLeft + c.clientLeft, d += c.offsetTop - c.scrollTop + c.clientTop, c = c.offsetParent;
        document.documentElement.scrollTop && (d += document.documentElement.scrollTop);
        document.documentElement.scrollLeft && (e += document.documentElement.scrollLeft);
        return[e, d]
    }
    var f = getOffset(a);
    return[f.left, f.top]
};
dhtmlXCombo.prototype._correctSelection = function () {
    if (this.getComboText() != "")for (var a = 0; a < this.optionsArr.length; a++)if (!this.optionsArr[a].isHidden())return this.selectOption(a, !0, !1);
    this.unSelectOption()
};
dhtmlXCombo.prototype.selectNext = function (a) {
    for (var b = this.getSelectedIndex() + a; this.optionsArr[b];) {
        if (!this.optionsArr[b].isHidden())return this.selectOption(b, !1, !1);
        b += a
    }
};
dhtmlXCombo.prototype._onKeyF = function (a) {
    var b = this.parentNode.combo, c = a || event;
    c.cancelBubble = !0;
    c.keyCode == "13" || c.keyCode == "9" ? (b._confirmSelection(), b.closeAll()) : c.keyCode == "27" ? (b._resetSelection(), b.closeAll()) : b._activeMode = !0;
    return c.keyCode == "13" || c.keyCode == "27" ? (b.callEvent("onKeyPressed", [c.keyCode]), !1) : !0
};
dhtmlXCombo.prototype._onKey = function (a) {
    var b = this.parentNode.combo;
    (a || event).cancelBubble = !0;
    var c = (a || event).keyCode;
    if (c > 15 && c < 19)return!0;
    if (c == 27)return!0;
    if (b.DOMlist.style.display != "block" && c != "13" && c != "9" && (!b._filter || b._filterAny))b.DOMelem.onclick(a || event);
    if (c != "13" && c != "9") {
        if (window.setTimeout(function () {
            b._onKeyB(c)
        }, 1), c == "40" || c == "38")return!1
    } else if (c == 9)b._confirmSelection(), b.closeAll(), (a || event).cancelBubble = !1
};
dhtmlXCombo.prototype._onKeyB = function (a) {
    if (a == "40")var b = this.selectNext(1); else if (a == "38")this.selectNext(-1); else {
        this.callEvent("onKeyPressed", [a]);
        if (this._filter)return this.filterSelf(a == 8 || a == 46);
        for (var c = 0; c < this.optionsArr.length; c++)if (this.optionsArr[c].data()[1] == this.DOMelem_input.value)return this.selectOption(c, !1, !1), !1;
        this.unSelectOption()
    }
    return!0
};
dhtmlXCombo.prototype._onBlur = function () {
    var a = this.parentNode._self;
    window.setTimeout(function () {
        if (a.DOMlist._skipBlur)return!(a.DOMlist._skipBlur = !1);
        a._skipFocus = !0;
        a._confirmSelection();
        a.callEvent("onBlur", [])
    }, 100)
};
dhtmlXCombo.prototype.redrawOptions = function () {
    if (!this._skiprender) {
        for (var a = this.DOMlist.childNodes.length - 1; a >= 0; a--)this.DOMlist.removeChild(this.DOMlist.childNodes[a]);
        for (a = 0; a < this.optionsArr.length; a++)this.DOMlist.appendChild(this.optionsArr[a].render())
    }
};
dhtmlXCombo.prototype.loadXML = function (a, b) {
    this._load = !0;
    this.callEvent("onXLS", []);
    if (this._prs)for (var c = 0; c < this._prs.length; c++)a += [getUrlSymbol(a), escape(this._prs[c][0]), "=", escape(this._prs[c][1])].join("");
    if (this._xmlCache && this._xmlCache[a])this._fillFromXML(this, null, null, null, this._xmlCache[a]), b && b(); else {
        var e = new dtmlXMLLoaderObject(this._fillFromXML, this, !0, !0);
        if (b)e.waitCall = b;
        e._cPath = a;
        e.loadXML(a)
    }
};
dhtmlXCombo.prototype.loadXMLString = function (a) {
    var b = new dtmlXMLLoaderObject(this._fillFromXML, this, !0, !0);
    b.loadXMLString(a)
};
dhtmlXCombo.prototype._fillFromXML = function (a, b, c, e, d) {
    a._xmlCache && (a._xmlCache[d._cPath] = d);
    var f = d.getXMLTopNode("complete");
    if (f.tagName != "complete")a._load = !1; else {
        var h = d.doXPath("//complete"), g = d.doXPath("//option"), j = !1;
        a.render(!1);
        if (!h[0] || !h[0].getAttribute("add")) {
            if (a.clearAll(), a._lastLength = g.length, a._xml)if (!g || !g.length)a.closeAll(); else if (a._activeMode)a._positList(), a.DOMlist.style.display = "block", _isIE && a._IEFix(!0)
        } else a._lastLength += g.length || Infinity, j = !0;
        for (var i = 0; i <
            g.length; i++) {
            var k = {};
            k.text = g[i].firstChild ? g[i].firstChild.nodeValue : "";
            for (var l = 0; l < g[i].attributes.length; l++) {
                var m = g[i].attributes[l];
                if (m)k[m.nodeName] = m.nodeValue
            }
            a._addOption(k)
        }
        a.render(j != !0 || !!g.length);
        a._load && a._load !== !0 ? a.loadXML(a._load) : (a._load = !1, !a._lkmode && a._filter && !a._autoDisabled && a._correctSelection());
        var n = d.doXPath("//option[@selected]");
        n.length && a.selectOption(a.getIndexByValue(n[0].getAttribute("value")), !1, !0);
        a.callEvent("onXLE", [])
    }
};
dhtmlXCombo.prototype.unSelectOption = function () {
    this._selOption && this._selOption.deselect();
    this._tempSel && this._tempSel.deselect();
    this._tempSel = this._selOption = null
};
dhtmlXCombo.prototype.confirmValue = function () {
    this._confirmSelection()
};
dhtmlXCombo.prototype._confirmSelection = function (a, b) {
    var c = this.getComboText();
    this.setComboText("");
    this.setComboText(c);
    if (arguments.length == 0) {
        var e = this.getOptionByLabel(this.DOMelem_input.value), a = e ? e.value : this.DOMelem_input.value, b = e == null;
        if (a == this.getActualValue())return this._skipFocus = !1
    }
    if (!this._skipFocus && !this._disabled)try {
        this.DOMelem_input.focus()
    } catch (d) {
    }
    this._skipFocus = !1;
    this.DOMelem_hidden_input.value = a;
    this.DOMelem_hidden_input2.value = b ? "true" : "false";
    this.callEvent("onChange",
        []);
    this._activeMode = !1
};
dhtmlXCombo.prototype._resetSelection = function () {
    var a = this.getOption(this.DOMelem_hidden_input.value);
    this.setComboValue(a ? a.data()[0] : this.DOMelem_hidden_input.value);
    this.setComboText(a ? a.data()[1] : this.DOMelem_hidden_input.value)
};
dhtmlXCombo.prototype.selectOption = function (a, b, c) {
    arguments.length < 3 && (c = !0);
    this.unSelectOption();
    var e = this.optionsArr[a];
    if (e) {
        this._selOption = e;
        this._selOption.select();
        var d = this._selOption.content.offsetTop + this._selOption.content.offsetHeight - this.DOMlist.scrollTop - this.DOMlist.offsetHeight;
        d > 0 && (this.DOMlist.scrollTop += d);
        d = this.DOMlist.scrollTop - this._selOption.content.offsetTop;
        d > 0 && (this.DOMlist.scrollTop -= d);
        var f = this._selOption.data();
        c && (this.setComboText(f[1]), this._confirmSelection(f[0],
            !1), this._autoxml && a + 1 == this._lastLength && this._fetchOptions(a + 1, this._lasttext || ""));
        if (b) {
            var h = this.getComboText();
            h != f[1] && (this.setComboText(f[1]), dhtmlXRange(this.DOMelem_input, h.length + 1, f[1].length))
        } else this.setComboText(f[1]);
        this._selOption.RedrawHeader(this);
        this.callEvent("onSelectionChange", [])
    }
};
dhtmlXCombo.prototype._selectOption = function (a) {
    (a || event).cancelBubble = !0;
    for (var b = _isIE ? event.srcElement : a.target, c = this.combo; !b._self;)if (b = b.parentNode, !b)return;
    for (var e = 0; e < c.DOMlist.childNodes.length; e++)if (c.DOMlist.childNodes[e] == b)break;
    c.selectOption(e, !1, !0);
    c.closeAll();
    c.callEvent("onBlur", []);
    c._activeMode = !1
};
dhtmlXCombo.prototype.openSelect = function () {
    if (!this._disabled) {
        this.closeAll();
        this.DOMlist.style.display = "block";
        this._positList();
        this.callEvent("onOpen", []);
        this._tempSel && this._tempSel.deselect();
        this._selOption && this._selOption.select();
        if (this._selOption) {
            var a = this._selOption.content.offsetTop + this._selOption.content.offsetHeight - this.DOMlist.scrollTop - this.DOMlist.offsetHeight;
            a > 0 && (this.DOMlist.scrollTop += a);
            a = this.DOMlist.scrollTop - this._selOption.content.offsetTop;
            a > 0 && (this.DOMlist.scrollTop -=
                a)
        }
        _isIE && this._IEFix(!0);
        this.DOMelem_input.focus();
        this._filter && this.filterSelf()
    }
};
dhtmlXCombo.prototype._toggleSelect = function (a) {
    var b = this.combo;
    b.DOMlist.style.display == "block" ? b.closeAll() : b.openSelect();
    (a || event).cancelBubble = !0
};
dhtmlXCombo.prototype._fetchOptions = function (a, b) {
    if (b == "")return this.closeAll(), this.clearAll();
    var c = this._xml + (this._xml.indexOf("?") != -1 ? "&" : "?") + "pos=" + a + "&mask=" + encodeURIComponent(b);
    this._lasttext = b;
    this._load ? this._load = c : this.callEvent("onDynXLS", [b, a]) && this.loadXML(c)
};
dhtmlXCombo.prototype.disableAutocomplete = function () {
    this._autoDisabled = !0
};
dhtmlXCombo.prototype.filterSelf = function (a) {
    var b = this.getComboText();
    if (this._xml)this._lkmode = a, this._fetchOptions(0, b);
    var c = RegExp("([" + this.filterEntities.join("\\") + "])", "g"), b = b.replace(c, "\\$1"), e = (this._anyPosition ? "" : "^") + b, d = RegExp(e, "i");
    this.filterAny = !1;
    for (var f = 0; f < this.optionsArr.length; f++) {
        var h = d.test(this.optionsArr[f].content ? this.optionsArr[f].data()[1] : this.optionsArr[f].text);
        this.filterAny |= h;
        this.optionsArr[f].hide(!h)
    }
    this.filterAny ? (this.DOMlist.style.display != "block" &&
        this.openSelect(), _isIE && this._IEFix(!0)) : (this.closeAll(), this._activeMode = !0);
    !a && !this._autoDisabled ? this._correctSelection() : this.unSelectOption()
};
dhtmlXCombo.prototype._IEFix = function (a) {
    this.DOMlistF.style.display = a ? "block" : "none";
    this.DOMlistF.style.top = this.DOMlist.style.top;
    this.DOMlistF.style.left = this.DOMlist.style.left;
    this.DOMlistF.style.width = this.DOMlist.offsetWidth + "px";
    this.DOMlistF.style.height = this.DOMlist.offsetHeight + "px"
};
dhtmlXCombo.prototype.closeAll = function () {
    if (window.dhx_glbSelectAr)for (var a = 0; a < dhx_glbSelectAr.length; a++) {
        if (dhx_glbSelectAr[a].DOMlist.style.display == "block")dhx_glbSelectAr[a].DOMlist.style.display = "none", _isIE && dhx_glbSelectAr[a]._IEFix(!1);
        dhx_glbSelectAr[a]._activeMode = !1
    }
};
dhtmlXCombo.prototype.changeOptionId = function (a, b) {
    (this.getOption(a) || {}).value = b
};
function dhtmlXRange(a, b, c) {
    var e = typeof a == "object" ? a : document.getElementById(a);
    try {
        e.focus()
    } catch (d) {
    }
    var f = e.value.length;
    b--;
    if (b < 0 || b > c || b > f)b = 0;
    c > f && (c = f);
    if (b != c)if (e.setSelectionRange)e.setSelectionRange(b, c); else if (e.createTextRange) {
        var h = e.createTextRange();
        h.moveStart("character", b);
        h.moveEnd("character", c - f);
        try {
            h.select()
        } catch (g) {
        }
    }
}
dhtmlXCombo_defaultOption = function () {
    this.init()
};
dhtmlXCombo_defaultOption.prototype.init = function () {
    this.value = null;
    this.text = "";
    this.selected = !1;
    this.css = ""
};
dhtmlXCombo_defaultOption.prototype.select = function () {
    if (this.content)this.content.className = "dhx_selected_option" + (dhtmlx.skin ? " combo_" + dhtmlx.skin + "_sel" : "")
};
dhtmlXCombo_defaultOption.prototype.hide = function (a) {
    this.render().style.display = a ? "none" : ""
};
dhtmlXCombo_defaultOption.prototype.isHidden = function () {
    return this.render().style.display == "none"
};
dhtmlXCombo_defaultOption.prototype.deselect = function () {
    this.content && this.render();
    this.content.className = ""
};
dhtmlXCombo_defaultOption.prototype.setValue = function (a) {
    this.value = a.value || "";
    this.text = a.text || "";
    this.css = a.css || "";
    this.content = null
};
dhtmlXCombo_defaultOption.prototype.render = function () {
    if (!this.content) {
        this.content = document.createElement("DIV");
        this.content._self = this;
        this.content.style.cssText = "width:100%; overflow:hidden;" + this.css;
        if (_isOpera || _isKHTML)this.content.style.padding = "2px 0px 2px 0px";
        this.content.innerHTML = this.text;
        this._ctext = typeof this.content.textContent != "undefined" ? this.content.textContent : this.content.innerText
    }
    return this.content
};
dhtmlXCombo_defaultOption.prototype.data = function () {
    if (this.content)return[this.value, this._ctext ? this._ctext : this.text]
};
dhtmlXCombo_defaultOption.prototype.DrawHeader = function (a, b, c, e) {
    var d = document.createElement("DIV");
    d.style.width = c + "px";
    d.className = "dhx_combo_box " + (dhtmlx.skin || "");
    d._self = a;
    a.DOMelem = d;
    this._DrawHeaderInput(a, b, c, e);
    this._DrawHeaderButton(a, b, c);
    a.DOMParent.appendChild(a.DOMelem)
};
dhtmlXCombo_defaultOption.prototype._DrawHeaderInput = function (a, b, c, e) {
    var d = document.createElement("input");
    d.setAttribute("autocomplete", "off");
    d.type = "text";
    d.className = "dhx_combo_input";
    if (e)d.tabIndex = e;
    d.style.width = c - 19 - (document.compatMode == "BackCompat" ? 0 : 3) + "px";
    a.DOMelem.appendChild(d);
    a.DOMelem_input = d;
    d = document.createElement("input");
    d.type = "hidden";
    d.name = b;
    a.DOMelem.appendChild(d);
    a.DOMelem_hidden_input = d;
    d = document.createElement("input");
    d.type = "hidden";
    d.name = (b || "").replace(/(\]?)$/,
        "_new_value$1");
    d.value = "true";
    a.DOMelem.appendChild(d);
    a.DOMelem_hidden_input2 = d
};
dhtmlXCombo_defaultOption.prototype._DrawHeaderButton = function (a) {
    var b = document.createElement("img");
    b.className = "dhx_combo_img";
    if (dhtmlx.image_path)dhx_globalImgPath = dhtmlx.image_path;
    b.src = (window.dhx_globalImgPath ? dhx_globalImgPath : "") + "combo_select" + (dhtmlx.skin ? "_" + dhtmlx.skin : "") + ".gif";
    a.DOMelem.appendChild(b);
    a.DOMelem_button = b
};
dhtmlXCombo_defaultOption.prototype.RedrawHeader = function () {
};
dhtmlXCombo_optionTypes["default"] = dhtmlXCombo_defaultOption;
dhtmlXCombo.prototype.dhx_Event = function () {
    this.dhx_SeverCatcherPath = "";
    this.attachEvent = function (a, b, c) {
        c = c || this;
        a = "ev_" + a;
        if (!this[a] || !this[a].addEvent) {
            var e = new this.eventCatcher(c);
            e.addEvent(this[a]);
            this[a] = e
        }
        return a + ":" + this[a].addEvent(b)
    };
    this.callEvent = function (a, b) {
        return this["ev_" + a] ? this["ev_" + a].apply(this, b) : !0
    };
    this.checkEvent = function (a) {
        return this["ev_" + a] ? !0 : !1
    };
    this.eventCatcher = function (a) {
        var b = [], c = a, e = function (a, b) {
            var a = a.split(":"), c = "", d = "", e = a[1];
            a[1] == "rpc" && (c =
                '<?xml version="1.0"?><methodCall><methodName>' + a[2] + "</methodName><params>", d = "</params></methodCall>", e = b);
            var k = function () {
            };
            return k
        }, d = function () {
            if (b)var a = !0;
            for (var d = 0; d < b.length; d++)if (b[d] != null)var e = b[d].apply(c, arguments), a = a && e;
            return a
        };
        d.addEvent = function (a) {
            typeof a != "function" && (a = a && a.indexOf && a.indexOf("server:") == 0 ? new e(a, c.rpcServer) : eval(a));
            return a ? b.push(a) - 1 : !1
        };
        d.removeEvent = function (a) {
            b[a] = null
        };
        return d
    };
    this.detachEvent = function (a) {
        if (a != !1) {
            var b = a.split(":");
            this[b[0]].removeEvent(b[1])
        }
    }
};
(function () {
    dhtmlx.extend_api("dhtmlXCombo", {_init: function (a) {
        if (a.image_path)dhx_globalImgPath = a.image_path;
        return[a.parent, a.name, a.width || "100%", a.type, a.index]
    }, filter: "filter_command", auto_height: "enableOptionAutoHeight", auto_position: "enableOptionAutoPositioning", auto_width: "enableOptionAutoWidth", xml: "loadXML", readonly: "readonly", items: "addOption"}, {filter_command: function (a) {
        typeof a == "string" ? this.enableFilteringMode(!0, a) : this.enableFilteringMode(a)
    }})
})();

//v.3.5 build 120822

/*
 Copyright DHTMLX LTD. http://www.dhtmlx.com
 You allowed to use this component or parts of it under GPL terms
 To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
 */