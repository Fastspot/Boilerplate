/*-------------------------------------------
  Site
-------------------------------------------*/

	// !IE
	var IE8 = IE8 || false,
		IE9 = IE9 || false;

	// !Site
	var Site = (function($, window) {

		// Controller

		var Controller = function() {
			this.namespace    = "";

			this.minWidth     = 320;
			this.maxWidth     = Infinity;
			this.scrollTop    = 0;
			this.windowHeight = 0;
			this.windowWidth  = 0;

			this.window       = null;
			this.doc          = null;

			this.$window      = null;
			this.$doc         = null;
			this.$body        = null;

			this.onInit       = [];
			this.onRespond    = [];
			this.onResize     = [];
			this.onScroll     = [];

			this.minXS = "@mq_min_xs";
			this.minSM = "@mq_min_sm";
			this.minMD = "@mq_min_md";
			this.minLG = "@mq_min_lg";
			this.minXL = "@mq_min_xl";

			this.maxXS = this.minXS - 1;
			this.maxSM = this.minSM - 1;
			this.maxMD = this.minMD - 1;
			this.maxLG = this.minLG - 1;
			this.maxXL = this.minXL - 1;
		};

		$.extend(Controller.prototype, {
			init: function(namespace) {
				// Objects
				this.namespace = namespace;
				this.window    = window;
				this.doc       = document;
				this.$window   = $(window);
				this.$doc      = $(document);
				this.$body     = $("body");

				$.mediaquery({
					minWidth: [ this.minXS, this.minSM, this.minMD, this.minLG, this.minXL ],
					maxWidth: [ this.maxXL, this.maxLG, this.maxMD, this.maxSM, this.maxXS ]
				});

				this.$window.on("mqchange.mediaquery", onRespond)
							.on(Site.ns("resize"), onResize)
							.on(Site.ns("scroll"), onScroll);

				iterate(this.onInit);
			},
			ns: function(text) {
				return text + "." + this.namespace;
			},
			resize: function() {
				this.$window.trigger(Site.ns("resize"));
			},
			scroll: function() {
				this.$window.trigger(Site.ns("scroll"));
			}
		});

		// New

		var Site = new Controller();

		// Main

		function iterate(items) {
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					items[i].call(Site, Array.prototype.slice.call(arguments, 1));
				}
			}
		}

		function onRespond(e, state) {
			Site.minWidth = state.minWidth;

			iterate(Site.onRespond, state);
		}

		function onResize() {
			iterate(Site.onResize);
		}

		function onScroll() {
			Site.scrollTop = Site.$window.scrollTop();

			iterate(Site.onScroll);
		}

		return Site;
	})(jQuery, window);