<?php
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

	if (array_filter((array)$field["value"])) {
		if ($field["options"]["preview_prefix"]) {
			$preview_image = BigTree::prefixFile($field["value"]["image"],$field["options"]["preview_prefix"]);
		} else {
			$preview_image = $field["value"]["image"];
		}
	} else {
		$preview_image = false;
	}

	$youtube = new BigTreeYouTubeAPI;
	if (!$youtube->Connected) {
?>
<p class="error_message">The <a href="<?=ADMIN_ROOT?>developer/services/youtube/">YouTube API</a> is not connected.</p>
<?php
	} else {
?>
<div class="image_field">
	<input<?php if ($field["required"]) { ?> class="required"<?php } ?> type="text" tabindex="<?=$field["tabindex"]?>" name="<?=$field["key"]?>[new]" id="<?=$field["id"]?>" placeholder="YouTube or Vimeo URL" />
	<?php if ($preview_image) { ?>
	<div class="currently">
		<a href="#" class="remove_resource"></a>
		<div class="currently_wrapper">
			<img src="<?=$preview_image?>" alt="" />
		</div>
		<label>CURRENT</label>
		<input type="hidden" name="<?=$field["key"]?>[existing]" value="<?=BigTree::safeEncode(json_encode($field["value"]))?>" />
	</div>
	<?php } ?>
</div>
<?php
	}
?>