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

	if (empty($default["first"]) && !empty($settings["phone_default_country_code"])) {
		$default["first"] = $settings["phone_default_country_code"];
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
		<?php
			if (empty($field_data["international"])) {
		?>
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
		<?php
			} else {
		?>
		<div class="form_builder_phone_country">
			<input type="text" maxlength="3" name="<?=$field_name?>[first]" id="form_builder_field_<?=$count?>" class="form_builder_text<?php if ($field_data["required"]) { ?> form_builder_required<?php if ($error && (strlen($default["first"]) != 3 || !is_numeric($default["first"]))) { ?> form_builder_error<?php } ?><?php } ?>" value="<?=htmlspecialchars($default["first"])?>" />
			<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel form_builder_centered">Country Code</label>
		</div>
		
		<div class="form_builder_phone_area">
			<input type="text" maxlength="3" name="<?=$field_name?>[second]" id="form_builder_field_<?=$count?>" class="form_builder_text<?php if ($field_data["required"]) { ?> form_builder_required<?php if ($error && (strlen($default["second"]) != 3 || !is_numeric($default["second"]))) { ?> form_builder_error<?php } ?><?php } ?>" value="<?=htmlspecialchars($default["second"])?>" />
			<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel form_builder_centered">Area Code</label>
		</div>
		
		<div class="form_builder_phone_number">
			<input type="text" maxlength="8" name="<?=$field_name?>[third]" id="form_builder_field_<?=$count?>" class="form_builder_text<?php if ($field_data["required"]) { ?> form_builder_required<?php if ($error && (strlen($default["third"]) != 4 || !is_numeric($default["third"]))) { ?> form_builder_error<?php } ?><?php } ?>" value="<?=htmlspecialchars($default["third"])?>" />
			<label for="form_builder_field_<?=$count?>" class="form_builder_sublabel form_builder_centered">Phone Number</label>
		</div>
		<?php
			}
		?>
	</div>
</fieldset>