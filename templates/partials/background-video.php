<?php
	// Required "poster", "video", "class"
	// Optional "customClass", "loop", "mute", "embedRatio", "lazy", "lazyEdge"

	$bg_class = $customClass ?: "js-background";
	$bg_options = [
		"source" => [
			"poster" => $poster,
			"mp4" => $video
		]
	];

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
<div class="<?=$bg_class?> <?=$class?>_background" data-background-options="<?=htmlspecialchars(json_encode($bg_options))?>" aria-hidden="true"></div>