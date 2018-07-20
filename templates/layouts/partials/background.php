<?php
	// Required "source" (array of breakpoints and image prefixes), "image", "class"
	// Optional "loop", "mute", "embedRatio", "lazy", "lazyEdge"

	$bg_class = $customClass ?: "js-background";
	$bg_options = [];

	foreach ($sources as $breakpoint => $prefix) {
		$source_array[$breakpoint] = BigTree::prefixFile($image, $prefix);
	}

	$bg_options["source"] = $bg_options;

	if (isset($loop) && $loop === false) {
		$bg_options["loop"] = false;
	}

	if (isset($mute) && $mute === false) {
		$bg_options["mute"] = false;
	}

	if (!empty($embedRatio)) {
		$bg_options["embedRatio"] = $embedRatio;
	}

	if (!empty($lazy)) {
		$bg_options["lazy"] = true;
	}

	if (!empty($lazyEdge)) {
		$bg_options["lazyEdge"] = $lazyEdge;
	}
?>
<div class="<?=$bg_class?> <?=$class?>_background" data-background-options="<?=htmlspecialchars(json_encode($bg_options))?>"></div>