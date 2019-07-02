<?php
	// Required "class", "image", "sources" (an array of breakpoint and prefixes, if no "fallback" value, last entry will be used as fallback image)
	// Optional "fallback"

	if (!$fallback) {
		$fallback = array_pop($sources);
	}
?>
<div class="lazy_image_wrapper <?=$class?>_picture_wrapper">
	<picture class="<?=$class?>_picture">
		<?php
			foreach ($sources as $key => $value) {
		?>
		<source media="(min-width: <?=$key?>)" srcset="<?=BigTree::prefixFile($image, $value)?>">
		<?php
			}
		?>
		<img class="js-lazy js-lazyload <?=$class?>_image" src="<?=BigTree::prefixFile($image, $fallback)?>" alt="">
	</picture>
</div>

<noscript>
	<picture class="<?=$class?>_picture">
		<?php
			foreach ($sources as $key => $value) {
		?>
		<source media="(min-width: <?=$key?>)" srcset="<?=BigTree::prefixFile($image, $value)?>">
		<?php
			}
		?>
		<img class="<?=$class?>_image" src="<?=BigTree::prefixFile($image, $fallback)?>" alt="">
	</picture>
</noscript>