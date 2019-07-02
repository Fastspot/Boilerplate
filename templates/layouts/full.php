<?php
	include "_header.php";
?>

<div class="page_feature">
	<?php
		if (!empty($page_feature) && is_array($page_feature)) {
			foreach ($page_feature as $callout) {
				BTXReusableCallouts::check($callout);
				$callout["_context"] = "feature";
				include_with(SERVER_ROOT."templates/callouts/".$callout["type"].".php", $callout);
			}
		}
	?>
</div>

<div class="page_content">
	<div class="full_width_callouts">
		<?php
			if (!empty($full_width_callouts) && is_array($full_width_callouts)) {
				foreach ($full_width_callouts as $callout) {
					BTXReusableCallouts::check($callout);
					$callout["_context"] = "full_width";
					include_with(SERVER_ROOT."templates/callouts/".$callout["type"].".php", $callout);
				}
			}
		?>
	</div>
</div>

<?php
	include "_footer.php";
?>