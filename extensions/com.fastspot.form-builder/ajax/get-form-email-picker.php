<?php
	/**
	 * @global array $field
	 */
	
	$fields = array();
	$form = isset($_POST["form"]) ? $_POST["form"] : $field["value"]["form"];
	$q = sqlquery("SELECT * FROM btx_form_builder_fields WHERE form = '".sqlescape($form)."' AND type = 'email'");

	// Reset cache
	BTXFormBuilder::parseTokens($fields, false, false, false, true);
	
	while ($f = sqlfetch($q)) {
		$data = json_decode($f["data"], true);
		BTXFormBuilder::parseTokens($fields, $f["type"], $data["label"], $data["name"]);
	}
	
	ksort($fields);
?>
<option></option>
<?php
	foreach ($fields as $key => $name) {
?>
<option<?php if ($key == $field["value"]["email_field"]) { ?> selected="selected"<?php } ?>><?=$key?></option>
<?php
	}
	
	if (sqlrows($q) == 0) {
?>
<option value="" disabled="disabled">No Email Fields Found</option>
<?php
	}
	