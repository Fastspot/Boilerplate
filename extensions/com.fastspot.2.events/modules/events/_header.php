<?php
	$eventsMod = new BTXEvents;
	$bigtree["css"][] = "events.css";
	$bigtree["js"][] = "events.js";

	$getOrdinal = function($number) {
		$suffix = array('th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th');
		
		if ((($number % 100) >= 11) && (($number % 100) <= 13)) {
			$ordinal = $number . 'th';
		} else {
			$ordinal = $number . $suffix[$number % 10];
		}
		
		return $ordinal;
	};
