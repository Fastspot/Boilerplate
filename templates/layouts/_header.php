<?php
	if (!defined("PAGE_LAYOUT")) {
		define("PAGE_LAYOUT", "default");
	}

	$body_classes = [
		"preload",
		"fs-grid",
		"page_layout_".PAGE_LAYOUT
	];

	if (defined("PAGE_THEME")) {
		$body_classes[] = "page_theme_".PAGE_THEME;
	}

	$alert = BTXAlerts::getActive();
?>
<!DOCTYPE html>
<html class="no-js" lang="en" itemscope="" itemtype="http://schema.org/WebPage">
	<?php
		include "_head.php";
	?>
	<body class="<?=implode(" ", $body_classes)?>">
		<?php
			if ($alert) {
				include_with("partials/alert.php", $alert);
			}
		?>

		<a class="skip_link" id="skip_to_content" href="#page_main_content">Skip to Main Content</a>

		<div class="page_wrapper">
			<header class="header" id="header" itemscope itemtype="http://schema.org/WPHeader">
				<div class="header_ribbon">
					<div class="fs-row">
						<div class="fs-cell">
							<div class="header_ribbon_inner">
								<?php
									include_with("partials/logo.php", [
										"modifier" => "header",
										"icon" => "logo"
									]);

									include_with("partials/navigation/main.php", [
										"modifier" => "lg",
										"title" => "Site",
										"icon" => "caret_down"
									]);

									include_with("partials/navigation/basic.php", [
										"class" => "secondary_nav",
										"modifier" => "lg",
										"title" => "Secondary",
										"links" => $cms->getSetting("nav-secondary")
									]);
								?>

								<div class="header_group">
									<?php
										include_with("partials/handle.php", [
											"class" => "mobile_sidebar",
											"modifier" => "primary"
										]);

										include_with("partials/search-handle.php", []);

										include_with("partials/search.php", [
											"modifier" => "lg",
											"placeholder" => "Search"
										]);
									?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div class="page_inner">
