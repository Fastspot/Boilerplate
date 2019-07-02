<?php
	// Optional "modifier", "icon"
	
	$current_url = WWW_ROOT.ltrim($_SERVER["REQUEST_URI"], "/");

	if (empty($site["main_nav"])) {
		$site["main_nav"] = BigTreeCMS::getNavByParent(0, 2);
	}
?>
<nav class="js-main-nav main_nav<?php if (!empty($modifier)) { ?> js-main-nav-<?=$modifier?> main_nav_<?=$modifier?><?php } ?> nav" aria-label="Site" itemscope itemtype="http://schema.org/SiteNavigationElement">
	<div class="main_nav_header nav_header">
		<h2 class="main_nav_title nav_title">Site Navigation</h2>
	</div>
	<ul class="main_nav_list nav_list" aria-label="Site Navigation">
		<?php
			$x = 0;

			foreach ($site["main_nav"] as $item) {
				$x++;
				$active = (strpos($current_url, $item["link"]) !== false);
				$has_children = (is_array($item["children"]) && count($item["children"]));
		?>
		<li class="js-main-nav-item-<?=$x?> main_nav_item<?php if ($has_children) { ?> main_nav_item_has_children<?php } if ($active) { ?> active<?php } ?> nav_item">
			<div class="main_nav_item_wrapper nav_item_wrapper">
				<a class="main_nav_link nav_link" href="<?=$item["link"]?>"<?php if ($item["new_window"]) { ?> target="_blank"<?php } ?> itemprop="url"<?php if ($has_children) { ?> aria-haspopup="true"<?php } if ($active) { ?> aria-current="page"<?php } ?>>
					<span class="main_nav_link_label nav_link_label" itemprop="name"><?=$item["title"]?></span>
				</a>
				<?php
					if ($has_children && !empty($icon)) {
				?>
				<button class="js-swap js-main-nav-toggle main_nav_toggle nav_toggle" data-swap-target=".js-main-nav-item-<?=$x?>" data-swap-group="main_nav" aria-label="<?=$item["title"]?> Submenu">
					<span class="main_nav_toggle_icon nav_toggle_icon"><?=icon($icon)?></span>
				</button>
				<?php
					}
				?>
			</div>
			<?php
				if ($has_children) {
			?>
			<ul class="js-main-nav-children main_nav_children nav_children" aria-label="submenu">
				<?php
					foreach ($item["children"] as $child) {
				?>
				<li class="main_nav_child_item nav_child_item">
					<a class="main_nav_child_link nav_child_link" href="<?=$child["link"]?>"<?php if ($child["new_window"]) { ?> target="_blank"<?php } ?> itemprop="url">
						<span class="main_nav_child_link_label nav_child_link_label" itemprop="name"><?=$child["title"]?></span>
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