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
	<input type="checkbox" name="international"<?php if (!empty($data["international"])) { ?> checked<?php } ?>>
	<label class="for_checkbox">Use International Formatting</label>
</fieldset>