<?php
	$admin->verifyCSRFToken();

	$event = SQL::fetch("SELECT * FROM btx_events_events WHERE id = ?", $_GET["event"]);
	$permission_level = $admin->getAccessLevel($bigtree["module"], $event, "btx_events_events");

	if ($permission_level != "p") {
		$admin->stop("Access denied.");
	}

	$rules = SQL::fetchAll("SELECT * FROM btx_events_recurrence_rules WHERE event = ?", $_GET["event"]);

	// Make a copy of the event
	unset($event["id"]);
	$event["title"] = $event["title"]." (Copy)";

	$id = BigTreeAutoModule::createItem("btx_events_events", $event);

	// Copy all the rules
	foreach ($rules as $rule) {
		$rule["event"] = $id;
		BigTreeAutoModule::createItem("btx_events_recurrence_rules", $rule);
	}

	$admin->growl("Events", "Duplicated Event");
	BigTree::redirect(MODULE_ROOT."edit/$id/");
