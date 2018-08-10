<fieldset>
	<input type="checkbox" name="validation" value="required"<? if (!empty($data["validation"]) && $data["validation"] == "required") { ?> checked="checked"<? } ?> />
	<label class="for_checkbox">Required</label>
</fieldset>

<fieldset>
	<input type="checkbox" name="default_today"<? if (!empty($data["default_today"])) { ?> checked="checked"<? } ?>/>
	<label class="for_checkbox">Default Start to Today's Date</label>
</fieldset>