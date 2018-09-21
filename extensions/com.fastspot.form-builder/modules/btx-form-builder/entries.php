<?php
	/**
	 * @global array $bigtree
	 */
	
	$form = BTXFormBuilder::getForm($bigtree["commands"][0]);

	// Figure out what the headers should be…
	$get_table_header = function($fields) {
		global $get_table_header;
		static $columns = array();

		foreach ($fields as $field) {
			$fdata = json_decode($field["data"],true);
			$label = $fdata["label"] ? $fdata["label"] : ucwords($field["type"]);
			
			if ($field["type"] == "column") {
				$get_table_header($field["fields"]);
			} elseif ($field["type"] == "address") {
				$columns[] = $label." - Street";
				$columns[] = $label." - Street 2";
				$columns[] = $label." - City";
				$columns[] = $label." - State";
				$columns[] = $label." - Zip";
				$columns[] = $label." - Country";
			} elseif ($field["type"] == "name") {
				$columns[] = $label." - First";
				$columns[] = $label." - Last";
			} elseif ($field["type"] != "section" && $field["type"] != "captcha") {
				$columns[] = $label;
			}
		}
		
		return $columns;
	};
	
	// We can only show four columns because we're limited on space
	$columns = array_slice($get_table_header($form["fields"]), 0, 4);
	$per_col = 0;

	if (count($columns)) {
		$per_col = floor(744 / count($columns)) - 20;
	}
?>
<h3>Entries in &ldquo;<?=$form["title"]?>&rdquo;</h3>
<div class="table">
	<summary>
		<input type="search" placeholder="Search" class="form_search" id="search" />
		<nav id="view_paging" class="view_paging"></nav>
	</summary>
	<header>
		<span class="view_column" style="width: 114px;">Date Submitted</span>
		<?php foreach ($columns as $column) { ?>
		<span class="view_column" style="width: <?=$per_col?>px;"><?=$column?></span>
		<?php } ?>
		<span class="view_actions" style="width: 80px;">Actions</span>
	</header>
	<ul id="results">
		<?php include EXTENSION_ROOT."ajax/entries-page.php" ?>
	</ul>
</div>
<script type="text/javascript">
	(function() {
		var SearchTimer;

		$("#search").keyup(function() {
			clearTimeout(SearchTimer);
			SearchTimer = setTimeout(function() {
				$("#results").load("<?=ADMIN_ROOT?>*/com.fastspot.form-builder/ajax/entries-page/", { form: "<?=$form["id"]?>", page: 0, search: $("#search").val() });
			},400);
		});

		$(".table").on("click",".icon_delete",function() {
			new BigTreeDialog({
				title: "Delete Submission",
				content: '<p class="confirm">Are you sure you want to delete this submission?</p>',
				icon: "delete",
				alternateSaveText: "OK",
				callback: $.proxy(function() {
					$.ajax("<?=ADMIN_ROOT?>*/com.fastspot.form-builder/ajax/delete-entry/", { type: "POST", data: { form: "<?=$form["id"]?>", id: BigTree.cleanHref($(this).attr("href")) } });
				},this)
			});
			
			return false;
		}).on("click","#view_paging a",function() {
			if (!$(this).hasClass("active") && !$(this).hasClass("disabled")) {
				$("#results").load("<?=ADMIN_ROOT?>*/com.fastspot.form-builder/ajax/entries-page/", { form: "<?=$form["id"]?>", search: $("#search").val(), page: BigTree.cleanHref($(this).attr("href")) });
			}
			return false;
		});

	})();
</script>