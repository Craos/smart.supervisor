//v.3.5 build 120822

/*
 Copyright DHTMLX LTD. http://www.dhtmlx.com
 You allowed to use this component or parts of it under GPL terms
 To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
 */
function dhtmlXLayoutPanel() {
}
function dhtmlXLayoutObject(k, l, m) {
    if (window.dhtmlXContainer) {
        var j = this;
        this._autodetectSkin = function () {
            var a = document.createElement("DIV");
            a.className = "dhxlayout_skin_detect";
            document.body.childNodes.length > 0 ? document.body.insertBefore(a, document.body.childNodes[0]) : document.body.appendChild(a);
            var c = a.offsetWidth;
            document.body.removeChild(a);
            a = null;
            return c == 199 ? "dhx_skyblue" : c == 299 ? "dhx_blue" : c == 399 ? "dhx_black" : c == 499 ? "dhx_web" : c == 599 ? "dhx_terrace" : "dhx_skyblue"
        };
        this.skin = m != null ? m : typeof dhtmlx !=
            "undefined" && typeof dhtmlx.skin == "string" ? dhtmlx.skin : this._autodetectSkin();
        this.setSkin = function (a) {
            if (this.skinParams[a]) {
                this.skin = a;
                this._CPanelHeight = this.skinParams[this.skin].cpanel_height;
                this._collapsedW = this.skinParams[this.skin].cpanel_collapsed_width;
                this._collapsedH = this.skinParams[this.skin].cpanel_collapsed_height;
                this.tpl.className = "dhtmlxLayoutPolyContainer_" + this.skin + (this._r ? " dhxlayout_rtl" : "");
                this.sizer.className = "dhxLayout_Sizer_" + this.skin;
                this.dhxWins && this.dhxWins.setSkin(this.skin);
                for (var c in this.polyObj)this.polyObj[c].skin = this.skin;
                this.base.skin = this.skin;
                this._fixIcons();
                this.setSizes()
            }
        };
        this._isIPad = navigator.userAgent.search(/iPad/gi) >= 0;
        this._dblClickTM = 600;
        this._mBottom = this._mTop = 0;
        typeof k == "string" && (k = document.getElementById(k));
        if ((k._isWindow == !0 || k._isCell) && !this.base) {
            if (k._isCell && k.attachLayout)return k.attachLayout(l, m);
            if (k.isWindow)return k.attachLayout(l, m);
            this.base = k
        }
        if (k == document.body && !this.base)document.body.style.overflow = "hidden";
        if ((typeof k ==
            "object" || k == document.body) && !this.base) {
            var t = document.createElement("DIV");
            t.className = "dhxcont_global_layout_area";
            k.appendChild(t);
            k._isLayout = !0;
            this.cont = new dhtmlXContainer(k);
            this.cont.setContent(t);
            if (k == document.body) {
                if (this.skin == "dhx_skyblue" || this.skin == "dhx_blue")this.cont.obj._offsetTop = 2, this.cont.obj._offsetLeft = 2, this.cont.obj._offsetHeight = -4, this.cont.obj._offsetWidth = -4;
                if (this.skin == "dhx_web")this.cont.obj._offsetTop = 9, this.cont.obj._offsetLeft = 9, this.cont.obj._offsetHeight = -18, this.cont.obj._offsetWidth = -18;
                if (this.skin == "dhx_terrace")this.cont.obj._offsetTop = 14, this.cont.obj._offsetLeft = 14, this.cont.obj._offsetHeight = -28, this.cont.obj._offsetWidth = -28;
                document.body.className += " dhxlayout_fullscreened"
            }
            k.adjustContent(k, this._mTop, null, null, this._mBottom);
            this.base = document.createElement("DIV");
            this.base.style.overflow = "hidden";
            this.base.style.position = "absolute";
            this.base.style.left = "0px";
            this.base.style.top = "0px";
            this.base.style.width = t.childNodes[0].style.width;
            this.base.style.height = t.childNodes[0].style.height;
            t.childNodes[0].appendChild(this.base);
            if (k == document.body)this._lw = this._tmTime = null, this._doOnResizeStart = function () {
                window.clearTimeout(this._tmTime);
                this._tmTime = window.setTimeout(function () {
                    j._doOnResizeEnd()
                }, 200)
            }, this._doOnResizeEnd = function () {
                this.setSizes(!1)
            }, _isIE ? window.attachEvent("onresize", j._doOnResizeStart) : window.addEventListener("resize", j._doOnResizeStart, !1);
            k._doOnAttachToolbar = function () {
                j != null && typeof j.setSizes == "function" &&
                j.setSizes()
            }
        }
        this.items = [];
        this.cells = function (a) {
            return this.polyObj[a] != null ? this.polyObj[a] : null
        };
        this.getIdByIndex = function (a) {
            return a < 0 ? null : a >= this.items.length ? null : this.items[a]._idd
        };
        this.getIndexById = function (a) {
            return this.cells(a) != null ? this.cells(a).getIndex() : null
        };
        this.imagePath = dhtmlx.image_path || "codebase/imgs/";
        this.setImagePath = function (a) {
            this.imagePath = a
        };
        this.polyObj = {};
        this.sepHor = [];
        this.sepVer = [];
        this._layoutView = l != null ? String(l).toUpperCase() : "3E";
        this._minHeight = this._minWidth =
            40;
        this._CPanelBtnsWidth = 32;
        this.skinParams = {dhx_black:{hor_sep_height:5, ver_sep_width:5, cpanel_height:34, cpanel_collapsed_width:18, cpanel_collapsed_height:18}, dhx_blue:{hor_sep_height:5, ver_sep_width:5, cpanel_height:34, cpanel_collapsed_width:18, cpanel_collapsed_height:18}, dhx_skyblue:{hor_sep_height:5, ver_sep_width:5, cpanel_height:26, cpanel_collapsed_width:18, cpanel_collapsed_height:18}, dhx_web:{hor_sep_height:9, ver_sep_width:9, cpanel_height:27, cpanel_collapsed_width:18, cpanel_collapsed_height:18,
            cell_pading_max:1, cell_pading_min:0}, dhx_terrace:{hor_sep_height:14, ver_sep_width:14, cpanel_height:37, cpanel_collapsed_width:18, cpanel_collapsed_height:18, cell_pading_max:1, cell_pading_min:0}};
        this._CPanelHeight = this.skinParams[this.skin].cpanel_height;
        this._collapsedW = this.skinParams[this.skin].cpanel_collapsed_width;
        this._collapsedH = this.skinParams[this.skin].cpanel_collapsed_height;
        this.tpl = document.createElement("TABLE");
        this.tpl.dir = "ltr";
        this.tpl.className = "dhtmlxLayoutPolyContainer_" + this.skin;
        this.tpl.cellSpacing = 0;
        this.tpl.cellPadding = 0;
        var v = document.createElement("TBODY");
        this.tpl.appendChild(v);
        this.tpl.border = 0;
        this.tplSizes = {};
        this._effects = {collapse:!1, resize:!1, highlight:!0};
        this.sizer = document.createElement("DIV");
        this.sizer.className = "dhxLayout_Sizer_" + this.skin;
        this.sizer.style.display = "none";
        document.body.appendChild(this.sizer);
        this._attachSizer = function (a) {
            j.sizer.style.left = getAbsoluteLeft(a) + "px";
            j.sizer.style.top = getAbsoluteTop(a) + "px";
            j.sizer.style.width = a.offsetWidth +
                "px";
            j.sizer.style.height = a.offsetHeight + "px";
            if (j._sizerML != null)j.sizer.style.marginLeft = j._sizerML + "px";
            if (j._sizerMT != null)j.sizer.style.marginTop = j._sizerMT + "px";
            j.sizer.style.display = "";
            j.sizer.className = "dhxLayout_Sizer_" + j.skin;
            a._dir != null && (j.sizer.className += " " + (a._dir == "hor" ? "dhxCursorNResize" : "dhxCursorWResize"))
        };
        this.listViews = function () {
            var a = [], c;
            for (c in this.tplData)a[a.length] = c;
            return a
        };
        this._init = function () {
            this.obj = document.createElement("DIV");
            this.obj.className = "dhtmlxLayoutObject";
            this.base.appendChild(this.obj);
            this.obj.appendChild(this.tpl);
            this.w = this.obj.offsetWidth;
            this.h = this.obj.offsetHeight;
            this._xmlLoader.loadXMLString(this.tplData[this._layoutView] != null ? this.tplData[this._layoutView] : this.tplData["3E"]);
            this._initWindows()
        };
        this._autoHor = [];
        this._autoVer = [];
        this._dimension = [320, 200];
        this._colsRatio = this._rowsRatio = 100;
        this._xmlParser = function () {
            for (var a = [], c = [], f = {}, d = this.getXMLTopNode("layout"), b = 0; b < d.childNodes.length; b++) {
                if (d.childNodes[b].tagName == "row") {
                    var e =
                        d.childNodes[b], g = document.createElement("TR");
                    j.tpl.childNodes[0].appendChild(g);
                    for (var i = 0; i < e.childNodes.length; i++)if (e.childNodes[i].tagName == "cell") {
                        var h = e.childNodes[i], o = document.createElement("TD");
                        o._dir = "null";
                        if (h.getAttribute("obj") != null) {
                            for (var y = h.getAttribute("obj"), k = String(h.getAttribute("wh")).split(","), l = isNaN(k[0]), m = isNaN(k[0]) ? parseInt(j.polyObj[k[0]].style.width) : 0, n = 0; n < a.length; n++)for (var p = 0; p < a[n].length; p++)if (a[n][p] == y) {
                                if (!l) {
                                    for (var l = !0, G = j.base.offsetWidth -
                                        f[y][0] * j.skinParams[j.skin].ver_sep_width, w = 0; w < a[n].length; w++)isNaN(a[n][w]) || (G -= a[n][w], k[0] -= 1);
                                    m = Math.ceil(G / k[0])
                                }
                                a[n][p] = m
                            }
                            o.style.width = m + "px";
                            for (var l = isNaN(k[1]), t = isNaN(k[1]) ? parseInt(j.polyObj[k[1]].style.height) : 0, n = 0; n < c.length; n++)for (p = 0; p < c[n].length; p++)if (c[n][p] == y) {
                                if (!l) {
                                    for (var l = !0, v = j.base.offsetHeight - f[y][1] * j.skinParams[j.skin].hor_sep_height, w = 0; w < c.length; w++)isNaN(c[w][p]) || (v -= c[w][p], k[1] -= 1);
                                    t = Math.ceil(v / k[1])
                                }
                                c[n][p] = t
                            }
                            o.style.height = t + "px";
                            o.className = "dhtmlxLayoutSinglePoly";
                            o.innerHTML = "";
                            o._minW = h.getAttribute("minWidth") != null ? Number(h.getAttribute("minWidth")) : j._minWidth;
                            o._minH = h.getAttribute("minHeight") != null ? Number(h.getAttribute("minHeight")) : j._minHeight;
                            o._initCPanel = h.getAttribute("cpanel") != null ? h.getAttribute("cpanel") == "false" ? !1 : !0 : !0;
                            o._resize = h.getAttribute("resize");
                            for (var B = String(h.getAttribute("neighbors")).split(";"), q = 0; q < B.length; q++) {
                                var u = String(B[q]).split(",");
                                u.length > 1 && (B[q] = u)
                            }
                            o._rowData = B;
                            j.polyObj[y] = o
                        }
                        if (h.getAttribute("sep") != null) {
                            var H =
                                h.getAttribute("sep");
                            if (H == "hor") {
                                o.className = "dhtmlxLayoutPolySplitterHor";
                                o._dir = "hor";
                                for (var C = h.getAttribute("top").split(";"), q = 0; q < C.length; q++)u = String(C[q]).split(","), u.length > 1 && (C[q] = u);
                                o._top = C;
                                for (var D = h.getAttribute("bottom").split(";"), q = 0; q < D.length; q++)u = String(D[q]).split(","), u.length > 1 && (D[q] = u);
                                o._bottom = D;
                                j.sepHor[j.sepHor.length] = o
                            } else {
                                o.className = "dhtmlxLayoutPolySplitterVer";
                                o._dir = "ver";
                                for (var E = h.getAttribute("left").split(";"), q = 0; q < E.length; q++)u = String(E[q]).split(","),
                                    u.length > 1 && (E[q] = u);
                                o._left = E;
                                for (var F = h.getAttribute("right").split(";"), q = 0; q < F.length; q++)u = String(F[q]).split(","), u.length > 1 && (F[q] = u);
                                o._right = F;
                                j.sepVer[j.sepVer.length] = o
                            }
                            o._dblClick = h.getAttribute("dblclick");
                            o._isSep = !0;
                            o.innerHTML = '<div style="height:2px;overflow:hidden;">&nbsp;</div>'
                        }
                        if (h.getAttribute("colspan") != null)o.colSpan = h.getAttribute("colspan");
                        if (h.getAttribute("rowspan") != null)o.rowSpan = h.getAttribute("rowspan");
                        g.appendChild(o)
                    }
                }
                if (d.childNodes[b].tagName == "autosize")j._autoHor =
                    d.childNodes[b].getAttribute("hor").split(";"), j._autoVer = d.childNodes[b].getAttribute("ver").split(";"), j._totalCols = d.childNodes[b].getAttribute("cols"), j._totalRows = d.childNodes[b].getAttribute("rows"), j._dimension[0] = j._totalCols * j._colsRatio, j._dimension[1] = j._totalRows * j._rowsRatio;
                if (d.childNodes[b].tagName == "table") {
                    for (var I = d.childNodes[b].getAttribute("data"), w = String(I).split(";"), n = 0; n < w.length; n++) {
                        a[n] = [];
                        c[n] = [];
                        for (var z = String(w[n]).split(","), p = 0; p < z.length; p++)a[n][p] = z[p], c[n][p] =
                            z[p], f[z[p]] == null && (f[z[p]] = [0, 0])
                    }
                    for (var A in f) {
                        l = !1;
                        for (n = 0; n < a.length; n++)for (p = 0; p < a[n].length; p++)if (a[n][p] == A && !l) {
                            for (var l = !0, x = 0; x < a[n].length; x++)a[n][x] != A && f[A][0]++;
                            for (x = 0; x < a.length; x++)a[x][p] != A && f[A][1]++
                        }
                    }
                }
            }
            c = a = null;
            j._buildSurface();
            this.destructor()
        };
        this._xmlLoader = new dtmlXMLLoaderObject(this._xmlParser, window);
        this.listAutoSizes = function () {
            var a = this._availAutoSize[this._layoutView + "_hor"], c = this._availAutoSize[this._layoutView + "_ver"], f = this._autoHor.join(";"), d = this._autoVer.join(";");
            return[f, d, a, c]
        };
        this.setAutoSize = function (a, c) {
            if (a != null) {
                for (var f = !1, d = this._availAutoSize[this._layoutView + "_hor"], b = 0; b < d.length; b++)f = f || d[b] == a;
                if (f == !0)this._autoHor = a.split(";")
            }
            if (c != null) {
                f = !1;
                d = this._availAutoSize[this._layoutView + "_ver"];
                for (b = 0; b < d.length; b++)f = f || d[b] == c;
                if (f == !0)this._autoVer = c.split(";")
            }
        };
        this._buildSurface = function () {
            for (var a = 0; a < this.tpl.childNodes[0].childNodes.length; a++)for (var c = this.tpl.childNodes[0].childNodes[a], f = 0; f < c.childNodes.length; f++) {
                var d = c.childNodes[f],
                    b = this;
                if (!d._isSep)d._isCell = !0, d.skin = this.skin, d.getId = function () {
                    return this._idd
                }, d.getIndex = function () {
                    return this._ind
                }, d.showHeader = function () {
                    b.showPanel(this._idd)
                }, d.hideHeader = function () {
                    b.hidePanel(this._idd)
                }, d.isHeaderVisible = function () {
                    return b.isPanelVisible(this._idd)
                }, d.setText = function (a) {
                    b.setText(this._idd, a)
                }, d.getText = function () {
                    return b.getText(this._idd)
                }, d.expand = function () {
                    b._isCollapsed(this._idd) && b._expand(this._idd, "hide")
                }, d.collapse = function () {
                    b._isCollapsed(this._idd) ||
                    b._collapse(this._idd, "hide")
                }, d.isCollapsed = function () {
                    return b._isCollapsed(this._idd)
                }, d.dock = function () {
                    b._isCollapsed(this._idd) && (b._expand(this._idd, "dock"), b.dockWindow(this._idd))
                }, d.undock = function () {
                    b._isCollapsed(this._idd) || (b.unDockWindow(this._idd), b._collapse(this._idd, "dock"))
                }, d.setWidth = function (a) {
                    if (Number(a)) {
                        var c = this._isBlockedWidth || !1;
                        this._isBlockedWidth = !1;
                        b._setWidth(this._idd, a);
                        this._isBlockedWidth = c
                    }
                }, d.getWidth = function () {
                    return parseInt(this.style.width)
                }, d.setHeight =
                    function (a) {
                        if (Number(a)) {
                            var c = this._isBlockedHeight || !1;
                            this._isBlockedHeight = !1;
                            b._setHeight(this._idd, a);
                            this._isBlockedHeight = c
                        }
                    }, d.getHeight = function () {
                    return parseInt(this.style.height)
                }, d.fixSize = function (a, c) {
                    b._fixSize(this._idd, a, c)
                }, d.progressOn = function () {
                    b._progressControl(this._idd, !0)
                }, d.progressOff = function () {
                    b._progressControl(this._idd, !1)
                }, d._doOnAttachMenu = function () {
                    this.adjustContent(this.childNodes[0], this._noHeader ? 0 : b.skinParams[b.skin].cpanel_height);
                    this.updateNestedObjects()
                },
                    d._doOnAttachToolbar = function () {
                        this.adjustContent(this.childNodes[0], this._noHeader ? 0 : b.skinParams[b.skin].cpanel_height);
                        this.updateNestedObjects()
                    }, d._doOnAttachStatusBar = function () {
                    this.adjustContent(this.childNodes[0], this._noHeader ? 0 : b.skinParams[b.skin].cpanel_height);
                    this.updateNestedObjects()
                }, d._doOnFrameContentLoaded = function () {
                    b.callEvent("onContentLoaded", [this._idd])
                }, d._doOnResize = function () {
                    this.adjustContent(this.childNodes[0], this._noHeader ? 0 : b.skinParams[b.skin].cpanel_height);
                    this.updateNestedObjects()
                }, d._redraw = function () {
                }, d.showArrow = function () {
                    this.childNodes[0].childNodes[0].childNodes[4].style.display = ""
                }, d.hideArrow = function () {
                    this.childNodes[0].childNodes[0].childNodes[4].style.display = "none"
                }, d.isArrowVisible = function () {
                    return this.childNodes[0].childNodes[0].childNodes[4].style.display != "none"
                };
                if (d._dir == "ver")d.onselectstart = function (a) {
                    a = a || event;
                    a.returnValue = !1
                }, _isIE && (d.ondblclick = function () {
                    b._doOnDoubleClick(this)
                }), d[this._isIPad ? "ontouchstart" : "onmousedown"] =
                    function (a) {
                        a = a || event;
                        if (!_isIE)if (this._lastClick) {
                            var c = this._lastClick;
                            this._lastClick = (new Date).getTime();
                            if (c + b._dblClickTM >= this._lastClick && b._doOnDoubleClick(this) === !0)return
                        } else this._lastClick = (new Date).getTime();
                        var d = b._findDockCellsVer(this);
                        b._resAreaData = [];
                        if (d[0] != null && d[1] != null) {
                            String(document.body.className).search("dhxCursorWResize") == -1 && (document.body.className += " dhxCursorWResize");
                            b._resObj = this;
                            b._anyExpL = d[0];
                            b._anyExpR = d[1];
                            b._collectResAreaData(d);
                            b._resX = b._isIPad ?
                                a.touches[0].clientX : a.clientX;
                            if (b._effects.resize == !1) {
                                b._attachSizer(this);
                                b.sizer._leftXStart = parseInt(b.sizer.style.left);
                                var e = b.polyObj[b._anyExpL[0]];
                                b._resXMaxWidthLeft = parseInt(e.style.width) - b._minWidth;
                                var f = b.polyObj[b._anyExpR[0]];
                                b._resXMaxWidthRight = parseInt(f.style.width) - b._minWidth;
                                if (b._alterSizes.length > 0)for (var h = 0; h < b._alterSizes.length; h++) {
                                    for (var g = 0; g < b._anyExpL.length; g++)if (b._alterSizes[h][0] == b._anyExpL[g]) {
                                        var i = b._resXMaxWidthLeft = parseInt(e.style.width) - b._alterSizes[h][1];
                                        if (i < b._resXMaxWidthLeft)b._resXMaxWidthLeft = i
                                    }
                                    for (g = 0; g < b._anyExpR.length; g++)if (b._alterSizes[h][0] == b._anyExpR[g] && (i = parseInt(f.style.width) - b._alterSizes[h][1], i < b._resXMaxWidthRight))b._resXMaxWidthRight = i
                                }
                                b._resXStart = b._resX
                            }
                            b._resFunc = b._resizeVer;
                            b._showCovers();
                            b._isIPad && a.preventDefault()
                        }
                    }, d.onmouseup = function () {
                    if (b._effects.resize == !0)b._resizeStop(), b._anyExpL = null, b._anyExpR = null
                };
                if (d._dir == "hor")d.onselectstart = function (a) {
                    a = a || event;
                    a.returnValue = !1
                }, d[this._isIPad ? "ontouchstart" :
                    "onmousedown"] = function (a) {
                    a = a || event;
                    if (this._lastClick) {
                        var c = this._lastClick;
                        this._lastClick = (new Date).getTime();
                        if (c + b._dblClickTM >= this._lastClick && b._doOnDoubleClick(this) === !0)return
                    } else this._lastClick = (new Date).getTime();
                    var d = b._findDockCellsHor(this);
                    b._resAreaData = [];
                    if (d[0] != null && d[1] != null) {
                        String(document.body.className).search("dhxCursorNResize") == -1 && (document.body.className += " dhxCursorNResize");
                        b._resObj = this;
                        b._anyExpT = d[0];
                        b._anyExpB = d[1];
                        b._collectResAreaData(d);
                        b._resY =
                            b._isIPad ? a.touches[0].clientY : a.clientY;
                        if (b._effects.resize == !1) {
                            b._attachSizer(this);
                            b.sizer._topYStart = parseInt(b.sizer.style.top);
                            var e = b.polyObj[b._anyExpT[0]];
                            b._resYMaxHeightTop = parseInt(e.style.height) - b._minHeight;
                            var f = b.polyObj[b._anyExpB[0]];
                            b._resYMaxHeightBottom = parseInt(f.style.height) - b._minHeight;
                            if (b._alterSizes.length > 0)for (var h = 0; h < b._alterSizes.length; h++) {
                                for (var g = 0; g < b._anyExpT.length; g++)if (b._alterSizes[h][0] == b._anyExpT[g]) {
                                    var i = parseInt(e.style.height) - b._alterSizes[h][2] -
                                        (e.childNodes[0].style.display != "none" ? b.skinParams[b.skin].cpanel_height : 0);
                                    if (i < b._resYMaxHeightTop)b._resYMaxHeightTop = i
                                }
                                for (g = 0; g < b._anyExpB.length; g++)if (b._alterSizes[h][0] == b._anyExpB[g] && (i = parseInt(f.style.height) - b._alterSizes[h][2] - (f.childNodes[0].style.display != "none" ? b.skinParams[b.skin].cpanel_height : 0), i < b._resYMaxHeightBottom))b._resYMaxHeightBottom = i
                            }
                            b._resYStart = b._resY
                        }
                        b._resFunc = b._resizeHor;
                        b._showCovers();
                        b._isIPad && a.preventDefault()
                    }
                }, d.onmouseup = function () {
                    if (b._effects.resize == !0)b._resizeStop(), b._anyExpT = null, b._anyExpB = null
                }
            }
            for (var e in this.polyObj) {
                this.polyObj[e]._collapsed = !1;
                this.polyObj[e]._idd = e;
                this.polyObj[e]._ind = this.items.length;
                this.items[this.items.length] = this.polyObj[e];
                var g = document.createElement("DIV");
                g.style.position = "relative";
                g.style.left = "0px";
                g.style.top = "0px";
                g.style.width = this.polyObj[e].style.width;
                g.style.height = this.polyObj[e].style.height;
                g.style.overflow = "hidden";
                this.polyObj[e].appendChild(g);
                var i = document.createElement("DIV");
                i._dockCell =
                    e;
                i._resize = this.polyObj[e]._resize;
                i.className = "dhtmlxPolyInfoBar";
                i.innerHTML = "<div class='dhtmlxInfoBarLabel'>" + e + "</div><div class='dhtmlxInfoBarButtonsFake'><div class='dhtmlxInfoBarButtonsFake2'></div></div><div class='dhtmlxInfoButtonDock' title='" + this.i18n.dock + "'></div><div class='dhtmlxInfoButtonUnDock' style='display: none;' title='" + this.i18n.undock + "'></div><div class='dhtmlxInfoButtonShowHide_" + i._resize + "' title='" + this.i18n.collapse + "'></div><div class='dhtmlxLineL'></div><div class='dhtmlxLineR'></div>";
                this.polyObj[e]._initCPanel == !0 ? (i._h = this._CPanelHeight, i.style.display = "") : (i._h = 0, i.style.display = "none");
                this.polyObj[e].childNodes[0].appendChild(i);
                i.ondblclick = function () {
                    b.callEvent("onDblClick", [this._dockCell])
                };
                i.childNodes[4].onclick = function () {
                    var a = this.parentNode._dockCell;
                    b._isCollapsed(a) ? b._expand(a, "hide") : b._collapse(a, "hide")
                };
                for (a = 0; a < i.childNodes.length; a++)i.childNodes[a].onselectstart = function (a) {
                    a = a || event;
                    a.returnValue = !1
                };
                var h = document.createElement("DIV");
                h.className =
                    "dhxcont_global_content_area";
                this.polyObj[e].childNodes[0].appendChild(h);
                var j = new dhtmlXContainer(this.polyObj[e]);
                j.setContent(h);
                this.skin == "dhx_web" && this.polyObj[e]._setPadding(this.skinParams[this.skin].cell_pading_max, "dhxcont_layout_dhx_web");
                this.skin == "dhx_terrace" && this.polyObj[e]._setPadding(this.skinParams[this.skin].cell_pading_max, "dhxcont_layout_dhx_terrace");
                this.polyObj[e].adjustContent(this.polyObj[e].childNodes[0], this.skinParams[this.skin].cpanel_height)
            }
            this._fixIcons()
        };
        this._anyExpB =
            this._anyExpT = this._anyExpR = this._anyExpL = this._resFunc = this._resObj = this._resY = this._resX = null;
        this._expand = function (a, c) {
            this._doExpand(this.polyObj[a]._resize, a, this.polyObj[a]._rowData, c)
        };
        this._collapse = function (a, c) {
            if (!this._isCollapsed(a))this.polyObj[a]._savedW = parseInt(this.polyObj[a].style.width), this.polyObj[a]._savedH = parseInt(this.polyObj[a].style.height), this._doCollapse(this.polyObj[a]._resize, a, this.polyObj[a]._rowData, c)
        };
        this._isCollapsed = function (a) {
            return this.polyObj[a]._collapsed
        };
        this._checkAlterMinSize = function (a) {
            this._alterSizes = [];
            for (var c = 0; c < a.length; c++)for (var f = 0; f < a[c].length; f++)if (this.polyObj[a[c][f]].vs[this.polyObj[a[c][f]].av].layout != null) {
                var d = this.polyObj[a[c][f]].vs[this.polyObj[a[c][f]].av].layout._defineWindowMinDimension(this.polyObj[a[c][f]], !0);
                d[0] = a[c][f];
                this._alterSizes[this._alterSizes.length] = d
            }
        };
        this._findDockCellsVer = function (a) {
            var c = [null, null];
            if (a == null)return c;
            for (var f = null, d = a._left.length - 1; d >= 0; d--)if (f == null)if (typeof a._left[d] ==
                "object") {
                for (var b = !1, e = 0; e < a._left[d].length; e++)b = b || this.polyObj[a._left[d][e]]._isBlockedWidth || !1;
                b || (f = a._left[d])
            } else this.polyObj[a._left[d]]._collapsed == !1 && (this.polyObj[a._left[d]]._isBlockedWidth || (f = a._left[d]));
            for (var g = null, d = 0; d < a._right.length; d++)if (g == null)if (typeof a._right[d] == "object") {
                b = !1;
                for (e = 0; e < a._right[d].length; e++)b = b || this.polyObj[a._right[d][e]]._isBlockedWidth || !1;
                b || (g = a._right[d])
            } else this.polyObj[a._right[d]]._collapsed == !1 && (this.polyObj[a._right[d]]._isBlockedWidth ||
                (g = a._right[d]));
            if (f == null || g == null)return c;
            typeof f == "string" && (f = Array(f));
            typeof g == "string" && (g = Array(g));
            c[0] = f;
            c[1] = g;
            this._checkAlterMinSize(c);
            this._minWRAlter = this._minWLAlter = 0;
            if (this._alterSizes.length > 0 && this._effects.resize == !0) {
                for (var i = [], h = [], d = 0; d < f.length; d++)i[d] = this.polyObj[f[d]];
                for (d = 0; d < g.length; d++)h[d] = this.polyObj[g[d]];
                for (d = 0; d < i.length; d++)for (e = 0; e < this._alterSizes.length; e++)if (this._alterSizes[e][0] == i[d]._idd && this._minWLAlter < this._alterSizes[e][1])this._minWLAlter =
                    this._alterSizes[e][1];
                for (d = 0; d < h.length; d++)for (e = 0; e < this._alterSizes.length; e++)if (this._alterSizes[e][0] == h[d]._idd && this._maxWRAlter < this._alterSizes[e][1])this._minWRAlter = this._alterSizes[e][1]
            }
            return c
        };
        this._findDockCellsHor = function (a) {
            var c = [null, null];
            if (a == null)return c;
            for (var f = null, d = a._top.length - 1; d >= 0; d--)if (f == null)if (typeof a._top[d] == "object") {
                for (var b = !1, e = 0; e < a._top[d].length; e++)b = b || this.polyObj[a._top[d][e]]._isBlockedHeight || !1;
                b || (f = a._top[d])
            } else this.polyObj[a._top[d]]._collapsed == !1 && (this.polyObj[a._top[d]]._isBlockedHeight || (f = a._top[d]));
            for (var g = null, d = 0; d < a._bottom.length; d++)if (g == null)if (typeof a._bottom[d] == "object") {
                b = !1;
                for (e = 0; e < a._bottom[d].length; e++)b = b || this.polyObj[a._bottom[d][e]]._isBlockedHeight || !1;
                b || (g = a._bottom[d])
            } else this.polyObj[a._bottom[d]]._collapsed == !1 && (this.polyObj[a._bottom[d]]._isBlockedHeight || (g = a._bottom[d]));
            if (f == null || g == null)return c;
            typeof f == "string" && (f = Array(f));
            typeof g == "string" && (g = Array(g));
            c[0] = f;
            c[1] = g;
            this._checkAlterMinSize(c);
            this._minHBAlter = this._minHTAlter = 0;
            if (this._alterSizes.length > 0 && this._effects.resize == !0) {
                for (var i = [], h = [], d = 0; d < f.length; d++)i[d] = this.polyObj[f[d]];
                for (d = 0; d < g.length; d++)h[d] = this.polyObj[g[d]];
                for (d = 0; d < i.length; d++)for (e = 0; e < this._alterSizes.length; e++)if (this._alterSizes[e][0] == i[d]._idd && this._minHTAlter < this._alterSizes[e][2])this._minHTAlter = this._alterSizes[e][2];
                for (d = 0; d < h.length; d++)for (e = 0; e < this._alterSizes.length; e++)if (this._alterSizes[e][0] == h[d]._idd && this._minHBAlter < this._alterSizes[e][2])this._minHBAlter =
                    this._alterSizes[e][2]
            }
            return c
        };
        this._resizeVer = function (a) {
            this._isIPad && a.preventDefault();
            if (!(this._resObj == null || this._anyExpL == null || this._anyExpR == null)) {
                var c = this._isIPad ? a.touches[0].clientX : a.clientX;
                if (this._effects.resize == !1) {
                    this._resX = c;
                    var f = c - this._resXStart;
                    if (-f > this._resXMaxWidthLeft && f < 0)f = -this._resXMaxWidthLeft, this._resX = f + this._resXStart;
                    if (f > this._resXMaxWidthRight && f > 0)f = this._resXMaxWidthRight, this._resX = f + this._resXStart;
                    this.sizer.style.left = this.sizer._leftXStart +
                        f + "px"
                } else {
                    for (var d = this._anyExpL, b = this._anyExpR, e = c, f = c - j._resX, g = [], i = [], h = 0; h < d.length; h++)g[h] = this.polyObj[d[h]];
                    for (h = 0; h < b.length; h++)i[h] = this.polyObj[b[h]];
                    var k = parseInt(g[0].style.width), l = parseInt(i[0].style.width);
                    if (f < 0) {
                        var m = k + f;
                        if (m > g[0]._minW && m > this._minWLAlter) {
                            for (var r = l + k - m, h = 0; h < g.length; h++)this._setW(g[h], m);
                            for (h = 0; h < i.length; h++)this._setW(i[h], r);
                            this._resX = e
                        }
                    } else if (f > 0 && (r = l - f, r > i[0]._minW && r > this._minWRAlter)) {
                        m = k + l - r;
                        for (h = 0; h < g.length; h++)this._setW(g[h], m);
                        for (h =
                                 0; h < i.length; h++)this._setW(i[h], r);
                        this._resX = e
                    }
                }
            }
        };
        this._resizeHor = function (a) {
            if (!(this._resObj == null || this._anyExpT == null || this._anyExpB == null)) {
                var c = this._isIPad ? a.touches[0].clientY : a.clientY;
                if (this._effects.resize == !1) {
                    this._resY = c;
                    var f = c - this._resYStart;
                    if (-f > this._resYMaxHeightTop && f < 0)f = -this._resYMaxHeightTop, this._resY = f + this._resYStart;
                    if (f > this._resYMaxHeightBottom && f > 0)f = this._resYMaxHeightBottom, this._resY = f + this._resYStart;
                    this.sizer.style.top = this.sizer._topYStart + f + "px"
                } else {
                    for (var d =
                        this._anyExpT, b = this._anyExpB, e = c, f = c - j._resY, g = [], i = [], h = 0; h < d.length; h++)g[h] = this.polyObj[d[h]];
                    for (h = 0; h < b.length; h++)i[h] = this.polyObj[b[h]];
                    var k = parseInt(g[0].style.height), l = parseInt(i[0].style.height);
                    if (f < 0) {
                        var m = k + f;
                        if (m > g[0]._minH + this._minHTAlter) {
                            for (var r = l + k - m, h = 0; h < g.length; h++)this._setH(g[h], m);
                            for (h = 0; h < i.length; h++)this._setH(i[h], r);
                            this._resY = e
                        }
                    } else if (f > 0 && (r = l - f, r > i[0]._minH + this._minHBAlter)) {
                        m = k + l - r;
                        for (h = 0; h < g.length; h++)this._setH(g[h], m);
                        for (h = 0; h < i.length; h++)this._setH(i[h],
                            r);
                        this._resY = e
                    }
                }
            }
        };
        this._resizeStop = function () {
            var a = document.body.className;
            if (a.search("dhxCursorWResize") !== -1 || a.search("dhxCursorNResize") !== -1)document.body.className = String(document.body.className).replace(/dhxCursorWResize/g, "").replace(/dhxCursorNResize/g, "");
            if (this._resObj != null)if (this._effects.resize == !1) {
                this.sizer.style.display = "none";
                if (this._resObj._dir == "hor") {
                    var c = typeof this._anyExpT[0] == "object" ? this._anyExpT[0][0] : this._anyExpT[0], f = this._resY - this._resYStart, d = parseInt(this.polyObj[c].style.height) +
                        f;
                    this._setHeight(c, d)
                } else {
                    var b = typeof this._anyExpL[0] == "object" ? this._anyExpL[0][0] : this._anyExpL[0], e = this._resX - this._resXStart, g = parseInt(this.polyObj[b].style.width) + e;
                    this._setWidth(b, g)
                }
                var i = {}, h = function (a) {
                    if (a != null)for (var b = 0; b < a.length; b++)typeof a[b] == "object" && h(a[b]), i[a[b]] = !0
                };
                h(this._anyExpT);
                h(this._anyExpB);
                h(this._anyExpL);
                h(this._anyExpR);
                var j = [], k;
                for (k in i)j[j.length] = k;
                if (typeof this._anyExpT == "object" && this._anyExpT != null)this.updateNestedObjectsArray(this._anyExpT),
                    this._anyExpT = null;
                if (typeof this._anyExpB == "object" && this._anyExpB != null)this.updateNestedObjectsArray(this._anyExpB), this._anyExpB = null;
                if (typeof this._anyExpL == "object" && this._anyExpL != null)this.updateNestedObjectsArray(this._anyExpL), this._anyExpL = null;
                if (typeof this._anyExpR == "object" && this._anyExpR != null)this.updateNestedObjectsArray(this._anyExpR), this._anyExpR = null;
                this._resFunc = this._resObj = null;
                this._hideCovers();
                this._fixToolbars();
                this._fixCollapsedText();
                this.callEvent("onPanelResizeFinish",
                    [j])
            } else {
                var l = [];
                if (this._resObj._left != null)for (var m = 0; m < this._resObj._left.length; m++)l[l.length] = this._resObj._left[m];
                if (this._resObj._right != null)for (m = 0; m < this._resObj._right.length; m++)l[l.length] = this._resObj._right[m];
                if (this._resObj._top != null)for (m = 0; m < this._resObj._top.length; m++)l[l.length] = this._resObj._top[m];
                if (this._resObj._bottom != null)for (m = 0; m < this._resObj._bottom.length; m++)l[l.length] = this._resObj._bottom[m];
                this._resObj = this._resFunc = null;
                this._hideCovers();
                for (var s = [],
                         m = 0; m < l.length; m++)if (typeof l[m] == "object")for (var n = 0; n < l[m].length; n++)s[s.length] = this.polyObj[l[m][n]]; else s[s.length] = this.polyObj[l[m]];
                for (m = 0; m < s.length; m++)s[m].updateNestedObjects();
                this._fixCollapsedText();
                this.callEvent("onPanelResizeFinish", [])
            }
        };
        this._showCovers = function () {
            for (var a in this.polyObj)this._effects.highlight && this._isResizable(a) && this.polyObj[a].showCoverBlocker();
            this._fixToolbars()
        };
        this._hideCovers = function () {
            for (var a in this.polyObj)this.polyObj[a].hideCoverBlocker();
            this._fixToolbars()
        };
        this._isResizable = function (a) {
            for (var c = !1, f = 0; f < this._resAreaData.length; f++)c = c || this._resAreaData[f] == a;
            return c
        };
        this._collectResAreaData = function (a) {
            for (var c = 0; c < a.length; c++)typeof a[c] == "string" ? this._resAreaData[this._resAreaData.length] = a[c] : typeof a[c] == "object" && this._collectResAreaData(a[c])
        };
        this._doOnDoubleClick = function (a) {
            if (a._dblClick != null && this.polyObj[a._dblClick] != null && !this.polyObj[a._dblClick]._noHeader) {
                var c = this.polyObj[a._dblClick];
                if (c.childNodes[0].style.display !=
                    "none")return c._collapsed == !0 ? this._doExpand(c._resize, a._dblClick, c._rowData, "hide") : (c._savedW = parseInt(c.style.width), c._savedH = parseInt(c.style.height), this._doCollapse(c._resize, a._dblClick, c._rowData, "hide")), !0
            }
        };
        this._doOnSelectStart = function (a) {
            a = a || event;
            if (j._resObj != null)a.returnValue = !1
        };
        this._doOnMouseMove = function (a) {
            a = a || event;
            j._resObj != null && j._resFunc != null && j._resFunc(a)
        };
        this._doOnMouseUp = function () {
            j._resizeStop()
        };
        this._isIPad ? (document.addEventListener("touchmove", j._doOnMouseMove,
            !1), document.addEventListener("touchend", j._doOnMouseUp, !1)) : _isIE ? (document.body.attachEvent("onselectstart", j._doOnSelectStart), document.body.attachEvent("onmousemove", j._doOnMouseMove), document.body.attachEvent("onmouseup", j._doOnMouseUp)) : (document.body.addEventListener("mousemove", j._doOnMouseMove, !1), document.body.addEventListener("mouseup", j._doOnMouseUp, !1));
        this._doExpand = function (a, c, f, d) {
            if (!(f.length <= 1)) {
                for (var b = -1, e = 0; e < f.length; e++)f[e] == c && (b = e);
                if (b != -1) {
                    for (var g = null, e = b + 1; e <
                        f.length; e++)g == null && (typeof f[e] == "string" ? this.polyObj[f[e]]._collapsed == !1 && (g = f[e]) : g = f[e]);
                    if (g == null)for (e = b - 1; e >= 0; e--)g == null && (typeof f[e] == "string" ? this.polyObj[f[e]]._collapsed == !1 && (g = f[e]) : g = f[e]);
                    if (g != null) {
                        typeof g != "object" && (g = Array(g));
                        if (a == "hor") {
                            for (var i = 65536, e = 0; e < g.length; e++) {
                                var h = this.polyObj[g[e]].vs[this.polyObj[g[e]].av].layout != null ? this.polyObj[g[e]].vs[this.polyObj[g[e]].av].layout._defineWindowMinDimension(this.polyObj[g[e]], !0) : [0, 0], j = parseInt(this.polyObj[g[e]].style.width) -
                                    this._minWidth - h[1];
                                j < i && (i = j)
                            }
                            var k = this.polyObj[c]._savedW;
                            k > i && (k = i);
                            if (k < this._minWidth)return;
                            var l = Math.round(k / 3)
                        } else {
                            i = 65536;
                            for (e = 0; e < g.length; e++)h = this.polyObj[g[e]].vs[this.polyObj[g[e]].av].layout != null ? this.polyObj[g[e]].vs[this.polyObj[g[e]].av].layout._defineWindowMinDimension(this.polyObj[g[e]], !0) : [0, 0, 0], j = parseInt(this.polyObj[g[e]].style.height) - this._minHeight - h[2], j < i && (i = j);
                            k = this.polyObj[c]._savedH;
                            k > i && (k = i);
                            if (k < this._minHeight)return;
                            l = Math.round(k / 3)
                        }
                        this.polyObj[c].childNodes[0].childNodes[1].style.display =
                            "";
                        this.polyObj[c].childNodes[0].childNodes[0].className = "dhtmlxPolyInfoBar";
                        this.polyObj[c].childNodes[0].childNodes[0].childNodes[1].style.display = "";
                        this.polyObj[c].childNodes[0].childNodes[0].childNodes[2].style.display = "";
                        this.polyObj[c].childNodes[0].childNodes[0].childNodes[4].style.display = "";
                        for (var m = [], e = 0; e < g.length; e++)m[e] = this.polyObj[g[e]];
                        if (this.polyObj[c].className == "dhtmlxLayoutSinglePolyTabbarCollapsed")this.polyObj[c].className = "dhtmlxLayoutSinglePolyTabbar";
                        this._expandEffect(this.polyObj[c],
                            m, k, d, this._effects.collapse == !0 ? l : 1E6, a)
                    }
                }
            }
        };
        this._doCollapse = function (a, c, f, d) {
            if (!(f.length <= 1)) {
                for (var b = -1, e = 0; e < f.length; e++)f[e] == c && (b = e);
                if (b != -1) {
                    for (var g = null, e = b + 1; e < f.length; e++)g == null && (typeof f[e] == "string" ? this.polyObj[f[e]]._collapsed == !1 && (g = f[e]) : g = f[e]);
                    if (g == null)for (e = b - 1; e >= 0; e--)g == null && (typeof f[e] == "string" ? this.polyObj[f[e]]._collapsed == !1 && (g = f[e]) : g = f[e]);
                    g == null && f[b + 1] != null && (g = f[b + 1]);
                    g == null && b - 1 >= 0 && f[b - 1] != null && (g = f[b - 1]);
                    if (g != null) {
                        if (typeof g != "object") {
                            if (this.polyObj[g]._collapsed == !0) {
                                this.polyObj[g].childNodes[0].childNodes[1].style.display = "";
                                this.polyObj[g]._collapsed = !1;
                                this.polyObj[g].childNodes[0].childNodes[0].className = "dhtmlxPolyInfoBar";
                                this.polyObj[g].childNodes[0].childNodes[0].childNodes[1].style.display = "";
                                this.polyObj[g].childNodes[0].childNodes[0].childNodes[4].title = this.i18n.collapse;
                                this.polyObj[g].childNodes[0].childNodes[0].childNodes[2].style.display = "";
                                this.polyObj[g].childNodes[0].childNodes[0].childNodes[3].style.display = "none";
                                this.polyObj[g].childNodes[0].childNodes[0].childNodes[4].style.display =
                                    "";
                                this.polyObj[g]._isUnDocked === !0 && this.dockWindow(g);
                                if (this.polyObj[g].className == "dhtmlxLayoutSinglePolyTabbarCollapsed")this.polyObj[g].className = "dhtmlxLayoutSinglePolyTabbar";
                                this._fixSplitters();
                                this._fixIcons();
                                this.polyObj[g].removeAttribute("title");
                                this._fixToolbars();
                                this.callEvent("onExpand", [g])
                            }
                            g = Array(g)
                        }
                        for (var i = [], e = 0; e < g.length; e++)i[e] = this.polyObj[g[e]];
                        var h = a == "hor" ? Math.round(Math.max(this.polyObj[c].offsetWidth, this.polyObj[g[0]].offsetWidth) / 3) : Math.round(Math.max(this.polyObj[c].offsetHeight,
                            this.polyObj[g[0]].offsetHeight) / 3);
                        this.polyObj[c].childNodes[0].childNodes[1].style.display = "none";
                        this._collapseEffect(this.polyObj[c], i, d, this._effects.collapse == !0 ? h : 1E6, a)
                    }
                }
            }
        };
        this.setEffect = function (a, c) {
            this._effects[a] != null && typeof c == "boolean" && (this._effects[a] = c)
        };
        this.getEffect = function (a) {
            return this._effects[a] != null ? this._effects[a] : null
        };
        this._expandEffect = function (a, c, f, d, b, e) {
            if (e == "hor")var g = parseInt(a.style.width), i = parseInt(c[0].style.width); else g = parseInt(a.style.height),
                i = parseInt(c[0].style.height);
            var h = g + b;
            h > f && (h = f);
            e == "hor" ? (a.style.width = h + "px", a.childNodes[0].style.width = a.style.width) : (a.style.height = h + "px", a.childNodes[0].style.height = a.style.height);
            a.adjustContent(a.childNodes[0], a._noHeader ? 0 : this.skinParams[this.skin].cpanel_height);
            for (var k = 0; k < c.length; k++)e == "hor" ? (c[k].style.width = i + g - h + "px", c[k].childNodes[0].style.width = c[k].style.width) : (c[k].style.height = i + g - h + "px", c[k].childNodes[0].style.height = c[k].style.height), c[k].adjustContent(c[k].childNodes[0],
                c[k]._noHeader ? 0 : this.skinParams[this.skin].cpanel_height);
            if (h != f)window.setTimeout(function () {
                j._expandEffect(a, c, f, d, b, e)
            }, 4); else {
                a._collapsed = !1;
                for (k = 0; k < c.length; k++)c[k].updateNestedObjects();
                this.polyObj[a._idd].updateNestedObjects();
                this.polyObj[a._idd].childNodes[0].childNodes[0].childNodes[4].title = this.i18n.collapse;
                this._fixSplitters();
                this._fixIcons();
                a.removeAttribute("title");
                this._fixToolbars();
                this.callEvent("onExpand", [a._idd])
            }
        };
        this._collapseEffect = function (a, c, f, d, b) {
            if (b ==
                "hor")var e = parseInt(a.style.width), g = parseInt(c[0].style.width); else e = parseInt(a.style.height), g = parseInt(c[0].style.height);
            var i = e - d;
            if (b == "hor") {
                if (i < this._collapsedW)i = this._collapsedW;
                a.style.width = i + "px";
                a.childNodes[0].style.width = a.style.width
            } else {
                if (i < this._collapsedH)i = this._collapsedH;
                a.style.height = i + "px";
                a.childNodes[0].style.height = a.style.height
            }
            for (var h = 0; h < c.length; h++)b == "hor" ? (c[h].style.width = g + (e - i) + "px", c[h].childNodes[0].style.width = c[h].style.width) : (c[h].style.height =
                g + (e - i) + "px", c[h].childNodes[0].style.height = c[h].style.height), c[h].adjustContent(c[h].childNodes[0], c[h]._noHeader ? 0 : this.skinParams[this.skin].cpanel_height);
            if (i > this._collapsedW && b == "hor" || i > this._collapsedH && b == "ver")window.setTimeout(function () {
                j._collapseEffect(a, c, f, d, b)
            }, 4); else {
                for (h = 0; h < c.length; h++)b == "hor" ? (c[h].style.width = g + (e - i) + "px", c[h].childNodes[0].style.width = c[h].style.width) : (c[h].style.height = g + (e - i) + "px", c[h].childNodes[0].style.height = c[h].style.height), c[h].adjustContent(c[h].childNodes[0],
                    c[h]._noHeader ? 0 : this.skinParams[this.skin].cpanel_height);
                a._collapsed = !0;
                a.childNodes[0].childNodes[0].className = b == "hor" ? "dhtmlxPolyInfoBarCollapsedVer" : "dhtmlxPolyInfoBarCollapsedHor";
                for (h = 0; h < c.length; h++)c[h].updateNestedObjects();
                f == "hide" ? (a.childNodes[0].childNodes[0].childNodes[1].style.display = "", a.childNodes[0].childNodes[0].childNodes[2].style.display = "none", a.childNodes[0].childNodes[0].childNodes[3].style.display = "none", a.childNodes[0].childNodes[0].childNodes[4].style.display = "") :
                    (a.childNodes[0].childNodes[0].childNodes[1].style.display = "", a.childNodes[0].childNodes[0].childNodes[2].style.display = "", a.childNodes[0].childNodes[0].childNodes[3].style.display = "none", a.childNodes[0].childNodes[0].childNodes[4].style.display = "none");
                if (a.className == "dhtmlxLayoutSinglePolyTabbar")a.className = "dhtmlxLayoutSinglePolyTabbarCollapsed";
                this.polyObj[a._idd].childNodes[0].childNodes[0].childNodes[4].title = this.i18n.expand;
                this._fixSplitters();
                this._fixIcons();
                a.title = this.getTextTooltip(a._idd);
                this._fixToolbars();
                this._fixCollapsedText();
                this.callEvent("onCollapse", [a._idd])
            }
        };
        this._setW = function (a, c) {
            a.style.width = c + "px";
            a.childNodes[0].style.width = a.style.width;
            a.adjustContent(a.childNodes[0], a._noHeader ? 0 : this.skinParams[this.skin].cpanel_height)
        };
        this._setH = function (a, c) {
            a.style.height = c + "px";
            a.childNodes[0].style.height = a.style.height;
            a.adjustContent(a.childNodes[0], a._noHeader ? 0 : this.skinParams[this.skin].cpanel_height)
        };
        this._setWidth = function (a, c) {
            if (this.polyObj[a] != null && Number(c)) {
                for (var f =
                    null, d = 0; d < this.sepVer.length; d++) {
                    var b = this.sepVer[d]._left;
                    if (b[b.length - 1] == a)f = [this.sepVer[d], "left"]; else if (typeof b[b.length - 1] == "object")for (var e = b[b.length - 1], g = 0; g < e.length; g++)e[g] == a && (f = [this.sepVer[d], "left"]);
                    b = this.sepVer[d]._right;
                    if (b[0] == a)f = [this.sepVer[d], "right"]; else if (typeof b[0] == "object") {
                        e = b[0];
                        for (g = 0; g < e.length; g++)e[g] == a && (f = [this.sepVer[d], "right"])
                    }
                }
                if (f != null) {
                    var i = this._findDockCellsVer(f[0]), h = i[0], j = i[1];
                    if (!(h == null || j == null)) {
                        var k = parseInt(this.polyObj[h[0]].style.width) +
                            parseInt(this.polyObj[j[0]].style.width);
                        c < this._minWidth ? c = this._minWidth : c > k - this._minWidth && (c = k - this._minWidth);
                        for (var l = k - c, d = 0; d < h.length; d++)this._setW(this.polyObj[h[d]], f[1] == "left" ? c : l), this.polyObj[h[d]].updateNestedObjects();
                        for (d = 0; d < j.length; d++)this._setW(this.polyObj[j[d]], f[1] == "right" ? c : l), this.polyObj[j[d]].updateNestedObjects()
                    }
                }
            }
        };
        this._setHeight = function (a, c) {
            if (this.polyObj[a] != null && Number(c)) {
                for (var f = null, d = 0; d < this.sepHor.length; d++) {
                    var b = this.sepHor[d]._top;
                    if (b[b.length -
                        1] == a)f = [this.sepHor[d], "top"]; else if (typeof b[b.length - 1] == "object")for (var e = b[b.length - 1], g = 0; g < e.length; g++)e[g] == a && (f = [this.sepHor[d], "top"]);
                    b = this.sepHor[d]._bottom;
                    if (b[0] == a)f = [this.sepHor[d], "bottom"]; else if (typeof b[0] == "object") {
                        e = b[0];
                        for (g = 0; g < e.length; g++)e[g] == a && (f = [this.sepHor[d], "bottom"])
                    }
                }
                if (f != null) {
                    var i = this._findDockCellsHor(f[0]), h = i[0], j = i[1];
                    if (!(h == null || j == null)) {
                        var k = parseInt(this.polyObj[h[0]].style.height) + parseInt(this.polyObj[j[0]].style.height);
                        c < this._minHeight ?
                            c = this._minHeight : c > k - this._minHeight && (c = k - this._minHeight);
                        for (var l = k - c, d = 0; d < h.length; d++)this._setH(this.polyObj[h[d]], f[1] == "top" ? c : l), this.polyObj[h[d]].updateNestedObjects();
                        for (d = 0; d < j.length; d++)this._setH(this.polyObj[j[d]], f[1] == "bottom" ? c : l), this.polyObj[j[d]].updateNestedObjects()
                    }
                }
            }
        };
        this.updateNestedObjectsArray = function (a) {
            for (var c = 0; c < a.length; c++)typeof a[c] == "object" ? this.updateNestedObjectsArray(a[c]) : this.polyObj[a[c]].updateNestedObjects()
        };
        this.dockWindow = function (a) {
            if (this.dhxWins &&
                this.dhxWins.window(this.dhxWinsIdPrefix + a))this.dhxWins.window(this.dhxWinsIdPrefix + a).close(), this.dhxWins.window(this.dhxWinsIdPrefix + a).moveContentTo(this.polyObj[a]), this.polyObj[a]._isUnDocked = !1, this.callEvent("onDock", [a])
        };
        this.unDockWindow = function (a) {
            this._initWindows(a);
            this.polyObj[a].moveContentTo(this.dhxWins.window(this.dhxWinsIdPrefix + a));
            this.polyObj[a]._isUnDocked = !0;
            this.callEvent("onUnDock", [a])
        };
        this._initWindows = function (a) {
            if (window.dhtmlXWindows) {
                if (!this.dhxWins && (this.dhxWins =
                    new dhtmlXWindows, this.dhxWins.setSkin(this.skin), this.dhxWins.setImagePath(this.imagePath), this.dhxWinsIdPrefix = "", !a))return;
                var c = this.dhxWinsIdPrefix + a;
                if (this.dhxWins.window(c))this.dhxWins.window(c).show(); else {
                    var f = this, d = this.dhxWins.createWindow(c, 20, 20, 320, 200);
                    d.setText(this.polyObj[a].getText());
                    d.button("close").hide();
                    d.attachEvent("onClose", function (a) {
                        a.hide()
                    });
                    d.button("dock").show();
                    d.button("dock").attachEvent("onClick", function () {
                        f.polyObj[a].dock()
                    });
                    d.dockedCell = this.polyObj[a]
                }
            }
        };
        this.isPanelVisible = function (a) {
            return!this.polyObj[a]._noHeader
        };
        this.showPanel = function (a) {
            if (this.polyObj[a] != null && this.polyObj[a]._collapsed != !0) {
                var c = this.polyObj[a].childNodes[0].childNodes[0];
                c.style.display = "";
                this.polyObj[a]._noHeader = !1;
                this.skin == "dhx_web" && this.polyObj[a]._setPadding(this.skinParams[this.skin].cell_pading_max, "dhxcont_layout_dhx_web");
                this.skin == "dhx_terrace" && this.polyObj[a]._setPadding(this.skinParams[this.skin].cell_pading_max, "dhxcont_layout_dhx_terrace");
                this.polyObj[a].adjustContent(this.polyObj[a].childNodes[0],
                    this.skinParams[this.skin].cpanel_height);
                this.polyObj[a].updateNestedObjects()
            }
        };
        this.hidePanel = function (a) {
            if (this.polyObj[a] != null && this.polyObj[a]._collapsed != !0) {
                var c = this.polyObj[a].childNodes[0].childNodes[0];
                c.style.display = "none";
                this.polyObj[a]._noHeader = !0;
                this.skin == "dhx_web" && this.polyObj[a]._setPadding(this.skinParams[this.skin].cell_pading_min, "");
                this.skin == "dhx_terrace" && this.polyObj[a]._setPadding(this.skinParams[this.skin].cell_pading_min, "");
                this.polyObj[a].adjustContent(this.polyObj[a].childNodes[0],
                    0);
                this.polyObj[a].updateNestedObjects()
            }
        };
        this.setText = function (a, c) {
            this._changeCPanelText(a, c)
        };
        this.getText = function (a) {
            return this.polyObj[a].childNodes[0].childNodes[0].childNodes[0].innerHTML
        };
        this.getTextTooltip = function (a) {
            var c = this.polyObj[a].childNodes[0].childNodes[0].childNodes[0];
            return c.innerText || c.textContent
        };
        this._changeCPanelText = function (a, c) {
            var f = j;
            if (f.polyObj[a] != null)f.polyObj[a].childNodes[0].childNodes[0].childNodes[0].innerHTML = c, j.dhxWins != null && j.dhxWins.window(j.dhxWinsIdPrefix +
                a) != null && j.dhxWins.window(j.dhxWinsIdPrefix + a).setText(c)
        };
        this.forEachItem = function (a) {
            for (var c = 0; c < this.items.length; c++)a(this.items[c])
        };
        this._fixPositionInWin = function (a, c) {
            this.base.style.width = a + "px";
            this.base.style.height = c + "px"
        };
        this.attachMenu = function () {
            this.base._isWindow ? this.menu = this.base._window.attachMenu() : (this.cont.obj.skin = this.skin, this.menu = this.cont.obj.attachMenu(), this.cont.obj.adjustContent(this.cont.obj, 0), this.setSizes());
            return this.menu
        };
        this.detachMenu = function () {
            if (this.menu)this.cont.obj.detachMenu(),
                this.setSizes(), this.menu = null
        };
        this.showMenu = function () {
            this.menu && (this.cont.obj.showMenu(), this.setSizes())
        };
        this.hideMenu = function () {
            this.menu && (this.cont.obj.hideMenu(), this.setSizes())
        };
        this.attachToolbar = function () {
            this.base._isWindow ? this.toolbar = this.base._window.attachToolbar() : (this.cont.obj.skin = this.skin, this.toolbar = this.cont.obj.attachToolbar(), this.cont.obj.adjustContent(this.cont.obj, 0), this.setSizes());
            return this.toolbar
        };
        this.detachToolbar = function () {
            if (this.toolbar)this.cont.obj.detachToolbar(),
                this.setSizes(), this.toolbar = null
        };
        this.showToolbar = function () {
            this.toolbar && (this.cont.obj.showToolbar(), this.setSizes())
        };
        this.hideToolbar = function () {
            this.toolbar && (this.cont.obj.hideToolbar(), this.setSizes())
        };
        this.attachStatusBar = function () {
            this.base._isWindow ? this.statusbar = this.base._window.attachStatusBar() : (this.statusbar = this.cont.obj.attachStatusBar(), this.cont.obj.adjustContent(this.cont.obj, 0), this.setSizes());
            return this.statusbar
        };
        this.detachStatusBar = function () {
            if (this.statusbar)this.cont.obj.detachStatusBar(),
                this.setSizes(), this.statusbar = null
        };
        this.showStatusBar = function () {
            this.statusbar && (this.cont.obj.showStatusBar(), this.setSizes())
        };
        this.hideStatusBar = function () {
            this.statusbar && (this.cont.obj.hideStatusBar(), this.setSizes())
        };
        this.progressOn = function () {
            this._progressControlGlobal(!0)
        };
        this.progressOff = function () {
            this._progressControlGlobal(!1)
        };
        this._progressControl = function (a, c) {
            if (this.polyObj[a] != null) {
                if (this.polyObj[a]._progressCover == null) {
                    var f = document.createElement("DIV");
                    f.className = "dhtmlxLayoutPolyProgress";
                    this.polyObj[a].childNodes[0].appendChild(f);
                    var d = document.createElement("DIV");
                    d.className = "dhtmlxLayoutPolyProgressBGIMG";
                    this.polyObj[a].childNodes[0].appendChild(d);
                    this.polyObj[a]._progressCover = [f, d]
                }
                this.polyObj[a]._progressCover[0].style.display = c == !0 ? "" : "none";
                this.polyObj[a]._progressCover[1].style.display = this.polyObj[a]._progressCover[0].style.display
            }
        };
        this._progressControlGlobal = function (a) {
            if (this._progressCover == null) {
                var c = document.createElement("DIV");
                c.className = "dhtmlxLayoutPolyProgressGlobal_" +
                    this.skin;
                this.obj.appendChild(c);
                var f = document.createElement("DIV");
                f.className = "dhtmlxLayoutPolyProgressBGIMGGlobal_" + this.skin;
                this.obj.appendChild(f);
                this._progressCover = [c, f]
            }
            this._progressCover[0].style.display = a == !0 ? "" : "none";
            this._progressCover[1].style.display = this._progressCover[0].style.display
        };
        this._fixSize = function (a, c, f) {
            if (this.polyObj[a] != null)this.polyObj[a]._isBlockedWidth = c, this.polyObj[a]._isBlockedHeight = f, this._fixSplitters()
        };
        this._fixSplitters = function () {
            for (var a = 0; a < this.sepVer.length; a++) {
                var c =
                    this._findDockCellsVer(this.sepVer[a]);
                if (c[0] == null || c[1] == null) {
                    if (this.sepVer[a].className != "dhtmlxLayoutPolySplitterVerInactive")this.sepVer[a].className = "dhtmlxLayoutPolySplitterVerInactive"
                } else if (this.sepVer[a].className != "dhtmlxLayoutPolySplitterVer")this.sepVer[a].className = "dhtmlxLayoutPolySplitterVer"
            }
            for (a = 0; a < this.sepHor.length; a++)if (c = this._findDockCellsHor(this.sepHor[a]), c[0] == null || c[1] == null) {
                if (this.sepHor[a].className != "dhtmlxLayoutPolySplitterHorInactive")this.sepHor[a].className =
                    "dhtmlxLayoutPolySplitterHorInactive"
            } else if (this.sepHor[a].className != "dhtmlxLayoutPolySplitterHor")this.sepHor[a].className = "dhtmlxLayoutPolySplitterHor"
        };
        this._fixIcons = function () {
            for (var a in this.polyObj) {
                for (var c = this.polyObj[a]._rowData, f = this.polyObj[a]._collapsed, d = -1, b = 0; b < c.length; b++)typeof c[b] != "object" && c[b] == a && (d = b);
                var e = null;
                if (d != -1) {
                    for (b = d + 1; b < c.length; b++)typeof c[b] == "object" ? e = this.polyObj[a]._resize == "ver" ? f ? "b" : "t" : f ? "r" : "l" : this.polyObj[c[b]]._collapsed == !1 && (e = this.polyObj[a]._resize ==
                        "ver" ? f ? "b" : "t" : f ? "r" : "l");
                    if (e == null && d >= 1)for (b = d - 1; b >= 0; b--)typeof c[b] == "object" ? e = this.polyObj[a]._resize == "ver" ? f ? "t" : "b" : f ? "l" : "r" : this.polyObj[c[b]]._collapsed == !1 && (e = this.polyObj[a]._resize == "ver" ? f ? "t" : "b" : f ? "l" : "r")
                }
                if (e != null) {
                    var g = this.polyObj[a]._resize;
                    this.polyObj[a].childNodes[0].childNodes[0].childNodes[4].className = "dhtmlxInfoButtonShowHide_" + g + " dhxLayoutButton_" + this.skin + "_" + g + (this.polyObj[a]._collapsed ? "2" : "1") + e
                }
            }
        };
        this._defineWindowMinDimension = function (a, c) {
            if (c == !0) {
                var f =
                    [];
                f[0] = parseInt(a.style.width);
                f[1] = parseInt(a.style.height)
            } else {
                f = a.getDimension();
                if (f[0] == "100%")f[0] = a.offsetWidth;
                if (f[1] == "100%")f[1] = a.offsetHeight
            }
            var d = j._getNearestParents("hor"), b = j._getNearestParents("ver");
            if (!c) {
                var e = [], g = [], i;
                for (i in d)e[e.length] = i;
                for (i in b)g[g.length] = i;
                j._checkAlterMinSize([e, g]);
                for (var h = {}, k = {}, l = 0; l < j._alterSizes.length; l++) {
                    i = j._alterSizes[l][0];
                    var m = j._alterSizes[l][1], r = j._alterSizes[l][2];
                    h[i] == null ? h[i] = m : m > h[i] && (h[i] = m);
                    k[i] == null ? k[i] = r : r > k[i] &&
                        (k[i] = r)
                }
                for (i in d)h[i] != null && (d[i] = d[i] - h[i] + j._minWidth);
                for (i in b)k[i] != null && (b[i] = b[i] - k[i] + j._minHeight - (j.polyObj[i].childNodes[0].style.display != "none" ? j.skinParams[j.skin].cpanel_height : 0))
            }
            var s = 65536;
            for (i in d)d[i] < s && (s = d[i]);
            s -= j._minWidth;
            s = f[0] - s;
            s < j._dimension[0] && !c && (s = j._dimension[0]);
            var n = 65536;
            for (i in b)b[i] < n && (n = b[i]);
            n -= j._minHeight;
            n = f[1] - n;
            n < j._dimension[1] && !c && (n = j._dimension[1]);
            if (c == !0)return["", s, n];
            a.setMinDimension(s, n)
        };
        this._getNearestParents = function (a) {
            for (var c =
                a == "hor" ? this._autoHor : this._autoVer, f = {}, d = 0; d < c.length; d++) {
                var b = c[d];
                if (this.polyObj[b]._collapsed == !0 && this.polyObj[b]._resize == a) {
                    for (var e = this.polyObj[b]._rowData, g = -1, i = 0; i < e.length; i++)typeof e[i] == "object" ? g = i : e[i] == b && (g = i);
                    var h = g, b = null;
                    if (g > 0)for (i = g - 1; i >= 0; i--)typeof e[i] == "object" ? b = e[i] : this.polyObj[e[i]]._collapsed == !1 && b == null && (b = e[i]);
                    if (b == null)for (i = h; i < e.length; i++)typeof e[i] == "object" ? b = e[i] : this.polyObj[e[i]]._collapsed == !1 && b == null && (b = e[i])
                }
                if (b != null) {
                    typeof b == "string" &&
                    (b = Array(b));
                    for (i = 0; i < b.length; i++)f[b[i]] = parseInt(a == "hor" ? this.polyObj[b[i]].style.width : this.polyObj[b[i]].style.height)
                }
            }
            return f
        };
        this.setSizes = function (a) {
            var c = this._defineWindowMinDimension(this.base, !0);
            this.cont.obj.setMinContentSize(c[1], c[2]);
            this.cont.obj.adjustContent(this.cont.obj, 0);
            if (this.base.offsetParent) {
                this.cont && a !== !1 && this.cont.obj.adjustContent(this.cont.obj, this._mTop, null, null, this._mBottom);
                var f = this.base.offsetParent.offsetWidth - this.base.offsetWidth + (this._baseWFix !=
                    null ? this._baseWFix : 0), d = this.base.offsetParent.offsetHeight - this.base.offsetHeight + (this._baseHFix != null ? this._baseHFix : 0);
                this.base.style.width = parseInt(this.base.style.width) + f + "px";
                this.base.style.height = parseInt(this.base.style.height) + d + "px";
                var b = {}, e;
                for (e in this._getNearestParents("hor"))this.polyObj[e].style.width = Math.max(0, parseInt(this.polyObj[e].style.width) + f) + "px", this.polyObj[e].childNodes[0].style.width = this.polyObj[e].style.width, b[e] = 1;
                for (e in this._getNearestParents("ver"))this.polyObj[e].style.height =
                    Math.max(0, parseInt(this.polyObj[e].style.height) + d) + "px", this.polyObj[e].childNodes[0].style.height = this.polyObj[e].style.height, b[e] = 1;
                for (e in b)this.polyObj[e].adjustContent(this.polyObj[e].childNodes[0], this.polyObj[e]._noHeader ? 0 : this.skinParams[this.skin].cpanel_height), this.polyObj[e].updateNestedObjects();
                this.callEvent("onResizeFinish", [])
            }
        };
        dhtmlxEventable(this);
        this._init()
    } else alert(this.i18n.dhxcontalert)
}
dhtmlXLayoutObject.prototype.unload = function () {
    this._isIPad ? (document.removeEventListener("touchmove", this._doOnMouseMove, !1), document.removeEventListener("touchend", this._doOnMouseUp, !1)) : _isIE ? (document.body.detachEvent("onselectstart", this._doOnSelectStart), document.body.detachEvent("onmousemove", this._doOnMouseMove), document.body.detachEvent("onmouseup", this._doOnMouseUp)) : (document.body.removeEventListener("mousemove", this._doOnMouseMove, !1), document.body.removeEventListener("mouseup", this._doOnMouseUp,
        !1));
    this._doOnMouseUp = this._doOnMouseMove = this._doOnSelectStart = null;
    for (var k in this.polyObj) {
        var l = this.polyObj[k];
        l._isCell = null;
        l.skin = null;
        l.getId = null;
        l.getIndex = null;
        l.showHeader = null;
        l.hideHeader = null;
        l.isHeaderVisible = null;
        l.setText = null;
        l.getText = null;
        l.expand = null;
        l.collapse = null;
        l.isCollapsed = null;
        l.dock = null;
        l.undock = null;
        l.setWidth = null;
        l.getWidth = null;
        l.setHeight = null;
        l.getHeight = null;
        l.fixSize = null;
        l.progressOn = null;
        l.progressOff = null;
        l._doOnAttachMenu = null;
        l._doOnAttachToolbar =
            null;
        l._doOnAttachStatusBar = null;
        l._collapsed = null;
        l._idd = null;
        l._ind = null;
        l._rowData = null;
        l._dir = null;
        l._initCPanel = null;
        l._minW = null;
        l._minH = null;
        l._resize = null;
        l._savedH = null;
        l._savedW = null;
        l.ondblclick = null;
        var m = l.childNodes[0].childNodes[0];
        m.className = "";
        m._dockCell = null;
        m._resize = null;
        m._h = null;
        m.ondblclick = null;
        m.childNodes[4].onclick = null;
        for (var j = 0; j < m.childNodes.length; j++)m.childNodes[j].onselectstart = null;
        for (; m.childNodes.length > 0;)m.removeChild(m.childNodes[0]);
        m.parentNode.removeChild(m);
        m = null;
        l._dhxContDestruct();
        l._dhxContDestruct = null;
        l.removeChild(l.childNodes[0]);
        l.parentNode.removeChild(l);
        l = null
    }
    for (k in this.polyObj)this.polyObj[k] = null;
    for (var t = 0; t < this.items.length; t++)this.items[t] = null;
    this.items = this.polyObj = null;
    for (var v = this.tpl.childNodes[0]; v.childNodes.length > 0;) {
        for (; v.childNodes[0].childNodes.length > 0;) {
            j = v.childNodes[0].childNodes[0];
            j._top = null;
            j._bottom = null;
            j._left = null;
            j._right = null;
            j._dblClick = null;
            j._isSep = null;
            j._dir = null;
            j._lastClick = null;
            j.ondblclick =
                null;
            j.onmousedown = null;
            j.onmouseup = null;
            for (j.onselectstart = null; j.childNodes.length > 0;)j.removeChild(j.childNodes[0]);
            j.parentNode.removeChild(j);
            j = null
        }
        v.removeChild(v.childNodes[0])
    }
    v.parentNode.removeChild(v);
    v = null;
    this.tpl.parentNode.removeChild(this.tpl);
    this.tpl = null;
    for (k in this.sepHor)this.sepHor[k] = null;
    for (k in this.sepVer)this.sepVer[k] = null;
    this.sepVer = this.sepHor = null;
    if (this._ha) {
        this.detachEvent(this._haEv);
        for (this._haEv = null; this._ha.childNodes.length > 0;)this._ha.removeChild(this._ha.childNodes[0]);
        this._ha.parentNode.removeChild(this._ha);
        this._ha = null
    }
    if (this._fa) {
        this.detachEvent(this._faEv);
        for (this._faEv = null; this._fa.childNodes.length > 0;)this._fa.removeChild(this._fa.childNodes[0]);
        this._fa.parentNode.removeChild(this._fa);
        this._fa = null
    }
    this._CPanelHeight = this._CPanelBtnsWidth = this.tplSizes = this.tplData = this.skinParams = this.skin = this.imagePath = this.h = this.w = this._xmlLoader = this._totalRows = this._totalCols = this._rowsRatio = this._colsRatio = this._resY = this._resX = this._resObj = this._resFunc =
        this._minHeight = this._minWidth = this._mTop = this._mBottom = this._layoutView = this._effects = this._dimension = this._availAutoSize = this._autoVer = this._autoHor = this.attachFooter = this.attachHeader = null;
    this.sizer.parentNode && this.sizer.parentNode.removeChild(this.sizer);
    this._resYMaxHeightBottom = this._resYMaxHeightTop = this._resXMaxWidthRight = this._resXMaxWidthLeft = this._resYStart = this._resXStart = this._minHTAlter = this._minHBAlter = this._minWRAlter = this._minWLAlter = this._collapsedW = this._collapsedH = this._dblClickTM =
        this._doOnDoubleClick = this._autodetectSkin = this.dhx_SeverCatcherPath = this.i18n = this._isIPad = this._effect = this._autosize = this._cells = this.hideStatusBar = this.hideToolbar = this.hideMenu = this.showStatusBar = this.showToolbar = this.showMenu = this.detachStatusBar = this.detachToolbar = this.detachMenu = this.attachStatusBar = this.attachToolbar = this.attachMenu = this.setCollapsedText = this.updateNestedObjectsArray = this.unload = this.unDockWindow = this.showPanel = this.setText = this.setSkin = this.setSizes = this.setImagePath = this.setEffect =
            this.setAutoSize = this.progressOn = this.progressOff = this.listViews = this.listAutoSizes = this.isPanelVisible = this.hidePanel = this.getTextTooltip = this.getText = this.getIndexById = this.getIdByIndex = this.getEffect = this.forEachItem = this.eventCatcher = this.dockWindow = this.detachEvent = this.checkEvent = this.cells = this.callEvent = this.attachToolbar = this.attachStatusBar = this.attachMenu = this.attachEvent = this._xmlParser = this._showCovers = this._setWidth = this._setW = this._setHeight = this._setH = this._resAreaData = this._resizeVer =
                this._resizeStop = this._resizeHor = this._progressControlGlobal = this._progressControl = this._isResizable = this._isCollapsed = this._initWindows = this._init = this._hideCovers = this._getNearestParents = this._fixSplitters = this._fixSize = this._fixPositionInWin = this._fixIcons = this._findDockCellsVer = this._findDockCellsHor = this._expandEffect = this._expand = this._doExpand = this._doCollapse = this._defineWindowMinDimension = this._collectResAreaData = this._collapseEffect = this._collapse = this._checkAlterMinSize = this._changeCPanelText =
                    this._buildSurface = this._attachSizer = this._alterSizes = this.sizer = null;
    if (this.obj)this.obj.parentNode.removeChild(this.obj), this.obj = null;
    if (this.base && this.base != document.body)this.base.parentNode.removeChild(this.base), this.base = null;
    if (this.cont)this.cont.obj._dhxContDestruct(), this.cont = null;
    if (this.dhxWins)this.dhxWins.unload(), this.dhxWinsIdPrefix = this.dhxWins = null;
    if (this._doOnResizeStart)_isIE ? window.detachEvent("onresize", this._doOnResizeStart) : window.removeEventListener("resize", this._doOnResizeStart,
        !1), this._tmTime = this._doOnResizeEnd = this._doOnResizeStart = null;
    this.detachAllEvents();
    that = this.detachAllEvents = null
};
dhtmlXLayoutObject.prototype.tplData = {"1C":'<layout><autosize hor="a" ver="a" rows="1" cols="1"/><table data="a"/><row><cell obj="a" wh="1,1" resize="ver" neighbors="a"/></row></layout>', "2E":'<layout><autosize hor="a;b" ver="b" rows="2" cols="1"/><table data="a;b"/><row><cell obj="a" wh="1,2" resize="ver" neighbors="a;b"/></row><row sep="true"><cell sep="hor" top="a" bottom="b" dblclick="a"/></row><row><cell obj="b" wh="1,2" resize="ver" neighbors="a;b"/></row></layout>', "2U":'<layout><autosize hor="b" ver="a;b" rows="1" cols="2"/><table data="a,b"/><row><cell obj="a" wh="2,1" resize="hor" neighbors="a;b"/><cell sep="ver" left="a" right="b"/><cell obj="b" wh="2,1" resize="hor" neighbors="a;b"/></row></layout>',
    "3E":'<layout><autosize hor="a;b;c" ver="c" rows="3" cols="1"/><table data="a;b;c"/><row><cell obj="a" wh="1,3" resize="ver" neighbors="a;b;c"/></row><row sep="yes"><cell sep="hor" top="a" bottom="b;c" dblclick="a"/></row><row><cell obj="b" wh="1,3" resize="ver" neighbors="a;b;c"/></row><row sep="yes"><cell sep="hor" top="a;b" bottom="c" dblclick="b"/></row><row><cell obj="c" wh="1,3" resize="ver" neighbors="a;b;c"/></row></layout>', "3W":'<layout><autosize hor="c" ver="a;b;c" rows="1" cols="3"/><table data="a,b,c"/><row><cell obj="a" wh="3,1" resize="hor" neighbors="a;b;c"/><cell sep="ver" left="a" right="b;c" dblclick="a"/><cell obj="b" wh="3,1" resize="hor" neighbors="a;b;c"/><cell sep="ver" left="a;b" right="c" dblclick="b"/><cell obj="c" wh="3,1" resize="hor" neighbors="a;b;c"/></row></layout>',
    "3J":'<layout><autosize hor="b" ver="b;c" rows="2" cols="2"/><table data="a,b;c,b"/><row><cell obj="a" wh="2,2" resize="ver" neighbors="a;c"/><cell sep="ver" left="a,c" right="b" dblclick="b" rowspan="3"/><cell obj="b" wh="2,1" resize="hor" neighbors="a,c;b" rowspan="3"/></row><row sep="yes"><cell sep="hor" top="a" bottom="c" dblclick="a"/></row><row><cell obj="c" wh="2,2" resize="ver" neighbors="a;c"/></row></layout>', "3T":'<layout><autosize hor="a;c" ver="b;c" rows="2" cols="2"/><table data="a,a;b,c"/><row><cell obj="a" wh="1,2" resize="ver" neighbors="a;b,c" colspan="3"/></row><row sep="true"><cell sep="hor" top="a" bottom="b,c" dblclick="a" colspan="3"/></row><row><cell obj="b" wh="2,2" resize="hor" neighbors="b;c"/><cell sep="ver" left="b" right="c" dblclick="b"/><cell obj="c" wh="2,2" resize="hor" neighbors="b;c"/></row></layout>',
    "3L":'<layout><autosize hor="b;c" ver="a;c" rows="2" cols="2"/><table data="a,b;a,c"/><row><cell obj="a" wh="2,1" resize="hor" neighbors="a;b,c" rowspan="3"/><cell sep="ver" left="a" right="b,c" dblclick="a" rowspan="3"/><cell obj="b" wh="2,2" resize="ver" neighbors="b;c"/></row><row sep="true"><cell sep="hor" top="b" dblclick="b" bottom="c"/></row><row><cell obj="c" wh="b,2" resize="ver" neighbors="b;c"/></row></layout>', "3U":'<layout><autosize hor="b;c" ver="c" rows="2" cols="2"/><table data="a,b;c,c"/><row><cell obj="a" wh="2,2" resize="hor" neighbors="a;b"/><cell sep="ver" left="a" right="b" dblclick="a"/><cell obj="b" wh="2,2" resize="hor" neighbors="a;b"/></row><row sep="true"><cell sep="hor" top="a,b" bottom="c" dblclick="c" colspan="3"/></row><row><cell obj="c" wh="1,2" resize="ver" neighbors="a,b;c" colspan="3"/></row></layout>',
    "4H":'<layout><autosize hor="d" ver="a;c;d" rows="2" cols="3"/><table data="a,b,d;a,c,d"/><row><cell obj="a" wh="3,1" resize="hor" neighbors="a;b,c;d" rowspan="3"/><cell sep="ver" left="a" right="b,c;d" dblclick="a" rowspan="3"/><cell obj="b" wh="3,2" resize="ver" neighbors="b;c"/><cell sep="ver" left="a;b,c" right="d" dblclick="d" rowspan="3"/><cell obj="d" wh="3,1" resize="hor" neighbors="a;b,c;d" rowspan="3"/></row><row sep="true"><cell sep="hor" top="b" dblclick="b" bottom="c"/></row><row><cell obj="c" wh="3,2" resize="ver" neighbors="b;c"/></row></layout>',
    "4I":'<layout><autosize hor="a;c;d" ver="d" rows="3" cols="2"/><table data="a,a;b,c;d,d"/><row><cell obj="a" wh="1,3" resize="ver" neighbors="a;b,c;d" colspan="3"/></row><row sep="true"><cell sep="hor" top="a" bottom="b,c;d" dblclick="a" colspan="3"/></row><row><cell obj="b" wh="2,3" resize="hor" neighbors="b;c"/><cell sep="ver" left="b" dblclick="b" right="c"/><cell obj="c" wh="2,3" resize="hor" neighbors="b;c"/></row><row sep="true"><cell sep="hor" top="a;b,c" bottom="d" dblclick="d" colspan="3"/></row><row><cell obj="d" wh="1,3" resize="ver" neighbors="a;b,c;d" colspan="3"/></row></layout>',
    "4T":'<layout><autosize hor="a;d" ver="b;c;d" rows="2" cols="3"/><table data="a,a,a;b,c,d"/><row><cell obj="a" wh="1,2" resize="ver" neighbors="a;b,c,d" colspan="5"/></row><row sep="true"><cell sep="hor" top="a" bottom="b,c,d" dblclick="a" colspan="5"/></row><row><cell obj="b" wh="3,2" resize="hor" neighbors="b;c;d"/><cell sep="ver" left="b" right="c;d" dblclick="b"/><cell obj="c" wh="3,2" resize="hor" neighbors="b;c;d"/><cell sep="ver" left="b;c" right="d" dblclick="c"/><cell obj="d" wh="3,2" resize="hor" neighbors="b;c;d"/></row></layout>',
    "4U":'<layout><autosize hor="c;d" ver="d" rows="2" cols="3"/><table data="a,b,c;d,d,d"/><row><cell obj="a" wh="3,2" resize="hor" neighbors="a;b;c"/><cell sep="ver" left="a" right="b;c" dblclick="a"/><cell obj="b" wh="3,2" resize="hor" neighbors="a;b;c"/><cell sep="ver" left="a;b" right="c" dblclick="b"/><cell obj="c" wh="3,2" resize="hor" neighbors="a;b;c"/></row><row sep="true"><cell sep="hor" top="a,b,c" bottom="d" dblclick="d" colspan="5"/></row><row><cell obj="d" wh="1,2" resize="ver" neighbors="a,b,c;d" colspan="5"/></row></layout>',
    "5H":'<layout><autosize hor="b;c;d" ver="a;c;e" rows="3" cols="3"/><table data="a,b,e;a,c,e;a,d,e"/><row><cell obj="a" wh="3,1" resize="hor" neighbors="a;b,c,d" rowspan="5"/><cell sep="ver" left="a" right="b,c,d;e" dblclick="a" rowspan="5"/><cell obj="b" wh="3,3" resize="ver" neighbors="b;c;d"/><cell sep="ver" left="a;b,c,d" right="e" dblclick="e" rowspan="5"/><cell obj="e" wh="3,1" resize="hor" neighbors="b,c,d;e" rowspan="5"/></row><row sep="true"><cell sep="hor" top="b" dblclick="b" bottom="c;d"/></row><row><cell obj="c" wh="3,3" resize="ver" neighbors="b;c;d"/></row><row sep="true"><cell sep="hor" top="b;c" dblclick="c" bottom="d"/></row><row><cell obj="d" wh="3,3" resize="ver" neighbors="b;c;d"/></row></layout>',
    "5I":'<layout><autosize hor="a;d;e" ver="e" rows="3" cols="3"/><table data="a,a,a;b,c,d;e,e,e"/><row><cell obj="a" wh="1,3" resize="ver" neighbors="a;b,c,d;e" colspan="5"/></row><row sep="match"><cell sep="hor" top="a" bottom="b,c,d;e" dblclick="a" colspan="5"/></row><row><cell obj="b" wh="3,3" resize="hor" neighbors="b;c;d"/><cell sep="ver" left="b" right="c;d" dblclick="b"/><cell obj="c" wh="3,3" resize="hor" neighbors="b;c;d"/><cell sep="ver" left="b;c" right="d" dblclick="c"/><cell obj="d" wh="3,3" resize="hor" neighbors="b;c;d"/></row><row sep="match"><cell sep="hor" top="a;b,c,d" bottom="e" dblclick="e" colspan="5"/></row><row><cell obj="e" wh="1,3" resize="ver" neighbors="a;b,c,d;e" colspan="5"/></row></layout>',
    "6I":'<layout><autosize hor="a;e;f" ver="f" rows="3" cols="4"/><table data="a,a,a,a;b,c,d,e;f,f,f,f"/><row><cell obj="a" wh="1,3" resize="ver" neighbors="a;b,c,d,e;f" colspan="7"/></row><row sep="true"><cell sep="hor" top="a" bottom="b,c,d,e;f" dblclick="a" colspan="7"/></row><row><cell obj="b" wh="4,3" resize="hor" neighbors="b;c;d;e"/><cell sep="ver" left="b" right="c;d;e" dblclick="b"/><cell obj="c" wh="4,3" resize="hor" neighbors="b;c;d;e"/><cell sep="ver" left="b;c" right="d;e" dblclick="c"/><cell obj="d" wh="4,3" resize="hor" neighbors="b;c;d;e"/><cell sep="ver" left="b;c;d" right="e" dblclick="d"/><cell obj="e" wh="4,3" resize="hor" neighbors="b;c;d;e"/></row><row sep="true"><cell sep="hor" top="a;b,c,d,e" bottom="f" dblclick="f" colspan="7"/></row><row><cell obj="f" wh="1,3" resize="ver" neighbors="a;b,c,d,e;f" colspan="7"/></row></layout>'};
