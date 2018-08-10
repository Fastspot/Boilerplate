<?php
	if ($form["scheduling_open_date"]) {
		$date = DateTime::createFromFormat("Y-m-d H:i:s", $form["scheduling_open_date"]);

		if ($date) {
			$form["scheduling_open_date"] = $date->format($bigtree["config"]["date_format"]." h:i a");
		}
	}

	if ($form["scheduling_close_date"]) {
		$date = DateTime::createFromFormat("Y-m-d H:i:s", $form["scheduling_close_date"]);

		if ($date) {
			$form["scheduling_close_date"] = $date->format($bigtree["config"]["date_format"]." h:i a");
		}
	}

	$bigtree["html_fields"][] = "form_builder_scheduling_before_message";
	$bigtree["html_fields"][] = "form_builder_scheduling_after_message";
?>
<div class="contain">
	<fieldset class="left">
		<label for="form_builder_scheduling_open_date">Open Date <small>(form will show the "Before" message prior to opening)</small></label>
		<input id="form_builder_scheduling_open_date" type="text" name="scheduling_open_date" class="date_time_picker" value="<?=$form["scheduling_open_date"]?>" />
		<span class="icon_small icon_small_calendar date_picker_icon"></span>
	</fieldset>

	<fieldset class="right">
		<label for="form_builder_scheduling_close_date">Close Date <small>(form will show the "After" message after closing)</small></label>
		<input id="form_builder_scheduling_close_date" type="text" name="scheduling_close_date" class="date_time_picker" value="<?=$form["scheduling_close_date"]?>" />
		<span class="icon_small icon_small_calendar date_picker_icon"></span>
	</fieldset>
</div>

<fieldset>
	<label for="form_builder_scheduling_before_message">Before Opening Message</label>
	<textarea id="form_builder_scheduling_before_message" name="scheduling_before_message"><?=$form["scheduling_before_message"]?></textarea>
</fieldset>

<fieldset>
	<label for="form_builder_scheduling_after_message">After Closing Message</label>
	<textarea id="form_builder_scheduling_after_message" name="scheduling_after_message"><?=$form["scheduling_after_message"]?></textarea>
</fieldset>