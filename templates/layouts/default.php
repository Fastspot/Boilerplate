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
	<div class="fs-row">
		<div class="fs-cell-right fs-lg-4 aside_wrapper subnav_wrapper">
			<?php
				include_with("partials/navigation/sub.php", [
					"title" => "",
					"depth" => 2
				]);
			?>
		</div>

		<div class="fs-cell fs-lg-8 content_wrapper">
			<main class="main_content" id="main_content" itemprop="mainContentOfPage">
				<?php
					if (defined("PAGE_HEADER")) {
						include PAGE_HEADER;
					} else {
				?>
				<div class="page_header">
					<?php
						include_with("partials/navigation/breadcrumb.php");

						if ($page_header) {
					?>
					<h1 class="page_title"><?=$page_header?></h1>
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
			</main>
		</div>

		<div class="fs-cell-right fs-lg-4 aside_wrapper sidebar_wrapper">
			<div class="sidebar" itemscope itemtype="http://schema.org/WPSideBar">
				<?php
					if (!empty($sidebar_callouts) && is_array($sidebar_callouts)) {
						foreach ($sidebar as $callout) {
							BTXReusableCallouts::check($callout);
							$callout["_context"] = "sidebar";
							include_with(SERVER_ROOT."templates/callouts/".$callout["type"].".php", $callout);
						}
					}
				?>
			</div>
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