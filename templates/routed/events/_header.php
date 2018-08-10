<?php
	$event = null;
	$eventsMod = new BTXEvents;
	$page_link = BigTreeCMS::getLink($bigtree["page"]["id"]);

	define("PAGE_LAYOUT", "full");
	$bigtree["layout"] = "full";
	