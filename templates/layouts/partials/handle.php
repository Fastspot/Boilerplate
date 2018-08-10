<?php
	// Requires "class", "modifier"
	// Optional "icon"

	$handle_classes = [
		"js-swap",
		"js-".str_replace("_", "-", $class)."-handle",
		$class."_handle",
		$class."_handle_".$modifier
	];
?>
<a class="<?=implode(" ", $handle_classes)?>" href="#<?=$class?>" data-swap-target=".<?=$class?>" data-swap-linked="<?=$class?>">
	<?php
		if (!empty($icon)) {
	?>
	<span class="<?=$class?>_handle_icon <?=$class?>_handle_icon_<?=$modifier?>" aria-hidden="true"><?=icon($icon)?></span>
	<?php
		}
	?>
	<span class="<?=$class?>_handle_label <?=$class?>_handle_label_<?=$modifier?>"><?=$label?></span>
</a>