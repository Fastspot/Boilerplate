/*-------------------------------------------
	Alert
-------------------------------------------*/

Site.modules.Alert = (function($, Site) {

	var $alert;
	var $alertClose;
	var $alertTime;
	var cookieName;

	function init() {
		if ($(".alert").length) {
			$alert = $(".alert");
			$alertClose = $(".alert_close");
			$alertTime = $alert.data("time");
			cookieName = "alert-cookie";

			if ($.cookie(cookieName) === $alertTime) {
				hideAlert();
			} else {
				showAlert();
			}

			bindUI();
		}
	}

	function bindUI() {
		$alertClose.on("click", function() {
			setCookie();
			hideAlert();
		});
	}

	function setCookie() {
		$.cookie(cookieName, $alertTime);
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
