<?php
	/**
	 * @global array $field
	 */
	
	if (!is_array($field["value"])) {
		$field["value"] = array(
			"form" => $field["value"],
			"email_field" => false,
			"email_template" => false
		);
	}
	
	$forms = BTXFormBuilder::getAllForms("title ASC");
?>
<hr>

<fieldset>
	<label for="form_builder_form_field">Form</label>
	<select id="form_builder_form_field" name="<?=$field["key"]?>[form]" class="required">
		<option></option>
		<?php foreach ($forms as $form) { ?>
		<option value="<?=$form["id"]?>"<?php if ($form["id"] == $field["value"]["form"]) { ?> selected="selected"<?php } ?>><?=$form["title"]?></option>
		<?php } ?>
	</select>
</fieldset>

<fieldset>
	<label for="form_builder_email_field">Email Field <small>(for confirmation email)</small></label>
	<select id="form_builder_email_field"<?php if (!$field["value"]["form"]) { ?> disabled="disabled"<?php } ?> name="<?=$field["key"]?>[email_field]">
		<?php
			if ($field["value"]["form"]) {
				include SERVER_ROOT."extensions/com.fastspot.form-builder/ajax/get-form-email-picker.php";
			} else {
		?>
		<option>Please Select a Form</option>
		<?php
			}
		?>
	</select>
</fieldset>

<fieldset>
	<label for="form_builder_email_subject_field">Confirmation Email Subject</label>
	<input id="form_builder_email_subject_field" type="text" name="<?=$field["key"]?>[email_subject]" value="<?=BigTree::safeEncode($field["value"]["email_subject"])?>" />
</fieldset>

<fieldset>
	<label for="form_builder_email_template_field">Confirmation Email Template</label>
	<label>
		<small id="form_builder_email_tokens" style="display: block; margin: 10px 0; user-select: text; -moz-user-select: text; -webkit-user-select: text;">
			<?php
				if ($field["value"]["form"]) {
					include SERVER_ROOT."extensions/com.fastspot.form-builder/ajax/get-form-token-list.php";
				} else {
					echo "Choose a form to populate available replacement tokens and enable this field.";
				}
			?>
		</small>
	</label>
	<textarea id="form_builder_email_template_field" name="<?=$field["key"]?>[email_template]?>"<?php if (!$field["value"]["form"]) { ?> disabled="disabled"<?php } ?>><?=$field["value"]["email_template"]?></textarea>
</fieldset>

<hr>

<script>
	(function() {
		var FormField = $("#form_builder_form_field");
		var EmailField = $("#form_builder_email_field");
		var TemplateField = $("#form_builder_email_template_field");
		var TokenField = $("#form_builder_email_tokens");
		
		FormField.on("change", function () {
			var val = FormField.val();
			
			if (val) {
				$.ajax({
					url: "<?=ADMIN_ROOT?>*/com.fastspot.form-builder/ajax/get-form-email-picker/",
					method: "POST",
					data: { form: val }
				}).done(function(html) {
					EmailField.html(html).removeClass("custom_control");
					EmailField.prev(".select").remove();
					EmailField.prop("disabled", false);
					new BigTreeSelect("#form_builder_email_field");
				});
				
				$.ajax({
					url: "<?=ADMIN_ROOT?>*/com.fastspot.form-builder/ajax/get-form-token-list/",
					method: "POST",
					data: { form: val }
				}).done(function(html) {
					TokenField.html(html);
					TemplateField.prop("disabled", false);
				});
			} else {
				EmailField.get(0).customControl.disable();
				TemplateField.prop("disabled", true);
				TokenField.html("Choose a form to populate available replacement tokens and enable this field.");
			}
		});
		
	})();
</script>