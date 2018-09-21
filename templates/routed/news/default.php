<?php
	/**
	 * @global BTXNews $newsMod
	 * @global BTXNewsCategories $categoryMod
	 * @global string $page_link
	 */

	$current_page = !empty($_GET["page"]) ? intval($_GET["page"]) : 1;
	$query = !empty($_GET["query"]) ? $_GET["query"] : null;

	if (!empty($_GET["category"])) {
		$category = $categoryMod->getByRoute($_GET["category"]);

		if (!$category) {
			$cms->catch404();
		}
	} else {
		$category = null;
	}

	$news = $newsMod->getPageForQuery($query, $category, $current_page);
	$pages = $newsMod->getPageCountForQuery($query, $category);
	$categories = $categoryMod->getAllPositioned();

	$page_link = $cms->getLink($bigtree["page"]["id"]);
	$pagination_link_parts = [];

	if ($category) {
		$pagination_link_parts[] = "category=".$category["route"];
	}

	if ($query) {
		$pagination_link_parts[] = "query=".htmlspecialchars($_GET["query"]);
	}

	$pagination_link_parts[] = "page=";
	$pagination_link = $page_link."?".implode("&", $pagination_link_parts);
?>

<!-- insert filter drawing here -->

<section class="news_listing">
	<div class="news_listing_inner">
		<div class="fs-row">
			<div class="fs-cell">
				<div class="news_listing_wrapper">
					<div class="news_listing_body">
						<ul class="news_list">
							<?php
								foreach ($news as $item) {
							?>
							<li class="news_item">
								<article class="news_item_article" itemscope="itemscope" itemtype="http://schema.org/NewsArticle">
									<?php
										if (!empty($item["image"])) {
									?>
									<div class="news_item_media">
										<a class="news_item_media_link" <?=href($item["link"])?>>
											<figure class="news_item_figure">
												<?php
													include_with(SERVER_ROOT."templates/layouts/partials/picture.php", [
														"class" => "news_item",
														"image" => $item["image"],
														"sources" => [
															"740px" => "classic-sml-",
															"0px" => "classic-xsml-"
														]
													]);
												?>
											</figure>
										</a>
									</div>
									<?php
										}
									?>
									<div class="news_item_wrapper">
										<header class="news_item_header">
											<?php
												if (is_array($item["categories"]) && count($item["categories"])) {
											?>
											<div class="news_item_tags">
												<?php
													foreach ($item["categories"] as $category) {
												?>
												<div class="news_item_tag">
													<a class="news_item_tag_link" href="<?=$page_link?>?category=<?=$category["route"]?>">
														<span class="news_item_tag_label"><?=$category["title"]?></span>
													</a>
												</div>
												<?php
													}
												?>
											</div>
											<?php
												}
											?>
											<h2 class="news_item_title" itemprop="headline">
												<a class="news_item_title_link" <?=href($item["link"])?>><?=$item["title"]?></a>
											</h2>
										</header>
										<div class="news_item_body">
											<div class="news_item_meta">
												<div class="news_item_date">
													<time class="news_item_date_label" datetime="<?=$item["date"]?>" itemprop="datePublished"><?=date("F j, Y", strtotime($item["date"]))?></time>
												</div>
											</div>
											<div class="news_item_description" itemprop="description">
												<p><?=nl2br($item["blurb"])?></p>
											</div>
										</div>

										<footer class="news_item_footer">
											<div class="news_item_links">
												<a class="news_item_link" <?=href($item["link"])?> aria-label="<?=$item["title"]?>" itemprop="url">
													<span class="news_item_link_label">Read More</span>
												</a>
											</div>
										</footer>
									</div>
								</article>
							</li>
							<?php
								}
							?>
						</ul>
					</div>
					<footer class="news_listing_footer">
						<?php
							if ($pages > 1) {
								include_with(SERVER_ROOT."templates/layouts/partials/pagination.php", [
									"pagination_link" => $pagination_link,
									"pages" => $pages,
									"current_page" => $current_page,
									"max_to_show" => 10
								]);
							}
						?>
					</footer>
				</div>
			</div>
		</div>
	</div>
</section>