<?php
	$individuals = $admin->getCallouts("name ASC");
	$callout_types = array();
	
	foreach ($individuals as $item) {
		$callout_types[$item["id"]] = htmlspecialchars_decode($item["name"]." (".$item["id"].")");
	}

	// Stop notices
	$data["prefilled"] = is_array($data["prefilled"]) ? $data["prefilled"] : array();
?>
<fieldset>
	<div id="aoi_fields"></div>
</fieldset>

<script>	
	BigTreeListMaker({
		element: "#aoi_fields",
		name: "prefilled",
		title: "Callouts",
		columns: ["Section Title","Callout Type"],
		keys: [
			{ key: "title", type: "text" },
			{ key: "type", type: "select", list: <?=json_encode($callout_types)?> }
		],
		existing: <?=json_encode($data["prefilled"])?>
	});
</script>