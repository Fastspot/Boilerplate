<?php
	if (method_exists($admin, "verifyCSRFToken")) {
		$admin->verifyCSRFToken();
	}
	
	// Stick the callout type back into the callout
	$_POST["data"][0]["type"] = $_POST["type"];

	// Let's pretend to be a form
	$bigtree["form"] = array(
		"table" => "btx_reusable_callouts",
		"hooks" => array("publish" => "BTXReusableCallouts::publishHook"),
		"title" => "Reusable Callout",
		"fields" => array(
			array(
				"column" => "type",
				"type" => "text",
				"title" => "Callout Type"
			),
			array(
				"column" => "title",
				"type" => "text",
				"title" => "Callout Title"
			),
			array(
				"column" => "data",
				"type" => "callouts",
				"title" => "Callout Data"
			)
		)
	);
	$bigtree["form_root"] = MODULE_ROOT;

	include SERVER_ROOT."core/admin/auto-modules/forms/process.php";