<?php
	/**
	 * @global array $bigtree
	 */

	$admin = new BigTreeAdmin;

	if (!$admin->ID) {
		header("X-Robots-Tag: noindex");
		die("You must login to preview events.");
	}

	$item = BigTreeAutoModule::getPendingItem("btx_events_events", $bigtree["commands"][0]);

	if (empty($item["item"])) {
		$cms->catch404();
	}

	$event = $item["item"];

	if (is_array($item["mtm"]) && count($item["mtm"])) {
		$event["categories"] = [];

		foreach ($item["mtm"] as $mtm) {
			if ($mtm["table"] == "btx_events_event_categories" && is_array($mtm["data"])) {
				foreach ($mtm["data"] as $mtm_entry) {
					$category = SQL::fetch("SELECT * FROM btx_events_categories WHERE id = ?", $mtm_entry);

					if ($category) {
						$event["categories"][] = $category;
					}
				}
			}
		}
	} elseif ($item["status"] == "published") {
		$event = $eventsMod->get($event);
	}

	$bigtree["bar_edit_link"] = ADMIN_ROOT."com.fastspot.events*events/edit/".htmlspecialchars($bigtree["commands"][0])."/";
	
	include "event.php";
	