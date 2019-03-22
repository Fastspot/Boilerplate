/*-------------------------------------------
	Menu
-------------------------------------------*/

Site.modules.Menu = (function($, Site) {

	var $Menu,
	$MenuHandle,
	$MenuClose,
	$ShiftingElements,
	LockClass;

	function init() {
		$Menu = $(".js-menu");

		if ($Menu.length) {
			$MenuHandle = $(".js-menu-handle");
			$MenuClose = $(".js-menu-close");
			$ShiftingElements = $(".header, .page, .footer");
			LockClass = "fs-page-lock";

			$Menu
				.attr("aria-hidden", true)
				.find(".js-nav-link, button, input").attr("tabindex", "-1");

			createSiteButtons($(".js-menu-handle"));
			bindUI();
		}
	}

	function createSiteButtons($element) {
		$element.each(function() {
			$element.attr({
				"aria-expanded": false,
				"aria-haspopup": true,
				"role": "button"
			});
		});
	}

	function bindUI() {
		Site.$doc.on("click touchstart", onDocumentClick);
		$MenuHandle
			.on("activate.swap", onMenuSwapActivate)
			.on("deactivate.swap", onMenuSwapDeactivate);
		$MenuClose.on("keydown", onCloseKeydown);
		$Menu
			.on("keydown", onMenuKeydown)
			.on("keyup", onMenuKeyup);
	}

	function onDocumentClick(e) {
		if ($("body").hasClass(LockClass)) {
			if (!$(e.target).closest(".js-menu").length) {
				$MenuHandle.swap("deactivate");
			}
		}
	}

	function onMenuSwapActivate() {
		Site.$body.addClass(LockClass);
		Site.modules.Page.saveScrollYPosition();
		$MenuHandle.attr("aria-expanded", true);
		$Menu.attr({
			"aria-hidden": false,
			"tabindex": "0"
		}).transition({
			always: false,
			property: "opacity"
		}, function() {
			$Menu.focus();
		})
		.find(".js-nav-link, button, input").removeAttr("tabindex");

		$ShiftingElements.css("padding-right", Site.modules.Page.getScrollbarWidth());
		$Menu.css("margin-right", "");
		$Menu.css("width", "");
	}

	function onMenuSwapDeactivate() {
		Site.$body.removeClass(LockClass);
		Site.modules.Page.restoreScrollYPosition();
		$Menu
			.attr("aria-hidden", true)
			.removeAttr("tabindex")
			.find(".js-nav-link, button, input").attr("tabindex", "-1");
		$MenuHandle.attr("aria-expanded", false).focus();

		$ShiftingElements.css("padding-right", "");
		$Menu.css("margin-right", Site.modules.Page.getScrollbarWidth() * -1);
		$Menu.css("width", "calc(100% + " + Site.modules.Page.getScrollbarWidth() + "px)");
	}

	function onCloseKeydown(e) {
		if (e.keyCode === 9) { // tab
			if (!(e.shiftKey)) {
				$Menu.focus();
			}
		}
	}

	function onMenuKeydown(e) {
		if ($Menu.is(":focus")) {
			if (e.keyCode === 9) { // tab
				if (e.shiftKey) {
					e.preventDefault();
					$MenuClose.focus();
				}
			}
		}
	}

	function onMenuKeyup(e) {
		if (e.keyCode === 27) { // escape
			$MenuHandle.swap("deactivate");
		}
	}

	return {
		init: init
	};

})(jQuery, Site);
