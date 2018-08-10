<?php
	/**
	 * @global string $title
	 * @global string $intro
	 * @global array $items
	 */
?>
<section class="facts_listing">
	<div class="facts_listing_inner">
		<div class="fs-row">
			<div class="fs-cell">
				<div class="facts_listing_wrapper">
					<?php
						if (!empty($title) || !empty($intro)) {
					?>
					<header class="facts_listing_header">
						<?php
							if (!empty($title)) {
						?>
						<h2 class="facts_listing_title"><?=$title?></h2>
						<?php
							}

							if (!empty($intro)) {
						?>
						<div class="facts_listing_intro">
							<p><?=nl2br($intro)?></p>
						</div>
						<?php
							}
						?>
					</header>
					<?php
						}
					?>
					<div class="facts_listing_body">
						<ul class="facts_list">
							<?php
								foreach ($items as $item) {
							?>
							<li class="facts_item<?php if (!empty($item["theme"])) { echo " theme_".$item["theme"]; } ?>">
								<div class="facts_item_inner">
									<?php
										if (!empty($item["image"])) {
									?>
									<div class="facts_item_media">
										<figure class="facts_item_figure">
											<img class="facts_item_image" src="<?=$item["image"]?>" alt="">
										</figure>
									</div>
									<?php
										}

										if (!empty($item["figure"])) {
									?>
									<div class="facts_item_stat"><?=$item["figure"]?></div>
									<?php
										}

										if (!empty($item["title"])) {
									?>
									<div class="facts_item_title"><?=$item["title"]?></div>
									<?php
										}

										if (!empty($item["description"])) {
									?>
									<div class="facts_item_description">
										<p><?=$item["description"]?></p>
									</div>
									<?php
										}
									?>
								</div>
							</li>
							<?php
								}
							?>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>