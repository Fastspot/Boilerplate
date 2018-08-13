<?php
	$form = BTXFormBuilder::getForm($bigtree["commands"][0]);
	$pages = BTXFormBuilder::getFormUsage($bigtree["commands"][0]);

	if ($form) {
?>
<div class="container">
	<summary><h2><?=$form["title"]?></h2></summary>
	<section>
		<?php
			if (count($pages)) {
		?>
		<p>This form is being used on the following pages:</p>
		<ul>
			<?php
				foreach ($pages as $page) {
			?>
			<li><a href="<?=ADMIN_ROOT?>pages/edit/<?=$page["id"]?>/"><?=$page["nav_title"]?></a></li>
			<?php
				}
			?>
		</ul>
		<?php
			} else {
		?>
		<p>This form is not being used on any pages.</p>
		<?php
			}
		?>
	</section>
</div>
<?php
	} else {
?>
<p class="error_message" style="margin-bottom: 0;">The chosen form no longer exists.</p>
<?php
	}
?>