<?php
	$eventsMod = new BTXEvents;
	$items = $eventsMod->getEventsByDate($bigtree["commands"][0]);
?>
<div class="container" id="btx_events_search_results">
	<summary><h2>Events for <?=date("F j, Y",strtotime($bigtree["commands"][0]))?></h2></summary>
	<section>
		<div class="table">
			<header>
				<span class="view_column btx_events_column_date">Date</span>
				<span class="view_column btx_events_column_title">Title</span>
				<span class="view_action">Recurs</span>
				<span class="view_action">Edit</span>
				<span class="view_action">Delete</span>
			</header>
			<ul>
				<?php foreach ($items as $item) { ?>
				<li>
					<section class="view_column btx_events_column_date"><?=date("m/d/Y",strtotime($item["start"]))?></section>
					<section class="view_column btx_events_column_title"><?=htmlspecialchars($item["title"])?></section>
					<section class="view_action">
						<span class="icon_repeat<?php if ($item["recurrence_type"]) { ?> icon_repeat_on<?php } ?>"></span>
					</section>
					<section class="view_action"><a href="<?=MODULE_ROOT?>edit-check/?event=<?=$item["id"]?>&date=<?=date("Y-m-d",strtotime($item["start"]))?>" class="icon_edit"></a></section>
					<section class="view_action"><a href="#<?=$item["id"]?>" class="icon_delete"></a></section>
				</li>
				<?php } ?>
			</ul>
		</div>
	</section>
</div>