dhtmlXLayoutObject.prototype._availAutoSize = {"1C_hor":["a"], "1C_ver":["a"], "2E_hor":["a;b"], "2E_ver":["a", "b"], "2U_hor":["a", "b"], "2U_ver":["a;b"], "3E_hor":["a;b;c"], "3E_ver":["a", "b", "c"], "3W_hor":["a", "b", "c"], "3W_ver":["a;b;c"], "3J_hor":["a;c", "b"], "3J_ver":["a;b", "c;b"], "3T_hor":["a;b", "a;c"], "3T_ver":["a", "b;c"], "3L_hor":["a", "b;c"], "3L_ver":["a;b", "a;c"], "3U_hor":["a;c", "b;c"], "3U_ver":["a;b", "c"], "4H_hor":["a", "b;c", "d"], "4H_ver":["a;b;d", "a;c;d"], "4I_hor":["a;b;d", "a;c;d"], "4I_ver":["a", "b;c",
    "d"], "4T_hor":["a;b", "a;c", "a;d"], "4T_ver":["a", "b;c;d"], "4U_hor":["a;d", "b;d", "c;d"], "4U_ver":["a;b;c", "d"], "5H_hor":["a", "b;c;d", "e"], "5H_ver":["a;b;e", "a;c;e", "a;d;e"], "5I_hor":["a;b;e", "a;c;e", "a;d;e"], "5I_ver":["a", "b;c;d", "e"], "6I_hor":["a;b;f", "a;c;f", "a;d;f", "a;e;f"], "6I_ver":["a", "b;c;d;e", "f"]};
