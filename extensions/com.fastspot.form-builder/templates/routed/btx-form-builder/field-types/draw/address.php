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

	$required = $field_data["required"] ? " form_builder_required" : "";

	if (!$default["country"]) {
		$default["country"] = "United States";
	}
?>
<fieldset class="form_builder_address">
	<label for="form_builder_field_<?=$count?>">
		<?=htmlspecialchars($field_data["label"])?>
		<?php if ($field_data["required"]) { ?>
		<span class="form_builder_required_star">*</span>
		<?php } ?>
	</label>

	<div class="form_builder_full">
		<input type="text" name="<?=$field_name?>[street]" id="form_builder_field_<?=$count?>" class="form_builder_text<?=$required?><?php if ($error && !$default["street"]) { ?> form_builder_error<?php } ?>" value="<?=htmlspecialchars($default["street"])?>" />
		<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel">Street Address</label>
	</div>

	<div class="form_builder_full">
		<input type="text" name="<?=$field_name?>[street2]" id="form_builder_field_<?=$count?>" class="form_builder_text" value="<?=htmlspecialchars($default["street2"])?>"/>
		<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel">Street Address Line 2</label>
	</div>

	<div class="form_builder_split">
		<input type="text" name="<?=$field_name?>[city]" id="form_builder_field_<?=$count?>" class="form_builder_text<?=$required?><?php if ($error && !$default["city"]) { ?> form_builder_error<?php } ?>" value="<?=htmlspecialchars($default["city"])?>" />
		<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel">City</label>
	</div>

	<div class="form_builder_split form_builder_split_last_col">
		<?php if ($field_data["state_list"]) { ?>
		<select <?php if ($field_data["required"]) { ?> class="form_builder_required<?php if ($error) { ?> form_builder_error<?php } ?>"<?php } ?> name="<?=$field_name?>[state]" id="form_builder_field_<?=$count?>">
			<option value=""></option>
			<?php foreach (BigTree::$StateList as $state_code => $state_name) { ?>
			<option value="<?=htmlspecialchars($state_code)?>"<?php if ($state_code == $default["state"]) { ?> selected="selected"<?php } ?>><?=htmlspecialchars($state_name)?></option>
			<?php } ?>
		</select>
		<?php } else { ?>
		<input type="text" name="<?=$field_name?>[state]" id="form_builder_field_<?=$count?>" class="form_builder_text<?=$required?><?php if ($error && !$default["state"]) { ?> form_builder_error<?php } ?>" value="<?=htmlspecialchars($default["state"])?>" />
		<?php } ?>
		<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel">State / Province / Region</label>
	</div>

	<div class="form_builder_split form_builder_split_last_row">
		<input type="text" name="<?=$field_name?>[zip]" id="form_builder_field_<?=$count?>" class="form_builder_text<?=$required?><?php if ($error && !$default["zip"]) { ?> form_builder_error<?php } ?>" value="<?=htmlspecialchars($default["zip"])?>" />
		<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel">Postal / Zip Code</label>
	</div>

	<div class="form_builder_split form_builder_split_last_row form_builder_split_last_col">
		<?php if ($field_data["country_list"]) { ?>
		<select <?php if ($field_data["required"]) { ?> class="form_builder_required<?php if ($error) { ?> form_builder_error<?php } ?>"<?php } ?> name="<?=$field_name?>[country]" id="form_builder_field_<?=$count?>">
			<?php foreach (BigTree::$CountryList as $item) { ?>
			<option value="<?=htmlspecialchars($item)?>"<?php if ($item == $default["country"]) { ?> selected="selected"<?php } ?>><?=htmlspecialchars($item)?></option>
			<?php } ?>
		</select>
		<?php } else { ?>
		<input type="text" name="<?=$field_name?>[country]" id="form_builder_field_<?=$count?>" class="form_builder_text<?=$required?><?php if ($error && !$default["country"]) { ?> form_builder_error<?php } ?>" value="<?=htmlspecialchars($default["country"])?>" />
		<?php } ?>
		<label for="form_builder_field_<?=$count?>" class="form_builder_sublabel">Country</label>
	</div>
</fieldset>
