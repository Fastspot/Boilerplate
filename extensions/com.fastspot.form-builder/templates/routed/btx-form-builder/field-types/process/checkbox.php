<?php
	/**
	 * @global array $field_data
	 * @global array $form
	 * @global array $settings
	 * @global string $field_name
	 */
	
	if ($field_data["label"]) {
		$email_body .= $field_data["label"]."\n";
		$email_body .= str_repeat("-", strlen($field_data["label"]))."\n";
	}
	
	$value = $_POST[$field_name];
	$confirmation_email_value = array();
	$something_was_checked = false;
	
	if (is_array($value)) {
		foreach ($field_data["list"] as $item) {
			$v = $item["value"] ? $item["value"] : $item["description"];
			
			if (in_array($v, $value)) {
				if ($v == $item["description"]) {
					$email_body .= $item["description"].": Yes\n";
				} else {
					$email_body .= $item["description"].": ".$item["value"]."\n";
				}
				
				$confirmation_email_value[] = $item["description"];
				$something_was_checked = true;
				$total += floatval(str_replace(array('$', ','), '', $item["price"]));
			} else {
				$email_body .= $item["description"].": ---\n";
			}
		}
		
		$email_body .= "\n\n";
	} else {
		foreach ($field_data["list"] as $item) {
			$v = $item["value"] ? $item["value"] : $item["description"];
			
			if ($value == $v) {
				if ($v == $item["description"]) {
					$email_body .= $item["description"].": Yes\n";
				} else {
					$email_body .= $item["description"].": ".$item["value"]."\n";
				}
				
				$something_was_checked = true;
				$confirmation_email_value[] = $item["description"];
				$total += floatval(str_replace(array('$', ','), '', $item["price"]));
			}
		}
	}
	
	if ($field_data["required"] && !$something_was_checked) {
		$errors[] = $field_name;
	}
	
	$confirmation_email_value = implode(", ", $confirmation_email_value);
	