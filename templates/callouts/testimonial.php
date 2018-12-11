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
	<div class="fs-row">
		<div class="fs-cell">
			<div class="testimonial_block_inner">
				<div class="testimonial" itemscope itemtype="http://schema.org/<?=$site["schema_type"]?>">
					<meta itemprop="name" content="<?=$site["title"]?>">
					<div class="testimonial_inner" itemprop="review" itemscope itemtype="http://schema.org/Review">
						<div class="testimonial_media" aria-hidden="true">
							<figure class="testimonial_figure">
								<img class="testimonial" src="<?=BigTree::prefixFile($image, "portrait-full-xsml-")?>" alt="">
							</figure>
						</div>
						<div class="testimonial_wrapper">
							<div class="testimonial_body">
								<figure class="testimonial_quote">
									<blockquote class="testimonial_quote_text" itemprop="reviewBody">
										<p><?=nl2br($quote)?></p>
									</blockquote>
									<figcaption class="testimonial_quote_caption" itemprop="author" itemscope itemtype="http://schema.org/Person">
										<span class="testimonial_quote_name" itemprop="name"><?=$name?></span> <?php if ($title) { ?> - <span class="testimonial_quote_title"><?=$title?></span><?php } ?>
									</figcaption>
								</figure>
							</div>
							<?php
								if (!empty($link_title) && !empty($link_url)) {
							?>
							<footer class="testimonial_links">
								<a class="testimonial_link" <?=href($link_url)?> itemprop="url"<?php if (!empty($link_aria)) { ?> aria-label="<?=$link_aria?>"<?php } ?>>
									<span class="testimonial_link_label"><?=$link_title?></span>
								</a>
							</footer>
							<?php
								}
							?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>