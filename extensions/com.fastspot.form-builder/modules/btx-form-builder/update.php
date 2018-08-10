<?php
	/**
	 * @global array $bigtree
	 * @global BigTreeAdmin $admin
	 */

	if (method_exists($admin, "verifyCSRFToken")) {
		$admin->verifyCSRFToken();
	}
	
	$fieldMod = new BigTreeModule("btx_form_builder_fields");
	$form = sqlescape($bigtree["commands"][0]);
	
	// Get cleaned up prices, dates, and entries
	if ($_POST["early_bird"]) {
		$date = DateTime::createFromFormat($bigtree["config"]["date_format"]." h:i a", $_POST["early_bird_date"]);

		if ($date) {
			$early_bird_date = $date->format("Y-m-d H:i:s");
		} else {
			$early_bird_date = "NULL";
		}

		$early_bird_base_price = floatval(str_replace(array('$', ',', ' '), '', $_POST["early_bird_base_price"]));
	} else {
		$early_bird_date = "NULL";
		$early_bird_base_price = 0;
	}

	if (!empty($_POST["scheduling"])) {
		$open_date = DateTime::createFromFormat($bigtree["config"]["date_format"]." h:i a", $_POST["scheduling_open_date"]);
		$close_date = DateTime::createFromFormat($bigtree["config"]["date_format"]." h:i a", $_POST["scheduling_close_date"]);
		
		if ($open_date) {
			$scheduling_open_date = $open_date->format("Y-m-d H:i:s");
		} else {
			$scheduling_open_date = "NULL";
		}

		if ($close_date) {
			$scheduling_close_date = $close_date->format("Y-m-d H:i:s");
		} else {
			$scheduling_close_date = "NULL";
		}

		$scheduling_before_message = $_POST["scheduling_before_message"];
		$scheduling_after_message = $_POST["scheduling_after_message"];
	} else {
		$scheduling_open_date = "NULL";
		$scheduling_close_date = "NULL";
		$scheduling_before_message = "";
		$scheduling_after_message = "";
	}
	
	$base_price = floatval(str_replace(array('$', ',', ' '), '', $_POST["base_price"]));
	$max_entries = intval($_POST["max_entries"]);
	
	BigTreeAutoModule::updateItem("btx_form_builder_forms", $form, array(
		"title" => BigTree::safeEncode($_POST["title"]),
		"paid" => !empty($_POST["paid"]) ? "on" : "",
		"base_price" => $base_price,
		"early_bird_base_price" => $early_bird_base_price,
		"early_bird_date" => $early_bird_date,
		"limit_entries" => !empty($_POST["limit_entries"]) ? "on" : "",
		"max_entries" => $max_entries,
		"scheduling" => !empty($_POST["scheduling"]) ? "on" : "",
		"scheduling_open_date" => $scheduling_open_date,
		"scheduling_close_date" => $scheduling_close_date,
		"scheduling_before_message" => $scheduling_before_message,
		"scheduling_after_message" => $scheduling_after_message
	));
	
	// Setup the default column, sort position, alignment inside columns.
	$position = count($_POST["type"]);
	$column = 0;
	$alignment = "";
	
	// Get all the previous fields so we know which to delete.
	$fields_to_delete = array();
	$existing_fields = $fieldMod->getMatching("form", $form);
	
	foreach ($existing_fields as $field) {
		$fields_to_delete[$field["id"]] = $field["id"];
	}
	
	foreach ($_POST["type"] as $key => $type) {
		$id = $_POST["id"][$key];
		
		// The field still exists, remove it from the list to delete
		if ($id) {
			unset($fields_to_delete[$id]);
		}
		
		if ($type == "column_start") {
			// If we're starting a set of columns and don't have an alignment it's a new set.
			if (!$alignment) {
				if (!$id) {
					$column = $fieldMod->add(array(
						"form" => $form,
						"type" => "column",
						"position" => $position
					), false, false, true);
				} else {
					$column = $id;
					$fieldMod->update($id, "position", $position, true);
				}
				
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
			if ($id) {
				// Update the field, ignore cache
				$fieldMod->update($id, array(
					"type" => $type,
					"data" => $_POST["data"][$key],
					"position" => $position,
					"column" => $column,
					"alignment" => $alignment
				), false, true);
			} else {
				// Add the field, ignore cache
				$fieldMod->add(array(
					"form" => $form,
					"type" => $type,
					"data" => $_POST["data"][$key],
					"position" => $position,
					"column" => $column,
					"alignment" => $alignment
				), false, false, true);
			}
		}
		
		$position--;
	}
	
	// Delete fields that no longer exist in the form
	foreach ($fields_to_delete as $id) {
		$fieldMod->delete($id);
	}
	
	$admin->growl("Form Builder", "Updated Form");
	BigTree::redirect(MODULE_ROOT);
