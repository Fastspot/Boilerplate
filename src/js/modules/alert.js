/*-------------------------------------------
	Alert
-------------------------------------------*/

Site.modules.Alert = (function($, Site) {

	var $alert = $(".alert");
	var $alertClose = $(".alert_close");
	var $alertTime = $alert.data("time");
	var cookieName = "alert";

	function init() {
		showAlert();

		if($alert.length) {
			if ($.cookie(cookieName) === $alertTime) {
				hideAlert();
			}

			$alertClose.on("click", function() {
				$.cookie(cookieName, $alertTime);

				console.log($.cookie(cookieName));

				hideAlert();
			});
		}
	}

	function showAlert() {
		$alert.addClass("show_alert");
	}

	function hideAlert() {
		$alert.removeClass("show_alert");
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
