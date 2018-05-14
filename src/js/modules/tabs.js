/*-------------------------------------------
	Tabs
-------------------------------------------*/

Site.modules.Tabs = (function($, Site) {

	var $tabs,
	$tab_list,
	$tab,
	tab_length,
	$tab_trigger,
	$tab_panel;

	function init() {
		$tabs = $(".js-tabs");

		if ($tabs.length) {
			bindUI();
		}
	}

	function bindUI() {
		$tab_list = $tabs.find(".js-tab-list");
		$tab_item = $tabs.find(".js-tab");
		tab_length = $tab_item.length;
		$tab_trigger = $tabs.find(".js-tab-trigger");
		$tab_panel = $tabs.find(".js-tab-panel");

		addAccessibility();
		$tab_trigger.on("activate.swap", onTriggerActivate)
			.on("deactivate.swap", onTriggerDeactivate);
		$(document).on("keydown", onKeyDown);
	}

	function addAccessibility() {
		$tab_list.attr("role", "tablist");
		$tab_item.attr("role", "none presentation");
		$tab_trigger.attr("role", "tab")
			.attr("aria-selected", "false")
			.attr("tabindex", "-1");
		$tab_panel.attr("role", "tabpanel")
			.attr("tabindex", "-1")
			.attr("aria-hidden", "true")
			.attr("hidden", "");

		$tab_item.each(function() {
			var tab_index = $(this).index() + 1;
			$(this).find(".js-tab-trigger")
				.attr("aria-controls", "js-tab-panel-" + tab_index);
		});

		$tab_panel.each(function() {
			var tab_index = $(this).index() + 1;

			$(this).attr("aria-labelledby", "js-tab-trigger-" + tab_index);
		});

		$tabs.each(function() {
			$(this).find(".js-tab:eq(0)")
				.find(".js-tab-trigger")
				.attr("aria-selected", "true")
				.removeAttr("tabindex");
			$(this).find(".js-tab-panel:eq(0)")
				.attr("aria-hidden", "false")
				.removeAttr("hidden");
		});
	}

	function removeAccessibility() {
		$tab_list.removeAttr("role");
		$tab_item.removeAttr("role");
		$tab_trigger.removeAttr("role")
			.removeAttr("aria-selected")
			.removeAttr("tabindex")
			.removeAttr("aria-controls");
		$tab_panel.removeAttr("role")
			.removeAttr("tabindex")
			.removeAttr("aria-hidden")
			.removeAttr("hidden")
			.removeAttr("aria-labelledby");
	}

	function onTriggerActivate() {
		var tab_target = $(this).data("swap-target");

		$(this).attr("aria-selected", "true")
			.removeAttr("tabindex");
		Site.modules.Page.ariaShow($tabs.find(tab_target));
	}

	function onTriggerDeactivate() {
		var tab_target = $(this).data("swap-target");

		$(this).attr("aria-selected", "false")
			.attr("tabindex", "-1");
		Site.modules.Page.ariaHide($tabs.find(tab_target));
	}

	function onKeyDown(e) {
		var tab_index = $(".js-tab-trigger:focus").closest(".js-tab").index();
		var $tabs_active = $(".js-tab-trigger:focus").closest(".js-tabs");

		if (tab_index >= 0) {
			if(e.keyCode === 37) { // left
				if (tab_index > 0) {
					$tabs_active.find(".js-tab:eq(" + (tab_index - 1) + ")")
						.find(".js-tab-trigger")
						.focus()
						.swap("activate");
				}
			} else if(e.keyCode === 39) { // right
				if (tab_index < (tab_length - 1)) {
					$tabs_active.find(".js-tab:eq(" + (tab_index + 1) + ")")
						.find(".js-tab-trigger")
						.focus()
						.swap("activate");
				}
			}
		}

		if(e.keyCode === 40) { // down
			$tabs_active = $(".js-tab-trigger:focus").closest(".js-tabs");
			var active_tab = $tabs_active.find(".js-tab-trigger.fs-swap-active").data("swap-target");
			$tabs_active.find(active_tab).focus();
		}
	}

	Site.onInit.push(init);

	return {
		addAccessibility: addAccessibility,
		removeAccessibility: removeAccessibility
	};

})(jQuery, Site);
