//v.3.5 build 120822

/*
 Copyright DHTMLX LTD. http://www.dhtmlx.com
 You allowed to use this component or parts of it under GPL terms
 To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
 */
dhtmlXGridObject.prototype._key_events = {k13_1_0:function () {
    this.editStop()
}, k13_0_1:function () {
    this.editStop();
    this._key_events.k38_0_0.call(this)
}, k13_0_0:function () {
    this.editStop();
    this.callEvent("onEnter", [this.row ? this.row.idd : null, this.cell ? this.cell._cellIndex : null]);
    this._still_active = !0;
    this._key_events.k40_0_0.call(this)
}, k9_0_0:function () {
    this.editStop();
    if (!this.callEvent("onTab", [!0]))return!0;
    if (!(this.cell && this.cell._cellIndex + 1 >= this._cCount)) {
        var a = this._getNextCell(null, 1);
        if (a &&
            this.row == a.parentNode)this.selectCell(a.parentNode, a._cellIndex, !0, !0), this._still_active = !0
    }
}, k9_0_1:function () {
    this.editStop();
    if (!this.callEvent("onTab", [!1]))return!0;
    if (!(this.cell && this.cell._cellIndex == 0)) {
        var a = this._getNextCell(null, -1);
        if (a && this.row == a.parentNode)this.selectCell(a.parentNode, a._cellIndex, !0, !0), this._still_active = !0
    }
}, k113_0_0:function () {
    this._f2kE && this.editCell()
}, k32_0_0:function () {
    var a = this.cells4(this.cell);
    if (!a.changeState || a.changeState() === !1)return!1
}, k27_0_0:function () {
    this.editStop(!0);
    this._still_active = !0
}, k33_0_0:function () {
    this.pagingOn ? this.changePage(this.currentPage - 1) : this.scrollPage(-1)
}, k34_0_0:function () {
    this.pagingOn ? this.changePage(this.currentPage + 1) : this.scrollPage(1)
}, k37_0_0:function () {
    if (this.editor)return!1;
    this.isTreeGrid() ? this.collapseKids(this.row) : this._key_events.k9_0_1.call(this)
}, k39_0_0:function () {
    if (this.editor)return!1;
    !this.editor && this.isTreeGrid() ? this.expandKids(this.row) : this._key_events.k9_0_0.call(this)
}, k37_1_0:function () {
    if (this.editor)return!1;
    this.selectCell(this.row, 0, !0)
}, k39_1_0:function () {
    if (this.editor)return!1;
    this.selectCell(this.row, this._cCount - 1, !0)
}, k38_1_0:function () {
    if (this.editor || !this.rowsCol.length)return!1;
    this.selectCell(this.rowsCol[0], this.cell._cellIndex, !0)
}, k40_1_0:function () {
    if (this.editor || !this.rowsCol.length)return!1;
    this.selectCell(this.rowsCol[this.rowsCol.length - 1], this.cell._cellIndex, !0)
}, k38_0_1:function () {
    if (this.editor || !this.rowsCol.length)return!1;
    var a = this.row.rowIndex, b = this._nextRow(a - 1, -1);
    if (!b ||
        b._sRow || b._rLoad)return!1;
    this.selectCell(b, this.cell._cellIndex, !0, !0)
}, k40_0_1:function () {
    if (this.editor || !this.rowsCol.length)return!1;
    var a = this.row.rowIndex, b = this._nextRow(a - 1, 1);
    if (!b || b._sRow || b._rLoad)return!1;
    this.selectCell(b, this.cell._cellIndex, !0, !0)
}, k38_1_1:function () {
    if (this.editor || !this.rowsCol.length)return!1;
    for (var a = this.row.rowIndex, b = a - 1; b >= 0; b--)this.selectCell(this.rowsCol[b], this.cell._cellIndex, !0, !0)
}, k40_1_1:function () {
    if (this.editor || !this.rowsCol.length)return!1;
    for (var a = this.row.rowIndex, b = a; b < this.rowsCol.length; b++)this.selectCell(this.rowsCol[b], this.cell._cellIndex, !0, !0)
}, k40_0_0:function () {
    if (this.editor && this.editor.combo)this.editor.shiftNext(); else {
        if (this.editor)return!1;
        var a = this.rowsCol._dhx_find(this.row) + 1;
        if (a && a != this.rowsCol.length && a != this.obj.rows.length - 1) {
            var b = this._nextRow(a - 1, 1);
            if (b._sRow || b._rLoad)return!1;
            this.selectCell(b, this.cell._cellIndex, !0)
        } else {
            if (!this.callEvent("onLastRow", []))return!1;
            this._key_events.k34_0_0.apply(this,
                [])
        }
    }
}, k36_0_0:function () {
    return this._key_events.k37_1_0.call(this)
}, k35_0_0:function () {
    return this._key_events.k39_1_0.call(this)
}, k36_1_0:function () {
    if (this.editor || !this.rowsCol.length)return!1;
    this.selectCell(this.rowsCol[0], 0, !0)
}, k35_1_0:function () {
    if (this.editor || !this.rowsCol.length)return!1;
    this.selectCell(this.rowsCol[this.rowsCol.length - 1], this._cCount - 1, !0)
}, k33_0_0:function () {
    this.pagingOn ? this.changePage(this.currentPage - 1) : this.scrollPage(-1)
}, k34_0_0:function () {
    this.pagingOn ? this.changePage(this.currentPage +
        1) : this.scrollPage(1)
}, k38_0_0:function () {
    if (this.editor && this.editor.combo)this.editor.shiftPrev(); else {
        if (this.editor)return!1;
        var a = a = this.rowsCol._dhx_find(this.row) + 1;
        if (a != -1) {
            var b = this._nextRow(a - 1, -1);
            if (!b || b._sRow || b._rLoad)return!1;
            this.selectCell(b, this.cell._cellIndex, !0)
        } else this._key_events.k33_0_0.apply(this, [])
    }
}, k_other:function (a) {
    if (this.editor)return!1;
    if (!a.ctrlKey && a.keyCode >= 40 && (a.keyCode < 91 || a.keyCode > 95 && a.keyCode < 111 || a.keyCode > 187) && this.cell) {
        var b = this.cells4(this.cell);
        if (b.isDisabled())return!1;
        var c = b.getValue();
        b.editable !== !1 && b.setValue("");
        this.editCell();
        this.editor ? (this.editor.val = c, this.editor.obj && this.editor.obj.select && this.editor.obj.select()) : b.setValue(c)
    }
}};

//v.3.5 build 120822

/*
 Copyright DHTMLX LTD. http://www.dhtmlx.com
 You allowed to use this component or parts of it under GPL terms
 To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
 */