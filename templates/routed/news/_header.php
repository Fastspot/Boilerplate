<?php
	$news = null;
	$newsMod = new BTXNews;
	$categoryMod = new BTXNewsCategories;
	$page_link = BigTreeCMS::getLink($bigtree["page"]["id"]);

	define("PAGE_LAYOUT", "full");
	$bigtree["layout"] = "full";
	