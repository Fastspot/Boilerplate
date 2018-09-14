<?php
	// This is a multiple topic rows, if the site uses multiple rows, delete "Topic Row" component

	/**
	 * @global string $theme
	 * @global string $title
	 * @global array $rows
	 */
?>
<div class="topic_block<?php if (!empty($theme)) { echo " theme_".$theme; } ?>">
	<?php
		if (!empty($title)) {
	?>
	<header class="topic_block_header">
		<h2 class="topic_block_title"><?=$title?></h2>
	</header>
	<?php
		}
	?>
	<div class="topic">
		<?php
			foreach ($rows as $row) {
		?>
		<article class="topic">
			<div class="topic_inner">
				<?php
					if (!empty($row["image"])) {
				?>
				<div class="topic_media">
					<figure class="topic_figure">
						<img class="topic_image" src="<?=BigTree::prefixFile($row["image"], "square-xsml-")?>" alt="">
					</figure>
				</div>
				<?php
					}
				?>
				<div class="topic_wrapper">
					<header class="topic_header">
						<h3 class="topic_title"><?=$row["title"]?></h3>
					</header>
					<div class="topic_body">
						<div class="topic_description">
							<?=strip_tags($row["description"], "<strong><em><br><p>")?>
						</div>
					</div>
					<?php
						if (is_array($row["links"]) && count($row["links"])) {
					?>
					<footer class="topic_links">
						<?php
							foreach ($row["links"] as $link) {
								button("topic", $link["title"], $link["url"], "chevron_right", $link["aria"]);
							}
						?>
					</footer>
					<?php
						}
					?>
				</div>
			</div>
		</article>
		<?php
			}
		?>
	</div>
</div>