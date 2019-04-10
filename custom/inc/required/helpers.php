<?php
	function button($class, $label, $url, $icon = "", $aria = "") {
?>
<a class="<?=$class?>_link" <?=href($url)?><?php if ($aria) { ?> aria-label="<?=$aria?>"<?php } ?>>
	<span class="<?=$class?>_link_inner">
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
	</span>
</a>
<?php
	}

	function button_icon_animate($class, $label, $url, $icon = "", $aria = "") {
?>
<a class="<?=$class?>_link" <?=href($url)?><?php if ($aria) { ?> aria-label="<?=$aria?>"<?php } ?>>
	<span class="<?=$class?>_link_inner">
		<span class="<?=$class?>_link_label"><?=$label?></span>
		<span class="<?=$class?>_link_icons" aria-hidden="true">
			<svg class="icon icon_on icon_<?=$icon?>">
				<use xlink:href="<?=STATIC_ROOT?>images/icons.svg#<?=$icon?>"></use>
			</svg>
			<svg class="icon icon_off icon_<?=$icon?>">
				<use xlink:href="<?=STATIC_ROOT?>images/icons.svg#<?=$icon?>"></use>
			</svg>
		</span>
	</span>
</a>
<?php
	}

	function get_video_url($video) {
		if (!empty($video["service"])) {
			if ($video["service"] == "youtube") {
				return "https://www.youtube.com/watch?v=".$video["id"];
			} else {
				return "https://vimeo.com/".$video["id"];
			}
		} else {
			return $video["image"];
		}
	}

	function get_gallery_link($item) {
		if (!empty($item["video"]["service"])) {
			if ($item["video"]["service"] == "YouTube") {
				return "//www.youtube.com/embed/".$item["video"]["id"];
			} else {
				return "//vimeo.com/".$item["video"]["id"];
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

	function include_with($path, $variables = []) {
		global $site;

		foreach ($variables as $key => $value) {
			$$key = $value;
		}

		// Allow for relative to layouts
		if (file_exists($path)) {
			include $path;
		} else {
			include SERVER_ROOT."templates/partials/".$path;
		}
	}

	function icon($name) {
?>
<svg class="icon icon_<?=$name?>">
	<use xlink:href="<?=STATIC_ROOT?>images/icons.svg#<?=$name?>"></use>
</svg>
<?php
	}

	function not_empty_callout($array) {
		if (!is_array($array)) {
			return false;
		}
		
		foreach ($array as $key => $value) {
			if (is_array($value)) {
				if (not_empty_callout($value)) {
					return true;
				}
			} elseif ($key != "type" && !empty($value)) {
				return true;
			}
		}

		return false;
	}

	function set_subnav($depth = 1) {
		global $bigtree, $site;
		static $previous_depth = 0;

		if (!empty($site["sub_nav"]) && $previous_depth == $depth) {
			return;
		}

		$previous_depth = $depth;

		// Our complicated mess of finding out what nav level to draw when we're only drawing two levels
		if ($depth == 2) {
			// If our parent is the homepage, we're drawing one level of children no matter what -- we never draw top-level nav as siblings
			if (!$bigtree["page"]["parent"] || $bigtree["page"]["trunk"] || !$bigtree["page"]["in_nav"]) {
				$site["sub_nav"] = BigTreeCMS::getNavByParent($bigtree["page"]["id"]);
				$site["sub_nav_section"] = $bigtree["page"];

				return;
			}

			$siblings = BigTreeCMS::getNavByParent($bigtree["page"]["parent"]);
			$child_pages = BigTreeCMS::getNavByParent($bigtree["page"]["id"]);
			$parent = SQL::fetch("SELECT `id`, `parent`, `trunk`, `in_nav`, `path`, `nav_title` FROM bigtree_pages
								  WHERE id = ?", $bigtree["page"]["parent"]);

			// If we have child pages, we're going to draw them and the siblings
			if (count($child_pages)) {
				foreach ($siblings as $index => $sibling) {
					if ($sibling["id"] == $bigtree["page"]["id"]) {
						$siblings[$index]["children"] = $child_pages;
					}
				}

				$site["sub_nav"] = $siblings;
				$site["sub_nav_section"] = $parent;

				return;
			} elseif (!$parent["in_nav"]) {
				$site["sub_nav"] = $siblings;
				
				return;
			} elseif ($parent["parent"]) {
				$ancestors = BigTreeCMS::getNavByParent($parent["parent"]);

				foreach ($ancestors as $index => $ancestor) {
					if ($ancestor["id"] == $parent["id"]) {
						$ancestors[$index]["children"] = $siblings;
					}
				}

				$site["sub_nav"] = $ancestors;
				$site["sub_nav_section"] = SQL::fetch("SELECT `id`, `parent`, `trunk`, `in_nav`, `path`, `nav_title` FROM bigtree_pages
								  					   WHERE id = ?", $parent["parent"]);

				return;
			}

			// We don't have child pages, we want to draw the siblings of the current page AND the above level
			$site["sub_nav"] = $siblings;
			$site["sub_nav_section"] = $parent;

			return;
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

	function tel_href($phone) {
		return 'href="tel:'.preg_replace("/[^0-9]/", "", $phone).'"';
	}
