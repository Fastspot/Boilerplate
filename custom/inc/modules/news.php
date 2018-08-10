<?php
	class BTXNews extends BigTreeModule {

		public $Page;
		public $Table = "btx_news";

		public function __construct() {
			$this->Page = WWW_ROOT.SQL::fetchSingle("SELECT path FROM bigtree_pages WHERE template = 'news'")."/";
		}

		static public function filterWithImages($list) {
			foreach ($list as $index => $item) {
				if (is_array($item)) {
					$news = SQL::fetchSingle("SELECT image FROM btx_news WHERE id = ?", $item["value"]);
				} else {
					$news = SQL::fetchSingle("SELECT image FROM btx_news WHERE id = ?", $index);
				}

				if (!$news) {
					unset($list[$index]);
				}
			}

			return $list;
		}

		public function get($item) {
			$item = parent::get($item);
			$item["link"] = $item["link"] ?: $this->Page."story/".$item["route"]."/";
			$item["categories"] = SQL::fetchAll("SELECT btx_news_categories.*
												 FROM btx_news_categories JOIN btx_news_categories_rel
												 ON btx_news_categories.id = btx_news_categories_rel.category
												 WHERE btx_news_categories_rel.news = ?", $item["id"]);

			if (empty($item["blurb"])) {
				$item["blurb"] = BigTree::trimLength(strip_tags($item["content"]), 250);
			}
			
			return $item;
		}

		public function getBreadcrumb($page) {
			global $bigtree, $news;

			if ($bigtree["routed_path"][0] == "story") {
				return [["title" => $news["title"], "link" => "#"]];
			}

			return [];
		}

		public function getFeaturedNews($count) {
			$news = SQL::fetchAll("SELECT * FROM btx_news WHERE featured = 'on' AND image != ''
								   ORDER BY `date` DESC, `id` DESC LIMIT $count");

			foreach ($news as $index => $item) {
				$news[$index] = $this->get($item);
			}

			return $news;
		}

		public function getRelatedByCategory($category, $exclude = "", $count = 3) {
			if ($exclude) {
				$exclude = " AND btx_news.id != ".intval($exclude);
			}

			$news = SQL::fetchAll("SELECT btx_news.*
								   FROM btx_news JOIN btx_news_categories_rel
								   ON btx_news.id = btx_news_categories_rel.news
								   WHERE btx_news_categories_rel.category = ? $exclude
								   ORDER BY `date` DESC LIMIT $count", $category);

			return BigTree::untranslateArray($news);
		}

		public function getPageForQuery($query, $category, $page, $per_page = 10) {
			if ($page < 1) {
				$page = 1;
			}

			if (is_array($category)) {
				$category = $category["id"];
			}

			$limit = "LIMIT ".(($page - 1) * $per_page).", $per_page";

			if ($category) {
				if ($query) {
					$news = SQL::fetchAll("SELECT btx_news.*
										   FROM btx_news JOIN btx_news_categories_rel
										   ON btx_news.id = btx_news_categories_rel.news
										   WHERE btx_news_categories_rel.category = ?
										     AND ".$this->getQueryString($query)."
										   ORDER BY `date` DESC $limit", $category);
				} else {
					$news = SQL::fetchAll("SELECT btx_news.*
										   FROM btx_news JOIN btx_news_categories_rel
										   ON btx_news.id = btx_news_categories_rel.news
										   WHERE btx_news_categories_rel.category = ?
										   ORDER BY `date` DESC $limit", $category);
				}
			} elseif ($query) {
				$news = SQL::fetchAll("SELECT * FROM btx_news WHERE ".$this->getQueryString($query)." ORDER BY `date` DESC $limit");
			} else {
				$news = SQL::fetchAll("SELECT * FROM btx_news ORDER BY `date` DESC $limit");
			}

			foreach ($news as $index => $item) {
				$news[$index] = $this->get($item);
			}

			return $news;
		}

		public function getPageCountForQuery($query, $category, $per_page = 10) {
			if (is_array($category)) {
				$category = $category["id"];
			}

			if ($category) {
				if ($query) {
					$count = SQL::fetchSingle("SELECT COUNT(DISTINCT(btx_news.id))
											   FROM btx_news JOIN btx_news_categories_rel
											   ON btx_news.id = btx_news_categories_rel.news
											   WHERE btx_news_categories_rel.category = ?
											     AND ".$this->getQueryString($query), $category);
				} else {
					$count = SQL::fetchSingle("SELECT COUNT(*) FROM btx_news_categories_rel WHERE category = ?", $category);
				}
			} elseif ($query) {
				$count = SQL::fetchSingle("SELECT COUNT(*) FROM btx_news WHERE ".$this->getQueryString($query));
			} else {
				$count = SQL::fetchSingle("SELECT COUNT(*) FROM btx_news");
			}

			$pages = ceil($count / $per_page);

			return $pages ?: 1;
		}

		private function getQueryString($query) {
			$pieces = explode(" ", $query);
			$query_parts = [];

			foreach ($pieces as $piece) {
				$piece = SQL::escape($piece);
				$query_parts[] = "(title LIKE '%$piece%')";
			}

			return implode(" AND ", $query_parts);
		}

	}
