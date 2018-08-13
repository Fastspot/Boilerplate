<?php
	$data = json_decode($_POST["data"], true);
	$paid = $_POST["paid"];
	$type = trim($_POST["type"]);

	include EXTENSION_ROOT."modules/btx-form-builder/field-types/edit/$type.php";
		
	if ($type != "section" && $type != "captcha") {
?>
<fieldset>
	<input type="checkbox" class="checkbox" name="required"<?php if ($data["required"]) { ?> checked="checked"<?php } ?> />
	<label class="for_checkbox">Required</label>
</fieldset>
<?php
	}
