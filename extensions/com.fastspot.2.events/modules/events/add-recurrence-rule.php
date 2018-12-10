<?php
	$event = $eventsMod->get($_GET["event"]);
	
	if (!$event) {
		$admin->stop("Event not found.");
	}

	$permission_level = $admin->getAccessLevel($bigtree["module"], $event, "btx_events_events");

	if ($permission_level != "p") {
		$admin->stop("Access denied.");
	}
?>
<div class="container">
	<form method="post" action="<?=MODULE_ROOT?>create-recurrence-rule/">
		<?php $admin->drawCSRFToken(); ?>
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
						<option value="daily">Daily</option>
						<option value="weekly">Weekly</option>
						<option value="biweekly">Bi-Weekly</option>
						<option value="monthly">Monthly</option>
						<option value="yearly">Yearly</option>
					</select>
				</fieldset>
				
				<fieldset style="float: left; margin: 0 15px 0 0;" id="recurrence_detail_area">
					<input type="hidden" name="rule" value="" />
				</fieldset>
				
				<fieldset style="float: left; margin: 0; display: none;" id="recurrence_end_area">
					<label>Until</label>
					<input type="text" class="date_picker" id="field_recurring_end_date" autocomplete="off" value="" name="recurring_end_date" />
					<span class="icon_small icon_small_calendar date_picker_icon"></span>
				</fieldset>
			</div>

			<hr>
			<p>If the below fields are left empty, the main event's data will be used.</p>
			<hr>
			
			<div class="contain">
				<fieldset style="float: left; margin: 0 15px 0 0;">
					<label for="field_start_date">Start Date</label>
					<input type="text" class="date_picker" id="field_start_date" autocomplete="off" value="" name="start_date" tabindex="" />
					<span class="icon_small icon_small_calendar date_picker_icon"></span>
				</fieldset>
				<fieldset id="field_end_date_wrap">
					<label for="field_end_date">End Date</label>
					<input type="text" class="date_picker" id="field_end_date" autocomplete="off" value="" name="end_date" tabindex="" />
					<span class="icon_small icon_small_calendar date_picker_icon"></span>
				</fieldset>
			</div>
			
			<br>
			
			<div class="contain">
				<fieldset style="float: left; margin: 0 15px 0 0;">
					<label for="field_start_time">Start Time</label>
					<input type="text" class="time_picker" id="field_start_time" autocomplete="off" value="" name="start_time" tabindex="" />
					<span class="icon_small icon_small_clock time_picker_icon"></span>
				</fieldset>
				<fieldset>
					<label for="field_end_time">End Time</label>
					<input type="text" class="time_picker" id="field_end_time" autocomplete="off" value="" name="end_time" tabindex="" />
					<span class="icon_small icon_small_clock time_picker_icon"></span>
				</fieldset>
			</div>
			
			<br>
			
			<fieldset>
				<input type="checkbox" name="all_day" id="field_all_day">
				<label class="for_checkbox">All Day</label>
			</fieldset>
		</section>
		<footer>
			<input type="submit" class="button blue" value="Create"></footer>
		</footer>
	</form>
</div>