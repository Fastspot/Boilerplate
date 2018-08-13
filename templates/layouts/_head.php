<?php
	/**
	 * @global array $bigtree
	 * @global array $site
	 */

	if (!$bigtree["config"]["debug"] && empty($site["tag_manager_id"])) {
		die("Please enter a Google Tag Manager ID before launching the site.");
	}
?>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="mobile-web-app-capable" content="yes">

	<link rel="shortcut icon" href="<?=STATIC_ROOT?>siena_favicon.png">
	<meta name="theme-color" content="#1B4932">

	<?php BigTreeCMS::drawHeadTags($site["title"]); ?>

	<!-- Insert Fonts Here -->
	<link rel="stylesheet" href="<?=STATIC_ROOT?>css/site.css?<?=filemtime(SITE_ROOT."css/site.css")?>">

	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','<?=$site["tag_manager_id"]?>');</script>
	<!-- End Google Tag Manager -->
</head>