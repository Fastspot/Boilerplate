/*-------------------------------------------
	Module
-------------------------------------------*/

Site.modules.Module = (function($, Site) {

	var item;

	function init() {
		if ($(".module").length) {
			item = "";

			bindUI();
		}
	}

	function assignVars() {}

	function bindUI() {}

	function doSomething() {}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
