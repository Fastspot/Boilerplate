<?php
	/**
	 * @global array $field_data
	 * @global array $form
	 * @global array $settings
	 * @global string $field_name
	 */
	
	$email_body .= $field_data["label"]."\n";
	$email_body .= str_repeat("-", strlen($field_data["label"]))."\n";
	
	if ($field_data["price"] == "on") {
		$value = floatval(str_replace(array("$", ","), "", $_POST[$field_name]));
		
		if ($value < 0) {
			$value = 0;
		}
		
		$total += $value;
		$confirmation_email_value = "$".number_format($value, 2);
		$email_body .= $confirmation_email_value;
	} else {
		$email_body .= $_POST[$field_name];
		$value = $_POST[$field_name];
		$confirmation_email_value = $_POST[$field_name];
	}
	
	$email_body .= "\n\n";
