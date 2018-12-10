<?php
	if (!empty($bigtree["entry"]["id"]) && is_numeric($bigtree["entry"]["id"]) && $bigtree["access_level"] == "p") {
?>
<a class="button" href="<?=MODULE_ROOT?>duplicate/?event=<?=$bigtree["entry"]["id"]?><?php $admin->drawCSRFTokenGET(); ?>"><span class="icon_repeat_on" style="margin-top: 3px; margin-bottom: -7px;"></span> Duplicate Event</a>
&nbsp;
<a class="button" href="<?=MODULE_ROOT?>rules/<?=$bigtree["entry"]["id"]?>/"><span class="icon_settings" style="margin-top: 3px; margin-bottom: -7px;"></span> View Recurrences Rules</a>
&nbsp;
<a class="button" href="<?=MODULE_ROOT?>recurrences/<?=$bigtree["entry"]["id"]?>/"><span class="icon_trail" style="margin-top: 3px; margin-bottom: -7px;"></span> View Recurrences</a>
<hr>
<?php
	}
?>