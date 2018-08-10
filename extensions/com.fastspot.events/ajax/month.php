<?php
	if (isset($_GET["month"])) {
		$month = $_GET["month"];
	}

	if (!defined("MODULE_ROOT")) {
		define("MODULE_ROOT", $_GET["module_root"]);
	}

	$month = strtotime(date("F 1, Y",$month));
	
	// Get the events for this month
	$e = BTXEvents::getEventsByDateRange(date("Y-m-1",$month),date("Y-m-t",$month));
	// Change the events into an array with the key being a date and the value being an array of events ocurring on that day
	$month_of_events = BTXEvents::getKeyedDateRangeForEvents($e);
?>
<div id="btx_events_calendar">
	<header>
		<nav>
			<a href="#<?=($month-60*60)?>" class="previous month_button"><span>&laquo;</span></a>
			<span><?=date("F Y",$month)?></span>
			<a href="#<?=(strtotime(date("F t, Y",$month))+60*60*24)?>" class="next month_button"><span>&raquo;</span></a>
		</nav>
	</header>
	<summary>
		<section>Sunday</section>
		<section>Monday</section>
		<section>Tuesday</section>
		<section>Wednesday</section>
		<section>Thursday</section>
		<section>Friday</section>
		<section>Saturday</section>
	</summary>
	<ul class="dates">
		<?php
			// Get the number of days in the previous month.
			$pmonth_days = date("t",strtotime(date("F 1, Y",$month))-60*60);
			// Get the first day of the month's day (Sunday, Monday, etc) in numeric form.
			$first_day_of_month = date("w",$month);
			// Get the number of days in this month.
			$days_in_month = date("t",$month);
			
			// Figure out when the last row starts
			$days_in_first_row = 7 - $first_day_of_month;
			$days_after_first_row = $days_in_month - $days_in_first_row;
			$full_rows = $days_after_first_row - ($days_after_first_row % 7);
			$days_in_last_row = $days_in_month - $days_in_first_row - $full_rows;
			$rows = 1 + ($full_rows / 7);
			
			if ($days_in_last_row) {
				$rows++;
			}
									
			// $y is the counter for number of cells drawn.
			$y = 0;
			
			// Show the first couple days of the last month grayed out.
			$d = $first_day_of_month;
			
			while ($d) {
		?>
		<li><span class="not_active_month"><?=($pmonth_days-$d+1)?></span></li>
		<?php
				$d--;
				$y++;
			}
			
			// Let's go through this month. $x is the counter for the day of the month.
			$x = 0;
			
			while ($x < $days_in_month) {
				// Increase the day of the month and the number of cells drawn.
				$x++;
				$y++;
				
				$class = array();
				
				if ($y % 7 == 0) {
					$class[] = "saturday";
				}

				// See if we're in the last row
				if ($y / 7 > ($rows -1)) {
					$class[] = "last_row";
				}
		?>
		<li class="<?=implode(" ",$class)?>"><span><?=$x?></span>
		<?php			
			// Format the day with preceding 0.
			$day = str_pad($x,2,"0",STR_PAD_LEFT);

			// See if there are any events for this day.
			$items = $month_of_events[date("Y",$month)."-".date("m",$month)."-".$day];
  			
  			if (is_array($items) && count($items)) {
  				echo '<ul class="calendar_events">';
  				$xx = 0;
				
				foreach ($items as $item) {
					if ($xx < 4) {
						echo '<li><a href="'.MODULE_ROOT."edit-check/?event=".$item["id"].'&date='.date("Y",$month)."-".date("m",$month)."-".$day.'">'.$item["title"]."</a></li>";
					}
					
					$xx++;
				}

				echo '</ul>';
				
				if ($xx > 4) {
					echo '<a class="search" href="'.MODULE_ROOT.'view-day/'.date("Y",$month)."-".date("m",$month)."-".$day.'/">View All</a>';
				}
			}
		?>
		</li>
		<?php
			}
			
			$x = 0;
			
			while ($y % 7 != 0) {
				$x++;
				$y++;
		?>
		<li class="last_row<?php if ($y % 7 == 0) { ?> saturday<?php } ?>"><span class="not_active_month"><?=$x?></span></li>
		<?php
			}
		?>
	</ul>
</div>