<?php
	// Required "links" (title + url, optional: modifier, children), "class", "title"
	// Optional "modifier", "icon"
?>
<nav class="<?=$class?><?php if (!empty($modifier)) { echo " ".$class."_".$modifier; } ?>" aria-label="<?=$title?>" itemscope itemtype="http://schema.org/SiteNavigationElement">
	<header class="<?=$class?>_header">
		<h2 class="<?=$class?>_title"><?=$title?> Navigation</h2>
	</header>

	<ul class="<?=$class?>_list" aria-label="<?=$title?> Navigation">
		<?php
			foreach ($links as $link) {
		?>
		<li class="<?=$class?>_item<?php if (!empty($link["modifier"])) { echo " ".$class."_item_".$link["modifier"]; } ?><?php if (is_array($link["children"]) && count($link["children"])) { echo " ".$class."_item_has_children"; } ?>">
			<a class="<?=$class?>_link<?php if ($link["icon"]) { echo " ".$link["icon"]; } ?>" <?=href($link["url"])?> itemprop="url">
				<?php
					if (!empty($icon)) {
				?>
				<span class="<?=$class?>_link_icon">
					<?=icon($icon)?>
				</span>
				<?php
					}
				?>
				<span class="<?=$class?>_link_label" itemprop="name"><?=$link["title"]?></span>
			</a>
			<?php
				if (is_array($link["children"]) && count($link["children"])) {
			?>
			<ul class="<?=$class?>_children">
				<?php
					foreach ($link["children"] as $link_child) {
				?>
				<li class="<?=$class?>_child_item<?php if (!empty($link_child["modifier"])) { echo " ".$link_child["modifier"]; } ?>">
					<a class="<?=$class?>_child_link" <?=href($link_child["url"])?> itemprop="url">
						<span class="<?=$class?>_child_link_label" itemprop="name"><?=$link_child["title"]?></span>
					</a>
				</li>
				<?php
					}
				?>
			</ul>
			<?php
				}
			?>
		</li>
		<?php
			}
		?>
	</ul>
</nav>