<?php
	$event = $eventsMod->get($bigtree["commands"][0]);
		
	if (!$event) {
		$cms->catch404();
	}

	$permission_level = $admin->getAccessLevel($bigtree["module"], $event, "btx_events_events");

	if ($permission_level != "p") {
		$admin->stop("Access denied.");
	}
?>
<div class="table auto_modules">
	<summary>
		<a class="add" href="<?=MODULE_ROOT?>add-recurrence-rule/?event=<?=$event["id"]?>"><span></span>Add Rule</a>
		<h2><?=$event["title"]?></h2>
	</summary>
	<header>
		<span class="view_column view_column_event_rule_type">Type</span>
		<span class="view_column view_column_event_rule_detail">Rule</span>
		<span class="view_column view_column_event_rule_cancellations">Cancellations</span>
		<span class="view_action"></span>
		<span class="view_action"></span>
	</header>
	<ul id="results">
		<?php
			$rules = SQL::fetchAll("SELECT * FROM btx_events_recurrence_rules WHERE event = ?", $event["id"]);
			
			foreach ($rules as $item) {
				$rule = json_decode($item["rule"], true);
				$cancels = json_decode($item["cancellations"], true);
		?>
		<li>
			<section class="view_column view_column_event_rule_type"><?=ucwords($item["type"])?></section>
			<section class="view_column view_column_event_rule_detail">
				<?php
					if ($item["type"] == "daily") {
						echo "";
					} elseif ($item["type"] == "weekly" || $item["type"] == "biweekly") {
						$recur_days = [];
						
						foreach ($rule as $day) {
							$recur_days[] = BTXEvents::$Days[$day];
						}
						
						echo implode(", ", $recur_days);
					} elseif ($item["type"] == "monthly") {
						if (is_numeric($rule)) {
							echo "On the ".$getOrdinal($rule);
						} else {
							echo $getOrdinal($rule["week"])." ".BTXEvents::$Days[$rule["day"]];
						}
					} elseif ($item["type"] == "yearly") {
						list($month, $day) = explode("-", $rule);
						
						echo BTXEvents::$Months[$month]." ".$getOrdinal($day);
					} elseif ($item["type"] == "specific") {
						echo $item["start_date"];
						
						if ($item["end_date"]) {
							echo " - ".$item["end_date"];
						}
					}
				?>
			</section>
			<section class="view_column view_column_event_rule_cancellations">
				<?php
					echo implode(", ", $cancels);
				?>				
			</section>
			<section class="view_action">
				<a href="<?=MODULE_ROOT?>edit-recurrence-rule/<?=$item["id"]?>/" class="icon_edit" title="Edit"></a>
			</section>
			<section class="view_action">
				<a href="<?=MODULE_ROOT?>delete-recurrence-rule/?rule=<?=$item["id"]?><?php $admin->drawCSRFTokenGET(); ?>" class="icon_delete" title="Delete"></a>
			</section>
		</li>
		<?php
			}
		?>
	</ul>
</div>

<br>

<a class="button" href="<?=MODULE_ROOT?>recurrences/<?=$event["id"]?>/">View Recurrences</a>

<style type="text/css">
	.view_column_event_rule_type {
		width: 100px;
	}
	
	.view_column_event_rule_detail {
		width: 250px;
	}
	
	.view_column_event_rule_cancellations {
		width: 468px;
	}
</style>

<script>
	(function() {
		var Current;
		
		$(".table").on("click",".icon_delete",function() {
			Current = $(this);
			
			BigTreeDialog({
				title: "Delete Item",
				content: '<p class="confirm">Are you sure you want to delete this rule?</p>',
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