<?php
	$bigtree["datepickers"][] = "field_start_date";
	$bigtree["datepickers"][] = "field_end_date";
	$bigtree["datepickers"][] = "field_recurring_end_date";
	$bigtree["timepickers"][] = "field_start_time";
	$bigtree["timepickers"][] = "field_end_time";
	if (!in_array("events.js",$bigtree["js"])) {
		$bigtree["js"][] = "events.js";
	}


	// Format Start Date w/ Chosen Date Format
	if ($bigtree["entry"]["start_date"] && $bigtree["entry"]["start_date"] != "0000-00-00") {
		$start_date = date($bigtree["config"]["date_format"],strtotime($bigtree["entry"]["start_date"]));
	} else {
		$start_date = "";
	}

	// Format End Date w/ Chosen Date Format
	if ($bigtree["entry"]["end_date"] && $bigtree["entry"]["end_date"] != "0000-00-00") {
		$end_date = date($bigtree["config"]["date_format"],strtotime($bigtree["entry"]["end_date"]));
	} else {
		$end_date = "";
	}
?>
<div class="sub_section" style="margin-bottom: -30px; margin-top: 30px;">
	<div style="float: left; margin: 0 15px 0 0;">
		<fieldset>
			<label for="field_start_date">Start Date</label>
			<input type="text" class="date_picker" id="field_start_date" autocomplete="off" value="<?=$start_date?>" name="start_date" tabindex="7" />
			<span class="icon_small icon_small_calendar date_picker_icon"></span>
		</fieldset>
		<fieldset>
			<label for="field_start_time">Start Time</label>
			<input type="text" class="time_picker" id="field_start_time" autocomplete="off" value="<?php if ($bigtree["entry"]["start_time"]) { echo date("g:ia",strtotime($bigtree["entry"]["start_time"])); } ?>" name="start_time" tabindex="9" <?php if ($bigtree["entry"]["all_day"]) { ?>disabled="disabled" <?php } ?>/>
			<span class="icon_small icon_small_clock time_picker_icon"></span>
		</fieldset>
	</div>
	<div style="float: left; margin: 0 15px 15px 0;">
		<fieldset>
			<label for="field_end_date">End Date</label>
			<input type="text" class="date_picker" id="field_end_date" autocomplete="off" value="<?=$end_date?>" name="end_date" tabindex="8" />
			<span class="icon_small icon_small_calendar date_picker_icon"></span>
		</fieldset>
		<fieldset>
			<label for="field_end_time">End Time</label>
			<input type="text" class="time_picker" id="field_end_time" autocomplete="off" value="<?php if ($bigtree["entry"]["end_time"]) { echo date("g:ia",strtotime($bigtree["entry"]["end_time"])); } ?>" name="end_time" tabindex="10" <?php if ($bigtree["entry"]["all_day"]) { ?>disabled="disabled" <?php } ?>/>
			<span class="icon_small icon_small_clock time_picker_icon"></span>
		</fieldset>
	</div>
	<br class="clear" />
	<fieldset>
		<input type="checkbox" id="field_all_day" tabindex="11" name="all_day" <?php if ($bigtree["entry"]["all_day"]) { ?>checked="checked" <?php } ?>/> <label class="for_checkbox" for="field_all_day">All Day</label>
	</fieldset>
	<fieldset style="float: left; margin: 0 15px 0 0;">
		<label for="field_recurrence_type">Reoccur</label>
		<select name="recurrence_type" id="field_recurrence_type" tabindex="12">
			<option value="">Never</option>
			<option value="daily"<?php if ($bigtree["entry"]["recurrence_type"] == "daily") { ?> selected="selected"<?php } ?>>Daily</option>
			<option value="weekly"<?php if ($bigtree["entry"]["recurrence_type"] == "weekly") { ?> selected="selected"<?php } ?>>Weekly</option>
			<option value="monthly"<?php if ($bigtree["entry"]["recurrence_type"] == "monthly") { ?> selected="selected"<?php } ?>>Monthly</option>
			<option value="yearly"<?php if ($bigtree["entry"]["recurrence_type"] == "yearly") { ?> selected="selected"<?php } ?>>Yearly</option>
		</select>
	</fieldset>
	<fieldset style="float: left; margin: 0 15px 0 0;<?php if (!$bigtree["entry"]["recurrence_type"] || $bigtree["entry"]["recurrence_type"] == "daily") { ?> display: none;<?php } ?>" id="recurrence_detail_area">
		<input type="hidden" name="recurrence_detail" value="<?=$bigtree["entry"]["recurrence_detail"]?>" />
	</fieldset>
	<fieldset style="float: left; margin: 0;<?php if (!$bigtree["entry"]["recurrence_type"]) { ?> display: none;<?php } ?>" id="recurrence_end_area">
		<label>Until</label>
		<input type="text" class="date_picker" id="field_recurring_end_date" autocomplete="off" value="<?php if ($bigtree["entry"]["recurring_end_date"]) { echo date("m/d/Y",strtotime($bigtree["entry"]["recurring_end_date"])); } ?>" name="recurring_end_date" />
		<span class="icon_small icon_small_calendar date_picker_icon"></span>
	</fieldset>
	<br class="clear" />
</div>