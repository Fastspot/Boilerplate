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
<select class="custom_control">
	<?php foreach ($data["list"] as $item) { ?>
	<option value="<?=htmlspecialchars($item["value"])?>"<?php if ($item["selected"]) {?> selected="selected"<?php } ?>><?=htmlspecialchars($item["description"])?></option>
	<?php } ?>
</select>