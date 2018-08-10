<?php
	// Make sure we escape the value so it draws properly in the widget
	$field["input"] = htmlspecialchars($field["input"]);
	include BigTree::path("admin/form-field-types/draw/textarea.php");
