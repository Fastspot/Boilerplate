<?php
	include "_header.php";
?>

<div class="page_feature">
	<?php
		if (!empty($page_feature) && is_array($page_feature) && not_empty_callout($page_feature)) {
			foreach ($page_feature as $callout) {
				BTXReusableCallouts::check($callout);
				$callout["_context"] = "feature";
				include_with(SERVER_ROOT."templates/callouts/".$callout["type"].".php", $callout);
			}
		}
	?>
</div>

<div class="page_content">
	<div class="fs-row">
		<div class="fs-cell-right fs-lg-4 page_aside page_sub_nav">
			<?php
				include_with("navigation/sub.php", [
					"title" => "",
					"depth" => 2
				]);
			?>
		</div>

		<div class="fs-cell fs-lg-8 page_main_content" id="page_main_content" tabindex="-1">
			<?php
				if (defined("PAGE_HEADER")) {
					include PAGE_HEADER;
				} else {
			?>
			<div class="page_header">
				<?php
					include_with("navigation/breadcrumb.php");

					if ($page_header) {
				?>
				<h1 class="page_title"><?=$page_header?></h1>
				<?php
					}

					if ($page_intro) {
				?>
				<p class="page_intro"><?=nl2br($page_intro)?></p>
				<?php
					}
				?>
			</div>
			<?php
				}

				echo $bigtree["content"];

				if (!empty($in_content_callouts) && is_array($in_content_callouts)) {
			?>
			<div class="in_content_callouts">
				<?php
					foreach ($in_content_callouts as $callout) {
						BTXReusableCallouts::check($callout);
						$callout["_context"] = "in_content";
						include_with(SERVER_ROOT."templates/callouts/".$callout["type"].".php", $callout);
					}
				?>
			</div>
			<?php
				}
			?>
		</div>

		<div class="fs-cell-right fs-lg-4 page_aside page_sidebar">
			<?php
				if (!empty($sidebar_callouts) && is_array($sidebar_callouts)) {
					foreach ($sidebar_callouts as $callout) {
						BTXReusableCallouts::check($callout);
						$callout["_context"] = "sidebar";
						include_with(SERVER_ROOT."templates/callouts/".$callout["type"].".php", $callout);
					}
				}
			?>
		</div>
	</div>

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