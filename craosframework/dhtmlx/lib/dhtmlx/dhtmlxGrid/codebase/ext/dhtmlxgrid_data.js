/*
===================================================================
Copyright DHTMLX LTD. http://www.dhtmlx.com
This code is obfuscated and not allowed for any purposes except 
using on sites which belongs to DHTMLX LTD.

Please contact sales@dhtmlx.com to obtain necessary 
license for usage of dhtmlx components.
===================================================================
*/dhtmlXGridObject.prototype._process_xmlA=function(a){if(!a.et){var c=new ag(function(){});typeof a=="string"?c.loadXMLString(a):(c.ai=a.responseXML?a:{},c.ai.responseXML=a);a=c}this._parsing= !0;var f=a.cR(this.xml.top);this.Ov(f);var d=a.et(this.xml.row,f),e=parseInt(a.et("//"+this.xml.top)[0].getAttribute("pos")||0),g=parseInt(a.et("//"+this.xml.top)[0].getAttribute("total_count")||0);g&& !this.aD[g-1]&&(this.aD[g-1]=null);if(this.gY())return this._get_xml_data=this._get_xml_dataA,this._process_xml_row=this._process_xml_rowA,this._process_tree_xml(a);for(var b=0;b<d.length;b++)if(!this.aD[b+e]){var h=d[b].getAttribute("id")||this.uid();this.aD[b+e]={idd:h,data:d[b],_parser:this._process_xml_rowA,_locator:this._get_xml_dataA};this.bj[h]=d[b]}this.render_dataset();this._parsing= !1;return a.ai.responseXML?a.ai.responseXML:a.ai};dhtmlXGridObject.prototype._process_xmlB=function(a){if(!a.et){var c=new ag(function(){});typeof a=="string"?c.loadXMLString(a):(c.ai=a.responseXML?a:{},c.ai.responseXML=a);a=c}this._parsing= !0;var f=a.cR(this.xml.top);this.Ov(f);var d=a.et(this.xml.row,f),e=parseInt(a.et("//"+this.xml.top)[0].getAttribute("pos")||0),g=parseInt(a.et("//"+this.xml.top)[0].getAttribute("total_count")||0);g&& !this.aD[g-1]&&(this.aD[g-1]=null);if(this.gY())return this._get_xml_data=this._get_xml_dataB,this._process_xml_row=this._process_xml_rowB,this._process_tree_xml(a);for(var b=0;b<d.length;b++)if(!this.aD[b+e]){var h=d[b].getAttribute("id")||this.uid();this.aD[b+e]={idd:h,data:d[b],_parser:this._process_xml_rowB,_locator:this._get_xml_dataB};this.bj[h]=d[b]}this.render_dataset();this._parsing= !1;return a.ai.responseXML?a.ai.responseXML:a.ai};dhtmlXGridObject.prototype._process_xml_rowA=function(a,c){var f=[];a._attrs=this._xml_attrs(c);for(var d=0;d<this.columnIds.length;d++){var e=this.columnIds[d],g=a._attrs[e]||"";if(a.childNodes[d])a.childNodes[d]._attrs={};f.push(g)}this.VQ(a,this._c_order?this.Xb(f):f);return a};dhtmlXGridObject.prototype._get_xml_dataA=function(a,c){return a.getAttribute(this.getColumnId(c))};dhtmlXGridObject.prototype._process_xml_rowB=function(a,c){var f=[];a._attrs=this._xml_attrs(c);if(this._ud_enabled)for(var d=this.bA.et("./userdata",c),e=d.length-1;e>=0;e--)this.setUserData(d[e].getAttribute("name"),d[e].firstChild?d[e].firstChild.data:"");for(var g=0;g<c.childNodes.length;g++){var b=c.childNodes[g];if(b.tagName){var h=this.getColIndexById(b.tagName);if(!isNaN(h)){var i=b.getAttribute("type");if(i)a.childNodes[h].zk=i;a.childNodes[h]._attrs=this._xml_attrs(b);b.getAttribute("xmlcontent")||(b=b.firstChild?b.firstChild.data:"");f[h]=b}}}for(e=0;e<a.childNodes.length;e++)if(!a.childNodes[e]._attrs)a.childNodes[e]._attrs={};this.VQ(a,this._c_order?this.Xb(f):f);return a};dhtmlXGridObject.prototype._get_xml_dataB=function(a,c){for(var f=this.getColumnId(c),a=a.firstChild;;){if(!a)break;if(a.tagName==f)return a.firstChild?a.firstChild.data:"";a=a.nextSibling}return ""};