<?php
	// Requires $site["cse_key"]
	global $site;
	
	if (empty($site["cse_key"])) {
		die("Please enter the CSE key in /custom/inc/required/config.php");
	}
?>
<div class="search_results<?php if (!empty($theme)) { ?> theme_<?=$theme?><?php } ?>">
	<div class="fs-row">
		<div class="fs-cell">
			<div class="search_results_inner">
				<script>
					(function() {
						var cx = '<?=$site["cse_key"]?>';
						var gcse = document.createElement('script');
						gcse.type = 'text/javascript';
						gcse.async = true;
						gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
						var s = document.getElementsByTagName('script')[0];
						s.parentNode.insertBefore(gcse, s);
					})();
				</script>
				<div class="gcse-search"></div>
				<noscript>
					<div class="typography">
						<p>The site search requires a JavaScript enabled browser. You can also search the site using <a href="//www.google.com/#q=site:<?=DOMAIN?>">Google</a>.</p>
					</div>
				</noscript>
			</div>
		</div>
	</div>
</div>