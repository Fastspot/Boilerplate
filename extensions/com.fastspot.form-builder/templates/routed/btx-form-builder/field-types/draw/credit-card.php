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
	
	$card_types = array(
		"Visa" => "Visa",
		"MasterCard" => "MasterCard"
	);
?>
<fieldset>
	<label for="form_builder_field_<?=$count?>">
		Credit Card
		<span class="form_builder_required_star">*</span>
	</label>
	
	<div class="form_builder_wrap">
		<div class="form_builder_card_number">
			<input type="text" name="<?=$field_name?>[number]" id="form_builder_field_<?=$count?>"<?php if ($error && !$default["number"]) { ?> class="form_builder_error"<?php } ?> value="<?=htmlspecialchars($default["number"])?>" autocomplete="off" maxlength="19" />
			<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel">Number</label>
		</div>
	</div>
	
	<div class="form_builder_wrap">
		<div class="form_builder_card_date">
			<input type="text" name="<?=$field_name?>[month]" id="form_builder_field_<?=($count++)?>" class="form_builder_card_month<?php if ($error && !$default["month"]) { ?> form_builder_error<?php } ?>" value="<?=htmlspecialchars($default["month"])?>" maxlength="2" />
			<input type="text" name="<?=$field_name?>[year]" id="form_builder_field_<?=($count++)?>" class="form_builder_card_year<?php if ($error && !$default["year"]) { ?> form_builder_error<?php } ?>" value="<?=htmlspecialchars($default["year"])?>" maxlength="4" />
			<label for="form_builder_field_<?=($count - 2)?>" class="form_builder_sublabel">Expiration (MM-YYYY)</label>
		</div>
		
		<div class="form_builder_card_code">
			<input type="text" name="<?=$field_name?>[code]" maxlength="4" id="form_builder_field_<?=$count?>"<?php if ($error && !$default["code"]) { ?> class="form_builder_error"<?php } ?> value="<?=htmlspecialchars($default["code"])?>" autocomplete="off" />
			<label for="form_builder_field_<?=($count++)?>" class="form_builder_sublabel">CVV Code</label>
		</div>
	</div>
</fieldset>
<div class="form_builder_section_header form_builder_total_section">
	<h2>Total</h2>
	<p>Your total charge will be: <span id="form_builder_total">$<?=number_format($form["base_price"], 2)?></span></p>
</div>