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
<div class="js-pagination pagination">
	<nav class="pagination_nav" aria-label="List">
		<ul class="pagination_nav_list" aria-label="List">
			<li class="pagination_nav_item">
				<a class="js-pagination-previous pagination_arrow pagination_arrow_left<?php if ($current_page == 1) { ?> pagination_arrow_disabled<?php } ?>" href="<?=$pagination_link.$prev_page.$hash?>">
					<span class="pagination_arrow_icon"><?=icon("arrow_left")?></span>
					<span class="pagination_arrow_label">Previous</span>
				</a>
			</li>
			<li class="pagination_nav_item">
				<a class="js-pagination-next pagination_arrow pagination_arrow_right<?php if ($current_page == $pages) { ?> pagination_arrow_disabled<?php } ?>" href="<?=$pagination_link.$next_page.$hash?>">
					<span class="pagination_arrow_label">Next</span>
					<span class="pagination_arrow_icon"><?=icon("arrow_right")?></span>
				</a>
			</li>
		</ul>
	</nav>
	<form class="pagination_form" action="" method="get">
		<div class="pagination_form_inner">
			<label class="pagination_form_label" for="page">Page</label>
			<div class="pagination_form_select_wrap">
				<select class="js-pagination-select pagination_form_select" name="page" aria-label="Select Page Number">
					<?php foreach ($pages_to_draw as $page_number) { ?>
					<option value="<?=$page_number?>"><?=$page_number?></option>
					<?php } ?>
				</select>
			</div>
			<button class="pagination_form_button" type="submit" aria-label="View Page">Go</button>
		</div>
	</form>
</div>
