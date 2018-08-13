<?php
	// Update the count
	sqlquery("UPDATE btx_form_builder_forms SET entries = (entries - 1) WHERE id = '".sqlescape($_POST["form"])."'");
	BigTreeAutoModule::recacheItem($_POST["form"], "btx_form_builder_forms");
	
	// Delete the entry
	BigTreeAutoModule::deleteItem("btx_form_builder_entries", $_POST["id"]);
	
	// Show the growl and update the table
	header("Content-type: text/javascript");
?>
BigTree.growl("Form Builder","Deleted Entry");
$("#row_<?=$_POST["id"]?>").remove();