<?php
	if ($form["early_bird_date"]) {
		$date = DateTime::createFromFormat("Y-m-d H:i:s", $form["early_bird_date"]);

		if ($date) {
			$form["early_bird_date"] = $date->format($bigtree["config"]["date_format"]." h:i a");
		}
	}
?>
<fieldset>
	<label for="form_builder_base_price">Base Price <small>(the price a user pays before any field prices)</small></label>
	<input id="form_builder_base_price" type="text" name="base_price" value="$<?=number_format($form["base_price"], 2)?>" placeholder="Enter a numeric value." />
</fieldset>

<fieldset>
	<input id="form_builder_early_bird" type="checkbox" name="early_bird" <?php if ($form["early_bird_date"]) { ?> checked="checked"<?php } ?> />
	<label for="form_builder_early_bird" class="for_checkbox">Early Bird Pricing</label>
</fieldset>

<div class="contain" id="form_builder_early_bird_container"<?php if (!$form["early_bird_date"]) { ?> style="display: none;"<?php } ?>>
	<hr>

	<fieldset class="left">
		<label for="form_builder_early_bird_base_price">Early Bird Base Price <small>(the price a user pays before early bird date)</small></label>
		<input id="form_builder_early_bird_base_price" type="text" name="early_bird_base_price" value="$<?=number_format($form["early_bird_base_price"], 2)?>" placeholder="Enter a numeric value." />
	</fieldset>

	<fieldset class="right">
		<label for="form_builder_early_bird_date_field">Early Bird Cut-off Date</label>
		<input id="form_builder_early_bird_date_field" type="text" name="early_bird_date" class="date_time_picker" value="<?=$form["early_bird_date"]?>" />
		<span class="icon_small icon_small_calendar date_picker_icon"></span>
	</fieldset>
</div>