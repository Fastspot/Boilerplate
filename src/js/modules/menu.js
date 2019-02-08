/*-------------------------------------------
	Menu
-------------------------------------------*/

Site.modules.Menu = (function($, Site) {

	var $Menu,
	$MenuHandle,
	$MenuClose,
	LockClass;

	function init() {
		$Menu = $(".js-menu");

		if ($Menu.length) {
			$MenuHandle = $(".js-menu-handle");
			$MenuClose = $(".js-menu-close");
			LockClass = "fs-navigation-lock fs-page-lock";

			setup();
			createSiteButtons($(".js-menu-handle"));
			bindUI();
		}
	}

	function setup() {
		Site.modules.Page.ariaHide($Menu);
	}

	function bindUI() {
		Site.$doc.on("click touchstart", onDocumentClick);
		$MenuHandle
			.on("activate.swap", onMenuSwapActivate)
			.on("deactivate.swap", onMenuSwapDeactivate);
		$MenuClose.on("keydown", onCloseKeydown);
		$Menu.attr("tabindex", "0")
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
		Site.modules.Page.ariaShow($Menu);
		$MenuHandle.attr("aria-expanded", "true");
		$Menu.transition({
			always: true,
			property: "opacity"
		}, function() {
			$Menu.focus();
		});
	}

	function onMenuSwapDeactivate() {
		Site.$body.removeClass(LockClass);
		Site.modules.Page.restoreScrollYPosition();
		Site.modules.Page.ariaHide($Menu);
		$MenuHandle.attr("aria-expanded", "false");
		$MenuHandle.focus();
	}

	function onCloseKeydown(e) {
		if(e.keyCode === 9) { // tab
			if(!(e.shiftKey)) {
				$Menu.focus();
			}
		}
	}

	function onMenuKeydown(e) {
		if ($Menu.is(":focus")) {
			if(e.keyCode === 9) { // tab
				if(e.shiftKey) {
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

	function createSiteButtons($element) {
		$element.each(function() {
			$element.attr({
				"role": "button",
				"aria-expanded": "false"
			});
		});
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
