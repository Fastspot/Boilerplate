/*-------------------------------------------
	Alert
-------------------------------------------*/

Site.modules.Alert = (function($, Site) {

	var $alert,
	$alert_close,
	alert_time,
	cookie_name;

	function init() {
		$alert = $(".js-alert");
		if ($alert.length) {
			bindUI();
		}
	}

	function bindUI() {
		$alert_close = $(".alert_close");
		alert_time = $alert.data("time");
		cookie_name = "fs-alert-cookie";

		if ($.cookie(cookie_name) === alert_time) {
			$alert_close.swap("activate");
			hideAlert();
		}

		$alert_close.on("activate.swap", function() {
			setCookie();
			hideAlert();
		});
	}

	function setCookie() {
		$.cookie(cookie_name, alert_time);
	}

	function hideAlert() {
		Site.modules.Page.ariaHide($alert);
		$alert_close.blur();
		$(window).trigger("resize");
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
