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
			minXS = "@mq_min_xs",
			minSM = "@mq_min_sm",
			minMD = "@mq_min_md",
			minLG = "@mq_min_lg",
			minXL = "@mq_min_xl",
			maxXS = minXS - 1,
			maxSM = minSM - 1,
			maxMD = minMD - 1,
			maxLG = minLG - 1,
			maxXL = minXL - 1,
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
<<<<<<< HEAD
				// maxWidth: [ maxXl, maxLG, maxMD, maxSM, maxXS ],
				minWidth: [ minXS, minSM, minMD, minLG, minXL ]
=======
				// maxWidth: [ maxXL, maxLG, maxMD, maxSM, maxXS ],
				minWidth: [ minXL, minLG, minMD, minSM, minXS ]
>>>>>>> 0700fe2b104782d74e53fee2115c6ba593e2e6e9
			});

			$.shifter({
				maxWidth: maxLG + "px"
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
