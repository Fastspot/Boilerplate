<?
	/*
		When drawing a field type you are provided with the $field array with the following keys:
			"title" — The title given by the developer to draw as the label (drawn automatically)
			"subtitle" — The subtitle given by the developer to draw as the smaller part of the label (drawn automatically)
			"key" — The value you should use for the "name" attribute of your form field
			"value" — The existing value for this form field
			"id" — A unique ID you can assign to your form field for use in JavaScript
			"tabindex" — The current tab index you can use for the "tabindex" attribute of your form field
			"options" — An array of options provided by the developer
			"required" — A boolean value of whether this form field is required or not
	*/	

	// If there are any new lines, we'll draw as a textarea
	if (strpos($field["value"],"\n") !== false || strpos($field["value"],"\r") !== false) {
?>
<textarea disabled="disabled" type="text" name="<?=$field["key"]?>" id="<?=$field["id"]?>"><?=BigTree::safeEncode($field["value"])?></textarea>
<?
	} else {
?>
<input disabled="disabled" type="text" name="<?=$field["key"]?>" value="<?=BigTree::safeEncode($field["value"])?>" id="<?=$field["id"]?>" />
<?
	}
?>