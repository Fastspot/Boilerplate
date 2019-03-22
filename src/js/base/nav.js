/*-------------------------------------------
	Navigation
-------------------------------------------*/

Site.modules.Nav = (function($, Site) {

	var $Nav,
	$Children,
	$Toggle,
	$ChildLink,
	$ActiveToggle,
	$ActiveItem;

	function init() {
		$Nav = $(".js-nav");
		if ($Nav.length) {
			$Children = $Nav.find(".js-nav-children");
			$Toggle = $Nav.find(".js-nav-toggle");
			$ChildLink = $Nav.find(".js-nav-child-link");

			$Children.attr("aria-hide", true);
			$ChildLink.attr("tabindex", -1);

			bindUI();
		}
	}

	function bindUI() {
		$Toggle
			.on("activate.swap", onToggleSwapActivate)
			.on("deactivate.swap", onToggleSwapDeactivate)
			.on("keydown", onToggleKeydown);
		$ChildLink.on("keydown", onChildLinkKeydown);
	}

	function onToggleSwapActivate() {
		$ActiveToggle = $(this);
		$ActiveItem = $ActiveToggle.closest(".js-nav-item");

		$ActiveToggle.attr("aria-expanded", true);
		$ActiveItem.find(".js-nav-children")
			.attr("aria-hide", false)
			.transition({
				always: false,
				property: "opacity"
			}, function() {
				$ActiveItem.find(".js-nav-child-link").first().focus();
			});
		$ActiveItem.find(".js-nav-child-link").removeAttr("tabindex").first().focus();
	}

	function onToggleSwapDeactivate() {
		$ActiveToggle = $(this);
		$ActiveItem = $ActiveToggle.closest(".js-nav-item");

		$ActiveToggle.attr("aria-expanded", false);
		$ActiveItem.find(".js-nav-children").attr("aria-hide", true);
		$ActiveItem.find(".js-nav-child-link").attr("tabindex", -1);
	}

	function onToggleKeydown(e) {
		if (e.keyCode === 27 || e.keyCode === 40) {
			e.preventDefault();
		}
		if (e.keyCode === 27) { // escape
			$(this).swap("deactivate");
		} else if (e.keyCode === 40) { // down
			$(this).swap("activate");
		}
	}

	function onChildLinkKeydown(e) {
		var $childItem = $(this).closest(".js-nav-child-item");

		if (e.keyCode === 27 || e.keyCode === 38 || e.keyCode === 40 ) {
			e.preventDefault();
		}
		if (e.keyCode === 9) { // tab
			$ActiveToggle.swap("deactivate");
		} else if (e.keyCode === 27) { // escape
			$ActiveToggle.swap("deactivate").focus();
		} else if (e.keyCode === 38) { // up
			$childItem.prev(".js-nav-child-item").find(".js-nav-child-link").focus();
		} else if (e.keyCode === 40) { // down
			$childItem.next(".js-nav-child-item").find(".js-nav-child-link").focus();
		}
	}

	return {
		init: init
	};

})(jQuery, Site);
