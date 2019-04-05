<div class="meta" itemprop="creator" itemscope itemtype="http://schema.org/<?=$schema_type?>">
	<div class="meta_logo">
		<a class="meta_logo_link" itemprop="url" href="page-home.html">
			<span class="meta_logo_label" itemprop="name"><?=$name?></span>
			<span class="meta_logo_icon"><?=icon("logo")?></span>
		</a>
	</div>
	<div class="meta_details" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
		<span class="meta_detail meta_address">
			<span class="meta_detail_icon"><?=icon("place")?></span>
			<span class="meta_detail_label meta_detail_label_address">
				<span class="meta_address_street" itemprop="streetAddress"><?=$street?></span>
				<span class="meta_address_group">
					<span class="meta_address_city" itemprop="addressLocality"><?=$city?></span>
					<span class="meta_address_state" itemprop="addressRegion"><?=$state?></span>
					<span class="meta_address_zip" itemprop="postalCode"><?=$zip?></span>
				</span>
			</span>
		</span>
		<?php
			if (!empty($email)) {
		?>
		<span class="meta_detail meta_email">
			<span class="meta_detail_icon"><?=icon("mail")?></span>
			<a class="meta_detail_label meta_detail_label_email" href="mailto:<?=$email?>" itemprop="email"><?=$email?></a>
		</span>
		<?php
			}

			if (!empty($phone)) {
		?>
		<span class="meta_detail">
			<span class="meta_detail_icon"><?=icon("phone")?></span>
			<a class="meta_detail_label meta_detail_label_phone" <?=tel_href($phone)?> itemprop="telephone"><?=$phone?></a>
		</span>
		<?php
			}

			if (!empty($fax)) {
		?>
		<span class="meta_detail">
			<span class="meta_detail_icon"><?=icon("fax")?></span>
			<a class="meta_detail_label meta_detail_label_fax" <?=tel_href($fax)?> itemprop="fax"><?=$fax?></a>
		</span>
		<?php
			}
		?>
	</div>
</div>