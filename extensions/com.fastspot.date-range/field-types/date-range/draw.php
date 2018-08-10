<?php
	$display_value = "";

	if (!is_array($field["value"])) {
		$field["value"] = array("start" => "", "end" => "");

		if (!empty($field["options"]["default_today"])) {
			$field["value"]["start"] = date($bigtree["config"]["date_format"]);
		}
	} else{
		if (!empty($field["value"]["start"]) && $field["value"]["start"] != "0000-00-00" && $field["value"]["start"] != "0000-00-00 00:00:00") {
			$field["value"]["start"] = date($bigtree["config"]["date_format"], strtotime($field["value"]["start"]));

			$display_value = $field["value"]["start"];
		}

		if (!empty($field["value"]["end"]) && $field["value"]["end"] != "0000-00-00" && $field["value"]["end"] != "0000-00-00 00:00:00") {
			$field["value"]["end"] = date($bigtree["config"]["date_format"], strtotime($field["value"]["end"]));
		}
	}

	// We draw the picker inline for callouts
	if (defined("BIGTREE_CALLOUT_RESOURCES")) {
?>
<div class="contain">
	<input type="hidden" name="<?=$field["key"]?>" value="<?=$display_value?>" id="<?=$field["id"]?>">
	
	<div style="float: left; margin: 0 20px 0 0; width: 202px;">
		<div class="date_picker_clear" style="float: right; background: transparent; color: #C0362F; padding: 0; font-size: 10px;"">Clear Date</div>
		<div style="color: #999; font-size: 12px; margin: 0 0 5px 0;">Start</div>
		<input type="hidden" name="<?=$field["key"]?>[start]" value="<?=$field["value"]["start"]?>" id="<?=$field["id"]?>_start"  />
		<div class="date_picker_inline" data-date="<?=$field["value"]["start"]?>"></div>
	</div>
	
	<div style="float: left; width: 202px;">
		<div class="date_picker_clear" style="float: right; background: transparent; color: #C0362F; padding: 0; font-size: 10px;"">Clear Date</div>
		<div style="color: #999; font-size: 12px; margin: 0 0 5px 0;">End</div>
		<input type="hidden" name="<?=$field["key"]?>[end]" value="<?=$field["value"]["end"]?>" id="<?=$field["id"]?>_end" />
		<div class="date_picker_inline" data-date="<?=$field["value"]["end"]?>"></div>
	</div>
</div>
<?php
	} else {
?>
<div class="contain">
	<input type="hidden" name="<?=$field["key"]?>" value="<?=$display_value?>" id="<?=$field["id"]?>">

	<div style="float: left; margin: 0 20px 0 0;">
		<div class="contain">
			<input type="text" tabindex="<?=$field["tabindex"]?>" name="<?=$field["key"]?>[start]" value="<?=$field["value"]["start"]?>" autocomplete="off" id="<?=$field["id"]?>_start" class="date_picker<? if ($field["required"]) { ?> required<? } ?>" />
			<span class="icon_small icon_small_calendar date_picker_icon"></span>
		</div>
		<label for="<?=$field["id"]?>_start" style="color: #999; font-size: 11px; margin: 5px 0 0 0;">Start</label>
	</div>

	<div style="float: left;">
		<div class="contain">
			<input type="text" tabindex="<?=$field["tabindex"]?>" name="<?=$field["key"]?>[end]" value="<?=$field["value"]["end"]?>" autocomplete="off" id="<?=$field["id"]?>_end" class="date_picker<? if ($field["required"]) { ?> required<? } ?>" />
			<span class="icon_small icon_small_calendar date_picker_icon"></span>
		</div>
		<label for="<?=$field["id"]?>_end" style="color: #999; font-size: 11px; margin: 5px 0 0 0;">End</label>
	</div>
</div>
<?php
	}
?>

<script>
	(function() {
		var timer = setInterval(function() {
			var display_string = "";
			var start = $("#<?=$field["id"]?>_start").val();
			var end = $("#<?=$field["id"]?>_end").val();

			if (start) {
				display_string = start;

				if (end) {
					display_string += " - " + end;
				}
			} else if (end) {
				display_string = "Invalid Date Range";
			}

			$("#<?=$field["id"]?>").val(display_string);
		}, 300);
	})();
</script>