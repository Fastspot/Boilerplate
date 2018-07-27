/*-------------------------------------------
	Menu
-------------------------------------------*/

/* global Site, jQuery */

Site.modules.Menu = (function($, Site) {

	var $Menu,
	$MenuHandle,
	$MenuClose,
	LockClass;

	function init() {
		$Menu = $(".js-menu");
		if ($Menu.length) {
			$MenuClose = $(".js-menu-close");
			LockClass = "fs-navigation-lock fs-page-lock";

			bindUI();
		}
	}

	function bindUI() {
		createSiteButtons($(".js-menu-handle"));
		$MenuHandle = $(".js-menu-handle");
		Site.modules.Page.ariaHide($Menu);
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
		$Menu.focus();
	}

	function onMenuSwapDeactivate() {
		Site.$body.removeClass(LockClass);
		Site.modules.Page.restoreScrollYPosition();
		Site.modules.Page.ariaHide($Menu);
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
		$this = $element;
		$this.each(function() {
			var attributes = $this.prop("attributes");
			$this.swap("destroy")
				.wrapInner("<button />");
			$.each(attributes, function() {
				$this.find("button")
					.attr(this.name, this.value);
			});
			$this.find("button")
				.unwrap()
				.removeAttr("href")
				.swap()
				.on("activate.swap", onMenuSwapActivate)
				.on("deactivate.swap", onMenuSwapDeactivate);
		});
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
