<section class="js-alert alert<?php if (!empty($theme)) { echo " theme_".$theme; } ?>" role="alert" data-time="<?=$last_updated?>">
	<div class="fs-row">
		<div class="fs-cell">
			<div class="alert_inner">
				<div class="alert_wrapper">
					<div class="alert_content">
						<header class="alert_header">
							<div class="alert_time">
								<time class="alert_time_label" datetime="<?=date("Y-m-d", strtotime($last_updated))?>"><?=date("m/d/Y", strtotime($last_updated))?></time>
							</div>
							<h2 class="alert_title">
								<?php
									if ($link) {
								?>
								<a class="alert_title_link" <?=href($link)?>><?=$title?></a>
								<?php
									} else {
										echo $title;
									}
								?>
							</h2>
						</header>
						<div class="alert_body">
							<div class="alert_description">
								<?=strip_tags($description, "<p><br><strong><em><a>")?>
							</div>
						</div>
					</div>
					<button class="js-swap js-alert-close alert_close" aria-label="Close Alert" data-swap-target=".js-alert">
						<span class="alert_close_icon"><?=icon("close")?></span>
						<span class="alert_close_label">Close Alert</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>