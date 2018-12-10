<?php
	$event = $eventsMod->get($bigtree["commands"][0]);
	
	if (!$event) {
		$cms->catch404();
	}

	$permission_level = $admin->getAccessLevel($bigtree["module"], $event, "btx_events_events");

	if ($permission_level != "p") {
		$admin->stop("Access denied.");
	}
	
	// Get all the recurrences
	$recurrences = [];
	$times = [];
	$rules = [];
	
	$cached = SQL::fetchAll("SELECT * FROM btx_events_date_cache WHERE event = ? AND (start > NOW() OR end < NOW()) ORDER BY start ASC", $event["id"]);
	$canceled = SQL::fetchAll("SELECT * FROM btx_events_date_cache_canceled WHERE event = ? AND (start > NOW() OR end < NOW()) ORDER BY start ASC", $event["id"]);
	
	foreach ($cached as $item) {
		$item["status"] = "active";
		$recurrences[] = $item;
		$times[] = strtotime($item["start"]);
	}
		
	foreach ($canceled as $item) {
		$item["status"] = "canceled";
		$recurrences[] = $item;
		$times[] = strtotime($item["start"]);
	}

	array_multisort($times, SORT_ASC, $recurrences);
	
	// Get all the rules
	$raw_rules = SQL::fetchAll("SELECT * FROM btx_events_recurrence_rules WHERE event = ?", $event["id"]);
	
	foreach ($raw_rules as $rule) {
		$rules[$rule["id"]] = $rule;
	}	
?>
<div class="table auto_modules">
	<summary>
		<a class="add" href="<?=MODULE_ROOT?>add-recurrence-rule/?event=<?=$event["id"]?>"><span></span>Add Recurrence</a>
		<h2><?=$event["title"]?></h2>
	</summary>
	<header>
		<span class="view_column view_column_event_date">Date</span>
		<span class="view_column view_column_event_time">Start Time</span>
		<span class="view_column view_column_event_time">End Time</span>
		<span class="view_column view_column_event_recurrence_reason">Recurrence Reason</span>
		<span class="view_action"></span>
		<span class="view_action"></span>
		<span class="view_action"></span>
	</header>
	<ul id="results">
		<?php
			foreach ($recurrences as $item) {
		?>
		<li<?php if ($item["status"] == "canceled") { ?> class="event_canceled"<?php } ?>>
			<section class="view_column view_column_event_date"><?=date("F j, Y", strtotime($item["start"]))?></section>
			<section class="view_column view_column_event_time">
				<?php
					if (!$item["all_day"]) {
						echo date("g:ia", strtotime($item["start"]));
					}
				?>
			</section>
			<section class="view_column view_column_event_time">
				<?php
					if ($item["end_time"]) {
						echo date("g:ia", strtotime($item["end"]));
					}
				?>
			</section>
			<section class="view_column view_column_event_recurrence_reason">
				<?php
					if (!$item["rule"]) {
						echo "Base Event";
					} elseif ($rules[$item["rule"]]["type"] == "specific") {
						echo "Specific";
					} else {
						echo "Implicit";
					}
				?>
			</section>
			<section class="view_action">
				<?php
					if ($item["rule"] && $rules[$item["rule"]]["type"] != "specific") {
				?>
				<a href="<?=MODULE_ROOT?>edit-recurrence-rule/<?=$item["rule"]?>/?return=recurrences" class="icon_trail" title="Edit Recurrence Rule"></a>
				<?php
					}
				?>
			</section>
			<section class="view_action">
				<?php
					if ($item["rule"]) {
						if ($item["status"] == "canceled") {
				?>
				<span class="icon_edit disabled_icon"></span>
				<?php
						} else {
							if ($rules[$item["rule"]]["type"] != "specific") {
				?>
				<a href="<?=MODULE_ROOT?>edit-recurrence/?event=<?=$item["event"]?>&recurrence=<?=$item["id"]?>" class="icon_edit"></a>
				<?php
							} else {
				?>
				<a href="<?=MODULE_ROOT?>edit-recurrence-rule/<?=$item["rule"]?>/?return=recurrences" class="icon_edit"></a>				
				<?php
							}
						}
					}
				?>
			</section>
			<section class="view_action">
				<?php
					if ($item["rule"]) {
						if ($item["status"] == "canceled") {
				?>
				<a href="<?=MODULE_ROOT?>uncancel-recurrence/?event=<?=$item["event"]?>&recurrence=<?=$item["id"]?><?php $admin->drawCSRFTokenGET(); ?>" class="icon_restore"></a>
				<?php
						} elseif ($rules[$item["rule"]]["type"] == "specific") {
				?>
				<a href="<?=MODULE_ROOT?>delete-recurrence-rule/?rule=<?=$item["rule"]?>&return=recurrences<?php $admin->drawCSRFTokenGET(); ?>" class="icon_delete"></a>
				<?php
						} else {
				?>
				<a href="<?=MODULE_ROOT?>cancel-recurrence/?event=<?=$item["event"]?>&recurrence=<?=$item["id"]?><?php $admin->drawCSRFTokenGET(); ?>" class="icon_archive"></a>
				<?php		
						}
					}
				?>
			</section>
		</li>
		<?php
			}
		?>
	</ul>
</div>

<br>

<a class="button" href="<?=MODULE_ROOT?>rules/<?=$event["id"]?>/">View Rules</a>

<style type="text/css">
	.event_canceled * {
		text-decoration: line-through;
	}
	
	.view_column_event_date {
		width: 208px;
	}
	
	.view_column_event_time {
		width: 160px;
	}
	
	.view_column_event_recurrence_reason {
		width: 230px;
	}
</style>

<script>
	(function() {
		var Current;
		
		$(".table").on("click",".icon_delete",function() {
			Current = $(this);
			
			BigTreeDialog({
				title: "Delete Item",
				content: '<p class="confirm">Are you sure you want to delete this recurrence?</p>',
				icon: "delete",
				alternateSaveText: "OK",
				callback: function() {
					var href = BigTree.cleanHref(Current.attr("href"));
					document.location.href = href;
				}
			});
	
			return false;
		});
	})();
</script>