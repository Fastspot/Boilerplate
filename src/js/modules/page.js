/*-------------------------------------------
	Page
-------------------------------------------*/

/* global picturefill */

Site.modules.Page = (function($, Site) {

	var $mainNav = $(".js-main-nav");
	var $subNav = $(".js-sub-nav");
	var prev = "caret_left";
	var next = "caret_right";
	var navMaxMQ = Site.maxLG + "px";
	
	function init() {

		// Plugins
		picturefill();

		$(".js-background").on("loaded.background", function() {
			$(this).addClass("fs-background-loaded");
		}).background();
		$(".js-carousel").carousel({
			labels: {
				previous: "<span class='fs-carousel-control-icon'><svg class='symbol symbol_" + prev + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#" + prev + "'></use></svg></span>",
				next: "<span class='fs-carousel-control-icon'><svg class='symbol symbol_" + next + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#" + next + "'></use></svg></span>"
			}
		});
		$(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox();
		$(".js-dropdown").dropdown();
		$(".js-equalize").equalize();
		$(".js-lightbox").lightbox({
			theme: "fs-light",
			videoWidth: 1000,
			labels: {
				close: "<span class='fs-lightbox-icon-close'><svg class='symbol symbol_close'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#close'></use></svg></span>",
				previous: "<span class='fs-lightbox-icon-previous'><svg class='symbol symbol_" + prev + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#" + prev + "'></use></svg></span>",
				count: "<span class='fs-lightbox-meta-divider'></span>",
				next: "<span class='fs-lightbox-icon-next'><svg class='symbol symbol_" + next + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#" + next + "'></use></svg></span>"
			}
		});
		$(".js-swap").swap();

		$(".mobile_sidebar_handle").on("click", function() {
			$("body").toggleClass("fs-navigation-lock fs-mobile-lock");
		});

		$(".sub_nav_handle").on("click", function() {
			if($(this).hasClass("fs-swap-active")) {
				$(this).find(".sub_nav_handle_label").text("Close");
			} else {
				$(this).find(".sub_nav_handle_label").text($(this).data("swap-title"));
			}
		});

		$.mediaquery("bind", "mq-key", "(min-width: " + Site.minLG + "px)", {
			enter: function() {
				$subNav.attr("aria-hidden", "false").removeAttr("hidden");
			},
			leave: function() {
				$subNav.attr("aria-hidden", "true").attr("hidden", "");
			}
		});


		// Display children of focused nav items

		$mainNav.find("a")
			.focus(function() {
				$(this).closest(".main_nav_item").addClass("focused");
			})
			.blur(function() {
				$(this).closest(".main_nav_item").removeClass("focused");
			});


		// Analytics

		$.analytics({
			scrollDepth: true
		});


		// Generic Toggles

		$(".js-toggle")
			.not(".js-bound")
			.on("click", ".js-toggle-handle", onToggleClick)
			.addClass("js-bound");


		// Scroll Nav

		$(".js-scroll-to")
			.not(".js-bound")
			.on("click", onScrollTo)
			.addClass("js-bound");


		// Wrapper for Tables

		$(".typography table")
			.wrap('<div class="table_wrapper"><div class="table_wrapper_inner"></div></div>');

		tableOverflow();


		// Responsive Video

		$("iframe[src*='vimeo.com'], iframe[src*='youtube.com']", ".typography").each(function() {
			$(this).wrap('<div class="video_frame"></div>');
		});


		// Scrolling

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

	function trackEvent(data) {
		if ($.type(data) === "string") {
			data = data.split(",");

			$.analytics.apply(this, data);
		}
	}

	function tableOverflow() {
		$(".table_wrapper").each(function() {
			$(this).removeClass("table_wrapper_overflow");
			if ($(this).prop("scrollWidth") > $(this).width() + 1) {
				$(this).addClass("table_wrapper_overflow");
			} else {
				$(this).removeClass("table_wrapper_overflow");
			}
		});
	}


	// Hook Into Main init Routine

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
