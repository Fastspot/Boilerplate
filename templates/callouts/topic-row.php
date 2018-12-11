<?php
	// This is a singular topic row, if the site uses single rows, delete "Topic Rows" component

	/**
	 * @global string $theme
	 * @global string $title
	 * @global string $description
	 * @global string $image
	 * @global array $links
	 */
?>
<div class="topic_block<?php if (!empty($theme)) { echo " theme_".$theme; } ?>">
	<div class="topic_block_inner">
		<div class="topics">
			<article class="topic">
				<div class="topic_inner">
					<?php
						if (!empty($image)) {
					?>
					<div class="topic_media">
						<figure class="topic_figure">
							<img class="topic_image" src="<?=BigTree::prefixFile($image, "square-xsml-")?>" alt="">
						</figure>
					</div>
					<?php
						}
					?>
					<div class="topic_wrapper">
						<header class="topic_header">
							<h2 class="topic_title"><?=$title?></h2>
						</header>
						<div class="topic_body">
							<div class="topic_description">
								<?=strip_tags($description, "<strong><em><br><p>")?>
							</div>
						</div>
						<?php
							if (is_array($links) && count($links)) {
						?>
						<footer class="topic_links">
							<?php
								foreach ($links as $link) {
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
		</div>
	</div>
</div>