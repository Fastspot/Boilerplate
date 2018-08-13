<?php
	/**
	 * @global array $field_data
	 * @global array $form
	 * @global array $settings
	 * @global string $field_name
	 */
	
	$email_body .= $field_data["label"]."\n";
	$email_body .= str_repeat("-", strlen($field_data["label"]))."\n";
	
	if ($_FILES[$field_name]["tmp_name"]) {
		if ($field_data["directory"]) {
			$directory = rtrim($field_data["directory"], "/")."/";
		} else {
			$directory = "files/form-builder/";
		}

		// If allowed file types are set, make sure it's allowed
		if (is_array($field_data["allowed_filetypes"]) && count($field_data["allowed_filetypes"])) {
			$extension = pathinfo($_FILES[$field_name]["name"], PATHINFO_EXTENSION);
			$ok = false;

			foreach ($field_data["allowed_filetypes"] as $type) {
				$clean_ext = ltrim(trim($type["extension"]), ".");

				if ($clean_ext == $extension) {
					$ok = true;
					break;
				}
			}

			if (!$ok) {
				$errors[] = $field_name;
			}
		}
		
		$value = $storage->store($_FILES[$field_name]["tmp_name"], $_FILES[$field_name]["name"], $directory);
		$email_body .= $cms->replaceRelativeRoots($value);
		$confirmation_email_value = $_FILES[$field_name]["name"];
	} else {
		$confirmation_email_value = "No File Uploaded";
		$email_body .= "No File Uploaded";
		
		if ($field_data["required"]) {
			$errors[] = $field_name;
		}
		
		$value = "";
	}
	
	$email_body .= "\n\n";
