<?php
	/**
	 * @global string $thank_you_page_content
	 * @global string $thank_you_page_header
	 */

	if (!empty($settings["text_wrapper"])) {
		echo $settings["text_wrapper"];
	}

	if (empty($settings["dont_draw_page_header"])) {
		echo '<h1>'.$thank_you_page_header.'</h1>';
	} else {
		$page_header = $thank_you_page_header;
	}

	echo $thank_you_page_content;

	if (!empty($settings["text_wrapper_end"])) {
		echo $settings["text_wrapper_end"];
	}
