<?php
	// Optional "modifier", "icon"

	if (empty($site["breadcrumbs"])) {
		if (defined("IS_404")) {
			$site["breadcrumbs"] = array(array("title" => "404 Error"));
		} else {
			$site["breadcrumbs"] = BigTreeCMS::getBreadcrumb();
		}
	}
?>
<div class="breadcrumb_nav<?php if ($modifier) { ?> breadcrumb_nav_<?=$modifier?><?php } ?>">
	<div class="breadcrumb_list" itemscope itemtype="http://schema.org/BreadcrumbList">
		<div class="breadcrumb_item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
			<a class="breadcrumb_pill breadcrumb_pill_link" itemprop="item" href="<?=WWW_ROOT?>">
				<span class="breadcrumb_name" itemprop="name">
					<?php
						if (!empty($icon)) {
					?>
					<span class="breadcrumb_name_icon"><?=icon("home")?></span>
					<?php
						}
					?>
					<span class="breadcrumb_name_label">Home</span>
				</span>
			</a>
			<meta itemprop="position" content="1">
		</div>
		<?php
			$x = 1;
			$max = count($site["breadcrumbs"]);

			if (defined("CUSTOM_BREADCRUMB")) {
		?>
		<div class="breadcrumb_item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
			<span class="breadcrumb_pill" itemprop="item">
				<span class="breadcrumb_name">
					<span class="breadcrumb_name_label" itemprop="name"><?=CUSTOM_BREADCRUMB?></span>
				</span>
			</span>
			<meta itemprop="position" content="2">
		</div>
		<?php
			} else {
				foreach ($site["breadcrumbs"] as $item) {
					$x++;
		?>
		<div class="breadcrumb_item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
			<?php
					if ($x == $max) {
			?>
			<span class="breadcrumb_name" itemprop="item">
				<span class="breadcrumb_name_label" itemprop="name"><?=$item["title"]?></span>
			</span>
			<?php
					} else {
			?>
			<a class="breadcrumb_pill breadcrumb_pill_link" itemprop="item" href="<?=$item["link"]?>">
				<span class="breadcrumb_name" itemprop="name">
					<span class="breadcrumb_name_label"><?=$item["title"]?></span>
				</span>
			</a>
			<?php
					}
			?>
			<meta itemprop="position" content="<?=$x?>">
		</div>
		<?php
				}
			}
		?>
	</div>
</div>