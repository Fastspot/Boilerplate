<?php
	$groups = $admin->getCalloutGroups();
	$individuals = $admin->getCallouts("name ASC");

	// Stop notices
	$data["prefilled"] = is_array($data["prefilled"]) ? $data["prefilled"] : array();
	$data["additional"] = is_array($data["additional"]) ? $data["additional"] : array();
	$data["verb"] = isset($data["verb"]) ? $data["verb"] : "";
	$data["max"] = $data["max"] ? intval($data["max"]) : "";
	$data["disable_drag"] = $data["disable_drag"] ? "on" : "";
?>
<fieldset>
	<label>Noun <small>(defaults to "Callout")</small></label>
	<input type="text" name="noun" value="<?=htmlspecialchars($data["noun"])?>" />
</fieldset>
<fieldset>
	<label>Maximum Entries <small>(defaults to unlimited)</small></label>
	<input type="text" name="max" value="<?=$data["max"]?>" />
</fieldset>
<fieldset>
	<input type="checkbox" name="disable_drag"<?php if ($data["disable_drag"]) { ?> checked="checked"<?php } ?> />
	<label class="for_checkbox">Disable Drag &amp; Drop for Prefilled Elements</label>
</fieldset>

<hr />

<h3>Prefilled</h3>
<fieldset>
	<label>Required Callouts</label>
	<div class="multi_widget many_to_many" id="prefilled_callouts">
		<section<?php if (count($data["prefilled"])) { ?> style="display: none;"<?php } ?>>
			<p>Click "Add Item" to add an item to this list.</p>
		</section>
		<ul>
			<?php
				$prefilled_x = 0;

				foreach ($data["prefilled"] as $id) {
					$callout = $admin->getCallout($id);
			?>
			<li>
				<input type="hidden" name="prefilled[<?=$prefilled_x?>]" value="<?=$callout["id"]?>" />
				<p><?=$callout["name"]?> (<?=$callout["id"]?>)</p>
				<a href="#" class="icon_delete"></a>
			</li>
			<?php
					$prefilled_x++;
				}
			?>
		</ul>
		<footer>
			<select>
				<?php
					foreach ($individuals as $callout) {
						if (!in_array($callout["id"],$data["prefilled"])) {
				?>
				<option value="<?=$callout["id"]?>"><?=$callout["name"]?> (<?=$callout["id"]?>)</option>
				<?php
						}
					}
				?>
			</select>
			<a href="#" class="add button"><span class="icon_small icon_small_add"></span>Add Callout</a>
		</footer>
	</div>
</fieldset>

<hr />

<h3>Manual</h3>
<fieldset>
	<label>Optional Groups</label>
	<div class="multi_widget many_to_many" id="manual_groups">
		<section<?php if (count($data["additional"])) { ?> style="display: none;"<?php } ?>>
			<p>Click "Add Item" to add an item to this list.</p>
		</section>
		<ul>
			<?php
				$additional_x = 0;
				
				foreach ($data["additional"] as $id) {
					$group = $admin->getCalloutGroup($id);
			?>
			<li>
				<input type="hidden" name="additional[<?=$additional_x?>]" value="<?=$group["id"]?>" />
				<p><?=$group["name"]?></p>
				<a href="#" class="icon_delete"></a>
			</li>
			<?php
					$additional_x++;
				}
			?>
		</ul>
		<footer>
			<select>
				<?php
					foreach ($groups as $group) {
						if (!in_array($group["id"],$data["additional"])) {
				?>
				<option value="<?=$group["id"]?>"><?=$group["name"]?></option>
				<?php
						}
					}
				?>
			</select>
			<a href="#" class="add button"><span class="icon_small icon_small_add"></span>Add Group</a>
		</footer>
	</div>
</fieldset>

<script>
	BigTreeManyToMany({
		id: "prefilled_callouts",
		count: <?=$prefilled_x?>,
		key: "prefilled"
	});
	BigTreeManyToMany({
		id: "manual_groups",
		count: <?=$additional_x?>,
		key: "additional"
	});
</script>