/*-------------------------------------------
	Module
-------------------------------------------*/

Site.modules.Module = (function($, Site) {

	var item;

	function init() {
		if($(".module").length) {
			bindUI();
		}
	}

	function bindUI() {}

	function doSomething() {}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
