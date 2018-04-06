/*-------------------------------------------
	Site
-------------------------------------------*/

	// !Site
	var Site = (function($, window) {

		// !BaseController
		var BaseController = function() {
			this.namespace = "";

			this.minWidth = 320;

			this.window = null;
			this.doc = null;

			this.$window = null;
			this.$doc = null;
			this.$body = null;

			this.touch = false;

			// Public modules
			this.modules = [];

			this.onInit = [];
			this.onRespond = [];
			this.onResize = [];
			this.onScroll = [];

			this.minXS = "320";
			this.minSM = "500";
			this.minMD = "740";
			this.minLG = "980";
			this.minXL = "1220";
			this.minXXL = "1270";
		};

		$.extend(BaseController.prototype, {
			// Init
			init: function(namespace) {
				// Objects
				this.namespace = namespace;
				this.window = window;
				this.doc = document;
				this.$window = $(window);
				this.$doc = $(document);
				this.$body = $("body");
				this.touch = $("html").hasClass("touchevents");

				if ($.mediaquery) {
					$.mediaquery({
						minWidth: [
							this.minXS,
							this.minSM,
							this.minMD,
							this.minLG,
							this.minXL
						]
					});
				}

				if ($.cookie) {
					$.cookie({
						path: "/"
					});
				}

				// Init modules before scroll/resize/respond
				iterate(this.onInit);

				this.$window
					.on("mqchange.mediaquery", onRespond)
					.on(Controller.ns("resize"), onResize)
					.on(Controller.ns("scroll"), onScroll);

				this.resize();
			},
			// Namespace Text
			ns: function(text) {
				return text + "." + this.namespace;
			},
			// Resize Trigger
			resize: function() {
				this.$window.trigger(Controller.ns("resize"));
			},
			// Scroll Trigger
			scroll: function() {
				this.$window.trigger(Controller.ns("scroll"));
			},
			// Kill event
			killEvent: function(e) {
				if (e && e.preventDefault) {
					e.preventDefault();
					e.stopPropagation();
				}
			},
			// Start timer
			startTimer: function(timer, time, callback, interval) {
				this.clearTimer(timer);
				return (interval) ? setInterval(callback, time) : setTimeout(callback, time);
			},
			// Clear timer
			clearTimer: function(timer, interval) {
				if (timer) {
					if (interval) {
						clearInterval(timer);
					} else {
						clearTimeout(timer);
					}

					timer = null;
				}
			},
			// Returns symbol markup
			symbol: function(symbol) {
				var markup = '<svg class="symbol symbol_' + symbol + '">';
				var ua = window.navigator.userAgent;
    			var msie = ua.indexOf("MSIE ");
	
    			if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    				markup += '<use xlink:href="#' + symbol + '">';
    			} else {
    				markup += '<use xlink:href="' + STATIC_ROOT + 'images/icons.svg#' + symbol + '">';
    			}
	
    			return markup + '</use></svg>';
			}
		});

		// Internal Instance
		var Controller = new BaseController();

		// Loop through callbacks
		function iterate(items) {
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					items[i].apply(Controller, Array.prototype.slice.call(arguments, 1));
				}
			}
		}

		// Media Query Change Handler
		function onRespond(e, state) {
			iterate(Controller.onRespond, state);
		}

		// Resize Handler
		function onResize() {
			iterate(Controller.onResize);
		}

		// Scroll Handler
		function onScroll() {
			iterate(Controller.onScroll);
		}

		// Return Internal Instance
		return Controller;
	})(jQuery, window);

	// !Ready
	jQuery(document).ready(function() {
		Site.init("@namespace");
	});
