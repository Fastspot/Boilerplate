<?php
	$bigtree["datepickers"][] = "field_start_date";
	$bigtree["datepickers"][] = "field_end_date";
	$bigtree["timepickers"][] = "field_start_time";
	$bigtree["timepickers"][] = "field_end_time";

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

	if (!in_array("events.js", $bigtree["js"])) {
		$bigtree["js"][] = "events.js";
	}
?>
<div class="sub_section" style="margin-bottom: -30px; margin-top: 30px;">
	<div style="float: left; margin: 0 0 15px 0; width: 440px;">
		<div style="float: left; margin: 0 15px 0 0;">
			<fieldset>
				<label for="field_start_date">Start Date</label>
				<input type="text" class="date_picker" id="field_start_date" autocomplete="off" value="<?php if ($bigtree["entry"]["start_date"]) { echo date("m/d/Y",strtotime($bigtree["entry"]["start_date"])); } ?>" name="start_date" tabindex="<?=$field["tabindex"]++?>" />
				<span class="icon_small icon_small_calendar date_picker_icon"></span>
			</fieldset>
		</div>
		<div style="float: left; margin: 0 15px 15px 0;">
			<fieldset>
				<label for="field_end_date">End Date</label>
				<input type="text" class="date_picker" id="field_end_date" autocomplete="off" value="<?php if ($bigtree["entry"]["end_date"]) { echo date("m/d/Y",strtotime($bigtree["entry"]["end_date"])); } ?>" name="end_date" tabindex="<?=$field["tabindex"]++?>" />
				<span class="icon_small icon_small_calendar date_picker_icon"></span>
			</fieldset>
		</div>
	</div>
	<div style="float: right; margin: 0 0 15px 0; width: 440px;">
		<div style="float: left; margin: 0 15px 0 0;">
			<fieldset>
				<label for="field_start_time">Start Time</label>
				<input type="text" class="time_picker" id="field_start_time" autocomplete="off" value="<?php if ($bigtree["entry"]["start_time"]) { echo date("g:ia",strtotime($bigtree["entry"]["start_time"])); } ?>" name="start_time" tabindex="<?=$field["tabindex"]++?>" <?php if ($bigtree["entry"]["all_day"]) { ?>disabled="disabled" <?php } ?>/>
				<span class="icon_small icon_small_clock time_picker_icon"></span>
			</fieldset>
		</div>
		<div style="float: left; margin: 0 15px 15px 0;">
			<fieldset>
				<label for="field_end_time">End Time</label>
				<input type="text" class="time_picker" id="field_end_time" autocomplete="off" value="<?php if ($bigtree["entry"]["end_time"]) { echo date("g:ia",strtotime($bigtree["entry"]["end_time"])); } ?>" name="end_time" tabindex="<?=$field["tabindex"]++?>" <?php if ($bigtree["entry"]["all_day"]) { ?>disabled="disabled" <?php } ?>/>
				<span class="icon_small icon_small_clock time_picker_icon"></span>
			</fieldset>
		</div>

		<fieldset id="all_day">
			<input type="checkbox" id="field_all_day" tabindex="<?=$field["tabindex"]++?>" name="all_day" <?php if ($bigtree["entry"]["all_day"]) { ?>checked="checked" <?php } ?>/>
			<label class="for_checkbox" for="field_all_day">All Day</label>
		</fieldset>
	</div>
	<br class="clear">
</div>