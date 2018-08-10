<?php
	/**
	 * @global array $field_data
	 * @global array $form
	 * @global array $settings
	 * @global string $field_name
	 */
	
	foreach ($field_data["list"] as $key => $item) {
		$value = $item["value"] ? $item["value"] : $item["description"];
		
		if ($_POST[$field_name] == $value) {
			$total += floatval(str_replace(array('$', ','), '', $item["price"]));
		}
	}
	
	include "text.php";
