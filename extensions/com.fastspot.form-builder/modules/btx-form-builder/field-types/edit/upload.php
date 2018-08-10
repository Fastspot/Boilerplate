<?php
	/**
	 * @global array $data
	 * @global bool $paid
	 */
?>
<fieldset>
	<label>Field Label</label>
	<input type="text" name="label" value="<?=htmlspecialchars($data["label"])?>" />
</fieldset>
<fieldset>
	<label>Upload Directory <small>(relative to /site/, defaults to /site/files/form-builder/)</small></label>
	<input type="text" name="directory" value="<?=htmlspecialchars($data["directory"])?>" />
</fieldset>
<fieldset>
	<label>Maximum File Size <small>(in bytes, leave empty for no limit)</small></label>
	<input type="text" name="max_file_size" value="<?=(!empty($data["max_file_size"]) ? intval($data["max_file_size"]) : "")?>" />
</fieldset>
<fieldset>
	<div id="form_builder_allowed_filetypes"></div>
</fieldset>


<script type="text/javascript">	
	new BigTreeListMaker({
		element: "#form_builder_allowed_filetypes",
		name: "allowed_filetypes",
		title: "Allowed File Types",
		columns: ["Extension"],
		keys: [{ key: "extension", type: "text" }],
		existing: <?=json_encode($data["allowed_filetypes"])?>
	});
</script>