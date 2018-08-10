<?php
	if (method_exists($admin, "verifyCSRFToken")) {
		$admin->verifyCSRFToken();
	}

	$event = BTXEvents::get($_GET["event"]);
	
	$canceled = json_decode($event["canceled_recurrences"],true);
	$canceled[] = $_GET["date"];
	$canceled = json_encode($canceled);
	
	$permission_level = $admin->getAccessLevel($bigtree["current_module"],$event,"btx_events_events");

	// Prepare the new event array.
	$event["start_date"] = $_GET["date"];
	unset($event["id"]);
	unset($event["end_date"]);
	unset($event["recurrence_type"]);
	unset($event["recurrence_detail"]);
	unset($event["canceled_recurrences"]);
	unset($event["recurring_end_date"]);
		
	// We're a publisher, we'll do as we please!
	if ($permission_level == "p") {
		// Un-recur the original day...
		BigTreeAutoModule::updateItem("btx_events_events",$_GET["event"],array("canceled_recurrences" => $canceled));
		// Create the new event
		$id = BigTreeAutoModule::createItem("btx_events_events",$event);
		$admin->growl("Events","Separated Event");
	}

	// We're going to request a cancelation of an event
	if ($permission_level == "e") {
		// Ask to un-recur this event.
		BigTreeAutoModule::submitChange($bigtree["current_module"]["id"],"btx_events_events",$_GET["event"],array("canceled_recurrences" => $canceled));
		// Ask to create the new one.
		$id = "p".BigTreeAutoModule::createPendingItem($bigtree["current_module"]["id"],"btx_events_events",$event);
		$admin->growl("Events","Separated Event Pending Approval");
	}
	
	BigTree::redirect(MODULE_ROOT."edit/$id/");
