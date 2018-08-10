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