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
	<div class="form_builder_select">
		<select id="form_builder_field_<?=$count?>" name="<?=$field_name?>"<?php if ($field_data["required"]) { ?> class="form_builder_required<?php if ($error) { ?> form_builder_error<?php } ?>"<?php } ?>>
			<?php foreach ($field_data["list"] as $item) { ?>
			<option value="<?=htmlspecialchars($item["value"])?>"<?php if ($item["value"] == $default || ($default === false && $item["selected"])) { ?> selected="selected"<?php } ?> data-price="<?=floatval(str_replace(array('$', ','), '', $item["price"]))?>"><?=htmlspecialchars($item["description"])?></option>
			<?php } ?>
		</select>
	</div>
</fieldset>
<?php
	// If this is a paid form, we watch the element for changes to calculate the total
	if ($form["paid"]) {
		$select_watch[] = "form_builder_field_$count";
	}
?>
