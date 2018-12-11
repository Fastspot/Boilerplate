<?php
	/**
	 * @global string $image
	 * @global string $title
	 * @global string $address
	 * @global string $phone
	 * @global string $fax
	 * @global string $email
	 * @global string $link
	 * @global array $social
	 */
?>
<div class="contact_block">
	<div class="fs-row">
		<div class="fs-cell">
			<div class="contact_block_inner">
				<div class="contact" itemscope itemtype="https://schema.org/Person">
					<?php
						if (!empty($image)) {
					?>
					<div class="contact_media">
						<figure class="contact_figure">
							<img class="contact_image" src="<?=BigTree::prefixFile($image, "square-xxsml-")?>" alt="">
						</figure>
					</div>
					<?php
						}
					?>
					<div class="contact_wrapper">
						<div class="contact_header">
							<h2 class="contact_name" itemprop="name">
								<?php
									if (!empty($link)) {
								?>
								<a class="contact_name_link" <?=href($link)?>>
									<span class="contact_name_link_label"><?=$name?></span>
								</a>
								<?php
									} else {
								?>
								<span class="contact_name_label"><?=$name?></span>
								<?php
									}
								?>
							</h2>
							<?php
								if (!empty($title)) {
							?>
							<div class="contact_title" itemprop="jobTitle">
								<span class="contact_title_label"><?=$title?></span>
							</div>
							<?php
								}
							?>
						</div>
						<div class="contact_body">
							<div class="contact_types">
								<?php
									if (!empty($address)) {
								?>
								<div class="contact_type contact_type_address">
									<span class="contact_type_label">
										<span class="contact_type_label_icon"><?=icon("place")?></span>
										<span class="contact_type_label_text">Address</span>
									</span>
									<span class="contact_type_description" itemprop="address"><?=nl2br($address)?></span>
								</div>
								<?php
									}

									if (!empty($phone)) {
								?>
								<a class="contact_type contact_type_link contact_type_phone" <?=tel_href($phone)?>>
									<span class="contact_type_label">
										<span class="contact_type_label_icon"><?=icon("phone")?></span>
										<span class="contact_type_label_text">Telephone</span>
									</span>
									<span class="contact_type_description" itemprop="telephone"><?=$phone?></span>
								</a>
								<?php
									}

									if (!empty($fax)) {
								?>
								<a class="contact_type contact_type_link contact_type_fax" <?=tel_href($fax)?>>
									<span class="contact_type_label">
										<span class="contact_type_label_icon"><?=icon("fax")?></span>
										<span class="contact_type_label_text">Fax</span>
									</span>
									<span class="contact_type_description" itemprop="fax"><?=$fax?></span>
								</a>
								<?php
									}

									if (!empty($email)) {
								?>
								<a class="contact_type contact_type_link contact_type_email" href="mailto:<?=$email?>">
									<span class="contact_type_label">
										<span class="contact_type_label_icon"><?=icon("email")?></span>
										<span class="contact_type_label_text">Email</span>
									</span>
									<span class="contact_type_description" itemprop="email"><?=$email?></span>
								</a>
								<?php
									}
								?>
							</div>
							<?php
								if (is_array($social) && count($social)) {
							?>
							<div class="contact_socials">
								<?php
									foreach ($social as $link) {
										$service = strtolower($link["service"]);
								?>
								<div class="contact_social contact_social_<?=$service?>">
									<a class="contact_social_link" <?=href($link["url"])?> itemprop="sameAs">
										<span class="contact_social_icon"><?=icon($service)?></span>
										<span class="contact_social_label"><?=$link["service"]?></span>
									</a>
								</div>
								<?php
									}
								?>
							</div>
							<?php
								}
							?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>