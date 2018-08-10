<div class="container" style="overflow: initial;">
	<header>
		<div class="sticky_controls">
			<div class="shadow">
				<nav class="left">
					<a href="#form_builder_properties_tab"<?php if (empty($bigtree["form"]["id"]) || !empty($_GET["template"])) { ?> class="active"<?php } ?>>Properties</a>
					<a href="#form_builder_fields_tab"<?php if (!empty($bigtree["form"]["id"]) && empty($_GET["template"])) { ?> class="active"<?php } ?>>Fields</a>
					<a id="form_builder_limits_tab_link" href="#form_builder_limits_tab"<?php if (empty($bigtree["form"]["limit_entries"])) { ?> style="display: none;"<?php } ?>>Limits</a>
					<a id="form_builder_scheduling_tab_link" href="#form_builder_scheduling_tab"<?php if (empty($bigtree["form"]["scheduling"])) { ?> style="display: none;"<?php } ?>>Scheduling</a>
					<a id="form_builder_payment_tab_link" href="#form_builder_payment_tab"<?php if (empty($bigtree["form"]["paid"])) { ?> style="display: none;"<?php } ?>>Payment</a>
				</nav>
			</div>
		</div>
	</header>

	<form method="post" action="<?=MODULE_ROOT?><?php if (!empty($form["id"])) { ?>update/<?=$form["id"]?>/<?php } else { ?>create/<?php } ?>" class="module">
		<section id="form_builder_properties_tab"<?php if (!empty($bigtree["form"]["id"]) && empty($_GET["template"])) { ?> style="display: none;"<?php } ?>>
			<?php include "_properties.php" ?>
		</section>
		<section id="form_builder_fields_tab"<?php if (empty($bigtree["form"]["id"]) || !empty($_GET["template"])) { ?> style="display: none;"<?php } ?>>
			<?php include "_fields.php" ?>
		</section>
		<section id="form_builder_limits_tab" style="display: none;">
			<?php include "_limits.php" ?>
		</section>
		<section id="form_builder_scheduling_tab" style="display: none;">
			<?php include "_scheduling.php" ?>
		</section>
		<section id="form_builder_payment_tab" style="display: none;">
			<?php include "_payment.php" ?>
		</section>
		<footer>
			<a href="#" class="next button">Next Step &raquo;</a>
			<input type="submit" class="button blue" value="<?php if (!empty($form["id"])) { ?>Update<?php } else { ?>Create<?php } ?>" />	
		</footer>
	</form>
</div>

<script>
	BigTreeFormNavBar.init();

	$(document).ready(function() {
		BTXFormBuilder.init(<?=($form["object_count"] ? $form["object_count"] : "0")?>);
	});
</script>
<?php
	include BigTree::path("admin/layouts/_html-field-loader.php");
?>