<?php
	$admin->requireLevel(2);
	
	$settings["accept_payments"] = !empty($_POST["accept_payments"]) ? "on" : "";
	$settings["no_css"] = !empty($_POST["no_css"]) ? "on" : "";
	$settings["dont_draw_page_header"] = !empty($_POST["dont_draw_page_header"]) ? "on" : "";
	$settings["disable_columns"] = !empty($_POST["disable_columns"]) ? "on" : "";
	$settings["recaptcha"] = $_POST["recaptcha"];
	$settings["text_wrapper"] = $_POST["text_wrapper"];
	$settings["text_wrapper_end"] = $_POST["text_wrapper_end"];

	$admin->updateSettingValue("settings",$settings);
	$admin->growl("Form Builder","Updated Settings");

	BigTree::redirect(MODULE_ROOT);
