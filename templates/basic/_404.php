<?php
	global $site;
	
	$cms->setHeadContext(null, null, "404 Page Not Found", "This page could not be located.", $site["og_image_fallback"]);
	$page_header = $cms->getSetting("404-page-header");
	$page_content = $cms->getSetting("404-page-content");

	define("PAGE_LAYOUT", "full");
	$bigtree["layout"] = "full";
?>
<div class="typography">
	<?=$page_content?>
</div>

<div class="in_content_callouts">
	<?php
		include SERVER_ROOT."templates/partials/google-cse.php";
	?>
</div>