<?php
	/**
	 * @global string $_context
	 * @global string $content
	 */

	if ($_context == "full_width") {
?>
<div class="wysiwyg_block">
	<div class="wysiwyg_block_inner">
		<div class="fs-row">
			<div class="fs-cell">
				<div class="wysiwyg_block_wrapper">
					<div class="typography">
						<?=$content?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php
	} else {
?>
<div class="wysiwyg_block">
	<div class="typography">
		<?=$content?>
	</div>
</div>
<?php
	}
?>