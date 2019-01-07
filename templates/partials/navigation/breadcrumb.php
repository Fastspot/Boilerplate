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
<nav class="breadcrumb_nav<?php if ($modifier) { ?> breadcrumb_nav_<?=$modifier?><?php } ?>" aria-label="Breadcrumb">
	<div class="breadcrumb_nav_header">
		<h2 class="breadcrumb_nav_header">You are here:</h2>
	</div>
	
	<ol class="breadcrumb_list" itemscope itemtype="http://schema.org/BreadcrumbList" aria-label="Breadcrumb Navigation">
		<li class="breadcrumb_item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
			<a class="breadcrumb_pill breadcrumb_pill_link" itemprop="item" href="<?=WWW_ROOT?>">
				<?php
					if (!empty($icon)) {
				?>
				<span class="breadcrumb_pill_icon"><?=icon("home")?></span>
				<?php
					}
				?>
				<span class="breadcrumb_pill_label" itemprop="name">Home</span>
			</a>
			<meta itemprop="position" content="1">
		</li>
		<?php
			$x = 1;
			$max = count($site["breadcrumbs"]);

			if (defined("CUSTOM_BREADCRUMB")) {
		?>
		<li class="breadcrumb_item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
			<span class="breadcrumb_pill" itemprop="item">
				<span class="breadcrumb_pill_label" itemprop="name"><?=CUSTOM_BREADCRUMB?></span>
			</span>
			<meta itemprop="position" content="2">
		</li>
		<?php
			} else {
				foreach ($site["breadcrumbs"] as $item) {
					$x++;

					if ($x == $max) {
		?>
		<li class="breadcrumb_item">
			<span class="breadcrumb_name">
				<span class="breadcrumb_name_label"><?=$item["title"]?></span>
			</span>
		</li>
		<?php
					} else {
		?>
		<li class="breadcrumb_item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
			<a class="breadcrumb_pill breadcrumb_pill_link" itemprop="item" href="<?=$item["link"]?>">
				<span class="breadcrumb_name" itemprop="name">
					<span class="breadcrumb_name_label"><?=$item["title"]?></span>
				</span>
			</a>
			<meta itemprop="position" content="<?=$x?>">
		</li>
		<?php
					}
				}
			}
		?>
	</ol>
</nav>