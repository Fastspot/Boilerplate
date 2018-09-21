<?php
	/**
	 * @global array $data
	 * @global bool $paid
	 */
?>
<label>
	<?php
		echo htmlspecialchars($data["label"]);
		
		if ($data["required"]) {
	?>
	<span class="required">*</span>
	<?php
		}
	?>
</label>
<?php
	if ($data["usa"] || (empty($settings["phone_default_intl"]) && empty($data["international"]))) {
?>
<div class="form_builder_object form_builder_phone">
	<input type="text" class="form_builder_text" />
	<label class="center">###</label>
</div>
<div class="form_builder_separator">-</div>
<div class="form_builder_object form_builder_phone">
	<input type="text" class="form_builder_text" />
	<label class="center">###</label>
</div>
<div class="form_builder_separator">-</div>
<div class="form_builder_object form_builder_phone_wide">
	<input type="text" class="form_builder_text" />
	<label class="center">####</label>
</div>
<?php
	} else {
?>
<div class="form_builder_separator">+</div>
<div class="form_builder_object form_builder_phone">
	<input type="text" class="form_builder_text" value="<?=$settings["phone_default_country_code"]?>" />
	<label class="center">Country Code</label>
</div>
<div class="form_builder_separator">-</div>
<div class="form_builder_object form_builder_phone">
	<input type="text" class="form_builder_text" />
	<label class="center">Area Code</label>
</div>
<div class="form_builder_separator">-</div>
<div class="form_builder_object form_builder_phone form_builder_phone_wide">
	<input type="text" class="form_builder_text" />
	<label class="center">Phone Number</label>
</div>
<?php
	}
?>