<?php
	/**
	 * @global array $bigtree
	 */

	if ($_GET["template"]) {
		$bigtree["form"] = $form = BTXFormBuilder::getForm($_GET["template"]);
	} else {
		$bigtree["form"] = $form = [];
	}

	include "_form.php";
