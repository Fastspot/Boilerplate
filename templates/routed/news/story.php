<?php
	/**
	 * @global array $bigtree
	 * @global BTXNews $newsMod
	 * @global BigTreeCMS $cms
	 */

	// Preview may have already loaded it
	if (empty($news)) {
		$news = $newsMod->getByRoute($bigtree["commands"][0]);

		if (!$news || count($bigtree["commands"]) > 1) {
			$cms->catch404();
		}

		$bigtree["bar_edit_link"] = ADMIN_ROOT."news/edit/".$news["id"]."/";
	}

	$cms->setHeadContext("btx_news", $news["id"], $news["title"], $news["blurb"], $news["image"] ? BigTree::prefixFile($news["image"], "wide-med-"), "article");
	
	$page_header = $news["title"];
	$in_content_callouts = $news["in_content_callouts"];
	$full_width_callouts = $news["full_width_callouts"];
?>
<div class="typography">
	<?=$news["content"]?>
</div>