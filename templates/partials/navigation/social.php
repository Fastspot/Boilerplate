<?php
	// Required "links" (title, url), "title"
	// Optional "modifier", "icon"
?>
<div class="social_nav<?php if (!empty($modifier)) { echo " social_nav_".$modifier; } ?>" itemscope itemtype="http://schema.org/<?=$site["schema_type"]?>">
	<link itemprop="url" href="<?=str_replace(["https://", "http://"], "//", DOMAIN)?>">

	<div class="social_nav_header">
		<h2 class="social_nav_title"><?=$title?> Navigation</h2>
	</div>

	<ul class="social_nav_list" aria-label="<?=$title?> Navigation">
		<?php
			foreach ($links as $link) {
				$service = BigTreeCMS::urlify($link["title"]);
		?>
		<li class="social_nav_item<?php if (!empty($link["modifier"])) { ?> social_nav_item_<?=$link["modifier"]?><?php } ?>">
			<a class="social_nav_link <?=$service?>" href="<?=$link["url"]?>" target="_blank" itemprop="sameAs">
				<?php
					if (!empty($icon)) {
				?>
				<span class="social_nav_icon"><?=icon($service)?></span>
				<?php
					}
				?>
				<span class="social_nav_label"><?=$link["title"]?></span>
			</a>
		</li>
		<?php
			}
		?>
	</ul>
</div>