<h3>Image Options</h3>
<fieldset>
	<label>Upload Directory <small>(relative to SITE_ROOT)</small></label>
	<input type="text" name="directory" value="<?=htmlspecialchars($data["directory"])?>" />
</fieldset>
<?php
	// Just use the regular image options
	include SERVER_ROOT."core/admin/ajax/developer/field-options/_image-options.php";