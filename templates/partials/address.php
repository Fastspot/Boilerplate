<?php
	// Optional "name", "street", "city", "state", "zip", "email", "phone", "fax"
?>
<div class="address" itemscope itemtype="http://schema.org/PostalAddress">
	<span class="address_group">
		<?php
			if (!empty($name)) {
		?>
		<span class="address_name" itemprop="name"><?=$name?></span>
		<?php
			}
	
			if (!empty($street)) {
		?>
		<span class="address_street" itemprop="streetAddress"><?=$street?></span>
		<?php
			}
		?>
		<span class="address_set">
			<?php
				if (!empty($city)) {
			?>
			<span class="address_city" itemprop="addressLocality"><?=$city?></span>
			<?php
				}
		
				if (!empty($state)) {
			?>
			<span class="address_state" itemprop="addressRegion"><?=$state?></span>
			<?php
				}
		
				if (!empty($zip)) {
			?>
			<span class="address_zip" itemprop="postalCode"><?=$zip?></span>
			<?php
				}
			?>
		</span>
	</span>
	<?php
		if (!empty($email)) {
	?>
	<span class="address_detail">
		<span class="address_detail_icon"><?=icon("email")?></span>
		<a class="address_detail_label address_detail_label_email" itemprop="email" href="mailto:<?=$email?>"><?=$email?></a>
	</span>
	<?php
		}

		if (!empty($phone)) {
	?>
	<span class="address_detail">
		<span class="address_detail_icon"><?=icon("phone")?></span>
		<a class="address_detail_label address_detail_label_phone" <?=tel_href($phone)?> itemprop="telephone"><?=$phone?></a>
	</span>
	<?php
		}

		if (!empty($fax)) {
	?>
	<span class="address_detail">
		<span class="address_detail_icon"><?=icon("fax")?></span>
		<a class="address_detail_label address_detail_label_fax" <?=tel_href($fax)?> itemprop="fax"><?=$fax?></a>
	</span>
	<?php
		}
	?>
</div>