/*-------------------------------------------
	Main Nav
-------------------------------------------*/

Site.modules.MainNAv = (function($, Site) {

	function init() {
		if ($(".js-main-nav").length) {
			bindUI();
		}
	}

	function setup() {
		Site.modules.Page.ariaHide($(".js-main-nav-children"));

		$(".main_nav_link").attr("aria-expanded", "false");
	}

	function bindUI() {
		$(".js-main-nav-toggle")
			.on("activate.swap", onMainSwapActivate)
			.on("deactivate.swap", onMainSwapDeactivate);
			
		$(".js-main-nav-lg a")
			.hover(function() {
				$(this).attr("aria-expanded", "true");

				Site.modules.Page.ariaShow(
					$(this).closest(".main_nav_item")
						.find(".js-main-nav-children")
				);
			}, function() {
				$(this).attr("aria-expanded", "false");

				Site.modules.Page.ariaHide(
					$(this).closest(".main_nav_item")
						.find(".js-main-nav-children")
				);
		});
	}

	function onMainSwapActivate() {
		$(this).closest(".main_nav_item")
			.find(".main_nav_link")
			.attr("aria-expanded", "true");

		Site.modules.Page.ariaShow(
			$(this).closest(".main_nav_item")
				.find(".js-main-nav-children")
		);
	}

	function onMainSwapDeactivate() {
		$(this).closest(".main_nav_item")
			.find(".main_nav_link")
			.attr("aria-expanded", "false");

		Site.modules.Page.ariaHide(
			$(this).closest(".main_nav_item")
				.find(".js-main-nav-children")
		);
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
