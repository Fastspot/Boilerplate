/*-------------------------------------------
	Accordion
-------------------------------------------*/

Site.modules.Accordion = (function($, Site) {

	var $accordion,
	$accordion_trigger,
	$accordion_content;

	function init() {
		$accordion = $(".js-accordion");
		if ($accordion.length) {
			bindUI();
		}
	}

	function bindUI() {
		$accordion_trigger = $accordion.find(".js-accordion-trigger");
		$accordion_content = $accordion.find(".js-accordion-content");

		addAccessibility();
		$accordion_trigger.on("activate.swap", onTriggerActivate)
			.on("deactivate.swap", onTriggerDeactivate);
	}

	function onTriggerActivate() {
		var $accordion_target = $(this).data("swap-target");

		$(this).attr("aria-expanded", "true");
		$accordion.find($accordion_target)
			.find(".js-accordion-content")
			.attr("aria-hidden", "false")
			.removeAttr("hidden");
	}

	function onTriggerDeactivate() {
		var $accordion_target = $(this).data("swap-target");

		$(this).attr("aria-expanded", "false");
		$accordion.find($accordion_target)
			.find(".js-accordion-content")
			.attr("aria-hidden", "true")
			.attr("hidden", "");
	}

	function addAccessibility() {
		$accordion_trigger.attr("aria-expanded", "false");
		Site.modules.Page.ariaHide($accordion_content);
		$accordion.each(function() {
			if ($(this).find(".fs-swap-active").length) {
				Site.modules.Page.ariaShow($(this).find(".js-accordion-content:eq(0)"));
				$(this)
					.find(".js-accordion-item:eq(0)")
					.find(".js-accordion-trigger")
					.attr("aria-expanded", "true");
			}
		});
	}

	function removeAccessibility() {
		$accordion_trigger.removeAttr("aria-expanded");
		$accordion_content.removeAttr("aria-hidden");
	}

	Site.onInit.push(init);

	return {
		addAccessibility: addAccessibility,
		removeAccessibility: removeAccessibility
	};

})(jQuery, Site);
