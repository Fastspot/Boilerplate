/*-------------------------------------------
	Formstone
-------------------------------------------*/

Site.modules.Formstone = (function($, Site) {

	var prev_icon = "chevron_left";
	var next_icon = "chevron_right";
	var lightboxOptions = {
		theme: "fs-light",
		videoWidth: 1000,
		labels: {
			close: "<span class='fs-lightbox-icon-close'>" + Site.icon("close") + "</span>",
			previous: "<span class='fs-lightbox-icon-previous'>" + Site.icon(prev_icon) + "</span>",
			count: "<span class='fs-lightbox-meta-divider'></span>",
			next: "<span class='fs-lightbox-icon-next'>" + Site.icon(next_icon) + "</span>"
		}
	};

	function init() {
		$(".js-background").on("loaded.background", function() {
			$(this).addClass("fs-background-loaded");
		}).background();
		$(".js-carousel").carousel();
		$(".js-checkbox, .js-radio").checkbox();
		$(".js-dropdown").dropdown();
		$(".js-equalize").equalize();
		$(".js-lightbox").lightbox(lightboxOptions);
		$(".js-swap").swap();

		carouselPagination($(".js-carousel"));
	}

	function carouselPagination($element) {
		$element.each(function() {
			var $previous_button = $(this).find(".fs-carousel-control_previous");
			var previous_text = $previous_button.text();
			var $next_button = $(this).find(".fs-carousel-control_next");
			var next_text = $next_button.text();

			$previous_button.html("<span class='fs-carousel-control-icon'>" + Site.icon(prev_icon) + "</span><span class='fs-carousel-control-label'>" + previous_text + "</span>");
			$next_button.html("<span class='fs-carousel-control-icon'>" + Site.icon(next_icon) + "</span><span class='fs-carousel-control-label'>" + next_text + "</span>");
		});
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
