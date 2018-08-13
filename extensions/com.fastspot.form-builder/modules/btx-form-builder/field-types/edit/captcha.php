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
	<label>Field Instructions</label>
	<textarea name="instructions"><?=htmlspecialchars($data["instructions"])?></textarea>
</fieldset>