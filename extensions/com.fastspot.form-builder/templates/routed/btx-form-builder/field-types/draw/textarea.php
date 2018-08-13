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
	
	$classes = array();
	
	if ($field_data["required"]) {
		$classes[] = "form_builder_required";
	}
	
	if ($field_data["default"]) {
		$classes[] = "default";
	}
	
	if ($error) {
		$classes[] = "form_builder_error";
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
	<textarea id="form_builder_field_<?=$count?>" name="<?=$field_name?>"<?php if (count($classes)) { ?> class="<?=implode(" ", $classes)?>"<?php } ?> placeholder="<?=htmlspecialchars($field_data["placeholder"])?>"><?=htmlspecialchars($default)?></textarea>
</fieldset>