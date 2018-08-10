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
<div class="form_builder_object form_builder_first_name">
	<input type="text" class="form_builder_text" />
	<label>First</label>
</div>
<div class="form_builder_object form_builder_last_name">
	<input type="text" class="form_builder_text" />
	<label>Last</label>
</div>