/*-------------------------------------------
	Dialog
-------------------------------------------*/

Site.modules.Dialog = (function($, Site) {

	var $dialog_wrap,
	$dialog_document,
	$dialog_trigger,
	$dialog_triggered,
	dialog_target,
	$dialog_close;

	function init() {
		$dialog_wrap = $(".js-dialog-wrapper");
		if ($dialog_wrap.length) {
			bindUI();
		}
	}

	function bindUI() {
		dialog_class = $dialog_wrap.data("dialog-class");
		$dialog_document = $dialog_wrap.find(".js-dialog-document");
		$dialog_trigger = $(".js-dialog-trigger");
		$dialog_close = $(".js-dialog-close");
		$dialog_trigger.on("click", onTriggerClick);
		$dialog_close.on("click", onCloseClick)
			.on("keydown", onCloseKeydown);
		$dialog_document.on("keydown", onDocumentKeydown)
			.on("keyup", onDocumentKeyup);
		$(document).on("click touchstart", onDocumentClick);
		addAccessibility();
	}

	function addAccessibility() {
		$dialog_wrap.wrapInner("<dialog class='js-dialog' tabindex='0' role='dialog'></dialog>");
		$dialog_document.attr("tabindex", "0")
			.attr("role", "document");
		$(".js-dialog").each(function() {
			var label = $(this).closest(".js-dialog-wrapper").data("label");
			$(this).attr("aria-label", label);
		});
	}

	function removeAccessibility() {
		$(".js-dialog").contents().unwrap();
		$dialog_document.removeAttr("tabindex")
			.removeAttr("role");
	}

	function onTriggerClick(e) {
		$dialog_triggered = $(this);
		dialog_target = $dialog_triggered.data("target");
		event.preventDefault();
		$("html, body").addClass("dialog_open");
		$("#" + dialog_target)
			.find(".js-dialog")
			.attr("open", "true")
			.addClass("dialog_open")
			.find(".js-dialog-document")
			.focus();
	}

	function onCloseClick(e) {
		$("html, body").removeClass("dialog_open");
		$("#" + dialog_target)
			.find(".js-dialog")
			.removeAttr("open")
			.removeClass("dialog_open");
		$dialog_triggered.focus();
	}

	function onCloseKeydown(e) {
		if(e.keyCode === 9) { // tab
			if(!(e.shiftKey)) {
				e.preventDefault();
				$("#" + dialog_target)
					.find(".js-dialog-document")
					.focus();
			}
		}
	}

	function onDocumentKeydown(e) {
		if ($dialog_document.is(":focus")) {
			if(e.keyCode === 9) { // tab
				if(e.shiftKey) {
					e.preventDefault();
					$("#" + dialog_target)
						.find(".js-dialog-close")
						.focus();
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
		if (!($(event.target).closest(".js-dialog").length || $(event.target).closest(".js-dialog-trigger").length) && $("body").hasClass("dialog_open")) {
			onCloseClick();
		}
	}

	Site.onInit.push(init);

	return {
		addAccessibility: addAccessibility,
		removeAccessibility: removeAccessibility
	};

})(jQuery, Site);
