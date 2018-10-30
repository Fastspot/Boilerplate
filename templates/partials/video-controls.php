<?php
	// Required "class"
?>
<div class="js-background-video-controls <?=$class?>_controls">
	<button class="js-background-video-control js-background-video-pause <?=$class?>_control <?=$class?>_control_pause active">
		<span class="<?=$class?>_control_icon"><?=icon("pause")?></span>
		<span class="js-background-video-label <?=$class?>_control_label">
			<span class="<?=$class?>_control_label_inner">Pause Video</span>
		</span>
	</button>
	<button class="js-background-video-control js-background-video-play <?=$class?>_control <?=$class?>_control_play">
		<span class="<?=$class?>_control_icon"><?=icon("play")?></span>
		<span class="js-background-video-label <?=$class?>_control_label">
			<span class="<?=$class?>_control_label_inner">Resume Video</span>
		</span>
	</button>
</div>