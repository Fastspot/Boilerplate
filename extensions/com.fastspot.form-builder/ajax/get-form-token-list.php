<?php
	/**
	 * @global array $field
	 */
	
	$fields = array();
	$form = isset($_POST["form"]) ? $_POST["form"] : $field["value"]["form"];
	$form = $form ?: $_GET["form"];
	$q = sqlquery("SELECT * FROM btx_form_builder_fields 
				   WHERE form = '".sqlescape($form)."' 
				     AND type != 'columns' 
					 AND type != 'section' 
					 AND type != 'captcha'");
	
	// Reset cache
	BTXFormBuilder::parseTokens($fields, false, false, false, true);
	
	while ($f = sqlfetch($q)) {
		$data = json_decode($f["data"], true);
		BTXFormBuilder::parseTokens($fields, $f["type"], $data["label"], $data["name"]);
	}
	
	ksort($fields);
	$keys = array();
	
	foreach ($fields as $key => $name) {
		$keys[] = '{'.$key.'}';
	}
	
	echo "<strong>Available Tokens: </strong> &nbsp; ";
	echo implode(" &nbsp; ", $keys);
	