<?php
	// We don't want to show this field when we're modifying the reusable callouts in the module.
	// $_POST is something we have control over both inline and when calling the AJAX resources
	if (!isset($_POST["btx_reusable_callouts_editor"])) {
		$module = new BTXReusableCallouts;
		$available = $module->getMatching(array("archived", "type"), array("", $bigtree["callout"]["id"]), "title ASC");
		$existing_value = false;

		if (count($available)) {
			$field["options"]["list"] = array();

			foreach ($available as $item) {
				$field["options"]["list"][] = array("value" => $item["id"], "description" => $item["title"]);

				// We need to make sure the current value is in the list since callout types can switch
				if ($item["id"] == $field["value"]) {
					$existing_value = $field["value"];
				}
			}
?>
<fieldset>
	<label<?=$label_validation_class?>><?=$field["title"]?><?php if ($field["subtitle"]) { ?> <small><?=$field["subtitle"]?></small><?php } ?></label>
	<?php
		if (BIGTREE_REVISION > 300) {
			include BigTree::path("admin/field-types/list/draw.php");
		} else {
			include BigTree::path("admin/form-field-types/draw/list.php");
		}
	?>
</fieldset>
<hr>
<?php
		}
	}
?>
<script>
	(function() {

		var DisplayField;
		var Form;
		var Fieldset;
		var LastValue = "<?=$existing_value?>";
		var OtherFieldsets;
		var OtherFields;
		var RequiredFields;
		var SavedDisplayFieldValue;

		// Add a ready hook to populate our values
		BigTree.ReadyHooks.push(function() {
			Form = $("#<?=$field["id"]?>").parents(".callout_fields");
			Fieldset = $("#<?=$field["id"]?>").parents("fieldset");
			OtherFieldsets = Form.find("fieldset").not(Fieldset);
			RequiredFields = OtherFieldsets.find("input.required, select.required, textarea.required, input.numeric, input.email, input.link");
			OtherFields = OtherFieldsets.find("input, select, textarea");
			DisplayField = Form.find(".display_field");
			SavedDisplayFieldValue = DisplayField.val();
		});

		<?php
			if ($existing_value) {
		?>
		// Add a ready hook to disable other form elements if this is enabled
		BigTree.ReadyHooks.push(saveInputStates);
		<?php
			}
		?>

		function saveInputStates() {
			RequiredFields.each(function() {
				$(this).attr("data-reusable-callouts-saved-class", $(this).attr("class"));
				$(this).attr("class", "");
			});

			OtherFieldsets.addClass("disabled");
			DisplayField.val("<?=$field["key"]?>");

			<?php
				if (BIGTREE_REVISION < 211) {
			?>
			OtherFields.each(function() {
				$(this).attr("data-disabled-state", $(this).prop("disabled"));
				$(this).prop("disabled", true);

				if ($(this).get(0).customControl && typeof $(this).get(0).customControl.disable == "function") {
					$(this).get(0).customControl.disable();
				}
			});
			<?php
				}
			?>
		}

		function resetInputStates() {
			RequiredFields.each(function() {
				$(this).attr("class", $(this).attr("data-reusable-callouts-saved-class"));
			});

			OtherFieldsets.removeClass("disabled");
			DisplayField.val(SavedDisplayFieldValue);

			<?php
				if (BIGTREE_REVISION < 211) {
			?>
			OtherFields.each(function() {
				if ($(this).attr("data-disabled-state") == "false") {
					$(this).prop("disabled", false);

					if ($(this).get(0).customControl && typeof $(this).get(0).customControl.enable == "function") {
						$(this).get(0).customControl.enable();
					}
				}
			});
			<?php
				}
			?>
		}

		$("#<?=$field["id"]?>").change(function() {
			var value = $(this).val();

			// We're going to remove the required classes and disable everything
			if (value && !LastValue) {
				saveInputStates();
			// We're going to return the classes and re-enable
			} else if (!value && LastValue) {
				resetInputStates();
			}

			LastValue = value;
		});

	})();
</script>