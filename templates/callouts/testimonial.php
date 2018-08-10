<?php
	/**
	 * @global string $name
	 * @global string $title
	 * @global string $quote
	 * @global string $image
	 * @global string $link_title
	 * @global string $link_url
	 * @global string $link_aria
	 */
?>
<div class="testimonial_block">
	<div class="testimonial_block_inner">
		<div class="fs-row">
			<div class="fs-cell">
				<div class="testimonial_item" itemscope itemtype="http://schema.org/<?=$site["schema_type"]?>">
					<meta itemprop="name" content="<?=$site["title"]?>">
					<div class="testimonial_item_inner" itemprop="review" itemscope itemtype="http://schema.org/Review">
						<div class="testimonial_item_media">
							<figure class="testimonial_item_figure">
								<img class="testimonial_item" src="<?=BigTree::prefixFile($image, "portrait-full-xsml-")?>" alt="">
							</figure>
						</div>
						<div class="testimonial_item_wrapper">
							<div class="testimonial_item_body">
								<figure class="testimonial_item_quote">
									<blockquote class="testimonial_item_quote_text" itemprop="reviewBody">
										<p><?=nl2br($quote)?></p>
									</blockquote>
									<figcaption class="testimonial_item_quote_caption" itemprop="author" itemscope itemtype="http://schema.org/Person">
										<span class="testimonial_item_quote_name" itemprop="name"><?=$name?></span> <?php if ($title) { ?> - <span class="testimonial_item_quote_title"><?=$title?></span><?php } ?>
									</figcaption>
								</figure>
							</div>
							<footer class="testimonial_item_footer">
								<?php
									if (!empty($link_title) && !empty($link_url)) {
								?>
								<div class="testimonial_item_links">
									<a class="testimonial_item_link" <?=href($link_url)?> itemprop="url"<?php if (!empty($link_aria)) { ?> aria-label="<?=$link_aria?>"<?php } ?>>
										<span class="testimonial_item_link_label"><?=$link_title?></span>
									</a>
								</div>
								<?php
									}
								?>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>