dhtmlXLayoutObject.prototype.setCollapsedText = function (k, l) {
    if (this.polyObj[k]) {
        var m = this.polyObj[k].childNodes[0].childNodes[0];
        if (m.childNodes[m.childNodes.length - 1]._ct === !0)var j = m.childNodes[m.childNodes.length - 1]; else j = document.createElement("DIV"), j._ct = !0, j.className = "dhtmlxInfoBarLabel_collapsed_" + this.polyObj[k]._resize, m.appendChild(j);
        j.innerHTML = l;
        this._fixCollapsedText();
        m = null
    }
};
dhtmlXLayoutObject.prototype._fixCollapsedText = function () {
    for (var k in this.polyObj)if (this.polyObj[k]._resize == "hor") {
        var l = this.polyObj[k].childNodes[0].childNodes[0];
        if (l.childNodes[l.childNodes.length - 1]._ct === !0)l.childNodes[l.childNodes.length - 1].style.width = Math.max(0, l.offsetHeight - l.childNodes[4].offsetTop - l.childNodes[4].offsetHeight - 12) + "px"
    }
};
dhtmlXLayoutObject.prototype.i18n = {dhxcontalert:"dhtmlxcontainer.js is missed on the page", collapse:"Collapse", expand:"Expand", dock:"Dock", undock:"UnDock"};
(function () {
    dhtmlx.extend_api("dhtmlXLayoutObject", {_init:function (k) {
        return[k.parent, k.pattern, k.skin]
    }, image_path:"setImagePath", effect:"_effect", cells:"_cells", autosize:"_autosize"}, {_cells:function (k) {
        for (var l = 0; l < k.length; l++) {
            var m = k[l], j = this.cells(m.id);
            j && (m.height && j.setHeight(m.height), m.width && j.setWidth(m.width), m.text && j.setText(m.text), m.collapse && j.collapse(), m.fix_size && j.fixSize(m.fix_size[0], m.fix_size[1]), m.header === !1 && j.hideHeader())
        }
    }, _autosize:function (k) {
        this.setAutoSize(k[0],
            k[1])
    }, _effect:function (k) {
        k.collapse && this.setEffect("collapse", k.collapse);
        k.resize && this.setEffect("resize", k.resize);
        k.highlight && this.setEffect("highlight", k.highlight)
    }})
})();
dhtmlXLayoutObject.prototype.attachHeader = function (k) {
    if (!this._ha) {
        typeof k != "object" && (k = document.getElementById(k));
        var l = k.offsetHeight + (this.skin == "dhx_web" ? 9 : 2) + 2;
        this.cont.obj._offsetTop = l;
        this.cont.obj._offsetHeight = -l;
        this.setSizes();
        this._ha = document.createElement("DIV");
        this._ha.style.position = "absolute";
        this._ha.style.top = "2px";
        this._ha.style.left = this.cont.obj.vs[this.cont.obj.av].dhxcont.style.left;
        this._ha.style.width = this.cont.obj.vs[this.cont.obj.av].dhxcont.style.width;
        this._ha.style.height =
            k.offsetHeight + "px";
        document.body.appendChild(this._ha);
        this._ha.appendChild(k);
        this._haEv = this.attachEvent("onResizeFinish", function () {
            this._ha.style.width = this.cont.obj.vs[this.cont.obj.av].dhxcont.style.width
        })
    }
};
dhtmlXLayoutObject.prototype.attachFooter = function (k) {
    if (!this._fa) {
        typeof k != "object" && (k = document.getElementById(k));
        var l = k.offsetHeight + (this.skin == "dhx_web" ? 9 : 2) - 2;
        this.cont.obj._offsetHeight -= l;
        this.setSizes();
        this._fa = document.createElement("DIV");
        this._fa.style.position = "absolute";
        this._fa.style.bottom = "2px";
        this._fa.style.left = this.cont.obj.vs[this.cont.obj.av].dhxcont.style.left;
        this._fa.style.width = this.cont.obj.vs[this.cont.obj.av].dhxcont.style.width;
        this._fa.style.height = k.offsetHeight +
            "px";
        document.body.appendChild(this._fa);
        this._fa.appendChild(k);
        this._faEv = this.attachEvent("onResizeFinish", function () {
            this._fa.style.width = this.cont.obj.vs[this.cont.obj.av].dhxcont.style.width
        })
    }
};
dhtmlXLayoutObject.prototype._fixToolbars = function () {
    if (_isIE)for (var k in this.polyObj)this.polyObj[k].vs[this.polyObj[k].av].toolbar != null && this.polyObj[k].vs[this.polyObj[k].av].toolbar._fixSpacer()
};
dhtmlXLayoutObject.prototype._hideBorders = function () {
    if (this.skin == "dhx_terrace") {
        this._cpm_old = this.skinParams[this.skin].cell_pading_max;
        this.skinParams[this.skin].cell_pading_max = [1, 0, 0, 0];
        for (var k in this.polyObj)this.polyObj[k]._setPadding(this.skinParams[this.skin].cell_pading_max, "dhxcont_layout_" + this.skin), this.polyObj[k].adjustContent(this.polyObj[k].childNodes[0], this.skinParams[this.skin].cpanel_height)
    }
};

//v.3.5 build 120822

/*
 Copyright DHTMLX LTD. http://www.dhtmlx.com
 You allowed to use this component or parts of it under GPL terms
 To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
 */