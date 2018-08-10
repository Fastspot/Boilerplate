<?php
	/**
	 * @global string $image
	 * @global string $title
	 * @global string $address
	 * @global string $phone
	 * @global string $fax
	 * @global string $email
	 * @global array $social
	 */
?>
<div class="contact_block">
	<div class="contact_block_inner">
		<div class="fs-row">
			<div class="fs-cell">
				<div class="contact_block_wrapper">
					<div class="contact_block_body">
						<div class="contact_item">
							<div class="contact_item_inner" itemscope itemtype="https://schema.org/Person">
								<?php
									if (!empty($image)) {
								?>
								<div class="contact_item_media">
									<figure class="contact_item_figure">
										<img class="contact_item_image" src="<?=BigTree::prefixFile($image, "square-xxsml-")?>" alt="">
									</figure>
								</div>
								<?php
									}
								?>
								<div class="contact_item_wrapper">
									<div class="contact_item_header">
										<h2 class="contact_item_name" itemprop="name">
											<span class="contact_item_name_label"><?=$name?></span>
										</h2>
										<?php
											if (!empty($title)) {
										?>
										<div class="contact_item_title" itemprop="jobTitle">
											<span class="contact_item_title_label"><?=$title?></span>
										</div>
										<?php
											}
										?>
									</div>
									<div class="contact_item_body">
										<div class="contact_item_types">
											<?php
												if (!empty($address)) {
											?>
											<div class="contact_item_type contact_item_type_address">
												<span class="contact_item_type_label">
													<span class="contact_item_type_label_icon"><?=icon("place")?></span>
													<span class="contact_item_type_label_text">Address</span>
												</span>
												<span class="contact_item_type_description" itemprop="address"><?=nl2br($address)?></span>
											</div>
											<?php
												}

												if (!empty($phone)) {
											?>
											<div class="contact_item_type contact_item_type_phone">
												<a class="contact_item_type_link" href="tel:<?=preg_replace('/[^0-9]/', '', $phone)?>">
													<span class="contact_item_type_label">
														<span class="contact_item_type_label_icon"><?=icon("phone")?></span>
														<span class="contact_item_type_label_text">Telephone</span>
													</span>
													<span class="contact_item_type_description" itemprop="telephone"><?=$phone?></span>
												</a>
											</div>
											<?php
												}

												if (!empty($fax)) {
											?>
											<div class="contact_item_type contact_item_type_fax">
												<a class="contact_item_type_link" href="tel:<?=preg_replace('/[^0-9]/', '', $fax)?>">
													<span class="contact_item_type_label">
														<span class="contact_item_type_label_icon"><?=icon("fax")?></span>
														<span class="contact_item_type_label_text">Fax</span>
													</span>
													<span class="contact_item_type_description" itemprop="fax"><?=$fax?></span>
												</a>
											</div>
											<?php
												}

												if (!empty($email)) {
											?>
											<div class="contact_item_type contact_item_type_email">
												<a class="contact_item_type_link" href="mailto:<?=$email?>">
													<span class="contact_item_type_label">
														<span class="contact_item_type_label_icon"><?=icon("email")?></span>
														<span class="contact_item_type_label_text">Email</span>
													</span>
													<span class="contact_item_type_description" itemprop="email"><?=$email?></span>
												</a>
											</div>
											<?php
												}
											?>
										</div>
										<?php
											if (is_array($social) && count($social)) {
										?>
										<div class="contact_item_socials">
											<?php
												foreach ($social as $link) {
													$service = strtolower($link["service"]);
											?>
											<div class="contact_item_social contact_item_social_<?=$service?>">
												<a class="contact_item_social_link" <?=href($link["url"])?> itemprop="sameAs">
													<span class="contact_item_social_icon"><?=icon($service)?></span>
													<span class="contact_item_social_label"><?=$link["service"]?></span>
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
		</div>
	</div>
</div>