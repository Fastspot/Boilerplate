<?php
	/**
	 * @global string $theme
	 * @global string $title
	 * @global string $label
	 * @global string $description
	 * @global string $image
	 * @global array $links
	 */
?>
<div class="flex_callout<?php if (!empty($theme)) { echo " theme_".$theme; } ?>">
	<?php
		include_with("background.php", [
			"class" => "flex_callout",
			"image" => $image,
			"sources" => [
				"0px" => "wide-med-",
				"980px" => "wide-lrg-"
			]
		]);
	?>
	<div class="fs-row">
		<div class="fs-cell">
			<div class="flex_callout_inner">
				<header class="flex_callout_header">
					<h2 class="flex_callout_title"><?=$title?></h2>
					<?php
						if (!empty($label)) {
					?>
					<span class="flex_callout_label"><?=$label?></span>
					<?php
						}
					?>
				</header>
				<div class="flex_callout_body">
					<div class="flex_callout_description">
						<p><?=nl2br($description)?></p>
					</div>
				</div>
				<?php
					if (is_array($links) && count($links)) {
				?>
				<footer class="flex_callout_links">
					<?php
						foreach ($links as $link) {
							button("flex_callout", $link["title"], $link["url"], "", $link["aria"]);
						}
					?>
				</footer>
				<?php
					}
				?>
			</div>
		</div>
	</div>
</div>