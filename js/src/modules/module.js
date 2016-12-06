/*-------------------------------------------
	Module
-------------------------------------------*/

Site.modules.Module = (function($, Site) {

	function init() {

	}

	/* Hook Into Main init Routine */

	Site.onInit.push(init);

	return {};
})(jQuery, Site);
