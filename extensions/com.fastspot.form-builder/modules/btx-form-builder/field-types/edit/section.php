<?php
	/**
	 * @global array $data
	 * @global bool $paid
	 */
?>
<fieldset>
	<label>Section Title</label>
	<input type="text" name="title" value="<?=htmlspecialchars($data["title"])?>" />
</fieldset>
<fieldset>
	<label>Section Description</label>
	<textarea name="description"><?=htmlspecialchars($data["description"])?></textarea>
</fieldset>