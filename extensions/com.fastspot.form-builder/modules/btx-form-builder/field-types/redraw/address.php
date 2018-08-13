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
<div class="form_builder_object form_builder_full">
	<input type="text" class="form_builder_text" />
	<label>Street Address</label>
</div>
<div class="form_builder_object form_builder_full">
	<input type="text" class="form_builder_text" />
	<label>Street Address Line 2</label>
</div>
<div class="form_builder_object form_builder_split">
	<input type="text" class="form_builder_text" />
	<label>City</label>
</div>
<div class="form_builder_object form_builder_split form_builder_last">
	<input type="text" class="form_builder_text" />
	<label>State / Province / Region</label>
</div>
<div class="form_builder_object form_builder_split">
	<input type="text" class="form_builder_text" />
	<label>Postal / Zip Code</label>
</div>
<div class="form_builder_object form_builder_split form_builder_last">
	<input type="text" class="form_builder_text" />
	<label>Country</label>
</div>