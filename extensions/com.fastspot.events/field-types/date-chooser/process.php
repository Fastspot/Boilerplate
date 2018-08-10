<?php
	// Start date / end date
	$raw_start = BigTree::dateFormat($bigtree["post_data"]["start_date"],"U");
	$raw_end = BigTree::dateFormat($bigtree["post_data"]["end_date"],"U");

	$bigtree["entry"]["start_date"] = $raw_start ? date("Y-m-d",$raw_start) : "";
	$bigtree["entry"]["end_date"] = ($raw_end && $raw_end > $raw_start) ? date("Y-m-d",$raw_end) : "";

	if ($raw_end && $raw_end < $raw_start) {
		$bigtree["errors"][] = array("field" => "End Date", "error" => "The end date you entered was earlier than the start date.");
	}

	// Start time / end time / all day
	if ($bigtree["post_data"]["all_day"] || !$bigtree["post_data"]["start_time"]) {
		$bigtree["entry"]["start_time"] = "";
		$bigtree["entry"]["end_time"] = "";
		$bigtree["entry"]["all_day"] = "on";
	} else {
		$bigtree["entry"]["all_day"] = "";
		$bigtree["entry"]["start_time"] = date("H:i:s",strtotime($bigtree["post_data"]["start_time"]));
		
		if ($bigtree["post_data"]["end_time"]) {
			// If the end time is before the start time and the event doesn't span multiple days, kill the end time.
			if (strtotime($bigtree["post_data"]["end_time"]) < strtotime($bigtree["post_data"]["start_time"]) && !$bigtree["entry"]["end_date"]) {
				$bigtree["entry"]["end_time"] = "";
				$bigtree["errors"][] = array("field" => "End Time", "error" => "The end time you entered was earlier than the start time.");
			} else {
				$bigtree["entry"]["end_time"] = date("H:i:s",strtotime($bigtree["post_data"]["end_time"]));
			}
		} else {
			$bigtree["entry"]["end_time"] = "";
		}
	}
	
	if ($bigtree["post_data"]["recurrence_type"]) {
		$bigtree["entry"]["recurrence_type"] = $bigtree["post_data"]["recurrence_type"];
		$bigtree["entry"]["recurrence_detail"] = $bigtree["post_data"]["recurrence_detail"];

		$raw_recurring_end = BigTree::dateFormat($bigtree["post_data"]["recurring_end_date"],"U");
		
		if ($raw_recurring_end) {
			if ($raw_recurring_end > $raw_start) {
				$bigtree["entry"]["recurring_end_date"] = date("Y-m-d",$raw_recurring_end);
			} else {
				$bigtree["entry"]["recurring_end_date"] = "";
				$bigtree["errors"][] = array("field" => "Recurring End Date", "error" => "The recurring end date you entered was earlier than the start date.");
			}
		}
	} else {
		$bigtree["entry"]["recurrence_type"] = "";
		$bigtree["entry"]["recurrence_detail"] = "";
		$bigtree["entry"]["recurring_end_date"] = "";
		$bigtree["entry"]["canceled_recurrences"] = "";
	}
	
	$field["ignore"] = true;

	BigTreeAutoModule::clearCache("btx_events_date_cache");
