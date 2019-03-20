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
				$(".js-sub-nav-list").attr("aria-hidden", "false");
				$(".js-sub-nav-handle")
					.removeAttr("aria-expanded")
					.removeAttr("aria-haspopup");
			},
			leave: function() {
				$(".js-sub-nav-list").attr("aria-hidden", "true");
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
		$(".js-sub-nav-list").attr("aria-hidden", "false");
	}

	function onSubSwapDeactivate() {
		$(this).attr("aria-expanded", "false")
			.find(".sub_nav_handle_label")
			.text($(this).data("swap-title"));
		$(".js-sub-nav-list").attr("aria-hidden", "true");
	}

	function onSubSwapEnable() {
		$(".js-sub-nav-list").attr("aria-hidden", "true");
	}

	function onSubSwapDisable() {
		$(".js-sub-nav-list").attr("aria-hidden", "false");
	}

	return {
		init: init
	};

})(jQuery, Site);
