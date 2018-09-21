<?php
	$cached_types = $admin->getCachedFieldTypes(true);
	$types = $cached_types["callouts"];
	$columns = is_array($data["columns"]) ? $data["columns"] : array(array("id" => "","title" => "","subtitle" => "","type" => "text"));
	$data["max"] = $data["max"] ? intval($data["max"]) : "";
?>
<h3>Gallery Options</h3>
<fieldset>
	<label>Maximum Entries <small>(defaults to unlimited)</small></label>
	<input type="text" name="max" value="<?=$data["max"]?>" />
</fieldset>
<fieldset>
	<input type="checkbox" name="disable_photos" <?php if ($data["disable_photos"]) { ?>checked="checked" <?php } ?>/>
	<label class="for_checkbox">Disable Photos</label>
</fieldset>
<fieldset>
	<input type="checkbox" name="disable_youtube" <?php if ($data["disable_youtube"]) { ?>checked="checked" <?php } ?>/>
	<label class="for_checkbox">Disable YouTube Videos</label>
</fieldset>
<fieldset>
	<input type="checkbox" name="disable_vimeo" <?php if ($data["disable_vimeo"]) { ?>checked="checked" <?php } ?>/>
	<label class="for_checkbox">Disable Vimeo Videos</label>
</fieldset>
<fieldset>
	<input type="checkbox" name="enable_manual" <?php if ($data["enable_manual"]) { ?>checked="checked" <?php } ?>/>
	<label class="for_checkbox"><strong>Enable</strong> Manually Uploaded Videos</label>
</fieldset>
<hr />
<h3>Image Options</h3>
<fieldset>
	<label>Upload Directory <small>(relative to SITE_ROOT)</small></label>
	<input type="text" name="directory" value="<?=htmlspecialchars($data["directory"])?>" />
</fieldset>
<?php
	include SERVER_ROOT."core/admin/ajax/developer/field-options/_image-options.php";
?>
<hr />
<div class="matrix_wrapper">
	<span class="icon_small icon_small_add matrix_add_column"></span>
	<h3>Additional Fields</h3>
	<section class="matrix_table">
		<?php
			$x = 0;

			foreach ($columns as $column) {
				$x++;
		?>
		<article>
			<div>
				<select name="columns[][type]">
					<optgroup label="Default">
						<?php foreach ($types["default"] as $k => $v) { ?>
						<option value="<?=$k?>"<?php if ($k == $column["type"]) { ?> selected="selected"<?php } ?>><?=$v["name"]?></option>
						<?php } ?>
					</optgroup>
					<?php if (count($types["custom"])) { ?>
					<optgroup label="Custom">
						<?php foreach ($types["custom"] as $k => $v) { ?>
						<option value="<?=$k?>"<?php if ($k == $column["type"]) { ?> selected="selected"<?php } ?>><?=$v["name"]?></option>
						<?php } ?>
					</optgroup>
					<?php } ?>
				</select>		
				<input type="text" name="columns[][id]" value="<?=htmlspecialchars($column["id"])?>" placeholder="ID" />
				<input type="text" name="columns[][title]" value="<?=htmlspecialchars($column["title"])?>" placeholder="Title" />
				<input type="text" name="columns[][subtitle]" value="<?=htmlspecialchars($column["subtitle"])?>" placeholder="Subtitle" />
			</div>
			<footer>
				<span class="icon_drag"></span>
				<a href="#" class="icon_delete"></a>
				<a href="#" class="icon_edit" name="<?=$x?>"></a>
				<input type="hidden" name="columns[][options]" value="<?=htmlspecialchars($column["options"])?>" />
			</footer>
		</article>
		<?php
			}
		?>
	</section>
</div>
<br />
<script>
	(function() {
		var CurrentColumn = false;
		var ColumnCount = <?=$x?>;
		var MatrixTable = $(".bigtree_dialog_window").last().find(".matrix_table");

		// Handle editing the options on fields
		MatrixTable.on("click",".icon_edit",function(e) {
			e.preventDefault();

			// Prevent double clicks
			if (BigTree.Busy) {
				return;
			}

			CurrentColumn = $(this).parents("article");
			var type = CurrentColumn.find("select").val();
			var options = CurrentColumn.find("input[type=hidden]").val();

			$.ajax("<?=ADMIN_ROOT?>ajax/developer/load-field-<?=(BIGTREE_REVISION < 300 ? "options" : "settings")?>/", { type: "POST", data: { template: "true", type: type, data: options }, complete: function(response) {
				BigTreeDialog({
					title: "Column Options",
					content: response.responseText,
					icon: "edit",
					callback: function(data) {
						CurrentColumn.find("input[type=hidden]").val(JSON.stringify(data));
					}
				});
			}});
		// Deleting fields
		}).on("click",".icon_delete",function(e) {
			e.preventDefault();
			$(this).parents("article").remove();
		// Sorting fields
		}).sortable({ axis: "y", containment: "parent", handle: ".icon_drag", items: "article", placeholder: "ui-sortable-placeholder", tolerance: "pointer" });

		// Adding fields
		$(".bigtree_dialog_window").last().find(".matrix_add_column").click(function() {
			ColumnCount++;
			
			var item = $('<article>').html('<div><select name="columns[' + ColumnCount + '][type]"><optgroup label="Default"><?php foreach ($types["default"] as $k => $v) { ?><option value="<?=$k?>"><?=$v["name"]?></option><?php } ?></optgroup><?php if (count($types["custom"])) { ?><optgroup label="Custom"><?php foreach ($types["custom"] as $k => $v) { ?><option value="<?=$k?>"><?=$v["name"]?></option><?php } ?></optgroup><?php } ?></select>' +
										   '<input type="text" name="columns[' + ColumnCount + '][id]" value="" placeholder="ID" />' +
										   '<input type="text" name="columns[' + ColumnCount + '][title]" value="" placeholder="Title" />' +
										   '<input type="text" name="columns[' + ColumnCount + '][subtitle]" value="" placeholder="Subtitle" /></div>' +
										   '<footer>' + 
												'<span class="icon_drag"></span>' + 
										   		'<a href="#" tabindex="-1" class="icon_delete"></a>' +
										   		'<a href="#" tabindex="-1" class="icon_edit" name="' + ColumnCount + '"></a>' +
										   		'<input type="hidden" name="columns[' + ColumnCount + '][options]" value="" />' +
										   	'</footer>');
	
			MatrixTable.sortable({ axis: "y", containment: "parent", handle: ".icon_drag", items: "article", placeholder: "ui-sortable-placeholder", tolerance: "pointer" })
					   .append(item);
			
			BigTreeCustomControls(item);
			return false;
		});
	})();
</script>