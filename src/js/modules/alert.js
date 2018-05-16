/*-------------------------------------------
	Alert
-------------------------------------------*/

Site.modules.Alert = (function($, Site) {

	var $alert,
	$alert_close,
	alert_ime,
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
		$(window).trigger("resize");
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
