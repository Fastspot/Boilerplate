<?php
	/**
	 * @global BigTreeAdmin $admin
	 */

	if (method_exists($admin, "verifyCSRFToken")) {
		$admin->verifyCSRFToken();
	}

	// Get cleaned up prices, dates, and entries
	if ($_POST["early_bird"]) {
		$early_bird_date = "'".date("Y-m-d H:i:s", strtotime(str_replace("@", "", $_POST["early_bird_date"])))."'";
		$early_bird_base_price = floatval(str_replace(array('$', ',', ' '), '', $_POST["early_bird_base_price"]));
	} else {
		$early_bird_date = "NULL";
		$early_bird_base_price = 0;
	}
	
	$base_price = floatval(str_replace(array('$', ',', ' '), '', $_POST["base_price"]));
	$max_entries = intval($_POST["max_entries"]);
	
	// Create the form.
	$form = BigTreeAutoModule::createItem("btx_form_builder_forms", array(
		"title" => BigTree::safeEncode($_POST["title"]),
		"paid" => $_POST["paid"] ? "on" : "",
		"base_price" => $base_price,
		"early_bird_base_price" => $early_bird_base_price,
		"early_bird_date" => $early_bird_date,
		"limit_entries" => $_POST["limit_entries"] ? "on" : false,
		"max_entries" => $max_entries
	));
	
	// Setup the default column, sort position, alignment inside columns.
	$position = count($_POST["type"]);
	$column = 0;
	$alignment = "";
	
	foreach ($_POST["type"] as $key => $type) {
		if ($type == "column_start") {
			// If we're starting a set of columns and don't have an alignment it's a new set.
			if (!$alignment) {
				$column = BigTreeAutoModule::createItem("btx_form_builder_fields", array("form" => $form, "type" => "column", "position" => $position));
				$alignment = "left";
			// Otherwise we're starting the second column of the set, just change the alignment.
			} elseif ($alignment == "left") {
				$alignment = "right";
			}
		} elseif ($type == "column_end") {
			if ($alignment == "right") {
				$column = 0;
				$alignment = "";
			}
		} elseif ($type) {
			BigTreeAutoModule::createItem("btx_form_builder_fields", array("form" => $form, "column" => $column, "alignment" => $alignment, "type" => $type, "data" => $_POST["data"][$key], "position" => $position));
		}
		
		$position--;
	}
	
	$admin->growl("Form Builder", "Created Form");
	BigTree::redirect(MODULE_ROOT);
