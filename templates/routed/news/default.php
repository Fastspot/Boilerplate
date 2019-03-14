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

<div class="news_block">
	<div class="fs-row">
		<div class="fs-cell">
			<div class="news_block_inner">
				<header class="news_header">
					<h2 class="news_title">News</h2>
				</header>
				<div class="news_body">
					<ul class="news_items" aria-label="News">
						<?php
							foreach ($news as $item) {
						?>
						<li class="news_item">
							<article class="news_item_article" itemscope="itemscope" itemtype="http://schema.org/NewsArticle">
								<?php
									if (!empty($item["image"])) {
								?>
								<figure class="news_item_figure">
									<a class="news_item_figure_link" <?=href($item["link"])?> tabindex="-1">
										<?php
											include_with("picture.php", [
												"class" => "news_item",
												"image" => $item["image"],
												"sources" => [
													"740px" => "classic-sml-",
													"0px" => "classic-xsml-"
												]
											]);
										?>
									</a>
								</figure>
								<?php
									}
								?>
								<div class="news_item_wrapper">
									<header class="news_item_header">
										<h3 class="news_item_title" itemprop="headline">
											<a class="news_item_title_link" <?=href($item["link"])?>>
												<span class="news_item_title_label"><?=$item["title"]?></span>
											</a>
										</h3>
										<?php
											if (is_array($item["categories"]) && count($item["categories"])) {
										?>
										<ul class="news_item_categories" aria-label="Categories">
											<?php
												foreach ($item["categories"] as $category) {
											?>
											<li class="news_item_category">
												<a class="news_item_category_link" href="<?=$page_link?>?category=<?=$category["route"]?>"><?=$category["title"]?></a>
											</li>
											<?php
												}
											?>
										</ul>
										<?php
											}
										?>
									</header>
									<div class="news_item_body">
										<div class="news_item_meta">
											<div class="news_item_date">
												<span class="news_item_date_label">Published: </span>
												<time class="news_item_date_time" datetime="<?=$item["date"]?>" itemprop="datePublished"><?=date("F j, Y", strtotime($item["date"]))?></time>
											</div>
										</div>
										<?php
											if ($item["blurb"]) {
										?>
										<div class="news_item_description" itemprop="description">
											<p><?=nl2br($item["blurb"])?></p>
										</div>
										<?php
											}
										?>
									</div>
									<footer class="news_item_links">
										<a class="news_item_link" <?=href($item["link"])?> aria-label="<?=$item["title"]?>" itemprop="url" tabindex="-1">
											<span class="news_item_link_label">Read More</span>
											<span class="news_item_link_icon"><?=icon("chevron_right")?></span>
										</a>
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
							include_with("pagination.php", [
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