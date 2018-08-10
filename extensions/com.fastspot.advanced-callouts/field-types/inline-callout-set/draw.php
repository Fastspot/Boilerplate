<?php
	// Pretend to be vanilla callouts for layout purposes
	$field["type"] = "callouts";

	$callout_number = 0;
	foreach ($field["options"]["prefilled"] as $entry) {
		$callout = $admin->getCallout($entry["type"]);

		if (count($callout["resources"])) {
?>
<fieldset class="callouts<?php if ($bigtree["last_resource_type"] == "callouts") { ?> callouts_no_margin<?php } ?>">
	<input type="hidden" name="<?=$field["key"]?>[<?=$callout_number?>][type]" value="<?=$callout["id"]?>" />
	<?php
			if ($entry["title"]) {
	?>
	<h3><?=BigTree::safeEncode($entry["title"])?></h3>
	<br />
	<?php
			}

			foreach ($callout["resources"] as $resource) {
				$callout_field = array(
					"type" => $resource["type"],
					"title" => $resource["title"],
					"subtitle" => $resource["subtitle"],
					"key" => $field["key"]."[$callout_number][".$resource["id"]."]",
					"value" => isset($field["value"][$callout_number][$resource["id"]]) ? $field["value"][$callout_number][$resource["id"]] : "",
					"tabindex" => $bigtree["tabindex"]++,
					"options" => $resource["options"]
				);
				
				if (empty($callout_field["options"]["directory"])) {
					$callout_field["options"]["directory"] = "files/callouts/";
				}
	
				BigTreeAdmin::drawField($callout_field);
			}
	
			$bigtree["last_resource_type"] = "callouts";
?>
</fieldset>
<?php
		} else {
?>
<input type="hidden" name="<?=$field["key"]?>[<?=$callout_number?>][type]" value="<?=$callout["id"]?>" />
<?php
		}

		$callout_number++;
	}
?>