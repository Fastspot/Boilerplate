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
<?php foreach ($data["list"] as $item) { ?>
<div class="form_builder_option">
	<input type="radio"<?php if ($item["selected"]) { ?> checked="checked"<?php } ?> class="form_builder_radio custom_control" />
	<?=htmlspecialchars($item["description"])?>
</div>
<?php } ?>