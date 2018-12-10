<?php
	$admin->verifyCSRFToken();

	$rule = SQL::fetch("SELECT * FROM btx_events_recurrence_rules WHERE id = ?", $_GET["rule"]);
	$event = BTXEvents::get($rule["event"]);
	$permission_level = $admin->getAccessLevel($bigtree["module"], $event, "btx_events_events");

	if ($permission_level != "p") {
		$admin->stop("Access denied.");
	}
	
	SQL::delete("btx_events_recurrence_rules", $rule["id"]);
	BTXEvents::recacheEvent($rule["event"]);
		
	$admin->growl("Events", "Deleted Recurrence Rule");	
	
	if ($_GET["return"] == "recurrences") {
		BigTree::redirect(MODULE_ROOT."recurrences/".$rule["event"]."/");
	} else {
		BigTree::redirect(MODULE_ROOT."rules/".$rule["event"]."/");
	}
