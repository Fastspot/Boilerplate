<?php
	$admin->verifyCSRFToken();
	
	$event = $eventsMod->get($_GET["event"]);
	$permission_level = $admin->getAccessLevel($bigtree["module"], $event, "btx_events_events");

	if ($permission_level != "p") {
		$admin->stop("Access denied.");
	}

	$recurrence = SQL::fetch("SELECT * FROM btx_events_date_cache_canceled WHERE id = ?", $_GET["recurrence"]);
	$rule = SQL::fetch("SELECT * FROM btx_events_recurrence_rules WHERE id = ?", $recurrence["rule"]);
	
	if (!$event || !$recurrence || !$rule) {
		$admin->stop("Invalid recurrence rule.");
	}
	
	$rule["cancellations"] = array_filter((array) json_decode($rule["cancellations"], true));
	
	foreach ($rule["cancellations"] as $index => $date) {
		if ($date == date("Y-m-d", strtotime($recurrence["start"]))) {
			unset($rule["cancellations"][$index]);
		}
	}
		
	SQL::update("btx_events_recurrence_rules", $rule["id"], ["cancellations" => $cancellations]);
	
	$admin->growl("Events", "Uncanceled Recurrence");

	BTXEvents::recacheEvent($event["id"]);
	BigTree::redirect(MODULE_ROOT."recurrences/".$event["id"]."/");
	