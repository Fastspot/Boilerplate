<?php
	$admin->verifyCSRFToken();
	
	$event = $eventsMod->get($_GET["event"]);
	$permission_level = $admin->getAccessLevel($bigtree["module"], $event, "btx_events_events");

	if ($permission_level != "p") {
		$admin->stop("Access denied.");
	}

	$recurrence = SQL::fetch("SELECT * FROM btx_events_date_cache WHERE id = ?", $_GET["recurrence"]);
	$rule = SQL::fetch("SELECT * FROM btx_events_recurrence_rules WHERE id = ?", $recurrence["rule"]);
	
	if (!$event || !$recurrence || !$rule) {
		$admin->stop("Invalid recurrence rule.");
	}
	
	$cancellations = array_filter((array) json_decode($rule["cancellations"], true));
	$cancellations[] = date("Y-m-d", strtotime($recurrence["start"]));
	$cancellations = array_unique($cancellations);
	
	SQL::update("btx_events_recurrence_rules", $rule["id"], ["cancellations" => $cancellations]);
	
	$admin->growl("Events", "Canceled Recurrence");

	BTXEvents::recacheEvent($event["id"]);
	BigTree::redirect(MODULE_ROOT."recurrences/".$event["id"]."/");
	