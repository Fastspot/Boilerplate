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
<div class="form_builder_object form_builder_month">
	<input type="text" class="form_builder_text" />
	<label class="center">MM</label>
</div>
<div class="form_builder_separator">/</div>
<div class="form_builder_object form_builder_day">
	<input type="text" class="form_builder_text" />
	<label class="center">DD</label>
</div>
<div class="form_builder_separator">/</div>
<div class="form_builder_object form_builder_year">
	<input type="text" class="form_builder_text" />
	<label class="center">YYYY</label>
</div>