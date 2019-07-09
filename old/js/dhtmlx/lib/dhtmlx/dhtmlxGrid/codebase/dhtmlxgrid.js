//v.3.5 build 120822

/*
 Copyright DHTMLX LTD. http://www.dhtmlx.com
 You allowed to use this component or parts of it under GPL terms
 To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
 */
var globalActiveDHTMLGridObject;
String.prototype._dhx_trim = function () {
    return this.replace(/&nbsp;/g, " ").replace(/(^[ \t]*)|([ \t]*$)/g, "")
};
function dhtmlxArray(a) {
    return dhtmlXHeir(a || [], dhtmlxArray._master)
}
dhtmlxArray._master = {_dhx_find:function (a) {
    for (var b = 0; b < this.length; b++)if (a == this[b])return b;
    return-1
}, _dhx_insertAt:function (a, b) {
    this[this.length] = null;
    for (var c = this.length - 1; c >= a; c--)this[c] = this[c - 1];
    this[a] = b
}, _dhx_removeAt:function (a) {
    this.splice(a, 1)
}, _dhx_swapItems:function (a, b) {
    var c = this[a];
    this[a] = this[b];
    this[b] = c
}};
function dhtmlXGridObject(a) {
    if (_isIE)try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (b) {
    }
    if (a)if (typeof a == "object") {
        if (this.entBox = a, !this.entBox.id)this.entBox.id = "cgrid2_" + this.uid()
    } else this.entBox = document.getElementById(a); else this.entBox = document.createElement("DIV"), this.entBox.id = "cgrid2_" + this.uid();
    this.entBox.innerHTML = "";
    dhtmlxEventable(this);
    var c = this;
    this._wcorr = 0;
    this.fontWidth = 7;
    this.row = this.cell = null;
    this.iconURL = "";
    this.editor = null;
    this._dclE = this._f2kE = !0;
    this.combos =
        [];
    this.defVal = [];
    this.rowsAr = {};
    this.rowsBuffer = dhtmlxArray();
    this.rowsCol = dhtmlxArray();
    this._data_cache = {};
    this._ecache = {};
    this._ud_enabled = !0;
    this.xmlLoader = new dtmlXMLLoaderObject(this.doLoadDetails, this, !0, this.no_cashe);
    this._maskArr = [];
    this.selectedRows = dhtmlxArray();
    this.UserData = {};
    this._sizeFix = this._borderFix = 0;
    this.entBox.className += " gridbox";
    this.entBox.style.width = this.entBox.getAttribute("width") || (window.getComputedStyle ? this.entBox.style.width || window.getComputedStyle(this.entBox,
        null).width : this.entBox.currentStyle ? this.entBox.currentStyle.width : this.entBox.style.width || 0) || "100%";
    this.entBox.style.height = this.entBox.getAttribute("height") || (window.getComputedStyle ? this.entBox.style.height || window.getComputedStyle(this.entBox, null).height : this.entBox.currentStyle ? this.entBox.currentStyle.height : this.entBox.style.height || 0) || "100%";
    this.entBox.style.cursor = "default";
    this.entBox.onselectstart = function () {
        return!1
    };
    var d = function (e) {
        var a = document.createElement("TABLE");
        a.cellSpacing =
            a.cellPadding = 0;
        a.style.cssText = "width:100%;table-layout:fixed;";
        a.className = e.substr(2);
        return a
    };
    this.obj = d("c_obj");
    this.hdr = d("c_hdr");
    this.hdr.style.marginRight = "20px";
    this.hdr.style.paddingRight = "20px";
    this.objBox = document.createElement("DIV");
    this.objBox.style.width = "100%";
    this.objBox.style.overflow = "auto";
    this.objBox.appendChild(this.obj);
    this.objBox.className = "objbox";
    this.hdrBox = document.createElement("DIV");
    this.hdrBox.style.width = "100%";
    this.hdrBox.style.height = "25px";
    this.hdrBox.style.overflow =
        "hidden";
    this.hdrBox.className = "xhdr";
    this.preloadImagesAr = [];
    this.sortImg = document.createElement("IMG");
    this.sortImg.style.display = "none";
    this.hdrBox.appendChild(this.sortImg);
    this.hdrBox.appendChild(this.hdr);
    this.hdrBox.style.position = "relative";
    this.entBox.appendChild(this.hdrBox);
    this.entBox.appendChild(this.objBox);
    this.entBox.grid = this;
    this.objBox.grid = this;
    this.hdrBox.grid = this;
    this.obj.grid = this;
    this.hdr.grid = this;
    this.cellWidthPX = [];
    this.cellWidthPC = [];
    this.cellWidthType = this.entBox.cellwidthtype ||
        "px";
    this.delim = this.entBox.delimiter || ",";
    this._csvDelim = ",";
    this.hdrLabels = [];
    this.columnIds = [];
    this.columnColor = [];
    this._hrrar = [];
    this.cellType = dhtmlxArray();
    this.cellAlign = [];
    this.initCellWidth = [];
    this.fldSort = [];
    this._srdh = _isIE && document.compatMode != "BackCompat" ? 22 : 20;
    this.imgURL = window.dhx_globalImgPath || "";
    this.isActive = !1;
    this.isEditable = !0;
    this.pagingOn = this.useImagesInHeader = !1;
    this.rowsBufferOutSize = 0;
    dhtmlxEvent(window, "unload", function () {
        try {
            c.destructor && c.destructor()
        } catch (e) {
        }
    });
    this.setSkin = function (e) {
        this.skin_name = e;
        var a = this.entBox.className.split(" gridbox")[0];
        this.entBox.className = a + " gridbox gridbox_" + e;
        this.skin_h_correction = 0;
        this.enableAlterCss("ev_" + e, "odd_" + e, this.isTreeGrid());
        this._fixAlterCss();
        switch (e) {
            case "clear":
                this._topMb = document.createElement("DIV");
                this._topMb.className = "topMumba";
                this._topMb.innerHTML = "<img style='left:0px'   src='" + this.imgURL + "skinC_top_left.gif'><img style='right:20px' src='" + this.imgURL + "skinC_top_right.gif'>";
                this.entBox.appendChild(this._topMb);
                this._botMb = document.createElement("DIV");
                this._botMb.className = "bottomMumba";
                this._botMb.innerHTML = "<img style='left:0px'   src='" + this.imgURL + "skinD_bottom_left.gif'><img style='right:20px' src='" + this.imgURL + "skinD_bottom_right.gif'>";
                this.entBox.appendChild(this._botMb);
                if (this.entBox.style.position != "absolute")this.entBox.style.position = "relative";
                this.skin_h_correction = 20;
                break;
            case "white":
                this._srdh = 40;
                this.forceDivInHeader = !0;
                break;
            case "dhx_skyblue":
            case "dhx_web":
            case "glassy_blue":
            case "dhx_black":
            case "dhx_blue":
            case "modern":
            case "light":
                this._srdh =
                    20;
                this.forceDivInHeader = !0;
                break;
            case "xp":
                this.forceDivInHeader = !0;
                this._srdh = _isIE && document.compatMode != "BackCompat" ? 26 : 22;
                break;
            case "mt":
                this._srdh = _isIE && document.compatMode != "BackCompat" ? 26 : 22;
                break;
            case "gray":
                if (_isIE && document.compatMode != "BackCompat")this._srdh = 22
        }
        if (_isIE && this.hdr) {
            var b = this.hdr.parentNode;
            b.removeChild(this.hdr);
            b.appendChild(this.hdr)
        }
        this.setSizes()
    };
    _isIE && this.preventIECaching(!0);
    if (window.dhtmlDragAndDropObject)this.dragger = new dhtmlDragAndDropObject;
    this._doOnScroll =
        function (e, a) {
            this.callEvent("onScroll", [this.objBox.scrollLeft, this.objBox.scrollTop]);
            this.doOnScroll(e, a)
        };
    this.doOnScroll = function (e, a) {
        this.hdrBox.scrollLeft = this.objBox.scrollLeft;
        if (this.ftr)this.ftr.parentNode.scrollLeft = this.objBox.scrollLeft;
        if (!a && this._srnd)this._dLoadTimer && window.clearTimeout(this._dLoadTimer), this._dLoadTimer = window.setTimeout(function () {
            c._update_srnd_view && c._update_srnd_view()
        }, 100)
    };
    this.attachToObject = function (e) {
        e.appendChild(this.globalBox ? this.globalBox : this.entBox);
        this.setSizes()
    };
    this.init = function (e) {
        if (this.isTreeGrid() && !this._h2) {
            this._h2 = new dhtmlxHierarchy;
            if (this._fake && !this._realfake)this._fake._h2 = this._h2;
            this._tgc = {imgURL:null}
        }
        if (this._hstyles) {
            this.editStop();
            this.fldSorted = this.r_fldSorted = this.resized = this.lastClicked = null;
            this.cellWidthPX = [];
            this.cellWidthPC = [];
            this.hdr.rows.length > 0 && this.clearAll(!0);
            for (var a = this.hdr.insertRow(0), b = 0; b < this.hdrLabels.length; b++)a.appendChild(document.createElement("TH")), a.childNodes[b]._cellIndex = b, a.childNodes[b].style.height =
                "0px";
            _isIE && _isIE < 8 ? a.style.position = "absolute" : a.style.height = "auto";
            a = this.hdr.insertRow(_isKHTML ? 2 : 1);
            a._childIndexes = [];
            for (var f = 0, b = 0; b < this.hdrLabels.length; b++)a._childIndexes[b] = b - f, this.hdrLabels[b] == this.splitSign && b != 0 ? (_isKHTML && a.insertCell(b - f), a.cells[b - f - 1].colSpan = (a.cells[b - f - 1].colSpan || 1) + 1, a.childNodes[b - f - 1]._cellIndex++, f++, a._childIndexes[b] = b - f) : (a.insertCell(b - f), a.childNodes[b - f]._cellIndex = b, a.childNodes[b - f]._cellIndexS = b, this.setColumnLabel(b, this.hdrLabels[b]));
            if (f ==
                0)a._childIndexes = null;
            this._cCount = this.hdrLabels.length;
            _isIE && window.setTimeout(function () {
                c.setSizes && c.setSizes()
            }, 1);
            this.obj.firstChild || this.obj.appendChild(document.createElement("TBODY"));
            var d = this.obj.firstChild;
            if (!d.firstChild) {
                d.appendChild(document.createElement("TR"));
                d = d.firstChild;
                _isIE && _isIE < 8 ? d.style.position = "absolute" : d.style.height = "auto";
                for (b = 0; b < this.hdrLabels.length; b++)d.appendChild(document.createElement("TH")), d.childNodes[b].style.height = "0px"
            }
            this._c_order = null;
            this.multiLine != !0 && (this.obj.className += " row20px");
            this.sortImg.style.position = "absolute";
            this.sortImg.style.display = "none";
            this.sortImg.src = this.imgURL + "sort_desc.gif";
            this.sortImg.defLeft = 0;
            this.noHeader ? this.hdrBox.style.display = "none" : this.noHeader = !1;
            this.attachHeader();
            this.attachHeader(0, 0, "_aFoot");
            this.setSizes();
            e && this.parseXML();
            this.obj.scrollTop = 0;
            this.dragAndDropOff && this.dragger.addDragLanding(this.entBox, this);
            this._initDrF && this._initD();
            this._init_point && this._init_point()
        }
    };
    this.setColumnSizes =
        function (e) {
            for (var a = 0, b = [], c = 0, d = 0; d < this._cCount; d++)if (this.initCellWidth[d] == "*" && !this._hrrar[d])this._awdth = !1, b.push(d); else {
                if (this.cellWidthType == "%") {
                    typeof this.cellWidthPC[d] == "undefined" && (this.cellWidthPC[d] = this.initCellWidth[d]);
                    var h = e * this.cellWidthPC[d] / 100 || 0;
                    c > 0.5 && (h++, c--);
                    var l = this.cellWidthPX[d] = Math.floor(h), c = c + h - l
                } else typeof this.cellWidthPX[d] == "undefined" && (this.cellWidthPX[d] = this.initCellWidth[d]);
                this._hrrar[d] || (a += this.cellWidthPX[d] * 1)
            }
            if (b.length) {
                var k = Math.floor((e -
                    a) / b.length);
                k < 0 && (k = 1);
                for (d = 0; d < b.length; d++) {
                    var m = Math.max(this._drsclmW ? this._drsclmW[b[d]] || 0 : 0, k);
                    this.cellWidthPX[b[d]] = m;
                    a += m
                }
                if (e > a) {
                    var n = b[b.length - 1];
                    this.cellWidthPX[n] += e - a;
                    a = e
                }
                this._setAutoResize()
            }
            this.obj.style.width = a + "px";
            this.hdr.style.width = a + "px";
            if (this.ftr)this.ftr.style.width = a + "px";
            this.chngCellWidth();
            return a
        };
    this.setSizes = function () {
        if (this.hdr.rows[0]) {
            var e = this.quirks = _isIE && document.compatMode == "BackCompat", a = (this.entBox.offsetWidth - this.entBox.clientWidth) / 2;
            if (!this.dontSetSizes)if (this.globalBox) {
                var b =
                    (this.globalBox.offsetWidth - this.globalBox.clientWidth) / 2;
                if (this._delta_x && !this._realfake) {
                    var f = this.globalBox.clientWidth;
                    this.globalBox.style.width = this._delta_x;
                    this.entBox.style.width = Math.max(0, this.globalBox.clientWidth + (e ? b * 2 : 0) - this._fake.entBox.clientWidth) + "px";
                    f != this.globalBox.clientWidth && this._fake._correctSplit(this._fake.entBox.clientWidth)
                }
                if (this._delta_y && !this._realfake)this.globalBox.style.height = this._delta_y, this.entBox.style.overflow = this._fake.entBox.style.overflow = "hidden",
                    this.entBox.style.height = this._fake.entBox.style.height = this.globalBox.clientHeight + (e ? b * 2 : 0) + "px"
            } else {
                if (this._delta_x)this.entBox.parentNode && this.entBox.parentNode.tagName == "TD" ? (this.entBox.style.width = "1px", this.entBox.style.width = parseInt(this._delta_x) * this.entBox.parentNode.clientWidth / 100 - a * 2 + "px") : this.entBox.style.width = this._delta_x;
                if (this._delta_y)this.entBox.style.height = this._delta_y
            }
            window.clearTimeout(this._sizeTime);
            if (!this.entBox.offsetWidth && (!this.globalBox || !this.globalBox.offsetWidth))this._sizeTime =
                window.setTimeout(function () {
                    c.setSizes && c.setSizes()
                }, 250); else {
                var d = !this._wthB && (this.entBox.cmp || this._delta_x) && (this.skin_name || "").indexOf("dhx") == 0 && !e ? 2 : 0, h = !this._wthB && (this.entBox.cmp || this._delta_y) && (this.skin_name || "").indexOf("dhx") == 0 && !e ? 2 : 0, l = this.parentGrid ? !1 : this.objBox.scrollHeight > this.objBox.offsetHeight, k = _isFF ? 18 : 18, m = this.entBox.clientWidth - (this.skin_h_correction || 0) * (e ? 0 : 1) - d, n = this.entBox.clientWidth - (this.skin_h_correction || 0) - d, o = this.entBox.clientHeight - h, p = this.setColumnSizes(n -
                    (l ? k : 0) - (this._correction_x || 0)), r = this.parentGrid ? !1 : this.objBox.scrollWidth > this.objBox.offsetWidth || this.objBox.style.overflowX == "scroll", s = this.hdr.clientHeight, t = this.ftr ? this.ftr.clientHeight : 0, u = m, q = o - s - t;
                this._awdth && this._awdth[0] && this._awdth[1] == 99999 && (r = 0);
                if (this._ahgr && (q = this._ahgrMA ? this.entBox.parentNode.clientHeight - s - t : this.obj.offsetHeight + (r ? k : 0) + (this._correction_y || 0), this._ahgrM && (q = this._ahgrF ? Math.min(this._ahgrM, q + s + t) - s - t : Math.min(this._ahgrM, q)), l && q >= this.obj.scrollHeight +
                    (r ? k : 0)))l = !1, this.setColumnSizes(n - (this._correction_x || 0));
                if (this._awdth && this._awdth[0]) {
                    if (this.cellWidthType == "%")this.cellWidthType = "px";
                    this._fake && (p += this._fake.entBox.clientWidth);
                    u = Math.min(Math.max(p + (l ? k : 0), this._awdth[2]), this._awdth[1]) + (this._correction_x || 0);
                    this._fake && (u -= this._fake.entBox.clientWidth)
                }
                q = Math.max(0, q);
                this._ff_size_delta = this._ff_size_delta == 0.1 ? 0.2 : 0.1;
                if (!_isFF)this._ff_size_delta = 0;
                if (!this.dontSetSizes)this.entBox.style.width = Math.max(0, u + (e ? 2 : 0) * a + this._ff_size_delta) +
                    "px", this.entBox.style.height = q + (e ? 2 : 0) * a + s + t + "px";
                this.objBox.style.height = q + (e && !l ? 2 : 0) * a + "px";
                this.hdrBox.style.height = s + "px";
                q != o && this.doOnScroll(0, !this._srnd);
                var v = this["setSizes_" + this.skin_name];
                v && v.call(this);
                this.setSortImgPos();
                s != this.hdr.clientHeight && this._ahgr && this.setSizes();
                this.callEvent("onSetSizes", [])
            }
        }
    };
    this.setSizes_clear = function () {
        var e = this.hdr.offsetHeight, a = this.entBox.offsetWidth, b = e + this.objBox.offsetHeight;
        this._topMb.style.top = (e || 0) + "px";
        this._topMb.style.width =
            a + 20 + "px";
        this._botMb.style.top = b - 3 + "px";
        this._botMb.style.width = a + 20 + "px"
    };
    this.chngCellWidth = function () {
        if (_isOpera && this.ftr)this.ftr.width = this.objBox.scrollWidth + "px";
        for (var e = this._cCount, a = 0; a < e; a++)if (this.hdr.rows[0].cells[a].style.width = this.cellWidthPX[a] + "px", this.obj.rows[0].childNodes[a].style.width = this.cellWidthPX[a] + "px", this.ftr)this.ftr.rows[0].cells[a].style.width = this.cellWidthPX[a] + "px"
    };
    this.setDelimiter = function (e) {
        this.delim = e
    };
    this.setInitWidthsP = function (e, a) {
        this.cellWidthType =
            "%";
        this.initCellWidth = e.split(this.delim.replace(/px/gi, ""));
        a || this._setAutoResize()
    };
    this._setAutoResize = function () {
        if (!this._realfake) {
            var e = window, a = this;
            dhtmlxEvent(window, "resize", function () {
                window.clearTimeout(a._resize_timer);
                if (a._setAutoResize)a._resize_timer = window.setTimeout(function () {
                    a.setSizes && a.setSizes();
                    a._fake && a._fake._correctSplit()
                }, 100)
            })
        }
    };
    this.setInitWidths = function (a) {
        this.cellWidthType = "px";
        this.initCellWidth = a.split(this.delim);
        if (_isFF)for (var b = 0; b < this.initCellWidth.length; b++)this.initCellWidth[b] !=
            "*" && (this.initCellWidth[b] = parseInt(this.initCellWidth[b]))
    };
    this.enableMultiline = function (a) {
        this.multiLine = convertStringToBoolean(a)
    };
    this.enableMultiselect = function (a) {
        this.selMultiRows = convertStringToBoolean(a)
    };
    this.setImagesPath = this.setImagePath = function (a) {
        this.imgURL = a
    };
    this.setIconsPath = this.setIconPath = function (a) {
        this.iconURL = a
    };
    this.changeCursorState = function (a) {
        var b = a.target || a.srcElement;
        b.tagName != "TD" && (b = this.getFirstParentOfType(b, "TD"));
        if (b) {
            if (b.tagName == "TD" && this._drsclmn && !this._drsclmn[b._cellIndex])return b.style.cursor = "default";
            var c = (a.layerX || 0) + (!_isIE && a.target.tagName == "DIV" ? b.offsetLeft : 0);
            b.style.cursor = b.offsetWidth - (a.offsetX || (parseInt(this.getPosition(b, this.hdrBox)) - c) * -1) < (_isOpera ? 20 : 10) ? "E-resize" : "default";
            if (_isOpera)this.hdrBox.scrollLeft = this.objBox.scrollLeft
        }
    };
    this.startColResize = function (a) {
        this.resized && this.stopColResize();
        this.resized = null;
        var b = a.target || a.srcElement;
        b.tagName != "TD" && (b = this.getFirstParentOfType(b, "TD"));
        var j = a.clientX,
            f = this.hdr.offsetWidth, d = parseInt(b.offsetWidth);
        if (b.tagName == "TD" && b.style.cursor != "default" && (!this._drsclmn || this._drsclmn[b._cellIndex]))c._old_d_mm = document.body.onmousemove, c._old_d_mu = document.body.onmouseup, document.body.onmousemove = function (a) {
            c && c.doColResize(a || window.event, b, d, j, f)
        }, document.body.onmouseup = function () {
            c && c.stopColResize()
        }
    };
    this.stopColResize = function () {
        document.body.onmousemove = c._old_d_mm || "";
        document.body.onmouseup = c._old_d_mu || "";
        this.setSizes();
        this.doOnScroll(0,
            1);
        this.callEvent("onResizeEnd", [this])
    };
    this.doColResize = function (a, b, c, f, d) {
        b.style.cursor = "E-resize";
        this.resized = b;
        var h = c + (a.clientX - f), l = d + (a.clientX - f);
        if (this.callEvent("onResize", [b._cellIndex, h, this])) {
            if (_isIE)this.objBox.scrollLeft = this.hdrBox.scrollLeft;
            if (b.colSpan > 1) {
                for (var k = [], m = 0; m < b.colSpan; m++)k[m] = Math.round(h * this.hdr.rows[0].childNodes[b._cellIndexS + m].offsetWidth / b.offsetWidth);
                for (m = 0; m < b.colSpan; m++)this._setColumnSizeR(b._cellIndexS + m * 1, k[m])
            } else this._setColumnSizeR(b._cellIndex,
                h);
            this.doOnScroll(0, 1);
            this.setSizes();
            this._fake && this._awdth && this._fake._correctSplit()
        }
    };
    this._setColumnSizeR = function (a, b) {
        if (b > (this._drsclmW && !this._notresize ? this._drsclmW[a] || 10 : 10)) {
            this.obj.rows[0].childNodes[a].style.width = b + "px";
            this.hdr.rows[0].childNodes[a].style.width = b + "px";
            if (this.ftr)this.ftr.rows[0].childNodes[a].style.width = b + "px";
            if (this.cellWidthType == "px")this.cellWidthPX[a] = b; else {
                var c = parseInt(this.entBox.offsetWidth);
                this.objBox.scrollHeight > this.objBox.offsetHeight &&
                (c -= 17);
                var f = Math.round(b / c * 100);
                this.cellWidthPC[a] = f
            }
            this.sortImg.style.display != "none" && this.setSortImgPos()
        }
    };
    this.setSortImgState = function (a, b, c, f) {
        c = (c || "asc").toLowerCase();
        if (convertStringToBoolean(a)) {
            this.sortImg.src = c == "asc" ? this.imgURL + "sort_asc.gif" : this.imgURL + "sort_desc.gif";
            this.sortImg.style.display = "";
            this.fldSorted = this.hdr.rows[0].childNodes[b];
            var d = this.hdr.rows[f || 1];
            if (d) {
                for (var h = 0; h < d.childNodes.length; h++)if (d.childNodes[h]._cellIndexS == b)return this.r_fldSorted = d.childNodes[h],
                    this.setSortImgPos();
                return this.setSortImgState(a, b, c, (f || 1) + 1)
            }
        } else this.sortImg.style.display = "none", this.fldSorted = this.r_fldSorted = null
    };
    this.setSortImgPos = function (a, b, c, f) {
        if (!this._hrrar || !this._hrrar[this.r_fldSorted ? this.r_fldSorted._cellIndex : a])if (f || (f = a ? this.hdr.rows[c || 0].cells[a] : this.r_fldSorted), f != null) {
            var d = this.getPosition(f, this.hdrBox), h = f.offsetWidth;
            this.sortImg.style.left = Number(d[0] + h - 13) + "px";
            this.sortImg.defLeft = parseInt(this.sortImg.style.left);
            this.sortImg.style.top =
                Number(d[1] + 5) + "px";
            if (!this.useImagesInHeader && !b)this.sortImg.style.display = "inline";
            this.sortImg.style.left = this.sortImg.defLeft + "px"
        }
    };
    this.setActive = function (a) {
        arguments.length == 0 && (a = !0);
        a == !0 ? (globalActiveDHTMLGridObject && globalActiveDHTMLGridObject != this && (globalActiveDHTMLGridObject.editStop(), globalActiveDHTMLGridObject.callEvent("onBlur", [globalActiveDHTMLGridObject])), globalActiveDHTMLGridObject = this, this.isActive = !0) : (this.isActive = !1, this.callEvent("onBlur", [this]))
    };
    this._doClick =
        function (a) {
            var b = 0, c = this.getFirstParentOfType(_isIE ? a.srcElement : a.target, "TD");
            if (c) {
                var f = !0;
                if (this.markedCells) {
                    var d = 0;
                    if (a.shiftKey || a.metaKey)d = 1;
                    a.ctrlKey && (d = 2);
                    this.doMark(c, d);
                    return!0
                }
                if (this.selMultiRows != !1 && (a.shiftKey && this.row != null && this.selectedRows.length && (b = 1), a.ctrlKey || a.metaKey))b = 2;
                this.doClick(c, f, b)
            }
        };
    this._doContClick = function (a) {
        var b = this.getFirstParentOfType(_isIE ? a.srcElement : a.target, "TD");
        if (!b || typeof b.parentNode.idd == "undefined")return this.callEvent("onEmptyClick",
            [a]), !0;
        if (a.button == 2 || _isMacOS && a.ctrlKey) {
            if (!this.callEvent("onRightClick", [b.parentNode.idd, b._cellIndex, a])) {
                var c = function (a) {
                    (a || event).cancelBubble = !0;
                    return!1
                };
                (a.srcElement || a.target).oncontextmenu = c;
                return c(a)
            }
            if (this._ctmndx) {
                if (!this.callEvent("onBeforeContextMenu", [b.parentNode.idd, b._cellIndex, this]))return!0;
                if (_isIE)a.srcElement.oncontextmenu = function () {
                    event.cancelBubble = !0;
                    return!1
                };
                if (this._ctmndx.showContextMenu) {
                    var f = window.document.documentElement, d = window.document.body,
                        h = [f.scrollLeft || d.scrollLeft, f.scrollTop || d.scrollTop];
                    if (_isIE)var l = a.clientX + h[0], k = a.clientY + h[1]; else l = a.pageX, k = a.pageY;
                    this._ctmndx.showContextMenu(l - 1, k - 1);
                    this.contextID = this._ctmndx.contextMenuZoneId = b.parentNode.idd + "_" + b._cellIndex;
                    this._ctmndx._skip_hide = !0
                } else b.contextMenuId = b.parentNode.idd + "_" + b._cellIndex, b.contextMenu = this._ctmndx, b.a = this._ctmndx._contextStart, b.a(b, a), b.a = null;
                a.cancelBubble = !0;
                return!1
            }
        } else this._ctmndx && (this._ctmndx.hideContextMenu ? this._ctmndx.hideContextMenu() :
            this._ctmndx._contextEnd());
        return!0
    };
    this.doClick = function (a, b, d, f) {
        this.selMultiRows || (d = 0);
        var g = this.row ? this.row.idd : 0;
        this.setActive(!0);
        d || (d = 0);
        if (this.cell != null)this.cell.className = this.cell.className.replace(/cellselected/g, "");
        if (a.tagName == "TD") {
            if (this.checkEvent("onSelectStateChanged"))var h = this.getSelectedId();
            var l = this.row;
            if (d == 1) {
                var k = this.rowsCol._dhx_find(a.parentNode), m = this.rowsCol._dhx_find(this.lastClicked);
                if (k > m)var n = m, o = k; else n = k, o = m;
                for (var p = 0; p < this.rowsCol.length; p++)if (p >=
                    n && p <= o)if (this.rowsCol[p] && !this.rowsCol[p]._sRow)this.rowsCol[p].className.indexOf("rowselected") == -1 && this.callEvent("onBeforeSelect", [this.rowsCol[p].idd, g]) && (this.rowsCol[p].className += " rowselected", this.selectedRows[this.selectedRows.length] = this.rowsCol[p]); else return this.clearSelection(), this.doClick(a, b, 0, f)
            } else if (d == 2 && a.parentNode.className.indexOf("rowselected") != -1) {
                a.parentNode.className = a.parentNode.className.replace(/rowselected/g, "");
                this.selectedRows._dhx_removeAt(this.selectedRows._dhx_find(a.parentNode));
                var r = !0, f = !1
            }
            this.editStop();
            if (typeof a.parentNode.idd == "undefined")return!0;
            if (!r && !a.parentNode._sRow)if (this.callEvent("onBeforeSelect", [a.parentNode.idd, g]))if (this.getSelectedRowId() != a.parentNode.idd) {
                d == 0 && this.clearSelection();
                this.cell = a;
                l == a.parentNode && this._chRRS && (b = !1);
                this.row = a.parentNode;
                this.row.className += " rowselected";
                if (this.cell && _isIE && _isIE == 8) {
                    var s = this.cell.nextSibling, t = this.cell.parentNode;
                    t.removeChild(this.cell);
                    t.insertBefore(this.cell, s)
                }
                if (this.selectedRows._dhx_find(this.row) == -1)this.selectedRows[this.selectedRows.length] = this.row
            } else this.cell = a, this.row = a.parentNode; else b = !1;
            if (this.cell && this.cell.parentNode.className.indexOf("rowselected") != -1)this.cell.className = this.cell.className.replace(/cellselected/g, "") + " cellselected";
            if (d != 1 && !this.row)return;
            this.lastClicked = a.parentNode;
            var u = this.row.idd, q = this.cell;
            b && typeof u != "undefined" && q && !r ? c.onRowSelectTime = setTimeout(function () {
                c.callEvent && c.callEvent("onRowSelect", [u, q._cellIndex])
            }, 100) : this.callEvent("onRowSelectRSOnly",
                [u]);
            if (this.checkEvent("onSelectStateChanged")) {
                var v = this.getSelectedId();
                h != v && this.callEvent("onSelectStateChanged", [v, h])
            }
        }
        this.isActive = !0;
        f !== !1 && this.cell && this.cell.parentNode.idd && this.moveToVisible(this.cell)
    };
    this.selectAll = function () {
        this.clearSelection();
        var a = this.rowsBuffer;
        if (this.pagingOn)a = this.rowsCol;
        for (var b = 0; b < a.length; b++)this.render_row(b).className += " rowselected";
        this.selectedRows = dhtmlxArray([].concat(a));
        if (this.selectedRows.length)this.row = this.selectedRows[0], this.cell =
            this.row.cells[0];
        this._fake && !this._realfake && this._fake.selectAll()
    };
    this.selectCell = function (a, b, c, d, g, h) {
        c || (c = !1);
        typeof a != "object" && (a = this.render_row(a));
        if (!a || a == -1)return null;
        var l = a.childNodes[b];
        l || (l = a.childNodes[0]);
        this.markedCells ? this.doMark(l, d ? 2 : 0) : d ? this.doClick(l, c, 3, h) : this.doClick(l, c, 0, h);
        g && this.editCell()
    };
    this.moveToVisible = function (a, b) {
        if (this.pagingOn) {
            var c = Math.floor(this.getRowIndex(a.parentNode.idd) / this.rowsBufferOutSize) + 1;
            c != this.currentPage && this.changePage(c)
        }
        try {
            if (a.offsetHeight) {
                var d =
                    a.offsetLeft + a.offsetWidth + 20, g = 0;
                d > this.objBox.offsetWidth + this.objBox.scrollLeft ? a.offsetLeft > this.objBox.scrollLeft && (g = a.offsetLeft - 5) : a.offsetLeft < this.objBox.scrollLeft && (d -= a.offsetWidth * 2 / 3, d < this.objBox.scrollLeft && (g = a.offsetLeft - 5));
                if (g && !b)this.objBox.scrollLeft = g
            }
            if (a.offsetHeight)d = a.offsetTop; else var h = this._realfake ? this._fake.rowsAr[a.parentNode.idd] : a.parentNode, d = this.rowsBuffer._dhx_find(h) * this._srdh;
            var l = d + a.offsetHeight + 38;
            if (l > this.objBox.offsetHeight + this.objBox.scrollTop)var k =
                l - this.objBox.offsetHeight; else d < this.objBox.scrollTop && (k = d - 5);
            if (k)this.objBox.scrollTop = k
        } catch (m) {
        }
    };
    this.editCell = function () {
        if (!(this.editor && this.cell == this.editor.cell)) {
            this.editStop();
            if (this.isEditable != !0 || !this.cell)return!1;
            var a = this.cell;
            if (a.parentNode._locked)return!1;
            this.editor = this.cells4(a);
            if (this.editor != null) {
                if (this.editor.isDisabled())return this.editor = null, !1;
                this.callEvent("onEditCell", [0, this.row.idd, this.cell._cellIndex]) != !1 && this.editor.edit ? (this._Opera_stop = (new Date).valueOf(),
                    a.className += " editable", this.editor.edit(), this.callEvent("onEditCell", [1, this.row.idd, this.cell._cellIndex])) : this.editor = null
            }
        }
    };
    this.editStop = function (a) {
        if (_isOpera && this._Opera_stop) {
            if (this._Opera_stop * 1 + 50 > (new Date).valueOf())return;
            this._Opera_stop = null
        }
        if (this.editor && this.editor != null)if (this.editor.cell.className = this.editor.cell.className.replace("editable", ""), a) {
            var b = this.editor.val;
            this.editor.detach();
            this.editor.setValue(b);
            this.editor = null;
            this.callEvent("onEditCancel", [this.row.idd,
                this.cell._cellIndex, b])
        } else {
            if (this.editor.detach())this.cell.wasChanged = !0;
            var c = this.editor;
            this.editor = null;
            var d = this.callEvent("onEditCell", [2, this.row.idd, this.cell._cellIndex, c.getValue(), c.val]);
            if (typeof d == "string" || typeof d == "number")c[c.setImage ? "setLabel" : "setValue"](d); else if (!d)c[c.setImage ? "setLabel" : "setValue"](c.val);
            this._ahgr && this.multiLine && this.setSizes()
        }
    };
    this._nextRowCell = function (a, b, c) {
        a = this._nextRow((this._groups ? this.rowsCol : this.rowsBuffer)._dhx_find(a), b);
        return!a ?
            null : a.childNodes[a._childIndexes ? a._childIndexes[c] : c]
    };
    this._getNextCell = function (a, b, c) {
        var a = a || this.cell, d = a.parentNode;
        this._tabOrder ? (c = this._tabOrder[a._cellIndex], typeof c != "undefined" && (a = c < 0 ? this._nextRowCell(d, b, Math.abs(c) - 1) : d.childNodes[c])) : (c = a._cellIndex + b, c >= 0 && c < this._cCount ? (d._childIndexes && (c = d._childIndexes[a._cellIndex] + b), a = d.childNodes[c]) : a = this._nextRowCell(d, b, b == 1 ? 0 : this._cCount - 1));
        return!a ? (b == 1 && this.tabEnd && (this.tabEnd.focus(), this.tabEnd.focus(), this.setActive(!1)),
            b == -1 && this.tabStart && (this.tabStart.focus(), this.tabStart.focus(), this.setActive(!1)), null) : a.style.display != "none" && (!this.smartTabOrder || !this.cells(a.parentNode.idd, a._cellIndex).isDisabled()) ? a : this._getNextCell(a, b)
    };
    this._nextRow = function (a, b) {
        var c = this.render_row(a + b);
        return!c || c == -1 ? null : c && c.style.display == "none" ? this._nextRow(a + b, b) : c
    };
    this.scrollPage = function (a) {
        if (this.rowsBuffer.length) {
            var b = this._realfake ? this._fake : this, c = Math.floor((b._r_select || this.getRowIndex(this.row.idd) ||
                0) + a * this.objBox.offsetHeight / (this._srdh || 20));
            c < 0 && (c = 0);
            c >= this.rowsBuffer.length && (c = this.rowsBuffer.length - 1);
            if (this._srnd && !this.rowsBuffer[c]) {
                this.objBox.scrollTop += Math.floor(a * this.objBox.offsetHeight / (this._srdh || 20)) * (this._srdh || 20);
                if (this._fake)this._fake.objBox.scrollTop = this.objBox.scrollTop;
                b._r_select = c
            } else {
                this.selectCell(c, this.cell._cellIndex, !0, !1, !1, this.multiLine || this._srnd);
                if (!this.multiLine && !this._srnd && !this._realfake && (this.objBox.scrollTop = this.getRowById(this.getRowId(c)).offsetTop,
                    this._fake))this._fake.objBox.scrollTop = this.objBox.scrollTop;
                b._r_select = null
            }
        }
    };
    this.doKey = function (a) {
        if (!a)return!0;
        if ((a.target || a.srcElement).value !== window.undefined) {
            var b = a.target || a.srcElement;
            if (!b.parentNode || b.parentNode.className.indexOf("editable") == -1)return!0
        }
        if (globalActiveDHTMLGridObject && this != globalActiveDHTMLGridObject)return globalActiveDHTMLGridObject.doKey(a);
        if (this.isActive == !1)return!0;
        if (this._htkebl)return!0;
        if (!this.callEvent("onKeyPress", [a.keyCode, a.ctrlKey, a.shiftKey,
            a]))return!1;
        var c = "k" + a.keyCode + "_" + (a.ctrlKey ? 1 : 0) + "_" + (a.shiftKey ? 1 : 0);
        if (this.cell) {
            if (this._key_events[c]) {
                if (!1 === this._key_events[c].call(this))return!0;
                a.preventDefault && a.preventDefault();
                a.cancelBubble = !0;
                return!1
            }
            this._key_events.k_other && this._key_events.k_other.call(this, a)
        }
        return!0
    };
    this.selectRow = function (a, b, c, d) {
        typeof a != "object" && (a = this.render_row(a));
        this.selectCell(a, 0, b, c, !1, d)
    };
    this.wasDblClicked = function (a) {
        var b = this.getFirstParentOfType(_isIE ? a.srcElement : a.target, "TD");
        if (b) {
            var c = b.parentNode.idd;
            return this.callEvent("onRowDblClicked", [c, b._cellIndex])
        }
    };
    this._onHeaderClick = function (a, b) {
        var c = this.grid, b = b || c.getFirstParentOfType(_isIE ? event.srcElement : a.target, "TD");
        if (this.grid.resized == null) {
            if (!this.grid.callEvent("onHeaderClick", [b._cellIndexS, a || window.event]))return!1;
            c.sortField(b._cellIndexS, !1, b)
        }
        this.grid.resized = null
    };
    this.deleteSelectedRows = function () {
        var a = this.selectedRows.length;
        if (a != 0) {
            var b = this.selectedRows;
            this.selectedRows = dhtmlxArray();
            for (var c = a - 1; c >= 0; c--) {
                var d = b[c];
                if (this.deleteRow(d.idd, d)) {
                    if (d == this.row)var g = c
                } else this.selectedRows[this.selectedRows.length] = d
            }
            if (g)try {
                g + 1 > this.rowsCol.length && g--, this.selectCell(g, 0, !0)
            } catch (h) {
                this.cell = this.row = null
            }
        }
    };
    this.getSelectedRowId = function () {
        for (var a = [], b = {}, c = 0; c < this.selectedRows.length; c++) {
            var d = this.selectedRows[c].idd;
            b[d] || (a[a.length] = d, b[d] = !0)
        }
        return a.length == 0 ? null : a.join(this.delim)
    };
    this.getSelectedCellIndex = function () {
        return this.cell != null ? this.cell._cellIndex :
            -1
    };
    this.getColWidth = function (a) {
        return parseInt(this.cellWidthPX[a])
    };
    this.setColWidth = function (a, b) {
        if (b == "*")this.initCellWidth[a] = "*"; else {
            if (this._hrrar[a])return;
            this.cellWidthType == "px" ? this.cellWidthPX[a] = parseInt(b) : this.cellWidthPC[a] = parseInt(b)
        }
        this.setSizes()
    };
    this.getRowIndex = function (a) {
        for (var b = 0; b < this.rowsBuffer.length; b++)if (this.rowsBuffer[b] && this.rowsBuffer[b].idd == a)return b;
        return-1
    };
    this.getRowId = function (a) {
        return this.rowsBuffer[a] ? this.rowsBuffer[a].idd : this.undefined
    };
    this.setRowId = function (a, b) {
        this.changeRowId(this.getRowId(a), b)
    };
    this.changeRowId = function (a, b) {
        if (a != b) {
            var c = this.rowsAr[a];
            c.idd = b;
            this.UserData[a] && (this.UserData[b] = this.UserData[a], this.UserData[a] = null);
            if (this._h2 && this._h2.get[a])this._h2.get[b] = this._h2.get[a], this._h2.get[b].id = b, delete this._h2.get[a];
            this.rowsAr[a] = null;
            this.rowsAr[b] = c;
            for (var d = 0; d < c.childNodes.length; d++)if (c.childNodes[d]._code)c.childNodes[d]._code = this._compileSCL(c.childNodes[d]._val, c.childNodes[d]);
            if (this._mat_links &&
                this._mat_links[a]) {
                var g = this._mat_links[a];
                delete this._mat_links[a];
                for (var h in g)for (d = 0; d < g[h].length; d++)this._compileSCL(g[h][d].original, g[h][d])
            }
            this.callEvent("onRowIdChange", [a, b])
        }
    };
    this.setColumnIds = function (a) {
        this.columnIds = a.split(this.delim)
    };
    this.setColumnId = function (a, b) {
        this.columnIds[a] = b
    };
    this.getColIndexById = function (a) {
        for (var b = 0; b < this.columnIds.length; b++)if (this.columnIds[b] == a)return b
    };
    this.getColumnId = function (a) {
        return this.columnIds[a]
    };
    this.getColLabel = this.getColumnLabel =
        function (a, b, c) {
            for (var d = (c || this.hdr).rows[(b || 0) + 1], g = 0; g < d.cells.length; g++)if (d.cells[g]._cellIndexS == a)return _isIE ? d.cells[g].innerText : d.cells[g].textContent;
            return""
        };
    this.getFooterLabel = function (a, b) {
        return this.getColumnLabel(a, b, this.ftr)
    };
    this.setRowTextBold = function (a) {
        var b = this.getRowById(a);
        if (b)b.style.fontWeight = "bold"
    };
    this.setRowTextStyle = function (a, b) {
        var c = this.getRowById(a);
        if (c)for (var d = 0; d < c.childNodes.length; d++) {
            var g = c.childNodes[d]._attrs.style || "";
            c.childNodes[d].style.cssText =
                g + "width:" + c.childNodes[d].style.width + ";" + b
        }
    };
    this.setRowColor = function (a, b) {
        for (var c = this.getRowById(a), d = 0; d < c.childNodes.length; d++)c.childNodes[d].bgColor = b
    };
    this.setCellTextStyle = function (a, b, c) {
        var d = this.getRowById(a);
        if (d) {
            var g = d.childNodes[d._childIndexes ? d._childIndexes[b] : b];
            if (g) {
                var h = "";
                g.style.cssText = h + "width:" + g.style.width + ";" + c
            }
        }
    };
    this.setRowTextNormal = function (a) {
        var b = this.getRowById(a);
        if (b)b.style.fontWeight = "normal"
    };
    this.doesRowExist = function (a) {
        return this.getRowById(a) !=
            null ? !0 : !1
    };
    this.getColumnsNum = function () {
        return this._cCount
    };
    this.moveRowUp = function (a) {
        var b = this.getRowById(a);
        if (this.isTreeGrid())return this.moveRowUDTG(a, -1);
        var c = this.rowsCol._dhx_find(b);
        if (b.previousSibling && c != 0) {
            b.parentNode.insertBefore(b, b.previousSibling);
            this.rowsCol._dhx_swapItems(c, c - 1);
            this.setSizes();
            var d = this.rowsBuffer._dhx_find(b);
            this.rowsBuffer._dhx_swapItems(d, d - 1);
            this._cssEven && this._fixAlterCss(c - 1)
        }
    };
    this.moveRowDown = function (a) {
        var b = this.getRowById(a);
        if (this.isTreeGrid())return this.moveRowUDTG(a,
            1);
        var c = this.rowsCol._dhx_find(b);
        if (b.nextSibling) {
            this.rowsCol._dhx_swapItems(c, c + 1);
            b.nextSibling.nextSibling ? b.parentNode.insertBefore(b, b.nextSibling.nextSibling) : b.parentNode.appendChild(b);
            this.setSizes();
            var d = this.rowsBuffer._dhx_find(b);
            this.rowsBuffer._dhx_swapItems(d, d + 1);
            this._cssEven && this._fixAlterCss(c)
        }
    };
    this.getCombo = function (a) {
        this.combos[a] || (this.combos[a] = new dhtmlXGridComboObject);
        return this.combos[a]
    };
    this.setUserData = function (a, b, c) {
        a || (a = "gridglobaluserdata");
        this.UserData[a] ||
        (this.UserData[a] = new Hashtable);
        this.UserData[a].put(b, c)
    };
    this.getUserData = function (a, b) {
        a || (a = "gridglobaluserdata");
        this.getRowById(a);
        var c = this.UserData[a];
        return c ? c.get(b) : ""
    };
    this.setEditable = function (a) {
        this.isEditable = convertStringToBoolean(a)
    };
    this.selectRowById = function (a, b, c, d) {
        d || (d = !1);
        this.selectCell(this.getRowById(a), 0, d, b, !1, c)
    };
    this.clearSelection = function () {
        this.editStop();
        for (var a = 0; a < this.selectedRows.length; a++) {
            var b = this.rowsAr[this.selectedRows[a].idd];
            if (b)b.className =
                b.className.replace(/rowselected/g, "")
        }
        this.selectedRows = dhtmlxArray();
        this.row = null;
        if (this.cell != null)this.cell.className = this.cell.className.replace(/cellselected/g, ""), this.cell = null;
        this.callEvent("onSelectionCleared", [])
    };
    this.copyRowContent = function (a, b) {
        var c = this.getRowById(a);
        if (this.isTreeGrid())this._copyTreeGridRowContent(c, a, b); else for (var d = 0; d < c.cells.length; d++)this.cells(b, d).setValue(this.cells(a, d).getValue());
        if (!_isIE)this.getRowById(a).cells[0].height = c.cells[0].offsetHeight
    };
    this.setFooterLabel = function (a, b, c) {
        return this.setColumnLabel(a, b, c, this.ftr)
    };
    this.setColumnLabel = function (a, b, c, d) {
        var g = (d || this.hdr).rows[c || 1], h = g._childIndexes ? g._childIndexes[a] : a;
        if (g.cells[h]) {
            if (this.useImagesInHeader) {
                g.cells[h].style.textAlign = "left";
                g.cells[h].innerHTML = "<img src='" + this.imgURL + "" + b + "' onerror='this.src = \"" + this.imgURL + "imageloaderror.gif\"'>";
                var l = new Image;
                l.src = this.imgURL + "" + b.replace(/(\.[a-z]+)/, ".des$1");
                this.preloadImagesAr[this.preloadImagesAr.length] = l;
                var k = new Image;
                k.src = this.imgURL + "" + b.replace(/(\.[a-z]+)/, ".asc$1");
                this.preloadImagesAr[this.preloadImagesAr.length] = k
            } else {
                var m = "<div class='hdrcell'>";
                if (b.indexOf("img:[") != -1) {
                    var n = b.replace(/.*\[([^>]+)\].*/, "$1"), b = b.substr(b.indexOf("]") + 1, b.length);
                    m += "<img width='18px' height='18px' align='absmiddle' src='" + n + "' hspace='2'>"
                }
                m += b;
                m += "</div>";
                g.cells[h].innerHTML = m;
                if (this._hstyles[h])g.cells[h].style.cssText = this._hstyles[h]
            }
            if ((b || "").indexOf("#") != -1) {
                var o = b.match(/(^|{)#([^}]+)(}|$)/);
                if (o) {
                    var p = "_in_header_" + o[2];
                    if (this[p])this[p](this.forceDivInHeader ? g.cells[h].firstChild : g.cells[h], h, b.split(o[0]))
                }
            }
        }
    };
    this.setColLabel = function (a, b, c, d) {
        return this.setColumnLabel(a, b, (c || 0) + 1, d)
    };
    this.clearAll = function (a) {
        if (this.obj.rows[0]) {
            if (this._h2 && (this._h2 = new dhtmlxHierarchy, this._fake))this._realfake ? this._h2 = this._fake._h2 : this._fake._h2 = this._h2;
            this.limit = this._limitC = 0;
            this.editStop(!0);
            this._dLoadTimer && window.clearTimeout(this._dLoadTimer);
            if (this._dload)this.objBox.scrollTop =
                0, this.limit = this._limitC || 0, this._initDrF = !0;
            for (var b = this.rowsCol.length, b = this.obj.rows.length, c = b - 1; c > 0; c--) {
                var d = this.obj.rows[c];
                d.parentNode.removeChild(d)
            }
            if (a) {
                this._master_row = null;
                this.obj.rows[0].parentNode.removeChild(this.obj.rows[0]);
                for (c = this.hdr.rows.length - 1; c >= 0; c--)d = this.hdr.rows[c], d.parentNode.removeChild(d);
                if (this.ftr)this.ftr.parentNode.removeChild(this.ftr), this.ftr = null;
                this._aHead = this.ftr = this.cellWidth = this._aFoot = null;
                this.cellType = dhtmlxArray();
                this._hrrar = [];
                this.columnIds =
                    [];
                this.combos = [];
                this._strangeParams = [];
                this.defVal = [];
                this._ivizcol = null
            }
            this.cell = this.row = null;
            this.rowsCol = dhtmlxArray();
            this.rowsAr = {};
            this._RaSeCol = [];
            this.rowsBuffer = dhtmlxArray();
            this.UserData = [];
            this.selectedRows = dhtmlxArray();
            if (this.pagingOn || this._srnd)this.xmlFileUrl = "";
            this.pagingOn && this.changePage(1);
            this._contextCallTimer && window.clearTimeout(this._contextCallTimer);
            this._sst && this.enableStableSorting(!0);
            this._fillers = this.undefined;
            this.setSortImgState(!1);
            this.setSizes();
            this.callEvent("onClearAll",
                [])
        }
    };
    this.sortField = function (a, b, c) {
        if (this.getRowsNum() == 0)return!1;
        var d = this.hdr.rows[0].cells[a];
        if (d && d.tagName == "TH" && this.fldSort.length - 1 >= d._cellIndex && this.fldSort[d._cellIndex] != "na") {
            var g = this.getSortingState(), h = g[0] == a && g[1] == "asc" ? "des" : "asc";
            if (this.callEvent("onBeforeSorting", [a, this.fldSort[a], h])) {
                this.sortImg.src = this.imgURL + "sort_" + (h == "asc" ? "asc" : "desc") + ".gif";
                if (this.useImagesInHeader) {
                    var l = this.hdr.rows[1].cells[d._cellIndex].firstChild;
                    if (this.fldSorted != null) {
                        var k = this.hdr.rows[1].cells[this.fldSorted._cellIndex].firstChild;
                        k.src = k.src.replace(/(\.asc\.)|(\.des\.)/, ".")
                    }
                    l.src = l.src.replace(/(\.[a-z]+)$/, "." + h + "$1")
                }
                this.sortRows(d._cellIndex, this.fldSort[d._cellIndex], h);
                this.fldSorted = d;
                this.r_fldSorted = c;
                var m = this.hdr.rows[1], m = c.parentNode, n = m._childIndexes ? m._childIndexes[d._cellIndex] : d._cellIndex;
                this.setSortImgPos(!1, !1, !1, c)
            }
        }
    };
    this.enableHeaderImages = function (a) {
        this.useImagesInHeader = a
    };
    this.setHeader = function (a, b, c) {
        for (var d = typeof a != "object" ? this._eSplit(a) : [].concat(a), g = [], h = new dhtmlxArray(0), l = [],
                 k = [], m = [], n = 0; n < d.length; n++)g[g.length] = Math.round(100 / d.length), h[h.length] = "ed", l[l.length] = "left", k[k.length] = "middle", m[m.length] = "na";
        this.splitSign = b || "#cspan";
        this.hdrLabels = d;
        this.cellWidth = g;
        this.initCellWidth.length || this.setInitWidthsP(g.join(this.delim), !0);
        this.cellType = h;
        this.cellAlign = l;
        this.cellVAlign = k;
        this.fldSort = m;
        this._hstyles = c || []
    };
    this._eSplit = function (a) {
        if (![].push)return a.split(this.delim);
        var b = "r" + (new Date).valueOf(), c = this.delim.replace(/([\|\+\*\^])/g, "\\$1");
        return(a ||
            "").replace(RegExp(c, "g"), b).replace(RegExp("\\\\" + b, "g"), this.delim).split(b)
    };
    this.getColType = function (a) {
        return this.cellType[a]
    };
    this.getColTypeById = function (a) {
        return this.cellType[this.getColIndexById(a)]
    };
    this.setColTypes = function (a) {
        this.cellType = dhtmlxArray(a.split(this.delim));
        this._strangeParams = [];
        for (var b = 0; b < this.cellType.length; b++) {
            if (this.cellType[b].indexOf("[") != -1) {
                var c = this.cellType[b].split(/[\[\]]+/g);
                this.cellType[b] = c[0];
                this.defVal[b] = c[1];
                c[1].indexOf("=") == 0 && (this.cellType[b] =
                    "math", this._strangeParams[b] = c[0])
            }
            window["eXcell_" + this.cellType[b]] || dhtmlxError.throwError("Configuration", "Incorrect cell type: " + this.cellType[b], [this, this.cellType[b]])
        }
    };
    this.setColSorting = function (a) {
        this.fldSort = a.split(this.delim)
    };
    this.setColAlign = function (a) {
        this.cellAlign = a.split(this.delim);
        for (var b = 0; b < this.cellAlign.length; b++)this.cellAlign[b] = this.cellAlign[b]._dhx_trim()
    };
    this.setColVAlign = function (a) {
        this.cellVAlign = a.split(this.delim)
    };
    this.setNoHeader = function (a) {
        this.noHeader =
            convertStringToBoolean(a)
    };
    this.showRow = function (a) {
        this.getRowById(a);
        this._h2 && this.openItem(this._h2.get[a].parent.id);
        for (var b = this.getRowById(a).childNodes[0]; b && b.style.display == "none";)b = b.nextSibling;
        b && this.moveToVisible(b, !0)
    };
    this.setStyle = function (a, b, c, d) {
        this.ssModifier = [a, b, c, c, d];
        for (var g = ["#" + this.entBox.id + " table.hdr td", "#" + this.entBox.id + " table.obj td", "#" + this.entBox.id + " table.obj tr.rowselected td.cellselected", "#" + this.entBox.id + " table.obj td.cellselected", "#" + this.entBox.id +
            " table.obj tr.rowselected td"], h = 0; !_isIE;) {
            try {
                var l = document.styleSheets[h].cssRules.length
            } catch (k) {
                h++;
                continue
            }
            break
        }
        for (var m = 0; m < g.length; m++)this.ssModifier[m] && (_isIE ? document.styleSheets[0].addRule(g[m], this.ssModifier[m]) : document.styleSheets[h].insertRule(g[m] + (" { " + this.ssModifier[m] + " }"), document.styleSheets[h].cssRules.length))
    };
    this.setColumnColor = function (a) {
        this.columnColor = a.split(this.delim)
    };
    this.enableAlterCss = function (a, b, c, d) {
        (a || b) && this.attachEvent("onGridReconstructed",
            function () {
                this._fixAlterCss();
                this._fake && this._fake._fixAlterCss()
            });
        this._cssSP = c;
        this._cssSU = d;
        this._cssEven = a;
        this._cssUnEven = b
    };
    this._fixAlterCss = function (a) {
        if (this._h2 && (this._cssSP || this._cssSU))return this._fixAlterCssTGR(a);
        if (this._cssEven || this._cssUnEven)for (var b = a = a || 0, c = a; c < this.rowsCol.length; c++)if (this.rowsCol[c] && this.rowsCol[c].style.display != "none")this.rowsCol[c]._cntr ? b = 1 : (this.rowsCol[c].className = this.rowsCol[c].className.indexOf("rowselected") != -1 ? b % 2 == 1 ? this._cssUnEven +
            " rowselected " + (this.rowsCol[c]._css || "") : this._cssEven + " rowselected " + (this.rowsCol[c]._css || "") : b % 2 == 1 ? this._cssUnEven + " " + (this.rowsCol[c]._css || "") : this._cssEven + " " + (this.rowsCol[c]._css || ""), b++)
    };
    this.getPosition = function (a, b) {
        if (!b && !_isChrome) {
            var c = getOffset(a);
            return[c.left, c.top]
        }
        for (var b = b || document.body, d = a, g = 0, h = 0; d && d != b;)g += d.offsetLeft - d.scrollLeft, h += d.offsetTop - d.scrollTop, d = d.offsetParent;
        b == document.body && (_isIE ? (h += document.body.offsetTop || document.documentElement.offsetTop,
            g += document.body.offsetLeft || document.documentElement.offsetLeft) : _isFF || (g += document.body.offsetLeft, h += document.body.offsetTop));
        return[g, h]
    };
    this.getFirstParentOfType = function (a, b) {
        for (; a && a.tagName != b && a.tagName != "BODY";)a = a.parentNode;
        return a
    };
    this.objBox.onscroll = function () {
        this.grid._doOnScroll()
    };
    this.hdrBox.onscroll = function () {
        if (!this._try_header_sync) {
            this._try_header_sync = !0;
            if (this.grid.objBox.scrollLeft != this.scrollLeft)this.grid.objBox.scrollLeft = this.scrollLeft;
            this._try_header_sync = !1
        }
    };
    if (!_isOpera || _OperaRv > 8.5)this.hdr.onmousemove = function (a) {
        this.grid.changeCursorState(a || window.event)
    }, this.hdr.onmousedown = function (a) {
        return this.grid.startColResize(a || window.event)
    };
    this.obj.onmousemove = this._drawTooltip;
    this.objBox.onclick = function (a) {
        (a || event).cancelBubble = !0
    };
    this.obj.onclick = function (a) {
        this.grid._doClick(a || window.event);
        this.grid._sclE ? this.grid.editCell(a || window.event) : this.grid.editStop();
        (a || event).cancelBubble = !0
    };
    _isMacOS ? this.entBox.oncontextmenu = function (a) {
        a.cancelBubble = !0;
        a.returnValue = !1;
        return this.grid._doContClick(a || window.event)
    } : (this.entBox.onmousedown = function (a) {
        return this.grid._doContClick(a || window.event)
    }, this.entBox.oncontextmenu = function (a) {
        if (this.grid._ctmndx)(a || event).cancelBubble = !0;
        return!this.grid._ctmndx
    });
    this.obj.ondblclick = function (a) {
        if (!this.grid.wasDblClicked(a || window.event))return!1;
        if (this.grid._dclE) {
            var b = this.grid.getFirstParentOfType(_isIE ? event.srcElement : a.target, "TR");
            b == this.grid.row && this.grid.editCell(a || window.event)
        }
        (a ||
            event).cancelBubble = !0;
        if (_isOpera)return!1
    };
    this.hdr.onclick = this._onHeaderClick;
    this.sortImg.onclick = function () {
        c._onHeaderClick.apply({grid:c}, [null, c.r_fldSorted])
    };
    this.hdr.ondblclick = this._onHeaderDblClick;
    if (!document.body._dhtmlxgrid_onkeydown)dhtmlxEvent(document, "keydown", function (a) {
        if (globalActiveDHTMLGridObject)return globalActiveDHTMLGridObject.doKey(a || window.event)
    }), document.body._dhtmlxgrid_onkeydown = !0;
    dhtmlxEvent(document.body, "click", function () {
        c.editStop && c.editStop();
        c.isActive &&
        c.setActive(!1)
    });
    this.entBox.onbeforeactivate = function () {
        this._still_active = null;
        this.grid.setActive();
        event.cancelBubble = !0
    };
    this.entBox.onbeforedeactivate = function () {
        this.grid._still_active ? this.grid._still_active = null : this.grid.isActive = !1;
        event.cancelBubble = !0
    };
    if (this.entBox.style.height.toString().indexOf("%") != -1)this._delta_y = this.entBox.style.height;
    if (this.entBox.style.width.toString().indexOf("%") != -1)this._delta_x = this.entBox.style.width;
    (this._delta_x || this._delta_y) && this._setAutoResize();
    this.setColHidden = this.setColumnsVisibility;
    this.enableCollSpan = this.enableColSpan;
    this.setMultiselect = this.enableMultiselect;
    this.setMultiLine = this.enableMultiline;
    this.deleteSelectedItem = this.deleteSelectedRows;
    this.getSelectedId = this.getSelectedRowId;
    this.getHeaderCol = this.getColumnLabel;
    this.isItemExists = this.doesRowExist;
    this.getColumnCount = this.getColumnsNum;
    this.setSelectedRow = this.selectRowById;
    this.setHeaderCol = this.setColumnLabel;
    this.preventIECashing = this.preventIECaching;
    this.enableAutoHeigth =
        this.enableAutoHeight;
    this.getUID = this.uid;
    dhtmlx.image_path && this.setImagePath(dhtmlx.image_path);
    dhtmlx.skin && this.setSkin(dhtmlx.skin);
    return this
}
dhtmlXGridObject.prototype = {getRowAttribute:function (a, b) {
    return this.getRowById(a)._attrs[b]
}, setRowAttribute:function (a, b, c) {
    this.getRowById(a)._attrs[b] = c
}, isTreeGrid:function () {
    return this.cellType._dhx_find("tree") != -1
}, setRowHidden:function (a, b) {
    var c = convertStringToBoolean(b), d = this.getRowById(a);
    if (d) {
        d.expand === "" && this.collapseKids(d);
        if (b && d.style.display != "none") {
            d.style.display = "none";
            var e = this.selectedRows._dhx_find(d);
            if (e != -1) {
                d.className = d.className.replace("rowselected", "");
                for (var i =
                    0; i < d.childNodes.length; i++)d.childNodes[i].className = d.childNodes[i].className.replace(/cellselected/g, "");
                this.selectedRows._dhx_removeAt(e)
            }
            this.callEvent("onGridReconstructed", [])
        }
        if (!b && d.style.display == "none")d.style.display = "", this.callEvent("onGridReconstructed", []);
        this.callEvent("onRowHide", [a, b]);
        this.setSizes()
    }
}, enableRowsHover:function (a, b) {
    this._unsetRowHover(!1, !0);
    this._hvrCss = b;
    if (convertStringToBoolean(a)) {
        if (!this._elmnh)this.obj._honmousemove = this.obj.onmousemove, this.obj.onmousemove =
            this._setRowHover, _isIE ? this.obj.onmouseleave = this._unsetRowHover : this.obj.onmouseout = this._unsetRowHover, this._elmnh = !0
    } else if (this._elmnh)this.obj.onmousemove = this.obj._honmousemove, _isIE ? this.obj.onmouseleave = null : this.obj.onmouseout = null, this._elmnh = !1
}, enableEditEvents:function (a, b, c) {
    this._sclE = convertStringToBoolean(a);
    this._dclE = convertStringToBoolean(b);
    this._f2kE = convertStringToBoolean(c)
}, enableLightMouseNavigation:function (a) {
    if (convertStringToBoolean(a)) {
        if (!this._elmn)this.entBox._onclick =
            this.entBox.onclick, this.entBox.onclick = function () {
            return!0
        }, this.obj._onclick = this.obj.onclick, this.obj.onclick = function (a) {
            var c = this.grid.getFirstParentOfType(a ? a.target : event.srcElement, "TD");
            if (c)this.grid.editStop(), this.grid.doClick(c), this.grid.editCell(), (a || event).cancelBubble = !0
        }, this.obj._onmousemove = this.obj.onmousemove, this.obj.onmousemove = this._autoMoveSelect, this._elmn = !0
    } else if (this._elmn)this.entBox.onclick = this.entBox._onclick, this.obj.onclick = this.obj._onclick, this.obj.onmousemove =
        this.obj._onmousemove, this._elmn = !1
}, _unsetRowHover:function (a, b) {
    that = b ? this : this.grid;
    if (that._lahRw && that._lahRw != b) {
        for (var c = 0; c < that._lahRw.childNodes.length; c++)that._lahRw.childNodes[c].className = that._lahRw.childNodes[c].className.replace(that._hvrCss, "");
        that._lahRw = null
    }
}, _setRowHover:function (a) {
    var b = this.grid.getFirstParentOfType(a ? a.target : event.srcElement, "TD");
    if (b && b.parentNode != this.grid._lahRw) {
        this.grid._unsetRowHover(0, b);
        b = b.parentNode;
        if (!b.idd || b.idd == "__filler__")return;
        for (var c = 0; c < b.childNodes.length; c++)b.childNodes[c].className += " " + this.grid._hvrCss;
        this.grid._lahRw = b
    }
    this._honmousemove(a)
}, _autoMoveSelect:function (a) {
    if (!this.grid.editor) {
        var b = this.grid.getFirstParentOfType(a ? a.target : event.srcElement, "TD");
        b.parentNode.idd && this.grid.doClick(b, !0, 0)
    }
    this._onmousemove(a)
}, destructor:function () {
    this.editStop(!0);
    if (this._sizeTime)this._sizeTime = window.clearTimeout(this._sizeTime);
    this.entBox.className = (this.entBox.className || "").replace(/gridbox.*/, "");
    if (this.formInputs)for (var a =
        0; a < this.formInputs.length; a++)this.parentForm.removeChild(this.formInputs[a]);
    var b;
    this.xmlLoader = this.xmlLoader.destructor();
    for (a = 0; a < this.rowsCol.length; a++)if (this.rowsCol[a])this.rowsCol[a].grid = null;
    for (a in this.rowsAr)this.rowsAr[a] && (this.rowsAr[a] = null);
    this.rowsCol = new dhtmlxArray;
    this.rowsAr = {};
    this.entBox.innerHTML = "";
    var c = function () {
    };
    this.setSizes = this._update_srnd_view = this.callEvent = this.entBox.onclick = this.entBox.onmousedown = this.entBox.onbeforeactivate = this.entBox.onbeforedeactivate =
        this.entBox.onbeforedeactivate = this.entBox.onselectstart = c;
    this.entBox.grid = this.objBox.grid = this.hdrBox.grid = this.obj.grid = this.hdr.grid = null;
    if (this._fake)this.globalBox.innerHTML = "", this._fake.setSizes = this._fake._update_srnd_view = this._fake.callEvent = c, this.globalBox.onclick = this.globalBox.onmousedown = this.globalBox.onbeforeactivate = this.globalBox.onbeforedeactivate = this.globalBox.onbeforedeactivate = this.globalBox.onselectstart = c;
    for (b in this) {
        if (this[b] && this[b].m_obj)this[b].m_obj = null;
        this[b] =
            null
    }
    this == globalActiveDHTMLGridObject && (globalActiveDHTMLGridObject = null);
    return null
}, getSortingState:function () {
    var a = [];
    if (this.fldSorted)a[0] = this.fldSorted._cellIndex, a[1] = this.sortImg.src.indexOf("sort_desc.gif") != -1 ? "des" : "asc";
    return a
}, enableAutoHeight:function (a, b, c) {
    this._ahgr = convertStringToBoolean(a);
    this._ahgrF = convertStringToBoolean(c);
    this._ahgrM = b || null;
    if (arguments.length == 1)this.objBox.style.overflowY = a ? "hidden" : "auto";
    if (b == "auto")this._ahgrM = null, this._ahgrMA = !0, this._setAutoResize()
},
    enableStableSorting:function (a) {
        this._sst = convertStringToBoolean(a);
        this.rowsCol.stablesort = function (a) {
            for (var c = this.length - 1, d = 0; d < this.length - 1; d++) {
                for (var e = 0; e < c; e++)if (a(this[e], this[e + 1]) > 0) {
                    var i = this[e];
                    this[e] = this[e + 1];
                    this[e + 1] = i
                }
                c--
            }
        }
    }, enableKeyboardSupport:function (a) {
        this._htkebl = !convertStringToBoolean(a)
    }, enableContextMenu:function (a) {
        this._ctmndx = a
    }, setScrollbarWidthCorrection:function () {
    }, enableTooltips:function (a) {
        this._enbTts = a.split(",");
        for (var b = 0; b < this._enbTts.length; b++)this._enbTts[b] =
            convertStringToBoolean(this._enbTts[b])
    }, enableResizing:function (a) {
        this._drsclmn = a.split(",");
        for (var b = 0; b < this._drsclmn.length; b++)this._drsclmn[b] = convertStringToBoolean(this._drsclmn[b])
    }, setColumnMinWidth:function (a, b) {
        if (arguments.length == 2) {
            if (!this._drsclmW)this._drsclmW = [];
            this._drsclmW[b] = a
        } else this._drsclmW = a.split(",")
    }, enableCellIds:function (a) {
        this._enbCid = convertStringToBoolean(a)
    }, lockRow:function (a, b) {
        var c = this.getRowById(a);
        if (c)c._locked = convertStringToBoolean(b), this.cell &&
            this.cell.parentNode.idd == a && this.editStop()
    }, _getRowArray:function (a) {
        for (var b = [], c = 0; c < a.childNodes.length; c++) {
            var d = this.cells3(a, c);
            b[c] = d.getValue()
        }
        return b
    }, _launchCommands:function (a) {
        for (var b = 0; b < a.length; b++) {
            for (var c = [], d = 0; d < a[b].childNodes.length; d++)if (a[b].childNodes[d].nodeType == 1)c[c.length] = a[b].childNodes[d].firstChild.data;
            this[a[b].getAttribute("command")].apply(this, c)
        }
    }, _parseHead:function (a) {
        var b = this.xmlLoader.doXPath("./head", a);
        if (b.length) {
            var c = this.xmlLoader.doXPath("./column",
                b[0]), d = this.xmlLoader.doXPath("./settings", b[0]), e = "setInitWidths", i = !1;
            if (d[0])for (var j = 0; j < d[0].childNodes.length; j++)switch (d[0].childNodes[j].tagName) {
                case "colwidth":
                    d[0].childNodes[j].firstChild && d[0].childNodes[j].firstChild.data == "%" && (e = "setInitWidthsP");
                    break;
                case "splitat":
                    i = d[0].childNodes[j].firstChild ? d[0].childNodes[j].firstChild.data : !1
            }
            this._launchCommands(this.xmlLoader.doXPath("./beforeInit/call", b[0]));
            if (c.length > 0) {
                this.hdr.rows.length > 0 && this.clearAll(!0);
                for (var f = [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ], g = ",width,type,align,sort,color,format,hidden,id".split(","), h = ["", e, "setColTypes", "setColAlign", "setColSorting", "setColumnColor", "", "", "setColumnIds"], l = 0; l < c.length; l++) {
                    for (var k = 1; k < g.length; k++)f[k].push(c[l].getAttribute(g[k]));
                    f[0].push((c[l].firstChild ? c[l].firstChild.data : "").replace(/^\s*((\s\S)*.+)\s*$/gi, "$1"))
                }
                this.setHeader(f[0]);
                for (l = 0; l < h.length; l++)if (h[l])this[h[l]](f[l].join(this.delim));
                for (l = 0; l < c.length; l++)if (this.cellType[l].indexOf("co") == 0 || this.cellType[l] ==
                    "clist") {
                    var m = this.xmlLoader.doXPath("./option", c[l]);
                    if (m.length) {
                        var n = [];
                        if (this.cellType[l] == "clist") {
                            for (k = 0; k < m.length; k++)n[n.length] = m[k].firstChild ? m[k].firstChild.data : "";
                            this.registerCList(l, n)
                        } else for (var o = this.getCombo(l), k = 0; k < m.length; k++)o.put(m[k].getAttribute("value"), m[k].firstChild ? m[k].firstChild.data : "")
                    }
                } else f[6][l] && (this.cellType[l].toLowerCase().indexOf("calendar") != -1 || this.fldSort[l] == "date" ? this.setDateFormat(f[6][l]) : this.setNumberFormat(f[6][l], l));
                this.init();
                var p =
                    f[7].join(this.delim);
                this.setColHidden && p.replace(/,/g, "") != "" && this.setColHidden(p);
                i && this.splitAt && this.splitAt(i)
            }
            this._launchCommands(this.xmlLoader.doXPath("./afterInit/call", b[0]))
        }
        var r = this.xmlLoader.doXPath("//rows/userdata", a);
        if (r.length > 0) {
            this.UserData.gridglobaluserdata || (this.UserData.gridglobaluserdata = new Hashtable);
            for (k = 0; k < r.length; k++) {
                for (var s = "", t = 0; t < r[k].childNodes.length; t++)s += r[k].childNodes[t].nodeValue;
                this.UserData.gridglobaluserdata.put(r[k].getAttribute("name"),
                    s)
            }
        }
    }, getCheckedRows:function (a) {
        var b = [];
        this.forEachRowA(function (c) {
            this.cells(c, a).getValue() != 0 && b.push(c)
        }, !0);
        return b.join(",")
    }, checkAll:function () {
        for (var a = arguments.length ? arguments[0] : 1, b = 0; b < this.getColumnsNum(); b++)this.getColType(b) == "ch" && this.setCheckedRows(b, a)
    }, uncheckAll:function () {
        this.checkAll(0)
    }, setCheckedRows:function (a, b) {
        this.forEachRowA(function (c) {
            this.cells(c, a).isCheckbox() && this.cells(c, a).setValue(b)
        })
    }, _drawTooltip:function (a) {
        var b = this.grid.getFirstParentOfType(a ?
            a.target : event.srcElement, "TD");
        if (!b || this.grid.editor && this.grid.editor.cell == b)return!0;
        var c = b.parentNode;
        if (c.idd && c.idd != "__filler__") {
            var d = a ? a.target : event.srcElement;
            if (c.idd == window.unknown)return!0;
            if (!this.grid.callEvent("onMouseOver", [c.idd, b._cellIndex, a || window.event]))return!0;
            if (this.grid._enbTts && !this.grid._enbTts[b._cellIndex]) {
                if (d.title)d.title = "";
                return!0
            }
            if (!(b._cellIndex >= this.grid._cCount)) {
                var e = this.grid.cells3(c, b._cellIndex);
                if (e && e.cell && e.cell._attrs) {
                    if (d._title)e.cell.title =
                        "";
                    if (!e.cell._attrs.title)d._title = !0;
                    if (e)d.title = e.cell._attrs.title || (e.getTitle ? e.getTitle() : (e.getValue() || "").toString().replace(/<[^>]*>/gi, ""));
                    return!0
                }
            }
        }
    }, enableCellWidthCorrection:function (a) {
        if (_isFF)this._wcorr = parseInt(a)
    }, getAllRowIds:function (a) {
        for (var b = [], c = 0; c < this.rowsBuffer.length; c++)this.rowsBuffer[c] && b.push(this.rowsBuffer[c].idd);
        return b.join(a || this.delim)
    }, getAllItemIds:function () {
        return this.getAllRowIds()
    }, preventIECaching:function (a) {
        this.no_cashe = convertStringToBoolean(a);
        this.xmlLoader.rSeed = this.no_cashe
    }, enableColumnAutoSize:function (a) {
        this._eCAS = convertStringToBoolean(a)
    }, _onHeaderDblClick:function (a) {
        var b = this.grid, c = b.getFirstParentOfType(_isIE ? event.srcElement : a.target, "TD");
        if (!b._eCAS)return!1;
        b.adjustColumnSize(c._cellIndexS)
    }, adjustColumnSize:function (a, b) {
        if (!this._hrrar || !this._hrrar[a]) {
            this._notresize = !0;
            var c = 0;
            this._setColumnSizeR(a, 20);
            for (var d = 1; d < this.hdr.rows.length; d++) {
                var e = this.hdr.rows[d];
                if ((e = e.childNodes[e._childIndexes ? e._childIndexes[a] :
                    a]) && (!e.colSpan || e.colSpan < 2) && e._cellIndex == a)e.childNodes[0] && e.childNodes[0].className == "hdrcell" && (e = e.childNodes[0]), c = Math.max(c, _isFF || _isOpera ? e.textContent.length * this.fontWidth : e.scrollWidth)
            }
            for (var i = this.obj.rows.length, j = 1; j < i; j++) {
                var f = this.obj.rows[j];
                this.rowsAr[f.idd] && !(f._childIndexes && f._childIndexes[a] != a) && f.childNodes[a] && (f = _isFF || _isOpera || b ? f.childNodes[a].textContent.length * this.fontWidth : f.childNodes[a].scrollWidth, f > c && (c = f))
            }
            c += 20 + (b || 0);
            this._setColumnSizeR(a, c);
            this._notresize = !1;
            this.setSizes()
        }
    }, detachHeader:function (a, b) {
        var b = b || this.hdr, c = b.rows[a + 1];
        c && c.parentNode.removeChild(c);
        this.setSizes()
    }, detachFooter:function (a) {
        this.detachHeader(a, this.ftr)
    }, attachHeader:function (a, b, c) {
        typeof a == "string" && (a = this._eSplit(a));
        typeof b == "string" && (b = b.split(this.delim));
        c = c || "_aHead";
        if (this.hdr.rows.length)if (a)this._createHRow([a, b], this[c == "_aHead" ? "hdr" : "ftr"]); else {
            if (this[c])for (var d = 0; d < this[c].length; d++)this.attachHeader.apply(this, this[c][d])
        } else this[c] ||
            (this[c] = []), this[c][this[c].length] = [a, b, c]
    }, _createHRow:function (a, b) {
        if (!b) {
            if (this.entBox.style.position != "absolute")this.entBox.style.position = "relative";
            var c = document.createElement("DIV");
            c.className = "ftr";
            this.entBox.appendChild(c);
            var d = document.createElement("TABLE");
            d.cellPadding = d.cellSpacing = 0;
            if (!_isIE || _isIE == 8)d.width = "100%", d.style.paddingRight = "20px";
            d.style.marginRight = "20px";
            d.style.tableLayout = "fixed";
            c.appendChild(d);
            d.appendChild(document.createElement("TBODY"));
            this.ftr = b =
                d;
            for (var e = d.insertRow(0), i = this.hdrLabels.length <= 1 ? a[0].length : this.hdrLabels.length, j = 0; j < i; j++)e.appendChild(document.createElement("TH")), e.childNodes[j]._cellIndex = j;
            _isIE && _isIE < 8 ? e.style.position = "absolute" : e.style.height = "auto"
        }
        var f = a[1], c = document.createElement("TR");
        b.rows[0].parentNode.appendChild(c);
        for (j = 0; j < a[0].length; j++)if (a[0][j] == "#cspan") {
            var g = c.cells[c.cells.length - 1];
            g.colSpan = (g.colSpan || 1) + 1
        } else if (a[0][j] == "#rspan" && b.rows.length > 1) {
            for (var h = b.rows.length - 2, l = !1, g = null; !l;) {
                for (var g =
                    b.rows[h], k = 0; k < g.cells.length; k++)if (g.cells[k]._cellIndex == j) {
                    l = k + 1;
                    break
                }
                h--
            }
            g = g.cells[l - 1];
            g.rowSpan = (g.rowSpan || 1) + 1
        } else {
            var m = document.createElement("TD");
            m._cellIndex = m._cellIndexS = j;
            if (this._hrrar && this._hrrar[j] && !_isIE)m.style.display = "none";
            if (typeof a[0][j] == "object")m.appendChild(a[0][j]); else if (m.innerHTML = this.forceDivInHeader ? "<div class='hdrcell'>" + (a[0][j] || "&nbsp;") + "</div>" : a[0][j] || "&nbsp;", (a[0][j] || "").indexOf("#") != -1)if (d = a[0][j].match(/(^|{)#([^}]+)(}|$)/)) {
                var n = "_in_header_" +
                    d[2];
                if (this[n])this[n](this.forceDivInHeader ? m.firstChild : m, j, a[0][j].split(d[0]))
            }
            if (f)m.style.cssText = f[j];
            c.appendChild(m)
        }
        var o = b;
        if (_isKHTML)b._kTimer && window.clearTimeout(b._kTimer), b._kTimer = window.setTimeout(function () {
            b.rows[1].style.display = "none";
            window.setTimeout(function () {
                b.rows[1].style.display = ""
            }, 1)
        }, 500)
    }, forEachRow:function (a) {
        for (var b in this.rowsAr)this.rowsAr[b] && this.rowsAr[b].idd && a.apply(this, [this.rowsAr[b].idd])
    }, forEachRowA:function (a) {
        for (var b = 0; b < this.rowsBuffer.length; b++)this.rowsBuffer[b] &&
        a.call(this, this.render_row(b).idd)
    }, forEachCell:function (a, b) {
        var c = this.getRowById(a);
        if (c)for (var d = 0; d < this._cCount; d++)b(this.cells3(c, d), d)
    }, enableAutoWidth:function (a, b, c) {
        this._awdth = [convertStringToBoolean(a), parseInt(b || 99999), parseInt(c || 0)];
        if (arguments.length == 1)this.objBox.style.overflowX = a ? "hidden" : "auto"
    }, updateFromXML:function (a, b, c, d) {
        typeof b == "undefined" && (b = !0);
        this._refresh_mode = [!0, b, c];
        this.load(a, d)
    }, _refreshFromXML:function (a) {
        this._f_rowsBuffer && this.filterBy(0, "");
        reset = !1;
        if (window.eXcell_tree)eXcell_tree.prototype.setValueX = eXcell_tree.prototype.setValue, eXcell_tree.prototype.setValue = function (a) {
            var b = this.grid._h2.get[this.cell.parentNode.idd];
            b && this.cell.parentNode.valTag ? this.setLabel(a) : this.setValueX(a)
        };
        var b = this.cellType._dhx_find("tree");
        a.getXMLTopNode("rows");
        var c = a.doXPath("//rows")[0].getAttribute("parent") || 0, d = {};
        this._refresh_mode[2] && (b != -1 ? this._h2.forEachChild(c, function (a) {
            d[a.id] = !0
        }, this) : this.forEachRow(function (a) {
            d[a] = !0
        }));
        for (var e =
            a.doXPath("//row"), i = 0; i < e.length; i++) {
            var j = e[i], f = j.getAttribute("id");
            d[f] = !1;
            c = j.parentNode.getAttribute("id") || c;
            if (this.rowsAr[f] && this.rowsAr[f].tagName != "TR")this._h2 ? this._h2.get[f].buff.data = j : this.rowsBuffer[this.getRowIndex(f)].data = j, this.rowsAr[f] = j; else if (this.rowsAr[f])this._process_xml_row(this.rowsAr[f], j, -1), this._postRowProcessing(this.rowsAr[f], !0); else if (this._refresh_mode[1]) {
                var g = {idd:f, data:j, _parser:this._process_xml_row, _locator:this._get_xml_data}, h = this.rowsBuffer.length;
                this._refresh_mode[1] == "top" ? (this.rowsBuffer.unshift(g), h = 0) : this.rowsBuffer.push(g);
                if (this._h2)reset = !0, this._h2.add(f, j.parentNode.getAttribute("id") || j.parentNode.getAttribute("parent")).buff = this.rowsBuffer[this.rowsBuffer.length - 1];
                this.rowsAr[f] = j;
                j = this.render_row(h);
                this._insertRowAt(j, h ? -1 : 0)
            }
        }
        if (this._refresh_mode[2])for (f in d)d[f] && this.rowsAr[f] && this.deleteRow(f);
        this._refresh_mode = null;
        if (window.eXcell_tree)eXcell_tree.prototype.setValue = eXcell_tree.prototype.setValueX;
        reset && this._renderSort();
        if (this._f_rowsBuffer)this._f_rowsBuffer = null, this.filterByAll()
    }, getCustomCombo:function (a, b) {
        var c = this.cells(a, b).cell;
        if (!c._combo)c._combo = new dhtmlXGridComboObject;
        return c._combo
    }, setTabOrder:function (a) {
        var b = a.split(this.delim);
        this._tabOrder = [];
        for (var c = this._cCount || a.length, d = 0; d < c; d++)b[d] = {c:parseInt(b[d]), ind:d};
        b.sort(function (a, b) {
            return a.c > b.c ? 1 : -1
        });
        for (d = 0; d < c; d++)this._tabOrder[b[d].ind] = !b[d + 1] || typeof b[d].c == "undefined" ? (b[0].ind + 1) * -1 : b[d + 1].ind
    }, i18n:{loading:"Loading",
        decimal_separator:".", group_separator:","}, _key_events:{k13_1_0:function () {
        var a = this.rowsCol._dhx_find(this.row);
        this.selectCell(this.rowsCol[a + 1], this.cell._cellIndex, !0)
    }, k13_0_1:function () {
        var a = this.rowsCol._dhx_find(this.row);
        this.selectCell(this.rowsCol[a - 1], this.cell._cellIndex, !0)
    }, k13_0_0:function () {
        this.editStop();
        this.callEvent("onEnter", [this.row ? this.row.idd : null, this.cell ? this.cell._cellIndex : null]);
        this._still_active = !0
    }, k9_0_0:function () {
        this.editStop();
        if (!this.callEvent("onTab",
            [!0]))return!0;
        var a = this._getNextCell(null, 1);
        if (a)this.selectCell(a.parentNode, a._cellIndex, this.row != a.parentNode, !1, !0), this._still_active = !0
    }, k9_0_1:function () {
        this.editStop();
        if (!this.callEvent("onTab", [!1]))return!1;
        var a = this._getNextCell(null, -1);
        if (a)this.selectCell(a.parentNode, a._cellIndex, this.row != a.parentNode, !1, !0), this._still_active = !0
    }, k113_0_0:function () {
        this._f2kE && this.editCell()
    }, k32_0_0:function () {
        var a = this.cells4(this.cell);
        if (!a.changeState || a.changeState() === !1)return!1
    },
        k27_0_0:function () {
            this.editStop(!0)
        }, k33_0_0:function () {
            this.pagingOn ? this.changePage(this.currentPage - 1) : this.scrollPage(-1)
        }, k34_0_0:function () {
            this.pagingOn ? this.changePage(this.currentPage + 1) : this.scrollPage(1)
        }, k37_0_0:function () {
            if (!this.editor && this.isTreeGrid())this.collapseKids(this.row); else return!1
        }, k39_0_0:function () {
            if (!this.editor && this.isTreeGrid())this.expandKids(this.row); else return!1
        }, k40_0_0:function () {
            var a = this._realfake ? this._fake : this;
            if (this.editor && this.editor.combo)this.editor.shiftNext();
            else {
                if (!this.row.idd)return;
                var b = Math.max(a._r_select || 0, this.getRowIndex(this.row.idd)) + 1;
                if (this.rowsBuffer[b])a._r_select = null, this.selectCell(b, this.cell._cellIndex, !0), a.pagingOn && a.showRow(a.getRowId(b)); else {
                    if (!this.callEvent("onLastRow", []))return!1;
                    this._key_events.k34_0_0.apply(this, []);
                    this.pagingOn && this.rowsCol[b] && this.selectCell(b, 0, !0)
                }
            }
            this._still_active = !0
        }, k38_0_0:function () {
            var a = this._realfake ? this._fake : this;
            if (this.editor && this.editor.combo)this.editor.shiftPrev(); else {
                if (!this.row.idd)return;
                var b = this.getRowIndex(this.row.idd) + 1;
                if (b != -1 && (!this.pagingOn || b != 1)) {
                    var c = this._nextRow(b - 1, -1);
                    this.selectCell(c, this.cell._cellIndex, !0);
                    a.pagingOn && c && a.showRow(c.idd)
                } else this._key_events.k33_0_0.apply(this, [])
            }
            this._still_active = !0
        }}, _build_master_row:function () {
        for (var a = document.createElement("DIV"), b = ["<table><tr>"], c = 0; c < this._cCount; c++)b.push("<td></td>");
        b.push("</tr></table>");
        a.innerHTML = b.join("");
        this._master_row = a.firstChild.rows[0]
    }, _prepareRow:function (a) {
        this._master_row ||
        this._build_master_row();
        for (var b = this._master_row.cloneNode(!0), c = 0; c < b.childNodes.length; c++) {
            b.childNodes[c]._cellIndex = c;
            if (this._enbCid)b.childNodes[c].id = "c_" + a + "_" + c;
            this.dragAndDropOff && this.dragger.addDraggableItem(b.childNodes[c], this)
        }
        b.idd = a;
        b.grid = this;
        return b
    }, _process_jsarray_row:function (a, b) {
        a._attrs = {};
        for (var c = 0; c < a.childNodes.length; c++)a.childNodes[c]._attrs = {};
        this._fillRow(a, this._c_order ? this._swapColumns(b) : b);
        return a
    }, _get_jsarray_data:function (a, b) {
        return a[b]
    }, _process_json_row:function (a, b) {
        b = this._c_order ? this._swapColumns(b.data) : b.data;
        return this._process_some_row(a, b)
    }, _process_some_row:function (a, b) {
        a._attrs = {};
        for (var c = 0; c < a.childNodes.length; c++)a.childNodes[c]._attrs = {};
        this._fillRow(a, b);
        return a
    }, _get_json_data:function (a, b) {
        return a.data[b]
    }, _process_js_row:function (a, b) {
        for (var c = [], d = 0; d < this.columnIds.length; d++)c[d] = b[this.columnIds[d]], !c[d] && c[d] !== 0 && (c[d] = "");
        this._process_some_row(a, c);
        a._attrs = b;
        return a
    }, _get_js_data:function (a, b) {
        return a[this.columnIds[b]]
    },
    _process_csv_row:function (a, b) {
        a._attrs = {};
        for (var c = 0; c < a.childNodes.length; c++)a.childNodes[c]._attrs = {};
        this._fillRow(a, this._c_order ? this._swapColumns(b.split(this.csv.cell)) : b.split(this.csv.cell));
        return a
    }, _get_csv_data:function (a, b) {
        return a.split(this.csv.cell)[b]
    }, _process_store_row:function (a, b) {
        for (var c = [], d = 0; d < this.columnIds.length; d++)c[d] = b[this.columnIds[d]];
        for (var e = 0; e < a.childNodes.length; e++)a.childNodes[e]._attrs = {};
        a._attrs = b;
        this._fillRow(a, c)
    }, _process_xml_row:function (a, b) {
        var c = this.xmlLoader.doXPath(this.xml.cell, b), d = [];
        a._attrs = this._xml_attrs(b);
        if (this._ud_enabled)for (var e = this.xmlLoader.doXPath("./userdata", b), i = e.length - 1; i >= 0; i--) {
            for (var j = "", f = 0; f < e[i].childNodes.length; f++)j += e[i].childNodes[f].nodeValue;
            this.setUserData(a.idd, e[i].getAttribute("name"), j)
        }
        for (f = 0; f < c.length; f++) {
            var g = c[this._c_order ? this._c_order[f] : f];
            if (g) {
                var h = a._childIndexes ? a._childIndexes[f] : f, l = g.getAttribute("type");
                if (a.childNodes[h]) {
                    if (l)a.childNodes[h]._cellType = l;
                    a.childNodes[h]._attrs =
                        this._xml_attrs(g)
                }
                g.getAttribute("xmlcontent") || (g = g.firstChild ? g.firstChild.data : "");
                d.push(g)
            }
        }
        for (; f < a.childNodes.length; f++)a.childNodes[f]._attrs = {};
        a.parentNode && a.parentNode.tagName == "row" && (a._attrs.parent = a.parentNode.getAttribute("idd"));
        this._fillRow(a, d);
        return a
    }, _get_xml_data:function (a, b) {
        for (a = a.firstChild; ;) {
            if (!a)return"";
            a.tagName == "cell" && b--;
            if (b < 0)break;
            a = a.nextSibling
        }
        return a.firstChild ? a.firstChild.data : ""
    }, _fillRow:function (a, b) {
        this.editor && this.editStop();
        for (var c = 0; c <
            a.childNodes.length; c++)if (c < b.length || this.defVal[c]) {
            var d = a.childNodes[c]._cellIndex, e = b[d], i = this.cells4(a.childNodes[c]);
            if (this.defVal[d] && (e == "" || typeof e == "undefined"))e = this.defVal[d];
            i && i.setValue(e)
        } else a.childNodes[c].innerHTML = "&nbsp;", a.childNodes[c]._clearCell = !0;
        return a
    }, _postRowProcessing:function (a, b) {
        if (a._attrs["class"])a._css = a.className = a._attrs["class"];
        if (a._attrs.locked)a._locked = !0;
        if (a._attrs.bgColor)a.bgColor = a._attrs.bgColor;
        for (var c = 0, d = 0; d < a.childNodes.length; d++) {
            var e =
                a.childNodes[d], i = e._cellIndex, j = e._attrs.style || a._attrs.style;
            j && (e.style.cssText += ";" + j);
            if (e._attrs["class"])e.className = e._attrs["class"];
            if (j = e._attrs.align || this.cellAlign[i])e.align = j;
            e.vAlign = e._attrs.valign || this.cellVAlign[i];
            var f = e._attrs.bgColor || this.columnColor[i];
            if (f)e.bgColor = f;
            e._attrs.colspan && !b && (this.setColspan(a.idd, d + c, e._attrs.colspan), c += e._attrs.colspan - 1);
            if (this._hrrar && this._hrrar[i] && !b)e.style.display = "none"
        }
        this.callEvent("onRowCreated", [a.idd, a, null])
    }, load:function (a, b, c) {
        this.callEvent("onXLS", [this]);
        arguments.length == 2 && typeof b != "function" && (c = b, b = null);
        c = c || "xml";
        if (!this.xmlFileUrl)this.xmlFileUrl = a;
        this._data_type = c;
        this.xmlLoader.onloadAction = function (a, e, i, j, f) {
            a.callEvent && (f = a["_process_" + c](f), a._contextCallTimer || a.callEvent("onXLE", [a, 0, 0, f]), b && (b(), b = null))
        };
        this.xmlLoader.loadXML(a)
    }, loadXML:function (a, b) {
        this.load(a, b, "xml")
    }, parse:function (a, b, c) {
        arguments.length == 2 && typeof b != "function" && (c = b, b = null);
        this._data_type = c = c || "xml";
        a = this["_process_" +
            c](a);
        this._contextCallTimer || this.callEvent("onXLE", [this, 0, 0, a]);
        b && b()
    }, xml:{top:"rows", row:"./row", cell:"./cell", s_row:"row", s_cell:"cell", row_attrs:[], cell_attrs:[]}, csv:{row:"\n", cell:","}, _xml_attrs:function (a) {
        var b = {};
        if (a.attributes.length)for (var c = 0; c < a.attributes.length; c++)b[a.attributes[c].name] = a.attributes[c].value;
        return b
    }, _process_xml:function (a) {
        if (!a.doXPath) {
            var b = new dtmlXMLLoaderObject(function () {
            });
            typeof a == "string" ? b.loadXMLString(a) : (b.xmlDoc = a.responseXML ? a : {}, b.xmlDoc.responseXML =
                a);
            a = b
        }
        if (this._refresh_mode)return this._refreshFromXML(a);
        this._parsing = !0;
        var c = a.getXMLTopNode(this.xml.top);
        if (c.tagName == this.xml.top) {
            var d = c.getAttribute("dhx_security");
            if (d)dhtmlx.security_key = d;
            this._parseHead(c);
            var e = a.doXPath(this.xml.row, c), i = parseInt(a.doXPath("//" + this.xml.top)[0].getAttribute("pos") || 0), j = parseInt(a.doXPath("//" + this.xml.top)[0].getAttribute("total_count") || 0), f = !1;
            j && j != this.rowsBuffer.length && (this.rowsBuffer[j - 1] || (this.rowsBuffer.length && (f = !0), this.rowsBuffer[j -
                1] = null), j < this.rowsBuffer.length && (this.rowsBuffer.splice(j, this.rowsBuffer.length - j), f = !0));
            if (this.isTreeGrid())return this._process_tree_xml(a);
            for (var g = 0; g < e.length; g++)if (!this.rowsBuffer[g + i]) {
                var h = e[g].getAttribute("id") || g + i + 1;
                this.rowsBuffer[g + i] = {idd:h, data:e[g], _parser:this._process_xml_row, _locator:this._get_xml_data};
                this.rowsAr[h] = e[g]
            }
            if (f && this._srnd) {
                var l = this.objBox.scrollTop;
                this._reset_view();
                this.objBox.scrollTop = l
            } else this.render_dataset();
            this._parsing = !1;
            return a.xmlDoc.responseXML ?
                a.xmlDoc.responseXML : a.xmlDoc
        }
    }, _process_jsarray:function (a) {
        this._parsing = !0;
        if (a && a.xmlDoc)eval("dhtmlx.temp=" + a.xmlDoc.responseText + ";"), a = dhtmlx.temp;
        for (var b = 0; b < a.length; b++) {
            var c = b + 1;
            this.rowsBuffer.push({idd:c, data:a[b], _parser:this._process_jsarray_row, _locator:this._get_jsarray_data});
            this.rowsAr[c] = a[b]
        }
        this.render_dataset();
        this._parsing = !1
    }, _process_csv:function (a) {
        this._parsing = !0;
        if (a.xmlDoc)a = a.xmlDoc.responseText;
        a = a.replace(/\r/g, "");
        a = a.split(this.csv.row);
        if (this._csvHdr) {
            this.clearAll();
            var b = a.splice(0, 1)[0].split(this.csv.cell);
            this._csvAID || b.splice(0, 1);
            this.setHeader(b.join(this.delim));
            this.init()
        }
        for (var c = 0; c < a.length; c++)if (a[c] || c != a.length - 1) {
            if (this._csvAID) {
                var d = c + 1;
                this.rowsBuffer.push({idd:d, data:a[c], _parser:this._process_csv_row, _locator:this._get_csv_data})
            } else {
                var e = a[c].split(this.csv.cell), d = e.splice(0, 1)[0];
                this.rowsBuffer.push({idd:d, data:e, _parser:this._process_jsarray_row, _locator:this._get_jsarray_data})
            }
            this.rowsAr[d] = a[c]
        }
        this.render_dataset();
        this._parsing = !1
    }, _process_js:function (a) {
        return this._process_json(a, "js")
    }, _process_json:function (a, b) {
        this._parsing = !0;
        if (a && a.xmlDoc)eval("dhtmlx.temp=" + a.xmlDoc.responseText + ";"), a = dhtmlx.temp;
        if (b == "js") {
            if (a.data)a = a.data;
            for (var c = 0; c < a.length; c++) {
                var d = a[c], e = d.id || c + 1;
                this.rowsBuffer.push({idd:e, data:d, _parser:this._process_js_row, _locator:this._get_js_data});
                this.rowsAr[e] = a[c]
            }
        } else for (c = 0; c < a.rows.length; c++)e = a.rows[c].id, this.rowsBuffer.push({idd:e, data:a.rows[c], _parser:this._process_json_row,
            _locator:this._get_json_data}), this.rowsAr[e] = a[c];
        if (a.dhx_security)dhtmlx.security_key = a.dhx_security;
        this.render_dataset();
        this._parsing = !1
    }, render_dataset:function (a, b) {
        if (this._srnd) {
            if (this._fillers)return this._update_srnd_view();
            b = Math.min(this._get_view_size() + (this._srnd_pr || 0), this.rowsBuffer.length)
        }
        this.pagingOn ? (a = Math.max(a || 0, (this.currentPage - 1) * this.rowsBufferOutSize), b = Math.min(this.currentPage * this.rowsBufferOutSize, this.rowsBuffer.length)) : (a = a || 0, b = b || this.rowsBuffer.length);
        for (var c = a; c < b; c++) {
            var d = this.render_row(c);
            if (d == -1) {
                if (this.xmlFileUrl && this.callEvent("onDynXLS", [c, this._dpref ? this._dpref : b - c]))this.load(this.xmlFileUrl + getUrlSymbol(this.xmlFileUrl) + "posStart=" + c + "&count=" + (this._dpref ? this._dpref : b - c), this._data_type);
                b = c;
                break
            }
            if (!d.parentNode || !d.parentNode.tagName)if (this._insertRowAt(d, c), d._attrs.selected || d._attrs.select)this.selectRow(d, d._attrs.call ? !0 : !1, !0), d._attrs.selected = d._attrs.select = null;
            if (this._ads_count && c - a == this._ads_count) {
                var e =
                    this;
                this._context_parsing = this._context_parsing || this._parsing;
                return this._contextCallTimer = window.setTimeout(function () {
                    e._contextCallTimer = null;
                    e.render_dataset(c, b);
                    if (!e._contextCallTimer)e._context_parsing ? e.callEvent("onXLE", []) : e._fixAlterCss(), e.callEvent("onDistributedEnd", []), e._context_parsing = !1
                }, this._ads_time)
            }
        }
        if (this._srnd && !this._fillers) {
            var i = this.rowsBuffer.length - b;
            for (this._fillers = []; i > 0;) {
                var j = _isIE ? Math.min(i, 5E4) : i, f = this._add_filler(b, j);
                f && this._fillers.push(f);
                i -= j;
                b += j
            }
        }
        this.setSizes()
    }, render_row:function (a) {
        if (!this.rowsBuffer[a])return-1;
        if (this.rowsBuffer[a]._parser) {
            var b = this.rowsBuffer[a];
            if (this.rowsAr[b.idd] && this.rowsAr[b.idd].tagName == "TR")return this.rowsBuffer[a] = this.rowsAr[b.idd];
            var c = this._prepareRow(b.idd);
            this.rowsBuffer[a] = c;
            this.rowsAr[b.idd] = c;
            b._parser.call(this, c, b.data);
            this._postRowProcessing(c);
            return c
        }
        return this.rowsBuffer[a]
    }, _get_cell_value:function (a, b, c) {
        return a._locator ? (this._c_order && (b = this._c_order[b]), a._locator.call(this,
            a.data, b)) : this.cells3(a, b)[c ? c : "getValue"]()
    }, sortRows:function (a, b, c) {
        c = (c || "asc").toLowerCase();
        b = b || this.fldSort[a];
        a = a || 0;
        if (this.isTreeGrid())this.sortTreeRows(a, b, c); else {
            var d = {}, e = this.cellType[a], i = "getValue";
            e == "link" && (i = "getContent");
            if (e == "dhxCalendar" || e == "dhxCalendarA")i = "getDate";
            for (var j = 0; j < this.rowsBuffer.length; j++)d[this.rowsBuffer[j].idd] = this._get_cell_value(this.rowsBuffer[j], a, i);
            this._sortRows(a, b, c, d)
        }
        this.callEvent("onAfterSorting", [a, b, c])
    }, _sortCore:function (a, b, c, d, e) {
        var i = "sort";
        if (this._sst)e.stablesort = this.rowsCol.stablesort, i = "stablesort";
        if (b == "camposAcionamento")e[i](function (a, b) {
            return c == "asc" ? d[a.idd] > d[b.idd] ? 1 : -1 : d[a.idd] < d[b.idd] ? 1 : -1
        }); else if (b == "int")e[i](function (a, b) {
            var e = parseFloat(d[a.idd]), e = isNaN(e) ? -99999999999999 : e, h = parseFloat(d[b.idd]), h = isNaN(h) ? -99999999999999 : h;
            return c == "asc" ? e - h : h - e
        }); else if (b == "date")e[i](function (a, b) {
            var e = Date.parse(d[a.idd]) || Date.parse("01/01/1900"), h = Date.parse(d[b.idd]) || Date.parse("01/01/1900");
            return c == "asc" ?
                e - h : h - e
        })
    }, _sortRows:function (a, b, c, d) {
        this._sortCore(a, b, c, d, this.rowsBuffer);
        this._reset_view();
        this.callEvent("onGridReconstructed", [])
    }, _reset_view:function (a) {
        if (this.obj.rows[0]) {
            this.callEvent("onResetView", []);
            var b = this.obj.rows[0].parentNode, c = b.removeChild(b.childNodes[0], !0);
            if (_isKHTML)for (var d = b.parentNode.childNodes.length - 1; d >= 0; d--)b.parentNode.childNodes[d].tagName == "TR" && b.parentNode.removeChild(b.parentNode.childNodes[d], !0); else if (_isIE)for (d = b.childNodes.length - 1; d >= 0; d--)b.childNodes[d].removeNode(!0);
            else b.innerHTML = "";
            b.appendChild(c);
            this.rowsCol = dhtmlxArray();
            this._sst && this.enableStableSorting(!0);
            this._fillers = this.undefined;
            a || this.render_dataset()
        }
    }, deleteRow:function (a, b) {
        b || (b = this.getRowById(a));
        if (b) {
            this.editStop();
            if (!this._realfake && this.callEvent("onBeforeRowDeleted", [a]) == !1)return!1;
            var c = 0;
            if (this.cellType._dhx_find("tree") != -1 && !this._realfake)c = this._h2.get[a].parent.id, this._removeTrGrRow(b); else {
                b.parentNode && b.parentNode.removeChild(b);
                var d = this.rowsCol._dhx_find(b);
                d != -1 && this.rowsCol._dhx_removeAt(d);
                for (var e = 0; e < this.rowsBuffer.length; e++)if (this.rowsBuffer[e] && this.rowsBuffer[e].idd == a) {
                    this.rowsBuffer._dhx_removeAt(e);
                    d = e;
                    break
                }
            }
            this.rowsAr[a] = null;
            for (e = 0; e < this.selectedRows.length; e++)this.selectedRows[e].idd == a && this.selectedRows._dhx_removeAt(e);
            if (this._srnd) {
                for (e = 0; e < this._fillers.length; e++) {
                    var i = this._fillers[e];
                    i && (i[0] >= d ? i[0] -= 1 : i[1] >= d && (i[1] -= 1))
                }
                this._update_srnd_view()
            }
            this.pagingOn && this.changePage();
            this._realfake || this.callEvent("onAfterRowDeleted",
                [a, c]);
            this.callEvent("onGridReconstructed", []);
            this._ahgr && this.setSizes();
            return!0
        }
    }, _addRow:function (a, b, c) {
        if (c == -1 || typeof c == "undefined")c = this.rowsBuffer.length;
        typeof b == "string" && (b = b.split(this.delim));
        var d = this._prepareRow(a);
        d._attrs = {};
        for (var e = 0; e < d.childNodes.length; e++)d.childNodes[e]._attrs = {};
        this.rowsAr[d.idd] = d;
        if (this._h2)this._h2.get[d.idd].buff = d;
        this._fillRow(d, b);
        this._postRowProcessing(d);
        if (this._skipInsert)return this._skipInsert = !1, this.rowsAr[d.idd] = d;
        if (this.pagingOn)return this.rowsBuffer._dhx_insertAt(c,
            d), this.rowsAr[d.idd] = d;
        if (this._fillers) {
            this.rowsCol._dhx_insertAt(c, null);
            this.rowsBuffer._dhx_insertAt(c, d);
            this._fake && this._fake.rowsCol._dhx_insertAt(c, null);
            this.rowsAr[d.idd] = d;
            for (var i = !1, j = 0; j < this._fillers.length; j++) {
                var f = this._fillers[j];
                if (f && f[0] <= c && f[0] + f[1] >= c)f[1] += 1, f[2].firstChild.style.height = parseInt(f[2].firstChild.style.height) + this._srdh + "px", i = !0, this._fake && this._fake._fillers[j][1]++;
                f && f[0] > c && (f[0] += 1, this._fake && this._fake._fillers[j][0]++)
            }
            i || this._fillers.push(this._add_filler(c,
                1, c == 0 ? {parentNode:this.obj.rows[0].parentNode, nextSibling:this.rowsCol[1]} : this.rowsCol[c - 1]));
            return d
        }
        this.rowsBuffer._dhx_insertAt(c, d);
        return this._insertRowAt(d, c)
    }, addRow:function (a, b, c) {
        var d = this._addRow(a, b, c);
        this.dragContext || this.callEvent("onRowAdded", [a]);
        this.pagingOn && this.changePage(this.currentPage);
        this._srnd && this._update_srnd_view();
        d._added = !0;
        this._ahgr && this.setSizes();
        this.callEvent("onGridReconstructed", []);
        return d
    }, _insertRowAt:function (a, b, c) {
        this.rowsAr[a.idd] = a;
        if (this._skipInsert)return this._skipInsert = !1, a;
        if (b < 0 || !b && parseInt(b) !== 0)b = this.rowsCol.length; else if (b > this.rowsCol.length)b = this.rowsCol.length;
        this._cssEven && (a.className += (this._cssSP ? this.getLevel(a.idd) : b) % 2 == 1 ? " " + this._cssUnEven + (this._cssSU ? " " + this._cssUnEven + "_" + this.getLevel(a.idd) : "") : " " + this._cssEven + (this._cssSU ? " " + this._cssEven + "_" + this.getLevel(a.idd) : ""));
        c || (b == this.obj.rows.length - 1 || !this.rowsCol[b] ? _isKHTML ? this.obj.appendChild(a) : this.obj.firstChild.appendChild(a) : this.rowsCol[b].parentNode.insertBefore(a, this.rowsCol[b]));
        this.rowsCol._dhx_insertAt(b, a);
        this.callEvent("onRowInserted", [a, b]);
        return a
    }, getRowById:function (a) {
        var b = this.rowsAr[a];
        if (b) {
            if (b.tagName != "TR") {
                for (var c = 0; c < this.rowsBuffer.length; c++)if (this.rowsBuffer[c] && this.rowsBuffer[c].idd == a)return this.render_row(c);
                if (this._h2)return this.render_row(null, b.idd)
            }
            return b
        }
        return null
    }, cellById:function (a, b) {
        return this.cells(a, b)
    }, cells:function (a, b) {
        if (arguments.length == 0)return this.cells4(this.cell); else var c = this.getRowById(a);
        var d = c._childIndexes ?
            c.childNodes[c._childIndexes[b]] : c.childNodes[b];
        return this.cells4(d)
    }, cellByIndex:function (a, b) {
        return this.cells2(a, b)
    }, cells2:function (a, b) {
        var c = this.render_row(a), d = c._childIndexes ? c.childNodes[c._childIndexes[b]] : c.childNodes[b];
        return this.cells4(d)
    }, cells3:function (a, b) {
        var c = a._childIndexes ? a.childNodes[a._childIndexes[b]] : a.childNodes[b];
        return this.cells4(c)
    }, cells4:function (a) {
        var b = window["eXcell_" + (a._cellType || this.cellType[a._cellIndex])];
        if (b)return new b(a)
    }, cells5:function (a, b) {
        b =
            b || a._cellType || this.cellType[a._cellIndex];
        if (!this._ecache[b]) {
            var c = window["eXcell_" + b] ? window["eXcell_" + b] : eXcell_ro;
            this._ecache[b] = new c(a)
        }
        this._ecache[b].cell = a;
        return this._ecache[b]
    }, dma:function (a) {
        if (!this._ecache)this._ecache = {};
        if (a && !this._dma)this._dma = this.cells4, this.cells4 = this.cells5; else if (!a && this._dma)this.cells4 = this._dma, this._dma = null
    }, getRowsNum:function () {
        return this.rowsBuffer.length
    }, enableEditTabOnly:function (a) {
        this.smartTabOrder = arguments.length > 0 ? convertStringToBoolean(a) :
            !0
    }, setExternalTabOrder:function (a, b) {
        var c = this;
        this.tabStart = typeof a == "object" ? a : document.getElementById(a);
        this.tabStart.onkeydown = function (a) {
            var b = a || window.event;
            if (b.keyCode == 9 && !b.shiftKey)return b.cancelBubble = !0, c.selectCell(0, 0, 0, 0, 1), c.smartTabOrder && c.cells2(0, 0).isDisabled() && c._key_events.k9_0_0.call(c), this.blur(), !1
        };
        if (_isOpera)this.tabStart.onkeypress = this.tabStart.onkeydown;
        this.tabEnd = typeof b == "object" ? b : document.getElementById(b);
        this.tabEnd.onkeydown = this.tabEnd.onkeypress =
            function (a) {
                var b = a || window.event;
                if (b.keyCode == 9 && b.shiftKey)return b.cancelBubble = !0, c.selectCell(c.getRowsNum() - 1, c.getColumnCount() - 1, 0, 0, 1), c.smartTabOrder && c.cells2(c.getRowsNum() - 1, c.getColumnCount() - 1).isDisabled() && c._key_events.k9_0_1.call(c), this.blur(), !1
            };
        if (_isOpera)this.tabEnd.onkeypress = this.tabEnd.onkeydown
    }, uid:function () {
        if (!this._ui_seed)this._ui_seed = (new Date).valueOf();
        return this._ui_seed++
    }, clearAndLoad:function () {
        var a = this._pgn_skin;
        this._pgn_skin = null;
        this.clearAll();
        this._pgn_skin =
            a;
        this.load.apply(this, arguments)
    }, getStateOfView:function () {
        if (this.pagingOn) {
            var a = (this.currentPage - 1) * this.rowsBufferOutSize;
            return[this.currentPage, a, Math.min(a + this.rowsBufferOutSize, this.rowsBuffer.length), this.rowsBuffer.length]
        }
        return[Math.floor(this.objBox.scrollTop / this._srdh), Math.ceil(parseInt(this.objBox.offsetHeight) / this._srdh), this.rowsBuffer.length]
    }};
(function () {
    function a(a, b) {
        this[a] = b
    }

    function b(a, b) {
        this[a].call(this, b)
    }

    function c(a, b) {
        this[a].call(this, b.join(this.delim))
    }

    function d(a, b) {
        for (var c = 0; c < b.length; c++)if (typeof b[c] == "object") {
            var d = this.getCombo(c), e;
            for (e in b[c])d.put(e, b[c][e])
        }
    }

    function e(a, b) {
        function c(a, b, d) {
            e[b] || (e[b] = []);
            if (typeof d == "object")d.toString = function () {
                return this.text
            };
            e[b][a] = d
        }

        for (var d = 1, e = [], k = 0; k < b.length; k++)if (typeof b[k] == "object" && b[k].length)for (var i = 0; i < b[k].length; i++)c(k, i, b[k][i]); else c(k,
            0, b[k]);
        for (k = 0; k < e.length; k++)for (i = 0; i < e[0].length; i++) {
            var n = e[k][i];
            e[k][i] = (n || "").toString() || "&nbsp;";
            if (n && n.colspan)for (var o = 1; o < n.colspan; o++)c(i + o, k, "#cspan");
            if (n && n.rowspan)for (o = 1; o < n.rowspan; o++)c(i, k + o, "#rspan")
        }
        this.setHeader(e[0]);
        for (k = 1; k < e.length; k++)this.attachHeader(e[k])
    }

    var i = [
        {name:"label", def:"&nbsp;", operation:"setHeader", type:e},
        {name:"id", def:"", operation:"columnIds", type:a},
        {name:"width", def:"*", operation:"setInitWidths", type:c},
        {name:"align", def:"left", operation:"cellAlign",
            type:a},
        {name:"valign", def:"middle", operation:"cellVAlign", type:a},
        {name:"sort", def:"na", operation:"fldSort", type:a},
        {name:"type", def:"ro", operation:"setColTypes", type:c},
        {name:"options", def:"", operation:"", type:d}
    ];
    dhtmlx.extend_api("dhtmlXGridObject", {_init:function (a) {
        return[a.parent]
    }, image_path:"setImagePath", columns:"columns", rows:"rows", headers:"headers", skin:"setSkin", smart_rendering:"enableSmartRendering", css:"enableAlterCss", auto_height:"enableAutoHeight", save_hidden:"enableAutoHiddenColumnsSaving",
        save_cookie:"enableAutoSaving", save_size:"enableAutoSizeSaving", auto_width:"enableAutoWidth", block_selection:"enableBlockSelection", csv_id:"enableCSVAutoID", csv_header:"enableCSVHeader", cell_ids:"enableCellIds", colspan:"enableColSpan", column_move:"enableColumnMove", context_menu:"enableContextMenu", distributed:"enableDistributedParsing", drag:"enableDragAndDrop", drag_order:"enableDragOrder", tabulation:"enableEditTabOnly", header_images:"enableHeaderImages", header_menu:"enableHeaderMenu", keymap:"enableKeyboardSupport",
        mouse_navigation:"enableLightMouseNavigation", markers:"enableMarkedCells", math_editing:"enableMathEditing", math_serialization:"enableMathSerialization", drag_copy:"enableMercyDrag", multiline:"enableMultiline", multiselect:"enableMultiselect", save_column_order:"enableOrderSaving", hover:"enableRowsHover", rowspan:"enableRowspan", smart:"enableSmartRendering", save_sorting:"enableSortingSaving", stable_sorting:"enableStableSorting", undo:"enableUndoRedo", csv_cell:"setCSVDelimiter", date_format:"setDateFormat",
        drag_behavior:"setDragBehavior", editable:"setEditable", without_header:"setNoHeader", submit_changed:"submitOnlyChanged", submit_serialization:"submitSerialization", submit_selected:"submitOnlySelected", submit_id:"submitOnlyRowID", xml:"load"}, {columns:function (a) {
        for (var c = 0; c < i.length; c++) {
            for (var d = [], e = 0; e < a.length; e++)d[e] = a[e][i[c].name] || i[c].def;
            var l = i[c].type || b;
            l.call(this, i[c].operation, d, a)
        }
        this.init()
    }, rows:function () {
    }, headers:function (a) {
        for (var b = 0; b < a.length; b++)this.attachHeader(a[b])
    }})
})();
dhtmlXGridObject.prototype._dp_init = function (a) {
    a.attachEvent("insertCallback", function (a, c) {
        this.obj._h2 ? this.obj.addRow(c, d, null, parent) : this.obj.addRow(c, [], 0);
        var d = this.obj.getRowById(c);
        d && (this.obj._process_xml_row(d, a.firstChild), this.obj._postRowProcessing(d))
    });
    a.attachEvent("updateCallback", function (a, c) {
        var d = this.obj.getRowById(c);
        d && (this.obj._process_xml_row(d, a.firstChild), this.obj._postRowProcessing(d))
    });
    a.attachEvent("deleteCallback", function (a, c) {
        this.obj.setUserData(c, this.action_param,
            "true_deleted");
        this.obj.deleteRow(c)
    });
    a._methods = ["setRowTextStyle", "setCellTextStyle", "changeRowId", "deleteRow"];
    this.attachEvent("onEditCell", function (b, c, d) {
        if (a._columns && !a._columns[d])return!0;
        var e = this.cells(c, d);
        b == 1 ? e.isCheckbox() && a.setUpdated(c, !0) : b == 2 && e.wasChanged() && a.setUpdated(c, !0);
        return!0
    });
    this.attachEvent("onRowPaste", function (b) {
        a.setUpdated(b, !0)
    });
    this.attachEvent("onRowIdChange", function (b, c) {
        var d = a.findRow(b);
        d < a.updatedRows.length && (a.updatedRows[d] = c)
    });
    this.attachEvent("onSelectStateChanged",
        function () {
            a.updateMode == "row" && a.sendData();
            return!0
        });
    this.attachEvent("onEnter", function () {
        a.updateMode == "row" && a.sendData();
        return!0
    });
    this.attachEvent("onBeforeRowDeleted", function (b) {
        if (!this.rowsAr[b])return!0;
        if (this.dragContext && a.dnd)return window.setTimeout(function () {
            a.setUpdated(b, !0)
        }, 1), !0;
        var c = a.getState(b);
        this._h2 && this._h2.forEachChild(b, function (b) {
            a.setUpdated(b.id, !1);
            a.markRow(b.id, !0, "deleted")
        }, this);
        if (c == "inserted")return a.set_invalid(b, !1), a.setUpdated(b, !1), !0;
        if (c ==
            "deleted")return!1;
        if (c == "true_deleted")return a.setUpdated(b, !1), !0;
        a.setUpdated(b, !0, "deleted");
        return!1
    });
    this.attachEvent("onBindUpdate", function (b) {
        a.setUpdated(b, !0)
    });
    this.attachEvent("onRowAdded", function (b) {
        if (this.dragContext && a.dnd)return!0;
        a.setUpdated(b, !0, "inserted");
        return!0
    });
    a._getRowData = function (a) {
        var c = [];
        c.gr_id = a;
        this.obj.isTreeGrid() && (c.gr_pid = this.obj.getParentId(a));
        for (var d = this.obj.getRowById(a), e = 0; e < this.obj._cCount; e++) {
            var i = this.obj._c_order ? this.obj._c_order[e] :
                e, j = this.obj.cells(d.idd, e);
            if (!this._changed || j.wasChanged())this._endnm ? c[this.obj.getColumnId(e)] = j.getValue() : c["c" + i] = j.getValue()
        }
        var f = this.obj.UserData[a];
        if (f)for (var g = 0; g < f.keys.length; g++)f.keys[g] && f.keys[g].indexOf("__") != 0 && (c[f.keys[g]] = f.values[g]);
        if (f = this.obj.UserData.gridglobaluserdata)for (g = 0; g < f.keys.length; g++)c[f.keys[g]] = f.values[g];
        return c
    };
    a._clearUpdateFlag = function (a) {
        var c = this.obj.getRowById(a);
        if (c)for (var d = 0; d < this.obj._cCount; d++)this.obj.cells(a, d).cell.wasChanged = !1
    };
    a.checkBeforeUpdate = function (a) {
        for (var c = !0, d = [], e = 0; e < this.obj._cCount; e++)if (this.mandatoryFields[e]) {
            var i = this.mandatoryFields[e].call(this.obj, this.obj.cells(a, e).getValue(), a, e);
            typeof i == "string" ? (this.messages.push(i), c = !1) : (c &= i, d[e] = !i)
        }
        c || (this.set_invalid(a, "invalid", d), this.setUpdated(a, !1));
        return c
    }
};

//v.3.5 build 120822

/*
 Copyright DHTMLX LTD. http://www.dhtmlx.com
 You allowed to use this component or parts of it under GPL terms
 To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
 */