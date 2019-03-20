/*-------------------------------------------
	Sub Nav
-------------------------------------------*/

Site.modules.SubNav = (function($, Site) {

	function init() {
		if ($(".js-sub-nav").length) {
			bindUI();
		}
	}

	function setup() {
		$(".js-sub-nav-handle")
			.attr("aria-expanded", "false")
			.attr("aria-haspopup", "true");
	}

	function bindUI() {
		$(".js-sub-nav-handle")
			.on("activate.swap", onSubSwapActivate)
			.on("deactivate.swap", onSubSwapDeactivate)
			.on("enable.swap", onSubSwapEnable)
			.on("disable.swap", onSubSwapDisable);

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

	return {
		init: init
	};

})(jQuery, Site);
