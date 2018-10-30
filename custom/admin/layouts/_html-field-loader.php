<?php
	$width = isset($bigtree["html_editor_width"]) ? $bigtree["html_editor_width"] : false;
	$height = isset($bigtree["html_editor_height"]) ? $bigtree["html_editor_height"] : false;
?>
<script>
	$(document).ready(function() {
		<?php
			if (is_array($bigtree["html_fields"]) && count($bigtree["html_fields"])) {
		?>
		tinyMCE.init({
			content_css: "<?=STATIC_ROOT?>css/tinymce.css",
			body_class: "typography",
			theme: "modern",
			mode: "exact",
			elements: "<?=implode(",",$bigtree["html_fields"])?>",
			file_browser_callback: BigTreeFileManager.tinyMCEOpen,
			menubar: false,
			plugins: "code,anchor,image,link,table,visualblocks,lists,hr,template",
			toolbar: "undo redo | styleselect | bold italic underline removeformat | bullist numlist outdent indent | hr anchor link unlink image table | template visualblocks code",
			image_dimensions: false,
			paste_remove_spans: true,
			paste_remove_styles: true,
			paste_strip_class_attributes: true,
			paste_auto_cleanup_on_paste: true,
			relative_urls: false,
			remove_script_host: false,
			browser_spellcheck: true,
			extended_valid_elements : "*[*]",
			templates: [
				{ "title": "Quote w/ Attribution", content: '<figure class="quote"><blockquote class="quote_content"><p>Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.</p></blockquote><figcaption class="quote_caption"><span class="quote_caption_name">Aenean massa - </span><span class="quote_caption_title">Nullam dictum felis</span></figcaption></figure>'},
				{ "title": "Image Block w/ Caption Right", content: '<figure class="block_right"><img src="https://images.fastspot.com/<?=$site["image_route"]?>/wide-xsml/" alt=""><figcaption>This is an image caption.</figcaption></figure>' },
				{ "title": "Image Block w/ Caption Left", content: '<figure class="block_left"><img src="https://images.fastspot.com/<?=$site["image_route"]?>/wide-xsml/" alt=""><figcaption>This is an image caption.</figcaption></figure>' },
			]
			<?php if ($width) { ?>,width: "<?=$width?>"<?php } ?>
			<?php if ($height) { ?>,height: "<?=$height?>"<?php } ?>
		});
		<?php
			}

			if (is_array($bigtree["simple_html_fields"]) && count($bigtree["simple_html_fields"])) {
		?>
		tinyMCE.init({
			content_css: "<?=STATIC_ROOT?>css/tinymce.css",
			body_class: "typography",
			theme: "modern",
			mode: "exact",
			elements: "<?=implode(",",$bigtree["simple_html_fields"])?>",
			file_browser_callback: BigTreeFileManager.tinyMCEOpen,
			menubar: false,
			plugins: "link,code,visualblocks,lists",
			toolbar: "link unlink bold italic underline removeformat",
			paste_remove_spans: true,
			paste_remove_styles: true,
			paste_strip_class_attributes: true,
			paste_auto_cleanup_on_paste: true,
			browser_spellcheck: true,
			relative_urls: false,
			remove_script_host: false,
			extended_valid_elements : "*[*]"
			<?php if ($width) { ?>,width: "<?=$width?>"<?php } ?>
			<?php if ($height) { ?>,height: "<?=$height?>"<?php } ?>
		});
		<?php
			}
		?>
	});
</script>