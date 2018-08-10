<?php
	$bigtree["js"][] = "*/com.fastspot.advanced-callouts/js/predefined-callouts.js";

	// Pretend to be vanilla callouts for layout purposes
	$field["type"] = "callouts";

	// Prevent warnings on bad value
	if (!is_array($field["value"])) {
		$field["value"] = array();
	}

	// Make sure we have all of our prefilled callouts
	$missing_prefilled = $field["options"]["prefilled"];
	
	foreach ($field["value"] as &$item) {
		$prefilled_index = array_search($item["type"],$missing_prefilled);
		
		if ($prefilled_index !== false) {
			unset($missing_prefilled[$prefilled_index]);
		}
	}

	// Fill in the array value with any missing prefilled ones
	foreach ($missing_prefilled as $id) {
		array_unshift($field["value"],array(
			"type" => $id,
			"!locked" => true
		));
	}
	
	// Setup word usage and max values
	$noun = $field["options"]["noun"] ? htmlspecialchars($field["options"]["noun"]) : "Callout";
	$max = !empty($field["options"]["max"]) ? $field["options"]["max"] : 0;
?>
<fieldset class="callouts<?php if ($bigtree["last_resource_type"] == "callouts") { ?> callouts_no_margin<?php } ?>" id="<?=$field["id"]?>">
	<label<?=$label_validation_class?>><?=$field["title"]?><?php if ($field["subtitle"]) { ?> <small><?=$field["subtitle"]?></small><?php } ?></label>
	<div class="contain">
		<?php
			$x = 0;
			
			foreach ($field["value"] as $callout) {
				$type = $admin->getCallout($callout["type"]);
				$no_drag = false;
				$edit_attributes = array();

				if ($callout["!locked"]) {
					$edit_attributes[] = 'data-locked="true"';
					
					if (!empty($field["options"]["disable_drag"])) {
						$edit_attributes[] = 'data-no-drag="true"';
						$no_drag = true;
					}
				}
		?>
		<article<?php if (!$no_drag) { ?> class="draggable"<?php } ?>>
			<input type="hidden" class="callout_data" value="<?=base64_encode(json_encode($callout))?>" />
			<?php BigTreeAdmin::drawArrayLevel(array($x),$callout,$field) ?>
			<h4>
				<?=BigTree::safeEncode($callout["display_title"])?>
				<input type="hidden" name="<?=$field["key"]?>[<?=$x?>][display_title]" value="<?=BigTree::safeEncode($callout["display_title"])?>" />
				<?php if ($callout["!locked"]) { ?>
				<input type="hidden" name="<?=$field["key"]?>[<?=$x?>][!locked]" value="true" />
				<?php } ?>
			</h4>
			<p><?=$type["name"]?></p>
			<div class="bottom">
				<?php
					// If it's a non-prefilled callout or we're letting them drag, show the icon
					if (empty($callout["!locked"]) || empty($field["options"]["disable_drag"])) {
				?>
				<span class="icon_drag"></span>
				<?php
					}

					if ($type["level"] > $admin->Level) {
				?>
				<span class="icon_disabled has_tooltip" data-tooltip="<p>This callout requires a higher user level to edit.</p>"></span>
				<?php
					} else {
				?>
				<a href="#" class="icon_edit"<?php if (count($edit_attributes)) { echo " ".implode(" ",$edit_attributes); } ?>></a>
				<?php
						if (empty($callout["!locked"])) {
				?>
				<a href="#" class="icon_delete"></a>
				<?php
						}
					}
				?>
			</div>
		</article>
		<?php
				$x++;
			}
		?>
	</div>
	<?php
		if (array_filter(array($field["options"]["additional"]))) {
	?>
	<a href="#" class="add_callout button"><span class="icon_small icon_small_add"></span>Add <?=$noun?></a>
	<?php
			if ($max) {
	?>
	<small class="max">LIMIT <?=$max?></small>
	<?php
			}
		}
	?>
</fieldset>

<script>
	BTXPredefinedCallouts({
		selector: "#<?=$field["id"]?>",
		key: "<?=$field["key"]?>",
		noun: "<?=$noun?>",
		groups: <?=json_encode($field["options"]["additional"])?>,
		max: <?=$max?>
	});
</script>