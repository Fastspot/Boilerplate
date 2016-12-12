/*-------------------------------------------
	Page
-------------------------------------------*/

/* global picturefill */

Site.modules.Page = (function($, Site) {

	var $mainNav;

	function init() {

		$mainNav                      = $(".main_nav");


		/* Picturefill */

		picturefill();


		/* Analytics */

		$.analytics({
			scrollDepth: true
		});


		/* Plugins */

		Site.$body.find(".js-background").background();
		Site.$body.find(".js-carousel").carousel();
		Site.$body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox();
		Site.$body.find(".js-dropdown").dropdown();
		Site.$body.find(".js-equalize").equalize();
		Site.$body.find(".js-lightbox").lightbox({
			mobile: true,
			theme: "fs-light"
		});
		Site.$body.find(".js-navigation")
			.navigation({
				maxWidth: Site.maxLG + "px"
			})
			.on("open.navigation", function() {
				trackEvent($(this).data("analytics-open"));
				Site.$body.find(".js-navigation").attr("aria-hidden", "false").removeAttr("hidden");
			})
			.on("close.navigation", function() {
				trackEvent($(this).data("analytics-close"));
				Site.$body.find(".js-navigation").attr("aria-hidden", "true").attr("hidden", "");
			});
		Site.$body.find(".js-swap").swap();
		Site.$body.find("input[type=number]").number();
		Site.$body.find("input[type=range]").range();
		Site.$body.find(".js-tabs").tabs();

		$.mediaquery("bind", "mq-key", "(min-width: " + Site.minLG + "px)", {
			enter: function() {
				$subNav.attr("aria-hidden", "false").removeAttr("hidden");
			},
			leave: function() {
				$subNav.attr("aria-hidden", "true").attr("hidden", "");
			}
		});


		/* Wrapper for Tables */

		Site.$body.find(".typography table")
			.wrap('<div class="table_wrapper"><div class="table_wrapper_inner"></div></div>');
		tableOverflow();


		/* Generic Toggles */

		Site.$body.find(".js-toggle")
			.not(".js-bound")
			.on("click", ".js-toggle_handle", onToggleClick)
			.addClass("js-bound");


		/* Scroll Nav */

		Site.$body.find(".js-scroll_to")
			.not(".js-bound")
			.on("click", onScrollTo)
			.addClass("js-bound");


		/* Responsive Video */

		$("iframe[src*='vimeo.com'], iframe[src*='youtube.com']", ".typography").each(function() {
			$(this).wrap('<div class="video_frame"></div>');
		});


		/* Display children of focused nav items */

		$mainNav.find("a")
			.focus(function () {
				$(this).closest(".main_nav_item").addClass("focused");
			})
			.blur(function () {
				$(this).closest(".main_nav_item").removeClass("focused");
			});


		/* Scrolling */

		Site.onScroll.push(scroll);
		Site.onResize.push(resize);
		Site.onRespond.push(respond);

		Site.scroll();
	}

	function scroll() {

	}

	function resize() {
		scroll();
		tableOverflow();
	}

	function respond() {
		scroll();
	}

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
				activeClass = "js-toggle_active";

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

	/* Hook Into Main init Routine */

	Site.onInit.push(init);

	return {

	};
})(jQuery, Site);
