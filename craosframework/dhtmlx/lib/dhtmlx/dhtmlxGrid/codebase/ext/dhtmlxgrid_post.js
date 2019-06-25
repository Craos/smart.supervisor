/*
===================================================================
Copyright DHTMLX LTD. http://www.dhtmlx.com
This code is obfuscated and not allowed for any purposes except 
using on sites which belongs to DHTMLX LTD.

Please contact sales@dhtmlx.com to obtain necessary 
license for usage of dhtmlx components.
===================================================================
*/dhtmlXGridObject.prototype.post=function(e,c,a,b){this.callEvent("onXLS",[this]);arguments.length==3&&typeof a!="function"&&(b=a,a=null);b=b||"xml";c=c||"";if(!this.tR)this.tR=e;this._data_type=b;this.bA.UR=function(d,c,e,g,f){f=d["_process_"+b](f);d.Bf||d.callEvent("onXLE",[d,0,0,f]);a&&(a(),a=null)};this.bA.loadXML(e,!0,c)};