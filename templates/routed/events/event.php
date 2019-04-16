<?php
	/**
	 * @global array $bigtree
	 * @global BTXEvents $eventsMod
	 * @global BigTreeCMS $cms
	 */

	// Preview may have already loaded it
	if (empty($event)) {
		$event = $eventsMod->getByRoute($bigtree["commands"][0], $bigtree["commands"][1]);

		if (!$event || count($bigtree["commands"]) > 2) {
			$cms->catch404();
		}

		$bigtree["bar_edit_link"] = ADMIN_ROOT."com.fastspot.2.events*events/edit/".$event["id"]."/";
	}

	$cms->setHeadContext("btx_events_events", $event["id"], $event["title"], $event["blurb"], $event["image"] ? BigTree::prefixFile($event["image"], "wide-med-"), "event");
	
	$page_header = $event["title"];
	$in_content_callouts = $event["in_content_callouts"];
	$full_width_callouts = $event["full_width_callouts"];
?>
<div class="typography">
	<?=$event["content"]?>
</div>