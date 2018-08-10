<?php
	function button($class, $label, $url, $icon = "", $aria = "") {
?>
<a class="<?=$class?>_link" <?=href($url)?><?php if ($aria) { ?> aria-label="<?=$aria?>"<?php } ?>>
	<span class="<?=$class?>_link_label"><?=$label?></span>
	<?php
		if ($icon) {
	?>
	<span class="<?=$class?>_link_icon" aria-hidden="true">
		<?=icon($icon)?>
	</span>
	<?php
		}
	?>
</a>
<?php
	}

	function get_gallery_link($item, $autoplay = true) {
		if (!empty($item["video"]["service"])) {
			if ($item["video"]["service"] == "youtube") {
				return "//www.youtube.com/embed/".$item["video"]["id"]."?rel=0&showinfo=0".($autoplay ? "&autoplay=true" : "");
			} else {
				return "//player.vimeo.com/video/".$item["video"]["id"]."?rel=0&showinfo=0".($autoplay ? "&autoplay=true" : "");
			}
		} else {
			return $item["image"];
		}
	}

	function get_pagination_array($current_page, $pages, $max_to_show = 10) {
		if ($pages == 0) {
			$pages = 1;
		}

		if ($max_to_show != 10 && $max_to_show % 2 == 0) {
			$max_to_show++;
		}

		// Figure out what previous and next buttons should do.
		if ($current_page == 1) {
			$prev_page = 1;
		} else {
			$prev_page = $current_page - 1;
		}

		if ($current_page == $pages) {
			$next_page = $pages;
		} else {
			$next_page = $current_page + 1;
		}

		// If we have less than the max pages, just draw them all.
		if ($pages <= $max_to_show) {
			$start_page = 1;
			$end_page = $pages;
		// Otherwise we need to figure out where we are...
		} else {
			$ceil_point = ceil($max_to_show / 2);
			$floor_point = floor($max_to_show / 2);

			if ($current_page <= $ceil_point) {
				$start_page = 1;
				$end_page = $max_to_show;
			} else if ($current_page >= ($pages - $floor_point)) {
				$start_page = $pages - $max_to_show - 1 + $floor_point;
				$end_page = $pages;
			} else {
				$start_page = $current_page - $floor_point;
				$end_page = $current_page + $floor_point;
			}
		}

		return range($start_page, $end_page);
	}

	function href($url, $force_blank = false) {
		$return = 'href="'.$url.'"';

		if ($force_blank || strpos($url, WWW_ROOT) === false) {
			$return .= ' target="_blank" rel="noopener noreferrer"';
		}

		return $return;
	}

	function include_with($path, $variables) {
		global $site;

		foreach ($variables as $key => $value) {
			$$key = $value;
		}

		include $path;
	}

	function icon($name) {
?>
<svg class="icon icon_<?=$name?>">
	<use xlink:href="<?=STATIC_ROOT?>images/icons.svg#<?=$name?>"></use>
</svg>
<?php
	}

	function set_subnav($depth = 1) {
		global $bigtree, $site;

		if (!empty($site["sub_nav"])) {
			return;
		}

		// Our complicated mess of finding out what nav level to draw when we're only drawing two levels
		if ($depth == 2) {
			// If our parent is the homepage, we're drawing one level of children no matter what -- we never draw top-level nav as siblings
			if (!$bigtree["page"]["parent"] || $bigtree["page"]["trunk"]) {
				$site["sub_nav"] = BigTreeCMS::getNavByParent($bigtree["page"]["id"], 2);
				$site["sub_nav_section"] = $bigtree["page"];

				return;
			}

			$child_pages = BigTreeCMS::getNavByParent($bigtree["page"]["id"], 2);

			// If we have child pages, we're going to draw them and the siblings
			if (count($child_pages)) {
				$site["sub_nav"] = $child_pages;
				$site["sub_nav_section"] = $bigtree["page"];

				return;
			}

			// We don't have child pages, we want to draw the siblings of the current page AND the above level
			$siblings = BigTreeCMS::getNavByParent($bigtree["page"]["parent"], 2);
			$parent = SQL::fetch("SELECT `id`, `parent`, `trunk`, `in_nav`, `path`, `nav_title` FROM bigtree_pages
								  WHERE id = ?", $bigtree["page"]["parent"]);

			$site["sub_nav"] = $siblings;
			$site["sub_nav_section"] = $parent;
		// Slightly less complicated for one depth
		} elseif ($depth == 1) {
			$child_pages = BigTreeCMS::getNavByParent($bigtree["page"]["id"], 1);

			// If our parent is the homepage, we're drawing one level of children no matter what -- we never draw top-level nav as siblings
			if (count($child_pages) || !$bigtree["page"]["parent"] || $bigtree["page"]["trunk"]) {
				$site["sub_nav"] = $child_pages;
				$site["sub_nav_section"] = $bigtree["page"];

				return;
			}

			// We don't have child pages, we want to draw the siblings of the current page AND the above level
			$siblings = BigTreeCMS::getNavByParent($bigtree["page"]["parent"], 1);
			$parent = SQL::fetch("SELECT `id`, `parent`, `trunk`, `in_nav`, `path`, `nav_title` FROM bigtree_pages
								  WHERE id = ?", $bigtree["page"]["parent"]);

			// If the parent's siblings would be top level, just return current siblings
			if (count($siblings)) {
				$site["sub_nav"] = $siblings;
				$site["sub_nav_section"] = $parent;

				return;
			}

			$ancestors = BigTreeCMS::getNavByParent($parent["parent"], 1);

			$site["sub_nav"] = $ancestors;
			$site["sub_nav_section"] = SQL::fetch("SELECT `id`, `parent`, `trunk`, `in_nav`, `path`, `nav_title` FROM bigtree_pages
												   WHERE id = ?", $parent["parent"]);
		} else {
			$top_level = BigTreeCMS::getTopLevelNavigationId();
			$site["sub_nav"] = BigTreeCMS::getNavByParent($top_level, $depth);
		}
	}
