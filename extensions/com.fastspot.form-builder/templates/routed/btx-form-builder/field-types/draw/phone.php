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
		<div class="form_builder_phone_3">
			<input type="text" maxlength="3" name="<?=$field_name?>[first]" id="form_builder_field_<?=$count?>" class="form_builder_text<?php if ($field_data["required"]) { ?> form_builder_required<?php if ($error && (strlen($default["first"]) != 3 || !is_numeric($default["first"]))) { ?> form_builder_error<?php } ?><?php } ?>" value="<?=htmlspecialchars($default["first"])?>" />
			<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel form_builder_centered">###</label>
		</div>
		
		<div class="form_builder_phone_3">
			<input type="text" maxlength="3" name="<?=$field_name?>[second]" id="form_builder_field_<?=$count?>" class="form_builder_text<?php if ($field_data["required"]) { ?> form_builder_required<?php if ($error && (strlen($default["second"]) != 3 || !is_numeric($default["second"]))) { ?> form_builder_error<?php } ?><?php } ?>" value="<?=htmlspecialchars($default["second"])?>" />
			<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel form_builder_centered">###</label>
		</div>
		
		<div class="form_builder_phone_4">
			<input type="text" maxlength="4" name="<?=$field_name?>[third]" id="form_builder_field_<?=$count?>" class="form_builder_text<?php if ($field_data["required"]) { ?> form_builder_required<?php if ($error && (strlen($default["third"]) != 4 || !is_numeric($default["third"]))) { ?> form_builder_error<?php } ?><?php } ?>" value="<?=htmlspecialchars($default["third"])?>" />
			<label for="form_builder_field_<?=$count?>" class="form_builder_sublabel form_builder_centered">####</label>
		</div>
	</div>
</fieldset>