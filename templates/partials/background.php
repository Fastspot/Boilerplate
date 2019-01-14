<?php
	// Required "sources" (array of breakpoints and image prefixes), "image", "class"
	// Optional "loop", "mute", "embedRatio"

	$bg_class = $customClass ?: "js-background";
	$bg_options = [];

	foreach ($sources as $breakpoint => $prefix) {
		$source_array[$breakpoint] = BigTree::prefixFile($image, $prefix);
	}

	$bg_options["source"] = $source_array;

	if (isset($loop) && $loop === false) {
		$bg_options["loop"] = false;
	}

	if (isset($mute) && $mute === false) {
		$bg_options["mute"] = false;
	}

	if (!empty($embedRatio)) {
		$bg_options["embedRatio"] = $embedRatio;
	}

	$bg_options["lazy"] = true;
?>
<div class="<?=$bg_class?> <?=$class?>_background" data-background-options="<?=htmlspecialchars(json_encode($bg_options))?>" aria-hidden="true"></div>