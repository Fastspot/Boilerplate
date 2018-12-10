<?php
	$admin->verifyCSRFToken();
	
	$event = $eventsMod->get($_POST["event"]);
	$permission_level = $admin->getAccessLevel($bigtree["module"], $event, "btx_events_events");

	if ($permission_level != "p") {
		$admin->stop("Access denied.");
	}
	
	$recurrence = SQL::fetch("SELECT * FROM btx_events_date_cache WHERE id = ?", $_POST["recurrence"]);
	$rule = SQL::fetch("SELECT * FROM btx_events_recurrence_rules WHERE id = ?", $recurrence["rule"]);
	
	// Cancel this recurrence
	$cancellations = array_filter((array) json_decode($rule["cancellations"], true));
	$cancellations[] = date("Y-m-d", strtotime($recurrence["start"]));
	$cancellations = array_unique($cancellations);
	
	SQL::update("btx_events_recurrence_rules", $rule["id"], ["cancellations" => $cancellations]);

	// Create a new rule for a specific one
	$start_time = $_POST["start_time"] ? date("H:i:s", strtotime($_POST["start_time"])) : null;
	$end_time = $_POST["end_time"] ? date("H:i:s", strtotime($_POST["end_time"])) : null;
	
	if ($_POST["all_day"]) {
		$all_day = "on";
		$start_time = null;
		$end_time = null;
	} else {
		$all_day = "";
	}
	
	SQL::insert("btx_events_recurrence_rules", [
		"event" => $_POST["event"],
		"type" => "specific",
		"start_date" => $_POST["start_date"] ? date("Y-m-d", strtotime($_POST["start_date"])) : null,
		"end_date" => $_POST["end_date"] ? date("Y-m-d", strtotime($_POST["end_date"])) : null,
		"start_time" => $start_time,
		"end_time" => $end_time,
		"all_day" => $all_day
	]);

	$admin->growl("Events", "Updated Recurrence");

	BTXEvents::recacheEvent($event["id"]);	
	BigTree::redirect(MODULE_ROOT."recurrences/".$event["id"]."/");
