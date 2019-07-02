<?php
	// Requires "class", "image"
	// Optional "itemprop", "alt"
?>
<div class="lazy_image_wrapper <?=$class?>_image_wrapper">
	<img class="js-lazy js-lazyload <?=$class?>_image" data-src="<?=$image?>" alt="<?=BigTree::safeEncode($alt)?>"<?php if (!empty($itemprop)) { ?> itemprop="<?=BigTree::safeEncode($itemprop)?>"<?php } ?>>
</div>
<noscript>
	<img class="<?=$class?>_image" src="<?=$image?>" alt="<?=BigTree::safeEncode($alt)?>"<?php if (!empty($itemprop)) { ?> itemprop="<?=BigTree::safeEncode($itemprop)?>"<?php } ?>>
</noscript>