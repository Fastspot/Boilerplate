			</main>
				
			<footer class="footer" id="footer">
				<div class="footer_ribbon">
					<div class="fs-row">
						<div class="fs-cell">
							<div class="footer_ribbon_inner">
								<?php
									include_with("meta.php", $site["address"]);

									include_with("navigation/basic.php", [
										"class" => "footer_nav",
										"title" => "Footer",
										"links" => $cms->getSetting("nav-footer")
									]);

									include_with("navigation/social.php", [
										"title" => "Social",
										"links" => $cms->getSetting("nav-social"),
										"icon" => true
									]);
								?>

								<div class="copyright">
 									<p class="copyright_info">&copy; <span class="copyright_holder" itemprop="copyrightHolder" itemscope="" itemtype="http://schema.org/<?=$site["schema_type"]?>"><?=$site["title"]?></span> <span <span class="copyright_year" itemprop="copyrightYear"><?=date("Y")?></span></p>
 								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>

		<div class="js-menu menu" id="menu" aria-label="Site Menu">
			<?php
				include_with("navigation/main.php", [
					"modifier" => "sm",
					"title" => "Site",
					"icon" => "caret_down"
				]);

				include_with("navigation/basic.php", [
					"class" => "secondary_nav",
					"modifier" => "sm",
					"title" => "Secondary",
					"links" => $cms->getSetting("nav-secondary")
				]);
			?>

			<button class="js-swap js-menu-close menu_close" data-swap-target=".menu" data-swap-linked="menu" aria-label="Close Menu">
				<span class="menu_close_icon"><?=icon("close")?></span>
 				<span class="menu_close_label">Close Menu</span>
			</button>
		</div>

		<script>
			var WWW_ROOT = "<?=WWW_ROOT?>";
			var STATIC_ROOT = "<?=STATIC_ROOT?>";
		</script>
		<script src="<?=STATIC_ROOT?>js/site.js?<?=filemtime(SITE_ROOT."js/site.js")?>"></script>
	</body>
</html>