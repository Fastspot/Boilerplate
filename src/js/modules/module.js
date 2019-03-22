/*-------------------------------------------
	Module
-------------------------------------------*/

Site.modules.Module = (function($, Site) {

	function init() {
		if ($(".module").length) {
			bindUI();
		}
	}

	function bindUI() {}

	function doSomething() {}

	return {
		init: init
	};

})(jQuery, Site);
