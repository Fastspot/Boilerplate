<?php
	/**
	 * @global string $theme
	 * @global string $title
	 * @global string $icon
	 * @global array $links
	 */
?>
<div class="linked_list<?php if (!empty($theme)) { echo " theme_".$theme; } ?>" itemscope itemtype="http://schema.org/ItemList">
	<?php
		if (!empty($title)) {
	?>
	<header class="linked_list_header">
		<h2 class="linked_list_title" itemprop="name">
			<?php
				if (!empty($icon)) {
			?>
			<span class="linked_list_title_icon"><?=icon($icon)?></span>
			<?php
				}
			?>
			<span class="linked_list_title_label"><?=$title?></span>
		</h2>
	</header>
	<?php
		}
	?>
	<div class="linked_list_body">
		<ul class="linked_list_items">
			<?php
				foreach ($links as $link) {
			?>
			<li class="linked_list_item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
				<a class="linked_list_link" <?=href($link["url"])?> itemprop="url"<?php if (!empty($link["aria"])) { ?> aria-label="<?=$link["aria"]?>"<?php } ?>>
					<span class="linked_list_label" itemprop="name"><?=$link["title"]?></span>
					<?php
						if (!empty($link["icon"])) {
					?>
					<span class="linked_list_icon" aria-hidden="true"><?=icon($link["icon"])?></span>
					<?php
						}
					?>
				</a>
			</li>
			<?php
				}
			?>
		</ul>
	</div>
</div>