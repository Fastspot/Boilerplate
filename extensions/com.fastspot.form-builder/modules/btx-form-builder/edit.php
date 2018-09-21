<?php
	/**
	 * @global array $bigtree
	 */
	
	$bigtree["form"] = $form = BTXFormBuilder::getForm($bigtree["commands"][0]);
	$bigtree["subnav_extras"][] = array(
		"link" => MODULE_ROOT."audit/".intval($bigtree["commands"][0])."/",
		"icon" => "trail",
		"title" => "View Pages Using This Form"
	);

	$action = "update";

	include "_form.php";
