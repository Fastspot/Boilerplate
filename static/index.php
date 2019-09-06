<?php
	clearstatcache();

	$root = str_replace("/static/index.php", "", __FILE__);
	$file = $_GET["static"];
	$pieces = array_filter(explode(DIRECTORY_SEPARATOR, $file), function ($val) {
		// Let empties through
		if (!trim($val)) {
			return true;
		}

		// Strip path manipulation
		if (trim(str_replace(".", "", $val)) === "") {
			return false;
		}

		return true;
	});

	if (!empty($file)) {
		$file = implode(DIRECTORY_SEPARATOR, $pieces);
	} else {
		$file = "index.html";
	}

	$contents = file_get_contents($root."/static-html/".$file);
	$contents = str_replace("site.css", "site.css?".filemtime($root."/css/site.css"), $contents);
	$contents = str_replace("site.js", "site.js?".filemtime($root."/js/site.js"), $contents);

	echo $contents;
