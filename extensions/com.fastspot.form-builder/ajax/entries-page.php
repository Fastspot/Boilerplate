<?php
	$page = $_POST["page"] ? $_POST["page"] : 1;
	$search = $_POST["search"] ? $_POST["search"] : "";
	$form = $_POST["form"] ? BTXFormBuilder::getForm($_POST["form"]) : $form;
	$entries = BTXFormBuilder::searchEntries($form["id"], $search, $page);
	
	$get_table_record = function($fields) {
		global $get_table_record, $record, $entry;
		
		foreach ($fields as $field) {
			$value = $entry["data"][$field["id"]];
			$field_type = $field["type"];
			
			if ($field_type == "column") {
				$get_table_record($field["fields"]);
			} elseif ($field_type == "address") {
				$record[] = $value["street"];
				$record[] = $value["street2"];
				$record[] = $value["city"];
				$record[] = $value["state"];
				$record[] = $value["zip"];
				$record[] = $value["country"];
			} elseif ($field_type == "name") {
				$record[] = $value["first"];
				$record[] = $value["last"];
			} elseif ($field_type == "checkbox") {
				if (is_array($value)) {
					$record[] = implode(", ",$value);				
				} else {
					$record[] = $value;
				}
			} elseif ($field_type != "section" && $field["type"] != "captcha") {
				$record[] = $value;
			}
		}
	};

	foreach ($entries as $entry) {
		$record = array();
		$get_table_record($form["fields"]);
		$record = array_slice($record, 0, 4);
		$per_col = floor(744 / count($record)) - 20;
?>
<li id="row_<?=$entry["id"]?>">
	<section class="view_column" style="width: 114px;"><?=date("m/d/Y", strtotime($entry["created_at"]))?></section>
	<?php foreach ($record as $item) { ?>
	<section class="view_column" style="width: <?=$per_col?>px;"><?=BigTree::safeEncode(strip_tags($item))?></section>
	<?php } ?>
	<section class="view_action">
		<a href="<?=ADMIN_ROOT?>com.fastspot.form-builder*btx-form-builder/view-entry/<?=$entry["id"]?>/" class="icon_view_details"></a>
	</section>
	<section class="view_action">
		<a href="#<?=$entry["id"]?>" class="icon_delete"></a>
	</section>
</li>
<?php
	}
?>
<script type="text/javascript">
	BigTree.setPageCount("#view_paging", <?=BTXFormBuilder::$SearchPageCount?>, <?=$page?>);
</script>