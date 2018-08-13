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
	<input type="checkbox" class="checkbox" name="state_list"<?php if ($data["state_list"]) { ?> checked="checked"<?php } ?> />
	<label class="for_checkbox">States as List?</label>
</fieldset>
<fieldset>
	<input type="checkbox" class="checkbox" name="country_list"<?php if ($data["country_list"]) { ?> checked="checked"<?php } ?> />
	<label class="for_checkbox">Countries as List?</label>
</fieldset>
