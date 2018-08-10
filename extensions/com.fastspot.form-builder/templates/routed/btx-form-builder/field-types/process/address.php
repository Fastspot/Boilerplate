<?php
	/**
	 * @global array $field_data
	 * @global array $form
	 * @global array $settings
	 * @global string $field_name
	 */
	
	if (!$field_data["label"]) {
		$field_data["label"] = "Address";
	}
	
	$value = $_POST[$field_name];
	
	// Build out the notification email
	$email_body .= $field_data["label"]."\n";
	$email_body .= str_repeat("-", strlen($field_data["label"]))."\n";
	$email_body .= $value["street"]."\n";
	
	if ($value["street2"]) {
		$email_body .= $value["street2"]."\n";
	}
	
	$email_body .= $value["city"].", ".$value["state"]." ".$value["zip"]."\n";
	$email_body .= $value["country"];
	$email_body .= "\n\n";
	
	// Build out the confirmation email value
	$confirmation_email_value = $value["street"];
	
	if ($value["street2"]) {
		$confirmation_email_value .= ", ".$value["street2"];
	}
	
	if ($value["city"]) {
		$confirmation_email_value .= ", ".$value["city"];
	}
	
	if ($value["state"] || $value["zip"]) {
		$confirmation_email_value .= ", ".trim($value["state"]." ".$value["zip"]);
	}
	
	if ($value["country"]) {
		$confirmation_email_value .= ", ".$value["country"];
	}
	
	if ($field_data["required"] && (!$value["street"] || !$value["city"] || !$value["state"] || !$value["zip"] || !$value["country"])) {
		$errors[] = $field_name;
	}
