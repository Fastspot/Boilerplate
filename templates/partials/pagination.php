<?php
	// Requires "pagination_link", "pages", "current_page"
	// Optional "max_to_show", "hash"

	if (empty($max_to_show)) {
		$max_to_show = 10;
	}

	$pages_to_draw = get_pagination_array($current_page, $pages, $max_to_show);
	$prev_page = ($current_page > 1) ? ($current_page - 1) : 1;
	$next_page = ($current_page != $pages) ? ($current_page + 1) : $pages;
	$first_page = $pages_to_draw[0];
	$last_page = $pages_to_draw[count($pages_to_draw) - 1];
?>
<div class="pagination">
	<a class="pagination_arrow pagination_arrow_left<?php if ($current_page == 1) { ?> pagination_arrow_disabled<?php } ?>" href="<?=$pagination_link.$prev_page.$hash?>">
		<span class="pagination_arrow_icon"><?=icon("arrow_left")?></span>
		<span class="pagination_arrow_label">Previous</span>
	</a>
	<nav class="pagination_nav">
		<?php
			if ($current_page != $first_page && $first_page != 1) {
		?>
		<span class="pagination_link pagination_more">&hellip;</span>
		<?php
			}

			foreach ($pages_to_draw as $page_number) {
				if ($page_number == $current_page) {
		?>
		<a href="<?=$pagination_link.$page_number.$hash?>" class="pagination_link active"><?=$page_number?></a>
		<?php
				} else {
		?>
		<a href="<?=$pagination_link.$page_number.$hash?>" class="pagination_link"><?=$page_number?></a>
		<?php
				}
			}

			if ($current_page != $last_page && $last_page != $pages) {
		?>
		<span class="pagination_link pagination_more">&hellip;</span>
		<?php
			}
		?>
	</nav>
	<a class="pagination_arrow pagination_arrow_right<?php if ($current_page == $pages) { ?> pagination_arrow_disabled<?php } ?>" href="<?=$pagination_link.$next_page.$hash?>">
		<span class="pagination_arrow_label">Next</span>
		<span class="pagination_arrow_icon"><?=icon("arrow_right")?></span>
	</a>
</div>