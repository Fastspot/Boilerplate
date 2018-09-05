<?php
	include "_header.php";
?>

<div class="page_content">
	<main class="full_width_callouts" id="page_main_content" itemprop="mainContentOfPage">
		<?php
			if (!empty($page_feature) && is_array($page_feature)) {
				foreach ($page_feature as $callout) {
					BTXReusableCallouts::check($callout);
					$callout["_context"] = "full_width";
					include_with(SERVER_ROOT."templates/callouts/".$callout["type"].".php", $callout);
				}
			}

			if (!empty($full_width_callouts) && is_array($full_width_callouts)) {
				foreach ($full_width_callouts as $callout) {
					BTXReusableCallouts::check($callout);
					$callout["_context"] = "full_width";
					include_with(SERVER_ROOT."templates/callouts/".$callout["type"].".php", $callout);
				}
			}
		?>
	</main>
</div>

<?php
	include "_footer.php";
?>