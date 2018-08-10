<?php
	$field["output"] = array("start" => "", "end" => "");

	if (!empty($field["input"]["start"])) {
		$field["output"]["start"] = BigTree::dateFormat($field["input"]["start"], "Y-m-d");
	}

	if (!empty($field["input"]["end"])) {
		$field["output"]["end"] = BigTree::dateFormat($field["input"]["end"], "Y-m-d");
	}

	if ($field["output"]["end"] && strtotime($field["output"]["end"]) < strtotime($field["output"]["start"])) {
		$bigtree["errors"][] = array("field" => $field["title"], "error" => "The entered end date is before the start date.");
	}

	if (empty($field["output"]["start"]) && !empty($field["output"]["end"])) {
		$bigtree["errors"][] = array("field" => $field["title"], "error" => "A start date was entered but no end date was specified.");		
	}

	if ($field["options"]["required"]) {
		if (empty($field["output"]["start"])) {
			$bigtree["errors"][] = array("field" => $field["title"], "error" => "No beginning date was entered.");
		}

		if (empty($field["output"]["end"])) {			
			$bigtree["errors"][] = array("field" => $field["title"], "error" => "No beginning date was entered.");
		}
	}
