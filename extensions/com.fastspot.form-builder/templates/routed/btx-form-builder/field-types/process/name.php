<?php
	/**
	 * @global array $field_data
	 * @global array $form
	 * @global array $settings
	 * @global string $field_name
	 */
	
	if (!$field_data["label"]) {
		$field_data["label"] = "Name";
	}
	
	$value = $_POST[$field_name];
	
	$email_body .= $field_data["label"]."\n";
	$email_body .= str_repeat("-", strlen($field_data["label"]))."\n";
	$email_body .= "First: ".$value["first"]."\n";
	$email_body .= "Last: ".$value["last"];
	$email_body .= "\n\n";
	
	$confirmation_email_value = trim($value["first"]." ".$value["last"]);
	
	if ($field_data["required"] && (!$value["first"] || !$value["last"])) {
		$errors[] = $field_name;
	}
