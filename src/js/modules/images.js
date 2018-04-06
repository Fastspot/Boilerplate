/*-------------------------------------------
	Images
-------------------------------------------*/

Site.modules.Images = (function($, Site) {

	var url = document.location.href;

	function init() {
		if (url.indexOf("dev.") > 0 || url.indexOf(".dev") > 0) {
			setupPhotoProp();
			bindUI();
		}
	}

	function setupPhotoProp() {
		$("body").append("<div class='photo_prop'><button class='photo_prop_close'>x</button><div class='photo_prop_detail'></div></div>");
	}

	function bindUI() {
		$("img, picture, .js-background").on("dblclick", function(e) {
			if ($(this).data("reference") != undefined) {
				grabSize($(this));
				showPhoto(e);
			}
		});

		$(".photo_prop_close").on("click", function() {
			removeClasses();
		});
	}

	function grabSize($image) {
		$(".photo_prop_detail").html($image.data("reference").replace(/\,/g, ',<br />'));
	}

	function showPhoto(e) {
		removeClasses();
		addClasses(e);
		positionProp(e);
	}

	function removeClasses() {
		$(".photo_prop").removeClass("visible");
		$(".photo_prop").removeClass("upper-region");
		$(".photo_prop").removeClass("lower-region");
	}

	function addClasses(e) {
		$(".photo_prop").addClass("visible");

		if (e.clientY < $(window).height() / 2) {
			$(".photo_prop").addClass("upper-region");
		} else {
			$(".photo_prop").addClass("lower-region");
		}
	}

	function positionProp(e) {
		$(".photo_prop").css("top", e.pageY);
		$(".photo_prop").css("left", e.pageX);
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
