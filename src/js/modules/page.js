/*-------------------------------------------
	Page
-------------------------------------------*/

Site.modules.Page = (function($, Site) {

	var $fixed_header; // set to fixed header element
	var fixed_header_height = null;
	var scrollYPosition = 0;

	function init() {
		bindGenericUI();
		fixIEsvg();
		responsiveVideo();
		tableOverflow();
		
		$(".typography table")
			.wrap('<div class="table_wrapper"><div class="table_wrapper_inner"></div></div>');

		Site.onScroll.push(scroll);
		Site.onResize.push(resize);
		Site.onRespond.push(respond);
		
		$(window).on("load", onPageLoad);
	}

	function scroll() {}

	function resize() {
		tableOverflow();
		fixedHeader($fixed_header);
	}

	function respond() {}

	function onPageLoad() {
		$("body").removeClass("preload");

		$(window).trigger("resize");

		if (window.location.hash) {
			var id = window.location.hash;
			
			scrollToElement(id);
		}
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
			scrollTop: top - fixed_header_height
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
		$(".js-toggle")
			.not(".js-bound")
			.on("click", ".js-toggle-handle", onToggleClick)
			.addClass("js-bound");

		$(".js-scroll-to")
			.not(".js-bound")
			.on("click", onScrollTo)
			.addClass("js-bound");
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
	
	function ariaHide($element) {
		$element.attr("aria-hidden", "true")
			.attr("hidden", "");
	}

	function ariaShow($element) {
		$element.attr("aria-hidden", "false")
			.removeAttr("hidden");
	}

	function fixedHeader($header) {
		if (typeof $fixed_header !== "undefined") {
			fixed_header_height = $header.outerHeight();
			bt_bar_height = $("#bigtree_bar").outerHeight();
			wp_bar_height = $("#wpadminbar").outerHeight();

			if (bt_bar_height > 0) {
				$header.css("top", bt_bar_height);

				fixed_header_height = fixed_header_height + bt_bar_height;
			} else if (wp_bar_height > 0) {
				$header.css("top", wp_bar_height);

				fixed_header_height = fixed_header_height + wp_bar_height;
			}
		}
	}

	function saveScrollYPosition() {
		scrollYPosition = window.pageYOffset;

		$("body").css({
			"width": "100%",
			"position": "fixed",
			"top": (scrollYPosition * -1)
		});
	}

	function restoreScrollYPosition() {
		$("body").css({
			"width": "",
			"position": "",
			"top": ""
		});

		$("html, body").scrollTop(scrollYPosition);
	}

	function getScrollbarWidth() {
		var outer = document.createElement("div");
		outer.style.visibility = "hidden";
		outer.style.width = "100px";
		outer.style.msOverflowStyle = "scrollbar";

		document.body.appendChild(outer);

		var widthNoScroll = outer.offsetWidth;
		// force scrollbars
		outer.style.overflow = "scroll";

		// add innerdiv
		var inner = document.createElement("div");
		inner.style.width = "100%";
		outer.appendChild(inner);

		var widthWithScroll = inner.offsetWidth;

		// remove divs
		outer.parentNode.removeChild(outer);

		return widthNoScroll - widthWithScroll;
	}

	function fixIEsvg() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");

		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
			$.get(STATIC_ROOT + "images/icons.svg", function(data) {
				var div = document.createElement("div");
				$(div).hide();
				div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
				document.body.insertBefore(div, document.body.childNodes[0]);

				$("svg use").each(function() {
					var parts = $(this).attr("xlink:href").split("#");
					$(this).attr("xlink:href", "#" + parts[1]);
				});
			});
		}
	}

	Site.onInit.push(init);

	return {
		ariaHide: ariaHide,
		ariaShow: ariaShow,
		getScrollbarWidth: getScrollbarWidth,
		saveScrollYPosition: saveScrollYPosition,
		restoreScrollYPosition: restoreScrollYPosition
	};

})(jQuery, Site);
