<?php
	$mod = new BTXReusableCallouts;
	$callout = $mod->get($bigtree["commands"][0]);
	$usage = $mod->getUsage($callout);
?>
<div class="container">
	<summary><h2>Reusable Callout Report: <?=$callout["title"]?></h2></summary>
	<section>
		<?php
			if (!count($usage["pages"]) && !count($usage["modules"]) && !count($usage["settings"])) {
		?>
		<p>This callout is not currently in use.</p>
		<?php
			}
			
			if (count($usage["pages"])) {
		?>
		<h3>Pages</h3>
		<ul>
			<?php foreach ($usage["pages"] as $page) { ?>
			<li>Page &ldquo;<a href="<?=ADMIN_ROOT?>pages/edit/<?=$page["page"]?>/" target="_blank"><?=$page["title"]?></a>&rdquo; in field &ldquo;<?=$page["field"]?>&rdquo;</li>
			<?php } ?>
		</ul>
		<?php
			}
			
			if (count($usage["modules"])) {
		?>
		<h3>Modules</h3>
		<ul>
			<?php
				foreach ($usage["modules"] as $entry) {
					$module = $admin->getModule($entry["module"]);
					$action = $admin->getModuleActionForForm($entry["form"]);
			?>
			<li>Field &ldquo;<?=$entry["field"]?>&rdquo; in <a href="<?=ADMIN_ROOT.$module["route"]?>/<?=$action["route"]?>/<?=$entry["entry"]?>/" target="_blank">an entry</a> in the <?=$module["name"]?> module.</li>
			<?php
				}
			?>
		</ul>
		<?php
			}
			
			if (count($usage["settings"])) {
		?>
		<h3>Settings</h3>
		<ul>
			<?php foreach ($usage["settings"] as $entry) { ?>
			<li>Setting &ldquo;<a href="<?=ADMIN_ROOT?>settings/edit/<?=$entry["id"]?>/" target="_blank"><?=$entry["title"]?></a>&rdquo;</li>
			<?php } ?>
		</ul>
		<?php
			}
		?>
	</section>
</div>
