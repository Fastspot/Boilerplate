<?php
	// Required "links" (title + url, optional: modifier, icon, children), "class"
	// Optional "modifier", "icon", "title", "heading"
?>
<nav class="<?=$class?><?php if (!empty($modifier)) { echo " ".$class."_".$modifier; } ?>"<?php if (!empty($title) && empty($heading)) { ?> aria-label="<?=$title?>"<?php } ?> itemscope itemtype="http://schema.org/SiteNavigationElement">
	<?php
		if (!empty($heading) && !empty($title)) {
	?>
	<header class="<?=$class?>_header">
		<h2 class="<?=$class?>_title"><?=$title?></h2>
	</header>
	<?php
		}
	?>
	<ul class="<?=$class?>_list">
		<?php
			foreach ($links as $link) {
		?>
		<li class="<?=$class?>_item<?php if (!empty($link["modifier"])) { echo " ".$link["modifier"]; } ?><?php if (is_array($link["children"]) && count($link["children"])) { echo " ".$class."_item_has_children"; } ?>">
			<a class="<?=$class?>_link<?php if ($link["icon"]) { echo " ".$link["icon"]; } ?>" <?=href($link["url"])?> itemprop="url">
				<?php
					if ($link["icon"]) {
				?>
				<span class="<?=$class?>_link_icon">
					<?=icon($link["icon"])?>
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
					<a class="<?=$class?>_child_link" href="{% if child.href %}{{child.href}}{% else %}#{% endif %}" itemprop="url">
						<span class="<?=$class?>_child_link_label" itemprop="name">{% if child.name %}{{child.name}}{% elseif child %}{{child}}{% endif %}</span>
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