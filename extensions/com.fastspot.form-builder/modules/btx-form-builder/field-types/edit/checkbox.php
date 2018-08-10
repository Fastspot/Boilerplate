<?php
	/**
	 * @global array $data
	 * @global bool $paid
	 */
	
	// Format pricing if paid.
	if ($paid) {
		foreach ($data["list"] as &$option) {
			$option["price"] = floatval(str_replace(array('$', ','), '', $option["price"]));

			if ($option["price"] < 0) {
				$option["price"] = '- $'.number_format(abs($option["price"]),2);
			} else {
				$option["price"] = '$'.number_format($option["price"],2);
			}
		}
	}
?>
<fieldset>
	<label>Field Label</label>
	<input type="text" name="label" value="<?=htmlspecialchars($data["label"])?>" />
</fieldset>
<div id="checkbox_option_list"></div>
<p id="checkbox_list_error" class="error_message" style="margin: 10px 0 0 0; display: none;">All options must have a unique value.</p>
<br />

<script type="text/javascript">	
	new BigTreeListMaker({
		element: "#checkbox_option_list",
		name: "list",
		title: "Options",
		columns: ["Value","Description"<?php if ($paid) { ?>,"Price Change"<?php } ?>],
		keys: [{ key: "value", type: "text" },{ key: "description", type: "text" }<?php if ($paid) { ?>,{ key: "price", type: "text" }<?php } ?>],
		existing: <?=json_encode($data["list"])?>
	});

	// Verify that every option has a unique value
	$("#checkbox_option_list").parents("form").submit(function(ev) {
		var value_list = [];
		var ok = true;
		
		$("#checkbox_option_list input").each(function(index,el) {
			// Only want values
			if ($(el).attr("name").indexOf("value") > -1) {
				var v = $(el).val();
				if (value_list.indexOf(v) > -1) {
					ok = false;
					$("#checkbox_list_error").show();
				}
				value_list.push(v);
			}
		});
		
		if (!ok) {
			ev.stopImmediatePropagation();
			ev.preventDefault();
		}
	});
</script>