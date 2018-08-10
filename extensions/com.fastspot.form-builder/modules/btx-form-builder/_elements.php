<?php
	/**
	 * @global array $settings
	 */
?>
<h4>Formatting</h4>
<a href="#" class="section" name="section"><span></span>Section Break</a>
<?php
	if (empty($settings["disable_columns"])) {
?>
<a href="#" class="columns" name="columns"><span></span>Columns</a>
<?php
	}
?>
<h4>Standard</h4>
<a href="#" class="text" name="text"><span></span>Single Line Text</a>
<a href="#" class="textarea" name="textarea"><span></span>Paragraph Text</a>
<a href="#" class="checkbox" name="checkbox"><span></span>Checkboxes</a>
<a href="#" class="radio" name="radio"><span></span>Radio Buttons</a>
<a href="#" class="dropdown" name="select"><span></span>Dropdown List</a>
<h4>Advanced</h4>
<a href="#" class="upload" name="upload"><span></span>File Upload</a>
<a href="#" class="name" name="name"><span></span>Name</a>
<a href="#" class="date" name="date"><span></span>Date</a>
<a href="#" class="address" name="address"><span></span>Address</a>
<a href="#" class="email" name="email"><span></span>Email</a>
<a href="#" class="url" name="url"><span></span>Website</a>
<a href="#" class="phone" name="phone"><span></span>Phone</a>
<?php
	if ($settings["recaptcha"]["site_key"] && $settings["recaptcha"]["secret_key"]) {
?>
<a href="#" class="captcha" name="captcha"><span></span>reCAPTCHA</a>
<?php
	}
?>