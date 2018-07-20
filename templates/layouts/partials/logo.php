<?php
	// Optional "modifier", "icon", "header", "print"

	$logo_classes = [
		"logo"
	];

	if (!empty($modifier)) {
		$logo_classes[] = "logo_".$modifier;
	}

	if (!empty($icon)) {
		$logo_classes[] = "logo_icon";
	}

	if (!empty($header)) {
?>
<h1 class="<?=implode(" ", $logo_classes)?>" itemscope itemtype="http://schema.org/<?=$site["schema_type"]?>">
	<a class="logo_link" itemprop="url" href="<?=WWW_ROOT?>">
		<span class="logo_link_label"><?=$site["title"]?></span>
		<?php
			if (!empty($icon)) {
		?>
		<span class="logo_link_icon"><?=icon($icon)?></span>
		<?php
			}
		?>
	</a>
	<meta content="<?=STATIC_ROOT?>images/logo-schema.png" itemprop="logo">
	<?php
		if (!empty($print)) {
	?>
	<img class="logo_print" src="<?=STATIC_ROOT?>images/logo-print.png" alt="">
	<?php
		}
	?>
</h1>
<?php
	} else {
?>
<div class="<?=implode(" ", $logo_classes)?>" itemscope itemtype="http://schema.org/<?=$site["schema_type"]?>">
	<a class="logo_link" itemprop="url" href="<?=WWW_ROOT?>">
		<span class="logo_link_label"><?=$site["title"]?></span>
		<?php
			if (!empty($icon)) {
		?>
		<span class="logo_link_icon"><?=icon($icon)?></span>
		<?php
			}
		?>
	</a>
	<meta content="<?=STATIC_ROOT?>images/logo-schema.png" itemprop="logo">
	<?php
		if (!empty($print)) {
	?>
	<img class="logo_print" src="<?=STATIC_ROOT?>images/logo-print.png" alt="">
	<?php
		}
	?>
</div>
<?php
	}
?>