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
	
	$classes = array("form_builder_text");
	
	if ($field_data["required"]) {
		$classes[] = "form_builder_required";
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
	<input type="text" id="form_builder_field_<?=$count?>" name="<?=$field_name?>" class="<?=implode(" ", $classes)?>" value="<?=htmlspecialchars($default)?>" placeholder="<?=htmlspecialchars($field_data["placeholder"])?>" <?php if (intval($field_data["maxlength"])) { ?>maxlength="<?=intval($field_data["maxlength"])?>" <?php } ?>/>
</fieldset>
<?php
	if ($form["paid"] && $field_data["price"] == "on") {
		$text_watch[] = "form_builder_field_$count";
	}
?>