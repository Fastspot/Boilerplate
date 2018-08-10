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
	<div class="form_builder_wrap">
		<div class="form_builder_firstname">
			<input type="text" name="<?=$field_name?>[first]" id="form_builder_field_<?=$count?>" class="<?=implode(" ",$classes)?><?php if ($error && !$default["first"]) { ?> form_builder_error<?php } ?>" value="<?=htmlspecialchars($default["first"])?>" />
			<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel">First</label>
		</div>
		
		<div class="form_builder_lastname">
			<input type="text" name="<?=$field_name?>[last]" id="form_builder_field_<?=$count?>" class="<?=implode(" ",$classes)?><?php if ($error && !$default["last"]) { ?> form_builder_error<?php } ?>" value="<?=htmlspecialchars($default["last"])?>" />
			<label for="form_builder_field_<?=$count?>" class="form_builder_sublabel">Last</label>
		</div>
	</div>
</fieldset>