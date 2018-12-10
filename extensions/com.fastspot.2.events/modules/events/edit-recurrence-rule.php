<?php
	$recurrence_rule = SQL::fetch("SELECT * FROM btx_events_recurrence_rules WHERE id = ?", $bigtree["commands"][0]);
	$event = $eventsMod->get($recurrence_rule["event"]);
	
	if (!$event || !$recurrence_rule) {
		$admin->stop("Event not found.");
	}

	$permission_level = $admin->getAccessLevel($bigtree["module"], $event, "btx_events_events");

	if ($permission_level != "p") {
		$admin->stop("Access denied.");
	}
	
	$id = $recurrence_rule["id"];
	$type = $recurrence_rule["type"];
	$rule = json_decode($recurrence_rule["rule"], true);
	$recurring_end_date = $recurrence_rule["recurring_end_date"] ? date("m/d/Y", strtotime($recurrence_rule["recurring_end_date"])) : "";
	$start_date = $recurrence_rule["start_date"] ? date("m/d/Y", strtotime($recurrence_rule["start_date"])) : "";
	$end_date = $recurrence_rule["end_date"] ? date("m/d/Y", strtotime($recurrence_rule["end_date"])) : "";
	$start_time = $recurrence_rule["start_time"] ? date("g:i a", strtotime($recurrence_rule["start_time"])) : "";
	$end_time = $recurrence_rule["end_time"] ? date("g:i a", strtotime($recurrence_rule["end_time"])) : "";
	$all_day = $recurrence_rule["all_day"];
	
	if ($type == "monthly" && is_array($rule)) {
		$rule = "day#".$rule["week"]."#".$rule["day"];
	}
?>
<div class="container">
	<form method="post" action="<?=MODULE_ROOT?>update-recurrence-rule/">
		<?php $admin->drawCSRFToken(); ?>
		<input type="hidden" name="return" value="<?=htmlspecialchars($_GET["return"])?>">
		<input type="hidden" name="id" value="<?=$recurrence_rule["id"]?>">
		<input type="hidden" name="event" value="<?=$event["id"]?>">
		<summary>
			<h2><?=$event["title"]?></h2>
		</summary>
		<section>
			<div class="contain">
				<fieldset style="float: left; margin: 0 15px 0 0;">
					<label for="field_recurrence_type">Reoccur</label>
					<select name="type" id="field_recurrence_type" tabindex="">
						<option value="specific">Specific Date</option>
						<option value="daily"<?php if ($type == "daily") { ?> selected<?php } ?>>Daily</option>
						<option value="weekly"<?php if ($type == "weekly") { ?> selected<?php } ?>>Weekly</option>
						<option value="biweekly"<?php if ($type == "biweekly") { ?> selected<?php } ?>>Bi-Weekly</option>
						<option value="monthly"<?php if ($type == "monthly") { ?> selected<?php } ?>>Monthly</option>
						<option value="yearly"<?php if ($type == "yearly") { ?> selected<?php } ?>>Yearly</option>
					</select>
				</fieldset>
				
				<fieldset style="float: left; margin: 0 15px 0 0;" id="recurrence_detail_area">
					<input type="hidden" name="rule" value="<?=BigTree::safeEncode(json_encode($rule))?>" />
				</fieldset>
				
				<fieldset style="float: left; margin: 0; display: none;" id="recurrence_end_area">
					<label>Until</label>
					<input type="text" class="date_picker" id="field_recurring_end_date" autocomplete="off" value="<?=$recurring_end_date?>" name="recurring_end_date" />
					<span class="icon_small icon_small_calendar date_picker_icon"></span>
				</fieldset>
			</div>

			<hr>
			<p>If the below fields are left empty, the main event's data will be used.</p>
			<hr>
			
			<div class="contain">
				<fieldset style="float: left; margin: 0 15px 0 0;">
					<label for="field_start_date">Start Date</label>
					<input type="text" class="date_picker" id="field_start_date" autocomplete="off" value="<?=$start_date?>" name="start_date" tabindex="" />
					<span class="icon_small icon_small_calendar date_picker_icon"></span>
				</fieldset>
				<fieldset id="field_end_date_wrap">
					<label for="field_end_date">End Date</label>
					<input type="text" class="date_picker" id="field_end_date" autocomplete="off" value="<?=$end_date?>" name="end_date" tabindex="" />
					<span class="icon_small icon_small_calendar date_picker_icon"></span>
				</fieldset>
			</div>
			
			<br>
			
			<div class="contain">
				<fieldset style="float: left; margin: 0 15px 0 0;">
					<label for="field_start_time">Start Time</label>
					<input type="text" class="time_picker" id="field_start_time" autocomplete="off" value="<?=$start_time?>" name="start_time" tabindex="" />
					<span class="icon_small icon_small_clock time_picker_icon"></span>
				</fieldset>
				<fieldset>
					<label for="field_end_time">End Time</label>
					<input type="text" class="time_picker" id="field_end_time" autocomplete="off" value="<?=$end_time?>" name="end_time" tabindex="" />
					<span class="icon_small icon_small_clock time_picker_icon"></span>
				</fieldset>
			</div>
			
			<br>
			
			<fieldset>
				<input type="checkbox" name="all_day" id="field_all_day"<?php if ($all_day) { ?> checked<?php } ?>>
				<label class="for_checkbox">All Day</label>
			</fieldset>
		</section>
		<footer>
			<input type="submit" class="button blue" value="Update"></footer>
		</footer>
	</form>
</div>