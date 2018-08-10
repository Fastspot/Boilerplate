<?php
	/**
	 * @global array $data
	 * @global bool $paid
	 */

	$sub_label_parts = array();

	if (is_array($data["allowed_filetypes"]) && count($data["allowed_filetypes"])) {
		$types = array();

		foreach ($data["allowed_filetypes"] as $type) {
			$types[] = ltrim(trim($type["extension"]), ".");
		}

		$sub_label_parts[] = "Allowed File Types: ".implode(", ", $types);
	}

	if (!empty($data["max_file_size"])) {
		$sub_label_parts[] = "Maximum File Size: ".BigTree::formatBytes(intval($data["max_file_size"]));
	}
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
	<input type="file" class="form_builder_upload custom_control" />
	<?php
		if (count($sub_label_parts)) {
	?>
	<label><?=implode("&nbsp;&nbsp;|&nbsp;&nbsp;", $sub_label_parts)?></label>
	<?php
		}
	?>
</div>