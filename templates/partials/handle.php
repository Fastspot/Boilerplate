<?php
	// Requires "class"
	// Optional "icon", "modifier"

	$handle_classes = [
		"js-swap",
		"js-".str_replace("_", "-", $class)."-handle",
		$class."_handle",
	];

	if (!empty($modifier)) {
		$handle_classes[] = $class."_handle_".$modifier;
	}
?>
<a class="<?=implode(" ", $handle_classes)?>" href="#<?=$class?>" data-swap-target=".<?=$class?>" data-swap-linked="<?=$class?>">
	<?php
		if (!empty($icon)) {
	?>
	<span class="<?=$class?>_handle_icon<?php if (!empty($modifier)) { echo " ".$class."_handle_icon_".$modifier; } ?>" aria-hidden="true"><?=icon($icon)?></span>
	<?php
		}
	?>
	<span class="<?=$class?>_handle_label<?php if (!empty($modifier)) { echo " ".$class."_handle_label_".$modifier; } ?>"><?=$label?></span>
</a>