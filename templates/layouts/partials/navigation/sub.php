<?php
	// Optional "modifier", "heading", "title", "depth" (defaults to 2)

	$current_url = WWW_ROOT.ltrim($_SERVER["REQUEST_URI"], "/");
	set_subnav(!empty($depth) ? $depth : 2);
?>
<nav class="sub_nav<?php if (!empty($modifier)) { echo " sub_nav_".$modifier; } ?>"<?php if (empty($heading) && !empty($title)) { ?> aria-label="<?=$title?>"<?php } ?> itemscope itemtype="http://schema.org/SiteNavigationElement">
	<?php
		if (!empty($heading) && !empty($title)) {
	?>
	<div class="sub_nav_header">
		<h2 class="sub_nav_title"><?=$title?></h2>
	</div>
	<?php
		}
	?>
	<button class="js-swap js-sub-nav-handle sub_nav_handle" data-swap-options='{"maxWidth": "980px"}' data-swap-target=".sub_nav_list" data-swap-title="<?=$site["sub_nav_section"]["title"]?>">
		<span class="sub_nav_handle_label"><?=$site["sub_nav_section"]["nav_title"]?></span>
		<span class="sub_nav_handle_icon sub_nav_handle_icon_open"><?=icon("caret_down")?></span>
		<span class="sub_nav_handle_icon sub_nav_handle_icon_close"><?=icon("close")?></span>
	</button>
	<ul class="js-sub-nav-list sub_nav_list">
		<?php
			foreach ($site["sub_nav"] as $item) {
				$active = (strpos($current_url, $item["link"]) !== false);
				$has_children = ($active && is_array($item["children"]) && count($item["children"]));
		?>
		<li class="sub_nav_item<?php if ($item["id"] == $bigtree["page"]["id"]) { ?> active<?php } if ($has_children) { ?> open<?php } ?>">
			<a class="sub_nav_link" href="<?=$item["link"]?>"<?php if ($item["new_window"]) { ?> target="_blank"<?php } ?> itemprop="url">
				<span class="sub_nav_link_label" itemprop="name"><?=$item["title"]?></span>
			</a>
			<?php
				if ($has_children) {
			?>
			<ul class="sub_nav_children">
				<?php
					foreach ($item["children"] as $child) {
						$active = (strpos($current_url, $child["link"]) !== false) && (rtrim($child["link"], "/") !== DOMAIN);
						$has_children = ($active && is_array($child["children"]) && count($child["children"]));
				?>
				<li class="sub_nav_child_item<?php if ($active) { ?> active<?php } if ($has_children) { ?> open<?php } ?>">
					<a class="sub_nav_child_link" href="<?=$child["link"]?>"<?php if ($child["new_window"]) { ?> target="_blank"<?php } ?> itemprop="url">
						<span class="sub_nav_child_link_label" itemprop="name"><?=$child["title"]?></span>
					</a>
					<?php
						if ($has_children) {
					?>
					<ul class="sub_nav_grandchildren">
						<?php
							foreach ($child["children"] as $grand_child) {
								$active = (strpos($current_url, $grand_child["link"]) !== false) && (rtrim($grand_child["link"], "/") !== DOMAIN);
						?>
						<li class="sub_nav_grandchild_item<?php if ($active) { ?> active<?php } ?>">
							<a class="sub_nav_grandchild_link" href="<?=$grand_child["link"]?>"<?php if ($grand_child["new_window"]) { ?> target="_blank"<?php } ?> itemprop="url">
								<span class="sub_nav_grandchild_link_label" itemprop="name"><?=$grand_child["title"]?></span>
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
			<?php
				}
			?>
		</li>
		<?php
			}
		?>
	</ul>
</nav>