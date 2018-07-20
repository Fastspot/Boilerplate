<?php
	// Optional "name", "street", "city", "state", "zip", "email", "phone", "fax"
?>
<div class="footer_address" itemscope itemtype="http://schema.org/PostalAddress">
	<?php
		if (!empty($name)) {
	?>
	<span class="footer_address_name" itemprop="name"><?=$name?></span>
	<?php
		}

		if (!empty($street)) {
	?>
	<span class="footer_address_street" itemprop="streetAddress"><?=$street?></span>
	<?php
		}

		if (!empty($city)) {
	?>
	<span class="footer_address_city" itemprop="addressLocality"><?=$city?></span>
	<?php
		}

		if (!empty($state)) {
	?>
	<span class="footer_address_state" itemprop="addressRegion"><?=$state?></span>
	<?php
		}

		if (!empty($zip)) {
	?>
	<span class="footer_address_zip" itemprop="postalCode"><?=$zip?></span>
	<?php
		}

		if (!empty($email)) {
	?>
	<a class="footer_address_email" itemprop="email" href="mailto:<?=$email?>">
		<span class="footer_address_label"><?=$email?></span>
	</a>
	<?php
		}

		if (!empty($phone)) {
	?>
	<a class="footer_address_phone" itemprop="telephone" href="tel:<?=preg_replace("/[^0-9]/", "", $phone)?>">
		<span class="footer_address_label"><?=$phone?></span>
	</a>
	<?php
		}

		if (!empty($fax)) {
	?>
	<a class="footer_address_phone" itemprop="telephone" href="tel:<?=preg_replace("/[^0-9]/", "", $fax)?>">
		<span class="footer_address_label"><?=$fax?></span>
	</a>
	<?php
		}
	?>
</div>