<?php
	// Required "placeholder"
	// Optional "modifier", "button_text"

	if (empty($button_text)) {
		$button_text = "Submit";
	}
?>
<div class="site_search<?php if ($modifier) { ?> site_search_<?=$modifier?><?php } ?>" id="site_search<?php if ($modifier) { echo "_".$modifier; } ?>" itemscope itemtype="http://schema.org/WebSite" role="search">
	<meta itemprop="url" content="<?=str_replace(["https://", "http://"], "//", DOMAIN)?>">
	<form class="site_search_form" method="GET" action="<?=WWW_ROOT?>search/" itemprop="potentialAction" itemscope itemtype="http://schema.org/SearchAction">
		<meta itemprop="target" content="<?=str_replace(["https://", "http://"], "//", DOMAIN)?>/search?q={q}">
		<label class="site_search_label" for="search_term_string<?php if ($modifier) { echo "_".$modifier; } ?>">Search</label>
		<input aria-live="polite" class="site_search_input" itemprop="query-input" type="text" id="search_term_string<?php if ($modifier) { echo "_".$modifier; } ?>" name="q" placeholder="<?=$placeholder?>">
		<button class="site_search_button" type="submit"<?php if (empty($button_text)) { ?> aria-label="Search"<?php } ?>>
			<?php
				if (!empty($button_text)) {
			?>
			<span class="site_search_button_label"><?=$button_text?></span>
			<?php
				}
			?>
			<span class="site_search_button_icon"><?=icon("search")?></span>
		</button>
	</form>
</div>