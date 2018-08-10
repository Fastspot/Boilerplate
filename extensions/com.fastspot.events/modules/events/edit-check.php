<?php
	$event = BTXEvents::get($_GET["event"]);
	
	if ($event["recurrence_type"]) {
?>
<div class="container">
	<section>
		<p><strong>The event you're attempting to edit is a recurring event.</strong></p>
		<p>Do you want to edit the details of every recurrence of &ldquo;<?=$event["title"]?>&rdquo;, or only the specific date you clicked? (<?=date("F j, Y",strtotime($_GET["date"]))?>)</p>
		<p>
		    &mdash; Editing every recurrence of this event will cause each recurrence to be affected by your changes.<br />
		    &mdash; Separating the event will remove that date from the recurring event and create a new event based on the recurring event that you can edit individually.
		</p>
	</section>
	<footer>
		<a class="button" href="<?=MODULE_ROOT?>edit/<?=$event["id"]?>/"><span class="icon_small icon_small_calendar"></span> Edit All Recurrences</a>
		<a class="button" href="<?=MODULE_ROOT?>separate/?event=<?=$event["id"]?>&date=<?=$_GET["date"]?><?php if (method_exists($admin, "drawCSRFTokenGET")) { $admin->drawCSRFTokenGET(); } ?>"><span class="icon_small icon_small_blog"></span> Separate Event</a>
	</footer>
</div>
<?php
	} else {
		BigTree::redirect(MODULE_ROOT."edit/".$event["id"]."/");
	}
?>