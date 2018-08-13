<?php
	// See if they want to use an existing form as a base.
	if (empty($form["id"])) {
		$existing_forms = BTXFormBuilder::getAllForms("title ASC");
		
		if (count($existing_forms)) {
?>
<div class="alert">
	<label for="form_builder_existing_form">Form Template</label>
	<select name="existing" id="form_builder_existing_form">
		<option value="<?=MODULE_ROOT?>add/">-- New Form --</option>
		<?php foreach ($existing_forms as $item) { ?>
		<option value="<?=MODULE_ROOT?>add/?template=<?=$item["id"]?>"<?php if ($form["id"] == $item["id"]) { ?> selected="selected"<?php } ?>><?=$item["title"]?></option>
		<?php } ?>
	</select>
</div>
<?php
		}
	}
?>
<fieldset>
	<label>Form Title</label>
	<input type="text" name="title" placeholder="Please enter a title to describe your form." value="<?=$form["title"]?>" />
</fieldset>

<fieldset>
	<input type="checkbox" name="limit_entries" id="form_builder_limit_entries"<?php if ($form["limit_entries"]) { ?> checked="checked"<?php } ?> />
	<label for="form_builder_limit_entries" class="for_checkbox">Limit Number of Entries</label>
</fieldset>

<fieldset>
	<input type="checkbox" name="scheduling" id="form_builder_scheduling"<?php if ($form["scheduling"]) { ?> checked="checked"<?php } ?> />
	<label for="form_builder_scheduling" class="for_checkbox">Schedule Opening and Closing of Form Entries</label>
</fieldset>

<?php
	if (!empty($settings["accept_payments"])) {
?>
<fieldset>
	<input type="checkbox" name="paid" id="form_builder_is_paid"<?php if ($form["paid"]) { ?> checked="checked"<?php } ?> />
	<label class="for_checkbox">Paid Form</label>	
</fieldset>
<?php
	}
?>