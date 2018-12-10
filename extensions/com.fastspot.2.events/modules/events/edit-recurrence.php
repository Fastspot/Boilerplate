<?php
	$event = $eventsMod->get($_GET["event"]);
	$permission_level = $admin->getAccessLevel($bigtree["module"], $event, "btx_events_events");

	if ($permission_level != "p") {
		$admin->stop("Access denied.");
	}
	
	$recurrence = SQL::fetch("SELECT * FROM btx_events_date_cache WHERE id = ?", $_GET["recurrence"]);
	
	if (!$event || !$recurrence || $recurrence["type"] == "specific") {
		$admin->stop("Invalid recurrence.");
	}
?>
<div class="container">
	<form method="post" action="<?=MODULE_ROOT?>update-recurrence/">
		<?php $admin->drawCSRFToken(); ?>
		<input type="hidden" name="event" value="<?=$event["id"]?>">
		<input type="hidden" name="recurrence" value="<?=$recurrence["id"]?>">
		<summary>
			<h2><?=$event["title"]?></h2>
		</summary>
		<section>
			<div class="contain">
				<div class="left">
					<fieldset>
						<label for="field_start_date">Start Date</label>
						<input type="text" class="date_picker" id="field_start_date" autocomplete="off" value="<?=date("m/d/Y",strtotime($recurrence["start"]))?>" name="start_date" tabindex="" />
						<span class="icon_small icon_small_calendar date_picker_icon"></span>
					</fieldset>
				</div>
				<div class="right">
					<fieldset>
						<label for="field_end_date">End Date</label>
						<input type="text" class="date_picker" id="field_end_date" autocomplete="off" value="<?php if ($recurrence["end_date"]) { echo date("m/d/Y",strtotime($recurrence["end_date"])); } ?>" name="end_date" tabindex="" />
						<span class="icon_small icon_small_calendar date_picker_icon"></span>
					</fieldset>
				</div>
			</div>
			
			<div class="contain">
				<div class="left">
					<fieldset>
						<label for="field_start_time">Start Time</label>
						<input type="text" class="time_picker" id="field_start_time" autocomplete="off" value="<?php if ($recurrence["start_time"]) { echo date("g:ia", strtotime($recurrence["start"])); } ?>" name="start_time" tabindex="" <?php if ($recurrence["all_day"]) { ?> disabled<?php } ?> />
						<span class="icon_small icon_small_clock time_picker_icon"></span>
					</fieldset>
				</div>
				<div class="right">
					<fieldset>
						<label for="field_end_time">End Time</label>
						<input type="text" class="time_picker" id="field_end_time" autocomplete="off" value="<?php if ($recurrence["end_time"]) { echo date("g:ia",strtotime($recurrence["end_time"])); } ?>" name="end_time" tabindex="" <?php if ($recurrence["all_day"]) { ?> disabled<?php } ?>/>
						<span class="icon_small icon_small_clock time_picker_icon"></span>
					</fieldset>
				</div>
			</div>
			
			<fieldset>
				<input type="checkbox" name="all_day" id="field_all_day"<?php if ($recurrence["all_day"]) { ?> checked<?php } ?>>
				<label class="for_checkbox">All Day</label>
			</fieldset>
		</section>
		<footer>
			<input type="submit" class="button blue" value="Update"></footer>
		</footer>
	</form>
</div>