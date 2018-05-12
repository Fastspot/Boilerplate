/*-------------------------------------------
	Dialog
-------------------------------------------*/

Site.modules.Dialog = (function($, Site) {

	var $dialog_wrap,
	$dialog,
	$document,
	$trigger,
	$triggered,
	$close;

	function init() {
		$dialog_wrap = $(".js-dialog-wrapper");
		if ($dialog_wrap.length) {
			bindUI();
		}
	}

	function bindUI() {
		dialog_class = $dialog_wrap.data("dialog-class");
		$document = $dialog_wrap.find(".js-dialog-document");
		$trigger = $(".js-dialog-trigger");
		$close = $(".js-dialog-close");
		$trigger.on("click", onTriggerClick);
		$close.on("click", onCloseClick)
			.on("keydown", onCloseKeydown);
		$document.on("keydown", onDocumentKeydown)
			.on("keyup", onDocumentKeyup);
		$(document).on("click touchstart", onDocumentClick);
		addAccessibility();
	}

	function addAccessibility() {
		$dialog_wrap.wrapInner("<dialog class='js-dialog' tabindex='0' role='dialog'></dialog>");
		$dialog = $(".js-dialog");
		$dialog.attr("aria-labelledby", "js-dialog-label");
		$document.attr("tabindex", "0")
			.attr("role", "document");
	}

	function removeAccessibility() {
		$dialog.contents().unwrap();
		$document.removeAttr("tabindex")
			.removeAttr("role");
	}

	function onTriggerClick(e) {
		$triggered = $(this);
		event.preventDefault();
		$("html, body").addClass("dialog_open");
		$dialog.attr("open", "true");
		$document.focus();
	}

	function onCloseClick(e) {
		$("html, body").removeClass("dialog_open");
		$dialog.removeAttr("open");
		$triggered.focus();
	}

	function onCloseKeydown(e) {
		if(e.keyCode === 9) { // tab
			if(!(e.shiftKey)) {
				e.preventDefault();
				$document.focus();
			}
		}
	}

	function onDocumentKeydown(e) {
		if ($document.is(":focus")) {
			if(e.keyCode === 9) { // tab
				if(e.shiftKey) {
					e.preventDefault();
					$close.focus();
				}
			}
		}
	}

	function onDocumentKeyup(e) {
		if (e.keyCode === 27) { // escape
			onCloseClick();
		}
	}

	function onDocumentClick(e) {
		if (!($(event.target).closest(".js-dialog").length || $(event.target).closest(".js-dialog-trigger").length)) {
			onCloseClick();
		}
	}

	Site.onInit.push(init);

	return {
		addAccessibility: addAccessibility,
		removeAccessibility: removeAccessibility
	};

})(jQuery, Site);
