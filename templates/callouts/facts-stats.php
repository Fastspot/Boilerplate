<?php
	/**
	 * @global string $title
	 * @global string $intro
	 * @global array $items
	 */
?>
<section class="facts_listing">
	<div class="fs-row">
		<div class="fs-cell">
			<div class="facts_listing_inner">
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
					<ul class="facts">
						<?php
							foreach ($items as $item) {
						?>
						<li class="fact<?php if (!empty($item["theme"])) { echo " theme_".$item["theme"]; } ?>">
							<div class="fact_inner">
								<?php
									if (!empty($item["image"])) {
								?>
								<div class="fact_media">
									<figure class="fact_figure">
										<img class="fact_image" src="<?=$item["image"]?>" alt="">
									</figure>
								</div>
								<?php
									}

									if (!empty($item["figure"])) {
								?>
								<div class="fact_stat"><?=$item["figure"]?></div>
								<?php
									}

									if (!empty($item["title"])) {
								?>
								<div class="fact_title"><?=$item["title"]?></div>
								<?php
									}

									if (!empty($item["description"])) {
								?>
								<div class="fact_description">
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
</section>