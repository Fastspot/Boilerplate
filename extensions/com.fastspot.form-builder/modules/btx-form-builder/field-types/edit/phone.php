<?php
	/**
	 * @global array $data
	 * @global bool $paid
	 */
?>
<fieldset>
	<label>Field Label</label>
	<input type="text" name="label" value="<?=htmlspecialchars($data["label"])?>" />
</fieldset>

<?php
	if ($settings["phone_default_intl"]) {
?>
<fieldset>
	<input type="checkbox" name="usa"<?php if (!empty($data["usa"])) { ?> checked<?php } ?>>
	<label class="for_checkbox">Use United States Formatting</label>
</fieldset>
<?php
	} else {
?>
<fieldset>
	<input type="checkbox" name="international"<?php if (!empty($data["international"])) { ?> checked<?php } ?>>
	<label class="for_checkbox">Use International Formatting</label>
</fieldset>
<?php
	}
?>