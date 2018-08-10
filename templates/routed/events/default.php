<?php
	/**
	 * @global BTXEvents $eventsMod
	 * @global string $page_link
	 */

	$current_page = !empty($_GET["page"]) ? intval($_GET["page"]) : 1;
	$category = !empty($_GET["category"]) ? $categoryMod->getByRoute($_GET["category"]) : null;
	$query = !empty($_GET["query"]) ? $_GET["query"] : null;

	$news = $newsMod->getPageForQuery($query, $category, $current_page);
	$pages = $newsMod->getPageCountForQuery($query, $category);
	$categories = $categoryMod->getCategories();

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

<!-- insert filters here -->

<section class="event_listing">
	<div class="event_listing_inner">
		<div class="fs-row">
			<div class="fs-cell">
				<div class="event_listing_wrapper">
					<div class="event_listing_body">
						<ul class="event_list">
							<?php
								foreach ($events as $event) {
									$link = $event["link"] ?: $page_link.$event["title_route"]."/".$event["date_route"]."/";
									$start_date = date("F d", strtotime($event["start"]));
									$end_date = date("F d", strtotime($event["end"]));
									$blurb = $event["blurb"] ?: BigTree::trimLength(strip_tags($event["content"]), 250);
							?>
							<li class="event_item">
								<article class="event_item_article" itemscope="itemscope" itemtype="http://schema.org/Event">
									<?php
										if (!empty($event["image"])) {
									?>
									<div class="event_item_media">
										<a class="event_item_media_link" <?=href($link)?>>
											<figure class="event_item_figure">
												<?php
													include_with(SERVER_ROOT."templates/layouts/partials/picture.php", [
														"class" => "event_item",
														"image" => $event["image"],
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
									<div class="event_item_wrapper">
										<header class="event_item_header">
											<div class="event_item_date">
												<time class="event_item_time" datetime="<?=date("Y-m-d H:i:s", strtotime($event["start"]))?>" itemprop="startDate">
													<span class="event_item_time_start"><?=$start_date?></span>
													<?php
														if ($start_date != $end_date) {
													?>
													<span class="event_item_time_end"> - <?=$end_date?></span>
													<?php
														}
													?>
												</time>
											</div>
											<h2 class="event_item_title" itemprop="name">
												<a class="event_item_title_link" <?=href($link)?>><?=$event["title"]?></a>
											</h2>
										</header>
										<div class="event_item_body">
											<?php
												if (!empty($event["location"]) || empty($event["all_day"])) {
											?>
											<div class="event_item_details">
												<?php
													if (!empty($event["location"])) {
												?>
												<div class="event_item_detail event_item_detail_location" itemprop="location" itemscope itemtype="http://schema.org/Place">
													<span class="event_item_detail_icon"><?=icon("place")?></span>
													<span class="event_item_detail_label" itemprop="name"><?=$event["location"]?></span>
												</div>
												<?php
													}

													if (empty($event["all_day"])) {
														$start_time = date("g:i A", strtotime($event["start"]));
												?>
												<div class="event_item_detail event_item_detail_time">
													<span class="event_item_detail_icon"><?=icon("clock")?></span>
													<span class="event_item_detail_label"><?=$start_time?><?php if ($event["end_time"]) { echo " - ".date("g:i A", strtotime($event["end"])); } ?></span>
												</div>
												<?php
													}
												?>
											</div>
											<?php
												if ($blurb) {
											?>
											<div class="event_item_description" itemprop="description">
												<p><?=nl2br($blurb)?></p>
											</div>
											<?php
												}
											?>
										</div>
										<footer class="event_item_footer">
											<div class="event_item_links">
												<a class="event_item_link" <?=href($link)?> aria-label="<?=$event["title"]?>" itemprop="url">
													<span class="event_item_link_label">Learn More</span>
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
					<footer class="event_listing_footer">
						<?php
							include_with(SERVER_ROOT."templates/layouts/partials/pagination.php", [
								"pagination_link" => $pagination_link,
								"pages" => $pages,
								"current_page" => $current_page,
								"max_to_show" => 10
							]);
						?>
					</footer>
				</div>
			</div>
		</div>
	</div>
</section>