<?php
	$body_classes = [
		"preload",
		"fs-grid"
	];

	if (defined("PAGE_LAYOUT")) {
		$body_classes[] = "page_layout_".PAGE_LAYOUT;
	}

	if (defined("PAGE_THEME")) {
		$body_classes[] = "page_theme_".PAGE_THEME;
	}
?>
<!DOCTYPE html>
<html class="no-js" lang="en" itemscope="" itemtype="http://schema.org/WebPage">
	<?php
		include "_head.php";
	?>
	<body class="<?=implode(" ", $body_classes)?>">
		<!-- Skip-to-Content Link -->
		<a class="skip_link" id="skip_to_content" href="#main_content">Skip to Main Content</a>

		<!-- Page Wrapper -->
		<div class="page_wrapper">
				<!-- Header -->
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
									?>
									{% include "../partials/logo.twig" with {
										modifier: "header",
										icon: "logo"
									} %}

									{% include "../partials/navigation/main.twig" with {
										modifier: "lg",
										title: "Site",
										heading: false,
										links: mainNavAlias,
										active: activePage,
										icon: "caret_down"
									} %}

									{% include "../partials/navigation/basic.twig" with {
										class: "secondary_nav",
										modifier: "lg",
										title: "Secondary",
										heading: false,
										links: secondaryNavAlias
									} %}

									<div class="header_group">
										{% include "../partials/handle.twig" with {
											class: "mobile_sidebar",
											modifier: "primary",
											label: "Menu"
										} %}

										{% include "../partials/search-handle.twig" %}

										{% include "../partials/search.twig" with {
											modifier: "lg",
											placeholder: "Search",
											buttonText: ""
										} %}
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<!-- END: Header -->
			{% endif %}

			<!-- Page -->

			<div class="page_inner">
				{% if page.layout != "home" %}
				<!-- Page Feature -->
				<div class="page_feature">
					{% block page_feature %}
					{% endblock %}
				</div>
				<!-- END: Page Feature -->
				{% endif %}

				<!-- Page Content -->
				<div class="page_content">
					{% if page.layout != "home" %}
					<div class="fs-row">
						{% if page.layout == "default" or page.layout == "style-guide" %}
						<!-- Sub Nav -->
						<div class="fs-cell-right fs-lg-4 aside_wrapper subnav_wrapper">
							{% include "../partials/navigation/sub.twig" with {
								title: sectionTitle,
								links: subNavAlias
							} %}
						</div>
						<!-- END: Sub Nav -->
						{% endif %}

						<!-- Main Content -->
						<div class="fs-cell{% if page.layout == "default" or page.layout == "style-guide" %} fs-lg-8{% elseif page.layout == "full" %} fs-lg-10 fs-all-justify-center{% endif %} content_wrapper">
							<main class="main_content" id="main_content" itemprop="mainContentOfPage">
								<!-- Page Header -->
								{% block page_header %}
								<div class="page_header">
									{% include "../partials/navigation/breadcrumb.twig" with {
										links: breadcrumbNav
									} %}

									{% if page.title %}
									<h1 class="page_title">{{page.title}}</h1>
									{% endif %}
								</div>
								{% endblock %}
								<!-- END: Page Header -->

								<!-- WYSIWYG - wrap all WYSIWYG text areas in `.typography` -->
								<div class="typography">
									{% block typography %}
									{% endblock %}
								</div>
								<!-- END: WYSIWYG -->

								{% block after_typography %}
								{% endblock %}

								<!-- In Content Callouts -->
								<div class="in_content_callouts">
									{% block in_content_callouts %}
									{% endblock %}
								</div>
								<!-- END: In Content Callouts -->
							</main>
						</div>
						<!-- END: Main Content -->

						{% if page.layout == "default" or page.layout == "style-guide" %}
						<!-- Sidebar Callouts -->
						<div class="fs-cell-right fs-lg-4 aside_wrapper sidebar_wrapper">
							<div class="sidebar" itemscope itemtype="http://schema.org/WPSideBar">
								{% block sidebar %}
								{% endblock %}
							</div>
						</div>
						<!-- END: Sidebar Callouts -->
						{% endif %}
					</div>
					{% endif %}

					<!-- Full Width Callouts -->
					{% if page.layout == "home" %}
					<main class="full_width_callouts" id="main_content" itemprop="mainContentOfPage">
					{% else %}
					<div class="full_width_callouts">
					{% endif %}
						{% block full_width_callouts %}
						{% endblock %}
					{% if page.layout == "home" %}
					</main>
					{% else %}
					</div>
					{% endif %}
					<!-- END: Full Width Callouts -->
				</div>
				<!-- END: Page Content -->
			</div>
			<!-- END: Page -->

			{% if page.layout != "style-guide" %}
			<!-- Footer -->
			<footer class="footer" id="footer" itemscope itemtype="http://schema.org/WPFooter">
				<div class="footer_ribbon">
					<div class="fs-row">
						<div class="fs-cell">
							<div class="footer_ribbon_inner">
								{% include "../partials/logo.twig" with {
									modifier: "footer",
									icon: "logo"
								} %}

								{% include "../partials/address.twig" with {
									name: "Fastspot",
									street: "2980 Falls Road",
									city: "Baltimore",
									state: "MD",
									zip: "21211",
									tel: "202-432-1200"
								} %}

								{% include "../partials/navigation/basic.twig" with {
									class: "footer_nav",
									title: "Footer",
									heading: false,
									links: footerNavAlias
								} %}

								{% include "../partials/navigation/social.twig" with {
									title: "Social",
									links: socialNavAlias
								} %}
							</div>
						</div>
					</div>
				</div>
			</footer>
			<!-- END: Footer -->
			{% endif %}
		</div>
		<!-- END: page_wrapper -->

		<div class="js-mobile-sidebar mobile_sidebar" id="mobile_sidebar" tabindex="-1">
			{% include "../partials/search.twig" with {
				modifier: "sm",
				placeholder: "Search",
				buttonText: ""
			} %}

			{% include "../partials/navigation/main.twig" with {
				modifier: "sm",
				title: "Site",
				links: mainNavAlias,
				active: activePage,
				icon: "caret_down"
			} %}

			{% include "../partials/navigation/basic.twig" with {
				class: "secondary_nav",
				modifier: "sm",
				title: "Secondary",
				heading: false,
				links: secondaryNavAlias
			} %}

			<button class="js-swap js-mobile-sidebar-close mobile_sidebar_close" data-swap-target=".mobile_sidebar" data-swap-linked="mobile_sidebar" aria-label="Close Menu">
				<span class="mobile_sidebar_close_icon">{{site.icon("close")}}</span>
			</button>
		</div>

		<script>
			var WWW_ROOT = "";
			var STATIC_ROOT = "../../";
		</script>
		<script src="../../js/site.js?{{ 'now'|date('U') }}"></script>

		{% if page.scripts %}
		{% for script in page.scripts %}
		{{script}}
		{% endfor %}
		{% endif %}

		{% if grid %}
		<!-- Grid Bookmarklet -->
		<script>
			(function(){if(typeof FSGridBookmarklet==='undefined'){document.body.appendChild(document.createElement('script')).src='//formstone.it/js/bookmarklet/grid.js';}else{FSGridBookmarklet();}} )();
		</script>
		{% endif %}
	</body>
</html>