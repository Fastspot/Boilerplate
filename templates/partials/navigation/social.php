<?php
	// Required "links" (title, url)
	// Optional "modifier", "title", "icon"
?>
<div class="social_nav<?php if (!empty($modifier)) { echo " social_nav_".$modifier; } ?>" itemscope itemtype="http://schema.org/<?=$site["schema_type"]?>">
	<link itemprop="url" href="<?=str_replace(["https://", "http://"], "//", DOMAIN)?>">
	<?php
		if (!empty($title)) {
	?>
	<div class="social_nav_header">
		<h2 class="social_nav_title"><?=$title?></h2>
	</div>
	<?php
		}
	?>
	<div class="social_nav_list">
		<?php
			foreach ($links as $link) {
				$service = BigTreeCMS::urlify($link["title"]);
		?>
		<div class="social_nav_item">
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
		</div>
		<?php
			}
		?>
	</div>
</div>