<?php
	/**
	 * @global array $bigtree
	 * @global BTXNews $newsMod
	 */

	$admin = new BigTreeAdmin;

	if (!$admin->ID) {
		header("X-Robots-Tag: noindex");
		die("You must login to preview news.");
	}

	$item = BigTreeAutoModule::getPendingItem("btx_news", $bigtree["commands"][0]);

	if (empty($item["item"])) {
		$cms->catch404();
	}

	$news = $item["item"];

	if (is_array($item["mtm"]) && count($item["mtm"])) {
		$news["categories"] = [];

		foreach ($item["mtm"] as $mtm) {
			if ($mtm["table"] == "btx_news_categories_rel" && is_array($mtm["data"])) {
				foreach ($mtm["data"] as $mtm_entry) {
					$category = SQL::fetch("SELECT * FROM btx_news_categories WHERE id = ?", $mtm_entry);

					if ($category) {
						$news["categories"][] = $category;
					}
				}
			}
		}
	} elseif ($item["status"] == "published") {
		$news = $newsMod->get($news);
	}

	$bigtree["bar_edit_link"] = ADMIN_ROOT."news/edit/".htmlspecialchars($bigtree["commands"][0])."/";
	
	include "story.php";
