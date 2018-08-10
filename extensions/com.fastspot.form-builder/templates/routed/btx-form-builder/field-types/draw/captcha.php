<?php
	/**
	 * @global array $default
	 * @global array $field_data
	 * @global array $form
	 * @global array $settings
	 * @global bool $error
	 * @global int $count
	 * @global string $field_name
	 */
	
	// We only want to draw a single captcha, even if the form builder added two for whatever reason
	if (!defined("BTXFORMBUILDER_CAPTCHA_USED")) {
		define("BTXFORMBUILDER_CAPTCHA_USED", true);
?>
<script src='https://www.google.com/recaptcha/api.js'></script>
<fieldset>
	<?php
		if ($field_data["label"]) {
	?>
	<label>
		<?=htmlspecialchars($field_data["label"])?>
		<span class="form_builder_required_star">*</span>
	</label>
	<?php
		}
		
		if ($field_data["instructions"]) {
	?>
	<p><?=htmlspecialchars($field_data["instructions"])?></p>
	<?php
		}
		
		if ($error) {
	?>
	<div class="form_builder_captcha_error">
		<p>The code you entered was not correct.  Please try again.</p>
	</div>
	<?php
		}
	?>
	<div class="g-recaptcha" data-sitekey="<?=$settings["recaptcha"]["site_key"]?>"></div>
</fieldset>
<?php
	}
