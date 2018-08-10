<?php
	/**
	 * @global array $field_data
	 * @global array $form
	 * @global array $settings
	 * @global string $field_name
	 */
	
	$recaptcha_url = "https://www.google.com/recaptcha/api/siteverify".
					 "?secret=".$settings["recaptcha"]["secret_key"].
					 "&response=".urlencode($_POST["g-recaptcha-response"]).
					 "&remoteip=".$_SERVER["REMOTE_ADDR"];
						
	$response = json_decode(BigTree::cURL($recaptcha_url));
	
	if (!$response->success) {
		$errors[] = $field_name;
	}
