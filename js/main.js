// Console Polyfill <http://stackoverflow.com/questions/3326650/console-is-undefined-error-for-internet-explorer>
(function(){window.console||(window.console={});for(var b="log info warn error debug trace dir group groupCollapsed groupEnd time timeEnd profile profileEnd dirxml assert count markTimeline timeStamp clear".split(" "),a=0;a<b.length;a++)window.console[b[a]]||(window.console[b[a]]=function(){})})();
// Fix Missing .indexOf()
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e){var t=this.length>>>0;var n=Number(arguments[1])||0;n=n<0?Math.ceil(n):Math.floor(n);if(n<0)n+=t;for(;n<t;n++){if(n in this&&this[n]===e)return n}return-1}}
// Fix Missing .forEach()
if (!Array.prototype.forEach){Array.prototype.forEach=function(method,value){for(var i=0,c=this.length;i<c;i++){if(i in this){method.call(value,this[i],i,this);}}}};
// Fix missing .trim()
if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'')}}

	// !IE
	var IE8 = IE8 || false,
		IE9 = IE9 || false;

	// !Site
	var Site = {
		// Vars
		minWidth: 320,
		maxWidth: Infinity,
		scrollTop: 0,
		windowHeight: 0,
		windowWidth: 0,

		_init: function() {
			// Objects
			Site.$window = $(window);
			Site.$doc    = $(document);
			Site.$body   = $("body");

			// Rubberband
			Site.$window.on("snap", Site._onRespond)
						.on("resize", Site._onResize)
						.on("scroll", Site._onScroll);

			$.rubberband({
				maxWidth: [ 1220, 980, 740, 500, 320 ],
				minWidth: [ 1220, 980, 740, 500, 320 ]
			});
		}
	};

	// !Ready
	$(document).ready(Site._init);



/*
$("#el").module("action", [params...]);

OR

var el = new Module($("#el"));
el.action(params...);
*/


// Module pattern
/*
var Module = (function($, window) {

	var foo = "bar";

	return module = {
		action: function() {
			console.log("new action", this);
		}
	};

})(jQuery, window);
*/


// Plugin pattern
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