/*-------------------------------------------
	Page
-------------------------------------------*/

Site.modules.Page = (function($, Site) {

	var prev = "caret_left";
	var next = "caret_right";
	var carouselOptions = {
		labels: {
			previous: "<span class='fs-carousel-control-icon'><svg class='symbol symbol_" + prev + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='../../../images/icons.svg#" + prev + "'></use></svg></span>",
			next: "<span class='fs-carousel-control-icon'><svg class='symbol symbol_" + next + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='../../../images/icons.svg#" + next + "'></use></svg></span>"
		}
	};
	var lightboxOptions = {
		theme: "fs-light",
		videoWidth: 1000,
		labels: {
			close: "<span class='fs-lightbox-icon-close'><svg class='symbol symbol_close'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='../../../images/icons.svg#close'></use></svg></span>",
			previous: "<span class='fs-lightbox-icon-previous'><svg class='symbol symbol_" + prev + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='../../../images/icons.svg#" + prev + "'></use></svg></span>",
			count: "<span class='fs-lightbox-meta-divider'></span>",
			next: "<span class='fs-lightbox-icon-next'><svg class='symbol symbol_" + next + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='../../../images/icons.svg#" + next + "'></use></svg></span>"
		}
	};

	function init() {
		$(".js-background").on("loaded.background", function() {
			$(this).addClass("fs-background-loaded");
		}).background();
		$(".js-carousel").carousel(carouselOptions);
		$(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox();
		$(".js-dropdown").dropdown();
		$(".js-equalize").equalize();
		$(".js-lightbox").lightbox(lightboxOptions);
		$(".js-swap").swap();

		$(window).on("load", onPageLoad);

		$(document).on("click touchstart", onDocumentClick);

		$(".js-mobile-sidebar-handle").on("activate.swap", onSidebarSwapActivate).on("deactivate.swap", onSidebarSwapDeactivate);
		$(".js-main-nav-toggle").on("activate.swap", onMainSwapActivate).on("deactivate.swap", onMainSwapDeactivate);
		$(".js-sub-nav-handle")
		.on("activate.swap", onSubSwapActivate)
		.on("deactivate.swap", onSubSwapDeactivate)
		.on("enable.swap", onSubSwapEnable)
		.on("disable.swap", onSubSwapDisable);

		bindGenericUI();
		responsiveVideo();
		tableOverflow();
		ariaHide($(".js-mobile-sidebar, .js-main-nav-children, .js-sub-nav-list"));

		Site.onScroll.push(scroll);
		Site.onResize.push(resize);
		Site.onRespond.push(respond);
	}

	function scroll() {}

	function resize() {
		tableOverflow();
	}

	function respond() {}

	function onScrollTo(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
				id = $target.attr("href");

		scrollToElement(id);
	}

	function scrollToElement(id) {
		var $to = $(id);

		if ($to.length) {
			var offset = $to.offset();

			scrollToPosition(offset.top);
		}
	}

	function scrollToPosition(top) {
		$("html, body").animate({
			scrollTop: top
		});
	}

	function onToggleClick(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
				activeClass = "js-toggle-active";

		if ($target.hasClass(activeClass)) {
			$target.removeClass(activeClass);
		} else {
			$target.addClass(activeClass);
		}
	}

	function bindGenericUI() {

		$(".js-main-nav-lg").find("a")
			.focus(function() {
				var $item = $(this).closest(".main_nav_item");

				$item.addClass("focused").attr("aria-expanded", "true");
				ariaShow($item.find(".js-main-nav-children"));
			})
			.blur(function() {
				var $item = $(this).closest(".main_nav_item");

				$item.removeClass("focused").attr("aria-expanded", "false");
				ariaHide($item.find(".js-main-nav-children"));
			})
			.hover(function() {
				var $item = $(this).closest(".main_nav_item");

				$item.attr("aria-expanded", "true");
				ariaShow($item.find(".js-main-nav-children"));
			}, function() {
				var $item = $(this).closest(".main_nav_item");

				$item.attr("aria-expanded", "false");
				ariaHide($item.find(".js-main-nav-children"));
		});

		$(".js-toggle")
			.not(".js-bound")
			.on("click", ".js-toggle-handle", onToggleClick)
			.addClass("js-bound");

		$(".js-scroll-to")
			.not(".js-bound")
			.on("click", onScrollTo)
			.addClass("js-bound");

		$(".typography table")
			.wrap('<div class="table_wrapper"><div class="table_wrapper_inner"></div></div>');
	}

	function responsiveVideo() {
		$("iframe[src*='vimeo.com'], iframe[src*='youtube.com']", ".typography").each(function() {
			$(this).wrap('<div class="video_frame"></div>');
		});
	}

	function tableOverflow() {
		$(".table_wrapper").each(function() {
			if ($(this).find("table").outerWidth() > $(this).width() + 1) {
				$(this).addClass("table_wrapper_overflow");
			} else {
				$(this).removeClass("table_wrapper_overflow");
			}
		});
	}

	function onSidebarSwapActivate() {
		$("body").addClass("fs-navigation-lock fs-mobile-lock");
		ariaShow($(".js-mobile-sidebar"));
		$(".js-mobile-sidebar").focus();
	}

	function onSidebarSwapDeactivate() {
		$("body").removeClass("fs-navigation-lock fs-mobile-lock");
		ariaHide($(".js-mobile-sidebar"));
		$(".js-mobile-sidebar-handle").focus();
	}

	function onDocumentClick() {
		if ($("body").hasClass("fs-mobile-lock")) {
			if (!$(event.target).closest(".js-mobile-sidebar").length) {
				$(".js-mobile-sidebar-handle").swap("deactivate");
			}
		}
	}

	function onMainSwapActivate() {
		var $item = $(this).closest(".main_nav_item");

		$item.attr("aria-expanded", "true");
		ariaShow($item.find(".js-main-nav-children"));
	}

	function onMainSwapDeactivate() {
		var $item = $(this).closest(".main_nav_item");

		$item.attr("aria-expanded", "false");
		ariaHide($item.find(".js-main-nav-children"));
	}

	function onSubSwapActivate() {
		$(this).attr("aria-expanded", "true")
		.find(".sub_nav_handle_label").text("Close");
		ariaShow($(".js-sub-nav-list"));
	}

	function onSubSwapDeactivate() {
		$(this).attr("aria-expanded", "false")
		.find(".sub_nav_handle_label").text($(this).data("swap-title"));
		ariaHide($(".js-sub-nav-list"));
	}

	function onSubSwapEnable() {
		ariaHide($(".js-sub-nav-list"));
	}

	function onSubSwapDisable() {
		ariaShow($(".js-sub-nav-list"));
	}

	function onPageLoad() {
		$("body").removeClass("preload");
		$(window).trigger("resize");
	}

	function ariaHide($element) {
		$element.attr("aria-hidden", "true").attr("hidden", "");
	}

	function ariaShow($element) {
		$element.attr("aria-hidden", "false").removeAttr("hidden");
	}

	// Hook Into Main init Routine

	Site.onInit.push(init);

	return {
		ariaHide:ariaHide,
		ariaShow:ariaShow
	};

})(jQuery, Site);
