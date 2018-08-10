<?php
	// Populate the rest of the data if this was entered so that any required fields won't say they failed
	if ($field["input"]) {
		$mod = new BTXReusableCallouts;
		$callout = $mod->get($field["input"]);

		foreach ($callout["data"][0] as $key => $value) {
			$bigtree["post_data"][$key] = $value;
		}
	}

	$field["output"] = $field["input"];
