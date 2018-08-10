<?php
	/**
	 * @global array $field_data
	 * @global array $form
	 * @global array $settings
	 * @global string $field_name
	 */
	
	if (!$field_data["label"]) {
		$field_data["label"] = "Phone";
	}
	
	$value = $_POST[$field_name]["first"]."-".$_POST[$field_name]["second"]."-".$_POST[$field_name]["third"];
	
	$email_body .= $field_data["label"]."\n";
	$email_body .= str_repeat("-", strlen($field_data["label"]))."\n";
	$email_body .= $value;
	$email_body .= "\n\n";
	
	$confirmation_email_value = $value;
	
	if ($field_data["required"] && (strlen($_POST[$field_name]["first"]) != 3 || strlen($_POST[$field_name]["second"]) != 3 || strlen($_POST[$field_name]["third"]) != 4 || !is_numeric($_POST[$field_name]["first"]) || !is_numeric($_POST[$field_name]["second"]) || !is_numeric($_POST[$field_name]["third"]))) {
		$errors[] = $field_name;
	}	
