/*-------------------------------------------
	Sub Nav
-------------------------------------------*/

Site.modules.SubNav = (function($, Site) {

	var $SubNavHandle,
	$SubNavList;

	function init() {
		if ($(".js-sub-nav").length) {
			$SubNavHandle = $(".js-sub-nav-handle");
			$SubNavList = $(".js-sub-nav-list");

			$SubNavHandle
				.attr("aria-expanded", "false")
				.attr("aria-haspopup", "true");
			bindUI();
		}
	}

	function bindUI() {
		$SubNavHandle
			.on("activate.swap", onSubSwapActivate)
			.on("deactivate.swap", onSubSwapDeactivate)
			.on("enable.swap", onSubSwapEnable)
			.on("disable.swap", onSubSwapDisable);

		$.mediaquery("bind", "mq-key", "(min-width: " + Site.minLG + "px)", {
			enter: function() {
				$SubNavList.attr("aria-hidden", "false");
				$SubNavHandle
					.removeAttr("aria-expanded")
					.removeAttr("aria-haspopup");
			},
			leave: function() {
				$SubNavList.attr("aria-hidden", "true");
				$SubNavHandle
					.attr("aria-expanded", "false")
					.attr("aria-haspopup", "true");
			}
		});
	}

	function onSubSwapActivate() {
		$(this).attr("aria-expanded", "true")
			.find(".sub_nav_handle_label")
			.text("Close");
		$SubNavList.attr("aria-hidden", "false");
	}

	function onSubSwapDeactivate() {
		$(this).attr("aria-expanded", "false")
			.find(".sub_nav_handle_label")
			.text($(this).data("swap-title"));
		$SubNavList.attr("aria-hidden", "true");
	}

	function onSubSwapEnable() {
		$SubNavList.attr("aria-hidden", "true");
	}

	function onSubSwapDisable() {
		$SubNavList.attr("aria-hidden", "false");
	}

	return {
		init: init
	};

})(jQuery, Site);
