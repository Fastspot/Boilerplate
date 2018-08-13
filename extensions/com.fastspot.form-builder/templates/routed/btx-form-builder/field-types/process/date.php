<?php
	/**
	 * @global array $field_data
	 * @global array $form
	 * @global array $settings
	 * @global string $field_name
	 */
	
	if (!$field_data["label"]) {
		$field_data["label"] = "Date";
	}
	
	$email_body .= $field_data["label"]."\n";
	
	if (checkdate($_POST[$field_name]["month"], $_POST[$field_name]["day"], $_POST[$field_name]["year"])) {
		$value = $_POST[$field_name]["year"]."-".$_POST[$field_name]["month"]."-".$_POST[$field_name]["day"];
		$confirmation_email_value = date("F j, Y", strtotime($value));
		$email_body .= $confirmation_email_value;
	}
	
	$email_body .= str_repeat("-", strlen($field_data["label"]))."\n";
	$email_body .= "\n\n";
	
	if ($field_data["required"] && (!$_POST[$field_name]["year"] || !$_POST[$field_name]["month"] || !$_POST[$field_name]["day"])) {
		$errors[] = $field_name;
	}

