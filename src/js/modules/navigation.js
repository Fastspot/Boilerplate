/*-------------------------------------------
	Navigation
-------------------------------------------*/

Site.modules.Navigation = (function($, Site) {

	function init() {
		if ($(".main_nav").length) {
			bindUI();
		}
	}

	function setup() {
		Site.modules.Page.ariaHide($(".js-main-nav-children"));

		$(".main_nav_link").attr("aria-expanded", "false");
		$(".js-sub-nav-handle")
			.attr("aria-expanded", "false")
			.attr("aria-haspopup", "true");
	}

	function bindUI() {
		$(".js-main-nav-toggle")
			.on("activate.swap", onMainSwapActivate)
			.on("deactivate.swap", onMainSwapDeactivate);
			
		$(".js-sub-nav-handle")
			.on("activate.swap", onSubSwapActivate)
			.on("deactivate.swap", onSubSwapDeactivate)
			.on("enable.swap", onSubSwapEnable)
			.on("disable.swap", onSubSwapDisable);

		$(".js-main-nav-lg")
			.find("a")
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

		$.mediaquery("bind", "mq-key", "(min-width: " + Site.minLG + "px)", {
			enter: function() {
				Site.modules.Page.ariaShow($(".js-sub-nav-list"));

				$(".js-sub-nav-handle")
					.removeAttr("aria-expanded")
					.removeAttr("aria-haspopup");
			},
			leave: function() {
				Site.modules.Page.ariaHide($(".js-sub-nav-list"));
				
				$(".js-sub-nav-handle")
					.attr("aria-expanded", "false")
					.attr("aria-haspopup", "true");
			}
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

	function onSubSwapActivate() {
		$(this).attr("aria-expanded", "true")
			.find(".sub_nav_handle_label")
			.text("Close");

		Site.modules.Page.ariaShow($(".js-sub-nav-list"));
	}

	function onSubSwapDeactivate() {
		$(this).attr("aria-expanded", "false")
			.find(".sub_nav_handle_label")
			.text($(this).data("swap-title"));

		Site.modules.Page.ariaHide($(".js-sub-nav-list"));
	}

	function onSubSwapEnable() {
		Site.modules.Page.ariaHide($(".js-sub-nav-list"));
	}

	function onSubSwapDisable() {
		Site.modules.Page.ariaShow($(".js-sub-nav-list"));
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
