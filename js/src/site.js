/*-------------------------------------------
  Site
-------------------------------------------*/

	// !IE
	var IE8 = IE8 || false,
		IE9 = IE9 || false;

	// !Site
	var Site = (function($, window) {
		// Vars
		var minWidth = 320,
			maxWidth = Infinity,
			scrollTop = 0,
			windowHeight = 0,
			windowWidth = 0,
			min_xs = "@mq_min_xs",
			min_sm = "@mq_min_sm",
			min_md = "@mq_min_md",
			min_lg = "@mq_min_lg",
			min_xl = "@mq_min_xl",
			max_xs = "@mq_max_xs",
			max_sm = "@mq_max_sm",
			max_md = "@mq_max_md",
			max_lg = "@mq_max_lg",
			max_xl = "@mq_max_xl",
			$window,
			$doc,
			$body,
			$page,
			$subnav;

		function init() {
			// Objects
			$window = $(window);
			$doc    = $(document);
			$body   = $("body");
			$page   = $(".shifter-page");
			$subnav = $(".subnavigation");

			// Init
			$window.on("snap", onRespond)
				.on("resize", onResize);
				// .on("scroll", onScroll);

			$.rubberband({
				// maxWidth: [ max_xl, max_lg, max_md, max_sm, max_xs ],
				minWidth: [ min_xl, min_lg, min_md, min_sm, min_xs ]
			});

			$.shifter({
				maxWidth: max_lg
			});

		}

		function onRespond(e, data) {
			maxWidth = data.maxWidth;
			minWidth = data.minWidth;

			$.shifter("close");
		}

		function onResize() {
			//
		}

		function onScroll() {
			//
		}

		return {
			init: init
		};
	})(jQuery, window);


	// !Ready
	$(document).ready(Site.init);



// Module pattern
// Use: Module.action(params...);
/*
var Module = (function($, window) {

	var foo = "bar";

	function init() {
		console.log("new action", this);
	}

	return {
		init: init
	};
})(jQuery, window);
*/


// Factory pattern
// Use: var instance = new Module("#el", { property: value });
/*
var Module = function(element) {
	return (function($,element) {
		var foo = "bar";

		function init() {
			console.log("new action", this);
		}

		return {
			init: init
		};
	})(jQuery,element);
};
*/


// Plugin pattern
// Use: $("#el").module("action", [params...]);
/*
;(function ($, window) {
	"use strict";

	var options = {},
		pub = {};

	function _init(opts) {
		opts = $.extend({}, options, opts);
		return $(this);
	}

	$.fn.plugin = function(method) {
		if (pub[method]) {
			return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return _init.apply(this, arguments);
		}
		return this;
	};
})(jQuery, window);
*/
