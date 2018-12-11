<?php
	/**
	 * @global string $theme
	 * @global string $title
	 * @global string $icon
	 * @global array $links
	 */
?>
<div class="link_list<?php if (!empty($theme)) { echo " theme_".$theme; } ?>" itemscope itemtype="http://schema.org/ItemList">
	<div class="link_list_inner">
		<?php
			if (!empty($title)) {
		?>
		<header class="link_list_header">
			<h2 class="link_list_title" itemprop="name">
				<?php
					if (!empty($icon)) {
				?>
				<span class="link_list_title_icon"><?=icon($icon)?></span>
				<?php
					}
				?>
				<span class="link_list_title_label"><?=$title?></span>
			</h2>
		</header>
		<?php
			}
		?>
		<div class="link_list_body">
			<ul class="link_list_items"<?php if (!empty($title)) { ?> aria-label="<?=$title?>"<?php } ?>>
				<?php
					foreach ($links as $link) {
				?>
				<li class="link_list_item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
					<a class="link_list_link" <?=href($link["url"])?> itemprop="url"<?php if (!empty($link["aria"])) { ?> aria-label="<?=$link["aria"]?>"<?php } ?>>
						<span class="link_list_link_label" itemprop="name"><?=$link["title"]?></span>
						<?php
							if (!empty($link["icon"])) {
						?>
						<span class="link_list_link_icon" aria-hidden="true"><?=icon($link["icon"])?></span>
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
</div>