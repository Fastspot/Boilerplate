<?php
	/**
	 * @global string $theme
	 * @global string $title
	 * @global array $items
	 */
?>
<div class="js-gallery gallery<?php if (!empty($theme)) { echo " theme_".$theme; } ?>">
	<?php
		if (!empty($title)) {
	?>
	<header class="gallery_header">
		<h2 class="gallery_title"><?=$title?></h2>
	</header>
	<?php
		}
	?>
	<div class="gallery_body">
		<div class="js-gallery-counter gallery_counter"></div>
		<div class="js-carousel gallery_items" data-carousel-options='{"theme": "base_pagination", "contained": false}' itemscope itemtype="http://schema.org/ImageGallery">
			<?php
				$count = count($items);
				$x = 0;

				foreach ($items as $item) {
					$x++;
			?>
			<div class="gallery_item<?php if (empty($item["info"]["caption"])) { ?> gallery_item_no_caption<?php } ?> <?php if (!empty($item["video"]["id"])) { ?>gallery_item_video<?php } else { ?>gallery_item_image<?php } ?>">
				<div class="gallery_count">
					<span class="media_count_number"><?php if ($count > 9 && $x < 10) { echo "0"; } ?><?=$x?></span>
					<span class="media_count_label">of</span>
					<span class="media_count_number"><?=$count?></span>
				</div>
				<figure class="gallery_item_figure" role="group"<?php if (!empty($item["info"]["caption"])) { ?> aria-label="<?=strip_tags($item["info"]["caption"])?>"<?php } ?> itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
					<span class="gallery_item_media">
						<?php
							if (!empty($item["video"]["id"])) {
						?>
						<a class="js-lightbox gallery_item_link" href="<?=get_gallery_link($item)?>" title="<?=strip_tags($item["info"]["caption"])?>" itemprop="contentUrl">
							<img class="gallery_item_image" src="<?=BigTree::prefixFile($item["image"], "wide-med-")?>" alt="">
							<span class="gallery_item_play">
								<span class="gallery_item_play_icon"><?=icon("play")?></span>
								<span class="gallery_item_play_label">Play</span>
							</span>
						</a>
						<?php
							} else {
						?>
						<img class="gallery_item_image" src="<?=BigTree::prefixFile($item["image"], "wide-med-")?>" alt="">		
						<?php
							}
						?>
					</span>
					<?php
						if (!empty($item["info"]["caption"])) {
					?>
					<figcaption class="gallery_item_figcaption" itemprop="caption description">
						<p><?=strip_tags($item["info"]["caption"], "<strong><em>")?></p>
					</figcaption>
					<?php
						}
					?>
				</figure>
			</div>
			<?php
				}
			?>
		</div>
	</div>
</div>