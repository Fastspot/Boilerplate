/*-------------------------------------------
	Page
-------------------------------------------*/

Site.modules.Page = (function($, Site) {

	var $FixedHeader, // set to fixed header element
	FixedHeaderHeight,
	ScrollYPosition;

	function init() {
		FixedHeaderHeight = null;
		ScrollYPosition = 0;

		bindUI();
		fixIEsvg();
		responsiveVideo();
		tableOverflowPrep();
		tableOverflow();
		
		Site.modules.Formstone.init();
		Site.modules.Menu.init();
		Site.modules.Nav.init();
		Site.modules.SubNav.init();
	}

	function bindUI() {
		Site.onScroll.push(scroll);
		Site.onResize.push(resize);
		Site.onRespond.push(respond);

		Formstone.Ready(pageLoad);

		$(".js-toggle")
			.not(".js-bound")
			.on("click", ".js-toggle-handle", onToggleClick)
			.addClass("js-bound");

		$(".js-scroll-to")
			.not(".js-bound")
			.on("click", onScrollTo)
			.addClass("js-bound");
	}

	function scroll() {}

	function resize() {
		tableOverflow();
		fixedHeader($FixedHeader);
	}

	function respond() {}

	function pageLoad() {
		$("body").removeClass("preload").addClass("loaded");

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
			scrollTop: top - FixedHeaderHeight
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

	function responsiveVideo() {
		$("iframe[src*='vimeo.com'], iframe[src*='youtube.com']", ".typography").each(function() {
			$(this).wrap('<div class="video_frame"></div>');
		});
	}

	function tableOverflowPrep() {
		$(".typography table").wrap('<div class="table_wrapper"><div class="table_wrapper_inner"></div></div>');
	}

	function tableOverflow() {
		$(".table_wrapper").each(function() {
			var $inner = $(this).find(".table_wrapper_inner");
			var scrollWidth = $inner.get(0).scrollWidth;
			var clientWidth = $inner.get(0).clientWidth;

			if (scrollWidth > clientWidth) {
				$(this).addClass("table_wrapper_overflow")
					.attr({
						"tabindex": "0",
						"role": "group"
					});
			} else {
				$(this).removeClass("table_wrapper_overflow")
					.removeAttr("tabindex role");
			}
		});
	}

	function fixedHeader($header) {
		if (typeof $FixedHeader !== "undefined") {
			FixedHeaderHeight = $header.outerHeight();
			btBarHeight = $("#bigtree_bar").outerHeight();
			wpBarHeight = $("#wpadminbar").outerHeight();

			if (btBarHeight > 0) {
				$header.css("top", btBarHeight);

				FixedHeaderHeight = FixedHeaderHeight + btBarHeight;
			} else if (wpBarHeight > 0) {
				$header.css("top", wpBarHeight);

				FixedHeaderHeight = FixedHeaderHeight + wpBarHeight;
			}
		}
	}

	function saveScrollYPosition() {
		ScrollYPosition = window.pageYOffset;

		$("body").css({
			"width": "100%",
			"position": "fixed",
			"top": (ScrollYPosition * -1)
		});
	}

	function restoreScrollYPosition() {
		$("body").css({
			"width": "",
			"position": "",
			"top": ""
		});

		$("html, body").scrollTop(ScrollYPosition);
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
		getScrollbarWidth: getScrollbarWidth,
		saveScrollYPosition: saveScrollYPosition,
		restoreScrollYPosition: restoreScrollYPosition
	};

})(jQuery, Site);
