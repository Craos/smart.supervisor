var dhtmlXLayoutObject = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXLayoutObject.prototype.attachAccordion = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxAcc = dhxLayout.cells("a").attachAccordion(); // returns accordion object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachEditor = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxEd = dhxLayout.cells("a").attachEditor(); // returns editor object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachDataView = function () {
    ///	<summary>
    /// 
    ///		Example: var config = {
    /// 	type:{
    /// 		template:"#Package# : #Version#<br/>#Maintainer#",
    /// 		padding:5,
    /// 		height:40
    /// 	}
    ///     };
    ///     var dhxData = dhxLayout.cells("a").attachDataView(config); // returns folders object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachGoogleMaps = function () {
    ///	<summary>
    /// 
    ///		Example: var GMaps = dhxLayout.cells("b").attachGoogleMaps(); // returns GoogleMaps object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachGrid = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxGrid = dhxLayout.cells("a").attachGrid(); // returns grid object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachHTMLString = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.cells("a").attachHTMLString(htmlString);
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachLayout = function (pattern, skin) {
    ///	<summary>
    /// attaches dhtmlxLayout to the cell, returns layout object
    ///		Example: var dhxLayout2 = dhxLayout.cells("a").attachLayout("3L"); // returns layout object
    ///	</summary>
    ///	<param name="pattern" type="String">
    ///		pattern - layout&#039;s pattern (3L, 4U, ...)
    /// </param>
    ///	<param name="skin" type="String">
    ///		skin - optional, skin from parent component will applied automatically
    /// </param>

}
dhtmlXLayoutObject.prototype.attachMenu = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxMenu = dhxLayout.cells("a").attachMenu(); // returns menu object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachObject = function (obj) {
    ///	<summary>
    /// attaches html object to the cell
    ///		Example: <script>
    ///         dhxLayout.cells("a").attachObject("myObj");
    ///         // or
    ///         var obj = document.getElementById("myObj");
    ///         dhxLayout.cells("a").attachObject(obj);
    ///     </script>
    ///	</summary>
    ///	<param name="obj" type="Object">
    ///		obj - object/objectId
    /// </param>

}
dhtmlXLayoutObject.prototype.attachStatusBar = function () {
    ///	<summary>
    /// 
    ///		Example: var sb = dhxLayout.cells("a").attachStatusBar(); // returns status bar object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachTabbar = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxTabbar = dhxLayout.cells("a").attachTabbar(); // returns tabbar object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachToolbar = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxToolbar = dhxLayout.cells("a").attachToolbar(); // returns toolbar object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachTree = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxTree = dhxLayout.cells("a").attachTree(); // returns tree object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachURL = function (url) {
    ///	<summary>
    /// attaches url to the cell
    ///		Example: dhxLayout.cells("a").attachURL("http://some.address.com/some.page.html");
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - url (string)
    /// </param>

}
dhtmlXLayoutObject.prototype.collapse = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.cells(id).collapse();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.detachMenu = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.detachMenu();
    /// dhxLayout.cells(id).detachMenu();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.detachObject = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxLayout = new dhtmlXLayoutObject(document.body, "3L");
    ///     dhxLayout.cells("a").attachObject("myObj");
    ///	</summary>

}
dhtmlXLayoutObject.prototype.detachStatusBar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.detachStatusBar();
    ///     dhxLayout.cells(id).detachStatusBar();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.detachToolbar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.detachToolbar();
    /// dhxLayout.cells(id).detachToolbar();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.dock = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.cells(id).dock();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.expand = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.cells(id).expand();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.fixSize = function (width, height) {
    ///	<summary>
    /// fixes cell&#039;s size (block resize)
    ///		Example: dhxLayout.cells(id).fixSize(true, false);
    ///	</summary>
    ///	<param name="width" type="Boolean">
    ///		width - true/false
    /// </param>
    ///	<param name="height" type="Boolean">
    ///		height - true/false
    /// </param>

}
dhtmlXLayoutObject.prototype.getFrame = function () {
    ///	<summary>
    /// 
    ///		Example: var iframeObject = dhxLayout.cells(id).getFrame();
    ///     var winObject = iframeObject.contentWindow;
    ///	</summary>

}
dhtmlXLayoutObject.prototype.getHeight = function () {
    ///	<summary>
    /// 
    ///		Example: var h = dhxLayout.cells(id).getHeight();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.getId = function () {
    ///	<summary>
    /// 
    ///		Example: var id = dhxLayout.items[0].getId(); // will return "a"; [0] is item's index
    ///   // or
    /// var ids = new Array();
    /// dhxLayout.forEachItem(function(item){
    ///   ids[ids.length] = item.getId();
    /// });
    ///   // ids will contain ["a","b","c"...] depending on pattern
    ///	</summary>

}
dhtmlXLayoutObject.prototype.getIndex = function () {
    ///	<summary>
    /// 
    ///		Example: var ind = dhxLayout.cells("a").getIndex(); // will return 0; "a" is item's id
    ///   // or
    /// var inds = new Array();
    /// dhxLayout.forEachItem(function(item){
    ///   inds[inds.length] = item.getIndex();
    /// });
    ///   // inds will contain [0,1,2...] depending on pattern
    ///	</summary>

}
dhtmlXLayoutObject.prototype.getText = function () {
    ///	<summary>
    /// 
    ///		Example: var text = dhxLayout.cells("a").getText();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.getWidth = function () {
    ///	<summary>
    /// 
    ///		Example: var w = dhxLayout.cells("a").getWidth();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.hideHeader = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.cells("a").hideHeader();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.hideMenu = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.hideMenu();
    /// dhxLayout.cells(id).hideMenu();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.hideStatusBar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.hideStatusBar();
    /// dhxLayout.cells(id).hideStatusBar();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.hideToolbar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.hideToolbar();
    /// dhxLayout.cells(id).hideToolbar();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.isCollapsed = function () {
    ///	<summary>
    /// 
    ///		Example: var isCollapsed = dhxLayout.cells("a").isCollapsed(); // will return true/false
    ///	</summary>

}
dhtmlXLayoutObject.prototype.isHeaderVisible = function () {
    ///	<summary>
    /// 
    ///		Example: var isHeaderVisible = dhxLayout.cells("a").isHeaderVisible(); // will return true/false
    ///	</summary>

}
dhtmlXLayoutObject.prototype.progressOff = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.cells("a").progressOff();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.progressOn = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.cells("a").progressOn();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.setHeight = function (height) {
    ///	<summary>
    /// sets cell&#039;s height
    ///		Example: dhxLayout.cells("a").setHeight(200);
    ///	</summary>
    ///	<param name="height" type="String">
    ///		height
    /// </param>

}
dhtmlXLayoutObject.prototype.setText = function (text) {
    ///	<summary>
    /// set header&#039;s text
    ///		Example: dhxLayout.cells("a").setText("New Text");
    ///	</summary>
    ///	<param name="text" type="String">
    ///		text - new header&#039;s text
    /// </param>

}
dhtmlXLayoutObject.prototype.setWidth = function (width) {
    ///	<summary>
    /// sets cell&#039;s width
    ///		Example: dhxLayout.cells("a").setWidth(200);
    ///	</summary>
    ///	<param name="width" type="String">
    ///		width
    /// </param>

}
dhtmlXLayoutObject.prototype.show = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.cells("a").view("SomeView").show();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.showHeader = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.cells("a").showHeader();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.showMenu = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.showMenu();
    /// dhxLayout.cells(id).showMenu();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.showStatusBar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.showStatusBar();
    /// dhxLayout.cells(id).showStatusBar();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.showToolbar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.showToolbar();
    ///     dhxLayout.cells(id).showToolbar();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.view = function (text) {
    ///	<summary>
    /// create a view
    ///		Example: dhxLayout.cells("a").view("SomeView");
    ///	</summary>
    ///	<param name="text" type="String">
    ///		text - a view&#039;s name
    /// </param>

}
dhtmlXLayoutObject.prototype.undock = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.cells("a").undock();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachEvent = function (original, catcher, CallObj) {
    ///	<summary>
    /// attaches an event handler to a dhtmlxLayout
    ///		Example: dhxLayout.attachEvent("onExpand",function(id){
    ///         alert("Cell "+id+" was expanded.");
    ///     });
    ///     // or
    ///     function doOnExpand(id) {
    ///         alert("Cell "+id+" was expanded.");
    ///     }
    ///     dhxLayout.attachEvent("onExpand", doOnExpand);
    ///	</summary>
    ///	<param name="original" type="String">
    ///		original - event&#039;s original name;
    /// </param>
    ///	<param name="catcher" type="String">
    ///		catcher - event handler;
    /// </param>
    ///	<param name="CallObj" type="Object">
    ///		CallObj - object that will call the event.
    /// </param>

}
dhtmlXLayoutObject.prototype.attachMenu = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxMenu = dhxLayout.attachMenu(); // returns menu object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachStatusBar = function () {
    ///	<summary>
    /// 
    ///		Example: var sb = dhxLayout.attachStatusBar(); // returns status bar object
    ///     // setting status bar text
    ///     sb.setText("Status Bar");
    ///     // getting status bar text
    ///     var sbText = sb.getText();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.attachToolbar = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxToolbar = dhxLayout.attachToolbar(); // returns toolbar object
    ///	</summary>

}
dhtmlXLayoutObject.prototype.cells = function (id) {
    ///	<summary>
    /// returns cell&#039;s object by cell&#039;s id
    ///		Example: var item = dhxLayout.cells("a"); // returns cell object
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - cell&#039;s id
    /// </param>

}
dhtmlXLayoutObject.prototype.checkEvent = function (name) {
    ///	<summary>
    /// returns true if the event exists
    ///		Example: var isEventExists = dhxLayout.checkEvent("onExpand"); // returns true/false
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - event&#039;s name
    /// </param>

}
dhtmlXLayoutObject.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: var id = dhxLayout.attachEvent("onExpand",function(){});
    ///     // detaching event
    ///     dhxLayout.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlXLayoutObject.prototype.detachMenu = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.detachMenu();
    /// dhxLayout.cells(id).detachMenu();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.detachStatusBar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.detachStatusBar();
    ///     dhxLayout.cells(id).detachStatusBar();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.detachToolbar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.detachToolbar();
    /// dhxLayout.cells(id).detachToolbar();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.forEachItem = function (handler) {
    ///	<summary>
    /// iterator, calls a user-defined function n-times
    ///		Example: dhxLayout.forEachItem(function(item){
    ///         // do action with item, for example
    ///         item.hideHeader();
    ///     });
    ///     // or
    ///     function doWithItem(item) {
    ///         item.hideHeader();
    ///     }
    ///     dhxLayout.forEachItem(doWithItem);
    ///	</summary>
    ///	<param name="handler" type="Object">
    ///		handler - user-defined function, passed cell&#039;s object as an argument
    /// </param>

}
dhtmlXLayoutObject.prototype.getEffect = function (efName) {
    ///	<summary>
    /// returns true if the effect is enabled
    ///		Example: var isResizeEffect = dhxLayout.getEffect("resize"); // return true/false
    ///	</summary>
    ///	<param name="efName" type="String">
    ///		efName - effect name
    /// </param>

}
dhtmlXLayoutObject.prototype.getIdByIndex = function (ind) {
    ///	<summary>
    /// returns cell&#039;s id by index
    ///		Example: var id_0 = dhxLayout.getIdByIndex(0); // returns "a"
    ///     var id_1 = dhxLayout.getIdByIndex(1); // returns "b"
    ///     ...
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - cell&#039;s index (int)
    /// </param>

}
dhtmlXLayoutObject.prototype.getIndexById = function (id) {
    ///	<summary>
    /// returns cell&#039;s index by id
    ///		Example: var ind_a = dhxLayout.getIndexById("a"); // returns 0
    ///     var ind_b = dhxLayout.getIndexById("b"); // returns 1
    ///     ...
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - cell&#039;s id (string)
    /// </param>

}
dhtmlXLayoutObject.prototype.hideMenu = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.hideMenu();
    /// dhxLayout.cells(id).hideMenu();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.hideStatusBar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.hideStatusBar();
    /// dhxLayout.cells(id).hideStatusBar();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.hideToolbar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.hideToolbar();
    /// dhxLayout.cells(id).hideToolbar();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.listAutoSizes = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxLayout = dhtmlXLayoutObject(document.body, "5I");
    ///     var autoSizes = dhxLayout.listAutoSizes();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.listViews = function () {
    ///	<summary>
    /// 
    ///		Example: var patterns = dhxLayout.listViews();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.progressOff = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.progressOff();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.progressOn = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.progressOn();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.setAutoSize = function (hor, ver) {
    ///	<summary>
    /// sets autosize for the layout
    ///		Example: var dhxLayout = new dhtmlXLayoutObject(document.body, "5I");
    ///     // default autosize for "5I" pattern is ["a;d;e", "e"]
    ///     // redefine autosize
    ///     dhxLayout.setAutoSize("a;b;e", "a");
    ///	</summary>
    ///	<param name="hor" type="String">
    ///		hor - cells that will be autosized horizontally
    /// </param>
    ///	<param name="ver" type="String">
    ///		ver - cells that will be autosized vertically
    /// </param>

}
dhtmlXLayoutObject.prototype.setCollapsedText = function (text) {
    ///	<summary>
    /// The methods takes 2 parameters:
    ///		Example: dhxLayout.setCollapsedText("a","New Text");
    ///	</summary>
    ///	<param name="text" type="String">
    ///		id - cell id
    /// </param>

}
dhtmlXLayoutObject.prototype.setEffect = function (efName, efValue) {
    ///	<summary>
    /// sets effect
    ///		Example: dhxLayout.setEffect("resize", true); // turn on "resize" effect
    ///     dhxLayout.setEffect("highlight", false); // turn off "highlight" effect
    ///	</summary>
    ///	<param name="efName" type="String">
    ///		efName - effect&#039;s name
    /// </param>
    ///	<param name="efValue" type="Boolean">
    ///		efValue - true/false
    /// </param>

}
dhtmlXLayoutObject.prototype.setImagePath = function (path) {
    ///	<summary>
    /// sets path to images
    ///		Example: dhxLayout.setImagePath("path/on/harddrive/");
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - path on hard disk
    /// </param>

}
dhtmlXLayoutObject.prototype.setSizes = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxLayout = new dhtmlXLayoutObject("myLayout", "3L");
    ///	</summary>

}
dhtmlXLayoutObject.prototype.setSkin = function (skin) {
    ///	<summary>
    /// sets layout&#039;s skin
    ///		Example: dhxLayout.setSkin("dhx_skyblue");
    ///	</summary>
    ///	<param name="skin" type="String">
    ///		skin - skin name (string)
    /// </param>

}
dhtmlXLayoutObject.prototype.showMenu = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.showMenu();
    /// dhxLayout.cells(id).showMenu();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.showStatusBar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.showStatusBar();
    /// dhxLayout.cells(id).showStatusBar();
    ///	</summary>

}
dhtmlXLayoutObject.prototype.showToolbar = function () {
    ///	<summary>
    /// 
    ///		Example: dhxLayout.showToolbar();
    ///     dhxLayout.cells(id).showToolbar();
    ///	</summary>

}


var dhtmlXAccordion = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXAccordion.prototype.attachAccordion = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxAcc = dhxLayout.cells("a").attachAccordion(); // returns accordion object
    ///	</summary>

}
dhtmlXAccordion.prototype.attachEditor = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxEd = dhxLayout.cells("a").attachEditor(); // returns editor object
    ///	</summary>

}
dhtmlXAccordion.prototype.attachFolders = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxFolders = dhxLayout.cells("a").attachFolders(); // returns folders object
    ///	</summary>

}
dhtmlXAccordion.prototype.attachGrid = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxGrid = dhxLayout.cells("a").attachGrid(); // returns grid object
    ///	</summary>

}
dhtmlXAccordion.prototype.attachMap = function () {
    ///	<summary>
    /// 
    ///		Example: var GMaps = dhxLayout.cells("b").attachMap(); // returns GoogleMaps object
    ///	</summary>

}
dhtmlXAccordion.prototype.attachLayout = function (pattern, skin) {
    ///	<summary>
    /// attaches dhtmlxLayout to a cell, returns a layout object
    ///		Example: var dhxLayout2 = dhxLayout.cells("a").attachLayout("3L"); // returns layout object
    ///	</summary>
    ///	<param name="pattern" type="String">
    ///		pattern - layout&#039;s pattern (3L, 4U, ...)
    /// </param>
    ///	<param name="skin" type="String">
    ///		skin - optional, the skin from the parent component will applied automatically
    /// </param>

}
dhtmlXAccordion.prototype.attachMenu = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxMenu = dhxLayout.cells("a").attachMenu // returns menu object
    ///	</summary>

}
dhtmlXAccordion.prototype.attachObject = function (obj) {
    ///	<summary>
    /// attaches the html object to a cell
    ///		Example: <script>
    ///    dhxLayout.cells("a").attachObject("myObj");
    ///    // or
    ///    var obj = document.getElementById("myObj");
    ///    dhxLayout.cells("a").attachObject(obj);
    /// </script>
    ///	</summary>
    ///	<param name="obj" type="Object">
    ///		obj - object/objectId
    /// </param>

}
dhtmlXAccordion.prototype.attachStatusBar = function () {
    ///	<summary>
    /// 
    ///		Example: var sb = dhxLayout.cells("a").attachStatusBar(); // returns status bar object
    ///	</summary>

}
dhtmlXAccordion.prototype.attachTabbar = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxTabbar = dhxLayout.cells("a").attachTabbar(); // returns tabbar object
    ///	</summary>

}
dhtmlXAccordion.prototype.attachToolbar = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxToolbar = dhxLayout.cells("a").attachToolbar(); // returns toolbar object
    ///	</summary>

}
dhtmlXAccordion.prototype.attachTree = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxTree = dhxLayout.cells("a").attachTree(); // returns tree object
    ///	</summary>

}
dhtmlXAccordion.prototype.attachURL = function (url) {
    ///	<summary>
    /// attaches url to a cell
    ///		Example: dhxLayout.cells("a").attachURL("http://some.address.com/some.page.html");
    ///   // link to iframe
    /// var ifr = dhxLayout.cells("a")._frame;
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - url (string)
    /// </param>

}
dhtmlXAccordion.prototype.clearIcon = function () {
    ///	<summary>
    /// 
    ///		Example: dhxAcc.cells(id).clearIcon();
    ///	</summary>

}
dhtmlXAccordion.prototype.close = function () {
    ///	<summary>
    /// 
    ///		Example: dhxAcc.cells(id).close();
    ///	</summary>

}
dhtmlXAccordion.prototype.dock = function () {
    ///	<summary>
    /// 
    ///		Example: dhxAcc.cells(id).dock();
    ///	</summary>

}
dhtmlXAccordion.prototype.getId = function () {
    ///	<summary>
    /// 
    ///		Example: dhxAcc.forEachItem(function(item){
    ///    var id = item.getId();
    /// });
    ///	</summary>

}
dhtmlXAccordion.prototype.getText = function () {
    ///	<summary>
    /// 
    ///		Example: var text = dhxAcc.cells(id).getText();
    ///	</summary>

}
dhtmlXAccordion.prototype.hide = function () {
    ///	<summary>
    /// 
    ///		Example: dhxAcc.cells(id).hide();
    ///	</summary>

}
dhtmlXAccordion.prototype.isOpened = function () {
    ///	<summary>
    /// 
    ///		Example: var isOp = dhxAcc.cells(id).isOpened(); // returns true/false
    ///	</summary>

}
dhtmlXAccordion.prototype.moveOnTop = function () {
    ///	<summary>
    /// 
    ///		Example: dhxAcc.cells(id).moveOnTop();
    ///	</summary>

}
dhtmlXAccordion.prototype.open = function () {
    ///	<summary>
    /// 
    ///		Example: dhxAcc.cells(id).open();
    ///	</summary>

}
dhtmlXAccordion.prototype.setHeight = function (height) {
    ///	<summary>
    /// sets item&#039;s height for multimode
    ///		Example: dhxAcc.cells(id).setHeight(200);
    ///	</summary>
    ///	<param name="height" type="String">
    ///		height - height for whole item (with header)
    /// </param>

}
dhtmlXAccordion.prototype.setIcon = function (icon) {
    ///	<summary>
    /// sets an item&#039;s icon (header icon)
    ///		Example: dhxAcc.cells(id).setIcon("path/to/file.gif");
    ///	</summary>
    ///	<param name="icon" type="String">
    ///		icon - filepath
    /// </param>

}
dhtmlXAccordion.prototype.setText = function (text) {
    ///	<summary>
    /// sets item&#039;s text
    ///		Example: dhxAcc.cells(id).setText("New Text");
    ///	</summary>
    ///	<param name="text" type="String">
    ///		text - new text
    /// </param>

}
dhtmlXAccordion.prototype.show = function () {
    ///	<summary>
    /// 
    ///		Example: dhxAcc.cells(id).show();
    ///	</summary>

}
dhtmlXAccordion.prototype.undock = function () {
    ///	<summary>
    /// 
    ///		Example: dhxAcc.cells(id).undock();
    ///	</summary>

}
dhtmlXAccordion.prototype.addItem = function (itemId, itemText) {
    ///	<summary>
    /// adds a new item
    ///		Example: var dhxAcc = new dhtmlXAccordionObject(...);
    ///   // adding items
    /// dhxAcc.adItem("item_a", "The Secret of Monkey Island");
    /// dhxAcc.adItem("item_b", "Monkey Island 2: LeChuck's Revenge");
    /// dhxAcc.adItem("item_c", "The Curse of Monkey Island");
    ///     ...
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - item&#039;s id
    /// </param>
    ///	<param name="itemText" type="String">
    ///		itemText - item&#039;s text
    /// </param>

}
dhtmlXAccordion.prototype.attachEvent = function (original, catcher, CallObj) {
    ///	<summary>
    /// attaches an event handler to accordion
    ///		Example: dhxAcc.attachEvent("onActive", function(item){
    ///    // code here
    /// });
    ///    // or
    /// function doOnActive(item){
    ///    // code here
    /// });
    /// dhxAcc.attachEvent("onActive", doOnActive);
    ///	</summary>
    ///	<param name="original" type="String">
    ///		original - event&#039;s original name;
    /// </param>
    ///	<param name="catcher" type="String">
    ///		catcher - event handler;
    /// </param>
    ///	<param name="CallObj" type="Object">
    ///		CallObj - object that will call the event.
    /// </param>

}
dhtmlXAccordion.prototype.cells = function (itemId) {
    ///	<summary>
    /// returns the handler to an item by the id
    ///		Example: var item = dhxAcc.cells(id);
    ///     item.setText("New Text");
    ///     // or
    ///     dhxAcc.cells(id).setText("New Text");
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id
    /// </param>

}
dhtmlXAccordion.prototype.checkEvent = function (name) {
    ///	<summary>
    /// returns true if the event exists
    ///		Example: var isEv = dhxAcc.checkEvent("onActive"); // returns true/false
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - event&#039;s name
    /// </param>

}
dhtmlXAccordion.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: var evId = dhxAcc.attachEvent("onActive", function(){});
    ///  // detaching event
    /// dhxAcc.detachEvent(evId);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event&#039;s id
    /// </param>

}
dhtmlXAccordion.prototype.enableMultiMode = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxAcc = new dhtmlXAccordion(...);
    ///   // first enabling multimode
    /// dhxAcc.enableMultiMode(true);
    ///   // then adding items
    /// dhxAcc.adItem("item_a", "The Secret of Monkey Island");
    /// dhxAcc.adItem("item_b", "Monkey Island 2: LeChuck's Revenge");
    /// dhxAcc.adItem("item_c", "The Curse of Monkey Island");
    ///   ...
    ///	</summary>

}
dhtmlXAccordion.prototype.forEachItem = function (handler) {
    ///	<summary>
    /// iterator, calls a user-defined function n-times
    ///		Example: dhxAcc.forEachItem(function(item){
    ///     // code here
    /// });
    ///     // or
    /// function doWithItem(item){
    ///     // code here
    /// });
    /// dhxAcc.forEachItem(doWithItem);
    ///	</summary>
    ///	<param name="handler" type="Object">
    ///		handler - user-defined function, item&#039;s object is passed as incoming argument
    /// </param>

}
dhtmlXAccordion.prototype.removeItem = function (id) {
    ///	<summary>
    /// removes an existing item
    ///		Example: dhxAcc.removeItem(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - item&#039;s id
    /// </param>

}
dhtmlXAccordion.prototype.setEffect = function (efValue) {
    ///	<summary>
    /// sets an effect
    ///		Example: dhxAccord.setEffect( true); // turn on effect
    ///	</summary>
    ///	<param name="efValue" type="Boolean">
    ///		efValue - true/false
    /// </param>

}
dhtmlXAccordion.prototype.setIconsPath = function (path) {
    ///	<summary>
    /// sets path to icons
    ///		Example: dhxAcc.setIconsPath("path/to/icons/");
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - path on the hard disk
    /// </param>

}
dhtmlXAccordion.prototype.setSizes = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxAcc = new dhtmlXAccordionObject("myAcc");
    ///	</summary>

}
dhtmlXAccordion.prototype.unload = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxAcc = new dhtmlXAccordion(...);
    ///  // unloading
    /// dhxAcc.unload();
    /// dhxAcc = null;
    ///	</summary>

}


var dhtmlXTabBar = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXTabBar.prototype.addTab = function (id, text, size, position, row) {
    ///	<summary>
    /// add tab to TabBar
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - tab id
    /// </param>
    ///	<param name="text" type="String">
    ///		text - tab content
    /// </param>
    ///	<param name="size" type="String">
    ///		size - width(height) of tab
    /// </param>
    ///	<param name="position" type="Number">
    ///		position - tab index , optional
    /// </param>
    ///	<param name="row" type="Number">
    ///		row - index of row, optional  [only in PRO version]
    /// </param>

}
dhtmlXTabBar.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: tabbar.attachEvent(evName, evHandler);
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - name of the event;
    /// </param>

}
dhtmlXTabBar.prototype.clearAll = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTabBar.prototype.detachEvent = function (id) {
    ///	<summary>
    /// 
    ///		Example: tabbar.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlXTabBar.prototype.disableTab = function (id) {
    ///	<summary>
    /// disable tab in tabbar
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		tab - id of tab
    /// </param>

}
dhtmlXTabBar.prototype.enableAutoReSize = function () {
    ///	<summary>
    /// enable / disable auto adjusting height and width   to outer conteiner
    ///		Example: 
    ///	</summary>

}
dhtmlXTabBar.prototype.enableAutoSize = function (autoWidth, autoHeight) {
    ///	<summary>
    /// enable disable auto adjusting height and width   to inner content
    ///		Example: 
    ///	</summary>
    ///	<param name="autoWidth" type="String">
    ///		autoWidth - enable/disable auto adjusting width
    /// </param>
    ///	<param name="autoHeight" type="String">
    ///		autoHeight - enable/disable auto adjusting height
    /// </param>

}
dhtmlXTabBar.prototype.enableContentZone = function (mode) {
    ///	<summary>
    /// enable/disable content zone (enabled by default)
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTabBar.prototype.enableForceHiding = function (mode) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTabBar.prototype.enableScroll = function (mode) {
    ///	<summary>
    /// enable/disable scrollers ( enabled by default )
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTabBar.prototype.enableTab = function (id) {
    ///	<summary>
    /// enable tab in tabbar
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		tab - id of tab
    /// </param>

}
dhtmlXTabBar.prototype.enableTabCloseButton = function (mode) {
    ///	<summary>
    /// enable mode, in which each tab has close button, mode will be applied to the tabs created AFTER command
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		bool - false/true - enable/disable
    /// </param>

}
dhtmlXTabBar.prototype.forceLoad = function (id, href) {
    ///	<summary>
    /// forcing to load tab in question
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		tabId - id of tab in question
    /// </param>
    ///	<param name="href" type="String">
    ///		href - new href, optional
    /// </param>

}
dhtmlXTabBar.prototype.getActiveTab = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTabBar.prototype.getLabel = function (tab) {
    ///	<summary>
    /// get label of tab
    ///		Example: 
    ///	</summary>
    ///	<param name="tab" type="String">
    ///		tab - id of tab
    /// </param>

}
dhtmlXTabBar.prototype.goToNextTab = function (tab) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTabBar.prototype.goToPrevTab = function (tab) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTabBar.prototype.hideTab = function (id) {
    ///	<summary>
    /// hide tab in tabbar
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		tab - id of tab
    /// </param>

}
dhtmlXTabBar.prototype.loadXML = function (url, call) {
    ///	<summary>
    /// load tabbar from xml file
    ///		Example: 
    ///	</summary>
    ///	<param name="url" type="String">
    ///		file - link too XML file
    /// </param>
    ///	<param name="call" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXTabBar.prototype.loadXMLString = function (xmlString, call) {
    ///	<summary>
    /// load tabbar from xml string
    ///		Example: 
    ///	</summary>
    ///	<param name="xmlString" type="String">
    ///		xmlString - XML string
    /// </param>
    ///	<param name="call" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXTabBar.prototype.normalize = function (limit, full) {
    ///	<summary>
    /// reformat tabbar to remove tab scrollers
    ///		Example: 
    ///	</summary>
    ///	<param name="limit" type="String">
    ///		limit - width of tabbar zone, optional
    /// </param>
    ///	<param name="full" type="Boolean">
    ///		full - true | false - force to change size of tabs to make rows of equal width
    /// </param>

}
dhtmlXTabBar.prototype.removeTab = function (id, mode) {
    ///	<summary>
    /// remove tab from tabbar
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		tab - id of tab
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - if set to true, selection jump from current tab to nearest one
    /// </param>

}
dhtmlXTabBar.prototype.setAlign = function (n) {
    ///	<summary>
    /// set align of tabs on tabbar
    ///		Example: 
    ///	</summary>
    ///	<param name="n" type="String">
    ///		align - left/right for gorizontal tabbar, top/bottom for vertical tabbar
    /// </param>

}
dhtmlXTabBar.prototype.setContent = function (id, value) {
    ///	<summary>
    /// set content of tab
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of tab
    /// </param>
    ///	<param name="value" type="Object">
    ///		nodeId - id of container, or container object
    /// </param>

}
dhtmlXTabBar.prototype.setContentHTML = function (id, value) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of tab
    /// </param>
    ///	<param name="value" type="String">
    ///		html - html string
    /// </param>

}
dhtmlXTabBar.prototype.setContentHref = function (id, href) {
    ///	<summary>
    /// set content as a href to an external file
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		href - link too external file
    /// </param>

}
dhtmlXTabBar.prototype.setCustomStyle = function (id, color, scolor, style) {
    ///	<summary>
    /// set specific colors for specific tab
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of tab for which setting will be applied
    /// </param>
    ///	<param name="color" type="String">
    ///		color - tab color
    /// </param>
    ///	<param name="scolor" type="String">
    ///		color - scolor - color in selected state ( optional)
    /// </param>
    ///	<param name="style" type="String">
    ///		css - css class will be attached to text of tab in question
    /// </param>

}
dhtmlXTabBar.prototype.setHrefMode = function (mode) {
    ///	<summary>
    /// set mode of loading external content
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - href mode - iframe/iframes/ajax
    /// </param>

}
dhtmlXTabBar.prototype.setImagePath = function (url) {
    ///	<summary>
    /// set path to image folder ( not affect already created element until their state changes )
    ///		Example: 
    ///	</summary>
    ///	<param name="url" type="String">
    ///		path - path to image folder
    /// </param>

}
dhtmlXTabBar.prototype.setLabel = function (id, text) {
    ///	<summary>
    /// set label of tab
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		tab - id of tab
    /// </param>
    ///	<param name="text" type="String">
    ///		value -  new label
    /// </param>

}
dhtmlXTabBar.prototype.setMargin = function (n) {
    ///	<summary>
    /// set distance between tabs
    ///		Example: 
    ///	</summary>
    ///	<param name="n" type="String">
    ///		margin - margin value
    /// </param>

}
dhtmlXTabBar.prototype.setOffset = function (n) {
    ///	<summary>
    /// set offset before first tab on tabbar
    ///		Example: 
    ///	</summary>
    ///	<param name="n" type="String">
    ///		offset - offset value
    /// </param>

}
dhtmlXTabBar.prototype.setSize = function (x, y) {
    ///	<summary>
    /// set control size
    ///		Example: 
    ///	</summary>
    ///	<param name="x" type="String">
    ///		width - new width
    /// </param>
    ///	<param name="y" type="String">
    ///		height - new height
    /// </param>

}
dhtmlXTabBar.prototype.setSkin = function (name) {
    ///	<summary>
    /// set style used for tabbar
    ///		Example: 
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - any valid style name
    /// </param>

}
dhtmlXTabBar.prototype.setSkinColors = function (a, b) {
    ///	<summary>
    /// allow to set skin specific color, must be used AFTER selecting skin
    ///		Example: 
    ///	</summary>
    ///	<param name="a" type="String">
    ///		a_tab - color of activ tab
    /// </param>
    ///	<param name="b" type="String">
    ///		p_tab - color of passive tab
    /// </param>

}
dhtmlXTabBar.prototype.setTabActive = function (id) {
    ///	<summary>
    /// switch tab to active state
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		tabId - id of tab
    /// </param>

}
dhtmlXTabBar.prototype.showTab = function (id) {
    ///	<summary>
    /// show hidden tab in tabbar
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		tab - id of tab
    /// </param>

}
dhtmlXTabBar.prototype.tabWindow = function (tab_id) {
    ///	<summary>
    /// return window of tab content for iframe based tabbar
    ///		Example: 
    ///	</summary>
    ///	<param name="tab_id" type="String">
    ///		tab_id - tab id
    /// </param>

}
dhtmlXTabBar.prototype.attachAccordion = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxAcc = dhxLayout.cells("a").attachAccordion(); // returns accordion object
    ///	</summary>

}
dhtmlXTabBar.prototype.attachEditor = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxEd = dhxLayout.cells("a").attachEditor(); // returns editor object
    ///	</summary>

}
dhtmlXTabBar.prototype.attachDataView = function () {
    ///	<summary>
    /// 
    ///		Example: var config = {
    /// 	type:{
    /// 		template:"#Package# : #Version#<br/>#Maintainer#",
    /// 		padding:5,
    /// 		height:40
    /// 	}
    ///     };
    ///     var dhxData = dhxLayout.cells("a").attachDataView(config); // returns folders object
    ///	</summary>

}
dhtmlXTabBar.prototype.attachGrid = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxGrid = dhxLayout.cells("a").attachGrid(); // returns grid object
    ///	</summary>

}
dhtmlXTabBar.prototype.attachLayout = function (pattern, skin) {
    ///	<summary>
    /// attaches dhtmlxLayout to the cell, returns layout object
    ///		Example: var dhxLayout2 = dhxLayout.cells("a").attachLayout("3L"); // returns layout object
    ///	</summary>
    ///	<param name="pattern" type="String">
    ///		pattern - layout&#039;s pattern (3L, 4U, ...)
    /// </param>
    ///	<param name="skin" type="String">
    ///		skin - optional, skin from parent component will applied automatically
    /// </param>

}
dhtmlXTabBar.prototype.attachMenu = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxMenu = dhxLayout.cells("a").attachMenu(); // returns menu object
    ///	</summary>

}
dhtmlXTabBar.prototype.attachObject = function (obj) {
    ///	<summary>
    /// attaches html object to the cell
    ///		Example: <script>
    ///         dhxLayout.cells("a").attachObject("myObj");
    ///         // or
    ///         var obj = document.getElementById("myObj");
    ///         dhxLayout.cells("a").attachObject(obj);
    ///     </script>
    ///	</summary>
    ///	<param name="obj" type="Object">
    ///		obj - object/objectId
    /// </param>

}
dhtmlXTabBar.prototype.attachStatusBar = function () {
    ///	<summary>
    /// 
    ///		Example: var sb = dhxLayout.cells("a").attachStatusBar(); // returns status bar object
    ///	</summary>

}
dhtmlXTabBar.prototype.attachTabbar = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxTabbar = dhxLayout.cells("a").attachTabbar(); // returns tabbar object
    ///	</summary>

}
dhtmlXTabBar.prototype.attachToolbar = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxToolbar = dhxLayout.cells("a").attachToolbar(); // returns toolbar object
    ///	</summary>

}
dhtmlXTabBar.prototype.attachTree = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxTree = dhxLayout.cells("a").attachTree(); // returns tree object
    ///	</summary>

}
dhtmlXTabBar.prototype.attachURL = function (url) {
    ///	<summary>
    /// attaches url to the cell
    ///		Example: dhxLayout.cells("a").attachURL("http://some.address.com/some.page.html");
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - url (string)
    /// </param>

}


var dhtmlXWindows = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXWindows.prototype.addUserButton = function (id, pos, title, label) {
    ///	<summary>
    /// adds a user button
    ///		Example: dhxWins.window(id).addUserButton("tray", 9, "Tray", "tray");
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - button&#039;s id
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - button&#039;s position
    /// </param>
    ///	<param name="title" type="String">
    ///		title - button&#039;s tooltip
    /// </param>
    ///	<param name="label" type="String">
    ///		label - button&#039;s name (according to css)
    /// </param>

}
dhtmlXWindows.prototype.allowMove = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).allowMove();
    ///	</summary>

}
dhtmlXWindows.prototype.allowPark = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).allowPark();
    ///	</summary>

}
dhtmlXWindows.prototype.allowResize = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).allowResize();
    ///	</summary>

}
dhtmlXWindows.prototype.bringToBottom = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).bringToBottom();
    ///	</summary>

}
dhtmlXWindows.prototype.bringToTop = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).bringToTop();
    ///	</summary>

}
dhtmlXWindows.prototype.button = function (id) {
    ///	<summary>
    /// returns the button handler (dhtmlXWindowBtn object) found by id
    ///		Example: var btn = dhxWins.window(winId).button(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id
    /// </param>

}
dhtmlXWindows.prototype.center = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).center();
    ///	</summary>

}
dhtmlXWindows.prototype.centerOnScreen = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).centerOnScreen();
    ///	</summary>

}
dhtmlXWindows.prototype.clearIcon = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).clearIcon();
    ///	</summary>

}
dhtmlXWindows.prototype.close = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).close();
    ///	</summary>

}
dhtmlXWindows.prototype.denyMove = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).denyMove();
    ///	</summary>

}
dhtmlXWindows.prototype.denyPark = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).denyPark();
    ///	</summary>

}
dhtmlXWindows.prototype.denyResize = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).denyResize();
    ///	</summary>

}
dhtmlXWindows.prototype.getDimension = function () {
    ///	<summary>
    /// 
    ///		Example: var dim = dhxWins.window(id).getDimension(); // returns [w,h]
    ///	</summary>

}
dhtmlXWindows.prototype.getIcon = function () {
    ///	<summary>
    /// 
    ///		Example: var icon = dhxWins.window(id).getIcon();
    ///	</summary>

}
dhtmlXWindows.prototype.getId = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.forEachWindow(function(win){
    ///         var id = win.getId();
    ///     });
    ///	</summary>

}
dhtmlXWindows.prototype.getMaxDimension = function () {
    ///	<summary>
    /// 
    ///		Example: var dim = dhxWins.window(id).getMaxDimension(); // returns [w,h]
    ///	</summary>

}
dhtmlXWindows.prototype.getMinDimension = function () {
    ///	<summary>
    /// 
    ///		Example: var dim = dhxWins.window(id).getMinDimension(); // returns [w,h]
    ///	</summary>

}
dhtmlXWindows.prototype.getPosition = function () {
    ///	<summary>
    /// 
    ///		Example: var pos = dhxWins.window(id).getPosition(); // returns [x,y]
    ///	</summary>

}
dhtmlXWindows.prototype.getText = function () {
    ///	<summary>
    /// 
    ///		Example: var text = dhxWins.window(id).getText();
    ///	</summary>

}
dhtmlXWindows.prototype.hide = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).hide();
    ///	</summary>

}
dhtmlXWindows.prototype.hideHeader = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).hideHeader();
    ///	</summary>

}
dhtmlXWindows.prototype.isHidden = function () {
    ///	<summary>
    /// 
    ///		Example: var isHidden = dhxWins.window(id).isHidden(); // returns true/false
    ///	</summary>

}
dhtmlXWindows.prototype.isMaximized = function () {
    ///	<summary>
    /// 
    ///		Example: var isMaximized = dhxWins.window(id).isMaximized(); // nreturns true/false
    ///	</summary>

}
dhtmlXWindows.prototype.isModal = function () {
    ///	<summary>
    /// 
    ///		Example: var isModal = dhxWins.window(id).isModal(); // returns true/false
    ///	</summary>

}
dhtmlXWindows.prototype.isMovable = function () {
    ///	<summary>
    /// 
    ///		Example: var isMovable = dhxWins.window(id).isMovable(); // returns true/false
    ///	</summary>

}
dhtmlXWindows.prototype.isOnBottom = function () {
    ///	<summary>
    /// 
    ///		Example: var isWinOnBottom = dhxWins.window(id).isOnBottom(); // returns true/false
    ///	</summary>

}
dhtmlXWindows.prototype.isOnTop = function () {
    ///	<summary>
    /// 
    ///		Example: var isWinOnTop = dhxWins.window(id).isOnTop(); // returns true/false
    ///	</summary>

}
dhtmlXWindows.prototype.isParkable = function () {
    ///	<summary>
    /// 
    ///		Example: var isPakable = dhxWins.window(id).isPakable(); // returns true/false
    ///	</summary>

}
dhtmlXWindows.prototype.isParked = function () {
    ///	<summary>
    /// 
    ///		Example: var isPr = dhxWins.window(id).isParked(); // returns true/false
    ///	</summary>

}
dhtmlXWindows.prototype.isResizable = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).isResizable();
    ///	</summary>

}
dhtmlXWindows.prototype.isSticked = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).isSticked();
    ///	</summary>

}
dhtmlXWindows.prototype.keepInViewport = function (state) {
    ///	<summary>
    /// keeps a window within the viewport
    ///		Example: dhxWins.window(id).keepInViewport(true/false);
    ///	</summary>
    ///	<param name="state" type="String">
    ///		state - if true - window is not allowed to be placed outside the viewport
    /// </param>

}
dhtmlXWindows.prototype.maximize = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).maximize();
    ///	</summary>

}
dhtmlXWindows.prototype.minimize = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).minimize();
    ///	</summary>

}
dhtmlXWindows.prototype.park = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).park();
    ///	</summary>

}
dhtmlXWindows.prototype.progressOff = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).progressOff();
    ///	</summary>

}
dhtmlXWindows.prototype.progressOn = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).progressOn();
    ///	</summary>

}
dhtmlXWindows.prototype.removeUserButton = function (id) {
    ///	<summary>
    /// removes a user button
    ///		Example: dhxWins.window(id).removeUserButton(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - button&#039;s id
    /// </param>

}
dhtmlXWindows.prototype.restoreIcon = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).restoreIcon();
    ///	</summary>

}
dhtmlXWindows.prototype.setDimension = function (width, height) {
    ///	<summary>
    /// sets window&#039;s dimension
    ///		Example: dhxWins.window(id).setDimension(width, height);
    ///	</summary>
    ///	<param name="width" type="String">
    ///		width
    /// </param>
    ///	<param name="height" type="String">
    ///		height
    /// </param>

}
dhtmlXWindows.prototype.setIcon = function (iconEnabled, iconDisabled) {
    ///	<summary>
    /// sets window&#039;s header icon
    ///		Example: dhxWins.window(id).setIcon(iconEnabled, iconDisabled);
    ///	</summary>
    ///	<param name="iconEnabled" type="String">
    ///		iconEnabled - url to the icon for the enabled state
    /// </param>
    ///	<param name="iconDisabled" type="String">
    ///		iconDisabled - url to the icon for the disabled state
    /// </param>

}
dhtmlXWindows.prototype.setMaxDimension = function (maxWidth, maxHeight) {
    ///	<summary>
    /// sets max window&#039;s dimension
    ///		Example: dhxWins.window(id).setMaxDimension(maxWidth, maxHeight);
    ///	</summary>
    ///	<param name="maxWidth" type="String">
    ///		maxWidth
    /// </param>
    ///	<param name="maxHeight" type="String">
    ///		maxHeight
    /// </param>

}
dhtmlXWindows.prototype.setMinDimension = function (minWidth, minHeight) {
    ///	<summary>
    /// sets min window&#039;s dimension
    ///		Example: dhxWins.window(id).setMinDimension(minWidth, minHeight);
    ///	</summary>
    ///	<param name="minWidth" type="String">
    ///		minWidth
    /// </param>
    ///	<param name="minHeight" type="String">
    ///		minHeight
    /// </param>

}
dhtmlXWindows.prototype.setModal = function (state) {
    ///	<summary>
    /// makes a window modal/modeless
    ///		Example: dhxWins.window(id).setModal(true/false);
    ///	</summary>
    ///	<param name="state" type="Boolean">
    ///		state - true|false
    /// </param>

}
dhtmlXWindows.prototype.setPosition = function (x, y) {
    ///	<summary>
    /// sets window&#039;s position (moves a window to the point set by user)
    ///		Example: dhxWins.window(id).setPosition(x, y);
    ///	</summary>
    ///	<param name="x" type="String">
    ///		x - x coordinate
    /// </param>
    ///	<param name="y" type="String">
    ///		y - y coordinate
    /// </param>

}
dhtmlXWindows.prototype.setText = function (text) {
    ///	<summary>
    /// sets window&#039;s header text
    ///		Example: dhxWins.window(id).setText("New Text");
    ///	</summary>
    ///	<param name="text" type="String">
    ///		text
    /// </param>

}
dhtmlXWindows.prototype.setToFullScreen = function (state) {
    ///	<summary>
    /// sets a window to the fullscreen mode
    ///		Example: dhxWins.window(id).setToFullScreen(true/false);
    ///	</summary>
    ///	<param name="state" type="Boolean">
    ///		state - true|false
    /// </param>

}
dhtmlXWindows.prototype.show = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).show();
    ///	</summary>

}
dhtmlXWindows.prototype.showHeader = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).showHeader();
    ///	</summary>

}
dhtmlXWindows.prototype.stick = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).stick();
    ///	</summary>

}
dhtmlXWindows.prototype.unstick = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).unstick();
    ///	</summary>

}
dhtmlXWindows.prototype.disable = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).button(id).disable();
    ///	</summary>

}
dhtmlXWindows.prototype.enable = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).button(id).enable();
    ///	</summary>

}
dhtmlXWindows.prototype.hide = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).button(id).hide();
    ///	</summary>

}
dhtmlXWindows.prototype.isEnabled = function () {
    ///	<summary>
    /// 
    ///		Example: var isBtnEnabled = dhxWins.window(id).button(id).isEnabled();
    ///	</summary>

}
dhtmlXWindows.prototype.isHidden = function () {
    ///	<summary>
    /// 
    ///		Example: var isBtnHidden = dhxWins.window(id).button(id).isHidden();
    ///	</summary>

}
dhtmlXWindows.prototype.show = function () {
    ///	<summary>
    /// 
    ///		Example: dhxWins.window(id).button(id).show();
    ///	</summary>

}
dhtmlXWindows.prototype.attachEvent = function (original, catcher, CallObj) {
    ///	<summary>
    /// attaches an event handler
    ///		Example: dhxWins.attachEvent("onClose", function(win){
    ///         // code here
    ///     });
    ///	</summary>
    ///	<param name="original" type="String">
    ///		original - event&#039;s original name;
    /// </param>
    ///	<param name="catcher" type="String">
    ///		catcher - event handler;
    /// </param>
    ///	<param name="CallObj" type="Object">
    ///		CallObj - object that will call the event.
    /// </param>

}
dhtmlXWindows.prototype.attachViewportTo = function (objId) {
    ///	<summary>
    /// attaches a vp to an existing object on page (renders an object as a viewport)
    ///		Example: dhxWins.attachViewportTo("vpObj");
    ///	</summary>
    ///	<param name="objId" type="Object">
    ///		objId - object id
    /// </param>

}
dhtmlXWindows.prototype.checkEvent = function (name) {
    ///	<summary>
    /// returns true if the event exists
    ///		Example: var isEv = dhxWins.checkEvent("onClose"); // returns true/false
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - event&#039;s name
    /// </param>

}
dhtmlXWindows.prototype.createWindow = function (id, x, y, width, height) {
    ///	<summary>
    /// creates a new window and returns its handler
    ///		Example: var w1 = dhxWins.createWindow(id, x, y, width, height);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - window&#039;s id
    /// </param>
    ///	<param name="x" type="String">
    ///		x - top-left window corner&#039;s X-coordinate
    /// </param>
    ///	<param name="y" type="String">
    ///		y - top-left window corner&#039;s Y-coordinate
    /// </param>
    ///	<param name="width" type="String">
    ///		width - window&#039;s width
    /// </param>
    ///	<param name="height" type="String">
    ///		height - window&#039;s height
    /// </param>

}
dhtmlXWindows.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: var evId = dhxWins.attachEvent("onClose", function(){});
    ///     // detaching event
    ///     dhxWins.detachEvent(evId);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event&#039;s id
    /// </param>

}
dhtmlXWindows.prototype.enableAutoViewport = function (state) {
    ///	<summary>
    /// if true - allows an object to adjust the viewport automatically to document.body
    ///		Example: dhxWins.enableAutoViewport(true/false);
    ///	</summary>
    ///	<param name="state" type="Boolean">
    ///		state - true|false
    /// </param>

}
dhtmlXWindows.prototype.findByText = function (text) {
    ///	<summary>
    /// returns array of window handlers found by header text
    ///		Example: var w1 = dhxWins.findByText("Some Text");
    ///	</summary>
    ///	<param name="text" type="String">
    ///		id
    /// </param>

}
dhtmlXWindows.prototype.forEachWindow = function (handler) {
    ///	<summary>
    /// iterator - goes through all windows and calls a user handler
    ///		Example: dhxWins.forEachWindow(function(){
    ///         // code here
    ///     });
    ///     // or
    ///     function doWithWindow(){
    ///         // code here
    ///     });
    ///     dhxWins.forEachWindow(doWithWindow);
    ///	</summary>
    ///	<param name="handler" type="String">
    ///		hander (user function)
    /// </param>

}
dhtmlXWindows.prototype.getBottommostWindow = function () {
    ///	<summary>
    /// 
    ///		Example: var w1 = dhxWins.getBottommostWindow();
    ///	</summary>

}
dhtmlXWindows.prototype.getEffect = function (efName) {
    ///	<summary>
    /// returns true if the effect is enabled
    ///		Example: var isEf = dhxWins.getEffect(efName);
    ///	</summary>
    ///	<param name="efName" type="String">
    ///		efName - effect&#039;s name
    /// </param>

}
dhtmlXWindows.prototype.getTopmostWindow = function (visibleOnly) {
    ///	<summary>
    /// returns the topmost window
    ///		Example: var w1 = dhxWins.getTopmostWindow(true/false);
    ///	</summary>
    ///	<param name="visibleOnly" type="String">
    ///		visibleOnly - search only in set of visible windows
    /// </param>

}
dhtmlXWindows.prototype.isWindow = function (id) {
    ///	<summary>
    /// returns true if the window with specified id exists
    ///		Example: var isWin = dhxWins.isWindow(id); // returns true/false
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id
    /// </param>

}
dhtmlXWindows.prototype.setEffect = function (efName, efValue) {
    ///	<summary>
    /// sets a visual effect
    ///		Example: dhxWins.setEffect(efName, efValue);
    ///	</summary>
    ///	<param name="efName" type="String">
    ///		efName - effect&#039;s name
    /// </param>
    ///	<param name="efValue" type="Boolean">
    ///		efValue - true/false to enable/disable
    /// </param>

}
dhtmlXWindows.prototype.setImagePath = function (path) {
    ///	<summary>
    /// sets path to the directory where used images are located
    ///		Example: dhxWins.setImagePath(path);
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - url to the directory where images are located
    /// </param>

}
dhtmlXWindows.prototype.setSkin = function (skin) {
    ///	<summary>
    /// changes window&#039;s skin
    ///		Example: dhxWins.setSkin(skin);
    ///	</summary>
    ///	<param name="skin" type="String">
    ///		skin - skin&#039;s name
    /// </param>

}
dhtmlXWindows.prototype.setViewport = function (x, y, width, height, parentObj) {
    ///	<summary>
    /// sets user-defined viewport if enableAutoViewport(false)
    ///		Example: dhxWins.setViewport(x, y, width, height, parentObj);
    ///	</summary>
    ///	<param name="x" type="String">
    ///		x - top-left viewport corner&#039;s X-coordinate
    /// </param>
    ///	<param name="y" type="String">
    ///		y - top-left viewport corner&#039;s Y-coordinate
    /// </param>
    ///	<param name="width" type="String">
    ///		width - viewport&#039;s width
    /// </param>
    ///	<param name="height" type="String">
    ///		height - viewport&#039;s height
    /// </param>
    ///	<param name="parentObj" type="Object">
    ///		parentObj - create inside of parentObj object
    /// </param>

}
dhtmlXWindows.prototype.unload = function () {
    ///	<summary>
    /// unloads an object and clears memory
    ///		Example: dhxWins.unload();
    ///	</summary>

}
dhtmlXWindows.prototype.window = function (id) {
    ///	<summary>
    /// returns the window handler (dhtmlXWindowSngl object) found by id
    ///		Example: var w1 = dhxWins.window(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id
    /// </param>

}


var dhtmlXForm = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXForm.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// 
    ///		Example: var myEvent = myForm.attachEvent("onChange", function(){
    ///    // code here
    /// });
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - the event name;
    /// </param>
    ///	<param name="evHandler" type="Function">
    ///		evHandler - a user-defined handler that will be called when event occurs.
    /// </param>

}
dhtmlXForm.prototype.bind = function (target, rule) {
    ///	<summary>
    /// 
    ///		Example: myform.bind(mygrid);
    ///	</summary>
    ///	<param name="target" type="Object">
    ///		target - (object) the object that method is assigned to (optional)
    /// </param>
    ///	<param name="rule" type="String">
    ///		rule - (function) sets the rule according which components will be bound (optional)
    /// </param>

}
dhtmlXForm.prototype.checkItem = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: formData = [
    /// 		{type: "radio", name: "gender", value: "male", label: "Male"},
    /// 		{type: "radio", name: "gender", value: "female", label: "Female"},
    ///                 {type: "checkbox", name:"license", label: "Driving license"},
    ///                 ...
    /// ];
    /// myForm = new dhtmlXForm("myForm", formData);
    /// myForm.checkItem("gender", "male"); // for radio button
    /// myForm.checkItem("license");  // for other items
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		isItemChecked()
    /// </param>

}
dhtmlXForm.prototype.clear = function () {
    ///	<summary>
    /// 
    ///		Example: myForm.clear();
    ///	</summary>

}
dhtmlXForm.prototype.detachEvent = function (evId) {
    ///	<summary>
    /// 
    ///		Example: var myEvent = myForm.attachEvent("onChange", function (){
    ///     //event handler code
    /// })
    /// ..
    /// myForm.detachEvent(myEvent);
    ///	</summary>
    ///	<param name="evId" type="String">
    ///		evId - the event id.
    /// </param>

}
dhtmlXForm.prototype.disableItem = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: formData=[{type: "input", label: "Login"},
    ///           {type: "input", label: "Password"},
    ///           {type: "button", name:"loginButton", value: "Log in", command:"Login"}];
    /// myForm = new dhtmlXForm("myForm", formData);
    /// ...
    /// function disableButton() {
    ///           alert("You have exceeded the maximum number of login attempts for this session.")
    ///           myForm.disableItem("loginButton");
    /// }
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		enableItem()
    /// </param>

}
dhtmlXForm.prototype.enableItem = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: formData=[{type: "input", label: "Login"},
    ///           {type: "input", label: "Password"},
    ///           {type: "button", name:"loginButton", value: "Log in", command:"Login"},
    ///           {type: "button", name:"logoutButton", value: "Log out", command:"Logout"}];
    /// myForm = new dhtmlXForm("myForm", formData);
    /// ...
    /// function enableButton() {
    ///           alert("You have logged in successfully.");
    ///           myForm.enableItem("logoutButton");
    ///           myForm.disableItem("loginButton");
    /// }
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		value - the value of a radio button ( the radio&#039;s parameter &#039;value&#039;). Required for &#039;radio&#039; items only
    /// </param>

}
dhtmlXForm.prototype.forEachItem = function (handler) {
    ///	<summary>
    /// 
    ///		Example: myForm.forEachItem(function(id){
    ///    myForm.setItemLabel(id, String(myForm.getItemText(id)).toLowerCase());
    /// });
    ///	</summary>
    ///	<param name="handler" type="String">
    ///		handler - a user-defined handler, gets the id of item (the item&#039;s parameter &#039;name&#039;) as argument.
    /// </param>

}
dhtmlXForm.prototype.getCalendar = function (name) {
    ///	<summary>
    /// 
    ///		Example: var dhxCalendar = myForm.getCalendar("myCalendar");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.getCheckedValue = function (name) {
    ///	<summary>
    /// 
    ///		Example: formData = [
    /// 		{type: "radio", name: "gender", value: "male", label: "Male"},
    /// 		{type: "radio", name: "gender", value: "female", label: "Female"},
    ///                 ...
    /// ];
    /// myForm = new dhtmlXForm("myForm", formData);
    /// var checkedButton = dhxForm.getCheckedValue("gender");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.getColorPicker = function (name) {
    ///	<summary>
    /// 
    ///		Example: var dhxColorPicker = myForm.getColorPicker("myPicker");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.getCombo = function (name) {
    ///	<summary>
    /// 
    ///		Example: var dhxCombo = myForm.getCombo("myCombo");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.getEditor = function (name) {
    ///	<summary>
    /// 
    ///		Example: var dhxEditor = myForm.getEditor("myEditor");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.getForm = function () {
    ///	<summary>
    /// 
    ///		Example: var dhxForm = myForm.getForm();
    ///	</summary>

}
dhtmlXForm.prototype.getFormData = function () {
    ///	<summary>
    /// 
    ///		Example: var values = myForm.getFormData();
    ///	</summary>

}
dhtmlXForm.prototype.getInput = function (name) {
    ///	<summary>
    /// 
    ///		Example: var someItem = myForm.getInput("myInput");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.getItemLabel = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: // for radio button
    /// var text = myForm.getItemLabel(name, value);
    ///   // for other items
    /// var text = myForm.getItemLabel(name);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		setItemLabel()
    /// </param>

}
dhtmlXForm.prototype.getItemsList = function () {
    ///	<summary>
    /// 
    ///		Example: var items = myForm.getItemsList();
    ///	</summary>

}
dhtmlXForm.prototype.getItemType = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: //for radio buttons
    /// var type = myForm.getItemType(name, value);
    /// //for other items
    /// var type = myForm.getItemType(name);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.getItemValue = function (name) {
    ///	<summary>
    /// 
    ///		Example: var value = myForm.getItemValue("myInput");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.getItemWidth = function (name) {
    ///	<summary>
    /// 
    ///		Example: var width = myForm.getItemWidth("myInput");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.getOptions = function (name) {
    ///	<summary>
    /// 
    ///		Example: var opts = myForm.getOptions("mySelect");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.getSelect = function (name) {
    ///	<summary>
    /// 
    ///		Example: var someItem = myForm.getInput("mySelect");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.getUserData = function (name, udKey) {
    ///	<summary>
    /// 
    ///		Example: myForm.setUserData("myInput","Key",10)
    /// ...
    /// var data = myForm.getUserData("myInput","Key")
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="udKey" type="String">
    ///		setUserData()
    /// </param>

}
dhtmlXForm.prototype.hideItem = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: formData=[{type: "input", label: "Login"},
    ///           {type: "input", label: "Password"},
    ///           {type: "button", name:"loginButton", value: "Log in", command:"Login"},
    ///           {type: "button", name:"logoutButton", value: "Log out", command:"Logout"}];
    /// myForm = new dhtmlXForm("myForm", formData);
    /// ...
    /// function hideLoginButton() {
    ///           alert("You have logged in successfully.");
    ///           myForm.showItem("logoutButton");
    ///           myForm.hideItem("loginButton");
    /// }
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		showItem()
    /// </param>

}
dhtmlXForm.prototype.isItem = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: //for radio buttons
    /// var isExist = myForm.isItem(name, value);
    /// //for other items
    /// var isExist = myForm.isItem(name);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		value - the value of a radio button ( the radio&#039;s parameter &#039;value&#039;). Required for &#039;radio&#039; items only
    /// </param>

}
dhtmlXForm.prototype.isItemChecked = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: // for radio button
    /// var isChecked = myForm.isItemChecked(name, value);
    ///   // for other items
    /// var isChecked = myForm.isItemChecked(name);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		value - the value of a radio button ( the radio&#039;s parameter &#039;value&#039;). Required for &#039;radio&#039; items only
    /// </param>

}
dhtmlXForm.prototype.isItemEnabled = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: // for radio button
    /// var isEnabled = myForm.isItemEnabled(name, value);
    ///   // for other items
    /// var isEnabled = myForm.isItemEnabled(name);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		value - the value of a radio button ( the radio&#039;s parameter &#039;value&#039;). Required for &#039;radio&#039; items only
    /// </param>

}
dhtmlXForm.prototype.isItemHidden = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: // for radio button
    /// var isEnabled = myForm.isItemHidden(name, value);
    ///   // for other items
    /// var isEnabled = myForm.isItemHidden(name);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		value - the value of a radio button ( the radio&#039;s parameter &#039;value&#039;). Required for &#039;radio&#039; items only
    /// </param>

}
dhtmlXForm.prototype.isLocked = function () {
    ///	<summary>
    /// 
    ///		Example: myForm.isLocked();
    ///	</summary>

}
dhtmlXForm.prototype.isReadonly = function (name) {
    ///	<summary>
    /// 
    ///		Example: myForm.isReadonly("myInput");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.load = function (id) {
    ///	<summary>
    /// 
    ///		Example: dhxForm.load(12);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id -the id of record , which need to be loaded
    /// </param>

}
dhtmlXForm.prototype.loadStruct = function (data, onLoadFunction) {
    ///	<summary>
    /// 
    ///		Example: myForm.loadStruct("file.json", function(){
    ///   // onload handler
    /// });
    ///	</summary>
    ///	<param name="data" type="String">
    ///		data - http path to XML file
    /// </param>
    ///	<param name="onLoadFunction" type="String">
    ///		onLoadFunction - (optional) a user defined handler which is called when loading has been done
    /// </param>

}
dhtmlXForm.prototype.loadStructString = function (string, onLoadFunction) {
    ///	<summary>
    /// 
    ///		Example: myForm.loadStructString("<items>...", function(){
    ///     // onload handler
    /// });
    ///	</summary>
    ///	<param name="string" type="String">
    ///		string - XML string with data
    /// </param>
    ///	<param name="onLoadFunction" type="String">
    ///		onLoadFunction - (optional) a user defined handler which is called when loading has been done
    /// </param>

}
dhtmlXForm.prototype.lock = function () {
    ///	<summary>
    /// 
    ///		Example: myForm.lock();
    ///	</summary>

}
dhtmlXForm.prototype.removeItem = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: // for radio button
    /// myForm.removeItem(name, value);
    ///   // for other items
    /// myForm.removeItem(name);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.reset = function () {
    ///	<summary>
    /// 
    ///		Example: myForm.reset();
    ///	</summary>

}
dhtmlXForm.prototype.resetValidateCss = function () {
    ///	<summary>
    /// 
    ///		Example: myForm.resetValidateCss();
    ///	</summary>

}
dhtmlXForm.prototype.save = function () {
    ///	<summary>
    /// 
    ///		Example: myForm.attachEvent("onButtonClick", function(id){
    ///      myForm.save();
    /// });
    ///	</summary>

}
dhtmlXForm.prototype.send = function (url, mode, callback) {
    ///	<summary>
    /// 
    ///		Example: myForm.send("some.php");
    ///   //or
    /// dhxForm.send("some.php","post");
    ///   //or
    /// dhxForm.send("some.php","post",function(xml){
    ///   alert("Saved");
    /// });
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - the server-side script which will receive info
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode -(optional) a sending mode, can be get or post. The default value - post
    /// </param>
    ///	<param name="callback" type="Function">
    ///		callback - (optional) the method which will be called after saving
    /// </param>

}
dhtmlXForm.prototype.setFontSize = function (size) {
    ///	<summary>
    /// Sets the font-size for the whole form.
    ///		Example: myForm.setFontSize('15px');
    ///	</summary>

}
dhtmlXForm.prototype.setFormData = function (data) {
    ///	<summary>
    /// 
    ///		Example: form.setFormData({
    ///   some1:mygrid.cells(id, 1).getValue(),
    ///   some2:mygrid.cells(id, 2).getValue(),
    /// });
    ///	</summary>
    ///	<param name="data" type="String">
    ///		data - the hash of properties
    /// </param>

}
dhtmlXForm.prototype.setItemFocus = function (name) {
    ///	<summary>
    /// 
    ///		Example: myForm.setItemFocus("myItem");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>

}
dhtmlXForm.prototype.setItemHeight = function (name, height) {
    ///	<summary>
    /// 
    ///		Example: myForm.setItemHeight("myItem", 60);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="height" type="String">
    ///		height - the height you want to set for item
    /// </param>

}
dhtmlXForm.prototype.setItemLabel = function (name, label) {
    ///	<summary>
    /// 
    ///		Example: myForm.setItemLabel("myItem", "New label");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="label" type="String">
    ///		label - a new label (empty string if you want to cancel label)
    /// </param>

}
dhtmlXForm.prototype.setItemValue = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: myForm.setItemValue("myInput", 100);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		getItemValue()
    /// </param>

}
dhtmlXForm.prototype.setItemWidth = function (name, width) {
    ///	<summary>
    /// 
    ///		Example: myForm.setItemWidth("myItem", 220);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="width" type="String">
    ///		width - the width you want to set for item
    /// </param>

}
dhtmlXForm.prototype.setReadonly = function (name, state) {
    ///	<summary>
    /// 
    ///		Example: //makes an item with name='myInput' readonly
    ///    myForm.setReadonly('myInput', true);
    /// //makes the item not readonly
    ///    myForm.setReadonly('myInput', false);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="state" type="String">
    ///		isReadonly()
    /// </param>

}
dhtmlXForm.prototype.setSkin = function (skin) {
    ///	<summary>
    /// 
    ///		Example: myForm.setSkin('dhx_web');
    ///	</summary>

}
dhtmlXForm.prototype.setUserData = function (name, udKey, udValue) {
    ///	<summary>
    /// 
    ///		Example: myForm.setUserData('myInput','Key',10)
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="udKey" type="String">
    ///		getUserData()
    /// </param>

}
dhtmlXForm.prototype.showItem = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: formData=[{type: "input", label: "Login"},
    ///           {type: "input", label: "Password"},
    ///           {type: "button", name:"loginButton", value: "Log in", command:"Login"},
    ///           {type: "button", name:"logoutButton", value: "Log out", command:"Logout"}];
    /// myForm = new dhtmlXForm("myForm", formData);
    /// ...
    /// function hideLoginButton() {
    ///           alert("You have logged in successfully.");
    ///           myForm.showItem("logoutButton");
    ///           myForm.hideItem("loginButton");
    /// }
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		isItemHidden()
    /// </param>

}
dhtmlXForm.prototype.validate = function () {
    ///	<summary>
    /// 
    ///		Example: function doFormValidate() {
    ///      myForm.validate();
    /// }
    ///	</summary>

}
dhtmlXForm.prototype.uncheckItem = function (name, value) {
    ///	<summary>
    /// 
    ///		Example: // for radio button
    /// dhxForm.uncheckItem(name, value);
    ///   // for other items
    /// dhxForm.uncheckItem(name);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - the id of item (the item&#039;s parameter &#039;name&#039;)
    /// </param>
    ///	<param name="value" type="String">
    ///		checkItem()
    /// </param>

}
dhtmlXForm.prototype.unload = function () {
    ///	<summary>
    /// 
    ///		Example: myForm.unload();
    /// myForm = null;
    ///	</summary>

}
dhtmlXForm.prototype.unlock = function () {
    ///	<summary>
    /// 
    ///		Example: myForm.unlock();
    ///	</summary>

}


var dhtmlXGridObject = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXGridObject.prototype.addRow = function (new_id, text, ind) {
    ///	<summary>
    /// add row to the grid
    ///		Example: var newId = (new Date()).valueOf();
    ///         grid.addRow(newId,"");
    ///	</summary>
    ///	<param name="new_id" type="String">
    ///		new_id - row ID, must be unique
    /// </param>
    ///	<param name="text" type="String">
    ///		text - row values, may be a comma separated list or an array
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - index of new row, optional, row added to the last position by default
    /// </param>

}
dhtmlXGridObject.prototype.addRowFromClipboard = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.addRowFromClipboard();
    ///	</summary>

}
dhtmlXGridObject.prototype.adjustColumnSize = function (cInd) {
    ///	<summary>
    /// adjusts column size to make all content visible
    ///		Example: //adjust first column size
    ///    mygrid.adjustColumnSize(0);
    ///	</summary>
    ///	<param name="cInd" type="Number">
    ///		cInd - index of column
    /// </param>

}
dhtmlXGridObject.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: <script>
    ///   grid.attachEvent("onRowSelect",function(rowId,cellIndex){
    ///      alert("Row with id="+rowId+" was selected");
    ///   });
    /// </script>
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - name of the event;
    /// </param>
    ///	<param name="evHandler" type="Function">
    ///		return &#039;true&#039;; -  confirm action
    /// </param>

}
dhtmlXGridObject.prototype.attachFooter = function (values, style) {
    ///	<summary>
    /// attach additional line to footer
    ///		Example: //plain usage
    ///         grid.attachFooter("A,B,C,D");
    ///         //alternative syntax
    ///         grid.attachFooter(["A","B","C","D"])
    ///         //colspans in footer
    ///         grid.attachFooter("A,#cspan,C,#cspan");
    ///         //rowspans in footer
    ///         grid.attachFooter("A,#rspan,C,#rspan");
    ///         //styles assigned
    ///         grid.attachFooter("A,B,C,D",["","color:red;","",""]);
    ///	</summary>
    ///	<param name="values" type="String">
    ///		values - array of header titles
    /// </param>
    ///	<param name="style" type="String">
    ///		style - array of styles, optional
    /// </param>

}
dhtmlXGridObject.prototype.attachHeader = function (values, style) {
    ///	<summary>
    /// attach additional line to header
    ///		Example: //plain usage
    ///         grid.attachHeader("A,B,C,D");
    ///         //alternative syntax
    ///         grid.attachHeader(["A","B","C","D"])
    ///         //colspans in header
    ///         grid.attachHeader("A,#cspan,C,#cspan");
    ///         //rowspans in header
    ///         grid.attachHeader("A,#rspan,C,#rspan");
    ///         //styles assigned
    ///         grid.attachHeader("A,B,C,D",["","color:red;","",""]);
    ///	</summary>
    ///	<param name="values" type="String">
    ///		values - array of header titles
    /// </param>
    ///	<param name="style" type="String">
    ///		style - array of styles, optional
    /// </param>

}
dhtmlXGridObject.prototype.attachToObject = function (obj) {
    ///	<summary>
    /// 
    ///		Example: mygrid.attachToObject(obj);
    ///	</summary>
    ///	<param name="obj" type="Object">
    ///		obj - object to attach to
    /// </param>

}
dhtmlXGridObject.prototype.bind = function (target, rule) {
    ///	<summary>
    /// 
    ///		Example: mygrid.bind(myCombo, function(data, filter){
    /// 		return myGrid.cells(data, 2).getValue() == filter.text;
    /// });
    ///	</summary>
    ///	<param name="target" type="Object">
    ///		target - (object) the object that method is assigned to (optional)
    /// </param>
    ///	<param name="rule" type="String">
    ///		rule - (function) sets the rule according which components will be bound (optional)
    /// </param>

}
dhtmlXGridObject.prototype.cellById = function (row_id, col) {
    ///	<summary>
    /// gets dhtmlXGridCellObject object (if no arguments then gets dhtmlXGridCellObject object of currently selected cell)
    ///		Example: var cellObj = grid.cellById(row_id, col);
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id
    /// </param>
    ///	<param name="col" type="Number">
    ///		col -  column index
    /// </param>

}
dhtmlXGridObject.prototype.cellByIndex = function (row_index, col) {
    ///	<summary>
    /// gets dhtmlXGridCellObject object
    ///		Example: var cellObj = grid.cellByIndex(row_index, col);
    ///	</summary>
    ///	<param name="row_index" type="Number">
    ///		row_index -  row index
    /// </param>
    ///	<param name="col" type="Number">
    ///		col -  column index
    /// </param>

}
dhtmlXGridObject.prototype.cellToClipboard = function (rowId, cellInd) {
    ///	<summary>
    /// copy value of cell to clipboard
    ///		Example: //minimal parameters set
    ///    mygrid.cellToClipboard();
    ///    //maximal parameters set
    ///    mygrid.cellToClipboard("rowID",0);
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row (optional, use selected row by default)
    /// </param>
    ///	<param name="cellInd" type="Number">
    ///		cellInd - column index(optional, use selected cell by default)
    /// </param>

}
dhtmlXGridObject.prototype.cells = function (row_id, col) {
    ///	<summary>
    /// gets dhtmlXGridCellObject object (if no arguments then gets dhtmlXGridCellObject object of currently selected cell)
    ///		Example: var cellObj = grid.cells(row_id, col);
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id
    /// </param>
    ///	<param name="col" type="Number">
    ///		col -  column index
    /// </param>

}
dhtmlXGridObject.prototype.cells2 = function (row_index, col) {
    ///	<summary>
    /// gets dhtmlXGridCellObject object
    ///		Example: var cellObj = grid.cells2(row_index, col);
    ///	</summary>
    ///	<param name="row_index" type="Number">
    ///		row_index -  row index
    /// </param>
    ///	<param name="col" type="Number">
    ///		col -  column index
    /// </param>

}
dhtmlXGridObject.prototype.changePage = function (pageNum) {
    ///	<summary>
    /// change current page in grid
    ///		Example: //Go to the 5th page
    ///    grid.changePage(5);
    ///	</summary>
    ///	<param name="pageNum" type="String">
    ///		pageNum -  new active page
    /// </param>

}
dhtmlXGridObject.prototype.changePageRelative = function (ind) {
    ///	<summary>
    /// change current page in grid
    ///		Example: <a href="javascript:void(0)" onclick="grid.changePageRelative(-1)">Previous page</a>
    /// <a href="javascript:void(0)" onclick="grid.changePageRelative(1)">Next page</a>
    ///	</summary>
    ///	<param name="ind" type="String">
    ///		ind - correction ( -1,1,2  etc) to current active page
    /// </param>

}
dhtmlXGridObject.prototype.changeRowId = function (oldRowId, newRowId) {
    ///	<summary>
    /// changes id of the row to the new one
    ///		Example: mygrid.changeRowId("old_rowID","new_rowID");
    ///	</summary>
    ///	<param name="oldRowId" type="String">
    ///		oldRowId - row id to change
    /// </param>
    ///	<param name="newRowId" type="String">
    ///		newRowId - row id to set
    /// </param>

}
dhtmlXGridObject.prototype.checkAll = function (mode) {
    ///	<summary>
    /// check all checkboxes in grid
    ///		Example: //check all checkboxes in grid
    ///    mygrid.checkAll(true);
    ///    //uncheck all checkboxes in grid
    ///    mygrid.checkAll(false)
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} check\uncheck all checkboxes in grid (optional, true by default)
    /// </param>

}
dhtmlXGridObject.prototype.clearAll = function (header) {
    ///	<summary>
    /// deletes all rows in grid
    ///		Example: //delete all rows from the grid
    ///    mygrid.clearAll();
    ///    //delete all rows from the grid, clear header
    ///    grid.clearAll(true);
    ///	</summary>
    ///	<param name="header" type="String">
    ///		header - (boolean) enable/disable cleaning header
    /// </param>

}
dhtmlXGridObject.prototype.clearAndLoad = function (url, call, type) {
    ///	<summary>
    /// clears existing grid state and load data from external file ( xml, json, jsarray, csv )
    ///		Example: //clear grid and load new data
    ///    mygrid.clearAndLoad("grid_new.xml");
    ///    //clear grid, load new data, execute doAfterRefresh() function after grid was loaded
    ///    mygrid.clearAndLoad("grid_new.xml",doAfterRefresh);
    ///    //clear grid, load new data in csv format, execute doAfterRefresh() function after grid was loaded
    ///    mygrid.clearAndLoad("grid_new.csv",doAfterRefresh,csv);
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - url to external file
    /// </param>
    ///	<param name="call" type="String">
    ///		call - after loading callback function, optional, can be ommited
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of data (xml,csv,json,jsarray) , optional, xml by default
    /// </param>

}
dhtmlXGridObject.prototype.clearChangedState = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.clearChangedState();
    ///	</summary>

}
dhtmlXGridObject.prototype.clearConfigCookie = function (name) {
    ///	<summary>
    /// clear cookie with grid config details
    ///		Example: <button onclick="mygrid.clearConfigCookie()">Clear cookies</button>
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXGridObject.prototype.clearSelection = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.clearSelection();
    ///	</summary>

}
dhtmlXGridObject.prototype.collapseAllGroups = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.collapseAllGroups();
    ///	</summary>

}
dhtmlXGridObject.prototype.collapseGroup = function (val) {
    ///	<summary>
    /// collapse group of rows
    ///		Example: //collapse "John Grisham" group
    ///    mygrid.collapseGroup('John Grisham');
    ///	</summary>
    ///	<param name="val" type="String">
    ///		val - value to use to determine what group to collapse (in other words this should be value common for all of them)
    /// </param>

}
dhtmlXGridObject.prototype.collectValues = function (column) {
    ///	<summary>
    /// get all possible values in column
    ///		Example: //collect possible values in the 2nd column
    ///    var values=mygrid.collectValues(1);
    ///	</summary>
    ///	<param name="column" type="Number">
    ///		column - {number} zero based index of column
    /// </param>

}
dhtmlXGridObject.prototype.copyBlockToClipboard = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.attachEvent("onKeyPress",onKeyPressed);
    /// ...
    /// function onKeyPressed(code,ctrl,shift){
    /// 	if(code==67&&ctrl){
    /// 	    mygrid.setCSVDelimiter("\t")
    /// 	    mygrid.copyBlockToClipboard()
    /// 	}
    /// 	if(code==86&&ctrl){
    /// 	    mygrid.pasteBlockFromClipboard()
    /// 	}
    /// 	return true;
    /// }
    ///	</summary>

}
dhtmlXGridObject.prototype.copyRowContent = function (from_row_id, to_row_id) {
    ///	<summary>
    /// copies row content to another existing row
    ///		Example: mygrid.copyRowContent("from_row_id","to_row_id");
    ///	</summary>
    ///	<param name="from_row_id" type="String">
    ///		from_row_id - id of the row to copy content from
    /// </param>
    ///	<param name="to_row_id" type="String">
    ///		to_row_id - id of the row to copy content to
    /// </param>

}
dhtmlXGridObject.prototype.deleteColumn = function (ind) {
    ///	<summary>
    /// delete column
    ///		Example: //delete first column
    ///    mygrid.deleteColumn(0);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - index of column
    /// </param>

}
dhtmlXGridObject.prototype.deleteRow = function (row_id) {
    ///	<summary>
    /// delete row from the grid
    ///		Example: //delete row with id "row1"
    ///    mygrid.deleteRow("row1");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row ID
    /// </param>

}
dhtmlXGridObject.prototype.deleteSelectedRows = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.deleteSelectedRows();
    ///	</summary>

}
dhtmlXGridObject.prototype.destructor = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.destructor();
    ///	</summary>

}
dhtmlXGridObject.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: grid.detachEvent(id); // unique id of the event handler
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlXGridObject.prototype.detachFooter = function (index) {
    ///	<summary>
    /// remove footer line from grid (opposite to attachFooter)
    ///		Example: mygrid.detachFooter(0);//detach first footer's line
    ///	</summary>
    ///	<param name="index" type="Number">
    ///		index - index of a footer
    /// </param>

}
dhtmlXGridObject.prototype.detachHeader = function (index) {
    ///	<summary>
    /// remove header line from grid (opposite to attachHeader)
    ///		Example: mygrid.detachHeader(0);//detach first header's line
    ///	</summary>
    ///	<param name="index" type="Number">
    ///		index - index of row to be removed ( zero based )
    /// </param>

}
dhtmlXGridObject.prototype.disableUndoRedo = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.disableUndoRedo();
    ///	</summary>

}
dhtmlXGridObject.prototype.doRedo = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.doRedo();
    ///	</summary>

}
dhtmlXGridObject.prototype.doUndo = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.doUndo();
    ///	</summary>

}
dhtmlXGridObject.prototype.doesRowExist = function (row_id) {
    ///	<summary>
    /// determines if row with specified id exists
    ///		Example: var exist=mygrid.doesRowExist("some_row_ID");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>

}
dhtmlXGridObject.prototype.editCell = function () {
    ///	<summary>
    /// 
    ///		Example: <button onclick="(arguments[0]||window.event).cancelBubble=true; selectAndEdit()">Edit cell</button>
    /// <script>
    ///    function selectAndEdit(){
    /// 	mygrid.selectCell(rowIndex,cellIndex);
    /// 	mygrid.editCell();
    ///    }
    /// </script>
    ///	</summary>

}
dhtmlXGridObject.prototype.editStop = function (mode) {
    ///	<summary>
    /// retuns value from editor(if presents) to cell and closes editor
    ///		Example: //close opened editor and return value from editor to the cell
    ///    mygrid.editStop();
    ///    //close opened editor and revert cell value to the previous one
    ///    mygrid.editStop(true);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - if true - current edit value will be reverted to previous one
    /// </param>

}
dhtmlXGridObject.prototype.enableAlterCss = function (cssE, cssU, perLevel, levelUnique) {
    ///	<summary>
    /// set even/odd css styles
    ///		Example: <style>
    /// .even{
    ///    background-color:#22FF44;
    ///    }
    /// .uneven{
    ///    background-color:#41964e;
    ///    }	
    /// </style>
    /// <script>
    ///    //minimal parameters set:
    ///    mygrid.enableAlterCss("even","uneven");
    ///    //disable even/odd rows in the grid:
    ///    mygrid.enableAlterCss("","");
    ///    //color rows in treeGrid by order:
    ///    treeGrid.enableAlterCss("even","uneven",false,false);
    ///    //color rows in treeGrid by level,every row level will have unique class (even_0 - 1st level, uneven_1 - 2nd level, even_2 - 3rd level, etc.)
    ///    treeGrid.enableAlterCss("even","uneven",true,true);
    /// </script>
    ///	</summary>
    ///	<param name="cssE" type="String">
    ///		cssE - name of css class for even rows
    /// </param>
    ///	<param name="cssU" type="String">
    ///		cssU - name of css class for odd rows
    /// </param>
    ///	<param name="perLevel" type="Boolean">
    ///		perLevel - true/false - mark rows not by order, but by level in treegrid (optional, default value: true - treeGrid, false - Grid)
    /// </param>
    ///	<param name="levelUnique" type="Boolean">
    ///		levelUnique - true/false - creates additional unique css class based on row level (optional, false by default)
    /// </param>

}
dhtmlXGridObject.prototype.enableAutoHeight = function (mode, maxHeight, countFullHeight) {
    ///	<summary>
    /// enable autoheight of grid
    ///		Example: //enable auto height mode
    ///    mygrid.enableAutoHeight(true);
    /// �
    ///    //disable auto height mode
    ///    mygrid.enableAutoHeight(false);
    /// �
    ///    //enable auto height mode, set maximum height before scrolling appears, only data part included in max height calculation
    ///    mygrid.enableAutoHeight(true,100);
    /// �
    ///    //enable auto height mode, set maximum height before scrolling appears, all grid height included in max height calculation
    ///    mygrid.enableAutoHeight(true,100,true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>
    ///	<param name="maxHeight" type="String">
    ///		maxHeight - maximum height before scrolling appears (no limit by default)
    /// </param>
    ///	<param name="countFullHeight" type="Boolean">
    ///		countFullHeight - control the usage of maxHeight parameter - when set to true all grid height included in max height calculation, if false then only data part (no header) of grid included in calcualation (false by default)
    /// </param>

}
dhtmlXGridObject.prototype.enableAutoHiddenColumnsSaving = function (name, cookie_param) {
    ///	<summary>
    /// enable automatic saving column state ( hidden | shown )
    ///		Example: //minimal parameters set
    ///    mygrid.enableAutoHiddenColumnsSaving();
    ///    //maximal parameters set
    ///    mygrid.enableAutoHiddenColumnsSaving("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - optional, additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.enableAutoSaving = function (name, cookie_param) {
    ///	<summary>
    /// 
    ///		Example: //minimal parameters set
    ///    mygrid.enableAutoSaving();
    ///    //maximal parameters set
    ///    mygrid.enableAutoSaving("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.enableAutoSizeSaving = function (name, cookie_param) {
    ///	<summary>
    /// enable automatic size saving to cookie
    ///		Example: //minimal parameters set
    ///    mygrid.enableAutoSizeSaving();
    ///    //maximal parameters set
    ///    mygrid.enableAutoSizeSaving("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.enableAutoWidth = function (mode, max_limit, min_limit) {
    ///	<summary>
    /// changes grid&#039;s container size on the fly to fit total width of grid columns
    ///		Example: //enable auto width mode
    ///    mygrid.enableAutoWidth(true);
    ///    //disable auto width mode
    ///    mygrid.enableAutoWidth(true);
    ///    //enable auto width mode, set maximal and minimal allowed width
    ///    mygrid.enableAutoWidth(true,600,100);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode  - truse/false - enable / disable
    /// </param>
    ///	<param name="max_limit" type="String">
    ///		max_limit  - max allowed width, not limited by default
    /// </param>
    ///	<param name="min_limit" type="String">
    ///		min_limit  - min allowed width, not limited by default
    /// </param>

}
dhtmlXGridObject.prototype.enableBlockSelection = function (mode) {
    ///	<summary>
    /// enables block selection mode in grid
    ///		Example: //enable block selection
    ///    mygrid.enableBlockSelection(true);
    ///    //disable block selection
    ///    mygrid.enableBlockSelection(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} - enable/disable block selection (optional, true by default)
    /// </param>

}
dhtmlXGridObject.prototype.enableCSVAutoID = function (mode) {
    ///	<summary>
    /// enable mode, where ID for rows loaded from CSV autogenerated
    ///		Example: //enable autogenerated rows IDs for the CSV loading
    ///    mygrid.enableCSVAutoID(true);
    ///    //disable autogenerated rows IDs for the CSV loading
    ///    mygrid.enableCSVAutoID(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.enableCSVHeader = function (mode) {
    ///	<summary>
    /// enable recognizing first row in CSV as header
    ///		Example: //enable recognizing first row in CSV as header
    ///    mygrid.enableCSVHeader(true);
    ///    //disable recognizing first row in CSV as header
    ///    mygrid.enableCSVHeader(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.enableCellIds = function (mode) {
    ///	<summary>
    /// enable/disable unique id for cells (id will be automaticaly created using the following template: &#039;c_[RowId]_[colIndex]&#039;)
    ///		Example: //enable unique id for cells
    ///    mygrid.enableCellIds(true);
    ///    //disable unique id for cells
    ///    mygrid.enableCellIds(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} - enable/disable unique id for cells
    /// </param>

}
dhtmlXGridObject.prototype.enableColSpan = function (mode) {
    ///	<summary>
    /// enable/disable colspan support
    ///		Example: //enable col span mode
    ///    mygrid.enableColSpan(true);
    ///    //disable col span mode
    ///    mygrid.enableColSpan(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} enable/disable colspan support
    /// </param>

}
dhtmlXGridObject.prototype.enableColumnMove = function (mode, columns) {
    ///	<summary>
    /// enable move column functionality
    ///		Example: //minimal parameters set
    ///    mygrid.enableColumnMove(true);
    ///    //maximal parameters set
    ///    mygrid.enableColumnMove(true,"false,true,true,true,true,true");
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>
    ///	<param name="columns" type="Boolean">
    ///		columns - list of true/false values, optional
    /// </param>

}
dhtmlXGridObject.prototype.enableContextMenu = function (menu) {
    ///	<summary>
    /// enable/disable context menu
    ///		Example: var menu = new dhtmlXMenuObject(null, "standard");
    ///    ...
    ///    mygrid.enableContextMenu(menu);
    ///	</summary>
    ///	<param name="menu" type="Object">
    ///		dhtmlxMenu object, if null - context menu will be disabled
    /// </param>

}
dhtmlXGridObject.prototype.enableDistributedParsing = function (mode, count, time) {
    ///	<summary>
    /// enable/disable distributed parsing (rows paresed portion by portion with some timeout)
    ///		Example: //enable distributed parsing mode
    ///    mygrid.enableDistributedParsing(true);
    ///    //enable distributed parsing mode, parse 50 nodes by one step, parse nodes with 2 seconds delay
    ///    mygrid.enableDistributedParsing(true,50,2000);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>
    ///	<param name="count" type="String">
    ///		count - count of nodes parsed by one step (optional, 10 by default)
    /// </param>
    ///	<param name="time" type="String">
    ///		time - time between parsing counts in milli seconds (optional, 250 by default)
    /// </param>

}
dhtmlXGridObject.prototype.enableDragAndDrop = function (mode) {
    ///	<summary>
    /// enable/disable drag-and-drop
    ///		Example: //enable drag-and-drop
    ///    mygrid.enableDragAndDrop(true);
    ///    //disable drag-and-drop
    ///    mygrid.enableDragAndDrop(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - enabled/disabled [ can be true/false/temporary_disabled - last value mean that tree can be D-n-D can be switched to true later ]
    /// </param>

}
dhtmlXGridObject.prototype.enableDragOrder = function (mode) {
    ///	<summary>
    /// switch to mode when draged item, droped in target location in same order as they was in source grid
    ///		Example: //enable drag order
    ///    mygrid.enableDragOrder(true);
    ///    //disable drag order
    ///    mygrid.enableDragOrder(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false to enable/disable mode
    /// </param>

}
dhtmlXGridObject.prototype.enableEditEvents = function (click, dblclick, f2Key) {
    ///	<summary>
    /// enable/disable events which fire excell editing, mutual exclusive with enableLightMouseNavigation
    ///		Example: //enable editing by single click and by pressing F2 key, disable editing by double click
    ///    mygrid.enableEditEvents(true,false,true);
    ///	</summary>
    ///	<param name="click" type="Boolean">
    ///		click - {true|false} - enable/disable editing by single click
    /// </param>
    ///	<param name="dblclick" type="Boolean">
    ///		dblclick - {true|false} - enable/disable editing by double click
    /// </param>
    ///	<param name="f2Key" type="Boolean">
    ///		f2Key - {true|false} - enable/disable editing by pressing F2 key
    /// </param>

}
dhtmlXGridObject.prototype.enableEditTabOnly = function (mode) {
    ///	<summary>
    /// enables/disables mode when readonly cell is not available with tab
    ///		Example: //enable mode when readonly cell is not available with tab
    ///    mygrid.enableEditTabOnly(true);
    ///    //disable mode when readonly cell is not available with tab
    ///    mygrid.enableEditTabOnly(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.enableHeaderImages = function (fl) {
    ///	<summary>
    /// specify if values passed to Header are images file names
    ///		Example: //enable header images
    ///    mygrid.enableHeaderImages(true);
    ///    //disable header images
    ///    mygrid.enableHeaderImages(false);
    ///	</summary>
    ///	<param name="fl" type="String">
    ///		fl - true to treat column header values as image names
    /// </param>

}
dhtmlXGridObject.prototype.enableHeaderMenu = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.enableHeaderMenu();
    ///	</summary>

}
dhtmlXGridObject.prototype.enableKeyboardSupport = function (mode) {
    ///	<summary>
    /// enable/disable hot keys in grid
    ///		Example: //enable hot keys in grid
    ///    mygrid.enableKeyboardSupport(true);
    ///    //disable hot keys in grid 
    ///    mygrid.enableKeyboardSupport(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false (true by default)
    /// </param>

}
dhtmlXGridObject.prototype.enableLightMouseNavigation = function (mode) {
    ///	<summary>
    /// enable/disable light mouse navigation mode (row selection with mouse over, editing with single click), mutual exclusive with enableEditEvents
    ///		Example: //enable light mouse navigation
    ///    mygrid.enableLightMouseNavigation(true);
    ///    //disable light mouse navigation 
    ///    mygrid.enableLightMouseNavigation(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.enableMarkedCells = function (mode) {
    ///	<summary>
    /// 
    ///		Example: //enable marked cells
    ///    mygrid.enableMarkedCells(true);
    ///    //disable marked cells
    ///    mygrid.enableMarkedCells(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} - enable/disable marked cells support
    /// </param>

}
dhtmlXGridObject.prototype.enableMathEditing = function (mode) {
    ///	<summary>
    /// enable/disable editing of math cells
    ///		Example: //enable editing of math cells
    ///    mygrid.enableMathEditing(true);
    ///    //disable editing of math cells
    ///     mygrid.enableMathEditing(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} - enable/disable editing of math cells
    /// </param>

}
dhtmlXGridObject.prototype.enableMathSerialization = function (mode) {
    ///	<summary>
    /// enable/disable serialization of math formulas
    ///		Example: //enable math formulas serialization
    ///    mygrid.enableMathSerialization(true);
    ///    //disable math formulas serialization
    ///    mygrid.enableMathSerialization(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} enable/disable math formulas serialization
    /// </param>

}
dhtmlXGridObject.prototype.enableMercyDrag = function (mode) {
    ///	<summary>
    /// enable drag without removing (copy instead of move)
    ///		Example: //enable mercy drag
    ///    mygrid.enableMercyDrag(true);
    ///    //disable mercy drag
    ///    mygrid.enableMercyDrag(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true/false} enable/disable mode
    /// </param>

}
dhtmlXGridObject.prototype.enableMultiline = function (state) {
    ///	<summary>
    /// set multiline rows support to enabled or disabled state
    ///		Example: //enable multi line mode
    ///    mygrid.enableMultiline(true);
    ///    //disable multi line mode
    ///    mygrid.enableMultiline(false);
    ///	</summary>
    ///	<param name="state" type="Boolean">
    ///		state - {true|false} enable/disable multi line mode.
    /// </param>

}
dhtmlXGridObject.prototype.enableMultiselect = function (state) {
    ///	<summary>
    /// set multiselect mode to enabled or disabled state
    ///		Example: //enable multi select mode
    ///    mygrid.enableMultiselect(true);
    ///    //disable multi select mode
    ///    mygrid.enableMultiselect(false);
    ///	</summary>
    ///	<param name="state" type="Boolean">
    ///		state - true or false
    /// </param>

}
dhtmlXGridObject.prototype.enableOrderSaving = function (name, cookie_param) {
    ///	<summary>
    /// enable automatic column order saving to cookie
    ///		Example: //minimal parameters set
    ///    mygrid.enableOrderSaving();
    ///    //maximal parameters set
    ///    mygrid.enableOrderSaving("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.enablePaging = function (mode, pageSize, pagesInGrp, pagingControlsContainer, showRecInfo, pagingStateContainer) {
    ///	<summary>
    /// enable smart paging mode
    ///		Example: //enable paging with 10 rows per page
    ///    mygrid.enablePaging(true,10,5,"pagingArea",true,"recinfoArea");
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true|false - enable|disable mode
    /// </param>
    ///	<param name="pageSize" type="String">
    ///		pageSize - count of rows per page
    /// </param>
    ///	<param name="pagesInGrp" type="String">
    ///		pagesInGrp - count of visible page selectors
    /// </param>
    ///	<param name="pagingControlsContainer" type="String">
    ///		pagingControlsContainer - ID or container which will be used for showing paging controls
    /// </param>
    ///	<param name="showRecInfo" type="Boolean">
    ///		showRecInfo - true|false - enable|disable showing of additional info about paging state
    /// </param>
    ///	<param name="pagingStateContainer" type="String">
    ///		pagingStateContainer - ID or container which will be used for showing paging state
    /// </param>

}
dhtmlXGridObject.prototype.enablePreRendering = function (buffer) {
    ///	<summary>
    /// enables pre-rendering rows during scrolling. Makes scrolling smoother, but with small drop in overall perfomance.
    ///		Example: mygrid.enablePreRendering(50);
    ///	</summary>
    ///	<param name="buffer" type="String">
    ///		buffer - count of rows to pre-render
    /// </param>

}
dhtmlXGridObject.prototype.enableResizing = function (list) {
    ///	<summary>
    /// enable/disable resizing for specified colums
    ///		Example: //disable first column resizing
    ///    mygrid.enableResizing("false,true,true,true,true,true,true");
    ///	</summary>
    ///	<param name="list" type="Boolean">
    ///		list - list of true/false values separated with default delimiter (comma), resizing enabled for all columns by default
    /// </param>

}
dhtmlXGridObject.prototype.enableRowsHover = function (mode, cssClass) {
    ///	<summary>
    /// enable/disable hovering row on mouse over
    ///		Example: <style>
    /// 	.hover {
    /// 		background-color: navy;
    /// 	}
    /// </style>
    /// <script>
    ///    mygrid.enableRowsHover(true,"hover");
    /// </script>
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>
    ///	<param name="cssClass" type="String">
    ///		cssClass - css class for hovering row
    /// </param>

}
dhtmlXGridObject.prototype.enableRowspan = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.enableRowspan();
    ///	</summary>

}
dhtmlXGridObject.prototype.enableSmartRendering = function (mode, buffer) {
    ///	<summary>
    /// enable smart rendering mode
    ///		Example: //enable smart rendering mode
    ///    mygrid.enableSmartRendering(true);
    ///    //enable smart rendering mode, set cont of rows requested from the server by single operation
    ///    mygrid.enableSmartRendering(true,50);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true|false - enable|disable mode
    /// </param>
    ///	<param name="buffer" type="String">
    ///		buffer - has sense only in dynamic loading mode, count of rows requrested from server by single operation, optional
    /// </param>

}
dhtmlXGridObject.prototype.enableSortingSaving = function (name, cookie_param) {
    ///	<summary>
    /// enable automatic sorting state saving to cookie
    ///		Example: //minimal parameters set
    ///    mygrid.enableSortingSaving();
    ///    //maximal parameters set
    ///    mygrid.enableSortingSaving("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.enableStableSorting = function (mode) {
    ///	<summary>
    /// enables stable sorting algorithm
    ///		Example: mygrid.enableStableSorting(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.enableTooltips = function (list) {
    ///	<summary>
    /// enable/disable tooltips for specified colums
    ///		Example: //disable first column tooltips
    ///    mygrid.enableTooltips("false,true,true,true,true");
    ///	</summary>
    ///	<param name="list" type="Boolean">
    ///		list - list of true/false values, tooltips enabled for all columns by default
    /// </param>

}
dhtmlXGridObject.prototype.enableUndoRedo = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.enableUndoRedo();
    ///	</summary>

}
dhtmlXGridObject.prototype.expandAllGroups = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.expandAllGroups();
    ///	</summary>

}
dhtmlXGridObject.prototype.expandGroup = function (val) {
    ///	<summary>
    /// expand group of rows
    ///		Example: //expand 'John Grisham' group
    ///    mygrid.expandGroup('John Grisham')
    ///	</summary>
    ///	<param name="val" type="String">
    ///		val - value to use to determine what group to expand (in other words this should be value common for all of them)
    /// </param>

}
dhtmlXGridObject.prototype.filterBy = function (column, value, preserve) {
    ///	<summary>
    /// filter grid by mask
    ///		Example: //filter grid by 2nd column by value "alf"
    ///    mygrid.filterBy(1,"alf");
    ///    //filter grid by 2nd column with more comlex rule
    ///    mygrid.filterBy(1,function(data){
    ///             return   data.toString().indexOf("alf")!=-1;  // true - show the related row , false - hide the related row
    ///    });
    ///    //filter current grid state by 3rd column by value "Omega" 
    ///    mygrid.filterBy(2,"Omega",true);
    ///	</summary>
    ///	<param name="column" type="Number">
    ///		column - {number} zero based index of column.
    /// </param>
    ///	<param name="value" type="String">
    ///		value - {string} value by which the column will be filtered.
    /// </param>
    ///	<param name="preserve" type="Boolean">
    ///		preserve - {true|false} filter current or initial state (false by default)
    /// </param>

}
dhtmlXGridObject.prototype.filterByAll = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.filterByAll();
    ///	</summary>

}
dhtmlXGridObject.prototype.findCell = function (value, c_ind, first) {
    ///	<summary>
    /// find cell in grid by value
    ///		Example: //search "alf" value at the all grid cells
    ///    var searchResult=mygrid.findCell("alf");
    ///    //search "alf" value at the second column, find only first occurence
    ///    var searchResult=mygrid.findCell("alf",1,true);
    ///	</summary>
    ///	<param name="value" type="String">
    ///		value - {string} search string
    /// </param>
    ///	<param name="c_ind" type="Number">
    ///		c_ind - {number} index of column to search in (optional, if not specified, then search everywhere)
    /// </param>
    ///	<param name="first" type="Boolean">
    ///		first - {true|fase} find only first occurence (optional, false by default)
    /// </param>

}
dhtmlXGridObject.prototype.forEachCell = function (rowId, custom_code) {
    ///	<summary>
    /// execute code for each cell in a row
    ///		Example: mygrid.forEachCell("row1",function(cellObj,ind){
    ///       //execute code for each cell in row with id "row1" 
    ///       //cellObj - related cell object
    ///       //ind - column index
    ///    });
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row where cell must be itterated
    /// </param>
    ///	<param name="custom_code" type="Object">
    ///		custom_code - function which get eXcell object as incomming argument
    /// </param>

}
dhtmlXGridObject.prototype.forEachRow = function (custom_code) {
    ///	<summary>
    /// execute code for each row in a grid
    ///		Example: mygrid.forEachRow(function(id){
    ///       //any custom code here 
    ///       //id - row's id
    ///    });
    ///	</summary>
    ///	<param name="custom_code" type="String">
    ///		custom_code - function which get row id as incomming argument
    /// </param>

}
dhtmlXGridObject.prototype.forceLabelSelection = function (mode) {
    ///	<summary>
    /// affect block selection, so it will copy|paste only visible text , not values behind
    ///		Example: //enable label selection
    ///    mygrid.forceLabelSelection(true);
    ///    //disable label selection
    ///    mygrid.forceLabelSelection(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.getAllRowIds = function (separator) {
    ///	<summary>
    /// gets a list of all row ids in grid
    ///		Example: //return list of row ids with comma delimiter
    ///    var ids=mygrid.getAllRowIds();
    ///    //retrun list of row ids with dot delimiter
    ///    var ids=mygrid.getAllRowIds(".");
    ///	</summary>
    ///	<param name="separator" type="String">
    ///		separator - delimiter to use in list (optional, comma by default)
    /// </param>

}
dhtmlXGridObject.prototype.getChangedRows = function (and_added) {
    ///	<summary>
    /// get list of IDs of changed rows
    ///		Example: //get list of changed rows
    ///    var ids=mygrid.getChangedRows();
    ///    //get list of changed rows included added rows
    ///    var ids=mygrid.getChangedRows(true);
    ///	</summary>
    ///	<param name="and_added" type="Boolean">
    ///		and_added - {true|false} if true- include ids of added rows
    /// </param>

}
dhtmlXGridObject.prototype.getCheckedRows = function (col_ind) {
    ///	<summary>
    /// get list of Ids of all rows with checked exCell in specified column
    ///		Example: //get list of ids of checked rows from the first column
    ///    var checked=mygrid.getCheckedRows(0);
    ///	</summary>
    ///	<param name="col_ind" type="Number">
    ///		col_ind - column index
    /// </param>

}
dhtmlXGridObject.prototype.getColIndexById = function (id) {
    ///	<summary>
    /// gets column index by column id
    ///		Example: //get index of the column with id "col1"
    ///    var colIndex=mygrid.getColIndexById("col1");
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - column id
    /// </param>

}
dhtmlXGridObject.prototype.getColLabel = function (cin, ind) {
    ///	<summary>
    /// gets label of column specified by index
    ///		Example: //get label of the first column
    ///    var colLabel=mygrid.getColLabel(0);
    ///    //get label of the second line of the first column
    ///    var colLabel=mygrid.getColLabel(0,1);
    ///	</summary>
    ///	<param name="cin" type="Number">
    ///		cin - column index
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind -  header row index (optional, 0 by default, has sence only with multi line header)
    /// </param>

}
dhtmlXGridObject.prototype.getColType = function (cInd) {
    ///	<summary>
    /// get column type by column index
    ///		Example: //get first column type
    ///    var type=mygrid.getColType(0);
    ///	</summary>
    ///	<param name="cInd" type="Number">
    ///		cInd - column index
    /// </param>

}
dhtmlXGridObject.prototype.getColTypeById = function (cID) {
    ///	<summary>
    /// get column type by column ID
    ///		Example: //get type of the column with id "column1"
    ///    var type=mygrid.getColTypeById("column1");
    ///	</summary>
    ///	<param name="cID" type="String">
    ///		cID - column id
    /// </param>

}
dhtmlXGridObject.prototype.getColWidth = function (ind) {
    ///	<summary>
    /// gets width of specified column in pixels
    ///		Example: //get first column width
    ///    var width=mygrid.getColWidth(0);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - column index
    /// </param>

}
dhtmlXGridObject.prototype.getColumnId = function (cin) {
    ///	<summary>
    /// gets column id of column specified by index
    ///		Example: //get first column id
    ///    var colId=mygrid.getColumnId(0);
    ///	</summary>
    ///	<param name="cin" type="Number">
    ///		cin - column index
    /// </param>

}
dhtmlXGridObject.prototype.getColumnsNum = function () {
    ///	<summary>
    /// 
    ///		Example: var colNum=mygrid.getColumnsNum();
    ///	</summary>

}
dhtmlXGridObject.prototype.getCombo = function (col_ind) {
    ///	<summary>
    /// gets Combo object of specified column. Use it to change select box value for cell before editor opened
    ///		Example: //get first column combo object
    ///    var combo=mygrid.getCombo(0);
    ///	</summary>
    ///	<param name="col_ind" type="Number">
    ///		col_ind - index of the column to get combo object for. Note column must have &#039;co&#039;, &#039;coro&#039; or &#039;combo&#039; type
    /// </param>

}
dhtmlXGridObject.prototype.getCustomCombo = function (id, ind) {
    ///	<summary>
    /// get combobox specific for cell in question
    ///		Example: var combo=mygrid.getCustomCombo("row1",0);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - row id
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind  - column index. Note cell must have &#039;co&#039;, &#039;coro&#039; or &#039;combo&#039; type
    /// </param>

}
dhtmlXGridObject.prototype.getFilterElement = function (index) {
    ///	<summary>
    /// gets input object of filter linked to column in question
    ///		Example: //get filter object placed at the fisrt column header
    ///    var filterObject=mygrid.getFilterElement(0);
    ///	</summary>
    ///	<param name="index" type="Number">
    ///		index - index of column
    /// </param>

}
dhtmlXGridObject.prototype.getFooterLabel = function (cin, ind) {
    ///	<summary>
    /// gets label of footer specified by index
    ///		Example: //minimal parameters set
    ///    mygrid.getFooterLabel(0);
    ///    //maximal parameters set
    ///    mygrid.getFooterLabel(0,1);
    ///	</summary>
    ///	<param name="cin" type="Number">
    ///		cin - column index
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - footer row index (optional, 0 by default)
    /// </param>

}
dhtmlXGridObject.prototype.getMarked = function () {
    ///	<summary>
    /// 
    ///		Example: var markedArray = mygrid.getMarked();
    ///	</summary>

}
dhtmlXGridObject.prototype.getRedo = function () {
    ///	<summary>
    /// 
    ///		Example: var redo=mygrid.getRedo();
    ///	</summary>

}
dhtmlXGridObject.prototype.getRowAttribute = function (rId, name) {
    ///	<summary>
    /// returns row attribute value which was set in the &lt;row&gt; xml tag
    ///		Example: <?xml version='1.0' encoding='iso-8859-1'?>
    ///         <rows>
    ///             <row id="unique_rowid" some="data">
    ///                     <cell some="data">cell content</cell>
    ///             </row>
    ///         </rows>
    ///    ...
    ///    var rowAttr = grid.getRowAttribute("unique_rowid","some");
    ///	</summary>
    ///	<param name="rId" type="String">
    ///		rId - row id
    /// </param>
    ///	<param name="name" type="String">
    ///		name - attribute name
    /// </param>

}
dhtmlXGridObject.prototype.getRowId = function (ind) {
    ///	<summary>
    /// gets row id by index
    ///		Example: //get ID of the first row
    ///    var rowID=mygrid.getRowId(0);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - row index
    /// </param>

}
dhtmlXGridObject.prototype.getRowIndex = function (row_id) {
    ///	<summary>
    /// gets row index by id (grid only)
    ///		Example: //get index of the row with id "row1"
    ///    var rowIndex=mygrid.getRowIndex("row1");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>

}
dhtmlXGridObject.prototype.getRowsNum = function () {
    ///	<summary>
    /// 
    ///		Example: var count=mygrid.getRowsNum();
    ///	</summary>

}
dhtmlXGridObject.prototype.getSelectedCellIndex = function () {
    ///	<summary>
    /// 
    ///		Example: var ind=mygrid.getSelectedCellIndex();
    ///	</summary>

}
dhtmlXGridObject.prototype.getSelectedRowId = function () {
    ///	<summary>
    /// 
    ///		Example: var selectedId=mygrid.getSelectedRowId();
    ///	</summary>

}
dhtmlXGridObject.prototype.getSortingState = function () {
    ///	<summary>
    /// 
    ///		Example: var state=mygrid.getSortingState();
    ///	</summary>

}
dhtmlXGridObject.prototype.getStateOfView = function () {
    ///	<summary>
    /// 
    ///		Example: var state=mygrid.getStateOfView();
    ///	</summary>

}
dhtmlXGridObject.prototype.getUndo = function () {
    ///	<summary>
    /// 
    ///		Example: var undo=mygrid.getUndo();
    ///	</summary>

}
dhtmlXGridObject.prototype.getUserData = function (row_id, name) {
    ///	<summary>
    /// gets user Data
    ///		Example: //get user row user data
    ///    var userdata = grid.getUserData("unique_rowid","someName1");
    ///    //get gloabal user data
    ///    var userdata = grid.getUserData("","someName1");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id. if empty then user data is for grid (not row)
    /// </param>
    ///	<param name="name" type="String">
    ///		name -  name of user data
    /// </param>

}
dhtmlXGridObject.prototype.gridFromClipboard = function () {
    ///	<summary>
    /// 
    ///		Example: <a href="javascript:void(0)" onclick="mygrid.clearAll(); mygrid.gridFromClipboard();">Load grid from clipboard</a>
    ///	</summary>

}
dhtmlXGridObject.prototype.gridToClipboard = function () {
    ///	<summary>
    /// 
    ///		Example: <a href="javascript:void(0)" onclick="copyData()">Copy entire grid (with tab as delimiter) to clipboard</a>
    /// <script>
    /// function copyData(type,delim){
    ///    mygrid.setCSVDelimiter('\t');
    ///    mygrid.gridToClipboard();
    /// }
    /// </script>
    ///	</summary>

}
dhtmlXGridObject.prototype.gridToGrid = function (rowId, sgrid, tgrid) {
    ///	<summary>
    /// redefine this method in your code to define how grid row values should be used in another grid
    ///		Example: grid.gridToGrid = function(rowId,sgrid,tgrid){
    ///             var z=[];
    ///             for (var i=0; i<sgrid.getColumCount(); i++)    // for each cell in the source grid
    ///                 z[i]=sgrid.cells(rowId,i).getValue();         // prepare data for the target grid
    ///             return z;
    ///         }
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of draged row
    /// </param>
    ///	<param name="sgrid" type="Object">
    ///		sgrid - source grid object
    /// </param>
    ///	<param name="tgrid" type="Object">
    ///		tgrid - target grid object
    /// </param>

}
dhtmlXGridObject.prototype.gridToTreeElement = function (treeObj, treeNodeId, gridRowId) {
    ///	<summary>
    /// Redefine this method in your code to define how grid row values should be used in tree (using input parameters you can change id of new tree node, set label, set userdata blocks etc.).
    ///		Example: grid.gridToTreeElement = function(tree,treeID,gridID){
    ///             return this.cells(gridId,0).getValue();  // take data from the first column as a value for the tree
    ///         }
    ///	</summary>
    ///	<param name="treeObj" type="Object">
    ///		treeObj - object of tree
    /// </param>
    ///	<param name="treeNodeId" type="String">
    ///		treeNodeId - id of node created in tree
    /// </param>
    ///	<param name="gridRowId" type="String">
    ///		gridRowId - id of grid row
    /// </param>

}
dhtmlXGridObject.prototype.groupBy = function (ind, mask) {
    ///	<summary>
    /// group grid content by values of specified column
    ///		Example: //minimal parameters set. Group rows by second column
    ///    mygrid.groupBy(1);
    ///    //maximal parameters set
    ///    mygrid.groupBy(2,["#stat_max","#title","","#stat_total","","#cspan","#cspan","#cspan"]);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - {number} column index to group by
    /// </param>
    ///	<param name="mask" type="String">
    ///		mask - {array} optional, array, each value of which is mapped to the related column. The possible values are:
    /// </param>

}
dhtmlXGridObject.prototype.hidePivot = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.hidePivot();
    ///	</summary>

}
dhtmlXGridObject.prototype.init = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.init();
    ///	</summary>

}
dhtmlXGridObject.prototype.insertColumn = function (ind, header, type, width, sort, align, valign, reserved, columnColor) {
    ///	<summary>
    /// adds new column to the grid. Can be used after grid was initialized. At least one column should be in grid
    ///		Example: //minimal parameters set
    ///    mygrid.insertColumn(10); 
    ///    //maximal parameters set
    ///    mygrid.insertColumn(11,'Some text','ed',120,'na','left','top',null,'red')
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - index of column
    /// </param>
    ///	<param name="header" type="String">
    ///		header - header content of column (optional, blank by default)
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of column (optional, &#039;ed&#039; by default)
    /// </param>
    ///	<param name="width" type="String">
    ///		width - width of column (optional, &#039;100&#039; by default)
    /// </param>
    ///	<param name="sort" type="String">
    ///		sort - sort type of column (optional, &#039;na&#039; by default)
    /// </param>
    ///	<param name="align" type="String">
    ///		align - align of column (optional, &#039;left&#039; by default)
    /// </param>
    ///	<param name="valign" type="String">
    ///		valign - vertical align of column (optional)
    /// </param>
    ///	<param name="reserved" type="String">
    ///		reserved - not used for now
    /// </param>
    ///	<param name="columnColor" type="String">
    ///		columnColor - background color of column (optional)
    /// </param>

}
dhtmlXGridObject.prototype.isColumnHidden = function (ind) {
    ///	<summary>
    /// get show/hidden status of column
    ///		Example: //check if first column is hidden
    ///    var isHidden=mygrid.isColumnHidden(0);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - column index
    /// </param>

}
dhtmlXGridObject.prototype.load = function (url, call, type) {
    ///	<summary>
    /// load data from external file ( xml, json, jsarray, csv )
    ///		Example: //load grid from the external file
    ///    mygrid.load("grid.xml");
    ///    //load grid, execute doAfterRefresh() function after grid was loaded
    ///    mygrid.load("grid.xml",doAfterRefresh);
    ///    //load grid from the external csv file, execute doAfterRefresh() function after grid was loaded
    ///    mygrid.load("grid.csv",doAfterRefresh,csv);
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - url to external file
    /// </param>
    ///	<param name="call" type="String">
    ///		call - after loading callback function, optional, can be ommited
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of data (xml,csv,json,jsarray) , optional, xml by default
    /// </param>

}
dhtmlXGridObject.prototype.loadCSVFile = function (path, afterCall) {
    ///	<summary>
    /// load grid from CSV file
    ///		Example: //load grid from the external csv file
    ///    mygrid.loadCSVFile("grid.csv");
    ///    //load grid from the external csv file, execute doAfterRefresh() function after grid was loaded
    ///    mygrid.loadCSVFile("grid.csv",doAfterRefresh);
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - path to file
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXGridObject.prototype.loadCSVString = function (str) {
    ///	<summary>
    /// load grid from CSV string. This method works in the synchronous mode.
    ///		Example: var  str="11,12,13\n21,22,23\n31,32,33";
    ///    mygrid.loadCSVString(str);
    ///	</summary>
    ///	<param name="str" type="String">
    ///		str - CSV  string
    /// </param>

}
dhtmlXGridObject.prototype.loadHiddenColumnsFromCookie = function (name) {
    ///	<summary>
    /// load sorting order from cookie
    ///		Example: mygrid.load("grid.xml",function(){
    ///       //minimal parameters set
    ///       mygrid.loadHiddenColumnsFromCookie();
    ///       //maximal parameters set
    ///       mygrid.loadHiddenColumnsFromCookie("some_name");
    ///    })
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXGridObject.prototype.loadOpenStates = function (name) {
    ///	<summary>
    /// load open state of TreeGrid in cookie
    ///		Example: mygrid.load("grid.xml",function(){
    ///       //minimal parameters set
    ///       mygrid.loadOpenStates();
    ///       //maximal parameters set
    ///       mygrid.loadOpenStates("some_name");
    ///    })
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>

}
dhtmlXGridObject.prototype.loadOrderFromCookie = function (name) {
    ///	<summary>
    /// load sorting order from cookie
    ///		Example: mygrid.load("grid.xml",function(){
    ///       //minimal parameters set
    ///       mygrid.loadOrderFromCookie();
    ///       //maximal parameters set
    ///       mygrid.loadOrderFromCookie("some_name");
    ///    })
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXGridObject.prototype.loadSizeFromCookie = function (name) {
    ///	<summary>
    /// load grid layout from cookie
    ///		Example: mygrid.load("grid.xml",function(){
    ///       //minimal parameters set
    ///       mygrid.loadSizeFromCookie();
    ///       //maximal parameters set
    ///       mygrid.loadSizeFromCookie("some_name");
    ///    })
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXGridObject.prototype.loadSortingFromCookie = function (name) {
    ///	<summary>
    /// load sorting order from cookie
    ///		Example: mygrid.load("grid.xml",function(){
    ///       //minimal parameters set
    ///       mygrid.loadSortingFromCookie();
    ///       //maximal parameters set
    ///       mygrid.loadSortingFromCookie("some_name");
    ///    })
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXGridObject.prototype.lockRow = function (rowId, mode) {
    ///	<summary>
    /// lock/unlock row for editing
    ///		Example: //lock row with id "row1" for editing
    ///    mygrid.lockRow("row1",true);
    ///    //unlock row with id "row1" for editing
    ///    mygrid.lockRow("row1",false);
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false - lock/unlock
    /// </param>

}
dhtmlXGridObject.prototype.makeFilter = function (id, column, preserve) {
    ///	<summary>
    /// create a filter from any input element (text filter), select (dropdown) or DIV (combobox based on dhtmlxCombo)
    ///		Example: //minimal parameters set
    ///    mygrid.makeFilter("some_el",0); 
    ///    //maximal parameters set
    ///    mygrid.makeFilter("some_el",0,true);
    ///	</summary>
    ///	<param name="id" type="Object">
    ///		id - {string|object} input id or input html object
    /// </param>
    ///	<param name="column" type="Number">
    ///		column - {number} index of column
    /// </param>
    ///	<param name="preserve" type="Boolean">
    ///		preserve - {true|false} filter current state or initial one (optional, false by default)
    /// </param>

}
dhtmlXGridObject.prototype.makePivot = function (cont, details) {
    ///	<summary>
    /// show pivot table based on grid
    ///		Example: //minimal parameters set
    ///    mygrid.makePivot();
    ///    //make pivot in the external html container
    ///    mygrid.makePivot('pivot_container');
    ///    //limited field set
    ///    mygrid.makePivot('pivot_container',{column_list:['Title','Author','Money']})
    ///    //predefined set
    ///    mygrid.makePivot('pivot_container',{action:3,value:1,x:3,y:2})
    ///    //predefined set + readonly
    ///    mygrid.makePivot('pivot_container',{readonly:true,action:3,value:1,x:3,y:2})
    ///	</summary>
    ///	<param name="cont" type="String">
    ///		cont - html container in which pivot rendered (optional, by default pivot will be rendered over existing grid)
    /// </param>
    ///	<param name="details" type="String">
    ///		details - collection of settings:
    /// </param>

}
dhtmlXGridObject.prototype.makeSearch = function (id, column) {
    ///	<summary>
    /// create a search box (set selection to the row with found value) from any input
    ///		Example: mygrid.makeSearch("input_id",0);
    ///	</summary>
    ///	<param name="id" type="Object">
    ///		id - {string|object} input id or input html object
    /// </param>
    ///	<param name="column" type="Number">
    ///		column - {number} index of column
    /// </param>

}
dhtmlXGridObject.prototype.mark = function (rid, cindex, fl) {
    ///	<summary>
    /// sets selection or removes selection from specified cell
    ///		Example: //mark cell
    ///    mygrid.mark('row1',0,true);
    ///    //unmark cell
    ///    mygrid.mark('row1',0,false);
    ///	</summary>
    ///	<param name="rid" type="Number">
    ///		r - row object or row index
    /// </param>
    ///	<param name="cindex" type="Number">
    ///		cInd - cell index
    /// </param>
    ///	<param name="fl" type="Boolean">
    ///		state - true or false
    /// </param>

}
dhtmlXGridObject.prototype.moveColumn = function (oldInd, newInd) {
    ///	<summary>
    /// moves column of specified index to new position
    ///		Example: //move 1st column before 3rd column
    ///    mygrid.mygrid.moveColumn(0,2);
    ///	</summary>
    ///	<param name="oldInd" type="Number">
    ///		oldInd - current index of column
    /// </param>
    ///	<param name="newInd" type="Number">
    ///		newInd - index of column, before each moved one will be inserted
    /// </param>

}
dhtmlXGridObject.prototype.moveRow = function (rowId, mode, targetId, targetGrid) {
    ///	<summary>
    /// move row
    ///		Example: //move row up
    ///   mygrid1.moveRow("row1","up");
    ///   //move row down
    ///   mygrid1.moveRow("row1","down");
    ///   //move row with id "row1" after row with id "row2" in grid[2]
    ///   mygrid1.moveRow("row1","row_sibling","row2",mygrid2);
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - source row Id
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - moving mode (up,down,row_sibling)
    /// </param>
    ///	<param name="targetId" type="String">
    ///		targetId - target row  in row_sibling mode (optional)
    /// </param>
    ///	<param name="targetGrid" type="String">
    ///		targetGrid - used for moving between grids (optional)
    /// </param>

}
dhtmlXGridObject.prototype.moveRowDown = function (row_id) {
    ///	<summary>
    /// moves row one position down if possible
    ///		Example: <a href="javascript:void(0)" onclick="mygrid.moveRowDown(mygrid.getSelectedId())">Move selected row down</a>
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id
    /// </param>

}
dhtmlXGridObject.prototype.moveRowTo = function (srowId, trowId, mode, dropmode, sourceGrid, targetGrid) {
    ///	<summary>
    /// move row
    ///		Example: //move row with id "row1" after row with id "row2"
    ///   mygrid1.moveRowTo("row1","row2","move");
    ///   //copy row with id "row1" from grid[1] as child of row with id "row2" in grid[2]
    ///   var movedId=mygrid1.moveRowTo("row1","row2","copy","child",mygrid1,mygrid2);
    ///	</summary>
    ///	<param name="srowId" type="String">
    ///		srowId - source row Id
    /// </param>
    ///	<param name="trowId" type="String">
    ///		trowId - target row Id
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - "move" or "copy"
    /// </param>
    ///	<param name="dropmode" type="String">
    ///		dropmode - "sibling" or "child" (optional, "sibling" by default)
    /// </param>
    ///	<param name="sourceGrid" type="Object">
    ///		sourceGrid - source grid object, used for moving between grids (optional, current grid by default)
    /// </param>
    ///	<param name="targetGrid" type="Object">
    ///		targetGrid - target grid object, used for moving between grids (optional, current grid by default)
    /// </param>

}
dhtmlXGridObject.prototype.moveRowUp = function (row_id) {
    ///	<summary>
    /// moves row one position up if possible
    ///		Example: <a href="javascript:void(0)" onclick="mygrid.moveRowUp(mygrid.getSelectedId())">Move selected row up</a>
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id
    /// </param>

}
dhtmlXGridObject.prototype.parse = function (data, type) {
    ///	<summary>
    /// load data from local datasource (xml string, csv string, xml island, xml object, json objecs , javascript array). This method works in the synchronous mode.
    ///		Example: //parse grid from the xml string
    ///    mygrid.parse(data);
    ///    //parse grid from the csv string
    ///    mygrid.parse(data,"csv");
    ///    //parse grid from the javascript array
    ///    mygrid.parse(data,"jsarray");
    ///    //parse grid from the json string
    ///    mygrid.parse(data,"json");
    ///	</summary>
    ///	<param name="data" type="Object">
    ///		data - string or object
    /// </param>
    ///	<param name="type" type="String">
    ///		type - data type (xml,json,jsarray,csv), optional, data threated as xml by default
    /// </param>

}
dhtmlXGridObject.prototype.pasteBlockFromClipboard = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.attachEvent("onKeyPress",onKeyPressed);
    /// ...
    /// function onKeyPressed(code,ctrl,shift){
    /// 	if(code==67&&ctrl){
    /// 	    mygrid.setCSVDelimiter("\t")
    /// 	    mygrid.copyBlockToClipboard()
    /// 	}
    /// 	if(code==86&&ctrl){
    /// 	    mygrid.pasteBlockFromClipboard()
    /// 	}
    /// 	return true;
    /// }
    ///	</summary>

}
dhtmlXGridObject.prototype.preventIECaching = function (mode) {
    ///	<summary>
    /// 
    ///		Example: //enable prevent IE caching mode
    ///    mygrid.preventIECaching(true);
    ///    //disable prevent IE caching mode
    ///    mygrid.preventIECaching(false);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - enable/disable random values in URLs (disabled by default)
    /// </param>

}
dhtmlXGridObject.prototype.printView = function (before, after) {
    ///	<summary>
    /// generate print friendly view
    ///		Example: //minimal parameters set
    ///    mygrid.printView();
    ///    //maximal parameters set
    ///    mygrid.printView('<div>before</div>','<strong>after</strong>');
    ///	</summary>
    ///	<param name="before" type="String">
    ///		before - {string} html which will be placed before printed grid
    /// </param>
    ///	<param name="after" type="String">
    ///		after - {string} html which will be placed after printed grid
    /// </param>

}
dhtmlXGridObject.prototype.refreshFilters = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.refreshFilters();
    ///	</summary>

}
dhtmlXGridObject.prototype.rowToClipboard = function (rowId) {
    ///	<summary>
    /// copy value of row to clipboard
    ///		Example: <a href="javascript:void(0)" onclick="copyData()">Copy selected row (with tab as delimiter) to clipboard</a>
    /// <script>
    /// function copyData(type,delim){
    ///    mygrid.setCSVDelimiter('\t');
    ///    mygrid.rowToClipboard();
    /// }
    /// </script>
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row (optional, use selected row by default)
    /// </param>

}
dhtmlXGridObject.prototype.rowToDragElement = function (id) {
    ///	<summary>
    /// redefine this method in your code to define how grid row values should be displaied while draging
    ///		Example: grid.rowToDragElement=function(id){
    ///             //any custom logic here
    ///             var text = "<img src='some.gif'> - "+grid.cells(id,0).getValue(); // prepare a text string
    ///             return text;
    ///         }
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of grid row
    /// </param>

}
dhtmlXGridObject.prototype.saveHiddenColumnsToCookie = function (name, cookie_param) {
    ///	<summary>
    /// save hidden columns to cookie
    ///		Example: mygrid.attachEvent("onColumnHidden", function(index,state){
    ///           //minimal parameters set
    ///           mygrid.saveHiddenColumnsToCookie();
    ///           //maximal parameters set
    ///           mygrid.saveHiddenColumnsToCookie("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///    });
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.saveOpenStates = function (name, cookie_param) {
    ///	<summary>
    /// store opene state of TreeGrid in cookie
    ///		Example: mygrid.attachEvent("onOpenEnd", function(index,state){
    ///           //minimal parameters set
    ///           mygrid.saveOpenStates();
    ///           //maximal parameters set
    ///           mygrid.saveOpenStates("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///    });
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.saveOrderToCookie = function (name, cookie_param) {
    ///	<summary>
    /// saves column order to cookie
    ///		Example: mygrid.attachEvent("onAfterCMove", function(cInd,posInd){
    ///           //minimal parameters set
    ///           mygrid.saveOrderToCookie();
    ///           //maximal parameters set
    ///           mygrid.saveOrderToCookie("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///    });
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.saveSizeToCookie = function (name, cookie_param) {
    ///	<summary>
    /// save grid layout to cookie
    ///		Example: mygrid.attachEvent("onResizeEnd", function(obj){
    ///           //minimal parameters set
    ///           mygrid.saveSizeToCookie();
    ///           //maximal parameters set
    ///           mygrid.saveSizeToCookie("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///    });
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.saveSortingToCookie = function (name, cookie_param) {
    ///	<summary>
    /// save sorting order to cookie
    ///		Example: mygrid.attachEvent("onAfterSorting", function(index,type,direction){
    ///           //minimal parameters set
    ///           mygrid.saveSortingToCookie();
    ///           //maximal parameters set
    ///           mygrid.saveSortingToCookie("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///    });
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.selectAll = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.selectAll();
    ///	</summary>

}
dhtmlXGridObject.prototype.selectCell = function (r, cInd, fl, preserve, edit, show) {
    ///	<summary>
    /// set selection to specified row-cell
    ///		Example: //select second cell from the first row. 
    ///    mygrid.selectCell(0,1);
    ///    //select second cell from the first row, call "onRowSelect" event, preserve previously selected rows
    ///    mygrid.selectCell(0,1,true,true);
    ///    //select second cell from the 11th row, switch cell to the edit mode
    ///    <button onclick="(arguments[0]||window.event).cancelBubble=true;mygrid.selectCell(10,1,false,false,true)">select cell</button>
    ///	</summary>
    ///	<param name="r" type="Number">
    ///		r - row object or row index
    /// </param>
    ///	<param name="cInd" type="Number">
    ///		cInd - cell index
    /// </param>
    ///	<param name="fl" type="Boolean">
    ///		[fl] - true if to call onRowSelect function (optional, false by default)
    /// </param>
    ///	<param name="preserve" type="Boolean">
    ///		preserve - preserve previously selected rows true/false (optional, false by default). Multi select mode should be enabled.
    /// </param>
    ///	<param name="edit" type="String">
    ///		edit - switch selected cell to edit mode (optional, false by default)
    /// </param>
    ///	<param name="show" type="Boolean">
    ///		show - true/false - scroll row to view (optional, true by default)
    /// </param>

}
dhtmlXGridObject.prototype.selectRow = function (rIndex, fl, preserve, show) {
    ///	<summary>
    /// selects row (and first cell of it)
    ///		Example: //select first row in grid
    ///    mygrid.selectRow(0);
    ///    //select first row in grid, call "onRowSelect" function, preserve previously selected rows, scroll row to view
    ///    mygrid.selectRow(0,true,true,true);
    ///	</summary>
    ///	<param name="rIndex" type="Number">
    ///		rIndex - row index or row object
    /// </param>
    ///	<param name="fl" type="Boolean">
    ///		fl - if true, then call function on select (optional, false by default)
    /// </param>
    ///	<param name="preserve" type="Boolean">
    ///		preserve - preserve previously selected rows true/false (false by default). Multi select mode should be enabled.
    /// </param>
    ///	<param name="show" type="Boolean">
    ///		show - true/false - scroll row to view, true by defaul
    /// </param>

}
dhtmlXGridObject.prototype.selectRowById = function (row_id, preserve, show, call) {
    ///	<summary>
    /// selects row by ID
    ///		Example: //minimal parameters set
    ///    mygrid.selectRowById('row1');
    ///    //maximal parameters set
    ///    mygrid.selectRowById('row1',true,true,true);
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>
    ///	<param name="preserve" type="Boolean">
    ///		preserve - {true|false} preserve previously selected (optional, false by default). Multi select mode should be enabled.
    /// </param>
    ///	<param name="show" type="Boolean">
    ///		show - true/false - scroll row to view (optional, true by default)
    /// </param>
    ///	<param name="call" type="Boolean">
    ///		call - true if to call onRowSelect function (optional, false by default)
    /// </param>

}
dhtmlXGridObject.prototype.serialize = function () {
    ///	<summary>
    /// 
    ///		Example: var str=mygrid.serialize();
    ///	</summary>

}
dhtmlXGridObject.prototype.serializeToCSV = function (textmode) {
    ///	<summary>
    /// serialize to CSV string
    ///		Example: //serialize grid to CSV format
    ///    var csv=mygrid.serializeToCSV();
    ///    //serialize grid to CSV format, only text values will be serialized
    ///    var csv=mygrid.serializeToCSV(true);
    ///	</summary>
    ///	<param name="textmode" type="Boolean">
    ///		text only - {true|false} optional, force serialization of text values (skip HTML elements), false by default
    /// </param>

}
dhtmlXGridObject.prototype.setAwaitedRowHeight = function (height) {
    ///	<summary>
    /// set height which will be used in smart rendering mode for row calculation, function need to be used if you use custom skin for grid which changes default row height
    ///		Example: mygrid.setAwaitedRowHeight(25);
    ///	</summary>
    ///	<param name="height" type="String">
    ///		{int} height - awaited height of row
    /// </param>

}
dhtmlXGridObject.prototype.setCSVDelimiter = function (str) {
    ///	<summary>
    /// change csv delimiter
    ///		Example: mygrid.setCSVDelimiter(":")
    /// 	var  str="11:12:13\n21:22:23\n31:32:33";
    /// 	mygrid.loadCSVString(str);
    ///	</summary>
    ///	<param name="str" type="String">
    ///		str - delimer used in CSV operations, comma by default (only single char delimeters allowed)
    /// </param>

}
dhtmlXGridObject.prototype.setCellExcellType = function (rowId, cellIndex, type) {
    ///	<summary>
    /// set excell type for cell in question
    ///		Example: //set type "txt" to the second cell in the row with id "row1"
    ///    mygrid.setCellExcellType("row1",1,"txt");
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - row ID
    /// </param>
    ///	<param name="cellIndex" type="Number">
    ///		cellIndex - cell index
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of excell (code like "ed", "txt", "ch" etc.)
    /// </param>

}
dhtmlXGridObject.prototype.setCellTextStyle = function (row_id, ind, styleString) {
    ///	<summary>
    /// sets style to cell
    ///		Example: mygrid.setCellTextStyle("row1",0,"color:red;border:1px solid gray;");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - cell index
    /// </param>
    ///	<param name="styleString" type="String">
    ///		styleString - style string in common format (ex: "color:red;border:1px solid gray;")
    /// </param>

}
dhtmlXGridObject.prototype.setCheckedRows = function (cInd, v) {
    ///	<summary>
    /// set value for all checkboxes in specified column
    ///		Example: //check all checkboxes in the first column
    ///    mygrid.setCheckedRows(0,1);
    ///    //uncheck all checkboxes in the first column
    ///    mygrid.setCheckedRows(0,0);
    ///	</summary>
    ///	<param name="cInd" type="Number">
    ///		col_ind - column index
    /// </param>
    ///	<param name="v" type="String">
    ///		v - value, 0 - not checked, any other value - checked
    /// </param>

}
dhtmlXGridObject.prototype.setColAlign = function (alStr) {
    ///	<summary>
    /// set align of values in columns
    ///		Example: mygrid.setColAlign("right,left,center,justify")
    ///	</summary>
    ///	<param name="alStr" type="String">
    ///		alStr - list of align values (possible values are: right,left,center,justify). Default delimiter is ","
    /// </param>

}
dhtmlXGridObject.prototype.setColLabel = function (col, label, ind) {
    ///	<summary>
    /// sets new column header label
    ///		Example: //set new label for the first column
    ///    mygrid.setColLabel(0,"New Column Label");
    ///    //set new label for the second line of the first column
    ///    mygrid.setColLabel(0,"New Column Label",1);
    ///	</summary>
    ///	<param name="col" type="Number">
    ///		col - header column index
    /// </param>
    ///	<param name="label" type="String">
    ///		label - new label for the cpecified header&#039;s column. Can contai img:[imageUrl]Text Label
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - header row index (default is 1)
    /// </param>

}
dhtmlXGridObject.prototype.setColSorting = function (sortStr) {
    ///	<summary>
    /// set column sort types (avaialble: str, int, date, na or function object for custom sorting)
    ///		Example: mygrid.setColSorting("int,str,date,na,sortingFunction")
    ///	</summary>
    ///	<param name="sortStr" type="String">
    ///		sortStr - sort codes list with default delimiter
    /// </param>

}
dhtmlXGridObject.prototype.setColTypes = function (typeStr) {
    ///	<summary>
    /// set column types
    ///		Example: mygrid.setColTypes("dyn,ed,txt,price,ch,coro,ra,ro");
    ///	</summary>
    ///	<param name="typeStr" type="String">
    ///		typeStr - type codes list (default delimiter is ",")
    /// </param>

}
dhtmlXGridObject.prototype.setColVAlign = function (valStr) {
    ///	<summary>
    /// set vertical align of columns
    ///		Example: mygrid.setColVAlign("top,middle,bottom,top,top,sub");
    ///	</summary>
    ///	<param name="valStr" type="String">
    ///		valStr - vertical align values list for columns (possible values are: baseline,sub,super,top,text-top,middle,bottom,text-bottom)
    /// </param>

}
dhtmlXGridObject.prototype.setColWidth = function (ind, value) {
    ///	<summary>
    /// sets width of specified column in pixels (soen&#039;t works with procent based grid)
    ///		Example: //set first column width
    ///    mygrid.setColWidth(0,"150");
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - column index
    /// </param>
    ///	<param name="value" type="String">
    ///		value - new width value
    /// </param>

}
dhtmlXGridObject.prototype.setColspan = function (row_id, col_ind, colspan) {
    ///	<summary>
    /// dynamically sets colspan in row starting from specified column index
    ///		Example: mygrid.enableColSpan(true);
    ///    //merge first 2 cells in the row with id "row1"
    ///    mygrid.setColspan("row1",0,2);
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>
    ///	<param name="col_ind" type="Number">
    ///		col_id - index of column
    /// </param>
    ///	<param name="colspan" type="String">
    ///		colspan - size of colspan
    /// </param>

}
dhtmlXGridObject.prototype.setColumnColor = function (clr) {
    ///	<summary>
    /// colorize columns  background.
    ///		Example: //set colors for the first 3 columns
    ///    mygrid.setColumnColor("white,#d5f1ff,#d5f1ff");
    ///	</summary>
    ///	<param name="clr" type="String">
    ///		clr - comma delimited colors list
    /// </param>

}
dhtmlXGridObject.prototype.setColumnExcellType = function (colIndex, type) {
    ///	<summary>
    /// set excell type for all cells in specified column
    ///		Example: //set type "ch" for the cells in the 3rd column
    ///    mygrid.setColumnExcellType(2,"ch");
    ///	</summary>
    ///	<param name="colIndex" type="Number">
    ///		colIndex - column index
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of excell
    /// </param>

}
dhtmlXGridObject.prototype.setColumnHidden = function (ind, state) {
    ///	<summary>
    /// hide/show column
    ///		Example: //hide first column
    ///    mygrid.setColumnHidden(0,true);
    ///    //show first column
    ///    mygrid.setColumnHidden(0,false);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - column index
    /// </param>
    ///	<param name="state" type="Boolean">
    ///		state - true/false - hide/show column
    /// </param>

}
dhtmlXGridObject.prototype.setColumnId = function (ind, id) {
    ///	<summary>
    /// sets id to specified column.
    ///		Example: //set first column id
    ///    mygrid.setColumnId(0,"column1");
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind- index of column
    /// </param>
    ///	<param name="id" type="String">
    ///		id- id of column
    /// </param>

}
dhtmlXGridObject.prototype.setColumnIds = function (ids) {
    ///	<summary>
    /// sets id to every column. Can be used then to retreive the index of the desired colum
    ///		Example: mygrid.setColumnIds("sales,book,author,price,store,shipping,best,date");
    ///	</summary>
    ///	<param name="ids" type="String">
    ///		ids - comma delimitered list of ids or empty if to use values set earlier
    /// </param>

}
dhtmlXGridObject.prototype.setColumnMinWidth = function (width, ind) {
    ///	<summary>
    /// set minimum column width (works only for manual resizing)
    ///		Example: //set first column min width
    ///    mygrid.setColumnMinWidth(50,0);
    ///    //set columns min widths
    ///    mygrid.setColumnMinWidth("50,100,100,150,200,100,150");
    ///	</summary>
    ///	<param name="width" type="String">
    ///		width - minimum column width, can be set for specified column, or as comma separated list for all columns
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - column index
    /// </param>

}
dhtmlXGridObject.prototype.setColumnsVisibility = function (list) {
    ///	<summary>
    /// set list of visible/hidden columns
    ///		Example: //hide first column
    ///    mygrid.setColumnsVisibility("true,false,false,false,false");
    ///	</summary>
    ///	<param name="list" type="Boolean">
    ///		list - list of true/false separated by comma, false - show column, true - hide column
    /// </param>

}
dhtmlXGridObject.prototype.setCustomSorting = function (func, col) {
    ///	<summary>
    /// set custom sorting (custom sort has three params - valueA,valueB,order; where order can be asc or des)
    ///		Example: //second column is sorted by number of symbols in text
    ///    mygrid.setCustomSorting(sort_custom,1);
    ///    ...
    ///    function sort_custom(a,b,order){
    ///         var n=a.length;
    ///         var m=b.length;
    /// 	if(order=="asc")
    /// 		return n>m?1:-1;
    /// 	else
    /// 		return n<m?1:-1;
    ///     }
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - function to use for comparison
    /// </param>
    ///	<param name="col" type="Number">
    ///		col - index of column to apply custom sorting to
    /// </param>

}
dhtmlXGridObject.prototype.setDateFormat = function (mask) {
    ///	<summary>
    /// set mask for date formatting in grid (works for "dhxCalendar" and "dhxCalendarA" types only)
    ///		Example: mygrid.setDateFormat("%m/%d/%Y");
    ///	</summary>
    ///	<param name="mask" type="String">
    ///		mask - date mask, d,m,y will mean day,month,year; for example "%d/%m/%y" - 22/05/1985
    /// </param>

}
dhtmlXGridObject.prototype.setDelimiter = function (delim) {
    ///	<summary>
    /// set delimiter character used in list values (default is ",")
    ///		Example: mygrid.setDelimiter(";");
    ///    mygrid.setHeader("First Column;Second Column;Third Column");
    ///	</summary>
    ///	<param name="delim" type="String">
    ///		delim - delimiter as string
    /// </param>

}
dhtmlXGridObject.prototype.setDragBehavior = function (mode) {
    ///	<summary>
    /// set Drag-And-Drop behavior
    ///		Example: mygrid.setDragBehavior(sibling);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - behavior name
    /// </param>

}
dhtmlXGridObject.prototype.setDragText = function (single, plural) {
    ///	<summary>
    /// define text (single and plural forms) for extended visual appearence of drag-n-drop
    ///		Example: mygrid.setDragText("row is moving", "rows are moving");
    ///	</summary>
    ///	<param name="single" type="String">
    ///		single - single form (like "product")
    /// </param>
    ///	<param name="plural" type="String">
    ///		plural - plural form (if omitted, then "s" will be added to single form)
    /// </param>

}
dhtmlXGridObject.prototype.setEditable = function (mode) {
    ///	<summary>
    /// manage editibility of the grid
    ///		Example: //set grid editable
    ///    mygrid.setEditable(true);
    ///    //set grid not editable
    ///    mygrid.setEditable(false);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - set not editable if FALSE, set editable otherwise
    /// </param>

}
dhtmlXGridObject.prototype.setExternalTabOrder = function (start, end) {
    ///	<summary>
    /// sets elements which get focus when tab is pressed in the last or first (tab+shift) cell
    ///		Example: mygrid.setExternalTabOrder("elem1","elem2");
    ///	</summary>
    ///	<param name="start" type="Object">
    ///		start - html object or its id - gets focus when tab+shift are pressed in the first cell
    /// </param>
    ///	<param name="end" type="Object">
    ///		end - html object or its id - gets focus when tab is pressed in the last cell
    /// </param>

}
dhtmlXGridObject.prototype.setFieldName = function (mask) {
    ///	<summary>
    /// allows to define input name which will be used for data sending, name may contain next auto-replaced elements:
    ///		Example: mygrid.setFieldName("{GRID_ID}[{ROW_INDEX}].{COLUMN_ID}"); // gridbox[0].columnA
    ///	</summary>
    ///	<param name="mask" type="String">
    ///		GRID_ID - ID of grids container,
    /// </param>

}
dhtmlXGridObject.prototype.setFooterLabel = function (c, label, ind) {
    ///	<summary>
    /// sets new label for cell in footer
    ///		Example: //set new label for the first cell in the first footer's line
    ///    mygrid.setFooterLabel(0,'New Label');
    ///    //set new label with image for the first cell in the second footer's line
    ///    mygrid.setFooterLabel(0,'img:[../codebase/imgs/image.gif]New Label',1);
    ///	</summary>
    ///	<param name="c" type="Number">
    ///		col - column index
    /// </param>
    ///	<param name="label" type="String">
    ///		label - new label for the cpecified footer&#039;s column. Can contain img:[imageUrl]Text Label
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - footer row index (optional, 1 by default)
    /// </param>

}
dhtmlXGridObject.prototype.setHeader = function (hdrStr, splitSign, styles) {
    ///	<summary>
    /// set header label and default params for new headers
    ///		Example: //setting columns labels
    ///    mygrid.setHeader("A,B,C");
    ///    //setting columns labels and it's styles
    ///    mygrid.setHeader("A,B,C",null,["text-align:right;","text-align:left;","text-align:center"]);
    ///	</summary>
    ///	<param name="hdrStr" type="String">
    ///		hdrStr - header string with delimiters
    /// </param>
    ///	<param name="splitSign" type="String">
    ///		splitSign - string used as a split marker, optional. Default is "#cspan"
    /// </param>
    ///	<param name="styles" type="String">
    ///		styles - array of header styles
    /// </param>

}
dhtmlXGridObject.prototype.setIconPath = function (path) {
    ///	<summary>
    /// set path to external images used in grid ( tree and img column types )
    ///		Example: mygrid.setIconPath("../codebase/imgs/icons_greenfolders/");
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - url (or relative path) of images folder with closing "/"
    /// </param>

}
dhtmlXGridObject.prototype.setImagePath = function (path) {
    ///	<summary>
    /// set path to grid internal images (sort direction, any images used in editors, checkbox, radiobutton)
    ///		Example: mygrid.setImagePath("../codebase/imgs/");
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - url (or relative path) of images folder with closing "/"
    /// </param>

}
dhtmlXGridObject.prototype.setInitWidths = function (wp) {
    ///	<summary>
    /// set width of columns in pixels
    ///		Example: mygrid.setInitWidths("150,100,100,100,100");
    ///	</summary>
    ///	<param name="wp" type="String">
    ///		wp - list of column width in pixels
    /// </param>

}
dhtmlXGridObject.prototype.setInitWidthsP = function (wp) {
    ///	<summary>
    /// set width of columns in percents
    ///		Example: mygrid.setInitWidthsP("50,40,10");
    ///	</summary>
    ///	<param name="wp" type="String">
    ///		wp - list of column width in percents. Sum of the column widths must be equal to 100.
    /// </param>

}
dhtmlXGridObject.prototype.setMathRound = function (digits) {
    ///	<summary>
    /// enable/disable rounding while math calculations
    ///		Example: mygrid.setMathRound(2);
    ///	</summary>
    ///	<param name="digits" type="String">
    ///		digits - set how many digits must be rounded, set 0 for disabling
    /// </param>

}
dhtmlXGridObject.prototype.setNoHeader = function (fl) {
    ///	<summary>
    /// create grid with no header. Call before initialization, but after setHeader. setHeader have to be called in any way as it defines number of columns
    ///		Example: mygrid.setNoHeader(true);
    ///	</summary>
    ///	<param name="fl" type="String">
    ///		fl - true to use no header in the grid
    /// </param>

}
dhtmlXGridObject.prototype.setNumberFormat = function (mask, cInd, p_sep, d_sep) {
    ///	<summary>
    /// 
    ///		Example: mygrid.setNumberFormat("0,000.00",index,".",",");
    ///	</summary>
    ///	<param name="mask" type="String">
    ///		mask - numeric mask; for example 0,000.00 - 1,234.56
    /// </param>
    ///	<param name="cInd" type="Number">
    ///		cInd - column index
    /// </param>
    ///	<param name="p_sep" type="String">
    ///		p_sep - char used as decimal separator (point by default)
    /// </param>
    ///	<param name="d_sep" type="String">
    ///		d_sep - char used as groups part separator (comma by default)
    /// </param>

}
dhtmlXGridObject.prototype.setPagingSkin = function (name) {
    ///	<summary>
    /// allows to set custom paging skin
    ///		Example: //set "bricks" paging skin
    ///    mygrid.setPagingSkin("bricks");
    ///    //set "toolbar" paging skin with "dhx_blue" toolbar's skin
    ///    mygrid.setPagingSkin("toolbar")
    ///    //set "toolbar" paging skin with "dhx_black" toolbar's skin
    ///    mygrid.setPagingSkin("toolbar","dhx_black");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - skin name (default,toolbar,bricks)
    /// </param>

}
dhtmlXGridObject.prototype.setPagingTemplates = function (navigation_template, info_template) {
    ///	<summary>
    /// allows to set paging templates for default skin
    ///		Example: mygrid.setPagingTemplates("Pages - [current:0] [current:+1] [current:+2] , from [total] rows","Pages <b>[from]-[to]</b> of <b>[total]</b>");
    ///	</summary>
    ///	<param name="navigation_template" type="String">
    ///		navigation_template - template for paging controls zone
    /// </param>
    ///	<param name="info_template" type="String">
    ///		info_template - template for paging state zone
    /// </param>

}
dhtmlXGridObject.prototype.setPagingWTMode = function (navButtons, navLabel, pageSelect, perPageSelect) {
    ///	<summary>
    /// configure paging with toolbar mode ( must be called BEFORE enablePaging)
    ///		Example: //disable page selector
    ///    mygrid.setPagingWTMode(true,true,false,true);
    ///    //disable row per page selector
    ///    mygrid.setPagingWTMode(true,true,true,false);
    ///	</summary>
    ///	<param name="navButtons" type="Boolean">
    ///		navButtons - {true|false} enable/disable navigation buttons
    /// </param>
    ///	<param name="navLabel" type="Boolean">
    ///		navLabel - {true|false} enable/disable navigation label
    /// </param>
    ///	<param name="pageSelect" type="Boolean">
    ///		pageSelect - {true|false} enable/disable page selector
    /// </param>
    ///	<param name="perPageSelect" type="Boolean">
    ///		perPageSelect - {true|false} enable/disable rows per  page selector
    /// </param>

}
dhtmlXGridObject.prototype.setRowAttribute = function (rId, name, value) {
    ///	<summary>
    /// sets row attribute
    ///		Example: <?xml version='1.0' encoding='iso-8859-1'?>
    ///         <rows>
    ///             <row id="unique_rowid" some="data">
    ///                     <cell some="data">cell content</cell>
    ///             </row>
    ///         </rows>
    ///    ...
    ///    var rowAttr = grid.setRowAttribute("unique_rowid","some","new value");
    ///	</summary>
    ///	<param name="rId" type="String">
    ///		rId - row ID
    /// </param>
    ///	<param name="name" type="String">
    ///		name - attribute name
    /// </param>
    ///	<param name="value" type="String">
    ///		value - new attribute&#039;s value
    /// </param>

}
dhtmlXGridObject.prototype.setRowColor = function (row_id, color) {
    ///	<summary>
    /// sets background color of row (via bgcolor attribute)
    ///		Example: mygrid.setRowColor("row1","red");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>
    ///	<param name="color" type="String">
    ///		color - color value
    /// </param>

}
dhtmlXGridObject.prototype.setRowExcellType = function (rowId, type) {
    ///	<summary>
    /// set excell type for all cells in specified row
    ///		Example: //set "ra_str" type for the cells in the row with id "row1"
    ///    mygrid.setRowExcellType("row1","ra_str");
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - row ID
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of excell
    /// </param>

}
dhtmlXGridObject.prototype.setRowHidden = function (id, state) {
    ///	<summary>
    /// hide/show row (warning! - this command doesn&#039;t affect row indexes, only visual appearance)
    ///		Example: //hide row with id "row1"
    ///    mygrid.setRowHidden("row1",true);
    ///    //show row with id "row1"
    ///    mygrid.setRowHidden("row1",false);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - row ID
    /// </param>
    ///	<param name="state" type="Boolean">
    ///		state - true/false - hide/show row
    /// </param>

}
dhtmlXGridObject.prototype.setRowId = function (ind, row_id) {
    ///	<summary>
    /// sets new id for row by its index
    ///		Example: //set new id for the first row
    ///    mygrid.setRowId(0,"new_row_id");
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - row index
    /// </param>
    ///	<param name="row_id" type="String">
    ///		row_id - new row id
    /// </param>

}
dhtmlXGridObject.prototype.setRowTextBold = function (row_id) {
    ///	<summary>
    /// sets row text BOLD
    ///		Example: mygrid.setRowTextBold("row1");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>

}
dhtmlXGridObject.prototype.setRowTextNormal = function (row_id) {
    ///	<summary>
    /// sets row text weight to normal
    ///		Example: mygrid.setRowTextNormal("row1");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>

}
dhtmlXGridObject.prototype.setRowTextStyle = function (row_id, styleString) {
    ///	<summary>
    /// sets style to row.
    ///		Example: grid.setRowTextStyle("r123", "background-color: red; font-family: arial;");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>
    ///	<param name="styleString" type="String">
    ///		styleString - style string in common format (exmpl: "color:red;border:1px solid gray;")
    /// </param>

}
dhtmlXGridObject.prototype.setRowspan = function (rowID, colInd, length) {
    ///	<summary>
    /// set rowspan with specified length starting from specified cell
    ///		Example: mygrid.setRowspan("row1",0,2);
    ///	</summary>
    ///	<param name="rowID" type="String">
    ///		rowID - row Id
    /// </param>
    ///	<param name="colInd" type="Number">
    ///		colInd - column index
    /// </param>
    ///	<param name="length" type="String">
    ///		length - length of rowspan
    /// </param>

}
dhtmlXGridObject.prototype.setSerializableColumns = function (list) {
    ///	<summary>
    /// configure which column must be serialized (if you do not use this method, then all columns will be serialized)
    ///		Example: //serialize only 1st and 4th columns
    ///    mygrid.setSerializableColumns("true,false,false,true,false,false,false")
    ///	</summary>
    ///	<param name="list" type="Boolean">
    ///		list - list of true/false values separated by comma, if list empty then all fields will be serialized
    /// </param>

}
dhtmlXGridObject.prototype.setSerializationLevel = function (userData, selectedAttr, config, changedAttr, onlyChanged, asCDATA) {
    ///	<summary>
    /// 
    ///		Example: mygrid.setSerializationLevel(true,false,true,false,true,true);
    ///	</summary>
    ///	<param name="userData" type="String">
    ///		userData - enable/disable user data serialization
    /// </param>
    ///	<param name="selectedAttr" type="String">
    ///		selectedAttr -  include "selected" row&#039;s attribute in result XML
    /// </param>
    ///	<param name="config" type="String">
    ///		config - serialize grid configuration (only information about grid structure)
    /// </param>
    ///	<param name="changedAttr" type="String">
    ///		changedAttr - include "changed" cell&#039;s attribute in result XML
    /// </param>
    ///	<param name="onlyChanged" type="String">
    ///		onlyChanged - include only changed  rows in result XML
    /// </param>
    ///	<param name="asCDATA" type="String">
    ///		asCDATA - output cell values as CDATA sections (prevent invalid XML)
    /// </param>

}
dhtmlXGridObject.prototype.setSizes = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.setSizes();
    ///	</summary>

}
dhtmlXGridObject.prototype.setSkin = function (name) {
    ///	<summary>
    /// set one of predefined css styles (xp, mt, gray, light, clear, modern, sb_dark)
    ///		Example: mygrid.setSkin("light");//set "light" skin to the grid
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - style name
    /// </param>

}
dhtmlXGridObject.prototype.setSortImgState = function (state, ind, order, row) {
    ///	<summary>
    /// sets position and visibility of sort arrow
    ///		Example: //minimal parameters set
    ///    mygrid.setSortImgState(true,1)
    ///    //maximal parameters set
    ///    mygrid.setSortImgState(true,1,"des",2)
    ///    //hide sorting image
    ///    mygrid.setSortImgState(false)
    ///	</summary>
    ///	<param name="state" type="Boolean">
    ///		state - true/false - show/hide image
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - index of column
    /// </param>
    ///	<param name="order" type="String">
    ///		order - asc/desc - type of image (optional, "asc" by default)
    /// </param>
    ///	<param name="row" type="Number">
    ///		row - one based index of header row (used in multirow headers, top row by default)
    /// </param>

}
dhtmlXGridObject.prototype.setStyle = function (ss_header, ss_grid, ss_selCell, ss_selRow) {
    ///	<summary>
    /// modify default style of grid and its elements. Call before or after Init
    ///		Example: mygrid.setStyle("background-color:navy;color:white; font-weight:bold;", "","color:red;", "");
    ///	</summary>
    ///	<param name="ss_header" type="String">
    ///		ss_header - style def. expression for header
    /// </param>
    ///	<param name="ss_grid" type="String">
    ///		ss_grid - style def. expression for grid cells
    /// </param>
    ///	<param name="ss_selCell" type="String">
    ///		ss_selCell - style def. expression for selected cell
    /// </param>
    ///	<param name="ss_selRow" type="String">
    ///		ss_selRow - style def. expression for selected Row
    /// </param>

}
dhtmlXGridObject.prototype.setTabOrder = function (order) {
    ///	<summary>
    /// set tab order of columns
    ///		Example: mygrid.mygrid.setTabOrder("1,3,5,3,4,6,7,8");
    ///	</summary>
    ///	<param name="order" type="Number">
    ///		order - list of tab indexes (default delimiter is ",")
    /// </param>

}
dhtmlXGridObject.prototype.setUserData = function (row_id, name, value) {
    ///	<summary>
    /// sets user data to row
    ///		Example: //set row userdata
    ///    mygrid.setUserData("unique_rowid","someName1","new value");
    ///    //set global userdata
    ///    mygrid.setUserData("","someName1","new value");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id. if empty then user data is set for grid (not row)
    /// </param>
    ///	<param name="name" type="String">
    ///		name -  name of user data block
    /// </param>
    ///	<param name="value" type="String">
    ///		value -  value of user data block
    /// </param>

}
dhtmlXGridObject.prototype.showRow = function (rowID) {
    ///	<summary>
    /// scrolls row to the visible area
    ///		Example: mygrid.showRow("row1");
    ///	</summary>
    ///	<param name="rowID" type="String">
    ///		rowID - row id
    /// </param>

}
dhtmlXGridObject.prototype.sortRows = function (col, type, order) {
    ///	<summary>
    /// sort grid
    ///		Example: //sort first column in grid
    ///    mygrid.sortRows(0);
    ///    //sort first column in grid by "str" type in "des" order
    ///    mygrid.sortRows(0,"str","des");
    ///	</summary>
    ///	<param name="col" type="Number">
    ///		col - index of column, by which grid need to be sorted
    /// </param>
    ///	<param name="type" type="String">
    ///		type - sorting type (str,int,date), optional, by default sorting type taken from column setting
    /// </param>
    ///	<param name="order" type="String">
    ///		order - sorting order (asc,des), optional, by default sorting order based on previous sorting operation
    /// </param>

}
dhtmlXGridObject.prototype.startFastOperations = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.startFastOperations();
    /// �
    ///    for (var i=0; i<1000; i++)
    ///        mygrid.addRow(mygrid.uid(),[i,"new row"]);
    /// �
    ///    mygrid.stopFastOperations();
    ///	</summary>

}
dhtmlXGridObject.prototype.stopFastOperations = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.startFastOperations();
    /// �
    ///    for (var i=0; i<1000; i++)
    ///        mygrid.addRow(mygrid.uid(),[i,"new row"]);
    /// �
    ///    mygrid.stopFastOperations();
    ///	</summary>

}
dhtmlXGridObject.prototype.submitAddedRows = function (mode) {
    ///	<summary>
    /// 
    ///		Example: mygrid.submitAddedRows(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false}  enable|disable mode
    /// </param>

}
dhtmlXGridObject.prototype.submitOnlyChanged = function (mode) {
    ///	<summary>
    /// include only changed rows in form submit
    ///		Example: mygrid.submitOnlyChanged(true);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - {boolean}  enable|disable mode
    /// </param>

}
dhtmlXGridObject.prototype.submitOnlyRowID = function (mode) {
    ///	<summary>
    /// include only  row&#039;s IDS in form submit
    ///		Example: mygrid.submitOnlyRowID(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false}  enable|disable mode
    /// </param>

}
dhtmlXGridObject.prototype.submitOnlySelected = function (mode) {
    ///	<summary>
    /// include only selected rows in form submit
    ///		Example: mygrid.submitOnlySelected(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false}  enable|disable mode
    /// </param>

}
dhtmlXGridObject.prototype.submitSerialization = function (mode) {
    ///	<summary>
    /// 
    ///		Example: mygrid.submitSerialization(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false}  enable|disable mode
    /// </param>

}
dhtmlXGridObject.prototype.treeToGridElement = function (treeObj, treeNodeId, gridRowId) {
    ///	<summary>
    /// redefine this method in your code to define how tree node values should be used in grid (using input parameters you can change id of new row, values for cells, userdata blocks etc.).
    ///		Example: grid.treeToGridElement = function(tree,treeID,gridID){
    ///         var z=[treeObj.getItemText(treeID)];  // set tree text as a value of the first column in the grid
    ///         return z;
    ///     }
    ///	</summary>
    ///	<param name="treeObj" type="Object">
    ///		treeObj - object of tree
    /// </param>
    ///	<param name="treeNodeId" type="String">
    ///		treeNodeId - id of node created in tree
    /// </param>
    ///	<param name="gridRowId" type="String">
    ///		gridRowId - id of grid row
    /// </param>

}
dhtmlXGridObject.prototype.uid = function () {
    ///	<summary>
    /// 
    ///		Example: var uniqueID=mygrid.uid();
    ///	</summary>

}
dhtmlXGridObject.prototype.uncheckAll = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.uncheckAll();
    ///	</summary>

}
dhtmlXGridObject.prototype.unmarkAll = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.unmarkAll();
    ///	</summary>

}
dhtmlXGridObject.prototype.updateCellFromClipboard = function (rowId, cellInd) {
    ///	<summary>
    /// set value of cell from clipboard
    ///		Example: <script>
    ///    //minimal parameters set
    ///    mygrid.updateCellFromClipboard();
    ///    //maximal parameters set
    ///    mygrid.updateCellFromClipboard("rowID",0);
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row (optional, use selected row by default)
    /// </param>
    ///	<param name="cellInd" type="Number">
    ///		cellInd - column index(optional, use selected cell by default)
    /// </param>

}
dhtmlXGridObject.prototype.updateFromXML = function (url, insert_new, del_missed, afterCall) {
    ///	<summary>
    /// 
    ///		Example: //update grid from xml
    ///    mygrid.updateFromXML("grid_updated.xml");
    ///    //update grid from xml, insert new items, delete missed rows, execute doAfterUpdate() function after rows were updated
    ///    mygrid.updateFromXML("grid_updated.xml",true,true,doAfterUpdate);
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - url to the file
    /// </param>
    ///	<param name="insert_new" type="String">
    ///		insert_new - insert new items (optional, true by default)
    /// </param>
    ///	<param name="del_missed" type="String">
    ///		del_missed - delete missed rows (optional, false by default)
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function, will be executed after refresh completted
    /// </param>

}
dhtmlXGridObject.prototype.updateRowFromClipboard = function (rowId) {
    ///	<summary>
    /// set value of row from clipboard
    ///		Example: //minimal parameters set
    ///    mygrid.updateRowFromClipboard();
    ///    //maximal parameters set
    ///    mygrid.updateRowFromClipboard("rowID");
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row (optional, use selected row by default)
    /// </param>

}


var dhtmlXTreeObject = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXTreeObject.prototype.assignKeys = function (keys) {
    ///	<summary>
    /// configure keys used for keyboard navigation
    ///		Example: 
    ///	</summary>
    ///	<param name="keys" type="String">
    ///		keys - configuration array, please check pro_key_nav.html in samples for more details
    /// </param>

}
dhtmlXTreeObject.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: tree.attachEvent(evName, evHandler);
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - name of the event;
    /// </param>

}
dhtmlXTreeObject.prototype.bind = function (target, rule) {
    ///	<summary>
    /// 
    ///		Example: mytree.bind(mygrid);
    ///	</summary>
    ///	<param name="target" type="Object">
    ///		target - (object) the object that method is assigned to (optional)
    /// </param>
    ///	<param name="rule" type="String">
    ///		rule - (function) sets the rule according which components will be bound (optional)
    /// </param>

}
dhtmlXTreeObject.prototype.changeItemId = function (itemId, newItemId) {
    ///	<summary>
    /// change item id
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - old node id
    /// </param>
    ///	<param name="newItemId" type="String">
    ///		newItemId - new node id
    /// </param>

}
dhtmlXTreeObject.prototype.clearCut = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.clearSelection = function (itemId) {
    ///	<summary>
    /// unselect item in tree
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - used in multi selection tree (optional)
    /// </param>

}
dhtmlXTreeObject.prototype.closeAllItems = function (itemId) {
    ///	<summary>
    /// collapse target node and all sub nodes
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - node id
    /// </param>

}
dhtmlXTreeObject.prototype.closeItem = function (itemId) {
    ///	<summary>
    /// collapse node
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>

}
dhtmlXTreeObject.prototype.defineItemForm = function (formId) {
    ///	<summary>
    /// assign custom form to tree
    ///		Example: 
    ///	</summary>
    ///	<param name="formId" type="String">
    ///		formId - id of form node
    /// </param>

}
dhtmlXTreeObject.prototype.deleteChildItems = function (itemId) {
    ///	<summary>
    /// delete all children of node
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - node id
    /// </param>

}
dhtmlXTreeObject.prototype.deleteItem = function (itemId, selectParent) {
    ///	<summary>
    /// delete node
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - node id
    /// </param>
    ///	<param name="selectParent" type="String">
    ///		selectParent - If true parent of deleted item get selection, else no selected items leaving in tree.
    /// </param>

}
dhtmlXTreeObject.prototype.destructor = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: tree.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlXTreeObject.prototype.disableCheckbox = function (itemId, mode) {
    ///	<summary>
    /// disable checkbox
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - Id of tree item
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - 1 - on, 0 - off;
    /// </param>

}
dhtmlXTreeObject.prototype.doCut = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.doPaste = function (itemId) {
    ///	<summary>
    /// insert previously cut branch
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of new parent node
    /// </param>

}
dhtmlXTreeObject.prototype.editItem = function (id) {
    ///	<summary>
    /// open editor for specified item
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - item ID
    /// </param>

}
dhtmlXTreeObject.prototype.enableActiveImages = function (mode) {
    ///	<summary>
    /// enable active images (clickable and dragable). By default only text part of the node is active
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - 1 - on, 0 - off;
    /// </param>

}
dhtmlXTreeObject.prototype.enableAutoSavingSelected = function (mode, cookieName) {
    ///	<summary>
    /// enable/disable autosaving selected node in cookie
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTreeObject.prototype.enableAutoTooltips = function (mode) {
    ///	<summary>
    /// enable auto tooltips (node text as tooltip)
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - 1 - on, 0 - off;
    /// </param>

}
dhtmlXTreeObject.prototype.enableCheckBoxes = function (mode, hidden) {
    ///	<summary>
    /// show/hide checkboxes (all checkboxes in tree)
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>
    ///	<param name="hidden" type="String">
    ///		hidden - if set to true, checkboxes not rendered but can be shown by showItemCheckbox
    /// </param>

}
dhtmlXTreeObject.prototype.enableContextMenu = function (menu) {
    ///	<summary>
    /// enable context menu
    ///		Example: 
    ///	</summary>
    ///	<param name="menu" type="Object">
    ///		menu - dhtmlXMenu object
    /// </param>

}
dhtmlXTreeObject.prototype.enableDistributedParsing = function (mode, count, delay) {
    ///	<summary>
    /// enable distributed parsing of big tree (items loaded portion by portion with some timeouts)
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>
    ///	<param name="count" type="String">
    ///		count - critical count to start distibuting (optional)
    /// </param>
    ///	<param name="delay" type="String">
    ///		delay - delay between distributed calls, ms (optional)
    /// </param>

}
dhtmlXTreeObject.prototype.enableDragAndDrop = function (mode, rmode) {
    ///	<summary>
    /// enable/disable drag-and-drop
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - enabled/disabled [ can be true/false/temporary_disabled - last value mean that tree can be D-n-D can be switched to true later ]
    /// </param>
    ///	<param name="rmode" type="String">
    ///		rmode - enabled/disabled drag and drop on super root
    /// </param>

}
dhtmlXTreeObject.prototype.enableDragAndDropScrolling = function (mode) {
    ///	<summary>
    /// enable/disable auto scrolling while drag-and-drop
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - enabled/disabled
    /// </param>

}
dhtmlXTreeObject.prototype.enableHighlighting = function (mode) {
    ///	<summary>
    /// enable item highlighting (item text highlited on mouseover)
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - 1 - on, 0 - off;
    /// </param>

}
dhtmlXTreeObject.prototype.enableIEImageFix = function (mode) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false - enable/disable fix
    /// </param>

}
dhtmlXTreeObject.prototype.enableImageDrag = function (mode) {
    ///	<summary>
    /// enable draging item image with item text
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTreeObject.prototype.enableItemEditor = function (mode) {
    ///	<summary>
    /// enable editing of item text
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTreeObject.prototype.enableKeySearch = function (mode) {
    ///	<summary>
    /// enable search items by pressing keys (any item in tree should be focused/selected to make search work)
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTreeObject.prototype.enableKeyboardNavigation = function (mode) {
    ///	<summary>
    /// enable keyboard navigation in tree
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTreeObject.prototype.enableLoadingItem = function (text) {
    ///	<summary>
    /// enable/disable "Loading..." item
    ///		Example: 
    ///	</summary>
    ///	<param name="text" type="String">
    ///		text - text of temporary item (default is "Loading...")
    /// </param>

}
dhtmlXTreeObject.prototype.enableMercyDrag = function (mode) {
    ///	<summary>
    /// enable drag without removing (copy instead of move)
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - 1 - on, 0 - off;
    /// </param>

}
dhtmlXTreeObject.prototype.enableMultiLineItems = function (width) {
    ///	<summary>
    /// enable multi line items
    ///		Example: 
    ///	</summary>
    ///	<param name="width" type="String">
    ///		width - text width, if equls zero then use single lines items;
    /// </param>

}
dhtmlXTreeObject.prototype.enableMultiselection = function (mode, strict) {
    ///	<summary>
    /// enable multiselection
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - 1 - on, 0 - off;
    /// </param>
    ///	<param name="strict" type="String">
    ///		strict - 1 - on, 0 - off; in strict mode only items on the same level can be selected
    /// </param>

}
dhtmlXTreeObject.prototype.enableRTL = function (mode) {
    ///	<summary>
    /// enables Right-to-Left mode in tree
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTreeObject.prototype.enableRadioButtons = function (itemId, mode) {
    ///	<summary>
    /// replace checkboxes with radio buttons
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="Boolean">
    ///		mode - true/false
    /// </param>
    ///	<param name="mode" type="String">
    ///		itemId - node for which replacement called (optional)
    /// </param>

}
dhtmlXTreeObject.prototype.enableSingleRadioMode = function (mode) {
    ///	<summary>
    /// replace checkboxes with radio buttons
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTreeObject.prototype.enableSmartCheckboxes = function (mode) {
    ///	<summary>
    /// enable smart checkboxes ,true by default (auto checking children and parents for 3-state checkboxes)
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - 1 - on, 0 - off;
    /// </param>

}
dhtmlXTreeObject.prototype.enableSmartRendering = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.enableSmartXMLParsing = function (mode) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - 1 - on, 0 - off;
    /// </param>

}
dhtmlXTreeObject.prototype.enableTextSigns = function (mode) {
    ///	<summary>
    /// replace images with text signs
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTreeObject.prototype.enableThreeStateCheckboxes = function (mode) {
    ///	<summary>
    /// enable three state checkboxes
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - 1 - on, 0 - off;
    /// </param>

}
dhtmlXTreeObject.prototype.enableTreeImages = function (mode) {
    ///	<summary>
    /// enable tree images
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - 1 - on, 0 - off;
    /// </param>

}
dhtmlXTreeObject.prototype.enableTreeLines = function (mode) {
    ///	<summary>
    /// enable/disable tree lines (parent-child threads)
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - enable/disable tree lines
    /// </param>

}
dhtmlXTreeObject.prototype.findItem = function (searchStr, direction, top) {
    ///	<summary>
    /// find tree item by text, select and focus it
    ///		Example: 
    ///	</summary>
    ///	<param name="searchStr" type="String">
    ///		searchStr - search text
    /// </param>
    ///	<param name="direction" type="String">
    ///		direction - 0: top -> bottom; 1: bottom -> top
    /// </param>
    ///	<param name="top" type="String">
    ///		top - 1: start searching from top
    /// </param>

}
dhtmlXTreeObject.prototype.findItemIdByLabel = function (searchStr, direction, top) {
    ///	<summary>
    /// find tree item by text
    ///		Example: 
    ///	</summary>
    ///	<param name="searchStr" type="String">
    ///		searchStr - search text
    /// </param>
    ///	<param name="direction" type="String">
    ///		direction - 0: top -> bottom; 1: bottom -> top
    /// </param>
    ///	<param name="top" type="String">
    ///		top - 1: start searching from top
    /// </param>

}
dhtmlXTreeObject.prototype.focusItem = function (itemId) {
    ///	<summary>
    /// focus item in tree (scroll to it if necessary)
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - item Id
    /// </param>

}
dhtmlXTreeObject.prototype.getAllChecked = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.getAllCheckedBranches = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.getAllChildless = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.getAllItemsWithKids = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.getAllPartiallyChecked = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.getAllSubItems = function (itemId) {
    ///	<summary>
    /// Returns the list of all children from all next levels of tree, separated by default delimiter.
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>

}
dhtmlXTreeObject.prototype.getAllUnchecked = function (itemId) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.getChildItemIdByIndex = function (itemId, index) {
    ///	<summary>
    /// retun child node id by index
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - parent node id
    /// </param>
    ///	<param name="index" type="Number">
    ///		index - index of child node
    /// </param>

}
dhtmlXTreeObject.prototype.getDistributedParsingState = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.getIndexById = function (itemId) {
    ///	<summary>
    /// retun node index in children collection by Id
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - node id
    /// </param>

}
dhtmlXTreeObject.prototype.getItemColor = function (itemId) {
    ///	<summary>
    /// get node color (text color)
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>

}
dhtmlXTreeObject.prototype.getItemIdByIndex = function (itemId, index) {
    ///	<summary>
    /// retun node id by index
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - parent node id
    /// </param>
    ///	<param name="index" type="Number">
    ///		index - index of node, 0 based
    /// </param>

}
dhtmlXTreeObject.prototype.getItemImage = function (itemId, imageInd, fullPath) {
    ///	<summary>
    /// get url of item image
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of item
    /// </param>
    ///	<param name="imageInd" type="Number">
    ///		imageInd - index of image ( 0 - leaf, 1 - closed folder, 2 - opened folder)
    /// </param>
    ///	<param name="fullPath" type="String">
    ///		value - value of top offset
    /// </param>

}
dhtmlXTreeObject.prototype.getItemParsingState = function (itemId) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.getItemText = function (itemId) {
    ///	<summary>
    /// return node text
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>

}
dhtmlXTreeObject.prototype.getItemTooltip = function (itemId) {
    ///	<summary>
    /// get item&#039;s tooltip
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>

}
dhtmlXTreeObject.prototype.getLevel = function (itemId) {
    ///	<summary>
    /// get node level (position in hierarchy)
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>

}
dhtmlXTreeObject.prototype.getOpenState = function (itemId) {
    ///	<summary>
    /// return open/close state
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - node id
    /// </param>

}
dhtmlXTreeObject.prototype.getParentId = function (itemId) {
    ///	<summary>
    /// return parent item id
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>

}
dhtmlXTreeObject.prototype.getSelectedItemId = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.getSelectedItemText = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.getSubItems = function (itemId) {
    ///	<summary>
    /// Returns the list of all subitems Ids from the next level of tree, separated by commas.
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>

}
dhtmlXTreeObject.prototype.getUserData = function (itemId, name) {
    ///	<summary>
    /// get user data from target node
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - target node id
    /// </param>
    ///	<param name="name" type="String">
    ///		name - key for user data
    /// </param>

}
dhtmlXTreeObject.prototype.getXMLState = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.hasChildren = function (itemId) {
    ///	<summary>
    /// return number of children
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>

}
dhtmlXTreeObject.prototype.hideItemForm = function (itemID, state) {
    ///	<summary>
    /// hide item&#039;s form
    ///		Example: 
    ///	</summary>
    ///	<param name="itemID" type="String">
    ///		itemID -  item id
    /// </param>

}
dhtmlXTreeObject.prototype.insertNewChild = function (parentId, itemId, itemText, itemActionHandler, image1, image2, image3, optionStr, children) {
    ///	<summary>
    /// create new node as a child to specified with parentId
    ///		Example: 
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - parent node id
    /// </param>
    ///	<param name="itemId" type="String">
    ///		itemId - new node id
    /// </param>
    ///	<param name="itemText" type="String">
    ///		itemText - new node label
    /// </param>
    ///	<param name="itemActionHandler" type="String">
    ///		itemActionHandler - function fired on node select event (optional)
    /// </param>
    ///	<param name="image1" type="String">
    ///		image1 - image for node without children; (optional)
    /// </param>
    ///	<param name="image2" type="String">
    ///		image2 - image for closed node; (optional)
    /// </param>
    ///	<param name="image3" type="String">
    ///		image3 - image for opened node (optional)
    /// </param>
    ///	<param name="optionStr" type="String">
    ///		optionStr - options string (optional)
    /// </param>
    ///	<param name="children" type="String">
    ///		children - node children flag (for dynamical trees) (optional)
    /// </param>

}
dhtmlXTreeObject.prototype.insertNewNext = function (itemId, newItemId, itemText, itemActionHandler, image1, image2, image3, optionStr, children) {
    ///	<summary>
    /// create new node next to specified
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - node id
    /// </param>
    ///	<param name="newItemId" type="String">
    ///		newItemId - new node id
    /// </param>
    ///	<param name="itemText" type="String">
    ///		itemText - new node text
    /// </param>
    ///	<param name="itemActionHandler" type="String">
    ///		itemActionHandler - function fired on node select event (optional)
    /// </param>
    ///	<param name="image1" type="String">
    ///		image1 - image for node without children; (optional)
    /// </param>
    ///	<param name="image2" type="String">
    ///		image2 - image for closed node; (optional)
    /// </param>
    ///	<param name="image3" type="String">
    ///		image3 - image for opened node (optional)
    /// </param>
    ///	<param name="optionStr" type="String">
    ///		optionStr - options string (optional)
    /// </param>
    ///	<param name="children" type="String">
    ///		children - node children flag (for dynamical trees) (optional)
    /// </param>

}
dhtmlXTreeObject.prototype.isItemChecked = function (itemId) {
    ///	<summary>
    /// get state of nodes&#039;s checkbox
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - target node id
    /// </param>

}
dhtmlXTreeObject.prototype.isLocked = function (itemId) {
    ///	<summary>
    /// get locked state of item
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of item
    /// </param>

}
dhtmlXTreeObject.prototype.loadCSV = function (file, afterCall) {
    ///	<summary>
    /// load tree from csv file|stream
    ///		Example: 
    ///	</summary>
    ///	<param name="file" type="String">
    ///		file - link to CSV file
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXTreeObject.prototype.loadCSVString = function (csv, afterCall) {
    ///	<summary>
    /// load tree from csv string
    ///		Example: 
    ///	</summary>
    ///	<param name="csv" type="String">
    ///		csv - csv string
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXTreeObject.prototype.loadJSArray = function (ar, afterCall) {
    ///	<summary>
    /// load tree from js array object
    ///		Example: 
    ///	</summary>
    ///	<param name="ar" type="String">
    ///		ar - js array
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXTreeObject.prototype.loadJSArrayFile = function (file, afterCall) {
    ///	<summary>
    /// load tree from js array file|stream
    ///		Example: 
    ///	</summary>
    ///	<param name="file" type="String">
    ///		file - link to JSArray file
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXTreeObject.prototype.loadJSON = function (file, afterCall) {
    ///	<summary>
    /// load tree from json file
    ///		Example: 
    ///	</summary>
    ///	<param name="file" type="String">
    ///		file - link to JSON file
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXTreeObject.prototype.loadJSONObject = function (json, afterCall) {
    ///	<summary>
    /// load tree from json object
    ///		Example: 
    ///	</summary>
    ///	<param name="json" type="Object">
    ///		json - json object
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXTreeObject.prototype.loadOpenStates = function (name) {
    ///	<summary>
    /// restore open nodes from cookie
    ///		Example: 
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXTreeObject.prototype.loadState = function (name) {
    ///	<summary>
    /// load tree from cookie
    ///		Example: 
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXTreeObject.prototype.loadXML = function (file, afterCall) {
    ///	<summary>
    /// load tree from xml file
    ///		Example: 
    ///	</summary>
    ///	<param name="file" type="String">
    ///		file - link to XML file
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXTreeObject.prototype.loadXMLString = function (xmlString, afterCall) {
    ///	<summary>
    /// load tree from xml string
    ///		Example: 
    ///	</summary>
    ///	<param name="xmlString" type="String">
    ///		xmlString - XML string
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXTreeObject.prototype.lockTree = function (isLock) {
    ///	<summary>
    /// lock tree
    ///		Example: 
    ///	</summary>
    ///	<param name="isLock" type="String">
    ///		isLock - bool value. True - lock, false - unlock
    /// </param>

}
dhtmlXTreeObject.prototype.makeAllDraggable = function (func) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - custom drag processor function, optional
    /// </param>

}
dhtmlXTreeObject.prototype.makeDraggable = function (obj, func) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="obj" type="Object">
    ///		obj - HTML object, or HTML object ID
    /// </param>
    ///	<param name="func" type="String">
    ///		func - custom drag processor function, optional
    /// </param>

}
dhtmlXTreeObject.prototype.moveItem = function (itemId, mode, targetId, targetTree) {
    ///	<summary>
    /// move item (inside of tree)
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - item Id
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - moving mode (left,up,down,item_child,item_sibling,item_sibling_next,up_strict,down_strict)
    /// </param>
    ///	<param name="targetId" type="String">
    ///		targetId - target Node in item_child and item_sibling mode
    /// </param>
    ///	<param name="targetTree" type="String">
    ///		targetTree - used for moving between trees (optional)
    /// </param>

}
dhtmlXTreeObject.prototype.openAllItems = function (itemId) {
    ///	<summary>
    /// expand target node and all sub nodes
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - node id
    /// </param>

}
dhtmlXTreeObject.prototype.openAllItemsDynamic = function (itemId) {
    ///	<summary>
    /// expand target node and all child nodes (same as openAllItems, but works in dynamic trees)
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - node id, optional
    /// </param>

}
dhtmlXTreeObject.prototype.openItem = function (itemId) {
    ///	<summary>
    /// expand node
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>

}
dhtmlXTreeObject.prototype.openItemsDynamic = function (list, flag) {
    ///	<summary>
    /// expand list of nodes in dynamic tree (wait of loading of node before expanding next)
    ///		Example: tree.openItemsDynamic("id_0,id_0_2,id_0_2_3,id_2,id_2_1",true);
    ///	</summary>
    ///	<param name="list" type="String">
    ///		list - list of nodes which will be expanded
    /// </param>
    ///	<param name="flag" type="Boolean">
    ///		flag - true/false - select last node in the list
    /// </param>

}
dhtmlXTreeObject.prototype.openOnItemAdded = function (mode) {
    ///	<summary>
    /// configure if parent node will be expanded immideatly after child item added
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXTreeObject.prototype.preventIECaching = function (mode) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - enable/disable random value ( disabled by default )
    /// </param>

}
dhtmlXTreeObject.prototype.refreshItem = function (itemId) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node, if not defined tree super root used.
    /// </param>

}
dhtmlXTreeObject.prototype.refreshItems = function (itemIdList, source) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="itemIdList" type="String">
    ///		itemIdList - list of node identificators
    /// </param>
    ///	<param name="source" type="String">
    ///		source - server side script
    /// </param>

}
dhtmlXTreeObject.prototype.registerXMLEntity = function (rChar, rEntity) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="rChar" type="String">
    ///		rChar - source char
    /// </param>
    ///	<param name="rEntity" type="String">
    ///		rEntity - target entity
    /// </param>

}
dhtmlXTreeObject.prototype.restoreSelectedItem = function (name) {
    ///	<summary>
    /// restore selected item from cookie
    ///		Example: 
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>

}
dhtmlXTreeObject.prototype.saveOpenStates = function (name, cookie_param) {
    ///	<summary>
    /// save open nodes to cookie
    ///		Example: 
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parametrs added to cookie
    /// </param>

}
dhtmlXTreeObject.prototype.saveSelectedItem = function (name, cookie_param) {
    ///	<summary>
    /// save selected item to cookie
    ///		Example: 
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parametrs added to cookie
    /// </param>

}
dhtmlXTreeObject.prototype.saveState = function (name, cookie_param) {
    ///	<summary>
    /// save tree to cookie
    ///		Example: 
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parametrs added to cookie
    /// </param>

}
dhtmlXTreeObject.prototype.selectItem = function (itemId, mode, preserve) {
    ///	<summary>
    /// select node ( and optionaly fire onClick event)
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - node id
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - If true, script function for selected node will be called. ( onClick event )
    /// </param>
    ///	<param name="preserve" type="String">
    ///		preserve - preserve earlier selected nodes
    /// </param>

}
dhtmlXTreeObject.prototype.serializeTree = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.serializeTreeToJSON = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.setCheck = function (itemId, state) {
    ///	<summary>
    /// set state of node&#039;s checkbox
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - target node id
    /// </param>
    ///	<param name="state" type="String">
    ///		state - checkbox state (0/1/"unsure")
    /// </param>

}
dhtmlXTreeObject.prototype.setChildCalcHTML = function (htmlA, htmlB) {
    ///	<summary>
    /// set children calculation prefix and postfix
    ///		Example: 
    ///	</summary>
    ///	<param name="htmlA" type="String">
    ///		htmlA - postfix ([ - by default)
    /// </param>
    ///	<param name="htmlB" type="String">
    ///		htmlB - postfix (] - by default)
    /// </param>

}
dhtmlXTreeObject.prototype.setChildCalcMode = function (mode) {
    ///	<summary>
    /// set children calculation mode
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - mode name as string . Possible values: child - children, no recursive; leafs - children without subchildren, no recursive;  ,childrec - children, recursive; leafsrec - children without subchildren, recursive; disabled (disabled by default)
    /// </param>

}
dhtmlXTreeObject.prototype.setCustomSortFunction = function (func) {
    ///	<summary>
    /// set custom sort functions, which has two parametrs - id_of_item1,id_of_item2
    ///		Example: 
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - sorting function
    /// </param>

}
dhtmlXTreeObject.prototype.setDataMode = function (mode) {
    ///	<summary>
    /// set default data transfer mode
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - data mode (json,xml,csv)
    /// </param>

}
dhtmlXTreeObject.prototype.setDragBehavior = function (mode, select) {
    ///	<summary>
    /// set Drag-And-Drop behavior (child - drop as chils, sibling - drop as sibling, complex - complex drop behaviour )
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - behavior name (child,sibling,complex)
    /// </param>
    ///	<param name="select" type="String">
    ///		select - select droped node after drag-n-drop, true by default
    /// </param>

}
dhtmlXTreeObject.prototype.setEditStartAction = function (click_IE, dblclick) {
    ///	<summary>
    /// define which events must start editing
    ///		Example: 
    ///	</summary>
    ///	<param name="click_IE" type="Boolean">
    ///		click_IE - click on already selected item - true/false [true by default]
    /// </param>
    ///	<param name="dblclick" type="String">
    ///		dblclick - on double click
    /// </param>

}
dhtmlXTreeObject.prototype.setEscapingMode = function (mode) {
    ///	<summary>
    /// set escaping mode (used for escaping ID in requests)
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - escaping mode ("utf8" for UTF escaping)
    /// </param>

}
dhtmlXTreeObject.prototype.setFormAppearOn = function (onClick, onDblClick, onMouseOver) {
    ///	<summary>
    /// define events for form appearing
    ///		Example: 
    ///	</summary>
    ///	<param name="onClick" type="String">
    ///		onClick - form appears on click event
    /// </param>
    ///	<param name="onDblClick" type="String">
    ///		onDblClick - form appears on double click event
    /// </param>
    ///	<param name="onMouseOver" type="String">
    ///		onMouseOver - form appears on mouseover event
    /// </param>

}
dhtmlXTreeObject.prototype.setFormDisappearOn = function (onClick, onDblClick, onMouseOver) {
    ///	<summary>
    /// define events for form disappearing
    ///		Example: 
    ///	</summary>
    ///	<param name="onClick" type="String">
    ///		onClick - form disappears on click event
    /// </param>
    ///	<param name="onDblClick" type="String">
    ///		onDblClick - form disappears on double click event
    /// </param>
    ///	<param name="onMouseOver" type="String">
    ///		onMouseOver - form disappears on mouseover event
    /// </param>

}
dhtmlXTreeObject.prototype.setIconPath = function (path) {
    ///	<summary>
    /// set path to external images used as tree icons
    ///		Example: 
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - url (or relative path) of images folder with closing "/"
    /// </param>

}
dhtmlXTreeObject.prototype.setIconSize = function (newWidth, newHeight, itemId) {
    ///	<summary>
    /// set size of icons
    ///		Example: 
    ///	</summary>
    ///	<param name="newWidth" type="String">
    ///		newWidth - new icon width
    /// </param>
    ///	<param name="newHeight" type="String">
    ///		newHeight - new icon height
    /// </param>
    ///	<param name="itemId" type="String">
    ///		itemId - item Id, if skipped set default value for all new icons, optional
    /// </param>

}
dhtmlXTreeObject.prototype.setImageArrays = function (arrayName, image1, image2, image3, image4, image5) {
    ///	<summary>
    /// set images used for parent-child threads drawing (lines, plus, minus)
    ///		Example: 
    ///	</summary>
    ///	<param name="arrayName" type="String">
    ///		arrayName - name of array: plus, minus
    /// </param>
    ///	<param name="image1" type="String">
    ///		image1 - line crossed image
    /// </param>
    ///	<param name="image2" type="String">
    ///		image2 - image with top line
    /// </param>
    ///	<param name="image3" type="String">
    ///		image3 - image with bottom line
    /// </param>
    ///	<param name="image4" type="String">
    ///		image4 - image without line
    /// </param>
    ///	<param name="image5" type="String">
    ///		image5 - single root image
    /// </param>

}
dhtmlXTreeObject.prototype.setImagePath = function (newPath) {
    ///	<summary>
    /// set path to images directory
    ///		Example: 
    ///	</summary>
    ///	<param name="newPath" type="String">
    ///		newPath - path to images directory (related to the page with tree or absolute http url)
    /// </param>

}
dhtmlXTreeObject.prototype.setItemCloseable = function (itemId, flag) {
    ///	<summary>
    /// prevent node from closing
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>
    ///	<param name="flag" type="String">
    ///		flag -  if 0 - node can&#039;t be closed, else node can be closed
    /// </param>

}
dhtmlXTreeObject.prototype.setItemColor = function (itemId, defaultColor, selectedColor) {
    ///	<summary>
    /// set node text color
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>
    ///	<param name="defaultColor" type="String">
    ///		defaultColor - node color
    /// </param>
    ///	<param name="selectedColor" type="String">
    ///		selectedColor - selected node color
    /// </param>

}
dhtmlXTreeObject.prototype.setItemContextMenu = function (itemId, cMenu) {
    ///	<summary>
    /// set context menu to individual nodes
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - node id
    /// </param>
    ///	<param name="cMenu" type="Object">
    ///		cMenu - context menu object
    /// </param>

}
dhtmlXTreeObject.prototype.setItemImage = function (itemId, image1, image2) {
    ///	<summary>
    /// set item icons (mostly usefull for childless nodes)
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>
    ///	<param name="image1" type="String">
    ///		image1 - node without children icon or closed node icon (if image2 specified)
    /// </param>
    ///	<param name="image2" type="String">
    ///		image2 - open node icon (optional)
    /// </param>

}
dhtmlXTreeObject.prototype.setItemImage2 = function (itemId, image1, image2, image3) {
    ///	<summary>
    /// set item images
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>
    ///	<param name="image1" type="String">
    ///		image1 - node without children icon
    /// </param>
    ///	<param name="image2" type="String">
    ///		image2 - open node icon
    /// </param>
    ///	<param name="image3" type="String">
    ///		image3 - closed node icon
    /// </param>

}
dhtmlXTreeObject.prototype.setItemStyle = function (itemId, style_string) {
    ///	<summary>
    /// set individual item style
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - node id
    /// </param>
    ///	<param name="style_string" type="String">
    ///		style_string - valid CSS string
    /// </param>

}
dhtmlXTreeObject.prototype.setItemText = function (itemId, newLabel, newTooltip) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of node
    /// </param>
    ///	<param name="newLabel" type="String">
    ///		newLabel - node text
    /// </param>
    ///	<param name="newTooltip" type="String">
    ///		newTooltip - (optional)tooltip for the node
    /// </param>

}
dhtmlXTreeObject.prototype.setItemTopOffset = function (itemId, value) {
    ///	<summary>
    /// set top offset for item
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of item
    /// </param>
    ///	<param name="value" type="String">
    ///		value - value of top offset in px
    /// </param>

}
dhtmlXTreeObject.prototype.setListDelimeter = function (separator) {
    ///	<summary>
    /// set list separator ("," by default)
    ///		Example: 
    ///	</summary>
    ///	<param name="separator" type="String">
    ///		separator - char or string to use for separating items in lists
    /// </param>

}
dhtmlXTreeObject.prototype.setLockedIcons = function (im0, im1, im2) {
    ///	<summary>
    /// set icon for locked items
    ///		Example: 
    ///	</summary>
    ///	<param name="im0" type="String">
    ///		im0 - icon for locked leaf
    /// </param>
    ///	<param name="im1" type="String">
    ///		im1 - icon for closed branch
    /// </param>
    ///	<param name="im2" type="String">
    ///		im2 - icon for opened branch
    /// </param>

}
dhtmlXTreeObject.prototype.setOnDblClickHandler = function (func) {
    ///	<summary>
    /// set function called when tree node double clicked
    ///		Example: 
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - event handling function
    /// </param>

}
dhtmlXTreeObject.prototype.setOnFormDismissal = function (func) {
    ///	<summary>
    /// allow to set user routine which will be called right before form disappears
    ///		Example: 
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - user defined function
    /// </param>

}
dhtmlXTreeObject.prototype.setOnFormInitialisation = function (func) {
    ///	<summary>
    /// allow setting user routine which will be called immideatly before form appears
    ///		Example: 
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - user defined function
    /// </param>

}
dhtmlXTreeObject.prototype.setSerializationLevel = function (userData, fullXML, escapeEntities, userDataAsCData, DTD) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="userData" type="String">
    ///		userData - enable/disable user data serialization
    /// </param>
    ///	<param name="fullXML" type="String">
    ///		fullXML - enable/disable full XML serialization
    /// </param>
    ///	<param name="escapeEntities" type="String">
    ///		escapeEntities - convert tag brackets to related html entitites
    /// </param>
    ///	<param name="userDataAsCData" type="String">
    ///		userDataAsCData - output user data in CDATA sections
    /// </param>
    ///	<param name="DTD" type="String">
    ///		DTD - if specified, then set as XML&#039;s DTD
    /// </param>

}
dhtmlXTreeObject.prototype.setStdImages = function (image1, image2, image3) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="image1" type="String">
    ///		a0 - image for node without children;
    /// </param>
    ///	<param name="image2" type="String">
    ///		a1 - image for closed node;
    /// </param>
    ///	<param name="image3" type="String">
    ///		a2 - image for opened node
    /// </param>

}
dhtmlXTreeObject.prototype.setSubChecked = function (itemId, state) {
    ///	<summary>
    /// change state of node&#039;s checkbox and all children checkboxes
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - target node id
    /// </param>
    ///	<param name="state" type="String">
    ///		state - checkbox state
    /// </param>

}
dhtmlXTreeObject.prototype.setUserData = function (itemId, name, value) {
    ///	<summary>
    /// set user data for target node
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - target node id
    /// </param>
    ///	<param name="name" type="String">
    ///		name - key for user data
    /// </param>
    ///	<param name="value" type="String">
    ///		value - user data value
    /// </param>

}
dhtmlXTreeObject.prototype.setXMLAutoLoading = function (filePath) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="filePath" type="String">
    ///		filePath - name of script returning XML; in case of virtual loading - user defined function
    /// </param>

}
dhtmlXTreeObject.prototype.setXMLAutoLoadingBehaviour = function (mode) {
    ///	<summary>
    /// define which script be called on dynamic loading
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - id for some_script?id=item_id ;  name for  some_scriptitem_id, xmlname for  some_scriptitem_id.xml ; function for calling user defined handler
    /// </param>

}
dhtmlXTreeObject.prototype.showItemCheckbox = function (itemId, state) {
    ///	<summary>
    /// show/hide checkbox for tree item (works only for individual items, not for entire tree )
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of selected item, optional, set null to change states of all items
    /// </param>
    ///	<param name="state" type="String">
    ///		state - checkbox show state : 0/1
    /// </param>

}
dhtmlXTreeObject.prototype.showItemForm = function (itemID, state) {
    ///	<summary>
    /// show item&#039;s form
    ///		Example: 
    ///	</summary>
    ///	<param name="itemID" type="String">
    ///		itemID -  item id
    /// </param>

}
dhtmlXTreeObject.prototype.showItemSign = function (itemId, state) {
    ///	<summary>
    /// show/hide (+/-) icon (works only for individual items, not for entire tree )
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of selected item
    /// </param>
    ///	<param name="state" type="String">
    ///		state - show state : 0/1
    /// </param>

}
dhtmlXTreeObject.prototype.smartRefreshBranch = function (itemId, source) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId -  top node in branch
    /// </param>
    ///	<param name="source" type="String">
    ///		source - server side script , optional
    /// </param>

}
dhtmlXTreeObject.prototype.smartRefreshItem = function (itemId, source) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId -  top node in branch
    /// </param>
    ///	<param name="source" type="String">
    ///		source - server side script , optional
    /// </param>

}
dhtmlXTreeObject.prototype.sortTree = function (nodeId, order, all_levels) {
    ///	<summary>
    /// reorder items in tree according to their text
    ///		Example: 
    ///	</summary>
    ///	<param name="nodeId" type="String">
    ///		nodeId - id of node to start sorting from
    /// </param>
    ///	<param name="order" type="String">
    ///		all_levels - sorting all levels or only current level
    /// </param>
    ///	<param name="all_levels" type="String">
    ///		order - sorting order - ASC or DES
    /// </param>

}
dhtmlXTreeObject.prototype.stopEdit = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeObject.prototype.updateItem = function (itemId, name, im0, im1, im2, achecked) {
    ///	<summary>
    /// update item properties
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - list of node identificators
    /// </param>
    ///	<param name="name" type="String">
    ///		name - list of node identificators, optional
    /// </param>
    ///	<param name="im0" type="String">
    ///		im0 - list of node identificators, optional
    /// </param>
    ///	<param name="im1" type="String">
    ///		im1 - list of node identificators, optional
    /// </param>
    ///	<param name="im2" type="String">
    ///		im2 - list of node identificators, optional
    /// </param>
    ///	<param name="achecked" type="String">
    ///		achecked - list of node identificators, optional
    /// </param>

}


var dhtmlXTreeGridObject = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXTreeGridObject.prototype.addRow = function (new_id, text, ind, parent_id, img, child) {
    ///	<summary>
    /// add new row to treeGrid
    ///		Example: 
    ///	</summary>
    ///	<param name="new_id" type="String">
    ///		new_id  - new row id
    /// </param>
    ///	<param name="text" type="String">
    ///		text  - array of row label
    /// </param>
    ///	<param name="ind" type="String">
    ///		ind  - position of row (set to null, for using parentId)
    /// </param>
    ///	<param name="parent_id" type="String">
    ///		parent_id  - id of parent row
    /// </param>
    ///	<param name="img" type="String">
    ///		img  - img url for new row
    /// </param>
    ///	<param name="child" type="String">
    ///		child - child flag [optional]
    /// </param>

}
dhtmlXTreeGridObject.prototype.addRowAfter = function (new_id, text, sibl_id, img, child) {
    ///	<summary>
    /// add new row to treeGrid, after some other row
    ///		Example: 
    ///	</summary>
    ///	<param name="new_id" type="String">
    ///		new_id  - new row id
    /// </param>
    ///	<param name="text" type="String">
    ///		text  - array of row label
    /// </param>
    ///	<param name="sibl_id" type="String">
    ///		sibl_id  - id of row, related to which new one will be added
    /// </param>
    ///	<param name="img" type="String">
    ///		img  - img url for new row
    /// </param>
    ///	<param name="child" type="String">
    ///		child - child flag [optional]
    /// </param>

}
dhtmlXTreeGridObject.prototype.addRowBefore = function (new_id, text, sibl_id, img, child) {
    ///	<summary>
    /// add new row to treeGrid, before some other row
    ///		Example: 
    ///	</summary>
    ///	<param name="new_id" type="String">
    ///		new_id  - new row id
    /// </param>
    ///	<param name="text" type="String">
    ///		text  - array of row label
    /// </param>
    ///	<param name="sibl_id" type="String">
    ///		sibl_id  - id of row, related to which new one will be added
    /// </param>
    ///	<param name="img" type="String">
    ///		img  - img url for new row
    /// </param>
    ///	<param name="child" type="String">
    ///		child - child flag [optional]
    /// </param>

}
dhtmlXTreeGridObject.prototype.closeItem = function (rowId) {
    ///	<summary>
    /// collapse row
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>

}
dhtmlXTreeGridObject.prototype.collapseAll = function (rowId) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeGridObject.prototype.collectTreeValues = function (column) {
    ///	<summary>
    /// get all possible values in column
    ///		Example: 
    ///	</summary>
    ///	<param name="column" type="Number">
    ///		column - {number} zero based index of column
    /// </param>

}
dhtmlXTreeGridObject.prototype.deleteChildItems = function (rowId) {
    ///	<summary>
    /// delete all childs of row in question
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>

}
dhtmlXTreeGridObject.prototype.enableTreeCellEdit = function (mode) {
    ///	<summary>
    /// enable/disable editor of tree cell ; enabled by default
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode -  (boolean) true/false
    /// </param>

}
dhtmlXTreeGridObject.prototype.enableTreeGridLines = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeGridObject.prototype.expandAll = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXTreeGridObject.prototype.filterTreeBy = function (column, value, preserve) {
    ///	<summary>
    /// filter grid by mask
    ///		Example: 
    ///	</summary>
    ///	<param name="column" type="Number">
    ///		column - {number} zero based index of column
    /// </param>
    ///	<param name="value" type="String">
    ///		value - {string} filtering mask
    /// </param>
    ///	<param name="preserve" type="String">
    ///		preserve - {bool} filter current or initial state ( false by default )
    /// </param>

}
dhtmlXTreeGridObject.prototype.getAllSubItems = function (rowId) {
    ///	<summary>
    /// get list of id of all nested rows
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>

}
dhtmlXTreeGridObject.prototype.getChildItemIdByIndex = function (rowId, ind) {
    ///	<summary>
    /// get id of child item at specified position
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - child node index
    /// </param>

}
dhtmlXTreeGridObject.prototype.getItemImage = function (rowId) {
    ///	<summary>
    /// get image of tree col
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>

}
dhtmlXTreeGridObject.prototype.getItemText = function (rowId) {
    ///	<summary>
    /// get real caption of tree col
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>

}
dhtmlXTreeGridObject.prototype.getLevel = function (rowId) {
    ///	<summary>
    /// return level of treeGrid row
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>

}
dhtmlXTreeGridObject.prototype.getOpenState = function (rowId) {
    ///	<summary>
    /// return open/close state of row
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>

}
dhtmlXTreeGridObject.prototype.getParentId = function (rowId) {
    ///	<summary>
    /// return id of parent row
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>

}
dhtmlXTreeGridObject.prototype.getSubItems = function (rowId) {
    ///	<summary>
    /// return list of child row id, sparated by comma
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>

}
dhtmlXTreeGridObject.prototype.hasChildren = function (rowId) {
    ///	<summary>
    /// return children count
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>

}
dhtmlXTreeGridObject.prototype.openItem = function (rowId) {
    ///	<summary>
    /// expand row
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>

}
dhtmlXTreeGridObject.prototype.setFiltrationLevel = function (level, show_lower, show_upper) {
    ///	<summary>
    /// allows to define , which level of tree must be used for filtering
    ///		Example: 
    ///	</summary>
    ///	<param name="level" type="String">
    ///		level - level value, -1 value means last one
    /// </param>

}
dhtmlXTreeGridObject.prototype.setImageSize = function (width, height) {
    ///	<summary>
    /// set size of treegrid images
    ///		Example: 
    ///	</summary>
    ///	<param name="width" type="String">
    ///		width -  width of image
    /// </param>
    ///	<param name="height" type="String">
    ///		height - height of image
    /// </param>

}
dhtmlXTreeGridObject.prototype.setItemCloseable = function (rowId, status) {
    ///	<summary>
    /// enable/disable closing of row
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>
    ///	<param name="status" type="Boolean">
    ///		status - true/false
    /// </param>

}
dhtmlXTreeGridObject.prototype.setItemImage = function (rowId, url) {
    ///	<summary>
    /// set image of tree col
    ///		Example: grid.setItemImage(rowId,"../../../dhtmlxGrid/codebase/imgs/csh_bluebooks/folder.gif")
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>
    ///	<param name="url" type="String">
    ///		url - image url
    /// </param>

}
dhtmlXTreeGridObject.prototype.setItemText = function (rowId, newtext) {
    ///	<summary>
    /// set real caption of tree col
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>
    ///	<param name="newtext" type="String">
    ///		newtext - new text
    /// </param>

}
dhtmlXTreeGridObject.prototype.setOnOpenEndHandler = function (func) {
    ///	<summary>
    /// set function called after tree node opened/closed
    ///		Example: 
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - event handling function
    /// </param>

}
dhtmlXTreeGridObject.prototype.setOnOpenStartHandler = function (func) {
    ///	<summary>
    /// set function called before tree node opened/closed
    ///		Example: 
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - event handling function
    /// </param>

}
dhtmlXTreeGridObject.prototype.sortTreeRows = function (col, type, order) {
    ///	<summary>
    /// sorts treegrid by specified column
    ///		Example: 
    ///	</summary>
    ///	<param name="col" type="Number">
    ///		col - column index
    /// </param>
    ///	<param name="type" type="String">
    ///		type - str.int.date
    /// </param>
    ///	<param name="order" type="String">
    ///		order - asc.desc
    /// </param>

}
dhtmlXTreeGridObject.prototype.getLabel = function (val) {
    ///	<summary>
    /// sets text representation of cell ( setLabel doesn&#039;t triger math calculations as setValue do)
    ///		Example: 
    ///	</summary>
    ///	<param name="val" type="String">
    ///		val - new value
    /// </param>

}
dhtmlXTreeGridObject.prototype.setLabel = function (val) {
    ///	<summary>
    /// sets text representation of cell ( setLabel doesn&#039;t triger math calculations as setValue do)
    ///		Example: 
    ///	</summary>
    ///	<param name="val" type="String">
    ///		val - new value
    /// </param>

}


var dhtmlxFolders = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlxFolders.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: myFolders.attachEvent("onclick",function(id){
    ///     alert("Item ID is: "+id)
    ///   })
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - name of the event;
    /// </param>

}
dhtmlxFolders.prototype.clearAll = function () {
    ///	<summary>
    /// 
    ///		Example: myFolders.clearAll();
    ///     myFolders.loadXML("xml/directoryContent.php");
    ///	</summary>

}
dhtmlxFolders.prototype.deleteItem = function (id) {
    ///	<summary>
    /// delete item(s)
    ///		Example: myFolders.deleteItem("item123");//by single ID
    ///     myFolders.deleteItem(["item123","item234","item345"]);//by array of IDs
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id (or array of ids) of item to delete
    /// </param>

}
dhtmlxFolders.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: var evID = myFolders.attachEvent("onclick",function(id){alert(id)});
    ///     myFolders.detachEvent(evID);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlxFolders.prototype.drawPager = function () {
    ///	<summary>
    /// 
    ///		Example: dhtmlxFolders.prototype.drawPager = function(){
    ///     if(this.pagerContainer==null){
    ///         return;
    ///     }
    ///     this.pagerContainer.style.display = "";
    ///     this.pagerContainer.innerHTML="";
    ///     this.pagerContainer.obj = this;
    ///     for(var i=0;i<this.getNumberOfPages();i++){
    ///         var ins = "";
    ///         if(i+1==this.getCurrentPage())
    ///             var className = "dhxfolders_pagingCurrent"
    ///         else
    ///             var className = "dhxfolders_pagingInact"
    ///         var tmpHTML = "<div style='float:left;' class='"+className+"'  onclick='this.parentNode.obj.goToPage("+(i+1)+");'>"+(i+1)+"</div>"
    ///         this.pagerContainer.innerHTML = this.pagerContainer.innerHTML+tmpHTML;
    ///     }
    /// }
    ///	</summary>

}
dhtmlxFolders.prototype.enableContextMenu = function (menu) {
    ///	<summary>
    /// enable/disable context menu
    ///		Example: 
    ///	</summary>
    ///	<param name="menu" type="Object">
    ///		menu object, if null - context menu will be disabled
    /// </param>

}
dhtmlxFolders.prototype.enableDragAndDrop = function (mode) {
    ///	<summary>
    /// enables or disables drag-n-drop in Folders
    ///		Example: myFolders.enableDragAndDrop(true);//enable drag-n-drop
    ///     myFolders.enableDragAndDrop(false);//disable drag-n-drop
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlxFolders.prototype.enableEditMode = function (state) {
    ///	<summary>
    /// turns on/off edit mode for dhtmlxFolders object
    ///		Example: myFolders.enableEditMode(true);
    ///	</summary>
    ///	<param name="state" type="String">
    ///		newPath - new base directory path
    /// </param>

}
dhtmlxFolders.prototype.enablePaging = function (itemsPerPage, withDynLoading) {
    ///	<summary>
    /// enables/disables paging in Folders and sets number of items per page to use
    ///		Example: myFolders.enablePaging(25);
    ///     //or this one if you need folders to send additional request to server for additional portion of items:
    ///     myFolders.enablePaging(25,true);
    ///	</summary>
    ///	<param name="itemsPerPage" type="String">
    ///		itemsPerPage - number of items per page, or (if 0) disable paging
    /// </param>
    ///	<param name="withDynLoading" type="String">
    ///		withDynLoading - true to allow dynamical loading
    /// </param>

}
dhtmlxFolders.prototype.enableSelection = function (mode) {
    ///	<summary>
    /// set selection mode
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - selection mode: 0 - disabled,1 - allowed, 2 - allowed single
    /// </param>

}
dhtmlxFolders.prototype.enableXMLSmartRefresh = function (mode) {
    ///	<summary>
    /// 
    ///		Example: var mode = document.getElementById('smart_flag').checked
    ///     myFolders.enableXMLSmartRefresh(mode);
    ///     if(!mode)
    ///         myFolders.clearAll();
    ///     myFolders.loadXML(url);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true to enable, false to disable
    /// </param>

}
dhtmlxFolders.prototype.filterClear = function (skip_redraw) {
    ///	<summary>
    /// 
    ///		Example: <script>
    ///        function filterFolders(val){
    ///          if(this.value==''){
    ///            myFolders.filterClear()
    ///          }else{
    ///            myFolders.filterItems(function(item,mask){
    ///               if(item.data.dataObj.getAttribute("name").indexOf(val)!=-1)
    ///                  true;
    ///               else
    ///                  false;
    ///            },val,false);
    ///          }
    ///        }
    ///     </script>
    ///     <input type="text" onblur="filterFolders(this.value)">
    ///	</summary>

}
dhtmlxFolders.prototype.filterItems = function (filterFunc, mask, preservePrevious) {
    ///	<summary>
    /// filter items using filterFunc and mask
    ///		Example: 
    ///	</summary>
    ///	<param name="filterFunc" type="Object">
    ///		filterFunc - function to use to define if item should appear or not. if this function returns true, then item will be visible. Incomming arguments are: item object and mask
    /// </param>
    ///	<param name="mask" type="String">
    ///		mask - mask to use in filter
    /// </param>
    ///	<param name="preservePrevious" type="String">
    ///		preservePrevious - preserver previously applied filters
    /// </param>

}
dhtmlxFolders.prototype.forEachSelected = function (func) {
    ///	<summary>
    /// 
    ///		Example: function updateId(item,index){
    ///         item.setId(item.data.id+"_new")
    ///     }
    ///     myFolders.forEachSelected(updateId);
    ///	</summary>

}
dhtmlxFolders.prototype.getCurrentPage = function () {
    ///	<summary>
    /// 
    ///		Example: if(myFolders.getCurrentPage()==myFolders.getNumberOfPages()){
    ///         alert("You are on the last page")
    ///     }
    ///	</summary>

}
dhtmlxFolders.prototype.getItem = function (id) {
    ///	<summary>
    /// gets FOldes Item object
    ///		Example: var item = myFolders.getItem(myFolders._activeItemId);
    ///     //if content was created from XML, then here is item's XML representation:
    ///     var xmlNode = item.data.dataObj;
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - item ID
    /// </param>

}
dhtmlxFolders.prototype.getItemDataObject = function (itemId) {
    ///	<summary>
    /// 
    ///		Example: var xmlNode = myFolders.getItemDataObject(myFolders._activeItemId);
    ///    alert(xmlNode.getAttribute("name"));
    ///	</summary>
    ///	<param name="itemId" type="Object">
    ///		itemId - id of item to get data object from
    /// </param>

}
dhtmlxFolders.prototype.getItemsNum = function () {
    ///	<summary>
    /// 
    ///		Example: alert("There are " + myFolders.getItemsNum() + " items in the folder")
    ///	</summary>

}
dhtmlxFolders.prototype.getNumberOfPages = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlxFolders.prototype.getSelectedId = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlxFolders.prototype.goToPage = function (pageNumber) {
    ///	<summary>
    /// opens specified page if paging enabled
    ///		Example: 
    ///	</summary>
    ///	<param name="pageNumber" type="Number">
    ///		pageNumber - 1 based index of page to open
    /// </param>

}
dhtmlxFolders.prototype.loadXML = function (url, xslFileURL) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - xml file URL
    /// </param>

}
dhtmlxFolders.prototype.loadXMLString = function (xmlString, xslFileURL) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="xmlString" type="String">
    ///		xmlString - xml string
    /// </param>

}
dhtmlxFolders.prototype.moveItem = function (sid, mode, tid, sObj, tObj) {
    ///	<summary>
    /// moves item
    ///		Example: 
    ///	</summary>
    ///	<param name="sid" type="String">
    ///		sid - source item id
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - mode of movement (next, before, in)
    /// </param>
    ///	<param name="tid" type="String">
    ///		tid - target item id
    /// </param>
    ///	<param name="sObj" type="Object">
    ///		sObj - source object (if not specified then current Folders object)
    /// </param>
    ///	<param name="tObj" type="Object">
    ///		tObj - target object (if not specified then current Folders object)
    /// </param>

}
dhtmlxFolders.prototype.selectItem = function (id, ctr, shf) {
    ///	<summary>
    /// select specified item in Folders
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - item id to select
    /// </param>
    ///	<param name="ctr" type="Boolean">
    ///		ctr - state of ctrl button (true/false)
    /// </param>
    ///	<param name="shf" type="Boolean">
    ///		shf - state of shift button (true/false)
    /// </param>

}
dhtmlxFolders.prototype.setCSSBaseName = function (cssBaseName) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlxFolders.prototype.setImagePath = function (newPath) {
    ///	<summary>
    /// sets new base dir for images used
    ///		Example: 
    ///	</summary>
    ///	<param name="newPath" type="String">
    ///		newPath - new base directory path
    /// </param>

}
dhtmlxFolders.prototype.setItemTagName = function (newTagName) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="newTagName" type="String">
    ///		newPath - new base directory path
    /// </param>

}
dhtmlxFolders.prototype.setItemType = function (name, processor) {
    ///	<summary>
    /// define type of items (see among defined types)
    ///		Example: 
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - name of type (if user-defined xml-xsl type, them use "xml_generic", if userdefined js type, then use "js_generic")
    /// </param>
    ///	<param name="processor" type="Object">
    ///		processor - (for xml-xsl) url of xsl file to use for this type, (for js) function which gets json object and returns html string.
    /// </param>

}
dhtmlxFolders.prototype.setPagerContainer = function (obj) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlxFolders.prototype.setUserData = function (name, value) {
    ///	<summary>
    /// sets userdata pair - name-value (if you use global variable with same name in xsl file, then it&#039;s value will be set to the value of userdata with this name)
    ///		Example: 
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - userdata block name
    /// </param>
    ///	<param name="value" type="String">
    ///		value - value of userdata block
    /// </param>

}
dhtmlxFolders.prototype.sortItems = function (sortFunc, order) {
    ///	<summary>
    /// sort items
    ///		Example: 
    ///	</summary>
    ///	<param name="sortFunc" type="Object">
    ///		sortFunc - custom function used for comparing two values. it gets 2 objects for comparison and must return positive int if necessary property of first ojects "bigger", 0 if they are equel for both and negative if second obj property is "bigger"
    /// </param>
    ///	<param name="order" type="String">
    ///		order - direction (0 or 1)
    /// </param>

}
dhtmlxFolders.prototype.unselectAll = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}


var dhtmlXDataView = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXDataView.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: view.attachEvent(evName, evHandler);
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - event name;
    /// </param>

}
dhtmlXDataView.prototype.bind = function (target, rule) {
    ///	<summary>
    /// 
    ///		Example: myview.bind(mygrid);
    ///	</summary>
    ///	<param name="target" type="Object">
    ///		target - (object) the object that method is assigned to (optional)
    /// </param>
    ///	<param name="rule" type="String">
    ///		rule - (function) sets the rule according which components will be bound (optional)
    /// </param>

}
dhtmlXDataView.prototype.clearAll = function () {
    ///	<summary>
    /// 
    ///		Example: view.clearAll();
    ///	</summary>

}
dhtmlXDataView.prototype.copy = function (sid, tindex, tobj, tid) {
    ///	<summary>
    /// 
    ///		Example: //make a copy of element
    ///    var new_id = view.copy(source_id);
    /// //make a copy at specific position
    ///    var new_id = view.copy(source_id, index);
    /// //make a copy in different view
    ///    var new_id = view.copy(source_id, index, some_other_view);
    ///    //or
    ///    var new_id = view.copy(source_id, null , some_other_view);
    /// �
    /// //make a copy with defined ID
    ///    view.copy(source_id, null, null, target_id);
    ///    //or
    ///    view.copy(source_id, index, null, target_id);
    ///    //or
    ///    view.copy(source_id, index, some_other_view, target_id);
    ///	</summary>
    ///	<param name="sid" type="String">
    ///		sid - id of source item, mandatory
    /// </param>

}
dhtmlXDataView.prototype.dataCount = function () {
    ///	<summary>
    /// 
    ///		Example: var count = view.dataCount();
    ///	</summary>

}
dhtmlXDataView.prototype.unselectAll = function () {
    ///	<summary>
    /// 
    ///		Example: view.unselectAll();
    ///	</summary>

}
dhtmlXDataView.prototype.unselect = function (id) {
    ///	<summary>
    /// Removes selection from a certain item.
    ///		Example: //unselect one record
    ///       view.unselect(id);
    ///    //unselect all
    ///       view.unselect();
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - item id which needs to be unselected, optional
    /// </param>

}
dhtmlXDataView.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes user-defined handler from inner events ( assuming that handler was attached by attachEvent )
    ///		Example: var id = view.attachEvent(evName, evHandler);
    ///               ...
    ///               view.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - if of handler ( result of attachEvent operation )
    /// </param>

}
dhtmlXDataView.prototype.edit = function (id) {
    ///	<summary>
    /// Switches specified item to the edit state
    ///		Example: view.edit(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of item in question
    /// </param>

}
dhtmlXDataView.prototype.exists = function () {
    ///	<summary>
    /// Returns true if the item with defined ID already exists
    ///		Example: var check = view.exists(id);
    ///	</summary>

}
dhtmlXDataView.prototype.filter = function (key, value) {
    ///	<summary>
    /// Filters dataview by provided parameters
    ///		Example: //show all items where Publisher == "Test"
    /// 	view.filter("Publisher","Test");
    /// //show all items where Publisher starts from "Test"
    ///     view.filter(function(obj,value){
    ///     	if (obj.Publisher.indexOf(value)==0) return true;
    ///     	return false;
    ///     },"Test");
    ///	</summary>
    ///	<param name="key" type="String">
    ///		key - name of property, or custom filtering method
    /// </param>

}
dhtmlXDataView.prototype.first = function () {
    ///	<summary>
    /// 
    ///		Example: var id = view.first();
    ///	</summary>

}
dhtmlXDataView.prototype.getSelected = function (as_array) {
    ///	<summary>
    /// Returns currently selected ID. If mutliselection is enabled and mutliple items are selected, this method will return array of IDs
    ///		Example: var id = view.getSelected();
    ///	</summary>
    ///	<param name="as_array" type="String">
    ///		as_array - forces return value to be an array
    /// </param>

}
dhtmlXDataView.prototype.get = function (id) {
    ///	<summary>
    /// Returns has of data , related to specific ID
    ///		Example: var data = view.get(id);
    /// 	alert(data.Version);
    /// 	data.Version = 2; //beware that you need to force refresh
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of item in question
    /// </param>

}
dhtmlXDataView.prototype.idByIndex = function (index) {
    ///	<summary>
    /// Returns ID of item with specified index
    ///		Example: var id = view.idByIndex(index);
    ///	</summary>
    ///	<param name="index" type="Number">
    ///		index - index of the item in question
    /// </param>

}
dhtmlXDataView.prototype.indexById = function (id) {
    ///	<summary>
    /// Returns index of item with specified ID
    ///		Example: var index = view.indexById(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		ID - ID of the item in question
    /// </param>

}
dhtmlXDataView.prototype.isSelected = function () {
    ///	<summary>
    /// Returns true, if item is selected
    ///		Example: var check = view.isSelected(id);
    ///	</summary>

}
dhtmlXDataView.prototype.last = function () {
    ///	<summary>
    /// 
    ///		Example: var id = view.last();
    ///	</summary>

}
dhtmlXDataView.prototype.load = function (url, type, callback) {
    ///	<summary>
    /// Loads data from remote url
    ///		Example: view.load("data.xml");
    /// 	view.load("data.xml",function(){
    /// 		//callback
    /// 	});
    /// 	//or
    /// 	view.load("data.xml","xml");
    /// 	view.load("data.json","json");
    /// 	//or 
    /// 	view.load("data.xml","xml",function(){
    /// 		//callback
    /// 	});
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - data url, need to be in the same domain
    /// </param>
    ///	<param name="type" type="String">
    ///		Callback is always the last parameter.
    /// </param>
    ///	<param name="callback" type="Function">
    ///		Methos is async., so you need to use callback to catch the moment when data is really loaded in the view.
    /// </param>

}
dhtmlXDataView.prototype.locate = function (ev) {
    ///	<summary>
    /// Returns item ID by html event ( checks if any item is in area of html event ). Returns null if relative item isn&#039;t found.
    ///		Example: some.onclick=function(e){
    /// 		var id = view.locate(e||event);
    /// 		if (id)
    /// 			do_something();
    /// 	}
    ///	</summary>
    ///	<param name="ev" type="String">
    ///		ev - native html event
    /// </param>

}
dhtmlXDataView.prototype.moveBottom = function (id) {
    ///	<summary>
    /// Set item as last item in the view.
    ///		Example: view.moveBottom(id)
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of item in question
    /// </param>

}
dhtmlXDataView.prototype.moveDown = function (id, step) {
    ///	<summary>
    /// Changes index of item , by moving it to the end of view on defined count of steps
    ///		Example: view.moveDown(id)
    /// 	//or
    /// 	view.moveDown(id,10);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of item in question
    /// </param>

}
dhtmlXDataView.prototype.moveTop = function (id) {
    ///	<summary>
    /// Set item as first item in the view.
    ///		Example: view.moveTop(id)
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of item in question
    /// </param>

}
dhtmlXDataView.prototype.moveUp = function (id, step) {
    ///	<summary>
    /// Changes index of item , by moving it to the start of view on defined count of steps
    ///		Example: view.moveUp(id)
    /// 	//or
    /// 	view.moveUp(id,10);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of item in question
    /// </param>

}
dhtmlXDataView.prototype.move = function (sid, tindex, tobj, tid) {
    ///	<summary>
    /// 
    ///		Example: //move to some position
    ///    view.move(source_id, index);
    /// //move to different view
    ///    view.move(source_id, index, some_other_view);
    ///    //or
    ///    view.move(source_id, null , some_other_view);
    ///    //or
    ///    view.move(source_id, index, some_other_view, target_id);
    ///	</summary>
    ///	<param name="sid" type="String">
    ///		sid - id of source item, mandatory
    /// </param>

}
dhtmlXDataView.prototype.next = function () {
    ///	<summary>
    /// returns ID of next item ( item with index == current + 1 )
    ///		Example: var next_id = view.next(id);
    ///	</summary>

}
dhtmlXDataView.prototype.parse = function (object, type) {
    ///	<summary>
    /// Parse object or string and fill the dataview by parsed items.
    ///		Example: view.parse("<data> ... </data>");
    /// 	//or
    /// 	view.parse([[1,2,3],[4,5,6]],"jsarray");
    ///	</summary>
    ///	<param name="object" type="Object">
    ///		object - string or object
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of data
    /// </param>

}
dhtmlXDataView.prototype.previous = function () {
    ///	<summary>
    /// returns ID of previous item ( item with index == current - 1 )
    ///		Example: var prev_id = view.previous(id);
    ///	</summary>

}
dhtmlXDataView.prototype.refresh = function (id) {
    ///	<summary>
    /// Repaints item or whole dataview
    ///		Example: //repaint single item
    /// 	view.refresh(id);
    /// 	//repaint whole view
    /// 	view.refresh();
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of item in question, optional
    /// </param>

}
dhtmlXDataView.prototype.selectAll = function () {
    ///	<summary>
    /// 
    ///		Example: view.selectAll();
    ///	</summary>

}
dhtmlXDataView.prototype.select = function (id) {
    ///	<summary>
    /// Marks item as selected
    ///		Example: //select one record
    ///       view.select(id);
    ///    //select all
    ///       view.select();
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of item which need to be selected, optional
    /// </param>

}
dhtmlXDataView.prototype.set = function (id, hash) {
    ///	<summary>
    /// Associates hash of data with some ID
    ///		Example: view.set(id,{
    /// 		property:value
    /// 	});
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - if of item in question
    /// </param>

}
dhtmlXDataView.prototype.show = function (id) {
    ///	<summary>
    /// Adjusts scrollbars of dataview, so item in question become visible.
    ///		Example: view.show(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of item in question
    /// </param>

}
dhtmlXDataView.prototype.sort = function (key, direction) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: view.sort("#Version#","asc");
    /// 	view.sort(function(a,b){
    /// 		return a.Version > b.Version ? 1 : -1;
    /// 	},"asc");
    ///	</summary>
    ///	<param name="key" type="String">
    ///		key - name of property, by which dataview will be sorted, or custom sorting method
    /// </param>

}
dhtmlXDataView.prototype.stopEdit = function () {
    ///	<summary>
    /// 
    ///		Example: view.stopEdit();
    ///	</summary>

}
dhtmlXDataView.prototype.customize = function (properties) {
    ///	<summary>
    /// Customizes current active template, by replacing default properties with one from provided object
    ///		Example: view.customize({
    /// 		some_path:"../imgs/",
    /// 		some_property:value
    /// 	});
    ///	</summary>
    ///	<param name="properties" type="String">
    ///		properties - set of custom properties
    /// </param>

}


var dhtmlChart = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlChart.prototype.add = function (obj) {
    ///	<summary>
    /// adds the new data object and redraws a chart
    ///		Example: chart.add({
    ///         id: 1,
    ///         value: 5.64,
    ///         label: 2009
    ///     });
    ///	</summary>
    ///	<param name="obj" type="Object">
    ///		obj - a data object
    /// </param>

}
dhtmlChart.prototype.addSeries = function (obj) {
    ///	<summary>
    /// 
    ///		Example: chart.addSeries({
    /// 	    value:"#sales1#",
    /// 	    color:"#45abf5",
    ///             label:"#sales1#"
    ///     });
    ///	</summary>
    ///	<param name="obj" type="Object">
    ///		obj - a data object
    /// </param>

}
dhtmlChart.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: chart.attachEvent(evName, evHandler);
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - event name;
    /// </param>

}
dhtmlChart.prototype.clearAll = function () {
    ///	<summary>
    /// 
    ///		Example: chart.clearAll();
    ///	</summary>

}
dhtmlChart.prototype.dataCount = function () {
    ///	<summary>
    /// 
    ///		Example: var count = chart.dataCount();
    ///	</summary>

}
dhtmlChart.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes user-defined handler from inner events ( assuming that handler was attached by attachEvent )
    ///		Example: var id = chart.attachEvent(evName, evHandler);
    ///               ...
    ///               chart.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - if of handler ( result of attachEvent operation )
    /// </param>

}
dhtmlChart.prototype.define = function (mode, value) {
    ///	<summary>
    /// Configures a property of chart
    ///		Example: chart.define("sort",{
    ///          by:"#sales#",dir:"asc",as:"int"
    ///      })
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		property - the name of mode or property which needs being configured
    /// </param>

}
dhtmlChart.prototype.exists = function () {
    ///	<summary>
    /// Returns true if the item with defined ID already exists
    ///		Example: var check = chart.exists(id);
    ///	</summary>

}
dhtmlChart.prototype.filter = function (key, value) {
    ///	<summary>
    /// Filters dataview by provided parameters
    ///		Example: //show all items where Publisher == "Test"
    ///     chart.filter("Publisher","Test");
    /// //show all items where Publisher starts from "Test"
    ///     chart.filter(function(obj,value){
    ///     	if (obj.Publisher.indexOf(value)==0) return true;
    ///     	return false;
    ///     },"Test");
    ///	</summary>
    ///	<param name="key" type="String">
    ///		key - name of property, or custom filtering method
    /// </param>

}
dhtmlChart.prototype.first = function () {
    ///	<summary>
    /// 
    ///		Example: var id = chart.first();
    ///	</summary>

}
dhtmlChart.prototype.get = function (id) {
    ///	<summary>
    /// Returns has of data , related to specific ID
    ///		Example: var data = chart.get(id);
    /// 	alert(data.sales);
    /// 	chart.sales = 5.6; //beware that you need to force refresh
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of item in question
    /// </param>

}
dhtmlChart.prototype.group = function () {
    ///	<summary>
    /// The method groups data by a certain property. The method get an object with the following properties as a parameter:
    ///		Example: chart.group({
    ///       by:"#company#",
    ///       map:{
    /// 	sales:["#sales#","sum"]
    ///       }
    ///     });
    ///	</summary>

}
dhtmlChart.prototype.idByIndex = function (index) {
    ///	<summary>
    /// Returns the ID of item with the specified index
    ///		Example: var id = chart.idByIndex(index);
    ///	</summary>
    ///	<param name="index" type="Number">
    ///		index - index of the item in question
    /// </param>

}
dhtmlChart.prototype.indexById = function (id) {
    ///	<summary>
    /// Returns the index of the item with the specified ID
    ///		Example: var index = view.indexById(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		ID - ID of the item in question
    /// </param>

}
dhtmlChart.prototype.last = function () {
    ///	<summary>
    /// 
    ///		Example: var id = chart.last();
    ///	</summary>

}
dhtmlChart.prototype.load = function (url, type, callback) {
    ///	<summary>
    /// Loads data from remote url
    ///		Example: chart.load("data.xml");
    /// 	chart.load("data.xml",function(){
    /// 		//callback
    /// 	});
    /// 	//or
    /// 	chart.load("data.xml","xml");
    /// 	chart.load("data.json","json");
    /// 	//or 
    /// 	chart.load("data.xml","xml",function(){
    /// 		//callback
    /// 	});
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - data url, need to be in the same domain
    /// </param>

}
dhtmlChart.prototype.next = function () {
    ///	<summary>
    /// returns the ID of the next item ( item with index == current + 1 )
    ///		Example: var next_id = chart.next(id);
    ///	</summary>

}
dhtmlChart.prototype.parse = function (object, type) {
    ///	<summary>
    /// Parse an object or a string and fill the chart by parsed items.
    ///		Example: chart.parse("<data> ... </data>");
    /// 	//or
    /// 	chart.parse([[1,2,3],[4,5,6]],"jsarray");
    ///	</summary>
    ///	<param name="object" type="Object">
    ///		object - string or object
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of data
    /// </param>

}
dhtmlChart.prototype.previous = function () {
    ///	<summary>
    /// returns the ID of the previous item ( item with index == current - 1 )
    ///		Example: var prev_id = chart.previous(id);
    ///	</summary>

}
dhtmlChart.prototype.refresh = function () {
    ///	<summary>
    /// 
    ///		Example: chart.refresh();
    ///	</summary>

}
dhtmlChart.prototype.remove = function (id) {
    ///	<summary>
    /// Removes an item by its ID and redraws a chart.
    ///		Example: // item with id = 12
    ///     chart.remove(12);
    ///     // the 6th item in a chart
    ///     chart.remove(chart.idByIndex(5));
    ///     // the 1st item
    ///     chart.remove(chart.first());
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - item id
    /// </param>

}
dhtmlChart.prototype.set = function (id, hash) {
    ///	<summary>
    /// Associates hash of data with some ID
    ///		Example: chart.set(id,{
    /// 		property:value
    /// 	});
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - the id of the item in question
    /// </param>

}
dhtmlChart.prototype.sort = function (key, direction) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: chart.sort("Year","asc","int");
    /// 	chart.sort(function(a,b){
    /// 		return a.Version > b.Version ? 1 : -1;
    /// 	},"asc");
    ///	</summary>
    ///	<param name="key" type="String">
    ///		key - name of property, by which chart will be sorted, or custom sorting method,
    /// </param>

}


var dhtmlXMenuObject = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXMenuObject.prototype.addCheckbox = function (mode, nextToId, pos, itemId, itemText, state, disabled) {
    ///	<summary>
    /// adds a new checkbox, sibling|child mode
    ///		Example: menu.addCheckbox(mode, nextToId, pos, itemId, itemText, state, disabled);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - (string) sibling|child
    /// </param>
    ///	<param name="nextToId" type="String">
    ///		nextToId - the item after which the checkbox will be added in the "sibling" mode or parent item&#039;s id in the "child" mode
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - item&#039;s position in the child mode (null for sibling)
    /// </param>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a new checkbox
    /// </param>
    ///	<param name="itemText" type="String">
    ///		itemText - text of a new checkbox
    /// </param>
    ///	<param name="state" type="String">
    ///		state - checked|unchecked
    /// </param>
    ///	<param name="disabled" type="String">
    ///		disabled - enabled|disabled
    /// </param>

}
dhtmlXMenuObject.prototype.addContextZone = function (zoneId) {
    ///	<summary>
    /// adds a contextual zone to a contextual menu
    ///		Example: var menu = new dhtmlXMenuObject();
    ///     menu.renderAsContextMenu();
    ///     // adding context zone
    ///     menu.addContextZone("myMenu");
    ///	</summary>
    ///	<param name="zoneId" type="Object">
    ///		zoneId - id of the object on page to render as a contextual zone
    /// </param>

}
dhtmlXMenuObject.prototype.addNewChild = function (parentId, pos, itemId, itemText, disabled, imgEnabled, imgDisabled) {
    ///	<summary>
    /// adds a new child item
    ///		Example: menu.addNewChild(parentId, pos, itemId, itemText, disabled, imgEnabled, imgDisabled);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - the item which will contain a new item in the sublevel
    /// </param>
    ///	<param name="pos" type="String">
    ///		position - the position of a new item
    /// </param>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a new item
    /// </param>
    ///	<param name="itemText" type="String">
    ///		itemText - text of a new item
    /// </param>
    ///	<param name="disabled" type="Boolean">
    ///		disabled - true|false, whether the item is disabled or not
    /// </param>
    ///	<param name="imgEnabled" type="String">
    ///		img - image for the enabled item
    /// </param>
    ///	<param name="imgDisabled" type="String">
    ///		imgDis - image for the disabled item
    /// </param>

}
dhtmlXMenuObject.prototype.addNewSeparator = function (nextToId, itemId) {
    ///	<summary>
    /// add a new separator
    ///		Example: menu.addNewSeparator(nextToId, itemId);
    ///	</summary>
    ///	<param name="nextToId" type="String">
    ///		nextToId - id of the element after which a new separator will be inserted
    /// </param>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a new separator
    /// </param>

}
dhtmlXMenuObject.prototype.addNewSibling = function (nextToId, itemId, itemText, disabled, imgEnabled, imgDisabled) {
    ///	<summary>
    /// adds a new sibling item
    ///		Example: menu.addNewSibling(nextToId, itemId, itemText, disabled, imgEnabled, imgDisabled);
    ///	</summary>
    ///	<param name="nextToId" type="String">
    ///		nextToId - id of the element after which a new one will be inserted
    /// </param>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a new item
    /// </param>
    ///	<param name="itemText" type="String">
    ///		itemText - text of a new item
    /// </param>
    ///	<param name="disabled" type="Boolean">
    ///		disabled - true|false, whether the item is disabled or not
    /// </param>
    ///	<param name="imgEnabled" type="String">
    ///		img - image for the enabled item
    /// </param>
    ///	<param name="imgDisabled" type="String">
    ///		imgDis - image for the disabled item
    /// </param>

}
dhtmlXMenuObject.prototype.addRadioButton = function (mode, nextToId, pos, itemId, itemText, group, state, disabled) {
    ///	<summary>
    /// adds a new radio button, sibling|child mode
    ///		Example: menu.addRadioButton(mode, nextToId, pos, itemId, itemText, group, state, disabled);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - (string) sibling|child
    /// </param>
    ///	<param name="nextToId" type="String">
    ///		nextToId - the item after which the radio button will be added in the "sibling" mode or parent item&#039;s id in the "child" mode
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - the item&#039;s position in the child mode (null for sibling)
    /// </param>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a new radio button
    /// </param>
    ///	<param name="itemText" type="String">
    ///		itemText - text of a new radio button
    /// </param>
    ///	<param name="group" type="String">
    ///		group - radiogroup&#039;s id
    /// </param>
    ///	<param name="state" type="String">
    ///		state - checked|unchecked
    /// </param>
    ///	<param name="disabled" type="String">
    ///		disabled - enabled|disabled
    /// </param>

}
dhtmlXMenuObject.prototype.attachEvent = function (original, catcher, CallObj) {
    ///	<summary>
    /// attaches an event handler
    ///		Example: menu.attachEvent("onClick", function(id){
    ///         // code here
    ///     });
    ///     // or
    ///     function doOnClick(){
    ///         // code here
    ///     }
    ///     menu.attachEvent("onClick", doOnClick);
    ///	</summary>
    ///	<param name="original" type="String">
    ///		original - event&#039;s original name;
    /// </param>
    ///	<param name="catcher" type="String">
    ///		catcher - event handler;
    /// </param>
    ///	<param name="CallObj" type="Object">
    ///		CallObj - object that will call the event.
    /// </param>

}
dhtmlXMenuObject.prototype.checkEvent = function (name) {
    ///	<summary>
    /// returns true if the event exists
    ///		Example: var isEventExists = menu.checkEvent("onClick"); // returns true/false
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - event&#039;s name
    /// </param>

}
dhtmlXMenuObject.prototype.clearAll = function () {
    ///	<summary>
    /// 
    ///		Example: menu.clearAll();
    ///	</summary>

}
dhtmlXMenuObject.prototype.clearHref = function (itemId) {
    ///	<summary>
    /// clears item href and back item to default onClick behavior
    ///		Example: menu.clearHref(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId
    /// </param>

}
dhtmlXMenuObject.prototype.clearItemImage = function (itemId) {
    ///	<summary>
    /// removes both enabled and disabled item images
    ///		Example: menu.clearItemImage(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item id
    /// </param>

}
dhtmlXMenuObject.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: var id = menu.attachEvent("onClick", function(){});
    ///     // detaching event
    ///     menu.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event&#039;s id
    /// </param>

}
dhtmlXMenuObject.prototype.enableDynamicLoading = function (url, icon) {
    ///	<summary>
    /// enables dynamic loading of sublevels
    ///		Example: menu.enableDynamicLoading("server.php", true);
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - server-side script, transmitted params are action=loadMenu and parentId
    /// </param>
    ///	<param name="icon" type="Boolean">
    ///		icon - true|false, replaces elemet&#039;s arrow with loading image while loading
    /// </param>

}
dhtmlXMenuObject.prototype.getCheckboxState = function (itemId) {
    ///	<summary>
    /// returns true if checkbox checked
    ///		Example: var isChecked = menu.getCheckboxState(itemId); // returns true/false
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		id - item id
    /// </param>

}
dhtmlXMenuObject.prototype.getContextMenuHideAllMode = function () {
    ///	<summary>
    /// 
    ///		Example: var isHideAllModeEnabled = menu.getContextMenuHideAllMode(); // returns true/false
    ///	</summary>

}
dhtmlXMenuObject.prototype.getHotKey = function (itemId) {
    ///	<summary>
    /// returns item&#039;s hot-key (just text label)
    ///		Example: var hkText = menu.getHotKey(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - menu item&#039;s id
    /// </param>

}
dhtmlXMenuObject.prototype.getItemImage = function (itemId) {
    ///	<summary>
    /// returns item&#039;s image - array(img, imgDis)
    ///		Example: var imgs = menu.getItemImage(itemId); // returns [img, imgDis]
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item
    /// </param>

}
dhtmlXMenuObject.prototype.getItemPosition = function (itemId) {
    ///	<summary>
    /// returns item&#039;s position in the current polygon
    ///		Example: var pos = menu.getItemPosition(itemId); // returns number
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id
    /// </param>

}
dhtmlXMenuObject.prototype.getItemText = function (itemId) {
    ///	<summary>
    /// returns item&#039;s text
    ///		Example: var text = menu.getItemText(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id
    /// </param>

}
dhtmlXMenuObject.prototype.getItemType = function (itemId) {
    ///	<summary>
    /// return item type by id (string)
    ///		Example: var type = menu.getItemType(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id
    /// </param>

}
dhtmlXMenuObject.prototype.getParentId = function (itemId) {
    ///	<summary>
    /// returns parent&#039;s id
    ///		Example: var parentId = menu.getParentId(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id
    /// </param>

}
dhtmlXMenuObject.prototype.getRadioChecked = function (group) {
    ///	<summary>
    /// returns a checked radio button id in the group
    ///		Example: var checkedId = menu.getRadioChecked(group);
    ///	</summary>
    ///	<param name="group" type="String">
    ///		group - radio button group name
    /// </param>

}
dhtmlXMenuObject.prototype.getTooltip = function (itemId) {
    ///	<summary>
    /// returns tooltip of a menu item
    ///		Example: var tip = menu.getTooltip(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - menu item&#039;s id
    /// </param>

}
dhtmlXMenuObject.prototype.getUserData = function (itemId, name) {
    ///	<summary>
    /// returns item&#039;s userdata
    ///		Example: var userData = menu.getUserData(itemId, name);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id
    /// </param>
    ///	<param name="name" type="String">
    ///		name - the name of userdata (string)
    /// </param>

}
dhtmlXMenuObject.prototype.hide = function () {
    ///	<summary>
    /// 
    ///		Example: menu.hide();
    ///	</summary>

}
dhtmlXMenuObject.prototype.hideContextMenu = function () {
    ///	<summary>
    /// 
    ///		Example: menu.hideContextMenu();
    ///	</summary>

}
dhtmlXMenuObject.prototype.hideItem = function (itemId) {
    ///	<summary>
    /// hides an item
    ///		Example: menu.hideItem(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		id - the item&#039;s id to hide
    /// </param>

}
dhtmlXMenuObject.prototype.isContextZone = function (zoneId) {
    ///	<summary>
    /// returns true if an object is used as a contextual zone for the menu
    ///		Example: var menu = new dhtmlXMenuObject();
    ///     menu.renderAsContextMenu();
    ///     // check if <div id="myMenu"> is context zone
    ///     var isZone = menu.isContextZone("myMenu"); // return false, not assigned yet
    ///     // add context zone
    ///     menu.addCOntextZone("myMenu");
    ///     // check again
    ///     var isZone2 = menu.isContextZone("myMenu"); // return true
    ///	</summary>
    ///	<param name="zoneId" type="Object">
    ///		zoneId - id of the object to check
    /// </param>

}
dhtmlXMenuObject.prototype.isItemEnabled = function (itemId) {
    ///	<summary>
    /// returns true if the item is enabled
    ///		Example: var isEnabled = menu.isItemEnabled(itemId); // returns true/false
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id to check
    /// </param>

}
dhtmlXMenuObject.prototype.isItemHidden = function (itemId) {
    ///	<summary>
    /// returns true if the item is hidden
    ///		Example: var isHidden = menu.isItemHidden(itemId); // returns true/false
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id to check
    /// </param>

}
dhtmlXMenuObject.prototype.loadFromHTML = function (objId, clearAfterAdd, onLoadFunction) {
    ///	<summary>
    /// loads menu data from an html and calls onLoadFunction when loading is done
    ///		Example: <script>
    ///         menu.loadFromHTML("menuData", true, function(){});
    ///         // od
    ///         function main(){
    ///             // code here
    ///         }
    ///         menu.loadFromHTML("menuData", true, main);
    ///     </script>
    ///	</summary>
    ///	<param name="objId" type="Object">
    ///		object - html data container
    /// </param>
    ///	<param name="clearAfterAdd" type="Boolean">
    ///		clearAfterAdd - true|false, removes the container object after the data is loaded
    /// </param>
    ///	<param name="onLoadFunction" type="String">
    ///		onLoadFunction - is called after the data is loaded (but before clearing html content if clear is set to true)
    /// </param>

}
dhtmlXMenuObject.prototype.loadXML = function (xmlFile, onLoadFunction) {
    ///	<summary>
    /// loads menu data from an xml file and calls onLoadFunction when loading is done
    ///		Example: <script>
    ///         menu.loadXML("path/to/file/file.xml", function(){
    ///             // will called if specified after menu will completely loaded
    ///         });
    ///         // or
    ///         onLoadFunction = function(){
    ///             // will called if specified after menu will completely loaded
    ///         }
    ///         menu.loadXML("path/to/file/file.xml", onLoadFunction);
    ///     </script>
    ///	</summary>
    ///	<param name="xmlFile" type="String">
    ///		xmlFile - an xml file with webmenu data
    /// </param>
    ///	<param name="onLoadFunction" type="String">
    ///		onLoadFunction - a function that is called after loading is done
    /// </param>

}
dhtmlXMenuObject.prototype.loadXMLString = function (xmlString, onLoadFunction) {
    ///	<summary>
    /// loads menu data from an xml string and calls onLoadFunction when loading is done
    ///		Example: <script>
    ///         onLoadFunction = function(){
    ///             // will be called if specified
    ///         }
    ///         menu.loadXMLString("<menu><item....>", onLoadFunction);
    ///     </script>
    ///	</summary>
    ///	<param name="xmlString" type="String">
    ///		xmlFile - an xml string with webmenu data
    /// </param>
    ///	<param name="onLoadFunction" type="String">
    ///		onLoadFunction - function that is called after loading is done
    /// </param>

}
dhtmlXMenuObject.prototype.removeContextZone = function (zoneId) {
    ///	<summary>
    /// removes an object from contextual zones list
    ///		Example: menu.removeContextZone(zoneId);
    ///	</summary>
    ///	<param name="zoneId" type="String">
    ///		zoneId - id of a contextual zone
    /// </param>

}
dhtmlXMenuObject.prototype.removeItem = function (itemId) {
    ///	<summary>
    /// removes an item from the menu with all nested sublevels
    ///		Example: menu.removeItem(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		id - id of the item for removing
    /// </param>

}
dhtmlXMenuObject.prototype.renderAsContextMenu = function () {
    ///	<summary>
    /// 
    ///		Example: menu.renderAsContextMenu();
    ///	</summary>

}
dhtmlXMenuObject.prototype.setAlign = function (align) {
    ///	<summary>
    /// set top level menu align
    ///		Example: menu.setAlign("right");
    ///	</summary>
    ///	<param name="align" type="String">
    ///		align - left|right
    /// </param>

}
dhtmlXMenuObject.prototype.setAutoHideMode = function (mode) {
    ///	<summary>
    /// sets to false to prevent hiding a contextual menu by a click
    ///		Example: menu.setAutoHideMode(mode);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXMenuObject.prototype.setAutoShowMode = function (mode) {
    ///	<summary>
    /// sets to false to prevent showing a contextual menu by a click
    ///		Example: menu.setAutoShowMode(mode);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXMenuObject.prototype.setCheckboxState = function (itemId, state) {
    ///	<summary>
    /// sets checkbox&#039;s state (checked/unchecked)
    ///		Example: menu.setCheckboxState(itemId, state);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id
    /// </param>
    ///	<param name="state" type="Boolean">
    ///		state - a new state (true|false)
    /// </param>

}
dhtmlXMenuObject.prototype.setContextMenuHideAllMode = function (mode) {
    ///	<summary>
    /// sets to true will hide all opened contextual menu polygons on mouseout
    ///		Example: menu.setContextMenuHideAllMode(mode);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXMenuObject.prototype.setHotKey = function (itemId, hkey) {
    ///	<summary>
    /// sets menu hot-key (just text label)
    ///		Example: menu.setHotKey(itemId, hkey);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - menu item&#039;s id
    /// </param>
    ///	<param name="hkey" type="String">
    ///		hkey - hot-key text (string)
    /// </param>

}
dhtmlXMenuObject.prototype.setHref = function (itemId, href, target) {
    ///	<summary>
    /// set href to item, overwrite old if exists
    ///		Example: menu.setHref(itemId, "www://dhtmlx.com", "blank");
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId
    /// </param>
    ///	<param name="href" type="String">
    ///		href - url to open instead of onClik event handling
    /// </param>
    ///	<param name="target" type="String">
    ///		target - target attribute
    /// </param>

}
dhtmlXMenuObject.prototype.setIconsPath = function (path) {
    ///	<summary>
    /// defines an url where necessary user embedded icons are located
    ///		Example: menu.setIconsPath("path/to/icons/folder/");
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - path on harddrive to items&#039; icons
    /// </param>

}
dhtmlXMenuObject.prototype.setIconsPath = function (path) {
    ///	<summary>
    /// defines an url where necessary user embedded icons are located
    ///		Example: menu.setIconsPath("path/to/icons/folder/");
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - path on harddrive to items&#039; icons
    /// </param>

}
dhtmlXMenuObject.prototype.setImagePath = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXMenuObject.prototype.setItemDisabled = function (itemId) {
    ///	<summary>
    /// disables an item
    ///		Example: menu.setItemDisabled(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - item&#039;s id to disable
    /// </param>

}
dhtmlXMenuObject.prototype.setItemEnabled = function (itemId) {
    ///	<summary>
    /// enables an item
    ///		Example: menu.setItemEnabled(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - item&#039;s id to enable
    /// </param>

}
dhtmlXMenuObject.prototype.setItemImage = function (itemId, img, imgDis) {
    ///	<summary>
    /// sets an image for the item
    ///		Example: menu.setItemImage(itemId, img, imgDis);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id
    /// </param>
    ///	<param name="img" type="String">
    ///		img - the image for the enabled item (empty string for none)
    /// </param>
    ///	<param name="imgDis" type="String">
    ///		imgDis - the image for the disabled item (empty string for none)
    /// </param>

}
dhtmlXMenuObject.prototype.setItemPosition = function (itemId, pos) {
    ///	<summary>
    /// sets new item&#039;s position in the current polygon (moves an item inside the single level)
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - the position (int)
    /// </param>

}
dhtmlXMenuObject.prototype.setItemText = function (itemId, text) {
    ///	<summary>
    /// sets text for the item
    ///		Example: menu.setItemText(itemId, text);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id
    /// </param>
    ///	<param name="text" type="String">
    ///		text - a new text
    /// </param>

}
dhtmlXMenuObject.prototype.setOpenMode = function (mode) {
    ///	<summary>
    /// sets open mode for the menu
    ///		Example: menu.setOpenMode("win"); // or "web"
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - win|web, the default mode is web, in the win mode a user should click anywhere to hide the menu, in the web mode - just put the mouse pointer out of the menu area (string)
    /// </param>

}
dhtmlXMenuObject.prototype.setOverflowHeight = function (itemsNum) {
    ///	<summary>
    /// limits the maximum number of visible items in polygons
    ///		Example: menu.setOverflowHeight(itemsNum);
    ///	</summary>
    ///	<param name="itemsNum" type="String">
    ///		itemsNum - count of the maximum number of visible items
    /// </param>

}
dhtmlXMenuObject.prototype.setRTL = function (state) {
    ///	<summary>
    /// set right-to-left mode
    ///		Example: �
    ///     menu.setRTL(true);
    ///	</summary>
    ///	<param name="state" type="Boolean">
    ///		state - true|false
    /// </param>

}
dhtmlXMenuObject.prototype.setRadioChecked = function (group, itemId) {
    ///	<summary>
    /// checks a radio button inside the group
    ///		Example: menu.setRadioChecked(group, itemId);
    ///	</summary>
    ///	<param name="group" type="String">
    ///		group - radio button group name
    /// </param>
    ///	<param name="itemId" type="String">
    ///		itemId - radio button&#039;s id
    /// </param>

}
dhtmlXMenuObject.prototype.setSkin = function (skin) {
    ///	<summary>
    /// changes menu skin
    ///		Example: menu.setSkin(skin);
    ///	</summary>
    ///	<param name="skin" type="String">
    ///		skin - skin name (string)
    /// </param>

}
dhtmlXMenuObject.prototype.setTooltip = function (itemId, tip) {
    ///	<summary>
    /// sets tooltip for a menu item
    ///		Example: menu.setTooltip(itemId, tip);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - menu item&#039;s id
    /// </param>
    ///	<param name="tip" type="String">
    ///		tip - tooltip
    /// </param>

}
dhtmlXMenuObject.prototype.setTopText = function (text) {
    ///	<summary>
    /// set top level additional text (in case of usual menubar)
    ///		Example: menu.setTopText(text);
    ///	</summary>
    ///	<param name="text" type="String">
    ///		text - text
    /// </param>

}
dhtmlXMenuObject.prototype.setUserData = function (itemId, name, value) {
    ///	<summary>
    /// sets userdata for an item
    ///		Example: menu.setUserData(itemId, name, value);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id
    /// </param>
    ///	<param name="name" type="String">
    ///		name - the name of userdata (string)
    /// </param>
    ///	<param name="value" type="String">
    ///		value - the value of userdata (usually string)
    /// </param>

}
dhtmlXMenuObject.prototype.setVisibleArea = function (x1, x2, y1, y2) {
    ///	<summary>
    /// sets the area in which the menu can appear, if the area is not set, the menu will occupy all available visible space
    ///		Example: menu.setVisibleArea(x1, x2, y1, y2);
    ///	</summary>
    ///	<param name="x1" type="String">
    ///		x1, x2 - int, leftmost and rightmost coordinates by x axis
    /// </param>
    ///	<param name="x2" type="String">
    ///		y1, y2 - int, topmost and bottommost coordinates by y axis
    /// </param>

}
dhtmlXMenuObject.prototype.setWebModeTimeout = function (tm) {
    ///	<summary>
    /// sets hide menu timeout (web mode only)
    ///		Example: menu.setWebModeTimeout(tm);
    ///	</summary>
    ///	<param name="tm" type="String">
    ///		tm - timeout, ms, 400 default
    /// </param>

}
dhtmlXMenuObject.prototype.showContextMenu = function (x, y) {
    ///	<summary>
    /// usercall to show a contextual menu
    ///		Example: menu.showContextMenu(x, y);
    ///	</summary>
    ///	<param name="x" type="String">
    ///		x - position of the menu on x axis
    /// </param>
    ///	<param name="y" type="String">
    ///		y - position of the menu on y axis
    /// </param>

}
dhtmlXMenuObject.prototype.showItem = function (itemId) {
    ///	<summary>
    /// shows an item
    ///		Example: menu.showItem(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - the item&#039;s id to show
    /// </param>

}
dhtmlXMenuObject.prototype.unload = function () {
    ///	<summary>
    /// 
    ///		Example: var menu = new dhtmlXMenuObject();
    ///     ...
    ///     // unloading menu
    ///     menu.unload();
    ///     menu = null;
    ///	</summary>

}


var dhtmlxToolbar = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlxToolbar.prototype.addButton = function (id, pos, text, imgEnabled, imgDisabled) {
    ///	<summary>
    /// adds a button to webbar
    ///		Example: toolbar.addButton(id, pos, text, imgEnabled, imgDisabled);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of a button
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - position of a button
    /// </param>
    ///	<param name="text" type="String">
    ///		text - text for a button (null for no text)
    /// </param>
    ///	<param name="imgEnabled" type="String">
    ///		imgEnabled - image for enabled state (null for no image)
    /// </param>
    ///	<param name="imgDisabled" type="String">
    ///		imgDisabled - image for desabled state (null for no image)
    /// </param>

}
dhtmlxToolbar.prototype.addButtonSelect = function (id, pos, text, opts, imgEnabled, imgDisabled) {
    ///	<summary>
    /// adds a select button to webbar
    ///		Example: toolbar.addButtonSelect(id, pos, text, opts, imgEnabled, imgDisabled);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of a select button
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - position of a select button
    /// </param>
    ///	<param name="text" type="String">
    ///		text - text for a select button (null for no text)
    /// </param>
    ///	<param name="opts" type="String">
    ///		opts - listed options for a select button
    /// </param>
    ///	<param name="imgEnabled" type="String">
    ///		imgEnabled - image for enabled state (null for no image)
    /// </param>
    ///	<param name="imgDisabled" type="String">
    ///		imgDisabled - image for desabled state (null for no image)
    /// </param>

}
dhtmlxToolbar.prototype.addButtonTwoState = function (id, pos, text, imgEnabled, imgDisabled) {
    ///	<summary>
    /// adds a two-state button to webbar
    ///		Example: toolbar.addButtonTwoState(id, pos, text, imgEnabled, imgDisabled);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of a two-state button
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - position of a two-state button
    /// </param>
    ///	<param name="text" type="String">
    ///		text - text for a two-state button (null for no text)
    /// </param>
    ///	<param name="imgEnabled" type="String">
    ///		imgEnabled - image for enabled state (null for no image)
    /// </param>
    ///	<param name="imgDisabled" type="String">
    ///		imgDisabled - image for desabled state (null for no image)
    /// </param>

}
dhtmlxToolbar.prototype.addInput = function (id, pos, value, width) {
    ///	<summary>
    /// adds an input item to webbar
    ///		Example: toolbar.addInput(id, pos, value, width);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of an input item
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - position of an input item
    /// </param>
    ///	<param name="value" type="String">
    ///		value - value (text) in an input item by the default
    /// </param>
    ///	<param name="width" type="String">
    ///		width - width of an input item (px)
    /// </param>

}
dhtmlxToolbar.prototype.addListOption = function (parentId, optionId, pos, type, text, img) {
    ///	<summary>
    /// adds a listed option to a select button
    ///		Example: toolbar.addListOption(parentId, optionId, pos, type, text, img);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - position of a listed option
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of a listed option (button|separator)
    /// </param>
    ///	<param name="text" type="String">
    ///		text - text for a listed option
    /// </param>
    ///	<param name="img" type="String">
    ///		img - image for a listed option
    /// </param>

}
dhtmlxToolbar.prototype.addSeparator = function (id, pos) {
    ///	<summary>
    /// adds a separator to webbar
    ///		Example: toolbar.addSeparator(id, pos);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of a separator
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - position of a separator
    /// </param>

}
dhtmlxToolbar.prototype.addSlider = function (id, pos, len, valueMin, valueMax, valueNow, textMin, textMax, tip) {
    ///	<summary>
    /// adds a slider to webbar
    ///		Example: toolbar.addSlider(id, pos, len, valueMin, valueMax, valueNow, textMin, textMax, tip);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of a slider
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - position of a slider
    /// </param>
    ///	<param name="len" type="String">
    ///		len - length (width) of a slider (px)
    /// </param>
    ///	<param name="valueMin" type="String">
    ///		valueMin - minimal available value of a slider
    /// </param>
    ///	<param name="valueMax" type="String">
    ///		valueMax - maximal available value of a slider
    /// </param>
    ///	<param name="valueNow" type="String">
    ///		valueNow - initial current value of a slider
    /// </param>
    ///	<param name="textMin" type="String">
    ///		textMin - label for minimal value side (on the left side)
    /// </param>
    ///	<param name="textMax" type="String">
    ///		textMax - label for maximal value side (on the right side)
    /// </param>
    ///	<param name="tip" type="String">
    ///		tip - tooltip template (%v will replaced with current value)
    /// </param>

}
dhtmlxToolbar.prototype.addText = function (id, pos, text) {
    ///	<summary>
    /// adds a text item to webbar
    ///		Example: toolbar.addText(id, pos, text);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of a text item
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - position of a text item
    /// </param>
    ///	<param name="text" type="String">
    ///		text - text for a text item
    /// </param>

}
dhtmlxToolbar.prototype.attachEvent = function (original, catcher, CallObj) {
    ///	<summary>
    /// attach an event handler to webbar
    ///		Example: toolbar.attachEvent("onClick", function(itemId){});
    ///     // or
    ///     function doOnClick(itemId){
    ///         // code here
    ///     }
    ///     toolbar.attachEvent("onClick", doOnClick);
    ///	</summary>
    ///	<param name="original" type="String">
    ///		original - event original name;
    /// </param>
    ///	<param name="catcher" type="String">
    ///		catcher - event handler;
    /// </param>
    ///	<param name="CallObj" type="Object">
    ///		CallObj - object which will call event.
    /// </param>

}
dhtmlxToolbar.prototype.checkEvent = function (name) {
    ///	<summary>
    /// returns true if event exists
    ///		Example: var isEventExists = toolbar.checkEvent("onClick"); // returns true/false
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - event name
    /// </param>

}
dhtmlxToolbar.prototype.clearAll = function () {
    ///	<summary>
    /// 
    ///		Example: toolbar.clearAll();
    ///	</summary>

}
dhtmlxToolbar.prototype.clearItemImage = function (itemId) {
    ///	<summary>
    /// removes an image of an item in enabled state
    ///		Example: toolbar.clearItemImage(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item
    /// </param>

}
dhtmlxToolbar.prototype.clearItemImageDis = function (itemId) {
    ///	<summary>
    /// removes an image of an item in disabled state
    ///		Example: toolbar.clearItemImageDis(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item
    /// </param>

}
dhtmlxToolbar.prototype.clearListOptionImage = function (parentId, optionId) {
    ///	<summary>
    /// removes an image (if exists) of a listed option
    ///		Example: toolbar.clearListOptionImage(parentId, optionId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: var id = toolbar.attachEvent("onClick", function(itemId){});
    ///     // detaching event
    ///     toolbar.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlxToolbar.prototype.disableItem = function (itemId) {
    ///	<summary>
    /// disables a specified item
    ///		Example: toolbar.disableItem(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item to disable
    /// </param>

}
dhtmlxToolbar.prototype.disableListOption = function (parentId, optionId) {
    ///	<summary>
    /// disables a listed option
    ///		Example: toolbar.disableListOption(parentId, optionId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.enableItem = function (itemId) {
    ///	<summary>
    /// enables a specified item
    ///		Example: toolbar.enableItem(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item to enable
    /// </param>

}
dhtmlxToolbar.prototype.enableListOption = function (parentId, optionId) {
    ///	<summary>
    /// enables a listed option
    ///		Example: toolbar.enableListOption(parentId, optionId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.forEachItem = function (handler) {
    ///	<summary>
    /// iterator, calls user handler for each item
    ///		Example: toolbar.forEachItem(function(itemId){
    ///         // code here
    ///     });
    ///     // or
    ///     function doWithItem(itemId){
    ///         // code here
    ///     }
    ///     toolbar.forEachItem(doWithItem);
    ///	</summary>
    ///	<param name="handler" type="String">
    ///		handler - user function, will take item id as an argument
    /// </param>

}
dhtmlxToolbar.prototype.forEachListOption = function (parentId, handler) {
    ///	<summary>
    /// calls user defined handler for each listed option of parentId
    ///		Example: toolbar.forEachListOption(parentId, function(optionId){
    ///         // code here
    ///     });
    ///     // or
    ///     function doWithListOption(optionId){
    ///         // code here
    ///     }
    ///     toolbar.forEachListOption(parentId, doWithListOption);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="handler" type="String">
    ///		handler - user defined function, listed option id will passed as an argument
    /// </param>

}
dhtmlxToolbar.prototype.getAllListOptions = function (parentId) {
    ///	<summary>
    /// returns array with ids of all listed options for parentId
    ///		Example: toolbar.getAllListOptions(parentId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>

}
dhtmlxToolbar.prototype.getItemState = function (itemId) {
    ///	<summary>
    /// returns current state of a two-state button
    ///		Example: var isPressed = toolbar.getItemState(itemId); // returns true/false
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a two-state item to check
    /// </param>

}
dhtmlxToolbar.prototype.getItemText = function (itemId) {
    ///	<summary>
    /// return cureent item&#039;s text
    ///		Example: var text = toolbar.getItemText(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item
    /// </param>

}
dhtmlxToolbar.prototype.getItemToolTip = function (itemId) {
    ///	<summary>
    /// return current item&#039;s tooltip
    ///		Example: var tip = toolbar.getItemToolTip(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item
    /// </param>

}
dhtmlxToolbar.prototype.getItemToolTipTemplate = function (itemId) {
    ///	<summary>
    /// returns a current tooltip template of a slider
    ///		Example: var tipTemplate = toolbar.getItemToolTipTemplate(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a slider
    /// </param>

}
dhtmlxToolbar.prototype.getListOptionImage = function (parentId, optionId) {
    ///	<summary>
    /// returns an image of a listed option
    ///		Example: var imgSrc = toolbar.getListOptionImage(parentId, optionId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.getListOptionPosition = function (parentId, optionId) {
    ///	<summary>
    /// returns a position of a listed option
    ///		Example: var pos = toolbar.getListOptionPosition(parentId, optionId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.getListOptionSelected = function (parentId) {
    ///	<summary>
    /// returns selected listed option
    ///		Example: var selectedId = toolbar.getListOptionSelected(parentId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>

}
dhtmlxToolbar.prototype.getListOptionText = function (parentId, optionId) {
    ///	<summary>
    /// returns a text of a listed option
    ///		Example: var text = toolbar.getListOptionText(parentId, optionId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.getListOptionToolTip = function (parentId, optionId) {
    ///	<summary>
    /// returns a tooltip of a listed option
    ///		Example: var tip = toolbar.getListOptionToolTip(parentId, optionId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.getMaxValue = function (itemId) {
    ///	<summary>
    /// returns current maximal value and label of a slider
    ///		Example: var maxVal = toolbar.getMaxValue(itemId); // returns [maxValue, maxLabel]
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a slider
    /// </param>

}
dhtmlxToolbar.prototype.getMinValue = function (itemId) {
    ///	<summary>
    /// return current minimal value and label of a slider
    ///		Example: var minVal = toolbar.getMinValue(itemId); // returns [minValue, minLabel]
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a slider
    /// </param>

}
dhtmlxToolbar.prototype.getPosition = function (itemId) {
    ///	<summary>
    /// returns a current position of an item
    ///		Example: var pos = toolbar.getPosition(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item
    /// </param>

}
dhtmlxToolbar.prototype.getType = function (itemId) {
    ///	<summary>
    /// return item type by item id (string)
    ///		Example: var type = toolbar.getType(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId
    /// </param>

}
dhtmlxToolbar.prototype.getTypeExt = function (itemId) {
    ///	<summary>
    /// return extended item type by item id (button select node)
    ///		Example: var typeExt = toolbar.getTypeExt(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId
    /// </param>

}
dhtmlxToolbar.prototype.getValue = function (itemId) {
    ///	<summary>
    /// returns a current value of a slider or an input item
    ///		Example: 
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a slider or an input item
    /// </param>

}
dhtmlxToolbar.prototype.getWidth = function (itemId) {
    ///	<summary>
    /// returns a current width of an input item
    ///		Example: var width = toolbar.getWidth(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an input item
    /// </param>

}
dhtmlxToolbar.prototype.hideItem = function (itemId) {
    ///	<summary>
    /// hides a specified item
    ///		Example: toolbar.hideItem(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item to hide
    /// </param>

}
dhtmlxToolbar.prototype.hideListOption = function (parentId, optionId) {
    ///	<summary>
    /// hides a listed option
    ///		Example: toolbar.hideListOption(parentId, optionId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.isEnabled = function (itemId) {
    ///	<summary>
    /// returns true if a specified item is enabled
    ///		Example: var isEn = toolbar.isEnabled(itemId); // returns true/false
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item to check
    /// </param>

}
dhtmlxToolbar.prototype.isListOptionEnabled = function (parentId, optionId) {
    ///	<summary>
    /// return true if a listed option is enabled
    ///		Example: var isOptEn = toolbar.isListOptionEnabled(parentId, optionId); // returns true/false
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.isListOptionVisible = function (parentId, optionId) {
    ///	<summary>
    /// return true if a listed option is visible
    ///		Example: var isOptVis = toolbar.isListOptionVisible(parentId, optionId); // returns true/false
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.isVisible = function (itemId) {
    ///	<summary>
    /// returns true if a specified item is visible
    ///		Example: var isVis = toolbar.isVisible(itemId); // returns true/false
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item to check
    /// </param>

}
dhtmlxToolbar.prototype.loadXML = function (xmlFile, onLoadFunction) {
    ///	<summary>
    /// loads data to object from xml file
    ///		Example: toolbar.loadXML("file.xml", function(){
    ///         // code here
    ///     });
    ///     // or
    ///     function main(){
    ///         // code here
    ///     }
    ///     toolbar.loadXML("file.xml", main);
    ///	</summary>
    ///	<param name="xmlFile" type="String">
    ///		xmlFile - file with dta to load
    /// </param>
    ///	<param name="onLoadFunction" type="String">
    ///		onLoadFunction - function to call after data will loaded
    /// </param>

}
dhtmlxToolbar.prototype.loadXMLString = function (xmlString, onLoadFunction) {
    ///	<summary>
    /// loads data to object from xml string
    ///		Example: var xmlStr = "<toolbar><item id='item_a' text='text_a'/><item id=...";
    ///     toolbar.loadXMLString(xmlStr, function(){
    ///         // code here
    ///     });
    ///     // or
    ///     function main(){
    ///         // code here
    ///     }
    ///     toolbar.loadXMLString(xmlStr, main);
    ///	</summary>
    ///	<param name="xmlString" type="String">
    ///		xmlString - xml string with data to load
    /// </param>
    ///	<param name="onLoadFunction" type="String">
    ///		onLoadFunction - function to call after data will loaded
    /// </param>

}
dhtmlxToolbar.prototype.removeItem = function (itemId) {
    ///	<summary>
    /// completely removes an item for a webbar
    ///		Example: toolbar.removeItem(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item
    /// </param>

}
dhtmlxToolbar.prototype.removeListOption = function (parentId, optionId) {
    ///	<summary>
    /// completely removes a listed option from a select button
    ///		Example: toolbar.removeListOption(parentId, optionId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.setIconsPath = function (path) {
    ///	<summary>
    /// set path to used images
    ///		Example: toolbar.setIconsPath("path/to/icons/");
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - path to images on harddisk
    /// </param>

}
dhtmlxToolbar.prototype.setIconsPath = function (path) {
    ///	<summary>
    /// set path to used images
    ///		Example: toolbar.setIconsPath("path/to/icons/");
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - path to images on harddisk
    /// </param>

}
dhtmlxToolbar.prototype.setItemImage = function (itemId, url) {
    ///	<summary>
    /// sets an image for an item in enabled state
    ///		Example: toolbar.setItemImage(itemId, url);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item
    /// </param>
    ///	<param name="url" type="String">
    ///		url - url of an image
    /// </param>

}
dhtmlxToolbar.prototype.setItemImageDis = function (itemId, url) {
    ///	<summary>
    /// sets an image for an item in disabled state
    ///		Example: toolbar.setItemImageDis(itemId, url);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item
    /// </param>
    ///	<param name="url" type="String">
    ///		url - url of an image
    /// </param>

}
dhtmlxToolbar.prototype.setItemState = function (itemId, state) {
    ///	<summary>
    /// sets a pressed/released state for a two-state button
    ///		Example: toolbar.setItemState(itemId, state); // state = true/false
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a two-state item
    /// </param>
    ///	<param name="state" type="Boolean">
    ///		state - state, true for pressed, false for released
    /// </param>

}
dhtmlxToolbar.prototype.setItemText = function (itemId, text) {
    ///	<summary>
    /// sets new text for an item
    ///		Example: toolbar.setItemText(itemId, text);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item
    /// </param>
    ///	<param name="text" type="String">
    ///		text - new text for an item
    /// </param>

}
dhtmlxToolbar.prototype.setItemToolTip = function (itemId, tip) {
    ///	<summary>
    /// sets a tooltip for an item
    ///		Example: toolbar.setItemToolTip(itemId, tip);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item
    /// </param>
    ///	<param name="tip" type="String">
    ///		tip - tooltip (empty for clear)
    /// </param>

}
dhtmlxToolbar.prototype.setItemToolTipTemplate = function (itemId, template) {
    ///	<summary>
    /// sets a tooltip template for a slider
    ///		Example: toolbar.setItemToolTipTemplate(itemId, template);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a slider
    /// </param>
    ///	<param name="template" type="String">
    ///		template - tooltip template (%v will replaced with current value)
    /// </param>

}
dhtmlxToolbar.prototype.setListOptionImage = function (parentId, optionId, img) {
    ///	<summary>
    /// sets an image for a listed option
    ///		Example: toolbar.setListOptionImage(parentId, optionId, img);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>
    ///	<param name="img" type="String">
    ///		img - image for a listed option
    /// </param>

}
dhtmlxToolbar.prototype.setListOptionPosition = function (parentId, optionId, pos) {
    ///	<summary>
    /// sets a position of a listed option (moves listed option)
    ///		Example: toolbar.setListOptionPosition(parentId, optionId, pos);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - position of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.setListOptionSelected = function (parentId, optionId) {
    ///	<summary>
    /// sets listed option selected
    ///		Example: toolbar.setListOptionSelected(parentId, optionId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.setListOptionText = function (parentId, optionId, text) {
    ///	<summary>
    /// sets a text for a listed option
    ///		Example: toolbar.setListOptionText(parentId, optionId, text);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>
    ///	<param name="text" type="String">
    ///		text - text for a listed option
    /// </param>

}
dhtmlxToolbar.prototype.setListOptionToolTip = function (parentId, optionId, tip) {
    ///	<summary>
    /// sets a tooltip for a listed option
    ///		Example: toolbar.setListOptionToolTip(parentId, optionId, tip);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>
    ///	<param name="tip" type="String">
    ///		tip - tooltip for a listed option
    /// </param>

}
dhtmlxToolbar.prototype.setMaxValue = function (itemId, value, label) {
    ///	<summary>
    /// sets maximal value and label for a slider
    ///		Example: toolbar.setMaxValue(itemId, value, label);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a slider
    /// </param>
    ///	<param name="value" type="String">
    ///		value - value (int)
    /// </param>
    ///	<param name="label" type="String">
    ///		label - label for value (empty for no label)
    /// </param>

}
dhtmlxToolbar.prototype.setMinValue = function (itemId, value, label) {
    ///	<summary>
    /// sets minimal value and label for a slider
    ///		Example: toolbar.setMinValue(itemId, value, label);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a slider
    /// </param>
    ///	<param name="value" type="String">
    ///		value - value (int)
    /// </param>
    ///	<param name="label" type="String">
    ///		label - label for value (empty for no label)
    /// </param>

}
dhtmlxToolbar.prototype.setPosition = function (itemId, pos) {
    ///	<summary>
    /// sets a new position for an item (moves item to desired position)
    ///		Example: toolbar.setPosition(itemId, pos);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item
    /// </param>
    ///	<param name="pos" type="String">
    ///		pos - new position
    /// </param>

}
dhtmlxToolbar.prototype.setRTL = function (state) {
    ///	<summary>
    /// enables rtl mode for toolbar
    ///		Example: toolbar.setRTL(state); // state = true/false
    ///	</summary>
    ///	<param name="state" type="Boolean">
    ///		state - true/false
    /// </param>

}
dhtmlxToolbar.prototype.setSkin = function (name) {
    ///	<summary>
    /// sets skin on the fly
    ///		Example: toolbar.setSkin(name);
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - skin name (string)
    /// </param>

}
dhtmlxToolbar.prototype.setValue = function (itemId, value, CallEvent) {
    ///	<summary>
    /// sets a value for a slider or an input item
    ///		Example: toolbar.setValue(itemId, value, CallEvent);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of a slider or an input item
    /// </param>
    ///	<param name="value" type="String">
    ///		value - value (int for slider, any for input item)
    /// </param>
    ///	<param name="CallEvent" type="Boolean">
    ///		CallEvent - true/false, call "onValueChanged" event for slider
    /// </param>

}
dhtmlxToolbar.prototype.setWidth = function (itemId, width) {
    ///	<summary>
    /// sets a width for an text/input/buttonSelect item
    ///		Example: toolbar.setWidth(itemId, width);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an text/input/buttonSelect item
    /// </param>
    ///	<param name="width" type="String">
    ///		width - new width (px)
    /// </param>

}
dhtmlxToolbar.prototype.showItem = function (itemId) {
    ///	<summary>
    /// shows a specified item
    ///		Example: toolbar.showItem(itemId);
    ///	</summary>
    ///	<param name="itemId" type="String">
    ///		itemId - id of an item to show
    /// </param>

}
dhtmlxToolbar.prototype.showListOption = function (parentId, optionId) {
    ///	<summary>
    /// shows a listed option
    ///		Example: toolbar.showListOption(parentId, optionId);
    ///	</summary>
    ///	<param name="parentId" type="String">
    ///		parentId - id of a select button
    /// </param>
    ///	<param name="optionId" type="String">
    ///		optionId - id of a listed option
    /// </param>

}
dhtmlxToolbar.prototype.unload = function () {
    ///	<summary>
    /// 
    ///		Example: var toolbar = new dhtmlXToolbarObject();
    ///     ...
    ///     // unloading
    ///     toolbar.unload();
    ///     toolbar = null;
    ///	</summary>

}


var dhtmlXCombo = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXCombo.prototype.addOption = function (options) {
    ///	<summary>
    /// add new option
    ///		Example: 
    ///	</summary>
    ///	<param name="options" type="String">
    ///		value - (variable) - different input for different kinds of options - please refer to examples
    /// </param>

}
dhtmlXCombo.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: combo.attachEvent(evName, evHandler);
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - name of the event;
    /// </param>

}
dhtmlXCombo.prototype.bind = function (target, rule) {
    ///	<summary>
    /// 
    ///		Example: mycombo.bind(mygrid);
    ///	</summary>
    ///	<param name="target" type="Object">
    ///		target - (object) the object that method is assigned to (optional)
    /// </param>
    ///	<param name="rule" type="String">
    ///		rule - (function) sets the rule according which components will be bound (optional)
    /// </param>

}
dhtmlXCombo.prototype.clearAll = function (all) {
    ///	<summary>
    /// clear all options from combobox
    ///		Example: 
    ///	</summary>
    ///	<param name="all" type="String">
    ///		value - (bool) clear current value as well
    /// </param>

}
dhtmlXCombo.prototype.closeAll = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXCombo.prototype.confirmValue = function () {
    ///	<summary>
    /// 
    ///		Example: <form action="cities.php" method="POST" onsubmit="confirmComboValue()">
    ///    <div id="combo_container" style="width:200px; height:30px;"></div>
    ///    <input type="submit" />
    /// </form>
    /// �
    /// <script>
    ///      var combo = new dhtmlXCombo("combo_container","state",200);
    ///      combo.loadXML("get_states.php");
    /// �
    ///      function confirmComboValue(){
    ///          combo.confirmValue();
    ///      }
    /// </script>
    ///	</summary>

}
dhtmlXCombo.prototype.deleteOption = function (value) {
    ///	<summary>
    /// delete option by value
    ///		Example: 
    ///	</summary>
    ///	<param name="value" type="String">
    ///		value - (string) value of option in question
    /// </param>

}
dhtmlXCombo.prototype.destructor = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXCombo.prototype.detachEvent = function (id) {
    ///	<summary>
    /// 
    ///		Example: combo.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlXCombo.prototype.disable = function (mode) {
    ///	<summary>
    /// disable combobox
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - (boolean) disable combobox
    /// </param>

}
dhtmlXCombo.prototype.enableFilteringMode = function (mode, url, cache, autosubload) {
    ///	<summary>
    /// switch between combobox and auto-filter modes
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - (boolean) enable filtering mode
    /// </param>
    ///	<param name="url" type="String">
    ///		url - (string) url for filtering from XML, optional
    /// </param>
    ///	<param name="cache" type="String">
    ///		cache - (boolean) XML caching, optional
    /// </param>
    ///	<param name="autosubload" type="String">
    ///		autosubload - (boolean) enable auto load additional suggestions on selecting last loaded option
    /// </param>

}
dhtmlXCombo.prototype.enableOptionAutoHeight = function (fl, maxHeight) {
    ///	<summary>
    /// enables or disables list auto height
    ///		Example: 
    ///	</summary>
    ///	<param name="fl" type="Boolean">
    ///		flag - (boolean) true/false
    /// </param>
    ///	<param name="maxHeight" type="String">
    ///		maxHeight - (int) height limitation (if a list height is bigger than maxHeight, a vertical scroll appears)
    /// </param>

}
dhtmlXCombo.prototype.enableOptionAutoPositioning = function (fl) {
    ///	<summary>
    /// enables or disables options auto positioning
    ///		Example: 
    ///	</summary>
    ///	<param name="fl" type="Boolean">
    ///		flag - (boolean) true/false
    /// </param>

}
dhtmlXCombo.prototype.enableOptionAutoWidth = function (fl) {
    ///	<summary>
    /// enables or disables options auto width
    ///		Example: 
    ///	</summary>
    ///	<param name="fl" type="Boolean">
    ///		flag - (boolean) true/false
    /// </param>

}
dhtmlXCombo.prototype.getActualValue = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXCombo.prototype.getChecked = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXCombo.prototype.getComboText = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXCombo.prototype.getIndexByValue = function (val) {
    ///	<summary>
    /// return index of item by value
    ///		Example: 
    ///	</summary>
    ///	<param name="val" type="String">
    ///		value - (string) value of option in question
    /// </param>

}
dhtmlXCombo.prototype.getOption = function (value) {
    ///	<summary>
    /// get Option by value
    ///		Example: 
    ///	</summary>
    ///	<param name="value" type="String">
    ///		value - (string) value of option in question
    /// </param>

}
dhtmlXCombo.prototype.getOptionByIndex = function (ind) {
    ///	<summary>
    /// get Option by index
    ///		Example: 
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - (int) index of option in question
    /// </param>

}
dhtmlXCombo.prototype.getOptionByLabel = function (value) {
    ///	<summary>
    /// get Option by label
    ///		Example: 
    ///	</summary>
    ///	<param name="value" type="String">
    ///		label - (string) label of option in question
    /// </param>

}
dhtmlXCombo.prototype.getSelectedIndex = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXCombo.prototype.getSelectedText = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXCombo.prototype.getSelectedValue = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXCombo.prototype.loadXML = function (url, afterCall) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - (string) xml url
    /// </param>

}
dhtmlXCombo.prototype.loadXMLString = function (astring) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="astring" type="String">
    ///		astring - (string) xml string
    /// </param>

}
dhtmlXCombo.prototype.openSelect = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXCombo.prototype.readonly = function (mode, autosearch) {
    ///	<summary>
    /// switch to readonly mode
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - (boolean) readonly mode
    /// </param>
    ///	<param name="autosearch" type="String">
    ///		autosearch - (boolean) true by default
    /// </param>

}
dhtmlXCombo.prototype.render = function (mode) {
    ///	<summary>
    /// enable/disable immideatly rendering after changes in combobox
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - (boolean) enable/disable
    /// </param>

}
dhtmlXCombo.prototype.selectOption = function (ind, filter, conf) {
    ///	<summary>
    /// select option
    ///		Example: 
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - (int) index of option in question
    /// </param>
    ///	<param name="filter" type="String">
    ///		filter - (boolean) enable autocomplit range, optional
    /// </param>
    ///	<param name="conf" type="Boolean">
    ///		conf - (boolean) true for real selection, false for pre-selection
    /// </param>

}
dhtmlXCombo.prototype.setChecked = function (index, mode) {
    ///	<summary>
    /// sets option checked
    ///		Example: 
    ///	</summary>
    ///	<param name="index" type="Number">
    ///		index - option index
    /// </param>

}
dhtmlXCombo.prototype.setComboText = function (text) {
    ///	<summary>
    /// set text in covmbobox
    ///		Example: 
    ///	</summary>
    ///	<param name="text" type="String">
    ///		text - (string) new text label
    /// </param>

}
dhtmlXCombo.prototype.setComboValue = function (text) {
    ///	<summary>
    /// set text in covmbobox
    ///		Example: 
    ///	</summary>
    ///	<param name="text" type="String">
    ///		text - (string) new text label
    /// </param>

}
dhtmlXCombo.prototype.setDefaultImage = function (url) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - url of default image
    /// </param>

}
dhtmlXCombo.prototype.setName = function (name) {
    ///	<summary>
    /// set name used while form submit
    ///		Example: 
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - (string) new combobox name
    /// </param>

}
dhtmlXCombo.prototype.setOptionHeight = function (height) {
    ///	<summary>
    /// set height of combo list
    ///		Example: 
    ///	</summary>
    ///	<param name="height" type="String">
    ///		height - (number) height
    /// </param>

}
dhtmlXCombo.prototype.setOptionWidth = function (width) {
    ///	<summary>
    /// set width of combo list
    ///		Example: 
    ///	</summary>
    ///	<param name="width" type="String">
    ///		width - (number) width
    /// </param>

}
dhtmlXCombo.prototype.setSize = function (new_size) {
    ///	<summary>
    /// change control size
    ///		Example: 
    ///	</summary>
    ///	<param name="new_size" type="String">
    ///		new_size - (int) new size value
    /// </param>

}
dhtmlXCombo.prototype.show = function (mode) {
    ///	<summary>
    /// show combox ( reversion to hide command )
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - (boolean) enable/disable
    /// </param>

}
dhtmlXCombo.prototype.unSelectOption = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXCombo.prototype.updateOption = function (oldvalue, avalue, atext, acss) {
    ///	<summary>
    /// update option in combobox
    ///		Example: 
    ///	</summary>
    ///	<param name="oldvalue" type="Number">
    ///		oldvalue - (string) index of option in question
    /// </param>
    ///	<param name="avalue" type="String">
    ///		avalue - (variable)
    /// </param>

}


var dhtmlXGridObject = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXGridObject.prototype.addRow = function (new_id, text, ind) {
    ///	<summary>
    /// add row to the grid
    ///		Example: var newId = (new Date()).valueOf();
    ///         grid.addRow(newId,"");
    ///	</summary>
    ///	<param name="new_id" type="String">
    ///		new_id - row ID, must be unique
    /// </param>
    ///	<param name="text" type="String">
    ///		text - row values, may be a comma separated list or an array
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - index of new row, optional, row added to the last position by default
    /// </param>

}
dhtmlXGridObject.prototype.addRowFromClipboard = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.addRowFromClipboard();
    ///	</summary>

}
dhtmlXGridObject.prototype.adjustColumnSize = function (cInd) {
    ///	<summary>
    /// adjusts column size to make all content visible
    ///		Example: //adjust first column size
    ///    mygrid.adjustColumnSize(0);
    ///	</summary>
    ///	<param name="cInd" type="Number">
    ///		cInd - index of column
    /// </param>

}
dhtmlXGridObject.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: <script>
    ///   grid.attachEvent("onRowSelect",function(rowId,cellIndex){
    ///      alert("Row with id="+rowId+" was selected");
    ///   });
    /// </script>
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - name of the event;
    /// </param>
    ///	<param name="evHandler" type="Function">
    ///		return &#039;true&#039;; -  confirm action
    /// </param>

}
dhtmlXGridObject.prototype.attachFooter = function (values, style) {
    ///	<summary>
    /// attach additional line to footer
    ///		Example: //plain usage
    ///         grid.attachFooter("A,B,C,D");
    ///         //alternative syntax
    ///         grid.attachFooter(["A","B","C","D"])
    ///         //colspans in footer
    ///         grid.attachFooter("A,#cspan,C,#cspan");
    ///         //rowspans in footer
    ///         grid.attachFooter("A,#rspan,C,#rspan");
    ///         //styles assigned
    ///         grid.attachFooter("A,B,C,D",["","color:red;","",""]);
    ///	</summary>
    ///	<param name="values" type="String">
    ///		values - array of header titles
    /// </param>
    ///	<param name="style" type="String">
    ///		style - array of styles, optional
    /// </param>

}
dhtmlXGridObject.prototype.attachHeader = function (values, style) {
    ///	<summary>
    /// attach additional line to header
    ///		Example: //plain usage
    ///         grid.attachHeader("A,B,C,D");
    ///         //alternative syntax
    ///         grid.attachHeader(["A","B","C","D"])
    ///         //colspans in header
    ///         grid.attachHeader("A,#cspan,C,#cspan");
    ///         //rowspans in header
    ///         grid.attachHeader("A,#rspan,C,#rspan");
    ///         //styles assigned
    ///         grid.attachHeader("A,B,C,D",["","color:red;","",""]);
    ///	</summary>
    ///	<param name="values" type="String">
    ///		values - array of header titles
    /// </param>
    ///	<param name="style" type="String">
    ///		style - array of styles, optional
    /// </param>

}
dhtmlXGridObject.prototype.attachToObject = function (obj) {
    ///	<summary>
    /// 
    ///		Example: mygrid.attachToObject(obj);
    ///	</summary>
    ///	<param name="obj" type="Object">
    ///		obj - object to attach to
    /// </param>

}
dhtmlXGridObject.prototype.bind = function (target, rule) {
    ///	<summary>
    /// 
    ///		Example: mygrid.bind(myCombo, function(data, filter){
    /// 		return myGrid.cells(data, 2).getValue() == filter.text;
    /// });
    ///	</summary>
    ///	<param name="target" type="Object">
    ///		target - (object) the object that method is assigned to (optional)
    /// </param>
    ///	<param name="rule" type="String">
    ///		rule - (function) sets the rule according which components will be bound (optional)
    /// </param>

}
dhtmlXGridObject.prototype.cellById = function (row_id, col) {
    ///	<summary>
    /// gets dhtmlXGridCellObject object (if no arguments then gets dhtmlXGridCellObject object of currently selected cell)
    ///		Example: var cellObj = grid.cellById(row_id, col);
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id
    /// </param>
    ///	<param name="col" type="Number">
    ///		col -  column index
    /// </param>

}
dhtmlXGridObject.prototype.cellByIndex = function (row_index, col) {
    ///	<summary>
    /// gets dhtmlXGridCellObject object
    ///		Example: var cellObj = grid.cellByIndex(row_index, col);
    ///	</summary>
    ///	<param name="row_index" type="Number">
    ///		row_index -  row index
    /// </param>
    ///	<param name="col" type="Number">
    ///		col -  column index
    /// </param>

}
dhtmlXGridObject.prototype.cellToClipboard = function (rowId, cellInd) {
    ///	<summary>
    /// copy value of cell to clipboard
    ///		Example: //minimal parameters set
    ///    mygrid.cellToClipboard();
    ///    //maximal parameters set
    ///    mygrid.cellToClipboard("rowID",0);
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row (optional, use selected row by default)
    /// </param>
    ///	<param name="cellInd" type="Number">
    ///		cellInd - column index(optional, use selected cell by default)
    /// </param>

}
dhtmlXGridObject.prototype.cells = function (row_id, col) {
    ///	<summary>
    /// gets dhtmlXGridCellObject object (if no arguments then gets dhtmlXGridCellObject object of currently selected cell)
    ///		Example: var cellObj = grid.cells(row_id, col);
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id
    /// </param>
    ///	<param name="col" type="Number">
    ///		col -  column index
    /// </param>

}
dhtmlXGridObject.prototype.cells2 = function (row_index, col) {
    ///	<summary>
    /// gets dhtmlXGridCellObject object
    ///		Example: var cellObj = grid.cells2(row_index, col);
    ///	</summary>
    ///	<param name="row_index" type="Number">
    ///		row_index -  row index
    /// </param>
    ///	<param name="col" type="Number">
    ///		col -  column index
    /// </param>

}
dhtmlXGridObject.prototype.changePage = function (pageNum) {
    ///	<summary>
    /// change current page in grid
    ///		Example: //Go to the 5th page
    ///    grid.changePage(5);
    ///	</summary>
    ///	<param name="pageNum" type="String">
    ///		pageNum -  new active page
    /// </param>

}
dhtmlXGridObject.prototype.changePageRelative = function (ind) {
    ///	<summary>
    /// change current page in grid
    ///		Example: <a href="javascript:void(0)" onclick="grid.changePageRelative(-1)">Previous page</a>
    /// <a href="javascript:void(0)" onclick="grid.changePageRelative(1)">Next page</a>
    ///	</summary>
    ///	<param name="ind" type="String">
    ///		ind - correction ( -1,1,2  etc) to current active page
    /// </param>

}
dhtmlXGridObject.prototype.changeRowId = function (oldRowId, newRowId) {
    ///	<summary>
    /// changes id of the row to the new one
    ///		Example: mygrid.changeRowId("old_rowID","new_rowID");
    ///	</summary>
    ///	<param name="oldRowId" type="String">
    ///		oldRowId - row id to change
    /// </param>
    ///	<param name="newRowId" type="String">
    ///		newRowId - row id to set
    /// </param>

}
dhtmlXGridObject.prototype.checkAll = function (mode) {
    ///	<summary>
    /// check all checkboxes in grid
    ///		Example: //check all checkboxes in grid
    ///    mygrid.checkAll(true);
    ///    //uncheck all checkboxes in grid
    ///    mygrid.checkAll(false)
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} check\uncheck all checkboxes in grid (optional, true by default)
    /// </param>

}
dhtmlXGridObject.prototype.clearAll = function (header) {
    ///	<summary>
    /// deletes all rows in grid
    ///		Example: //delete all rows from the grid
    ///    mygrid.clearAll();
    ///    //delete all rows from the grid, clear header
    ///    grid.clearAll(true);
    ///	</summary>
    ///	<param name="header" type="String">
    ///		header - (boolean) enable/disable cleaning header
    /// </param>

}
dhtmlXGridObject.prototype.clearAndLoad = function (url, call, type) {
    ///	<summary>
    /// clears existing grid state and load data from external file ( xml, json, jsarray, csv )
    ///		Example: //clear grid and load new data
    ///    mygrid.clearAndLoad("grid_new.xml");
    ///    //clear grid, load new data, execute doAfterRefresh() function after grid was loaded
    ///    mygrid.clearAndLoad("grid_new.xml",doAfterRefresh);
    ///    //clear grid, load new data in csv format, execute doAfterRefresh() function after grid was loaded
    ///    mygrid.clearAndLoad("grid_new.csv",doAfterRefresh,csv);
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - url to external file
    /// </param>
    ///	<param name="call" type="String">
    ///		call - after loading callback function, optional, can be ommited
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of data (xml,csv,json,jsarray) , optional, xml by default
    /// </param>

}
dhtmlXGridObject.prototype.clearChangedState = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.clearChangedState();
    ///	</summary>

}
dhtmlXGridObject.prototype.clearConfigCookie = function (name) {
    ///	<summary>
    /// clear cookie with grid config details
    ///		Example: <button onclick="mygrid.clearConfigCookie()">Clear cookies</button>
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXGridObject.prototype.clearSelection = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.clearSelection();
    ///	</summary>

}
dhtmlXGridObject.prototype.collapseAllGroups = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.collapseAllGroups();
    ///	</summary>

}
dhtmlXGridObject.prototype.collapseGroup = function (val) {
    ///	<summary>
    /// collapse group of rows
    ///		Example: //collapse "John Grisham" group
    ///    mygrid.collapseGroup('John Grisham');
    ///	</summary>
    ///	<param name="val" type="String">
    ///		val - value to use to determine what group to collapse (in other words this should be value common for all of them)
    /// </param>

}
dhtmlXGridObject.prototype.collectValues = function (column) {
    ///	<summary>
    /// get all possible values in column
    ///		Example: //collect possible values in the 2nd column
    ///    var values=mygrid.collectValues(1);
    ///	</summary>
    ///	<param name="column" type="Number">
    ///		column - {number} zero based index of column
    /// </param>

}
dhtmlXGridObject.prototype.copyBlockToClipboard = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.attachEvent("onKeyPress",onKeyPressed);
    /// ...
    /// function onKeyPressed(code,ctrl,shift){
    /// 	if(code==67&&ctrl){
    /// 	    mygrid.setCSVDelimiter("\t")
    /// 	    mygrid.copyBlockToClipboard()
    /// 	}
    /// 	if(code==86&&ctrl){
    /// 	    mygrid.pasteBlockFromClipboard()
    /// 	}
    /// 	return true;
    /// }
    ///	</summary>

}
dhtmlXGridObject.prototype.copyRowContent = function (from_row_id, to_row_id) {
    ///	<summary>
    /// copies row content to another existing row
    ///		Example: mygrid.copyRowContent("from_row_id","to_row_id");
    ///	</summary>
    ///	<param name="from_row_id" type="String">
    ///		from_row_id - id of the row to copy content from
    /// </param>
    ///	<param name="to_row_id" type="String">
    ///		to_row_id - id of the row to copy content to
    /// </param>

}
dhtmlXGridObject.prototype.deleteColumn = function (ind) {
    ///	<summary>
    /// delete column
    ///		Example: //delete first column
    ///    mygrid.deleteColumn(0);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - index of column
    /// </param>

}
dhtmlXGridObject.prototype.deleteRow = function (row_id) {
    ///	<summary>
    /// delete row from the grid
    ///		Example: //delete row with id "row1"
    ///    mygrid.deleteRow("row1");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row ID
    /// </param>

}
dhtmlXGridObject.prototype.deleteSelectedRows = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.deleteSelectedRows();
    ///	</summary>

}
dhtmlXGridObject.prototype.destructor = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.destructor();
    ///	</summary>

}
dhtmlXGridObject.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: grid.detachEvent(id); // unique id of the event handler
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlXGridObject.prototype.detachFooter = function (index) {
    ///	<summary>
    /// remove footer line from grid (opposite to attachFooter)
    ///		Example: mygrid.detachFooter(0);//detach first footer's line
    ///	</summary>
    ///	<param name="index" type="Number">
    ///		index - index of a footer
    /// </param>

}
dhtmlXGridObject.prototype.detachHeader = function (index) {
    ///	<summary>
    /// remove header line from grid (opposite to attachHeader)
    ///		Example: mygrid.detachHeader(0);//detach first header's line
    ///	</summary>
    ///	<param name="index" type="Number">
    ///		index - index of row to be removed ( zero based )
    /// </param>

}
dhtmlXGridObject.prototype.disableUndoRedo = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.disableUndoRedo();
    ///	</summary>

}
dhtmlXGridObject.prototype.doRedo = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.doRedo();
    ///	</summary>

}
dhtmlXGridObject.prototype.doUndo = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.doUndo();
    ///	</summary>

}
dhtmlXGridObject.prototype.doesRowExist = function (row_id) {
    ///	<summary>
    /// determines if row with specified id exists
    ///		Example: var exist=mygrid.doesRowExist("some_row_ID");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>

}
dhtmlXGridObject.prototype.editCell = function () {
    ///	<summary>
    /// 
    ///		Example: <button onclick="(arguments[0]||window.event).cancelBubble=true; selectAndEdit()">Edit cell</button>
    /// <script>
    ///    function selectAndEdit(){
    /// 	mygrid.selectCell(rowIndex,cellIndex);
    /// 	mygrid.editCell();
    ///    }
    /// </script>
    ///	</summary>

}
dhtmlXGridObject.prototype.editStop = function (mode) {
    ///	<summary>
    /// retuns value from editor(if presents) to cell and closes editor
    ///		Example: //close opened editor and return value from editor to the cell
    ///    mygrid.editStop();
    ///    //close opened editor and revert cell value to the previous one
    ///    mygrid.editStop(true);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - if true - current edit value will be reverted to previous one
    /// </param>

}
dhtmlXGridObject.prototype.enableAlterCss = function (cssE, cssU, perLevel, levelUnique) {
    ///	<summary>
    /// set even/odd css styles
    ///		Example: <style>
    /// .even{
    ///    background-color:#22FF44;
    ///    }
    /// .uneven{
    ///    background-color:#41964e;
    ///    }	
    /// </style>
    /// <script>
    ///    //minimal parameters set:
    ///    mygrid.enableAlterCss("even","uneven");
    ///    //disable even/odd rows in the grid:
    ///    mygrid.enableAlterCss("","");
    ///    //color rows in treeGrid by order:
    ///    treeGrid.enableAlterCss("even","uneven",false,false);
    ///    //color rows in treeGrid by level,every row level will have unique class (even_0 - 1st level, uneven_1 - 2nd level, even_2 - 3rd level, etc.)
    ///    treeGrid.enableAlterCss("even","uneven",true,true);
    /// </script>
    ///	</summary>
    ///	<param name="cssE" type="String">
    ///		cssE - name of css class for even rows
    /// </param>
    ///	<param name="cssU" type="String">
    ///		cssU - name of css class for odd rows
    /// </param>
    ///	<param name="perLevel" type="Boolean">
    ///		perLevel - true/false - mark rows not by order, but by level in treegrid (optional, default value: true - treeGrid, false - Grid)
    /// </param>
    ///	<param name="levelUnique" type="Boolean">
    ///		levelUnique - true/false - creates additional unique css class based on row level (optional, false by default)
    /// </param>

}
dhtmlXGridObject.prototype.enableAutoHeight = function (mode, maxHeight, countFullHeight) {
    ///	<summary>
    /// enable autoheight of grid
    ///		Example: //enable auto height mode
    ///    mygrid.enableAutoHeight(true);
    /// �
    ///    //disable auto height mode
    ///    mygrid.enableAutoHeight(false);
    /// �
    ///    //enable auto height mode, set maximum height before scrolling appears, only data part included in max height calculation
    ///    mygrid.enableAutoHeight(true,100);
    /// �
    ///    //enable auto height mode, set maximum height before scrolling appears, all grid height included in max height calculation
    ///    mygrid.enableAutoHeight(true,100,true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>
    ///	<param name="maxHeight" type="String">
    ///		maxHeight - maximum height before scrolling appears (no limit by default)
    /// </param>
    ///	<param name="countFullHeight" type="Boolean">
    ///		countFullHeight - control the usage of maxHeight parameter - when set to true all grid height included in max height calculation, if false then only data part (no header) of grid included in calcualation (false by default)
    /// </param>

}
dhtmlXGridObject.prototype.enableAutoHiddenColumnsSaving = function (name, cookie_param) {
    ///	<summary>
    /// enable automatic saving column state ( hidden | shown )
    ///		Example: //minimal parameters set
    ///    mygrid.enableAutoHiddenColumnsSaving();
    ///    //maximal parameters set
    ///    mygrid.enableAutoHiddenColumnsSaving("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - optional, additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.enableAutoSaving = function (name, cookie_param) {
    ///	<summary>
    /// 
    ///		Example: //minimal parameters set
    ///    mygrid.enableAutoSaving();
    ///    //maximal parameters set
    ///    mygrid.enableAutoSaving("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.enableAutoSizeSaving = function (name, cookie_param) {
    ///	<summary>
    /// enable automatic size saving to cookie
    ///		Example: //minimal parameters set
    ///    mygrid.enableAutoSizeSaving();
    ///    //maximal parameters set
    ///    mygrid.enableAutoSizeSaving("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.enableAutoWidth = function (mode, max_limit, min_limit) {
    ///	<summary>
    /// changes grid&#039;s container size on the fly to fit total width of grid columns
    ///		Example: //enable auto width mode
    ///    mygrid.enableAutoWidth(true);
    ///    //disable auto width mode
    ///    mygrid.enableAutoWidth(true);
    ///    //enable auto width mode, set maximal and minimal allowed width
    ///    mygrid.enableAutoWidth(true,600,100);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode  - truse/false - enable / disable
    /// </param>
    ///	<param name="max_limit" type="String">
    ///		max_limit  - max allowed width, not limited by default
    /// </param>
    ///	<param name="min_limit" type="String">
    ///		min_limit  - min allowed width, not limited by default
    /// </param>

}
dhtmlXGridObject.prototype.enableBlockSelection = function (mode) {
    ///	<summary>
    /// enables block selection mode in grid
    ///		Example: //enable block selection
    ///    mygrid.enableBlockSelection(true);
    ///    //disable block selection
    ///    mygrid.enableBlockSelection(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} - enable/disable block selection (optional, true by default)
    /// </param>

}
dhtmlXGridObject.prototype.enableCSVAutoID = function (mode) {
    ///	<summary>
    /// enable mode, where ID for rows loaded from CSV autogenerated
    ///		Example: //enable autogenerated rows IDs for the CSV loading
    ///    mygrid.enableCSVAutoID(true);
    ///    //disable autogenerated rows IDs for the CSV loading
    ///    mygrid.enableCSVAutoID(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.enableCSVHeader = function (mode) {
    ///	<summary>
    /// enable recognizing first row in CSV as header
    ///		Example: //enable recognizing first row in CSV as header
    ///    mygrid.enableCSVHeader(true);
    ///    //disable recognizing first row in CSV as header
    ///    mygrid.enableCSVHeader(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.enableCellIds = function (mode) {
    ///	<summary>
    /// enable/disable unique id for cells (id will be automaticaly created using the following template: &#039;c_[RowId]_[colIndex]&#039;)
    ///		Example: //enable unique id for cells
    ///    mygrid.enableCellIds(true);
    ///    //disable unique id for cells
    ///    mygrid.enableCellIds(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} - enable/disable unique id for cells
    /// </param>

}
dhtmlXGridObject.prototype.enableColSpan = function (mode) {
    ///	<summary>
    /// enable/disable colspan support
    ///		Example: //enable col span mode
    ///    mygrid.enableColSpan(true);
    ///    //disable col span mode
    ///    mygrid.enableColSpan(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} enable/disable colspan support
    /// </param>

}
dhtmlXGridObject.prototype.enableColumnMove = function (mode, columns) {
    ///	<summary>
    /// enable move column functionality
    ///		Example: //minimal parameters set
    ///    mygrid.enableColumnMove(true);
    ///    //maximal parameters set
    ///    mygrid.enableColumnMove(true,"false,true,true,true,true,true");
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>
    ///	<param name="columns" type="Boolean">
    ///		columns - list of true/false values, optional
    /// </param>

}
dhtmlXGridObject.prototype.enableContextMenu = function (menu) {
    ///	<summary>
    /// enable/disable context menu
    ///		Example: var menu = new dhtmlXMenuObject(null, "standard");
    ///    ...
    ///    mygrid.enableContextMenu(menu);
    ///	</summary>
    ///	<param name="menu" type="Object">
    ///		dhtmlxMenu object, if null - context menu will be disabled
    /// </param>

}
dhtmlXGridObject.prototype.enableDistributedParsing = function (mode, count, time) {
    ///	<summary>
    /// enable/disable distributed parsing (rows paresed portion by portion with some timeout)
    ///		Example: //enable distributed parsing mode
    ///    mygrid.enableDistributedParsing(true);
    ///    //enable distributed parsing mode, parse 50 nodes by one step, parse nodes with 2 seconds delay
    ///    mygrid.enableDistributedParsing(true,50,2000);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>
    ///	<param name="count" type="String">
    ///		count - count of nodes parsed by one step (optional, 10 by default)
    /// </param>
    ///	<param name="time" type="String">
    ///		time - time between parsing counts in milli seconds (optional, 250 by default)
    /// </param>

}
dhtmlXGridObject.prototype.enableDragAndDrop = function (mode) {
    ///	<summary>
    /// enable/disable drag-and-drop
    ///		Example: //enable drag-and-drop
    ///    mygrid.enableDragAndDrop(true);
    ///    //disable drag-and-drop
    ///    mygrid.enableDragAndDrop(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - enabled/disabled [ can be true/false/temporary_disabled - last value mean that tree can be D-n-D can be switched to true later ]
    /// </param>

}
dhtmlXGridObject.prototype.enableDragOrder = function (mode) {
    ///	<summary>
    /// switch to mode when draged item, droped in target location in same order as they was in source grid
    ///		Example: //enable drag order
    ///    mygrid.enableDragOrder(true);
    ///    //disable drag order
    ///    mygrid.enableDragOrder(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false to enable/disable mode
    /// </param>

}
dhtmlXGridObject.prototype.enableEditEvents = function (click, dblclick, f2Key) {
    ///	<summary>
    /// enable/disable events which fire excell editing, mutual exclusive with enableLightMouseNavigation
    ///		Example: //enable editing by single click and by pressing F2 key, disable editing by double click
    ///    mygrid.enableEditEvents(true,false,true);
    ///	</summary>
    ///	<param name="click" type="Boolean">
    ///		click - {true|false} - enable/disable editing by single click
    /// </param>
    ///	<param name="dblclick" type="Boolean">
    ///		dblclick - {true|false} - enable/disable editing by double click
    /// </param>
    ///	<param name="f2Key" type="Boolean">
    ///		f2Key - {true|false} - enable/disable editing by pressing F2 key
    /// </param>

}
dhtmlXGridObject.prototype.enableEditTabOnly = function (mode) {
    ///	<summary>
    /// enables/disables mode when readonly cell is not available with tab
    ///		Example: //enable mode when readonly cell is not available with tab
    ///    mygrid.enableEditTabOnly(true);
    ///    //disable mode when readonly cell is not available with tab
    ///    mygrid.enableEditTabOnly(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.enableHeaderImages = function (fl) {
    ///	<summary>
    /// specify if values passed to Header are images file names
    ///		Example: //enable header images
    ///    mygrid.enableHeaderImages(true);
    ///    //disable header images
    ///    mygrid.enableHeaderImages(false);
    ///	</summary>
    ///	<param name="fl" type="String">
    ///		fl - true to treat column header values as image names
    /// </param>

}
dhtmlXGridObject.prototype.enableHeaderMenu = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.enableHeaderMenu();
    ///	</summary>

}
dhtmlXGridObject.prototype.enableKeyboardSupport = function (mode) {
    ///	<summary>
    /// enable/disable hot keys in grid
    ///		Example: //enable hot keys in grid
    ///    mygrid.enableKeyboardSupport(true);
    ///    //disable hot keys in grid 
    ///    mygrid.enableKeyboardSupport(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false (true by default)
    /// </param>

}
dhtmlXGridObject.prototype.enableLightMouseNavigation = function (mode) {
    ///	<summary>
    /// enable/disable light mouse navigation mode (row selection with mouse over, editing with single click), mutual exclusive with enableEditEvents
    ///		Example: //enable light mouse navigation
    ///    mygrid.enableLightMouseNavigation(true);
    ///    //disable light mouse navigation 
    ///    mygrid.enableLightMouseNavigation(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.enableMarkedCells = function (mode) {
    ///	<summary>
    /// 
    ///		Example: //enable marked cells
    ///    mygrid.enableMarkedCells(true);
    ///    //disable marked cells
    ///    mygrid.enableMarkedCells(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} - enable/disable marked cells support
    /// </param>

}
dhtmlXGridObject.prototype.enableMathEditing = function (mode) {
    ///	<summary>
    /// enable/disable editing of math cells
    ///		Example: //enable editing of math cells
    ///    mygrid.enableMathEditing(true);
    ///    //disable editing of math cells
    ///     mygrid.enableMathEditing(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} - enable/disable editing of math cells
    /// </param>

}
dhtmlXGridObject.prototype.enableMathSerialization = function (mode) {
    ///	<summary>
    /// enable/disable serialization of math formulas
    ///		Example: //enable math formulas serialization
    ///    mygrid.enableMathSerialization(true);
    ///    //disable math formulas serialization
    ///    mygrid.enableMathSerialization(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false} enable/disable math formulas serialization
    /// </param>

}
dhtmlXGridObject.prototype.enableMercyDrag = function (mode) {
    ///	<summary>
    /// enable drag without removing (copy instead of move)
    ///		Example: //enable mercy drag
    ///    mygrid.enableMercyDrag(true);
    ///    //disable mercy drag
    ///    mygrid.enableMercyDrag(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true/false} enable/disable mode
    /// </param>

}
dhtmlXGridObject.prototype.enableMultiline = function (state) {
    ///	<summary>
    /// set multiline rows support to enabled or disabled state
    ///		Example: //enable multi line mode
    ///    mygrid.enableMultiline(true);
    ///    //disable multi line mode
    ///    mygrid.enableMultiline(false);
    ///	</summary>
    ///	<param name="state" type="Boolean">
    ///		state - {true|false} enable/disable multi line mode.
    /// </param>

}
dhtmlXGridObject.prototype.enableMultiselect = function (state) {
    ///	<summary>
    /// set multiselect mode to enabled or disabled state
    ///		Example: //enable multi select mode
    ///    mygrid.enableMultiselect(true);
    ///    //disable multi select mode
    ///    mygrid.enableMultiselect(false);
    ///	</summary>
    ///	<param name="state" type="Boolean">
    ///		state - true or false
    /// </param>

}
dhtmlXGridObject.prototype.enableOrderSaving = function (name, cookie_param) {
    ///	<summary>
    /// enable automatic column order saving to cookie
    ///		Example: //minimal parameters set
    ///    mygrid.enableOrderSaving();
    ///    //maximal parameters set
    ///    mygrid.enableOrderSaving("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.enablePaging = function (mode, pageSize, pagesInGrp, pagingControlsContainer, showRecInfo, pagingStateContainer) {
    ///	<summary>
    /// enable smart paging mode
    ///		Example: //enable paging with 10 rows per page
    ///    mygrid.enablePaging(true,10,5,"pagingArea",true,"recinfoArea");
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true|false - enable|disable mode
    /// </param>
    ///	<param name="pageSize" type="String">
    ///		pageSize - count of rows per page
    /// </param>
    ///	<param name="pagesInGrp" type="String">
    ///		pagesInGrp - count of visible page selectors
    /// </param>
    ///	<param name="pagingControlsContainer" type="String">
    ///		pagingControlsContainer - ID or container which will be used for showing paging controls
    /// </param>
    ///	<param name="showRecInfo" type="Boolean">
    ///		showRecInfo - true|false - enable|disable showing of additional info about paging state
    /// </param>
    ///	<param name="pagingStateContainer" type="String">
    ///		pagingStateContainer - ID or container which will be used for showing paging state
    /// </param>

}
dhtmlXGridObject.prototype.enablePreRendering = function (buffer) {
    ///	<summary>
    /// enables pre-rendering rows during scrolling. Makes scrolling smoother, but with small drop in overall perfomance.
    ///		Example: mygrid.enablePreRendering(50);
    ///	</summary>
    ///	<param name="buffer" type="String">
    ///		buffer - count of rows to pre-render
    /// </param>

}
dhtmlXGridObject.prototype.enableResizing = function (list) {
    ///	<summary>
    /// enable/disable resizing for specified colums
    ///		Example: //disable first column resizing
    ///    mygrid.enableResizing("false,true,true,true,true,true,true");
    ///	</summary>
    ///	<param name="list" type="Boolean">
    ///		list - list of true/false values separated with default delimiter (comma), resizing enabled for all columns by default
    /// </param>

}
dhtmlXGridObject.prototype.enableRowsHover = function (mode, cssClass) {
    ///	<summary>
    /// enable/disable hovering row on mouse over
    ///		Example: <style>
    /// 	.hover {
    /// 		background-color: navy;
    /// 	}
    /// </style>
    /// <script>
    ///    mygrid.enableRowsHover(true,"hover");
    /// </script>
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>
    ///	<param name="cssClass" type="String">
    ///		cssClass - css class for hovering row
    /// </param>

}
dhtmlXGridObject.prototype.enableRowspan = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.enableRowspan();
    ///	</summary>

}
dhtmlXGridObject.prototype.enableSmartRendering = function (mode, buffer) {
    ///	<summary>
    /// enable smart rendering mode
    ///		Example: //enable smart rendering mode
    ///    mygrid.enableSmartRendering(true);
    ///    //enable smart rendering mode, set cont of rows requested from the server by single operation
    ///    mygrid.enableSmartRendering(true,50);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true|false - enable|disable mode
    /// </param>
    ///	<param name="buffer" type="String">
    ///		buffer - has sense only in dynamic loading mode, count of rows requrested from server by single operation, optional
    /// </param>

}
dhtmlXGridObject.prototype.enableSortingSaving = function (name, cookie_param) {
    ///	<summary>
    /// enable automatic sorting state saving to cookie
    ///		Example: //minimal parameters set
    ///    mygrid.enableSortingSaving();
    ///    //maximal parameters set
    ///    mygrid.enableSortingSaving("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.enableStableSorting = function (mode) {
    ///	<summary>
    /// enables stable sorting algorithm
    ///		Example: mygrid.enableStableSorting(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.enableTooltips = function (list) {
    ///	<summary>
    /// enable/disable tooltips for specified colums
    ///		Example: //disable first column tooltips
    ///    mygrid.enableTooltips("false,true,true,true,true");
    ///	</summary>
    ///	<param name="list" type="Boolean">
    ///		list - list of true/false values, tooltips enabled for all columns by default
    /// </param>

}
dhtmlXGridObject.prototype.enableUndoRedo = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.enableUndoRedo();
    ///	</summary>

}
dhtmlXGridObject.prototype.expandAllGroups = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.expandAllGroups();
    ///	</summary>

}
dhtmlXGridObject.prototype.expandGroup = function (val) {
    ///	<summary>
    /// expand group of rows
    ///		Example: //expand 'John Grisham' group
    ///    mygrid.expandGroup('John Grisham')
    ///	</summary>
    ///	<param name="val" type="String">
    ///		val - value to use to determine what group to expand (in other words this should be value common for all of them)
    /// </param>

}
dhtmlXGridObject.prototype.filterBy = function (column, value, preserve) {
    ///	<summary>
    /// filter grid by mask
    ///		Example: //filter grid by 2nd column by value "alf"
    ///    mygrid.filterBy(1,"alf");
    ///    //filter grid by 2nd column with more comlex rule
    ///    mygrid.filterBy(1,function(data){
    ///             return   data.toString().indexOf("alf")!=-1;  // true - show the related row , false - hide the related row
    ///    });
    ///    //filter current grid state by 3rd column by value "Omega" 
    ///    mygrid.filterBy(2,"Omega",true);
    ///	</summary>
    ///	<param name="column" type="Number">
    ///		column - {number} zero based index of column.
    /// </param>
    ///	<param name="value" type="String">
    ///		value - {string} value by which the column will be filtered.
    /// </param>
    ///	<param name="preserve" type="Boolean">
    ///		preserve - {true|false} filter current or initial state (false by default)
    /// </param>

}
dhtmlXGridObject.prototype.filterByAll = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.filterByAll();
    ///	</summary>

}
dhtmlXGridObject.prototype.findCell = function (value, c_ind, first) {
    ///	<summary>
    /// find cell in grid by value
    ///		Example: //search "alf" value at the all grid cells
    ///    var searchResult=mygrid.findCell("alf");
    ///    //search "alf" value at the second column, find only first occurence
    ///    var searchResult=mygrid.findCell("alf",1,true);
    ///	</summary>
    ///	<param name="value" type="String">
    ///		value - {string} search string
    /// </param>
    ///	<param name="c_ind" type="Number">
    ///		c_ind - {number} index of column to search in (optional, if not specified, then search everywhere)
    /// </param>
    ///	<param name="first" type="Boolean">
    ///		first - {true|fase} find only first occurence (optional, false by default)
    /// </param>

}
dhtmlXGridObject.prototype.forEachCell = function (rowId, custom_code) {
    ///	<summary>
    /// execute code for each cell in a row
    ///		Example: mygrid.forEachCell("row1",function(cellObj,ind){
    ///       //execute code for each cell in row with id "row1" 
    ///       //cellObj - related cell object
    ///       //ind - column index
    ///    });
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row where cell must be itterated
    /// </param>
    ///	<param name="custom_code" type="Object">
    ///		custom_code - function which get eXcell object as incomming argument
    /// </param>

}
dhtmlXGridObject.prototype.forEachRow = function (custom_code) {
    ///	<summary>
    /// execute code for each row in a grid
    ///		Example: mygrid.forEachRow(function(id){
    ///       //any custom code here 
    ///       //id - row's id
    ///    });
    ///	</summary>
    ///	<param name="custom_code" type="String">
    ///		custom_code - function which get row id as incomming argument
    /// </param>

}
dhtmlXGridObject.prototype.forceLabelSelection = function (mode) {
    ///	<summary>
    /// affect block selection, so it will copy|paste only visible text , not values behind
    ///		Example: //enable label selection
    ///    mygrid.forceLabelSelection(true);
    ///    //disable label selection
    ///    mygrid.forceLabelSelection(false);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dhtmlXGridObject.prototype.getAllRowIds = function (separator) {
    ///	<summary>
    /// gets a list of all row ids in grid
    ///		Example: //return list of row ids with comma delimiter
    ///    var ids=mygrid.getAllRowIds();
    ///    //retrun list of row ids with dot delimiter
    ///    var ids=mygrid.getAllRowIds(".");
    ///	</summary>
    ///	<param name="separator" type="String">
    ///		separator - delimiter to use in list (optional, comma by default)
    /// </param>

}
dhtmlXGridObject.prototype.getChangedRows = function (and_added) {
    ///	<summary>
    /// get list of IDs of changed rows
    ///		Example: //get list of changed rows
    ///    var ids=mygrid.getChangedRows();
    ///    //get list of changed rows included added rows
    ///    var ids=mygrid.getChangedRows(true);
    ///	</summary>
    ///	<param name="and_added" type="Boolean">
    ///		and_added - {true|false} if true- include ids of added rows
    /// </param>

}
dhtmlXGridObject.prototype.getCheckedRows = function (col_ind) {
    ///	<summary>
    /// get list of Ids of all rows with checked exCell in specified column
    ///		Example: //get list of ids of checked rows from the first column
    ///    var checked=mygrid.getCheckedRows(0);
    ///	</summary>
    ///	<param name="col_ind" type="Number">
    ///		col_ind - column index
    /// </param>

}
dhtmlXGridObject.prototype.getColIndexById = function (id) {
    ///	<summary>
    /// gets column index by column id
    ///		Example: //get index of the column with id "col1"
    ///    var colIndex=mygrid.getColIndexById("col1");
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - column id
    /// </param>

}
dhtmlXGridObject.prototype.getColLabel = function (cin, ind) {
    ///	<summary>
    /// gets label of column specified by index
    ///		Example: //get label of the first column
    ///    var colLabel=mygrid.getColLabel(0);
    ///    //get label of the second line of the first column
    ///    var colLabel=mygrid.getColLabel(0,1);
    ///	</summary>
    ///	<param name="cin" type="Number">
    ///		cin - column index
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind -  header row index (optional, 0 by default, has sence only with multi line header)
    /// </param>

}
dhtmlXGridObject.prototype.getColType = function (cInd) {
    ///	<summary>
    /// get column type by column index
    ///		Example: //get first column type
    ///    var type=mygrid.getColType(0);
    ///	</summary>
    ///	<param name="cInd" type="Number">
    ///		cInd - column index
    /// </param>

}
dhtmlXGridObject.prototype.getColTypeById = function (cID) {
    ///	<summary>
    /// get column type by column ID
    ///		Example: //get type of the column with id "column1"
    ///    var type=mygrid.getColTypeById("column1");
    ///	</summary>
    ///	<param name="cID" type="String">
    ///		cID - column id
    /// </param>

}
dhtmlXGridObject.prototype.getColWidth = function (ind) {
    ///	<summary>
    /// gets width of specified column in pixels
    ///		Example: //get first column width
    ///    var width=mygrid.getColWidth(0);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - column index
    /// </param>

}
dhtmlXGridObject.prototype.getColumnId = function (cin) {
    ///	<summary>
    /// gets column id of column specified by index
    ///		Example: //get first column id
    ///    var colId=mygrid.getColumnId(0);
    ///	</summary>
    ///	<param name="cin" type="Number">
    ///		cin - column index
    /// </param>

}
dhtmlXGridObject.prototype.getColumnsNum = function () {
    ///	<summary>
    /// 
    ///		Example: var colNum=mygrid.getColumnsNum();
    ///	</summary>

}
dhtmlXGridObject.prototype.getCombo = function (col_ind) {
    ///	<summary>
    /// gets Combo object of specified column. Use it to change select box value for cell before editor opened
    ///		Example: //get first column combo object
    ///    var combo=mygrid.getCombo(0);
    ///	</summary>
    ///	<param name="col_ind" type="Number">
    ///		col_ind - index of the column to get combo object for. Note column must have &#039;co&#039;, &#039;coro&#039; or &#039;combo&#039; type
    /// </param>

}
dhtmlXGridObject.prototype.getCustomCombo = function (id, ind) {
    ///	<summary>
    /// get combobox specific for cell in question
    ///		Example: var combo=mygrid.getCustomCombo("row1",0);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - row id
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind  - column index. Note cell must have &#039;co&#039;, &#039;coro&#039; or &#039;combo&#039; type
    /// </param>

}
dhtmlXGridObject.prototype.getFilterElement = function (index) {
    ///	<summary>
    /// gets input object of filter linked to column in question
    ///		Example: //get filter object placed at the fisrt column header
    ///    var filterObject=mygrid.getFilterElement(0);
    ///	</summary>
    ///	<param name="index" type="Number">
    ///		index - index of column
    /// </param>

}
dhtmlXGridObject.prototype.getFooterLabel = function (cin, ind) {
    ///	<summary>
    /// gets label of footer specified by index
    ///		Example: //minimal parameters set
    ///    mygrid.getFooterLabel(0);
    ///    //maximal parameters set
    ///    mygrid.getFooterLabel(0,1);
    ///	</summary>
    ///	<param name="cin" type="Number">
    ///		cin - column index
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - footer row index (optional, 0 by default)
    /// </param>

}
dhtmlXGridObject.prototype.getMarked = function () {
    ///	<summary>
    /// 
    ///		Example: var markedArray = mygrid.getMarked();
    ///	</summary>

}
dhtmlXGridObject.prototype.getRedo = function () {
    ///	<summary>
    /// 
    ///		Example: var redo=mygrid.getRedo();
    ///	</summary>

}
dhtmlXGridObject.prototype.getRowAttribute = function (rId, name) {
    ///	<summary>
    /// returns row attribute value which was set in the &lt;row&gt; xml tag
    ///		Example: <?xml version='1.0' encoding='iso-8859-1'?>
    ///         <rows>
    ///             <row id="unique_rowid" some="data">
    ///                     <cell some="data">cell content</cell>
    ///             </row>
    ///         </rows>
    ///    ...
    ///    var rowAttr = grid.getRowAttribute("unique_rowid","some");
    ///	</summary>
    ///	<param name="rId" type="String">
    ///		rId - row id
    /// </param>
    ///	<param name="name" type="String">
    ///		name - attribute name
    /// </param>

}
dhtmlXGridObject.prototype.getRowId = function (ind) {
    ///	<summary>
    /// gets row id by index
    ///		Example: //get ID of the first row
    ///    var rowID=mygrid.getRowId(0);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - row index
    /// </param>

}
dhtmlXGridObject.prototype.getRowIndex = function (row_id) {
    ///	<summary>
    /// gets row index by id (grid only)
    ///		Example: //get index of the row with id "row1"
    ///    var rowIndex=mygrid.getRowIndex("row1");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>

}
dhtmlXGridObject.prototype.getRowsNum = function () {
    ///	<summary>
    /// 
    ///		Example: var count=mygrid.getRowsNum();
    ///	</summary>

}
dhtmlXGridObject.prototype.getSelectedCellIndex = function () {
    ///	<summary>
    /// 
    ///		Example: var ind=mygrid.getSelectedCellIndex();
    ///	</summary>

}
dhtmlXGridObject.prototype.getSelectedRowId = function () {
    ///	<summary>
    /// 
    ///		Example: var selectedId=mygrid.getSelectedRowId();
    ///	</summary>

}
dhtmlXGridObject.prototype.getSortingState = function () {
    ///	<summary>
    /// 
    ///		Example: var state=mygrid.getSortingState();
    ///	</summary>

}
dhtmlXGridObject.prototype.getStateOfView = function () {
    ///	<summary>
    /// 
    ///		Example: var state=mygrid.getStateOfView();
    ///	</summary>

}
dhtmlXGridObject.prototype.getUndo = function () {
    ///	<summary>
    /// 
    ///		Example: var undo=mygrid.getUndo();
    ///	</summary>

}
dhtmlXGridObject.prototype.getUserData = function (row_id, name) {
    ///	<summary>
    /// gets user Data
    ///		Example: //get user row user data
    ///    var userdata = grid.getUserData("unique_rowid","someName1");
    ///    //get gloabal user data
    ///    var userdata = grid.getUserData("","someName1");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id. if empty then user data is for grid (not row)
    /// </param>
    ///	<param name="name" type="String">
    ///		name -  name of user data
    /// </param>

}
dhtmlXGridObject.prototype.gridFromClipboard = function () {
    ///	<summary>
    /// 
    ///		Example: <a href="javascript:void(0)" onclick="mygrid.clearAll(); mygrid.gridFromClipboard();">Load grid from clipboard</a>
    ///	</summary>

}
dhtmlXGridObject.prototype.gridToClipboard = function () {
    ///	<summary>
    /// 
    ///		Example: <a href="javascript:void(0)" onclick="copyData()">Copy entire grid (with tab as delimiter) to clipboard</a>
    /// <script>
    /// function copyData(type,delim){
    ///    mygrid.setCSVDelimiter('\t');
    ///    mygrid.gridToClipboard();
    /// }
    /// </script>
    ///	</summary>

}
dhtmlXGridObject.prototype.gridToGrid = function (rowId, sgrid, tgrid) {
    ///	<summary>
    /// redefine this method in your code to define how grid row values should be used in another grid
    ///		Example: grid.gridToGrid = function(rowId,sgrid,tgrid){
    ///             var z=[];
    ///             for (var i=0; i<sgrid.getColumCount(); i++)    // for each cell in the source grid
    ///                 z[i]=sgrid.cells(rowId,i).getValue();         // prepare data for the target grid
    ///             return z;
    ///         }
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of draged row
    /// </param>
    ///	<param name="sgrid" type="Object">
    ///		sgrid - source grid object
    /// </param>
    ///	<param name="tgrid" type="Object">
    ///		tgrid - target grid object
    /// </param>

}
dhtmlXGridObject.prototype.gridToTreeElement = function (treeObj, treeNodeId, gridRowId) {
    ///	<summary>
    /// Redefine this method in your code to define how grid row values should be used in tree (using input parameters you can change id of new tree node, set label, set userdata blocks etc.).
    ///		Example: grid.gridToTreeElement = function(tree,treeID,gridID){
    ///             return this.cells(gridId,0).getValue();  // take data from the first column as a value for the tree
    ///         }
    ///	</summary>
    ///	<param name="treeObj" type="Object">
    ///		treeObj - object of tree
    /// </param>
    ///	<param name="treeNodeId" type="String">
    ///		treeNodeId - id of node created in tree
    /// </param>
    ///	<param name="gridRowId" type="String">
    ///		gridRowId - id of grid row
    /// </param>

}
dhtmlXGridObject.prototype.groupBy = function (ind, mask) {
    ///	<summary>
    /// group grid content by values of specified column
    ///		Example: //minimal parameters set. Group rows by second column
    ///    mygrid.groupBy(1);
    ///    //maximal parameters set
    ///    mygrid.groupBy(2,["#stat_max","#title","","#stat_total","","#cspan","#cspan","#cspan"]);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - {number} column index to group by
    /// </param>
    ///	<param name="mask" type="String">
    ///		mask - {array} optional, array, each value of which is mapped to the related column. The possible values are:
    /// </param>

}
dhtmlXGridObject.prototype.hidePivot = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.hidePivot();
    ///	</summary>

}
dhtmlXGridObject.prototype.init = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.init();
    ///	</summary>

}
dhtmlXGridObject.prototype.insertColumn = function (ind, header, type, width, sort, align, valign, reserved, columnColor) {
    ///	<summary>
    /// adds new column to the grid. Can be used after grid was initialized. At least one column should be in grid
    ///		Example: //minimal parameters set
    ///    mygrid.insertColumn(10); 
    ///    //maximal parameters set
    ///    mygrid.insertColumn(11,'Some text','ed',120,'na','left','top',null,'red')
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - index of column
    /// </param>
    ///	<param name="header" type="String">
    ///		header - header content of column (optional, blank by default)
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of column (optional, &#039;ed&#039; by default)
    /// </param>
    ///	<param name="width" type="String">
    ///		width - width of column (optional, &#039;100&#039; by default)
    /// </param>
    ///	<param name="sort" type="String">
    ///		sort - sort type of column (optional, &#039;na&#039; by default)
    /// </param>
    ///	<param name="align" type="String">
    ///		align - align of column (optional, &#039;left&#039; by default)
    /// </param>
    ///	<param name="valign" type="String">
    ///		valign - vertical align of column (optional)
    /// </param>
    ///	<param name="reserved" type="String">
    ///		reserved - not used for now
    /// </param>
    ///	<param name="columnColor" type="String">
    ///		columnColor - background color of column (optional)
    /// </param>

}
dhtmlXGridObject.prototype.isColumnHidden = function (ind) {
    ///	<summary>
    /// get show/hidden status of column
    ///		Example: //check if first column is hidden
    ///    var isHidden=mygrid.isColumnHidden(0);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - column index
    /// </param>

}
dhtmlXGridObject.prototype.load = function (url, call, type) {
    ///	<summary>
    /// load data from external file ( xml, json, jsarray, csv )
    ///		Example: //load grid from the external file
    ///    mygrid.load("grid.xml");
    ///    //load grid, execute doAfterRefresh() function after grid was loaded
    ///    mygrid.load("grid.xml",doAfterRefresh);
    ///    //load grid from the external csv file, execute doAfterRefresh() function after grid was loaded
    ///    mygrid.load("grid.csv",doAfterRefresh,csv);
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - url to external file
    /// </param>
    ///	<param name="call" type="String">
    ///		call - after loading callback function, optional, can be ommited
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of data (xml,csv,json,jsarray) , optional, xml by default
    /// </param>

}
dhtmlXGridObject.prototype.loadCSVFile = function (path, afterCall) {
    ///	<summary>
    /// load grid from CSV file
    ///		Example: //load grid from the external csv file
    ///    mygrid.loadCSVFile("grid.csv");
    ///    //load grid from the external csv file, execute doAfterRefresh() function after grid was loaded
    ///    mygrid.loadCSVFile("grid.csv",doAfterRefresh);
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - path to file
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function which will be called after xml loading
    /// </param>

}
dhtmlXGridObject.prototype.loadCSVString = function (str) {
    ///	<summary>
    /// load grid from CSV string. This method works in the synchronous mode.
    ///		Example: var  str="11,12,13\n21,22,23\n31,32,33";
    ///    mygrid.loadCSVString(str);
    ///	</summary>
    ///	<param name="str" type="String">
    ///		str - CSV  string
    /// </param>

}
dhtmlXGridObject.prototype.loadHiddenColumnsFromCookie = function (name) {
    ///	<summary>
    /// load sorting order from cookie
    ///		Example: mygrid.load("grid.xml",function(){
    ///       //minimal parameters set
    ///       mygrid.loadHiddenColumnsFromCookie();
    ///       //maximal parameters set
    ///       mygrid.loadHiddenColumnsFromCookie("some_name");
    ///    })
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXGridObject.prototype.loadOpenStates = function (name) {
    ///	<summary>
    /// load open state of TreeGrid in cookie
    ///		Example: mygrid.load("grid.xml",function(){
    ///       //minimal parameters set
    ///       mygrid.loadOpenStates();
    ///       //maximal parameters set
    ///       mygrid.loadOpenStates("some_name");
    ///    })
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>

}
dhtmlXGridObject.prototype.loadOrderFromCookie = function (name) {
    ///	<summary>
    /// load sorting order from cookie
    ///		Example: mygrid.load("grid.xml",function(){
    ///       //minimal parameters set
    ///       mygrid.loadOrderFromCookie();
    ///       //maximal parameters set
    ///       mygrid.loadOrderFromCookie("some_name");
    ///    })
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXGridObject.prototype.loadSizeFromCookie = function (name) {
    ///	<summary>
    /// load grid layout from cookie
    ///		Example: mygrid.load("grid.xml",function(){
    ///       //minimal parameters set
    ///       mygrid.loadSizeFromCookie();
    ///       //maximal parameters set
    ///       mygrid.loadSizeFromCookie("some_name");
    ///    })
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXGridObject.prototype.loadSortingFromCookie = function (name) {
    ///	<summary>
    /// load sorting order from cookie
    ///		Example: mygrid.load("grid.xml",function(){
    ///       //minimal parameters set
    ///       mygrid.loadSortingFromCookie();
    ///       //maximal parameters set
    ///       mygrid.loadSortingFromCookie("some_name");
    ///    })
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional,cookie name
    /// </param>

}
dhtmlXGridObject.prototype.lockRow = function (rowId, mode) {
    ///	<summary>
    /// lock/unlock row for editing
    ///		Example: //lock row with id "row1" for editing
    ///    mygrid.lockRow("row1",true);
    ///    //unlock row with id "row1" for editing
    ///    mygrid.lockRow("row1",false);
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row
    /// </param>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false - lock/unlock
    /// </param>

}
dhtmlXGridObject.prototype.makeFilter = function (id, column, preserve) {
    ///	<summary>
    /// create a filter from any input element (text filter), select (dropdown) or DIV (combobox based on dhtmlxCombo)
    ///		Example: //minimal parameters set
    ///    mygrid.makeFilter("some_el",0); 
    ///    //maximal parameters set
    ///    mygrid.makeFilter("some_el",0,true);
    ///	</summary>
    ///	<param name="id" type="Object">
    ///		id - {string|object} input id or input html object
    /// </param>
    ///	<param name="column" type="Number">
    ///		column - {number} index of column
    /// </param>
    ///	<param name="preserve" type="Boolean">
    ///		preserve - {true|false} filter current state or initial one (optional, false by default)
    /// </param>

}
dhtmlXGridObject.prototype.makePivot = function (cont, details) {
    ///	<summary>
    /// show pivot table based on grid
    ///		Example: //minimal parameters set
    ///    mygrid.makePivot();
    ///    //make pivot in the external html container
    ///    mygrid.makePivot('pivot_container');
    ///    //limited field set
    ///    mygrid.makePivot('pivot_container',{column_list:['Title','Author','Money']})
    ///    //predefined set
    ///    mygrid.makePivot('pivot_container',{action:3,value:1,x:3,y:2})
    ///    //predefined set + readonly
    ///    mygrid.makePivot('pivot_container',{readonly:true,action:3,value:1,x:3,y:2})
    ///	</summary>
    ///	<param name="cont" type="String">
    ///		cont - html container in which pivot rendered (optional, by default pivot will be rendered over existing grid)
    /// </param>
    ///	<param name="details" type="String">
    ///		details - collection of settings:
    /// </param>

}
dhtmlXGridObject.prototype.makeSearch = function (id, column) {
    ///	<summary>
    /// create a search box (set selection to the row with found value) from any input
    ///		Example: mygrid.makeSearch("input_id",0);
    ///	</summary>
    ///	<param name="id" type="Object">
    ///		id - {string|object} input id or input html object
    /// </param>
    ///	<param name="column" type="Number">
    ///		column - {number} index of column
    /// </param>

}
dhtmlXGridObject.prototype.mark = function (rid, cindex, fl) {
    ///	<summary>
    /// sets selection or removes selection from specified cell
    ///		Example: //mark cell
    ///    mygrid.mark('row1',0,true);
    ///    //unmark cell
    ///    mygrid.mark('row1',0,false);
    ///	</summary>
    ///	<param name="rid" type="Number">
    ///		r - row object or row index
    /// </param>
    ///	<param name="cindex" type="Number">
    ///		cInd - cell index
    /// </param>
    ///	<param name="fl" type="Boolean">
    ///		state - true or false
    /// </param>

}
dhtmlXGridObject.prototype.moveColumn = function (oldInd, newInd) {
    ///	<summary>
    /// moves column of specified index to new position
    ///		Example: //move 1st column before 3rd column
    ///    mygrid.mygrid.moveColumn(0,2);
    ///	</summary>
    ///	<param name="oldInd" type="Number">
    ///		oldInd - current index of column
    /// </param>
    ///	<param name="newInd" type="Number">
    ///		newInd - index of column, before each moved one will be inserted
    /// </param>

}
dhtmlXGridObject.prototype.moveRow = function (rowId, mode, targetId, targetGrid) {
    ///	<summary>
    /// move row
    ///		Example: //move row up
    ///   mygrid1.moveRow("row1","up");
    ///   //move row down
    ///   mygrid1.moveRow("row1","down");
    ///   //move row with id "row1" after row with id "row2" in grid[2]
    ///   mygrid1.moveRow("row1","row_sibling","row2",mygrid2);
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - source row Id
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - moving mode (up,down,row_sibling)
    /// </param>
    ///	<param name="targetId" type="String">
    ///		targetId - target row  in row_sibling mode (optional)
    /// </param>
    ///	<param name="targetGrid" type="String">
    ///		targetGrid - used for moving between grids (optional)
    /// </param>

}
dhtmlXGridObject.prototype.moveRowDown = function (row_id) {
    ///	<summary>
    /// moves row one position down if possible
    ///		Example: <a href="javascript:void(0)" onclick="mygrid.moveRowDown(mygrid.getSelectedId())">Move selected row down</a>
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id
    /// </param>

}
dhtmlXGridObject.prototype.moveRowTo = function (srowId, trowId, mode, dropmode, sourceGrid, targetGrid) {
    ///	<summary>
    /// move row
    ///		Example: //move row with id "row1" after row with id "row2"
    ///   mygrid1.moveRowTo("row1","row2","move");
    ///   //copy row with id "row1" from grid[1] as child of row with id "row2" in grid[2]
    ///   var movedId=mygrid1.moveRowTo("row1","row2","copy","child",mygrid1,mygrid2);
    ///	</summary>
    ///	<param name="srowId" type="String">
    ///		srowId - source row Id
    /// </param>
    ///	<param name="trowId" type="String">
    ///		trowId - target row Id
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - "move" or "copy"
    /// </param>
    ///	<param name="dropmode" type="String">
    ///		dropmode - "sibling" or "child" (optional, "sibling" by default)
    /// </param>
    ///	<param name="sourceGrid" type="Object">
    ///		sourceGrid - source grid object, used for moving between grids (optional, current grid by default)
    /// </param>
    ///	<param name="targetGrid" type="Object">
    ///		targetGrid - target grid object, used for moving between grids (optional, current grid by default)
    /// </param>

}
dhtmlXGridObject.prototype.moveRowUp = function (row_id) {
    ///	<summary>
    /// moves row one position up if possible
    ///		Example: <a href="javascript:void(0)" onclick="mygrid.moveRowUp(mygrid.getSelectedId())">Move selected row up</a>
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id
    /// </param>

}
dhtmlXGridObject.prototype.parse = function (data, type) {
    ///	<summary>
    /// load data from local datasource (xml string, csv string, xml island, xml object, json objecs , javascript array). This method works in the synchronous mode.
    ///		Example: //parse grid from the xml string
    ///    mygrid.parse(data);
    ///    //parse grid from the csv string
    ///    mygrid.parse(data,"csv");
    ///    //parse grid from the javascript array
    ///    mygrid.parse(data,"jsarray");
    ///    //parse grid from the json string
    ///    mygrid.parse(data,"json");
    ///	</summary>
    ///	<param name="data" type="Object">
    ///		data - string or object
    /// </param>
    ///	<param name="type" type="String">
    ///		type - data type (xml,json,jsarray,csv), optional, data threated as xml by default
    /// </param>

}
dhtmlXGridObject.prototype.pasteBlockFromClipboard = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.attachEvent("onKeyPress",onKeyPressed);
    /// ...
    /// function onKeyPressed(code,ctrl,shift){
    /// 	if(code==67&&ctrl){
    /// 	    mygrid.setCSVDelimiter("\t")
    /// 	    mygrid.copyBlockToClipboard()
    /// 	}
    /// 	if(code==86&&ctrl){
    /// 	    mygrid.pasteBlockFromClipboard()
    /// 	}
    /// 	return true;
    /// }
    ///	</summary>

}
dhtmlXGridObject.prototype.preventIECaching = function (mode) {
    ///	<summary>
    /// 
    ///		Example: //enable prevent IE caching mode
    ///    mygrid.preventIECaching(true);
    ///    //disable prevent IE caching mode
    ///    mygrid.preventIECaching(false);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - enable/disable random values in URLs (disabled by default)
    /// </param>

}
dhtmlXGridObject.prototype.printView = function (before, after) {
    ///	<summary>
    /// generate print friendly view
    ///		Example: //minimal parameters set
    ///    mygrid.printView();
    ///    //maximal parameters set
    ///    mygrid.printView('<div>before</div>','<strong>after</strong>');
    ///	</summary>
    ///	<param name="before" type="String">
    ///		before - {string} html which will be placed before printed grid
    /// </param>
    ///	<param name="after" type="String">
    ///		after - {string} html which will be placed after printed grid
    /// </param>

}
dhtmlXGridObject.prototype.refreshFilters = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.refreshFilters();
    ///	</summary>

}
dhtmlXGridObject.prototype.rowToClipboard = function (rowId) {
    ///	<summary>
    /// copy value of row to clipboard
    ///		Example: <a href="javascript:void(0)" onclick="copyData()">Copy selected row (with tab as delimiter) to clipboard</a>
    /// <script>
    /// function copyData(type,delim){
    ///    mygrid.setCSVDelimiter('\t');
    ///    mygrid.rowToClipboard();
    /// }
    /// </script>
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row (optional, use selected row by default)
    /// </param>

}
dhtmlXGridObject.prototype.rowToDragElement = function (id) {
    ///	<summary>
    /// redefine this method in your code to define how grid row values should be displaied while draging
    ///		Example: grid.rowToDragElement=function(id){
    ///             //any custom logic here
    ///             var text = "<img src='some.gif'> - "+grid.cells(id,0).getValue(); // prepare a text string
    ///             return text;
    ///         }
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - id of grid row
    /// </param>

}
dhtmlXGridObject.prototype.saveHiddenColumnsToCookie = function (name, cookie_param) {
    ///	<summary>
    /// save hidden columns to cookie
    ///		Example: mygrid.attachEvent("onColumnHidden", function(index,state){
    ///           //minimal parameters set
    ///           mygrid.saveHiddenColumnsToCookie();
    ///           //maximal parameters set
    ///           mygrid.saveHiddenColumnsToCookie("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///    });
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.saveOpenStates = function (name, cookie_param) {
    ///	<summary>
    /// store opene state of TreeGrid in cookie
    ///		Example: mygrid.attachEvent("onOpenEnd", function(index,state){
    ///           //minimal parameters set
    ///           mygrid.saveOpenStates();
    ///           //maximal parameters set
    ///           mygrid.saveOpenStates("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///    });
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.saveOrderToCookie = function (name, cookie_param) {
    ///	<summary>
    /// saves column order to cookie
    ///		Example: mygrid.attachEvent("onAfterCMove", function(cInd,posInd){
    ///           //minimal parameters set
    ///           mygrid.saveOrderToCookie();
    ///           //maximal parameters set
    ///           mygrid.saveOrderToCookie("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///    });
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.saveSizeToCookie = function (name, cookie_param) {
    ///	<summary>
    /// save grid layout to cookie
    ///		Example: mygrid.attachEvent("onResizeEnd", function(obj){
    ///           //minimal parameters set
    ///           mygrid.saveSizeToCookie();
    ///           //maximal parameters set
    ///           mygrid.saveSizeToCookie("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///    });
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.saveSortingToCookie = function (name, cookie_param) {
    ///	<summary>
    /// save sorting order to cookie
    ///		Example: mygrid.attachEvent("onAfterSorting", function(index,type,direction){
    ///           //minimal parameters set
    ///           mygrid.saveSortingToCookie();
    ///           //maximal parameters set
    ///           mygrid.saveSortingToCookie("some_name","expires=Fri, 31-Dec-2010 23:59:59 GMT");
    ///    });
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - optional, cookie name
    /// </param>
    ///	<param name="cookie_param" type="String">
    ///		cookie_param - additional parameters added to cookie
    /// </param>

}
dhtmlXGridObject.prototype.selectAll = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.selectAll();
    ///	</summary>

}
dhtmlXGridObject.prototype.selectCell = function (r, cInd, fl, preserve, edit, show) {
    ///	<summary>
    /// set selection to specified row-cell
    ///		Example: //select second cell from the first row. 
    ///    mygrid.selectCell(0,1);
    ///    //select second cell from the first row, call "onRowSelect" event, preserve previously selected rows
    ///    mygrid.selectCell(0,1,true,true);
    ///    //select second cell from the 11th row, switch cell to the edit mode
    ///    <button onclick="(arguments[0]||window.event).cancelBubble=true;mygrid.selectCell(10,1,false,false,true)">select cell</button>
    ///	</summary>
    ///	<param name="r" type="Number">
    ///		r - row object or row index
    /// </param>
    ///	<param name="cInd" type="Number">
    ///		cInd - cell index
    /// </param>
    ///	<param name="fl" type="Boolean">
    ///		[fl] - true if to call onRowSelect function (optional, false by default)
    /// </param>
    ///	<param name="preserve" type="Boolean">
    ///		preserve - preserve previously selected rows true/false (optional, false by default). Multi select mode should be enabled.
    /// </param>
    ///	<param name="edit" type="String">
    ///		edit - switch selected cell to edit mode (optional, false by default)
    /// </param>
    ///	<param name="show" type="Boolean">
    ///		show - true/false - scroll row to view (optional, true by default)
    /// </param>

}
dhtmlXGridObject.prototype.selectRow = function (rIndex, fl, preserve, show) {
    ///	<summary>
    /// selects row (and first cell of it)
    ///		Example: //select first row in grid
    ///    mygrid.selectRow(0);
    ///    //select first row in grid, call "onRowSelect" function, preserve previously selected rows, scroll row to view
    ///    mygrid.selectRow(0,true,true,true);
    ///	</summary>
    ///	<param name="rIndex" type="Number">
    ///		rIndex - row index or row object
    /// </param>
    ///	<param name="fl" type="Boolean">
    ///		fl - if true, then call function on select (optional, false by default)
    /// </param>
    ///	<param name="preserve" type="Boolean">
    ///		preserve - preserve previously selected rows true/false (false by default). Multi select mode should be enabled.
    /// </param>
    ///	<param name="show" type="Boolean">
    ///		show - true/false - scroll row to view, true by defaul
    /// </param>

}
dhtmlXGridObject.prototype.selectRowById = function (row_id, preserve, show, call) {
    ///	<summary>
    /// selects row by ID
    ///		Example: //minimal parameters set
    ///    mygrid.selectRowById('row1');
    ///    //maximal parameters set
    ///    mygrid.selectRowById('row1',true,true,true);
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>
    ///	<param name="preserve" type="Boolean">
    ///		preserve - {true|false} preserve previously selected (optional, false by default). Multi select mode should be enabled.
    /// </param>
    ///	<param name="show" type="Boolean">
    ///		show - true/false - scroll row to view (optional, true by default)
    /// </param>
    ///	<param name="call" type="Boolean">
    ///		call - true if to call onRowSelect function (optional, false by default)
    /// </param>

}
dhtmlXGridObject.prototype.serialize = function () {
    ///	<summary>
    /// 
    ///		Example: var str=mygrid.serialize();
    ///	</summary>

}
dhtmlXGridObject.prototype.serializeToCSV = function (textmode) {
    ///	<summary>
    /// serialize to CSV string
    ///		Example: //serialize grid to CSV format
    ///    var csv=mygrid.serializeToCSV();
    ///    //serialize grid to CSV format, only text values will be serialized
    ///    var csv=mygrid.serializeToCSV(true);
    ///	</summary>
    ///	<param name="textmode" type="Boolean">
    ///		text only - {true|false} optional, force serialization of text values (skip HTML elements), false by default
    /// </param>

}
dhtmlXGridObject.prototype.setAwaitedRowHeight = function (height) {
    ///	<summary>
    /// set height which will be used in smart rendering mode for row calculation, function need to be used if you use custom skin for grid which changes default row height
    ///		Example: mygrid.setAwaitedRowHeight(25);
    ///	</summary>
    ///	<param name="height" type="String">
    ///		{int} height - awaited height of row
    /// </param>

}
dhtmlXGridObject.prototype.setCSVDelimiter = function (str) {
    ///	<summary>
    /// change csv delimiter
    ///		Example: mygrid.setCSVDelimiter(":")
    /// 	var  str="11:12:13\n21:22:23\n31:32:33";
    /// 	mygrid.loadCSVString(str);
    ///	</summary>
    ///	<param name="str" type="String">
    ///		str - delimer used in CSV operations, comma by default (only single char delimeters allowed)
    /// </param>

}
dhtmlXGridObject.prototype.setCellExcellType = function (rowId, cellIndex, type) {
    ///	<summary>
    /// set excell type for cell in question
    ///		Example: //set type "txt" to the second cell in the row with id "row1"
    ///    mygrid.setCellExcellType("row1",1,"txt");
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - row ID
    /// </param>
    ///	<param name="cellIndex" type="Number">
    ///		cellIndex - cell index
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of excell (code like "ed", "txt", "ch" etc.)
    /// </param>

}
dhtmlXGridObject.prototype.setCellTextStyle = function (row_id, ind, styleString) {
    ///	<summary>
    /// sets style to cell
    ///		Example: mygrid.setCellTextStyle("row1",0,"color:red;border:1px solid gray;");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - cell index
    /// </param>
    ///	<param name="styleString" type="String">
    ///		styleString - style string in common format (ex: "color:red;border:1px solid gray;")
    /// </param>

}
dhtmlXGridObject.prototype.setCheckedRows = function (cInd, v) {
    ///	<summary>
    /// set value for all checkboxes in specified column
    ///		Example: //check all checkboxes in the first column
    ///    mygrid.setCheckedRows(0,1);
    ///    //uncheck all checkboxes in the first column
    ///    mygrid.setCheckedRows(0,0);
    ///	</summary>
    ///	<param name="cInd" type="Number">
    ///		col_ind - column index
    /// </param>
    ///	<param name="v" type="String">
    ///		v - value, 0 - not checked, any other value - checked
    /// </param>

}
dhtmlXGridObject.prototype.setColAlign = function (alStr) {
    ///	<summary>
    /// set align of values in columns
    ///		Example: mygrid.setColAlign("right,left,center,justify")
    ///	</summary>
    ///	<param name="alStr" type="String">
    ///		alStr - list of align values (possible values are: right,left,center,justify). Default delimiter is ","
    /// </param>

}
dhtmlXGridObject.prototype.setColLabel = function (col, label, ind) {
    ///	<summary>
    /// sets new column header label
    ///		Example: //set new label for the first column
    ///    mygrid.setColLabel(0,"New Column Label");
    ///    //set new label for the second line of the first column
    ///    mygrid.setColLabel(0,"New Column Label",1);
    ///	</summary>
    ///	<param name="col" type="Number">
    ///		col - header column index
    /// </param>
    ///	<param name="label" type="String">
    ///		label - new label for the cpecified header&#039;s column. Can contai img:[imageUrl]Text Label
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - header row index (default is 1)
    /// </param>

}
dhtmlXGridObject.prototype.setColSorting = function (sortStr) {
    ///	<summary>
    /// set column sort types (avaialble: str, int, date, na or function object for custom sorting)
    ///		Example: mygrid.setColSorting("int,str,date,na,sortingFunction")
    ///	</summary>
    ///	<param name="sortStr" type="String">
    ///		sortStr - sort codes list with default delimiter
    /// </param>

}
dhtmlXGridObject.prototype.setColTypes = function (typeStr) {
    ///	<summary>
    /// set column types
    ///		Example: mygrid.setColTypes("dyn,ed,txt,price,ch,coro,ra,ro");
    ///	</summary>
    ///	<param name="typeStr" type="String">
    ///		typeStr - type codes list (default delimiter is ",")
    /// </param>

}
dhtmlXGridObject.prototype.setColVAlign = function (valStr) {
    ///	<summary>
    /// set vertical align of columns
    ///		Example: mygrid.setColVAlign("top,middle,bottom,top,top,sub");
    ///	</summary>
    ///	<param name="valStr" type="String">
    ///		valStr - vertical align values list for columns (possible values are: baseline,sub,super,top,text-top,middle,bottom,text-bottom)
    /// </param>

}
dhtmlXGridObject.prototype.setColWidth = function (ind, value) {
    ///	<summary>
    /// sets width of specified column in pixels (soen&#039;t works with procent based grid)
    ///		Example: //set first column width
    ///    mygrid.setColWidth(0,"150");
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - column index
    /// </param>
    ///	<param name="value" type="String">
    ///		value - new width value
    /// </param>

}
dhtmlXGridObject.prototype.setColspan = function (row_id, col_ind, colspan) {
    ///	<summary>
    /// dynamically sets colspan in row starting from specified column index
    ///		Example: mygrid.enableColSpan(true);
    ///    //merge first 2 cells in the row with id "row1"
    ///    mygrid.setColspan("row1",0,2);
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>
    ///	<param name="col_ind" type="Number">
    ///		col_id - index of column
    /// </param>
    ///	<param name="colspan" type="String">
    ///		colspan - size of colspan
    /// </param>

}
dhtmlXGridObject.prototype.setColumnColor = function (clr) {
    ///	<summary>
    /// colorize columns  background.
    ///		Example: //set colors for the first 3 columns
    ///    mygrid.setColumnColor("white,#d5f1ff,#d5f1ff");
    ///	</summary>
    ///	<param name="clr" type="String">
    ///		clr - comma delimited colors list
    /// </param>

}
dhtmlXGridObject.prototype.setColumnExcellType = function (colIndex, type) {
    ///	<summary>
    /// set excell type for all cells in specified column
    ///		Example: //set type "ch" for the cells in the 3rd column
    ///    mygrid.setColumnExcellType(2,"ch");
    ///	</summary>
    ///	<param name="colIndex" type="Number">
    ///		colIndex - column index
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of excell
    /// </param>

}
dhtmlXGridObject.prototype.setColumnHidden = function (ind, state) {
    ///	<summary>
    /// hide/show column
    ///		Example: //hide first column
    ///    mygrid.setColumnHidden(0,true);
    ///    //show first column
    ///    mygrid.setColumnHidden(0,false);
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - column index
    /// </param>
    ///	<param name="state" type="Boolean">
    ///		state - true/false - hide/show column
    /// </param>

}
dhtmlXGridObject.prototype.setColumnId = function (ind, id) {
    ///	<summary>
    /// sets id to specified column.
    ///		Example: //set first column id
    ///    mygrid.setColumnId(0,"column1");
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind- index of column
    /// </param>
    ///	<param name="id" type="String">
    ///		id- id of column
    /// </param>

}
dhtmlXGridObject.prototype.setColumnIds = function (ids) {
    ///	<summary>
    /// sets id to every column. Can be used then to retreive the index of the desired colum
    ///		Example: mygrid.setColumnIds("sales,book,author,price,store,shipping,best,date");
    ///	</summary>
    ///	<param name="ids" type="String">
    ///		ids - comma delimitered list of ids or empty if to use values set earlier
    /// </param>

}
dhtmlXGridObject.prototype.setColumnMinWidth = function (width, ind) {
    ///	<summary>
    /// set minimum column width (works only for manual resizing)
    ///		Example: //set first column min width
    ///    mygrid.setColumnMinWidth(50,0);
    ///    //set columns min widths
    ///    mygrid.setColumnMinWidth("50,100,100,150,200,100,150");
    ///	</summary>
    ///	<param name="width" type="String">
    ///		width - minimum column width, can be set for specified column, or as comma separated list for all columns
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - column index
    /// </param>

}
dhtmlXGridObject.prototype.setColumnsVisibility = function (list) {
    ///	<summary>
    /// set list of visible/hidden columns
    ///		Example: //hide first column
    ///    mygrid.setColumnsVisibility("true,false,false,false,false");
    ///	</summary>
    ///	<param name="list" type="Boolean">
    ///		list - list of true/false separated by comma, false - show column, true - hide column
    /// </param>

}
dhtmlXGridObject.prototype.setCustomSorting = function (func, col) {
    ///	<summary>
    /// set custom sorting (custom sort has three params - valueA,valueB,order; where order can be asc or des)
    ///		Example: //second column is sorted by number of symbols in text
    ///    mygrid.setCustomSorting(sort_custom,1);
    ///    ...
    ///    function sort_custom(a,b,order){
    ///         var n=a.length;
    ///         var m=b.length;
    /// 	if(order=="asc")
    /// 		return n>m?1:-1;
    /// 	else
    /// 		return n<m?1:-1;
    ///     }
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - function to use for comparison
    /// </param>
    ///	<param name="col" type="Number">
    ///		col - index of column to apply custom sorting to
    /// </param>

}
dhtmlXGridObject.prototype.setDateFormat = function (mask) {
    ///	<summary>
    /// set mask for date formatting in grid (works for "dhxCalendar" and "dhxCalendarA" types only)
    ///		Example: mygrid.setDateFormat("%m/%d/%Y");
    ///	</summary>
    ///	<param name="mask" type="String">
    ///		mask - date mask, d,m,y will mean day,month,year; for example "%d/%m/%y" - 22/05/1985
    /// </param>

}
dhtmlXGridObject.prototype.setDelimiter = function (delim) {
    ///	<summary>
    /// set delimiter character used in list values (default is ",")
    ///		Example: mygrid.setDelimiter(";");
    ///    mygrid.setHeader("First Column;Second Column;Third Column");
    ///	</summary>
    ///	<param name="delim" type="String">
    ///		delim - delimiter as string
    /// </param>

}
dhtmlXGridObject.prototype.setDragBehavior = function (mode) {
    ///	<summary>
    /// set Drag-And-Drop behavior
    ///		Example: mygrid.setDragBehavior(sibling);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - behavior name
    /// </param>

}
dhtmlXGridObject.prototype.setDragText = function (single, plural) {
    ///	<summary>
    /// define text (single and plural forms) for extended visual appearence of drag-n-drop
    ///		Example: mygrid.setDragText("row is moving", "rows are moving");
    ///	</summary>
    ///	<param name="single" type="String">
    ///		single - single form (like "product")
    /// </param>
    ///	<param name="plural" type="String">
    ///		plural - plural form (if omitted, then "s" will be added to single form)
    /// </param>

}
dhtmlXGridObject.prototype.setEditable = function (mode) {
    ///	<summary>
    /// manage editibility of the grid
    ///		Example: //set grid editable
    ///    mygrid.setEditable(true);
    ///    //set grid not editable
    ///    mygrid.setEditable(false);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - set not editable if FALSE, set editable otherwise
    /// </param>

}
dhtmlXGridObject.prototype.setExternalTabOrder = function (start, end) {
    ///	<summary>
    /// sets elements which get focus when tab is pressed in the last or first (tab+shift) cell
    ///		Example: mygrid.setExternalTabOrder("elem1","elem2");
    ///	</summary>
    ///	<param name="start" type="Object">
    ///		start - html object or its id - gets focus when tab+shift are pressed in the first cell
    /// </param>
    ///	<param name="end" type="Object">
    ///		end - html object or its id - gets focus when tab is pressed in the last cell
    /// </param>

}
dhtmlXGridObject.prototype.setFieldName = function (mask) {
    ///	<summary>
    /// allows to define input name which will be used for data sending, name may contain next auto-replaced elements:
    ///		Example: mygrid.setFieldName("{GRID_ID}[{ROW_INDEX}].{COLUMN_ID}"); // gridbox[0].columnA
    ///	</summary>
    ///	<param name="mask" type="String">
    ///		GRID_ID - ID of grids container,
    /// </param>

}
dhtmlXGridObject.prototype.setFooterLabel = function (c, label, ind) {
    ///	<summary>
    /// sets new label for cell in footer
    ///		Example: //set new label for the first cell in the first footer's line
    ///    mygrid.setFooterLabel(0,'New Label');
    ///    //set new label with image for the first cell in the second footer's line
    ///    mygrid.setFooterLabel(0,'img:[../codebase/imgs/image.gif]New Label',1);
    ///	</summary>
    ///	<param name="c" type="Number">
    ///		col - column index
    /// </param>
    ///	<param name="label" type="String">
    ///		label - new label for the cpecified footer&#039;s column. Can contain img:[imageUrl]Text Label
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - footer row index (optional, 1 by default)
    /// </param>

}
dhtmlXGridObject.prototype.setHeader = function (hdrStr, splitSign, styles) {
    ///	<summary>
    /// set header label and default params for new headers
    ///		Example: //setting columns labels
    ///    mygrid.setHeader("A,B,C");
    ///    //setting columns labels and it's styles
    ///    mygrid.setHeader("A,B,C",null,["text-align:right;","text-align:left;","text-align:center"]);
    ///	</summary>
    ///	<param name="hdrStr" type="String">
    ///		hdrStr - header string with delimiters
    /// </param>
    ///	<param name="splitSign" type="String">
    ///		splitSign - string used as a split marker, optional. Default is "#cspan"
    /// </param>
    ///	<param name="styles" type="String">
    ///		styles - array of header styles
    /// </param>

}
dhtmlXGridObject.prototype.setIconPath = function (path) {
    ///	<summary>
    /// set path to external images used in grid ( tree and img column types )
    ///		Example: mygrid.setIconPath("../codebase/imgs/icons_greenfolders/");
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - url (or relative path) of images folder with closing "/"
    /// </param>

}
dhtmlXGridObject.prototype.setImagePath = function (path) {
    ///	<summary>
    /// set path to grid internal images (sort direction, any images used in editors, checkbox, radiobutton)
    ///		Example: mygrid.setImagePath("../codebase/imgs/");
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - url (or relative path) of images folder with closing "/"
    /// </param>

}
dhtmlXGridObject.prototype.setInitWidths = function (wp) {
    ///	<summary>
    /// set width of columns in pixels
    ///		Example: mygrid.setInitWidths("150,100,100,100,100");
    ///	</summary>
    ///	<param name="wp" type="String">
    ///		wp - list of column width in pixels
    /// </param>

}
dhtmlXGridObject.prototype.setInitWidthsP = function (wp) {
    ///	<summary>
    /// set width of columns in percents
    ///		Example: mygrid.setInitWidthsP("50,40,10");
    ///	</summary>
    ///	<param name="wp" type="String">
    ///		wp - list of column width in percents. Sum of the column widths must be equal to 100.
    /// </param>

}
dhtmlXGridObject.prototype.setMathRound = function (digits) {
    ///	<summary>
    /// enable/disable rounding while math calculations
    ///		Example: mygrid.setMathRound(2);
    ///	</summary>
    ///	<param name="digits" type="String">
    ///		digits - set how many digits must be rounded, set 0 for disabling
    /// </param>

}
dhtmlXGridObject.prototype.setNoHeader = function (fl) {
    ///	<summary>
    /// create grid with no header. Call before initialization, but after setHeader. setHeader have to be called in any way as it defines number of columns
    ///		Example: mygrid.setNoHeader(true);
    ///	</summary>
    ///	<param name="fl" type="String">
    ///		fl - true to use no header in the grid
    /// </param>

}
dhtmlXGridObject.prototype.setNumberFormat = function (mask, cInd, p_sep, d_sep) {
    ///	<summary>
    /// 
    ///		Example: mygrid.setNumberFormat("0,000.00",index,".",",");
    ///	</summary>
    ///	<param name="mask" type="String">
    ///		mask - numeric mask; for example 0,000.00 - 1,234.56
    /// </param>
    ///	<param name="cInd" type="Number">
    ///		cInd - column index
    /// </param>
    ///	<param name="p_sep" type="String">
    ///		p_sep - char used as decimal separator (point by default)
    /// </param>
    ///	<param name="d_sep" type="String">
    ///		d_sep - char used as groups part separator (comma by default)
    /// </param>

}
dhtmlXGridObject.prototype.setPagingSkin = function (name) {
    ///	<summary>
    /// allows to set custom paging skin
    ///		Example: //set "bricks" paging skin
    ///    mygrid.setPagingSkin("bricks");
    ///    //set "toolbar" paging skin with "dhx_blue" toolbar's skin
    ///    mygrid.setPagingSkin("toolbar")
    ///    //set "toolbar" paging skin with "dhx_black" toolbar's skin
    ///    mygrid.setPagingSkin("toolbar","dhx_black");
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - skin name (default,toolbar,bricks)
    /// </param>

}
dhtmlXGridObject.prototype.setPagingTemplates = function (navigation_template, info_template) {
    ///	<summary>
    /// allows to set paging templates for default skin
    ///		Example: mygrid.setPagingTemplates("Pages - [current:0] [current:+1] [current:+2] , from [total] rows","Pages <b>[from]-[to]</b> of <b>[total]</b>");
    ///	</summary>
    ///	<param name="navigation_template" type="String">
    ///		navigation_template - template for paging controls zone
    /// </param>
    ///	<param name="info_template" type="String">
    ///		info_template - template for paging state zone
    /// </param>

}
dhtmlXGridObject.prototype.setPagingWTMode = function (navButtons, navLabel, pageSelect, perPageSelect) {
    ///	<summary>
    /// configure paging with toolbar mode ( must be called BEFORE enablePaging)
    ///		Example: //disable page selector
    ///    mygrid.setPagingWTMode(true,true,false,true);
    ///    //disable row per page selector
    ///    mygrid.setPagingWTMode(true,true,true,false);
    ///	</summary>
    ///	<param name="navButtons" type="Boolean">
    ///		navButtons - {true|false} enable/disable navigation buttons
    /// </param>
    ///	<param name="navLabel" type="Boolean">
    ///		navLabel - {true|false} enable/disable navigation label
    /// </param>
    ///	<param name="pageSelect" type="Boolean">
    ///		pageSelect - {true|false} enable/disable page selector
    /// </param>
    ///	<param name="perPageSelect" type="Boolean">
    ///		perPageSelect - {true|false} enable/disable rows per  page selector
    /// </param>

}
dhtmlXGridObject.prototype.setRowAttribute = function (rId, name, value) {
    ///	<summary>
    /// sets row attribute
    ///		Example: <?xml version='1.0' encoding='iso-8859-1'?>
    ///         <rows>
    ///             <row id="unique_rowid" some="data">
    ///                     <cell some="data">cell content</cell>
    ///             </row>
    ///         </rows>
    ///    ...
    ///    var rowAttr = grid.setRowAttribute("unique_rowid","some","new value");
    ///	</summary>
    ///	<param name="rId" type="String">
    ///		rId - row ID
    /// </param>
    ///	<param name="name" type="String">
    ///		name - attribute name
    /// </param>
    ///	<param name="value" type="String">
    ///		value - new attribute&#039;s value
    /// </param>

}
dhtmlXGridObject.prototype.setRowColor = function (row_id, color) {
    ///	<summary>
    /// sets background color of row (via bgcolor attribute)
    ///		Example: mygrid.setRowColor("row1","red");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>
    ///	<param name="color" type="String">
    ///		color - color value
    /// </param>

}
dhtmlXGridObject.prototype.setRowExcellType = function (rowId, type) {
    ///	<summary>
    /// set excell type for all cells in specified row
    ///		Example: //set "ra_str" type for the cells in the row with id "row1"
    ///    mygrid.setRowExcellType("row1","ra_str");
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - row ID
    /// </param>
    ///	<param name="type" type="String">
    ///		type - type of excell
    /// </param>

}
dhtmlXGridObject.prototype.setRowHidden = function (id, state) {
    ///	<summary>
    /// hide/show row (warning! - this command doesn&#039;t affect row indexes, only visual appearance)
    ///		Example: //hide row with id "row1"
    ///    mygrid.setRowHidden("row1",true);
    ///    //show row with id "row1"
    ///    mygrid.setRowHidden("row1",false);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - row ID
    /// </param>
    ///	<param name="state" type="Boolean">
    ///		state - true/false - hide/show row
    /// </param>

}
dhtmlXGridObject.prototype.setRowId = function (ind, row_id) {
    ///	<summary>
    /// sets new id for row by its index
    ///		Example: //set new id for the first row
    ///    mygrid.setRowId(0,"new_row_id");
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - row index
    /// </param>
    ///	<param name="row_id" type="String">
    ///		row_id - new row id
    /// </param>

}
dhtmlXGridObject.prototype.setRowTextBold = function (row_id) {
    ///	<summary>
    /// sets row text BOLD
    ///		Example: mygrid.setRowTextBold("row1");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>

}
dhtmlXGridObject.prototype.setRowTextNormal = function (row_id) {
    ///	<summary>
    /// sets row text weight to normal
    ///		Example: mygrid.setRowTextNormal("row1");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>

}
dhtmlXGridObject.prototype.setRowTextStyle = function (row_id, styleString) {
    ///	<summary>
    /// sets style to row.
    ///		Example: grid.setRowTextStyle("r123", "background-color: red; font-family: arial;");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id - row id
    /// </param>
    ///	<param name="styleString" type="String">
    ///		styleString - style string in common format (exmpl: "color:red;border:1px solid gray;")
    /// </param>

}
dhtmlXGridObject.prototype.setRowspan = function (rowID, colInd, length) {
    ///	<summary>
    /// set rowspan with specified length starting from specified cell
    ///		Example: mygrid.setRowspan("row1",0,2);
    ///	</summary>
    ///	<param name="rowID" type="String">
    ///		rowID - row Id
    /// </param>
    ///	<param name="colInd" type="Number">
    ///		colInd - column index
    /// </param>
    ///	<param name="length" type="String">
    ///		length - length of rowspan
    /// </param>

}
dhtmlXGridObject.prototype.setSerializableColumns = function (list) {
    ///	<summary>
    /// configure which column must be serialized (if you do not use this method, then all columns will be serialized)
    ///		Example: //serialize only 1st and 4th columns
    ///    mygrid.setSerializableColumns("true,false,false,true,false,false,false")
    ///	</summary>
    ///	<param name="list" type="Boolean">
    ///		list - list of true/false values separated by comma, if list empty then all fields will be serialized
    /// </param>

}
dhtmlXGridObject.prototype.setSerializationLevel = function (userData, selectedAttr, config, changedAttr, onlyChanged, asCDATA) {
    ///	<summary>
    /// 
    ///		Example: mygrid.setSerializationLevel(true,false,true,false,true,true);
    ///	</summary>
    ///	<param name="userData" type="String">
    ///		userData - enable/disable user data serialization
    /// </param>
    ///	<param name="selectedAttr" type="String">
    ///		selectedAttr -  include "selected" row&#039;s attribute in result XML
    /// </param>
    ///	<param name="config" type="String">
    ///		config - serialize grid configuration (only information about grid structure)
    /// </param>
    ///	<param name="changedAttr" type="String">
    ///		changedAttr - include "changed" cell&#039;s attribute in result XML
    /// </param>
    ///	<param name="onlyChanged" type="String">
    ///		onlyChanged - include only changed  rows in result XML
    /// </param>
    ///	<param name="asCDATA" type="String">
    ///		asCDATA - output cell values as CDATA sections (prevent invalid XML)
    /// </param>

}
dhtmlXGridObject.prototype.setSizes = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.setSizes();
    ///	</summary>

}
dhtmlXGridObject.prototype.setSkin = function (name) {
    ///	<summary>
    /// set one of predefined css styles (xp, mt, gray, light, clear, modern, sb_dark)
    ///		Example: mygrid.setSkin("light");//set "light" skin to the grid
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - style name
    /// </param>

}
dhtmlXGridObject.prototype.setSortImgState = function (state, ind, order, row) {
    ///	<summary>
    /// sets position and visibility of sort arrow
    ///		Example: //minimal parameters set
    ///    mygrid.setSortImgState(true,1)
    ///    //maximal parameters set
    ///    mygrid.setSortImgState(true,1,"des",2)
    ///    //hide sorting image
    ///    mygrid.setSortImgState(false)
    ///	</summary>
    ///	<param name="state" type="Boolean">
    ///		state - true/false - show/hide image
    /// </param>
    ///	<param name="ind" type="Number">
    ///		ind - index of column
    /// </param>
    ///	<param name="order" type="String">
    ///		order - asc/desc - type of image (optional, "asc" by default)
    /// </param>
    ///	<param name="row" type="Number">
    ///		row - one based index of header row (used in multirow headers, top row by default)
    /// </param>

}
dhtmlXGridObject.prototype.setStyle = function (ss_header, ss_grid, ss_selCell, ss_selRow) {
    ///	<summary>
    /// modify default style of grid and its elements. Call before or after Init
    ///		Example: mygrid.setStyle("background-color:navy;color:white; font-weight:bold;", "","color:red;", "");
    ///	</summary>
    ///	<param name="ss_header" type="String">
    ///		ss_header - style def. expression for header
    /// </param>
    ///	<param name="ss_grid" type="String">
    ///		ss_grid - style def. expression for grid cells
    /// </param>
    ///	<param name="ss_selCell" type="String">
    ///		ss_selCell - style def. expression for selected cell
    /// </param>
    ///	<param name="ss_selRow" type="String">
    ///		ss_selRow - style def. expression for selected Row
    /// </param>

}
dhtmlXGridObject.prototype.setTabOrder = function (order) {
    ///	<summary>
    /// set tab order of columns
    ///		Example: mygrid.mygrid.setTabOrder("1,3,5,3,4,6,7,8");
    ///	</summary>
    ///	<param name="order" type="Number">
    ///		order - list of tab indexes (default delimiter is ",")
    /// </param>

}
dhtmlXGridObject.prototype.setUserData = function (row_id, name, value) {
    ///	<summary>
    /// sets user data to row
    ///		Example: //set row userdata
    ///    mygrid.setUserData("unique_rowid","someName1","new value");
    ///    //set global userdata
    ///    mygrid.setUserData("","someName1","new value");
    ///	</summary>
    ///	<param name="row_id" type="String">
    ///		row_id -  row id. if empty then user data is set for grid (not row)
    /// </param>
    ///	<param name="name" type="String">
    ///		name -  name of user data block
    /// </param>
    ///	<param name="value" type="String">
    ///		value -  value of user data block
    /// </param>

}
dhtmlXGridObject.prototype.showRow = function (rowID) {
    ///	<summary>
    /// scrolls row to the visible area
    ///		Example: mygrid.showRow("row1");
    ///	</summary>
    ///	<param name="rowID" type="String">
    ///		rowID - row id
    /// </param>

}
dhtmlXGridObject.prototype.sortRows = function (col, type, order) {
    ///	<summary>
    /// sort grid
    ///		Example: //sort first column in grid
    ///    mygrid.sortRows(0);
    ///    //sort first column in grid by "str" type in "des" order
    ///    mygrid.sortRows(0,"str","des");
    ///	</summary>
    ///	<param name="col" type="Number">
    ///		col - index of column, by which grid need to be sorted
    /// </param>
    ///	<param name="type" type="String">
    ///		type - sorting type (str,int,date), optional, by default sorting type taken from column setting
    /// </param>
    ///	<param name="order" type="String">
    ///		order - sorting order (asc,des), optional, by default sorting order based on previous sorting operation
    /// </param>

}
dhtmlXGridObject.prototype.startFastOperations = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.startFastOperations();
    /// �
    ///    for (var i=0; i<1000; i++)
    ///        mygrid.addRow(mygrid.uid(),[i,"new row"]);
    /// �
    ///    mygrid.stopFastOperations();
    ///	</summary>

}
dhtmlXGridObject.prototype.stopFastOperations = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.startFastOperations();
    /// �
    ///    for (var i=0; i<1000; i++)
    ///        mygrid.addRow(mygrid.uid(),[i,"new row"]);
    /// �
    ///    mygrid.stopFastOperations();
    ///	</summary>

}
dhtmlXGridObject.prototype.submitAddedRows = function (mode) {
    ///	<summary>
    /// 
    ///		Example: mygrid.submitAddedRows(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false}  enable|disable mode
    /// </param>

}
dhtmlXGridObject.prototype.submitOnlyChanged = function (mode) {
    ///	<summary>
    /// include only changed rows in form submit
    ///		Example: mygrid.submitOnlyChanged(true);
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - {boolean}  enable|disable mode
    /// </param>

}
dhtmlXGridObject.prototype.submitOnlyRowID = function (mode) {
    ///	<summary>
    /// include only  row&#039;s IDS in form submit
    ///		Example: mygrid.submitOnlyRowID(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false}  enable|disable mode
    /// </param>

}
dhtmlXGridObject.prototype.submitOnlySelected = function (mode) {
    ///	<summary>
    /// include only selected rows in form submit
    ///		Example: mygrid.submitOnlySelected(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false}  enable|disable mode
    /// </param>

}
dhtmlXGridObject.prototype.submitSerialization = function (mode) {
    ///	<summary>
    /// 
    ///		Example: mygrid.submitSerialization(true);
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - {true|false}  enable|disable mode
    /// </param>

}
dhtmlXGridObject.prototype.treeToGridElement = function (treeObj, treeNodeId, gridRowId) {
    ///	<summary>
    /// redefine this method in your code to define how tree node values should be used in grid (using input parameters you can change id of new row, values for cells, userdata blocks etc.).
    ///		Example: grid.treeToGridElement = function(tree,treeID,gridID){
    ///         var z=[treeObj.getItemText(treeID)];  // set tree text as a value of the first column in the grid
    ///         return z;
    ///     }
    ///	</summary>
    ///	<param name="treeObj" type="Object">
    ///		treeObj - object of tree
    /// </param>
    ///	<param name="treeNodeId" type="String">
    ///		treeNodeId - id of node created in tree
    /// </param>
    ///	<param name="gridRowId" type="String">
    ///		gridRowId - id of grid row
    /// </param>

}
dhtmlXGridObject.prototype.uid = function () {
    ///	<summary>
    /// 
    ///		Example: var uniqueID=mygrid.uid();
    ///	</summary>

}
dhtmlXGridObject.prototype.uncheckAll = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.uncheckAll();
    ///	</summary>

}
dhtmlXGridObject.prototype.unmarkAll = function () {
    ///	<summary>
    /// 
    ///		Example: mygrid.unmarkAll();
    ///	</summary>

}
dhtmlXGridObject.prototype.updateCellFromClipboard = function (rowId, cellInd) {
    ///	<summary>
    /// set value of cell from clipboard
    ///		Example: <script>
    ///    //minimal parameters set
    ///    mygrid.updateCellFromClipboard();
    ///    //maximal parameters set
    ///    mygrid.updateCellFromClipboard("rowID",0);
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row (optional, use selected row by default)
    /// </param>
    ///	<param name="cellInd" type="Number">
    ///		cellInd - column index(optional, use selected cell by default)
    /// </param>

}
dhtmlXGridObject.prototype.updateFromXML = function (url, insert_new, del_missed, afterCall) {
    ///	<summary>
    /// 
    ///		Example: //update grid from xml
    ///    mygrid.updateFromXML("grid_updated.xml");
    ///    //update grid from xml, insert new items, delete missed rows, execute doAfterUpdate() function after rows were updated
    ///    mygrid.updateFromXML("grid_updated.xml",true,true,doAfterUpdate);
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - url to the file
    /// </param>
    ///	<param name="insert_new" type="String">
    ///		insert_new - insert new items (optional, true by default)
    /// </param>
    ///	<param name="del_missed" type="String">
    ///		del_missed - delete missed rows (optional, false by default)
    /// </param>
    ///	<param name="afterCall" type="String">
    ///		afterCall - function, will be executed after refresh completted
    /// </param>

}
dhtmlXGridObject.prototype.updateRowFromClipboard = function (rowId) {
    ///	<summary>
    /// set value of row from clipboard
    ///		Example: //minimal parameters set
    ///    mygrid.updateRowFromClipboard();
    ///    //maximal parameters set
    ///    mygrid.updateRowFromClipboard("rowID");
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row (optional, use selected row by default)
    /// </param>

}


var dhtmlXCalendarObject = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXCalendarObject.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// 
    ///		Example: var myEvent = myCalendar.attachEvent("onClick", function (){
    ///     //event handler code
    /// })
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - the event name;
    /// </param>
    ///	<param name="evHandler" type="Function">
    ///		several handlers can be attached to one and the same event, and all of them will be executed.
    /// </param>

}
dhtmlXCalendarObject.prototype.attachObj = function (input) {
    ///	<summary>
    /// 
    ///		Example: <input type="text" id="input1">
    /// <input type="text" id="input2">
    /// <script>
    ///    myCalendar = new dhtmlXCalendarObject("input1");
    ///    ...
    ///    myCalendar.attachObj("input2");
    /// })
    /// </script>
    ///	</summary>
    ///	<param name="input" type="String">
    ///		one and the same calendar can be attached to several inputs.
    /// </param>

}
dhtmlXCalendarObject.prototype.setInsensitiveDays = function (date) {
    ///	<summary>
    /// 
    ///		Example: setInsensitiveDays((["2011-07-10,2011-07-11",new Date(2011,6,17),"2011-07-18"]));// July 10, 2011, July 11, 2011, July 17, 2011, July 18, 2011 will be dimmed. All other dates will be active.
    ///	</summary>
    ///	<param name="date" type="String">
    ///		setSensetiveRange()
    /// </param>

}
dhtmlXCalendarObject.prototype.setSensitiveRange = function (date) {
    ///	<summary>
    /// 
    ///		Example: setSensitiveRange("2011-07-08",null);// all dates starting from July 08, 2011 will be active. Dates until July 08, 2011 will be dimmed.
    ///	</summary>
    ///	<param name="date" type="String">
    ///		clearSensitiveRange()
    /// </param>

}
dhtmlXCalendarObject.prototype.detachEvent = function (evId) {
    ///	<summary>
    /// 
    ///		Example: var myEvent = myCalendar.attachEvent("onClick", function (){
    ///     //event handler code
    /// })
    /// ..
    /// myCalendar.detachEvent(myEvent);
    ///	</summary>
    ///	<param name="evId" type="String">
    ///		attachEvent()
    /// </param>

}
dhtmlXCalendarObject.prototype.detachObj = function (input) {
    ///	<summary>
    /// 
    ///		Example: <input type="text" id="input1">
    /// <input type="text" id="input2">
    /// <script>
    ///    myCalendar = new dhtmlXCalendarObject(["input1","input2"]);
    ///    ...
    ///    myCalendar.detachObj("input2");
    /// })
    /// </script>
    ///	</summary>
    ///	<param name="input" type="String">
    ///		attachObj()
    /// </param>

}
dhtmlXCalendarObject.prototype.disableDays = function (mode, date) {
    ///	<summary>
    /// Different modes server_side different date formats:
    ///		Example: myCalendar.disableDays("month",[1,2,5,6,19]);// disables 1st, 2nd, 5th, 6th and 19th day of each month
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - (&#039;week&#039;, &#039;month&#039; or &#039;year&#039;) defines the repetition period of the specified dates.
    /// </param>
    ///	<param name="date" type="String">
    ///		enableDays()
    /// </param>

}
dhtmlXCalendarObject.prototype.disableDays = function (mode, date) {
    ///	<summary>
    /// Different modes server_side different date formats:
    ///		Example: myCalendar.disableDays("month",[1,2,5,6,19]);// disables 1st, 2nd, 5th, 6th and 19th day of each month
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - (&#039;week&#039;, &#039;month&#039; or &#039;year&#039;) defines the repetition period of the specified dates.
    /// </param>
    ///	<param name="date" type="String">
    ///		enableDays()
    /// </param>

}
dhtmlXCalendarObject.prototype.getDate = function (isFormatted) {
    ///	<summary>
    /// 
    ///		Example: var currentDate = myCalendar.getDate();
    ///	</summary>
    ///	<param name="isFormatted" type="Boolean">
    ///		isFormatted - (boolean) if the parameter is set to &#039;true&#039; the formatted date will be returned. By default is &#039;false&#039;. Optional.
    /// </param>

}
dhtmlXCalendarObject.prototype.getFormatedDate = function (format, date) {
    ///	<summary>
    /// Format string can contain any separator character and any element from the following list:
    ///		Example: myCalendar.getFormatedDate("%d/%m/%y", "2011-06-08")
    ///	</summary>
    ///	<param name="format" type="String">
    ///		format - the custom date format string. If the parameter is omitted, the currently set date format will be used.
    /// </param>
    ///	<param name="date" type="String">
    ///		%d - day as number ( with leading zero );
    /// </param>

}
dhtmlXCalendarObject.prototype.hide = function () {
    ///	<summary>
    /// 
    ///		Example: myCalendar.hide();
    ///	</summary>

}
dhtmlXCalendarObject.prototype.hideTime = function () {
    ///	<summary>
    /// 
    ///		Example: myCalendar.hideTime();
    ///	</summary>

}
dhtmlXCalendarObject.prototype.loadUserLanguage = function (lang, func) {
    ///	<summary>
    /// 
    ///		Example: dhtmlXCalendarObject.prototype.langData["de"] = {
    ///         //date format
    /// 	dateformat: '%d.%m.%Y',
    /// 	//full names of months
    ///         monthesFNames: ["Januar","Februar","M"arz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
    /// 	//shortened names of months
    ///         monthesSNames: ["Jan","Feb","M"ar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],
    /// 	//full names of days
    ///         daysFNames: ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
    /// 	//shortened names of days
    ///         daysSNames: ["So","Mo","Di","Mi","Do","Fr","Sa"],
    ///         //starting day of a week. Number from 1(Monday) to 7(Sunday)
    /// 	weekstart: 1
    /// }
    /// function main() {
    ///         var myCalendar = new dhtmlXCalendarObject("calendarHere");
    ///         myCalendar.loadUserLanguage("de");
    ///         myCalendar.show();
    /// }
    ///	</summary>
    ///	<param name="lang" type="String">
    ///		lang - the language name.
    /// </param>
    ///	<param name="func" type="String">
    ///		func - the function called after language is loaded.
    /// </param>

}
dhtmlXCalendarObject.prototype.setDate = function (date) {
    ///	<summary>
    /// 
    ///		Example: myCalendar.setDate("2011-06-08");
    ///	</summary>
    ///	<param name="date" type="String">
    ///		date - the date you want to make selected.
    /// </param>

}
dhtmlXCalendarObject.prototype.setDateFormat = function (format) {
    ///	<summary>
    /// Format string can contain any separator character and any element from the following list:
    ///		Example: myCalendar.setDateFormat("%d/%m/%y");
    ///	</summary>
    ///	<param name="format" type="String">
    ///		%d - day as number ( with leading zero );
    /// </param>

}
dhtmlXCalendarObject.prototype.setHolidays = function (date) {
    ///	<summary>
    /// 
    ///		Example: myCalendar.setHolidays("2011-09-25")// sets September 25, 2011 as holiday
    ///	</summary>

}
dhtmlXCalendarObject.prototype.setInsensitiveDays = function (date) {
    ///	<summary>
    /// 
    ///		Example: setInsensitiveDays((["2011-07-10,2011-07-11",new Date(2011,6,17),"2011-07-18"]));// July 10, 2011, July 11, 2011, July 17, 2011, July 18, 2011 will be dimmed. All other dates will be active.
    ///	</summary>
    ///	<param name="date" type="String">
    ///		setSensetiveRange()
    /// </param>

}
dhtmlXCalendarObject.prototype.setInsensitiveRange = function (date) {
    ///	<summary>
    /// 
    ///		Example: setInsensitiveRange("2011-07-08",null);// all dates starting from July 08, 2011 will be dimmed. Dates until July 08, 2011 will be active.
    ///	</summary>
    ///	<param name="date" type="String">
    ///		clearSensitiveRange()
    /// </param>

}
dhtmlXCalendarObject.prototype.setParent = function (parent) {
    ///	<summary>
    /// 
    ///		Example: <div id="box" style="height:300px; position:relative;"></div>
    /// <div id="box2" style="height:300px; position:relative;"></div>
    /// <script>
    ///       myCalendar = new dhtmlXCalendarObject("box");
    ///       myCalendar.show();
    ///       ...
    ///       myCalendar.setParent("box2");
    /// </script>
    ///	</summary>
    ///	<param name="parent" type="String">
    ///		parent - a parent node (container).
    /// </param>

}
dhtmlXCalendarObject.prototype.setPosition = function (pos) {
    ///	<summary>
    /// 
    ///		Example: myCalendar.setPosition('right');
    ///	</summary>

}
dhtmlXCalendarObject.prototype.setSensitiveRange = function (date) {
    ///	<summary>
    /// 
    ///		Example: setSensitiveRange("2011-07-08",null);// all dates starting from July 08, 2011 will be active. Dates until July 08, 2011 will be dimmed.
    ///	</summary>
    ///	<param name="date" type="String">
    ///		clearSensitiveRange()
    /// </param>

}
dhtmlXCalendarObject.prototype.setSkin = function (skin) {
    ///	<summary>
    /// 
    ///		Example: myCalendar.setSkin('omega');
    ///	</summary>

}
dhtmlXCalendarObject.prototype.setWeekStartDay = function (day) {
    ///	<summary>
    /// 
    ///		Example: myCalendar.setWeekStartDay=1;//week starts from Monday
    ///	</summary>
    ///	<param name="day" type="String">
    ///		day - the day you want to start a week. Can take a value from &#039;1&#039; (Monday) to &#039;7&#039; (Sunday).
    /// </param>

}
dhtmlXCalendarObject.prototype.show = function () {
    ///	<summary>
    /// 
    ///		Example: myCalendar.show();
    ///	</summary>

}
dhtmlXCalendarObject.prototype.showTime = function () {
    ///	<summary>
    /// 
    ///		Example: myCalendar.showTime();
    ///	</summary>

}
dhtmlXCalendarObject.prototype.unload = function () {
    ///	<summary>
    /// 
    ///		Example: myCalendar.unload();
    ///	</summary>

}


var dhtmlXColorPicker = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXColorPicker.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: colorpicker.attachEvent(evName, evHandler);
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - name of the event;
    /// </param>

}
dhtmlXColorPicker.prototype.close = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXColorPicker.prototype.detachEvent = function (id) {
    ///	<summary>
    /// 
    ///		Example: colorpicker.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlXColorPicker.prototype.getSelectedColor = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXColorPicker.prototype.hide = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXColorPicker.prototype.init = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXColorPicker.prototype.linkTo = function (obj1, obj2, obj3) {
    ///	<summary>
    /// link color picker to some area
    ///		Example: 
    ///	</summary>
    ///	<param name="obj1" type="Object">
    ///		obj1 - color target
    /// </param>
    ///	<param name="obj2" type="Object">
    ///		obj2 - action element
    /// </param>
    ///	<param name="obj3" type="Object">
    ///		obj3 - color value target
    /// </param>

}
dhtmlXColorPicker.prototype.loadUserLanguage = function (lang) {
    ///	<summary>
    /// Set new language interface for colorpicker
    ///		Example: 
    ///	</summary>
    ///	<param name="lang" type="String">
    ///		lang - language (ex: en-us|ru)
    /// </param>

}
dhtmlXColorPicker.prototype.setColor = function (rgb) {
    ///	<summary>
    /// select defined color
    ///		Example: 
    ///	</summary>
    ///	<param name="rgb" type="String">
    ///		rgb - array with decimal values of Red, Green and Blue or string with hex color
    /// </param>

}
dhtmlXColorPicker.prototype.setCustomColors = function (colors) {
    ///	<summary>
    /// define user&#039;s custom colors
    ///		Example: 
    ///	</summary>
    ///	<param name="colors" type="String">
    ///		colors - array with predefined colors (like #F8560A)
    /// </param>

}
dhtmlXColorPicker.prototype.setImagePath = function (path) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXColorPicker.prototype.setOnCancelHandler = function (func) {
    ///	<summary>
    /// set function called when selection canceled
    ///		Example: 
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - event handling function (or its name)
    /// </param>

}
dhtmlXColorPicker.prototype.setOnSelectHandler = function (func) {
    ///	<summary>
    /// set function called when color selected (before closing)
    ///		Example: 
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - event handling function (or its name)
    /// </param>

}
dhtmlXColorPicker.prototype.setPosition = function (x, y) {
    ///	<summary>
    /// show ColorPicker
    ///		Example: 
    ///	</summary>
    ///	<param name="x" type="String">
    ///		x - (int) position left
    /// </param>
    ///	<param name="y" type="String">
    ///		x - (top) position top
    /// </param>

}
dhtmlXColorPicker.prototype.show = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}


var dhtmlxSlider = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlxSlider.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: slider.attachEvent(evName, evHandler);
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - name of the event;
    /// </param>

}
dhtmlxSlider.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: slider.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlxSlider.prototype.enableTooltip = function (mode) {
    ///	<summary>
    /// enable/disable tooplips ( enabled by default )
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - (boolean)
    /// </param>

}
dhtmlxSlider.prototype.getValue = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlxSlider.prototype.init = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlxSlider.prototype.linkTo = function (obj) {
    ///	<summary>
    /// link slider to other control
    ///		Example: 
    ///	</summary>
    ///	<param name="obj" type="Object">
    ///		obj - (string|object) linked object id, or linked object itself
    /// </param>

}
dhtmlxSlider.prototype.setImagePath = function (path) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlxSlider.prototype.setMax = function (val) {
    ///	<summary>
    /// set new TO value
    ///		Example: 
    ///	</summary>
    ///	<param name="val" type="String">
    ///		val - (integer) set new To value
    /// </param>

}
dhtmlxSlider.prototype.setMin = function (val) {
    ///	<summary>
    /// set new FROM value
    ///		Example: 
    ///	</summary>
    ///	<param name="val" type="String">
    ///		val - (integer) set new From value
    /// </param>

}
dhtmlxSlider.prototype.setOnChangeHandler = function (func) {
    ///	<summary>
    /// set onChange handler
    ///		Example: 
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - (string|function) user defined function
    /// </param>

}
dhtmlxSlider.prototype.setStep = function (val) {
    ///	<summary>
    /// set new "ST value
    ///		Example: 
    ///	</summary>
    ///	<param name="val" type="String">
    ///		val - (integer) set new Step value
    /// </param>

}
dhtmlxSlider.prototype.setValue = function (val) {
    ///	<summary>
    /// set value of slider control
    ///		Example: 
    ///	</summary>
    ///	<param name="val" type="String">
    ///		val - (integer) new value
    /// </param>

}


var dhtmlXEditor = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXEditor.prototype.alignCenter = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.alignJustify = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.alignLeft = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.alignRight = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.applyBold = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.applyH1 = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.applyH2 = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.applyH3 = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.applyH4 = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.applyItalic = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.applyStrikethrough = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.applySub = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.applySuper = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.applyUnderscore = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.attachEvent = function (original, catcher, CallObj) {
    ///	<summary>
    /// attach an event handler to webbar
    ///		Example: 
    ///	</summary>
    ///	<param name="original" type="String">
    ///		original - event original name;
    /// </param>
    ///	<param name="catcher" type="String">
    ///		catcher - event handler;
    /// </param>
    ///	<param name="CallObj" type="Object">
    ///		CallObj - object which will call event.
    /// </param>

}
dhtmlXEditor.prototype.checkEvent = function (name) {
    ///	<summary>
    /// returns true if event exists
    ///		Example: 
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - event name
    /// </param>

}
dhtmlXEditor.prototype.createBulList = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.createNumList = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.decreaseIndent = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: 
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlXEditor.prototype.getContent = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.increaseIndent = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dhtmlXEditor.prototype.setContent = function (str) {
    ///	<summary>
    /// sets content to editor document
    ///		Example: 
    ///	</summary>
    ///	<param name="str" type="String">
    ///		html - html string which should be set as editor content
    /// </param>

}
dhtmlXEditor.prototype.setContentHTML = function (url) {
    ///	<summary>
    /// sets content from the html document to editor document
    ///		Example: 
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - path to the html page
    /// </param>

}


var dhtmlXVaultObject = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXVaultObject.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: vault.attachEvent(evName, evHandler);
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - name of the event;
    /// </param>

}
dhtmlXVaultObject.prototype.create = function (htmlObject) {
    ///	<summary>
    /// creates vault html control on page
    ///		Example: 
    ///	</summary>
    ///	<param name="htmlObject" type="Object">
    ///		htmlObject - id of parent html object
    /// </param>

}
dhtmlXVaultObject.prototype.getFileExtension = function (fileName) {
    ///	<summary>
    /// get the file extension from the full file name
    ///		Example: 
    ///	</summary>
    ///	<param name="fileName" type="String">
    ///		fileName - full file name, for example "c:\dhtmlXVault\readme.txt".
    /// </param>

}
dhtmlXVaultObject.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: vault.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
dhtmlXVaultObject.prototype.onAddFile = function (fileName) {
    ///	<summary>
    /// called when user has selected a file for uploading
    ///		Example: vault.onAddFile = function(fileName) { 
    ///       var ext = this.getFileExtension(fileName); 
    ///       if (ext != "txt" && ext != "doc") { 
    ///          alert("You may upload only text documents (txt, doc). Please retry."); 
    ///          return false; } 
    ///       else return true; 
    ///    };
    ///	</summary>
    ///	<param name="fileName" type="String">
    ///		fileName - a file being added by the user. You may check its type and return false to disable adding.
    /// </param>

}
dhtmlXVaultObject.prototype.onFileUploaded = function (file) {
    ///	<summary>
    /// called after every file is uploaded
    ///		Example: file = { id: "1", name: "file.name", uploaded: true/false, error: true/false };
    ///	</summary>
    ///	<param name="file" type="String">
    ///		file - a single file just uploaded.
    /// </param>

}
dhtmlXVaultObject.prototype.onUploadComplete = function (files) {
    ///	<summary>
    /// called after all files are uploaded
    ///		Example: file = { id: "1", name: "file.name", uploaded: true/false, error: true/false };
    ///	</summary>
    ///	<param name="files" type="Object">
    ///		files - an array of file objects.
    /// </param>

}
dhtmlXVaultObject.prototype.setFilesLimit = function (count) {
    ///	<summary>
    /// control the number of uploaded files
    ///		Example: 
    ///	</summary>
    ///	<param name="count" type="String">
    ///		count - the number of files user can upload at most.
    /// </param>

}
dhtmlXVaultObject.prototype.setFormField = function (fieldName, value) {
    ///	<summary>
    /// add or remove custom field
    ///		Example: 
    ///	</summary>
    ///	<param name="fieldName" type="String">
    ///		fieldName - the name of form field you want to add. This field will be posted to the server together with the file contents.
    /// </param>
    ///	<param name="value" type="String">
    ///		value - the value of this field.
    /// </param>

}
dhtmlXVaultObject.prototype.setImagePath = function (path) {
    ///	<summary>
    /// set relative path to the images folder
    ///		Example: 
    ///	</summary>
    ///	<param name="path" type="String">
    ///		path - relative path to the "imgs" folder, usually it is "codebase/imgs/".
    /// </param>

}
dhtmlXVaultObject.prototype.setServerHandlers = function (uploadHandler, getInfoHandler, getIdHandler) {
    ///	<summary>
    /// defines server-side handlers for vault
    ///		Example: 
    ///	</summary>
    ///	<param name="uploadHandler" type="String">
    ///		uploadHandler - handles file uploading
    /// </param>
    ///	<param name="getInfoHandler" type="String">
    ///		getInfoHandler - handles progress indication
    /// </param>
    ///	<param name="getIdHandler" type="String">
    ///		getIdHandler - handles session initialization
    /// </param>

}


var dataProcessor = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dataProcessor.prototype.afterUpdateCallback = function (sid, tid, action, btag) {
    ///	<summary>
    /// used in combination with setOnBeforeUpdateHandler to create custom client-server transport system
    ///		Example: 
    ///	</summary>
    ///	<param name="sid" type="String">
    ///		sid - id of item before update
    /// </param>
    ///	<param name="tid" type="String">
    ///		tid - id of item after up0ate
    /// </param>
    ///	<param name="action" type="String">
    ///		action - action name
    /// </param>
    ///	<param name="btag" type="String">
    ///		btag - reference to the xml node
    /// </param>

}
dataProcessor.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: dataprocessor.attachEvent(evName, evHandler);
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - name of the event;
    /// </param>

}
dataProcessor.prototype.checkBeforeUpdate = function (rowId) {
    ///	<summary>
    /// check mandatory fields and varify values of cells, initiate update (if specified)
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row to set update-status for
    /// </param>

}
dataProcessor.prototype.clearVerificator = function (ind) {
    ///	<summary>
    /// remove column from list of those which should be verified
    ///		Example: 
    ///	</summary>
    ///	<param name="ind" type="String">
    ///		ind - column Index (0 based)
    /// </param>

}
dataProcessor.prototype.defineAction = function (status, handlerFunc) {
    ///	<summary>
    /// 
    ///		Example: dp.defineAction("update",function(sid,response){
    ///    var message = response.getAttribute("message");
    ///    alert(message);
    ///    return true;// return false to cancel default data processing at all
    /// })
    ///	</summary>

}
dataProcessor.prototype.detachEvent = function (id) {
    ///	<summary>
    /// 
    ///		Example: dataprocessor.detachEvent(id);
    ///	</summary>

}
dataProcessor.prototype.enableDataNames = function (mode) {
    ///	<summary>
    /// enable/disable named field for data syncing, will use column ids for grid
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dataProcessor.prototype.enablePartialDataSend = function (mode) {
    ///	<summary>
    /// enable/disable mode , when only changed fields and row id send to the server side, instead of all fields in default mode
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		mode - true/false
    /// </param>

}
dataProcessor.prototype.enableUTFencoding = function (mode) {
    ///	<summary>
    /// allows to set escaping mode
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		true - utf based escaping, simple - use current page encoding
    /// </param>

}
dataProcessor.prototype.getSyncState = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
dataProcessor.prototype.init = function (anObj) {
    ///	<summary>
    /// initializes dataProcessor
    ///		Example: 
    ///	</summary>
    ///	<param name="anObj" type="Object">
    ///		anObj - the object to attach dataProcessor to
    /// </param>

}
dataProcessor.prototype.ignore = function (code) {
    ///	<summary>
    /// allows to execute commands which will not trigger dataprocessor
    ///		Example: dp.ignore(function(){
    ///           mygrid.addRow(1,"new row");
    ///           mygrid.deleteRow(123);
    ///     })
    ///	</summary>
    ///	<param name="code" type="String">
    ///		code - code block, any operation in which, will not cause dataProcessor reaction
    /// </param>

}
dataProcessor.prototype.sendData = function (rowId) {
    ///	<summary>
    /// send row(s) values to server
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row which data to send. If not specified, then all "updated" rows will be send
    /// </param>

}
dataProcessor.prototype.setDataColumns = function (val) {
    ///	<summary>
    /// allows to define, which column may trigger update
    ///		Example: 
    ///	</summary>
    ///	<param name="val" type="Boolean">
    ///		val - array or list of true/false values
    /// </param>

}
dataProcessor.prototype.setOnBeforeUpdateHandler = function (func) {
    ///	<summary>
    /// set function called before server request sent ( can be used for including custom client server transport system)
    ///		Example: 
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - event handling function
    /// </param>

}
dataProcessor.prototype.setTransactionMode = function (mode, total) {
    ///	<summary>
    /// select GET or POST transaction model
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - GET/POST
    /// </param>
    ///	<param name="total" type="Boolean">
    ///		total - true/false - send records row by row or all at once (for grid only)
    /// </param>

}
dataProcessor.prototype.setUpdated = function (rowId, state, mode) {
    ///	<summary>
    /// mark row as updated/normal. check mandatory fields,initiate autoupdate (if turned on)
    ///		Example: 
    ///	</summary>
    ///	<param name="rowId" type="String">
    ///		rowId - id of row to set update-status for
    /// </param>
    ///	<param name="state" type="Boolean">
    ///		state - true for "updated", false for "not updated"
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - update mode name - "inserted","updated","deleted" ("updated" by default)
    /// </param>

}
dataProcessor.prototype.setUpdateMode = function (mode, dnd) {
    ///	<summary>
    /// set if rows should be send to server automaticaly
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode - "row" - based on row selection changed, "cell" - based on cell editing finished, "off" - manual data sending
    /// </param>

}
dataProcessor.prototype.setVerificator = function (ind, verifFunction) {
    ///	<summary>
    /// specify column which value should be varified before sending to server
    ///		Example: //check if first column values is not equal to 0
    ///    myDataProcessor.setVerificator(0,greater_0);
    ///    function greater_0(value){
    /// 	return value>0;
    ///    }
    /// �
    ///    //check if second column values is not empty
    ///    myDataProcessor.setVerificator(1,not_empty);
    ///    function not_empty(value,id,ind){
    /// 	if (value=="") mygrid.setCellTextStyle(id,ind,"background-color:yellow;");
    /// 	return value!="";
    ///    }
    ///	</summary>
    ///	<param name="ind" type="Number">
    ///		ind - column index (0 based)
    /// </param>
    ///	<param name="verifFunction" type="Number">
    ///		verifFunction - function (object) which should verify cell value (if not specified, then value will be compared to empty string). Three arguments will be passed into it: value, row ID and column index
    /// </param>

}


var dhtmlXDataStore = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


dhtmlXDataStore.prototype.add = function (obj) {
    ///	<summary>
    /// 
    ///		Example: myStore.add({
    ///           FirstName:"Alex",
    ///           LastName:"Fgorle",
    ///           Department:"HR",
    ///           Gender: "Male"
    /// });
    /// //or if you use scheme
    /// myStore.data.scheme({
    /// 	    FirstName:"New employee",
    ///             LastName:"",
    ///             Department:"Unknown",
    ///             Gender: "Male"
    /// });
    /// �
    /// myStore.add({});
    ///	</summary>
    ///	<param name="obj" type="Object">
    ///		obj - the data object that will be added to the dataset
    /// </param>

}
dhtmlXDataStore.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// 
    ///		Example: data.attachEvent(evName, evHandler);
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - the event name.
    /// </param>

}
dhtmlXDataStore.prototype.clearAll = function () {
    ///	<summary>
    /// 
    ///		Example: data.clearAll();
    ///	</summary>

}
dhtmlXDataStore.prototype.copy = function (sid, tindex, tobj, tid) {
    ///	<summary>
    /// 
    ///		Example: //make a copy of the element
    /// var new_id = data.copy(source_id);
    ///   //make a copy at the specific position
    /// var new_id = data.copy(source_id, index);
    ///   //make a copy to a different datastore
    /// var new_id = data.copy(source_id, index, some_other_datastore);
    ///  //or
    /// var new_id = data.copy(source_id, null , some_other_datastore);
    /// �
    ///   //make a copy with defined ID
    /// data.copy(source_id, null, null, target_id);
    ///   //or
    /// data.copy(source_id, index, null, target_id);
    ///   //or
    /// data.copy(source_id, index, some_other_view, target_id);
    ///	</summary>
    ///	<param name="sid" type="String">
    ///		sid - the id of the source item, mandatory
    /// </param>

}
dhtmlXDataStore.prototype.dataCount = function () {
    ///	<summary>
    /// 
    ///		Example: var count = data.dataCount();
    ///	</summary>

}
dhtmlXDataStore.prototype.detachEvent = function (id) {
    ///	<summary>
    /// 
    ///		Example: var id = data.attachEvent(evName, evHandler);
    /// ...
    /// data.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - the id of the handler ( the result of attachEvent() operation )
    /// </param>

}
dhtmlXDataStore.prototype.exists = function () {
    ///	<summary>
    /// 
    ///		Example: var check = data.exists(id);
    ///	</summary>

}
dhtmlXDataStore.prototype.filter = function (key, value) {
    ///	<summary>
    /// 
    ///		Example: //shows all items where Publisher == "Test"
    /// data.filter("Publisher","Test");
    ///   //shows all items where Publisher starts from "Test"
    /// data.filter(function(obj,value){
    ///     	if (obj.Publisher.indexOf(value)==0) return true;
    ///     	return false;
    /// },"Test");
    ///	</summary>
    ///	<param name="key" type="String">
    ///		key - the name of a property, or a custom filtering method
    /// </param>

}
dhtmlXDataStore.prototype.first = function () {
    ///	<summary>
    /// 
    ///		Example: var id = data.first();
    ///	</summary>

}
dhtmlXDataStore.prototype.idByIndex = function (index) {
    ///	<summary>
    /// 
    ///		Example: var id = data.idByIndex(index);
    ///	</summary>
    ///	<param name="index" type="Number">
    ///		index - the index of the item in question
    /// </param>

}
dhtmlXDataStore.prototype.indexById = function (id) {
    ///	<summary>
    /// 
    ///		Example: var index = data.indexById(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - the id of the item in question
    /// </param>

}
dhtmlXDataStore.prototype.item = function (id) {
    ///	<summary>
    /// 
    ///		Example: var item = data.item(id);
    /// alert(item.Version);
    /// item.Version = 2;
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - the id of the item in question
    /// </param>

}
dhtmlXDataStore.prototype.last = function () {
    ///	<summary>
    /// 
    ///		Example: var id = data.last();
    ///	</summary>

}
dhtmlXDataStore.prototype.load = function (url, type, callback) {
    ///	<summary>
    /// 
    ///		Example: data.load("data.xml");
    /// data.load("data.xml",function(){
    ///     //callback
    /// });
    ///  //or
    /// data.load("data.xml","xml");
    /// data.load("data.json","json");
    ///  //or 
    /// data.load("data.xml","xml",function(){
    ///     //callback
    /// });
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - the data url (needs to be in the same domain)
    /// </param>
    ///	<param name="type" type="String">
    ///		callback - the callback function
    /// </param>
    ///	<param name="callback" type="Function">
    ///		type - the type of data
    /// </param>

}
dhtmlXDataStore.prototype.next = function () {
    ///	<summary>
    /// 
    ///		Example: var next_id = data.next(id);
    ///	</summary>

}
dhtmlXDataStore.prototype.parse = function (object, type) {
    ///	<summary>
    /// 
    ///		Example: data.parse("<data> ... </data>");
    /// //or
    /// data.parse([[1,2,3],[4,5,6]],"jsarray");
    ///	</summary>
    ///	<param name="object" type="Object">
    ///		object - a string or an object
    /// </param>

}
dhtmlXDataStore.prototype.previous = function () {
    ///	<summary>
    /// 
    ///		Example: var prev_id = data.previous(id);
    ///	</summary>

}
dhtmlXDataStore.prototype.remove = function () {
    ///	<summary>
    /// 
    ///		Example: //ids of bound component's items and dataStore items' ids coincide.
    /// var id = myGrid.getSelectedRowId()
    /// data.remove(id)
    ///	</summary>

}
dhtmlXDataStore.prototype.saveBatch = function (func) {
    ///	<summary>
    /// 
    ///		Example: data.saveBatch(function(){
    ///         myForm1.save();
    ///         myForm2.save();
    /// });
    ///	</summary>
    ///	<param name="func" type="String">
    ///		func - the user-defined handler function.
    /// </param>

}
dhtmlXDataStore.prototype.set = function (id, hash) {
    ///	<summary>
    /// 
    ///		Example: data.set(id,{
    /// 	property:value
    /// });
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - the id of the item in question
    /// </param>

}
dhtmlXDataStore.prototype.sort = function (key, direction) {
    ///	<summary>
    /// 
    ///		Example: data.sort("#Version#","asc");
    /// data.sort(function(a,b){
    /// 	return a.Version > b.Version ? 1 : -1;
    /// },"asc");
    ///	</summary>
    ///	<param name="key" type="String">
    ///		key - the name of a property by which DataStore will be sorted or a custom sorting method
    /// </param>

}


var scheduler = function () {
    ///	<summary>
    /// 
    ///	</summary>

}


scheduler.prototype.addEvent = function (start_date, end_date, text, id, data) {
    ///	<summary>
    /// adds a new event
    ///		Example: scheduler.addEvent("16-03-1984","19-03-1984","Some");
    /// //or
    ///    scheduler.addEvent("16-03-1984","19-03-1984","Some","some id",{custom_data:"some data"});
    /// //or
    ///    scheduler.addEvent({
    ///           start_date: "16-03-1984",
    ///           end_date: "19-03-1984",
    ///           text:"Some",
    ///           custom_data:"some data"
    ///    });
    ///	</summary>
    ///	<param name="start_date" type="Object">
    ///		start date - date object or string;
    /// </param>

}
scheduler.prototype.addEventNow = function (event_obj) {
    ///	<summary>
    /// adds new event and opens lightbox form to confirm
    ///		Example: scheduler.addEvent();
    /// //or
    ///    scheduler.addEvent({
    ///           start_date: new Date(2011,5,13,15),
    ///           end_date: new Date(2011,5,13,18),
    ///           text: "My new event",
    ///           custom_data: "some data"
    ///    });
    ///	</summary>
    ///	<param name="event_obj" type="Object">
    ///		event_obj - object with all event properties you wish to specify, optional
    /// </param>

}
scheduler.prototype.attachEvent = function (evName, evHandler) {
    ///	<summary>
    /// adds any user-defined handler to available events
    ///		Example: scheduler.attachEvent(evName, evHandler);
    ///	</summary>
    ///	<param name="evName" type="String">
    ///		evName - name of the event;
    /// </param>

}
scheduler.prototype.changeEventId = function (old_id, new_id) {
    ///	<summary>
    /// change event id
    ///		Example: 
    ///	</summary>
    ///	<param name="old_id" type="String">
    ///		old id;
    /// </param>
    ///	<param name="new_id" type="String">
    ///		new id.
    /// </param>

}
scheduler.prototype.clearAll = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
scheduler.prototype.deleteEvent = function (event_id) {
    ///	<summary>
    /// delete existing event
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id
    /// </param>

}
scheduler.prototype.detachEvent = function (id) {
    ///	<summary>
    /// removes an event handler
    ///		Example: scheduler.detachEvent(id);
    ///	</summary>
    ///	<param name="id" type="String">
    ///		id - event id
    /// </param>

}
scheduler.prototype.editStop = function (event_id) {
    ///	<summary>
    /// switch from editing mode to normal mode, disable editor if it&#039;s open
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id
    /// </param>

}
scheduler.prototype.edit = function (event_id) {
    ///	<summary>
    /// edit event
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id
    /// </param>

}
scheduler.prototype.endLightbox = function (mode, custom_form) {
    ///	<summary>
    /// Method will hide custom form, remove modal cover, and exec after-saving operations if necessary. Can be used as part of custom lightbox form.
    ///		Example: scheduler.endLightbox(false);
    ///      //or
    ///      scheduler.endLightbox(true, document.getElementById("my_form"));
    ///	</summary>
    ///	<param name="mode" type="Boolean">
    ///		result of edit operation, false - cancel, true - data need to be saved
    /// </param>
    ///	<param name="custom_form" type="String">
    ///		html container of the form, optional
    /// </param>

}
scheduler.prototype.formSection = function (name) {
    ///	<summary>
    /// 
    ///		Example: //get value
    /// var value = scheduler.formSection('description').getValue();
    ///     //set value
    /// scheduler.formSection('description').setValue('abc');
    ///	</summary>
    ///	<param name="name" type="String">
    ///		name - name of lightbox section
    /// </param>

}
scheduler.prototype.getEventEndDate = function (event_id) {
    ///	<summary>
    /// return end date of event by id
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id
    /// </param>

}
scheduler.prototype.getEventStartDate = function (event_id) {
    ///	<summary>
    /// return start date of event by id
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id
    /// </param>

}
scheduler.prototype.getEventText = function (event_id) {
    ///	<summary>
    /// returns text of event by id
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id.
    /// </param>

}
scheduler.prototype.getEvent = function (event_id) {
    ///	<summary>
    /// return event object by id
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id
    /// </param>

}
scheduler.prototype.getEvents = function (from, to) {
    ///	<summary>
    /// returns collection of events, which occurs in defined period
    ///		Example: var evs = scheduler.getEvents(new Date(2009,1,10),new Date(2009,1,25)); 
    ///     for (var i=0; i<evs.length; i++)
    ///           alert(evs[i].text);
    ///	</summary>
    ///	<param name="from" type="Object">
    ///		from {date object}
    /// </param>

}
scheduler.prototype.getLabel = function (property, key) {
    ///	<summary>
    /// returns label text by option&#039;s id and property name
    ///		Example: var sections=[
    /// 	{key:1, label:"James Smith"},
    /// 	{key:2, label:"John Williams"},
    /// 	{key:3, label:"David Miller"},
    /// 	{key:4, label:"Linda Brown"}
    /// ];
    /// scheduler.config.lightbox.sections=[	
    /// 	{name:"description", height:130, map_to:"text", type:"textarea" , focus:true},
    /// 	{name:"custom", height:23, type:"select", options:sections, map_to:"section_id" },
    /// 	{name:"time", height:72, type:"time", map_to:"auto"}
    /// ]
    ///	</summary>
    ///	<param name="property" type="String">
    ///		property - map_to parameter of the option
    /// </param>

}
scheduler.prototype.getState = function () {
    ///	<summary>
    /// returns object with details about current state of the scheduler
    ///		Example: if (scheduler.getState().mode == "month") {
    ///     // custom logic
    /// }
    ///	</summary>

}
scheduler.prototype.init = function (contaner_id, date, mode) {
    ///	<summary>
    /// initialize scheduler
    ///		Example: 
    ///	</summary>
    ///	<param name="contaner_id" type="Object">
    ///		container id - id or object of html container, inside which the scheduler will be created
    /// </param>
    ///	<param name="date" type="Object">
    ///		date - js date object, initial date in scheduler, optional - current date will be used by default
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - name of default mode as string ( "month","day","week" ), optional - "week" by default
    /// </param>

}
scheduler.prototype.load = function (url, callback) {
    ///	<summary>
    /// load data from external file
    ///		Example: scheduler.load("data.xml");
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - the server side url ( may be a static xml or server side script which outputs data as XML )
    /// </param>
    ///	<param name="callback" type="Function">
    ///		type - the type of loading data
    /// </param>

}
scheduler.prototype.parse = function (data, type) {
    ///	<summary>
    /// load data from client side resource
    ///		Example: scheduler.parse("<data>...</data>");
    ///	</summary>
    ///	<param name="data" type="Object">
    ///		url - string or object , which represents data
    /// </param>
    ///	<param name="type" type="Object">
    ///		type - data type, can be "json" for loading from json object
    /// </param>

}
scheduler.prototype.serverList = function (list_name, array) {
    ///	<summary>
    /// returns named list of options
    ///		Example: // returns list of options with the name my_list
    /// var array = scheduler.serverList("my_list"); 
    /// ...
    /// // creates and returns specified list
    /// var list = scheduler.serverList("options", [
    /// 	{key: 1, label: "John"},
    /// 	{key: 2, label: "Adam"},
    /// 	{key: 3, label: "Diane"}
    /// ]);
    ///	</summary>
    ///	<param name="list_name" type="String">
    ///		name of a list
    /// </param>

}
scheduler.prototype.select = function (event_id) {
    ///	<summary>
    /// select event
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id
    /// </param>

}
scheduler.prototype.setCurrentView = function (date, mode) {
    ///	<summary>
    /// sets the current mode and displayed date
    ///		Example: 
    ///	</summary>
    ///	<param name="date" type="Object">
    ///		date - date object, which defines current view date;
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - string, current view mode;
    /// </param>

}
scheduler.prototype.setEventEndDate = function (event_id, end_date) {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id;
    /// </param>
    ///	<param name="end_date" type="Object">
    ///		new end date ( date object ).
    /// </param>

}
scheduler.prototype.setEventStartDate = function (event_id, start_date) {
    ///	<summary>
    /// set start date for event
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id;
    /// </param>
    ///	<param name="start_date" type="Object">
    ///		new start date ( date object ).
    /// </param>

}
scheduler.prototype.setEventText = function (event_id, text) {
    ///	<summary>
    /// set text for event
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id;
    /// </param>
    ///	<param name="text" type="String">
    ///		new text.
    /// </param>

}
scheduler.prototype.setLoadMode = function (mode) {
    ///	<summary>
    /// set auto-loading mode
    ///		Example: 
    ///	</summary>
    ///	<param name="mode" type="String">
    ///		mode-string:
    /// </param>

}
scheduler.prototype.setLightboxSize = function () {
    ///	<summary>
    /// 
    ///		Example: scheduler.setLightboxSize();
    ///	</summary>

}
scheduler.prototype.showLightbox = function (event_id) {
    ///	<summary>
    /// shows details form for the event
    ///		Example: scheduler.showLightbox("some_id");
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id
    /// </param>

}
scheduler.prototype.startLightbox = function (event_id, custom_form) {
    ///	<summary>
    /// Method can be used as start part of custom lightbox form, it will block scheduler and show provide html container at center of the screen.  The pair endLightbox command can be used to hide the custom lightbox form.
    ///		Example: scheduler.startLightbox("some_id");
    ///      //or
    ///      scheduler.startLightbox("some_id", document.getElementById("my_form"));
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id
    /// </param>
    ///	<param name="custom_form" type="String">
    ///		html element of custom form
    /// </param>

}
scheduler.prototype.resetLightbox = function () {
    ///	<summary>
    /// 
    ///		Example: scheduler.resetLightbox();
    ///	</summary>

}
scheduler.prototype.uid = function () {
    ///	<summary>
    /// 
    ///		Example: 
    ///	</summary>

}
scheduler.prototype.unselect = function (event_id) {
    ///	<summary>
    /// unselect event
    ///		Example: 
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id - optional, if not provided , then currently selected event will be unselected
    /// </param>

}
scheduler.prototype.updateEvent = function (event_id) {
    ///	<summary>
    /// force event updating
    ///		Example: scheduler.getEvent("someId").text = "new text"; //change data of event
    ///     scheduler.updateEvent("someId"); // render updated event
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event id
    /// </param>

}
scheduler.prototype.updateCollection = function (collection_name, new_collection) {
    ///	<summary>
    /// updates specified collection with the new options
    ///		Example: scheduler.config.lightbox.sections=[   
    /// 	{name:"description", height:130, map_to:"text", type:"textarea" , focus:true},
    /// 	{name:"items", height:23, type:"select", options:serverList("goods", goods_array) , map_to:"section_id" }, 
    /// 	{name:"time", height:72, type:"time", map_to:"auto"}
    /// ];
    ///	</summary>
    ///	<param name="collection_name" type="String">
    ///		name of the collection to update
    /// </param>

}
scheduler.prototype.createUnitsView = function (configuration) {
    ///	<summary>
    /// 
    ///		Example: var sections=[
    /// 	{key:1, label:"Section A"},
    /// 	{key:2, label:"Section B"},
    /// 	{key:3, label:"Section C"},
    /// 	{key:4, label:"Section D"}
    /// ];
    /// �
    /// scheduler.createUnitsView({
    /// 	name:"unit",
    /// 	property:"section_id",
    /// 	list:
    /// 		[	{key:1, label:"Section A"},
    /// 			{key:2, label:"Section B"},
    /// 			{key:3, label:"Section C"},
    /// 			{key:4, label:"Section D"}	],
    ///         skip_incorrect:true,
    /// 	size:10,
    /// 	step:5
    /// });
    ///	</summary>
    ///	<param name="configuration" type="String">
    ///		name - name of view
    /// </param>

}
scheduler.prototype.createTimelineView = function (configuration) {
    ///	<summary>
    /// X scale
    ///		Example: scheduler.createTimelineView({
    ///      name:		"timeline",
    ///      x_unit:	"minute",
    ///      x_date:	"%H:%i",
    ///      x_step:	30,
    ///      x_size:	24,
    ///      x_start:	16,
    ///      x_length:	48,
    ///      y_unit:
    ///      	[	{key:1, label:"Section A"},
    ///         	{key:2, label:"Section B"},
    ///         	{key:3, label:"Section C"},
    ///         	{key:4, label:"Section D"}	],
    ///      y_property:"section_id",
    ///      render:	"bar"
    /// });
    ///	</summary>
    ///	<param name="configuration" type="String">
    ///		name - name of mode, same as name of the tab in html template ( you can have few different timelines, with different name , at the same time )
    /// </param>

}
scheduler.prototype.openSection = function (section_id) {
    ///	<summary>
    /// opens specified section in current Timeline-Tree view.
    ///		Example: scheduler.createTimelineView({
    ///         ...
    /// 	y_unit: [ 
    /// 		{key:10, label:"Web Testing Dep.", open: false, children: [
    /// 			{key:20, label:"Elizabeth Taylor"},
    /// 			{key:30, label:"Managers", open: false, children: [
    /// 				{key:40, label:"John Williams"},
    /// 				{key:50, label:"David Miller"}
    /// 			]},
    /// 			{key:60, label:"Linda Brown"},
    /// 			{key:70, label:"George Lucas"}
    /// 		]},
    /// 		{key:80, label:"Kate Moss"},
    /// 		{key:90, label:"Dian Fossey"}
    /// 	],
    ///         ...
    /// });
    ///	</summary>
    ///	<param name="section_id" type="String">
    ///		section id
    /// </param>

}
scheduler.prototype.closeSection = function (section_id) {
    ///	<summary>
    /// closes specified section in current Timeline-Tree view.
    ///		Example: scheduler.createTimelineView({
    ///         ...
    /// 	y_unit: [ 
    /// 		{key:10, label:"Web Testing Dep.", open: true, children: [
    /// 			{key:20, label:"Elizabeth Taylor"},
    /// 			{key:30, label:"Managers", open: true, children: [
    /// 				{key:40, label:"John Williams"},
    /// 				{key:50, label:"David Miller"}
    /// 			]},
    /// 			{key:60, label:"Linda Brown"},
    /// 			{key:70, label:"George Lucas"}
    /// 		]},
    /// 		{key:80, label:"Kate Moss"},
    /// 		{key:90, label:"Dian Fossey"}
    /// 	],
    ///         ...
    /// });
    ///	</summary>
    ///	<param name="section_id" type="String">
    ///		section id
    /// </param>

}
scheduler.prototype.openAllSections = function () {
    ///	<summary>
    /// 
    ///		Example: scheduler.openAllSections();
    ///	</summary>

}
scheduler.prototype.closeAllSections = function () {
    ///	<summary>
    /// 
    ///		Example: scheduler.closeAllSections();
    ///	</summary>

}
scheduler.prototype.addSection = function (section_object, parent_section_id) {
    ///	<summary>
    /// adds section to specified parent section in current Timeline-Tree view.
    ///		Example: scheduler.createTimelineView({
    ///         ...
    /// 	y_unit: [ 
    /// 		{key:10, label:"Web Testing Dep.", open: false, children: [
    /// 			{key:20, label:"Elizabeth Taylor"},
    /// 			{key:30, label:"Managers", open: false, children: [
    /// 				{key:40, label:"John Williams"},
    /// 				{key:50, label:"David Miller"}
    /// 			]},
    /// 			{key:60, label:"Linda Brown"},
    /// 			{key:70, label:"George Lucas"}
    /// 		]},
    /// 		{key:80, label:"Kate Moss"},
    /// 		{key:90, label:"Dian Fossey"}
    /// 	],
    ///         ...
    /// });
    ///	</summary>
    ///	<param name="section_object" type="Object">
    ///		section object
    /// </param>

}
scheduler.prototype.deleteSection = function (section_id) {
    ///	<summary>
    /// deletes specified section in current Timeline-Tree view.
    ///		Example: scheduler.createTimelineView({
    ///         ...
    /// 	y_unit: [ 
    /// 		{key:10, label:"Web Testing Dep.", open: false, children: [
    /// 			{key:20, label:"Elizabeth Taylor"},
    /// 			{key:30, label:"Managers", open: false, children: [
    /// 				{key:40, label:"John Williams"},
    /// 				{key:50, label:"David Miller"}
    /// 			]},
    /// 			{key:60, label:"Linda Brown"},
    /// 			{key:70, label:"George Lucas"}
    /// 		]},
    /// 		{key:80, label:"Kate Moss"},
    /// 		{key:90, label:"Dian Fossey"}
    /// 	],
    ///         ...
    /// });
    ///	</summary>
    ///	<param name="section_id" type="String">
    ///		section id
    /// </param>

}
scheduler.prototype.closeSection = function (section_id) {
    ///	<summary>
    /// returns section object by id in current Timeline-Tree view.
    ///		Example: scheduler.createTimelineView({
    ///         ...
    /// 	y_unit: [ 
    /// 		{key:10, label:"Web Testing Dep.", open: true, children: [
    /// 			{key:20, label:"Elizabeth Taylor"},
    /// 			{key:30, label:"Managers", open: true, children: [
    /// 				{key:40, label:"John Williams"},
    /// 				{key:50, label:"David Miller"}
    /// 			]},
    /// 			{key:60, label:"Linda Brown"},
    /// 			{key:70, label:"George Lucas"}
    /// 		]},
    /// 		{key:80, label:"Kate Moss"},
    /// 		{key:90, label:"Dian Fossey"}
    /// 	],
    ///         ...
    /// });
    ///	</summary>
    ///	<param name="section_id" type="String">
    ///		section id
    /// </param>

}
scheduler.prototype.expand = function () {
    ///	<summary>
    /// 
    ///		Example: scheduler.expand();
    ///	</summary>

}
scheduler.prototype.collapse = function () {
    ///	<summary>
    /// 
    ///		Example: scheduler.collapse();
    ///	</summary>

}
scheduler.prototype.renderCalendar = function (configuration) {
    ///	<summary>
    /// 
    ///		Example: scheduler.renderCalendar({
    /// 	    container:"for_calendar"
    /// 		date:some_date,
    /// 		navigation:true,
    /// 		handler:function(date,calendar){
    /// 		}
    /// 	});
    ///	</summary>
    ///	<param name="configuration" type="Object">
    ///		container - optional, html container, inside each calendar will be rendered; can be ID of html element or HTML object
    /// </param>

}
scheduler.prototype.destroyCalendar = function (calendar) {
    ///	<summary>
    /// Parameters:
    ///		Example: scheduler.destroyCalendar();
    /// 	//or
    /// 	var calendar = scheduler.renderCalendar(...);
    /// 	...
    /// 	scheduler.destroyCalendar(calendar);
    ///	</summary>
    ///	<param name="calendar" type="Object">
    ///		calendar - optional, calendar&#039;s object, when called without parameters attempts to destroy last created containerless calendar
    /// </param>

}
scheduler.prototype.isCalendarVisible = function () {
    ///	<summary>
    /// 
    ///		Example: var check = scheduler.isCalendarVisible();
    ///	</summary>

}
scheduler.prototype.markCalendar = function (calendar, date, css) {
    ///	<summary>
    /// 
    ///		Example: scheduler.markCalendar(calendar, new Date(2010,3,1), "my_style");
    ///	</summary>
    ///	<param name="calendar" type="Object">
    ///		calendar - calendar object
    /// </param>
    ///	<param name="date" type="Object">
    ///		date - date object, defines date which need to be marked
    /// </param>
    ///	<param name="css" type="String">
    ///		css - optional, css class which will be used for marking
    /// </param>

}
scheduler.prototype.markCalendar = function (calendar, date, css) {
    ///	<summary>
    /// 
    ///		Example: scheduler.unmarkCalendar(calendar, new Date(2010,3,1), "my_style");
    ///	</summary>
    ///	<param name="calendar" type="Object">
    ///		calendar - calendar object
    /// </param>
    ///	<param name="date" type="Object">
    ///		date - date object, defines date which need to be unmarked
    /// </param>
    ///	<param name="css" type="String">
    ///		css - optional, css class which was used for marking
    /// </param>

}
scheduler.prototype.updateCalendar = function (calendar, new_date) {
    ///	<summary>
    /// Parameters:
    ///		Example: var calendar = scheduler.renderCalendar(...);
    /// 	...
    /// 	scheduler.updateCalendar(calendar, new Date(2009,1,1));
    ///	</summary>
    ///	<param name="calendar" type="Object">
    ///		calendar - calendar object, which was created by renderCalendar
    /// </param>
    ///	<param name="new_date" type="String">
    ///		new_date  - new date, which need to be rendered in mini-calendar
    /// </param>

}
scheduler.prototype.linkCalendar = function (calendar, shift) {
    ///	<summary>
    /// Parameters:
    ///		Example: var calendar = scheduler.renderCalendar(...);
    /// 	scheduler.linkCalendar(calendar);
    ///	</summary>
    ///	<param name="calendar" type="String">
    ///		calendar - calendar which was created with renderCalendar call
    /// </param>
    ///	<param name="shift" type="String">
    ///		shift - allows to define how date in mini-calendar will differ from one in scheduler
    /// </param>

}
scheduler.prototype.toICal = function (url, mode) {
    ///	<summary>
    /// 
    ///		Example: scheduler.toPDF("./service/generate.php","color");
    ///	</summary>
    ///	<param name="url" type="String">
    ///		url - url of server side part of PDF converter
    /// </param>
    ///	<param name="mode" type="String">
    ///		mode - optional, color mode, can be "color","gray","bw"
    /// </param>

}
scheduler.prototype.toXML = function () {
    ///	<summary>
    /// 
    ///		Example: var str = scheduler.toXML();
    ///	</summary>

}
scheduler.prototype.toJSON = function () {
    ///	<summary>
    /// 
    ///		Example: var str = scheduler.toJSON();
    ///	</summary>

}
scheduler.prototype.toICal = function (header) {
    ///	<summary>
    /// Return data from the scheduler, as ICal string
    ///		Example: var str = scheduler.toICal();
    /// 	//or
    /// 	var str = scheduler.toICal("My calendar");
    ///	</summary>
    ///	<param name="header" type="String">
    ///		header - optional text string, which will be used as calendar&#039;s name
    /// </param>

}
scheduler.prototype.getRecDates = function (event_id, maximum_number) {
    ///	<summary>
    /// Returns all occurrences of a recurring event as array of objects with following properties:
    ///		Example: var dates = scheduler.getRecDates(22);
    ///	</summary>
    ///	<param name="event_id" type="String">
    ///		event_id - id of the recurring event
    /// </param>
    ///	<param name="maximum_number" type="String">
    ///		start_date
    /// </param>

}
scheduler.prototype.blockTime = function (date, time_points) {
    ///	<summary>
    /// 
    ///		Example: //disallow any event for specific day
    /// scheduler.blockTime(new Date(2009,5,30), "fullday");
    /// //disallow events from 0 till 10 hours, for specific date
    /// scheduler.blockTime(new Date(2009,6,3), [0,10*60]);
    /// //disallow events from 0 till 8 and from 18 till 24 hours, for saturday
    /// scheduler.blockTime(6, [0,8*60,18*60,24*60]);
    /// //disallow any event for specific week-day (sunday)
    /// scheduler.blockTime(0, "fullday","weekly");
    ///	</summary>
    ///	<param name="date" type="Object">
    ///		date - js date object, or number ( if number provided - it will be treated as day of week )
    /// </param>

}
