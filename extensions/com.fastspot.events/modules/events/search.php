<?php
	$months = array(
		"01" => "January",
		"02" => "February",
		"03" => "March",
		"04" => "April",
		"05" => "May",
		"06" => "June",
		"07" => "July",
		"08" => "August",
		"09" => "September",
		"10" => "October",
		"11" => "November",
		"12" => "December"
	);
	
	$keywords = "";
	
	if (count($bigtree["commands"])) {
		$start_date = $bigtree["commands"][0];
		$end_date = $bigtree["commands"][1];
	} else {
		$start_date = date("Y-m-d");
		$end_date = date("Y-m-d",time() + 7 * 24 * 60 * 60);
	}
?>
<div class="container">
	<form method="post" action="" id="btx_events_search">
		<section>
			<div class="contain">
				<fieldset class="float_margin">
					<label>Start Date</label>
					<input type="text" name="start_date" class="date_picker" autcomplete="off" />
					<span class="icon_small icon_small_calendar date_picker_icon"></span>
				</fieldset>
				<fieldset class="float_margin">
					<label>End Date</label>
					<input type="text" name="end_date" class="date_picker" autcomplete="off" />
					<span class="icon_small icon_small_calendar date_picker_icon"></span>
				</fieldset>
				<fieldset class="right last">
				    <label for="keywords">Keywords <small>(separate words with spaces)</small></label>
				    <input type="text" id="keywords" name="keywords" value="<?=htmlspecialchars($keywords)?>" class="typical_input"/>
				</fieldset>
			</div>
		</section>
		<section class="sub" style="display: none;">
			<label>Results</label>
			<div id="btx_events_search_results"></div>
		</section>
		<footer>
			<input type="submit" class="button blue" value="Search" />
		</footer>
	</form>
</div>
<script>
	$(".date_picker").datepicker();
</script>