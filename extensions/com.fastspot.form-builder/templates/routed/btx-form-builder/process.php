<?php
	/**
	 * @global array $bigtree
	 * @global array $form
	 * @global string $email_field
	 * @global string $email_subject
	 * @global string $email_template
	 */
	
	$storage = new BigTreeStorage;
	$total = 0;
	$email_body = "";
	$errors = $entry = $confirmation_email_tokens = $duplicate_labels = array();
	$form_closed = false;

	// Check to make sure this form didn't close or reach max entries while being filled out
	if ($form["scheduling"]) {
		if (!empty($form["scheduling_open_date"]) && strtotime($form["scheduling_open_date"]) > time()) {
			$form_closed = true;
		} elseif (!empty($form["scheduling_close_date"]) && strtotime($form["scheduling_close_date"]) < time()) {
			$form_closed = true;
		}
	}

	if ($form["limit_entries"] && $form["entries"] >= $form["max_entries"]) {
		$form_closed = true;
	}

	if ($form_closed) {
		BigTree::redirect($page_link);
	}
	
	// Start up the running total if we're paid.
	if ($form["paid"]) {
		if ($form["early_bird_date"] && strtotime($form["early_bird_date"]) > time()) {
			$total = $form["early_bird_base_price"] ? $form["early_bird_base_price"] : $form["base_price"];
		} else {
			$total = $form["base_price"] ? $form["base_price"] : 0;
		}
	}
	
	// Walk through each form field, see if it's required.  If it is and there was no entry, add an error, otherwise add the entry data.
	foreach ($form["fields"] as $field) {
		$field_type = $field["type"];
		$field_data = json_decode($field["data"], true);
		
		// If it's not a column, just process it.
		if ($field_type != "column") {
			if ($field_data["name"]) {
				$field_name = $field_data["name"];
			} else {
				$field_name = "data_".$field["id"];
			}
			
			$value = $confirmation_email_value = false;
			include "field-types/process/$field_type.php";
			
			if ($value !== false && $field["id"]) {
				$entry[$field["id"]] = $value;
			}
			
			if ($field_data["required"] && ($value === "" || $value === false)) {
				$errors[] = $field_name;
			}
			
			BTXFormBuilder::parseTokens($confirmation_email_tokens, $field_type,
										$field_data["label"], $confirmation_email_value);
			
		// If it is a column, we need to process everything inside the column first.
		} else {
			foreach ($field["fields"] as $subfield) {
				$field_data = json_decode($subfield["data"], true);
				
				if ($field_data["name"]) {
					$field_name = $field_data["name"];
				} else {
					$field_name = "data_".$subfield["id"];
				}
				
				$value = $confirmation_email_value = false;
				include "field-types/process/".$subfield["type"].".php";
				
				if ($value !== false) {
					$entry[$subfield["id"]] = $value;
				}
				
				if ($field_data["required"] && ($value === "" || $value === false)) {
					$errors[] = $field_name;
				}
				
				BTXFormBuilder::parseTokens($confirmation_email_tokens, $field_type,
					$field_data["label"], $confirmation_email_value);
			}
		}
	}
	
	// If we had errors, redirect back with the saved data and errors.
	if (count($errors)) {
		unset($_POST["fb_cc_card"]["number"]);
		unset($_POST["fb_cc_card"]["code"]);
		
		$_SESSION["form_builder"]["fields"] = $_POST;
		$_SESSION["form_builder"]["errors"] = $errors;
		
		BigTree::redirect($page_link);
	}
	
	// If it's paid, let's try to charge them.
	if ($form["paid"]) {
		$pg = new BigTreePaymentGateway;
		
		$transaction = $pg->charge(
			round($total, 2),                                                       // Total
			0,                                                                      // Tax
			implode(" ", $_POST["fb_cc_billing_name"]),                             // Credit Card Name
			$_POST["fb_cc_card"]["number"],                                         // Credit Card Number
			$_POST["fb_cc_card"]["month"].$_POST["fb_cc_card"]["year"],             // Credit Card Expiration
			$_POST["fb_cc_card"]["code"],                                           // Credit Card CVV
			$_POST["fb_cc_billing_address"],                                        // Billing Address
			(!empty($page_header) ? $page_header : $bigtree["page"]["nav_title"]),  // Transaction Description
			$_POST["fb_cc_billing_email"]                                           // Email
		);
		
		if (!$transaction) {
			unset($_POST["fb_cc_card"]["number"]);
			unset($_POST["fb_cc_card"]["code"]);
			
			$_SESSION["form_builder"]["fields"] = $_POST;
			$_SESSION["form_builder"]["errors"] = $errors;
			$_SESSION["form_builder"]["payment_error"] = $pg->Message;
			
			BigTree::redirect($page_link);
		}
		
		// Save Billing Info to the DB.
		$_POST["fb_cc_card"]["number"] = $pg->Last4CC;
		$entry["payment"] = array(
			"name" => $_POST["fb_cc_billing_name"],
			"address" => $_POST["fb_cc_billing_address"],
			"card" => $_POST["fb_cc_card"]
		);
		
		// Add Billing Info to the Email
		$address = $_POST["fb_cc_billing_address"];
		$card = $_POST["fb_cc_card"];
		$email_body .= "Billing Address:\n";
		$email_body .= implode(" ", $_POST["fb_cc_billing_name"])."\n";
		$email_body .= $address["street"]."\n";
		
		if ($address["street2"]) {
			$email_body .= $address["street2"]."\n";
		}
		
		$email_body .= $address["city"].", ".$address["state"]." ".$address["zip"]."\n";
		$email_body .= $address["country"];
		$email_body .= "\n\n";
		
		$email_body .= "Credit Card Info:\n";
		$email_body .= $card["type"]."\n";
		$email_body .= "**** **** **** ".$pg->Last4CC."\n";
		$email_body .= "Expires ".$card["month"]."/".$card["year"];
		$email_body .= "\n\n";
		
		$email_body .= "Total Charged: $".number_format($total, 2);
	}
	
	// Get rid of saved data or errors.	
	unset($_SESSION["form_builder"]);
	
	// Add the entry to the entries table.
	BigTreeAutoModule::createItem("btx_form_builder_entries", array("form" => $form["id"], "data" => $entry, "created_at" => "NOW()"));
	
	// Update the totals for the form and recache it.
	sqlquery("UPDATE btx_form_builder_forms SET entries = (entries + 1), last_entry = NOW(), total_collected = (total_collected + ".round($total, 2).") WHERE id = '".$form["id"]."'");
	BigTreeAutoModule::recacheItem($form["id"], "btx_form_builder_forms");
	
	// Get the no-reply domain
	$no_reply_domain = str_replace(array("http://www.", "https://www.", "http://", "https://"), "", DOMAIN);
	$email_title = !empty($page_header) ? $page_header : $bigtree["page"]["nav_title"];
	$email_body = $email_title." - Form Submission\n".str_repeat("=", strlen($email_title))."==================\n\n$email_body";
	
	// Send out email alerts
	$emails = explode(",", $emails);
	
	foreach ($emails as $email_address) {
		$email_address = trim($email_address);
		mail($email_address, $email_title." - Form Submission", $email_body, "From: no-reply@$no_reply_domain");
	}
	
	// Send out confirmation email
	if (!empty($email_field)) {
		$send_to_email = $confirmation_email_tokens[$email_field];
		$tokens = array();
		
		foreach ($confirmation_email_tokens as $key => $token) {
			$tokens[] = '{'.$key.'}';
		}
		
		$email_template = str_replace($tokens, $confirmation_email_tokens, $email_template);
		mail($send_to_email, $email_subject, $email_template, "From: no-reply@$no_reply_domain");
	}
	
	BigTree::redirect($page_link."thanks/");
