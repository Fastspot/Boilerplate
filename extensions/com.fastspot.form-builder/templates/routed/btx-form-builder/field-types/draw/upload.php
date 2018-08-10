<?php
	/**
	 * @global array $default
	 * @global array $field_data
	 * @global array $form
	 * @global array $settings
	 * @global bool $error
	 * @global int $count
	 * @global string $field_name
	 */
	
	$classes = array("form_builder_upload");
	
	if ($field_data["required"]) {
		$classes[] = "form_builder_required";
	}
	
	if ($error) {
		$classes[] = "form_builder_error";
	}

	if (is_array($field_data["allowed_filetypes"]) && count($field_data["allowed_filetypes"])) {
		$allowed_types = array();
		$accept = array();

		foreach ($field_data["allowed_filetypes"] as $type) {
			$ext = ltrim(trim($type["extension"]), ".");
			$allowed_types[] = $ext;
			$accept[] = ".$ext";
		}
	} else {
		$allowed_types = null;
		$accept = null;
	}

	$sub_label_parts = array();

	if (!is_null($allowed_types)) {
		$sub_label_parts[] = "Allowed File Types: ".implode(", ", $allowed_types);
	}

	if (!empty($field_data["max_file_size"])) {
		$sub_label_parts[] = '<span id="form_builder_file_size_error_'.$count.'">Maximum File Size: '.BigTree::formatBytes(intval($field_data["max_file_size"])).'</span>';
	}
?>
<fieldset>
	<label for="form_builder_field_<?=$count?>">
		<?php
			echo htmlspecialchars($field_data["label"]);
			
			if ($field_data["required"]) {
		?>
		<span class="form_builder_required_star">*</span>
		<?php
			}
		?>
	</label>
	<input type="file" id="form_builder_field_<?=$count?>" name="<?=$field_name?>" <?php if (count($classes)) { ?>class="<?=implode(" ", $classes)?>" <?php } ?>value="<?=htmlspecialchars($field_data["default"])?>" <?php if (!is_null($accept)) { ?> accept="<?=implode(",", $accept)?>"<?php } ?> />
	<?php
		if (count($sub_label_parts)) {
	?>
	<div class="form_builder_sublabel"><?=implode("&nbsp;&nbsp; | &nbsp;&nbsp;", $sub_label_parts)?></div>
	<?php
		}
	?>
</fieldset>
<?php
	if (!empty($field_data["max_file_size"])) {
?>
<script>
	document.getElementById("form_builder_field_<?=$count?>").onchange = function() {
		if (this.files[0].size > <?=intval($field_data["max_file_size"])?>) {
			this.className = this.className.replace("form_builder_error", "") + " form_builder_error";
			this.value = "";
			document.getElementById('form_builder_file_size_error_<?=$count?>').className = "form_builder_file_size_error";
		} else {
			this.className = this.className.replace("form_builder_error", "");
			document.getElementById('form_builder_file_size_error_<?=$count?>').className = "";		
		}
	};
</script>
<?php
	}
?>