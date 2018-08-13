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
<fieldset>
	<label>Placeholder Field Value</label>
	<input type="text" name="placeholder" value="<?=htmlspecialchars($data["placeholder"])?>" />
</fieldset>
<fieldset>
	<label>Maximum Length <small>(leave empty or 0 for no max)</small></label>
	<input type="text" name="maxlength" value="<?=intval($data["maxlength"])?>" />
</fieldset>
<?php
	if ($paid) {
?>
<fieldset>
	<input type="checkbox" name="price"<?php if ($data["price"]) { ?> checked<?php } ?>>
	<label class="for_checkbox">Field affects Price <small>(forces user to enter a $ value)</small></label>
</fieldset>
<?php
	}
?>