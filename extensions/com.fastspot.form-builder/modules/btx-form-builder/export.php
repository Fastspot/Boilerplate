<?php
	/**
	 * @global array $bigtree
	 */
	
	$form = BTXFormBuilder::getForm($bigtree["commands"][0]);
	
	header("Content-type: text/csv");
	header('Content-Disposition: attachment; filename="'.$cms->urlify($form["title"])."-".date("Y-m-d").'.csv"');
	
	$draw_csv_header = function ($fields) {
		global $draw_csv_header;
		
		$columns = array();
		
		foreach ($fields as $field) {
			$fdata = json_decode($field["data"], true);
			$label = str_replace('"', '""', ($fdata["label"] ? $fdata["label"] : ucwords($field["type"])));
			
			if ($field["type"] == "column") {
				$columns = array_merge($columns, $draw_csv_header($field["fields"]));
			} elseif ($field["type"] == "address") {
				$columns[] = $label." - Street";
				$columns[] = $label." - Street 2";
				$columns[] = $label." - City";
				$columns[] = $label." - State";
				$columns[] = $label." - Zip";
				$columns[] = $label." - Country";
			} elseif ($field["type"] == "name") {
				$columns[] = $label." - First";
				$columns[] = $label." - Last";
			} elseif ($field["type"] != "section" && $field["type"] != "captcha") {
				$columns[] = $label;
			}
		}
		
		return $columns;
	};
	
	$draw_csv_record = function ($entry, $fields) {
		global $draw_csv_record;
		
		$record = array();
		
		foreach ($fields as $field) {
			$value = $entry["data"][$field["id"]];
			
			if ($field["type"] == "column") {
				$record = array_merge($record, $draw_csv_record($entry, $field["fields"]));
			} elseif ($field["type"] == "address") {
				$record[] = str_replace('"', '""', $value["street"]);
				$record[] = str_replace('"', '""', $value["street2"]);
				$record[] = str_replace('"', '""', $value["city"]);
				$record[] = str_replace('"', '""', $value["state"]);
				$record[] = str_replace('"', '""', $value["zip"]);
				$record[] = str_replace('"', '""', $value["country"]);
			} elseif ($field["type"] == "name") {
				$record[] = str_replace('"', '""', $value["first"]);
				$record[] = str_replace('"', '""', $value["last"]);
			} elseif ($field["type"] == "checkbox") {
				if (is_array($value)) {
					$record[] = str_replace('"', '""', implode(", ", $value));
				} else {
					$record[] = str_replace('"', '""', $value);
				}
			} elseif ($field["type"] != "section" && $field["type"] != "captcha") {
				$record[] = str_replace('"', '""', $value);
			}
		}
		
		return $record;
	};
	
	// Draw Header
	echo '"'.implode('","', $draw_csv_header($form["fields"])).'","Date Submitted"'."\n";
	
	// Draw Data
	$entries = BTXFormBuilder::getEntries($form["id"]);
	
	foreach ($entries as $entry) {
		echo '"'.implode('","', $draw_csv_record($entry, $form["fields"])).'","'.$entry["created_at"].'"'."\n";
	}
	
	die();
