<?php
	/*
		Class: BTXEvents
			A class to handle events in BigTree.
	*/
	
	class BTXEvents {
		
		public static $Days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		];
		
		public static $Months = [
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
		];
		
		public static $Ordinals = [
			"1" => "First",
			"2" => "Second",
			"3" => "Third",
			"4" => "Fourth",
			"5" => "Fifth"
		];
		
		/*
			Constructor:
				Re-caches stale events.
		*/
		
		public function __construct() {
			$stale_event_ids = SQL::fetchAllSingle("SELECT id FROM btx_events_events WHERE last_updated < ?", date("Y-m-d", strtotime("-1 year")));
			
			foreach ($stale_event_ids as $id) {
				static::recacheEvent($id);
				SQL::update("btx_events_events", $id, ["last_updated" => "NOW()"]);
			}
		}
		
		/*
			Function: cacheEvent
				Caches an event.
			
			Parameters:
				id - The id of the event to cache.
		*/
		
		public static function cacheEvent($id) {
			// Get defaults
			$event = static::get($id);
			$title_route = BigTreeCMS::urlify($event["title"]);
			
			// Cache initial date
			if ($event["start_date"]) {
				list($start_date, $end_date) = static::getCacheTimes($event, $event["start_date"], $event["end_date"]);
				static::insertCacheRecord($event["id"], $title_route, $start_date, $end_date, $event["end_date"], $event["end_time"], $event["all_day"]);
			}
			
			// Run recurrence rules
			$recurrence_rules = SQL::fetchAll("SELECT * FROM btx_events_recurrence_rules 
											   WHERE event = ? 
											 AND (recurring_end_date IS NULL OR recurring_end_date > CURDATE())", $id);
			
			foreach ($recurrence_rules as $recurrence_rule) {
				$type = $recurrence_rule["type"];
				$rule = json_decode($recurrence_rule["rule"], true);
				
				// Get parent event information if the rule doesn't specify
				if ($recurrence_rule["all_day"]) {
					$recurrence_rule["start_time"] = "";
					$recurrence_rule["end_time"] = "";
				} else {
					if (!$recurrence_rule["start_time"]) {
						$recurrence_rule["start_time"] = $event["start_time"];
						$recurrence_rule["end_time"] = $event["end_time"];
						$recurrence_rule["all_day"] = $event["all_day"];
					}
				}
				
				if ($type == "specific") {
					list($start_date, $end_date) = static::getCacheTimes($recurrence_rule, $recurrence_rule["start_date"], $recurrence_rule["end_date"]);
					static::insertCacheRecord($event["id"], $title_route, $start_date, $end_date, $recurrence_rule["end_date"], $recurrence_rule["end_time"], $recurrence_rule["all_day"], $recurrence_rule["id"]);
				} else {
					// If there's a start date to the recurrence, use it
					if ($recurrence_rule["start_date"]) {
						$start = strtotime($recurrence_rule["start_date"]);
					} else {
						$start = strtotime($event["start_date"]);
					}
					
					// If there's an end date, stop there
					if ($recurrence_rule["recurring_end_date"]) {
						$end = strtotime($recurrence_rule["recurring_end_date"]);
					} else {
						$end = strtotime("+2 years");
					}
					
					// If we've already passed the end date, we don't need to cache things anymore.
					if ($end < $start) {
						return;
					}
					
					// Put together a list of skip weeks for bi-weekly recurrences
					if ($recurrence_rule["type"] == "biweekly") {
						$skip_weeks = [];
						$skip_start = $start;
						
						while ($skip_start <= $end) {
							$skip_start = strtotime(date("Y-m-d", $skip_start)." +1 week");
							$week = date("W", $skip_start);
							
							if (date("w", $skip_start) == 0) {
								$week++;
								
								if (date("W", strtotime(date("Y-m-d", $skip_start)." +1 day")) == 1) {
									$week = 1;
								}
							}
							
							$skip_weeks[] = $week;
							$skip_start = strtotime(date("Y-m-d", $skip_start)." +1 week");
						}
					}
					
					// Get a list of the canceled recurrences
					$canceled = array_filter((array) json_decode($recurrence_rule["cancellations"], true));
					$x = 0;
					$current_week = null;
					
					while ($start <= $end) {
						$x++;
						$next = static::findNextRecurrence($recurrence_rule["type"], $rule, $start);
						
						// The next time the event occurs could fall outside our caching period
						if ($next <= $end) {
							list($start_date, $end_date) = static::getCacheTimes($recurrence_rule, date("Y-m-d", $next), date("Y-m-d", $next));
							$date_route = date("Y-m-d", strtotime($start_date));
							$skip = false;
							
							if ($recurrence_rule["type"] == "biweekly") {
								$time = strtotime($start_date);
								$week = date("W", $time);
								
								if (date("w", $time) == 0) {
									$week++;
									
									if (date("W", strtotime(date("Y-m-d", $time)." +1 day")) == 1) {
										$week = 1;
									}
								}
								
								if (in_array($week, $skip_weeks)) {
									$skip = true;
								}
							}
							
							if (!$skip) {
								if (in_array($date_route, $canceled)) {
									static::insertCacheRecord($event["id"], $title_route, $start_date, $end_date, null, null, $recurrence_rule["all_day"], $recurrence_rule["id"], true);
								} else {
									static::insertCacheRecord($event["id"], $title_route, $start_date, $end_date, null, $recurrence_rule["end_time"], $recurrence_rule["all_day"], $recurrence_rule["id"]);
								}
							}
						}
						
						$start = strtotime(date("Y-m-d", $next)." +1 day");
					}
				}
			}
		}
		
		protected static function insertCacheRecord($id, $title_route, $start, $end, $end_date, $end_time, $all_day, $rule = false, $canceled = false) {
			$date_route = date("Y-m-d", strtotime($start));
			$time_route = date("Hi", strtotime($start));
			$route = $title_route."-".$date_route."-".$time_route;
			$rule = $rule ?: null;
			$end_date = $end_date ?: null;
			$end_time = $end_time ?: null;
			$all_day = $all_day ? "on" : "";
			
			if ($canceled) {
				SQL::insert("btx_events_date_cache_canceled", [
					"event" => $id,
					"start" => $start,
					"end" => $end,
					"all_day" => $all_day,
					"date" => $date_route,
					"rule" => $rule
				]);
			} else {
				SQL::insert("btx_events_date_cache", [
					"event" => $id,
					"start" => $start,
					"end" => $end,
					"title_route" => $title_route,
					"date_route" => $date_route,
					"route" => $route,
					"end_date" => $end_date,
					"end_time" => $end_time,
					"all_day" => $all_day,
					"rule" => $rule
				]);
			}
		}
		
		/*
			Function: findNextRecurrence
				Finds the next time an event exists.

			Parameters:
				type - The recurrence type.
				rule - The recurrence rule.
				time - The start time to begin looking from (in seconds since Unix epoch).

			Returns:
				The next occurence of the event in seconds since Unix epoch.
		*/
		
		public static function findNextRecurrence($type, $rule, $time = false) {
			if (!$time) {
				$time = time();
			}
			
			if (!$type) {
				return false;
			}
			
			// Daily Recurrence
			if ($type == "daily") {
				return $time;
			}
			
			// Weekly / Biweekly Recurrence
			if ($type == "weekly" || $type == "biweekly") {
				$current_day_of_week = date("w", $time);
				
				if (in_array($current_day_of_week, $rule)) {
					return $time;
				}
				
				return static::findNextRecurrence($type, $rule, strtotime(date("Y-m-d", $time)." +1 day"));
			}
			
			// Monthly Recurrence
			if ($type == "monthly") {
				// If the detail is numeric, it's simply the (x)th day of the month.
				if (is_numeric($rule)) {
					$current_day_of_month = date("j", $time);
					
					// Move to the next month if this month's has passed
					if ($current_day_of_month > $rule) {
						return strtotime(date("Y-m-$rule", strtotime(date("Y-m-1", $time)." +1 month")));
					} else {
						return strtotime(date("Y-m-$rule", $time));
					}
					
					// We need to calculate a more crazy date like the second Thursday of each month.
				} else {
					$next = strtotime(static::$Ordinals[$rule["week"]]." ".static::$Days[$rule["day"]]." of ".date("F Y", $time));
					
					if ($next > $time) {
						return $next;
					}
					
					return strtotime(static::$Ordinals[$rule["week"]]." ".static::$Days[$rule["day"]]." of ".date("F Y", strtotime(date("Y-m-1", $time)." +1 month")));
				}
			}
			
			// Yearly Recurrence
			if ($type == "yearly") {
				$next = strtotime(date("Y", $time)."-".$rule);
				
				if ($next < $time) {
					$next = strtotime((date("Y", $time) + 1)."-".$rule);
				}
				
				return $next;
			}
			
			return false;
		}
		
		/*
			Function: formattedDate
				Returns a string of formatted date/time based on an event having a start/end date and times.
			
			Parameters:
				item - The event instance array.
				date_format - The date format (compatible with PHP's date function)
				time_format - The time format (compatible with PHP's time format)
			
			Returns:
				A date/time string.
		*/
		
		public static function formattedDate($item, $date_format = "F j, Y", $time_format = "g:ia") {
			$s = strtotime($item["start"]);
			$e = strtotime($item["end"]);
			
			// If it's a single all day event...
			if ($item["all_day"]) {
				if (date("Y-m-d", $s) == date("Y-m-d", $e)) {
					return date($date_format, $s);
				} else {
					return date($date_format, $s)." - ".date($date_format, $e);
				}
			} else {
				// Single day event
				if (date("Y-m-d", $s) == date("Y-m-d", $e)) {
					if ($s != $e && $item["end_time"] != "") {
						return date($date_format, $s)." &mdash; ".date($time_format, $s)." - ".date($time_format, $e);
					} else {
						return date($date_format, $s)." &mdash; ".date($time_format, $s);
					}
					// Multi day event
				} else {
					// Starts one night, ends next morning?
					if (date("H", $s) > date("H", $e)) {
						return date($date_format, $s)." &mdash; ".date($time_format, $s)." - ".date($time_format, $e);
					// Probably meant an event to be on multiple days for a few hours each day.
					} else {
						return date($date_format, $s)." - ".date($date_format, $e)." &mdash; ".date($time_format, $s)." - ".date($time_format, $e);
					}
				}
			}
		}
		
		/*
			Function: formattedTime
				Returns a string of formatted time based on an event having start/end times.
			
			Parameters:
				item - The event instance array.
				time_format - The time format (compatible with PHP's time format)
			
			Returns:
				A date/time string.
		*/
		
		public static function formattedTime($item, $time_format = "gi:a") {
			$s = strtotime($item["start"]);
			$e = strtotime($item["end"]);
			
			if ($item["all_day"]) {
				return "All Day";
			}
			
			if ($s != $e && $item["end_time"] != "") {
				return date($time_format, $s)." - ".date($time_format, $e);
			} else {
				return date($time_format, $s);
			}
		}
		
		/*
			Function: get
				Returns an event with its fields decoded.
			
			Parameters:
				item - Either the event id or an event array.
			
			Returns:
				An event array with its fields decoded.
		*/
		
		public static function get($item) {
			global $cms;
			
			if (!is_array($item)) {
				$item = SQL::fetch("SELECT * FROM btx_events_events WHERE id = ?", $item);
			}
			
			if (!is_array($item)) {
				return false;
			}
			
			foreach ($item as $key => $val) {
				if (is_array($val)) {
					$item[$key] = BigTree::untranslateArray($val);
				} elseif (is_array(json_decode($val, true))) {
					$item[$key] = BigTree::untranslateArray(json_decode($val, true));
				} else {
					$item[$key] = $cms->replaceInternalPageLinks($val);
				}
			}
			
			return $item;
		}

		/*
			Function: getBreadcrumb
				Used by templates to bring in breadcrumbs.
		*/

		function getBreadcrumb($page) {
			$link = WWW_ROOT.$page["path"]."/";

			global $event;

			if (defined("EVENT_DETAIL")) {
				return [["title" => $event["title"], "link" => $link."event/".$event["title_route"]."/".$event["date_route"]."/"]];
			}

			return [];
		}
		
		/*
			Function: getCacheTimes
				Returns the start and end timestamps for an event.
			
			Parameters:
				item - Event array.
				start_date - The date of the occurence.
				end_date - The end date of the occurence.
			
			Returns:
				An array of timestamps (first being start, second being end)
		*/
		
		public static function getCacheTimes($item, $start_date, $end_date) {
			// If they didn't enter an end date, we're going to assume it ends the same day it starts
			if ($end_date == "0000-00-00" || !$end_date) {
				$end_date = $start_date;
			}
			
			// If it's an all day event or we don't know the start time, set the end time to 11:59
			if ($item["all_day"] || !$item["start_time"]) {
				$start_date = strtotime($start_date." 00:00:00");
				$end_date = strtotime($end_date." 23:59:59");
			} else {
				$start_date = strtotime($start_date." ".$item["start_time"]);
				
				// If we have an end time, let's see if it's actually the next day.
				if ($item["end_time"]) {
					if (strtotime($item["start_time"]) < strtotime($item["end_time"]) && $start_date == $end_date) {
						$end_date = strtotime($start_date." ".$item["end_time"]." +1 day");
					} else {
						$end_date = strtotime($end_date." ".$item["end_time"]);
					}
				} else {
					$end_date = strtotime($end_date." 23:59:59");
				}
			}
			
			$start_date = date("Y-m-d H:i:s", $start_date);
			$end_date = date("Y-m-d H:i:s", $end_date);
			
			return [$start_date, $end_date];
		}

		/*
			Function: getCategories
				Returns all top level categories.

			Parameters:
				sort - The sort order of the categories (defaults to positioned).

			Returns:
				An array of categories.
		*/
		
		public static function getCategories($sort = "position DESC, id ASC") {
			return SQL::fetchAll("SELECT * FROM btx_events_categories WHERE (parent IS NULL OR parent = 0) ORDER BY $sort");
		}
		
		/*
			Function: getCategoriesByParent
				Returns an array of categories with a given parent ID.

			Parameters:
				parent - The parent ID to check.
				sort - The sort order of the categories (defaults to positioned).

			Returns:
				An array of categories.
		*/
		
		public static function getCategoriesByParent($parent = false, $sort = "position DESC, id ASC") {
			if (!$parent) {
				return SQL::fetchAll("SELECT * FROM btx_events_categories WHERE (parent IS NULL OR parent = 0) ORDER BY $sort");
			} else {
				return SQL::fetchAll("SELECT * FROM btx_events_categories WHERE parent = ? ORDER BY $sort", $parent);
			}
		}
		
		/*
			Function: getCategory
				Returns a category for the given id.

			Parameters:
				id - The category id.

			Returns:
				A category entry.
		*/
		
		public static function getCategory($id) {
			return SQL::fetch("SELECT * FROM btx_events_categories WHERE id = ?", $id);
		}
		
		/*
			Function: getCategoryByRoute
				Returns a category for the given route.

			Parameters:
				route - The category route.

			Returns:
				A category entry.
		*/
		
		public static function getCategoryByRoute($route) {
			return SQL::fetch("SELECT * FROM btx_events_categories WHERE route = ?", $route);
		}
		
		/*
			Function: getCategoryLineage
				Returns an array of the ancestors of a given category.
			
			Parameters:
				category - A category ID or category array.
			
			Returns:
				An array of categories starting with the "oldest".
		*/
		
		public static function getCategoryLineage($category, $ancestors = []) {
			if (!is_array($category)) {
				$category = static::getCategory($category);
			}
			
			if ($category["parent"] && $category["parent"] != $category["id"]) {
				$parent = static::getCategory($category["parent"]);
				$ancestors = array_merge([$parent], $ancestors);
				
				return static::getCategoryLineage($parent, $ancestors);
			}
			
			return $ancestors;
		}
		
		/*
			Function: getEventCategories
				Returns an array of categories that an event belongs to.

			Parameters:
				event - The event entry or event id.

			Returns:
				An array of IDs.
		*/
		
		public static function getEventCategories($event) {
			$event = is_array($event) ? $event["id"] : $event;
			
			return SQL::fetchAll("SELECT btx_events_categories.*
								  FROM btx_events_categories JOIN btx_events_event_categories
								  ON btx_events_categories.id = btx_events_event_categories.category
								  WHERE btx_events_event_categories.event = ?", $event);
		}
		
		/*
			Function: getEventCategoryIDs
				Returns an array of category IDs that an event belongs to.

			Parameters:
				event - The event entry or event id.

			Returns:
				An array of IDs.
		*/
		
		public static function getEventCategoryIDs($event) {
			$event = is_array($event) ? $event["id"] : $event;
			
			return SQL::fetchAllSingle("SELECT category FROM btx_events_event_categories WHERE event = ?", $event);
		}
		
		/*
			Function: getEventCategoryList
				Returns a nested category list.
		*/
		
		public static function getEventCategoryList($original_list, $parent = 0, $level = "") {
			$list = [];
			$categories = SQL::fetchAll("SELECT * FROM btx_events_categories WHERE parent = ? ORDER BY name", $parent);
			
			foreach ($categories as $category) {
				$list[$category["id"]] = $level.$category["name"];
				$list = $list + static::getEventCategoryList(false, $category["id"], trim($level)."--- ");
			}
			
			return $list;
		}
		
		/*
			Function: getEventInstances
				Returns instances of an event.

			Parameters:
				event - An event array.
				upcoming - Whether to return only upcoming instances (defaults to false)

			Returns:
				An array of event instances

			See Also:
				<getUpcomingEventInstances>
		*/
		
		public static function getEventInstances($event, $upcoming = false) {
			$instances = [];
			$upcoming = $upcoming ? " AND end >= NOW()" : "";
			$query = SQL::query("SELECT * FROM btx_events_date_cache WHERE event = ? $upcoming ORDER BY start ASC", $event["id"]);
			
			while ($result = $query->fetch()) {
				$result["instance"] = $result["id"];
				$instances[] = array_merge($result, $event);
			}
			
			return $instances;
		}
		
		/*
			Function: getEventsByDate
				Returns event instances for a given date.
			
			Parameters:
				date - The date (Y-m-d format) to pull events for.
				featured - Whether to pull only featured events or not.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateRange>
		*/
		
		public static function getEventsByDate($date, $featured = false) {
			return static::getEventsByDateRange($date, $date, $featured);
		}
		
		
		/*
			Function: getEventsByDateInCategories
				Returns event instances for a given date in given categories.
			
			Parameters:
				date - The date (Y-m-d format) to pull events for.
				categories - An array of categories to get events for.
				featured - Whether to pull only featured events or not.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateRangeInCategories>
		*/
		
		public static function getEventsByDateInCategories($date, $categories, $featured = false) {
			return static::getEventsByDateRangeInCategories($date, $date, $categories, $featured);
		}
		
		/*
			Function: getEventsByDateInCategoriesWithSubcategories
				Returns event instances for a given date in given categories and their subcategories.
			
			Parameters:
				date - The date (Y-m-d format) to pull events for.
				categories - An array of categories to get events for.
				featured - Whether to pull only featured events or not.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateRangeInCategories>
		*/
		
		public static function getEventsByDateInCategoriesWithSubcategories($date, $categories, $featured = false) {
			$with_sub = $categories;
			
			foreach ($categories as $cat) {
				$with_sub = array_merge($with_sub, static::getSubcategoriesOfCategory($cat));
			}
			
			return static::getEventsByDateInCategories($date, $with_sub, $featured);
		}
		
		/*
			Function: getEventsByDateInCategory
				Returns event instances for a given date in given category.
			
			Parameters:
				date - The date (Y-m-d format) to pull events for.
				category - A category array or ID.
				featured - Whether to pull only featured events or not.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateRangeInCategories>
		*/
		
		public static function getEventsByDateInCategory($date, $category, $featured = false) {
			return static::getEventsByDateRangeInCategories($date, $date, [$category], $featured);
		}
		
		/*
			Function: getEventsByDateInCategoryWithSubcategories
				Returns event instances for a given date in given category and its subcategories.
			
			Parameters:
				date - The date (Y-m-d format) to pull events for.
				category - A category array or ID.
				featured - Whether to pull only featured events or not.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateRangeInCategoriesWithSubcategories>
		*/
		
		public static function getEventsByDateInCategoryWithSubcategories($date, $category, $featured = false) {
			return static::getEventsByDateRangeInCategoriesWithSubcategories($date, $date, [$category], $featured);
		}
		
		/*
			Function: getEventsByDateRange
				Returns event instances for a given date range.
			
			Parameters:
				start_date - The start date (Y-m-d format) to pull events for.
				end_date - The end date (Y-m-d format) to pull events for.
				featured - Whether to pull only featured events or not.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDate>
		*/
		
		public static function getEventsByDateRange($start_date, $end_date, $featured = false) {
			if ($featured) {
				$featured = " AND btx_events_events.featured = 'on' ";
			}
			
			$events = SQL::fetchAll("SELECT btx_events_date_cache.start, btx_events_date_cache.end,
											btx_events_date_cache.id as instance, btx_events_date_cache.title_route AS title_route,
											btx_events_date_cache.date_route AS date_route, btx_events_events.*
									 FROM btx_events_events JOIN btx_events_date_cache
									 WHERE btx_events_date_cache.event = btx_events_events.id
									   AND btx_events_date_cache.end >= '$start_date 00:00:00'
									   AND btx_events_date_cache.start <= '$end_date 23:59:59'
									   $featured
									 ORDER BY btx_events_date_cache.start ASC");
			
			foreach ($events as $index => $event) {
				$events[$index] = static::get($event);
			}
			
			return $events;
		}
		
		/*
			Function: getEventsByDateRangeInCategories
				Returns event instances for a given date range in the given categories.
			
			Parameters:
				start_date - The start date (Y-m-d format) to pull events for.
				end_date - The end date (Y-m-d format) to pull events for.
				categories - An array of categories to get events for.
				featured - Whether to pull only featured events or not.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateInCategories>
		*/
		
		public static function getEventsByDateRangeInCategories($start_date, $end_date, $categories, $featured = false) {
			if ($featured) {
				$featured = " AND btx_events_events.featured = 'on' ";
			}
			
			$cat_search = [];
			
			foreach ($categories as $category) {
				$category = is_array($category) ? SQL::escape($category["id"]) : SQL::escape($category);
				$cat_search[] = "btx_events_event_categories.category = '$category'";
			}
			
			if (!count($cat_search)) {
				return false;
			}
			
			$events = [];
			$instances = SQL::fetchAll("SELECT DISTINCT(CONCAT(btx_events_date_cache.event, btx_events_date_cache.start, btx_events_date_cache.end)),
									  		   btx_events_date_cache.event, btx_events_date_cache.id as instance,
											   btx_events_date_cache.title_route AS title_route,
											   btx_events_date_cache.date_route AS date_route,
											   btx_events_date_cache.start, btx_events_date_cache.end
										FROM btx_events_date_cache JOIN btx_events_event_categories
										WHERE btx_events_date_cache.event = btx_events_event_categories.event
										  AND btx_events_date_cache.end >= '$start_date 00:00:00'
										  AND btx_events_date_cache.start <= '$end_date 23:59:59'
										  AND (".implode(" OR ", $cat_search).")
										  $featured
								  		ORDER BY btx_events_date_cache.start ASC");
			
			foreach ($instances as $instance) {
				$event = static::get($instance["event"]);
				
				if ($event) {
					$event["start"] = $instance["start"];
					$event["end"] = $instance["end"];
					$event["instance"] = $instance["instance"];
					$event["title_route"] = $instance["title_route"];
					$event["date_route"] = $instance["date_route"];
					$events[] = $event;
				}
			}
			
			return $events;
		}
		
		/*
			Function: getEventsByDateRangeInCategoriesWithSubcategories
				Returns event instances for a given date range in the given categories and their subcategories.
			
			Parameters:
				start_date - The start date (Y-m-d format) to pull events for.
				end_date - The end date (Y-m-d format) to pull events for.
				categories - An array of categories to get events for.
				featured - Whether to pull only featured events or not.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateInCategoriesWithSubcategories>
		*/
		
		public static function getEventsByDateRangeInCategoriesWithSubcategories($start_date, $end_date, $categories, $featured = false) {
			$with_sub = $categories;
			
			foreach ($categories as $cat) {
				$with_sub = array_merge($with_sub, static::getSubcategoriesOfCategory($cat));
			}
			
			return static::getEventsByDateRangeInCategories($start_date, $end_date, $with_sub, $featured);
		}
		
		/*
			Function: getEventsByDateRangeInCategory
				Returns event instances for a given date range in the given category.
			
			Parameters:
				start_date - The start date (Y-m-d format) to pull events for.
				end_date - The end date (Y-m-d format) to pull events for.
				category - A category array or category ID.
				featured - Whether to pull only featured events or not.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateInCategories>
		*/
		
		public static function getEventsByDateRangeInCategory($start_date, $end_date, $category, $featured = false) {
			return static::getEventsByDateRangeInCategories($start_date, $end_date, [$category], $featured);
		}
		
		/*
			Function: getEventsByDateRangeInCategoryWithSubcategories
				Returns event instances for a given date range in the given category and its subcategories.
			
			Parameters:
				start_date - The start date (Y-m-d format) to pull events for.
				end_date - The end date (Y-m-d format) to pull events for.
				category - A category array or category ID.
				featured - Whether to pull only featured events or not.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateInCategoryWithSubcategories>
		*/
		
		public static function getEventsByDateRangeInCategoryWithSubcategories($start_date, $end_date, $category, $featured = false) {
			return static::getEventsByDateRangeInCategoriesWithSubcategories($start_date, $end_date, [$category], $featured);
		}
		
		/*
			Function: getFeaturedEventsByDate
				Returns featured event instances for a given date.
			
			Parameters:
				date - The date (Y-m-d format) to pull events for.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDate>
		*/
		
		public static function getFeaturedEventsByDate($date) {
			return static::getEventsByDate($date, true);
		}
		
		/*
			Function: getFeaturedEventsByDateRange
				Returns featured event instances for a given date range.
			
			Parameters:
				start_date - The start date (Y-m-d format) to pull events for.
				end_date - The end date (Y-m-d format) to pull events for.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateRange>
		*/
		
		public static function getFeaturedEventsByDateRange($start_date, $end_date) {
			return static::getEventsByDateRange($start_date, $end_date, true);
		}
		
		/*
			Function: getFeaturedEventsByDateRangeInCategories
				Returns featured event instances for a given date range in the provided categories.
			
			Parameters:
				start_date - The start date (Y-m-d format) to pull events for.
				end_date - The end date (Y-m-d format) to pull events for.
				categories - An array of categories to get events for.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateRangeInCategories>
		*/
		
		public static function getFeaturedEventsByDateRangeInCategories($start_date, $end_date, $categories) {
			return static::getEventsByDateRangeInCategories($start_date, $end_date, $categories, true);
		}
		
		/*
			Function: getFeaturedEventsByDateRangeInCategoriesWithSubcategories
				Returns featured event instances for a given date range in the provided categories and their subcategories.
			
			Parameters:
				start_date - The start date (Y-m-d format) to pull events for.
				end_date - The end date (Y-m-d format) to pull events for.
				categories - An array of categories to get events for.
			
			Returns:
				An array of event instances.
			
			See Also:
				<getEventsByDateRangeInCategoriesWithSubcategories>
		*/
		
		public static function getFeaturedEventsByDateRangeInCategoriesWithSubcategories($start_date, $end_date, $categories) {
			return static::getEventsByDateRangeInCategoriesWithSubcategories($start_date, $end_date, $categories, true);
		}
		
		/*
			Function: getFeaturedSearchResultsInDateRange
				Returns featured event instances matching a given query in a specified date range.
			
			Parameters:
				query - The string to search for.
				start_date - Beginning date (Y-m-d).
				end_date - Ending date (Y-m-d).
			
			Returns:
				An array of event instances ordered by soonest.

			See Also:
				<getSearchResultsInDateRange>
		*/
		
		public static function getFeaturedSearchResultsInDateRange($query, $start_date, $end_date) {
			return static::getSearchResultsInDateRange($query, $start_date, $end_date, true);
		}
		
		/*
			Function: getInstance
				Returns an instance of an event (combined date cache and event entry).
			
			Parameters:
				id - The id of the event instance.
			
			Returns:
				An event array with its fields decoded.
		*/
		
		public static function getInstance($id) {
			return static::get(SQL::fetch("SELECT btx_events_date_cache.start, btx_events_date_cache.end,
												btx_events_date_cache.id as instance,
												btx_events_date_cache.title_route AS title_route,
												btx_events_date_cache.date_route AS date_route,
												btx_events_events.*
										   FROM btx_events_events JOIN btx_events_date_cache
										   WHERE btx_events_date_cache.event = btx_events_events.id
										 AND btx_events_date_cache.id = ?", $id));
		}
		
		/*
			Function: getInstanceByRoute
				Returns an instance of an event (combined date cache and event entry).
			
			Parameters:
				title_route - The title route of the event instance.
				date_route - The date route of the event instance.
			
			Returns:
				An event array with its fields decoded.
		*/
		
		public static function getInstanceByRoute($title_route, $date_route) {
			return static::get(SQL::fetch("SELECT btx_events_date_cache.start, btx_events_date_cache.end,
												btx_events_date_cache.id as instance,
												btx_events_date_cache.title_route AS title_route,
												btx_events_date_cache.date_route AS date_route,
												btx_events_events.*
										   FROM btx_events_events JOIN btx_events_date_cache
										   WHERE btx_events_date_cache.event = btx_events_events.id
										 AND btx_events_date_cache.title_route = ?
										 AND btx_events_date_cache.date_route = ?", $title_route, $date_route));
		}
		
		/*
			Function: getKeyedEventsDateRangeForEvents
				Returns an array of days as keys with the events that fall in each day as an array.
			
			Parameters:
				events - An array of event instances.
			
			Returns:
				A keyed array (dates are keys, array of events are vals) for the events passed in.
		*/
		
		public static function getKeyedDateRangeForEvents($events) {
			$days = [];
			
			foreach ($events as $event) {
				$days[date("Y-m-d", strtotime($event["start"]))][] = $event;
			}
			
			return $days;
		}
		
		/*
			Function: getEventLocation
				Returns an event location for the given ID.
			
			Parameters:
				item - The event location ID or location array
		
			Returns:
				A parsed array
		*/
		
		public static function getEventLocation($item) {
			$mod = new BigTreeModule("btx_events_locations");
			
			return $mod->get($item);
		}
		
		/*
			Function: getEventLocationByRoute
				Returns an event location for the given route.
			
			Parameters:
				route - The event location route
		
			Returns:
				A parsed array
		*/
		
		public static function getEventLocationByRoute($route) {
			return static::getEventLocation(SQL::fetch("SELECT * FROM btx_events_locations WHERE route = ?", $route));
		}
		
		/*
			Function: getEventLocations
				Returns an array of event locations.
			
			Parameters:
				order - The sort order (defaults to "position DESC, id ASC")
				in_use - Only include used locations (defaults to false)
			
			Returns:
				An array of arrays
		*/
		
		public static function getEventLocations($sort = "position DESC, id ASC", $in_use = false) {
			if (!$in_use) {
				$locations = SQL::fetchAll("SELECT * FROM btx_events_locations ORDER BY $sort");
			} else {
				$locations = SQL::fetchAll("SELECT *, subquery.`count`
											FROM btx_events_locations,
												 (SELECT COUNT(*) AS `count` FROM btx_events_events WHERE location = btx_events_locations.id) as `subquery`
											HAVING `count` > 0
											ORDER BY $sort");
			}
			
			foreach ($locations as $index => $location) {
				$locations[$index] = static::getEventLocation($location);
			}
			
			return $locations;
		}
		
		/*
			Function: getNumberOfEventsOnDate
				Returns number of events occurring on a given date.
			
			Parameters:
				date - The date (Y-m-d format) to pull events for.
			
			Returns:
				A number.
		*/
		
		public static function getNumberOfEventsOnDate($date) {
			$date = date("Y-m-d", strtotime($date));
			
			return SQL::fetchSingle("SELECT COUNT(*) AS `count` FROM btx_events_date_cache
								  	 WHERE start >= '$date 00:00:00' AND end <= '$date 23:59:59'");
		}
		
		/*
			Function: getPageOfUpcomingEvents
				Returns a page of upcoming event instances.
			
			Parameters:
				page - Page number (defaults to 1)
				per_page - Number of results per page (defaults to 10)
			
			Returns:
				An array of event instances.
		*/
		
		public static function getPageOfUpcomingEvents($page = 1, $per_page = 10) {
			return static::getUpcomingEvents($per_page, false, $page);
		}
		
		/*
			Function: getPageCountOfUpcomingEvents
				Returns the number of pages of upcoming events.
			
			Parameters:
				per_page - Number of results per page
		
			Returns:
				An integer
		*/
		
		public static function getPageCountOfUpcomingEvents($per_page) {
			return static::getUpcomingEventsPageCount($per_page);
		}
		
		/*
			Function: getPageOfUpcomingEventsInCategory
				Returns a page of upcoming event instances in a given category.
			
			Parameters:
				category - A category ID
				page - Page number (defaults to 1)
				per_page - Number of results per page (defaults to 10)
			
			Returns:
				An array of event instances.
		*/
		
		public static function getPageOfUpcomingEventsInCategory($category, $page = 1, $per_page = 10) {
			return static::getUpcomingEventsInCategories($per_page, [$category], false, $page);
		}
		
		/*
			Function: getPageCountOfUpcomingEventsInCategory
				Returns the number of pages of upcoming events in a given category.
			
			Parameters:
				category - A category ID
				per_page - Number of results per page (defaults to 10)
			
			Returns:
				An array of event instances.
		*/
		
		public static function getPageCountOfUpcomingEventsInCategory($category, $per_page = 10) {
			return static::getPageCountOfUpcomingEventsInCategories([$category], $per_page);
		}
		
		/*
			Function: getPageOfUpcomingEventsInCategories
				Returns a page of upcoming event instances in a given category set.
			
			Parameters:
				categories - An array of category IDs
				page - Page number (defaults to 1)
				per_page - Number of results per page (defaults to 10)
			
			Returns:
				An array of event instances.
		*/
		
		public static function getPageOfUpcomingEventsInCategories($categories, $page = 1, $per_page = 10) {
			return static::getUpcomingEventsInCategories($per_page, $categories, false, $page);
		}
		
		/*
			Function: getPageCountOfUpcomingEventsInCategories
				Returns the number of pages of upcoming events in a given category set.
			
			Parameters:
				categories - An array of category IDs
				per_page - Number of results per page (defaults to 10)
			
			Returns:
				An integer (or false if no categories were passed in).
		*/
		
		public static function getPageCountOfUpcomingEventsInCategories($categories, $per_page = 10) {
			$category_query = [];
			
			foreach ($categories as $category_id) {
				$category_query[] = "btx_events_event_categories.category = '".intval($category_id)."'";
			}
			
			if (!count($category_query)) {
				trigger_error("BTXEvents::getPageCountOfUpcomingEventsInCategories requires at least one category ID.");
			}
			
			$count = SQL::fetchSingle("SELECT COUNT(DISTINCT(id))
									   FROM btx_events_date_cache JOIN btx_events_event_categories
									   ON btx_events_date_cache.event = btx_events_event_categories.event
									   WHERE ".implode(" OR ", $category_query));
			
			return ceil($count / $per_page) ?: 1;
		}
		
		/*
			Function: getRandomEvent
				Returns a random event instance occurring in the future.
			
			Parameters:
				featured - Whether to return a featured event or not.
			
			Returns:
				An event instance.
			
			See Also:
				<getRandomEventByDate>
		*/
		
		public static function getRandomEvent($featured = false) {
			if ($featured) {
				$featured = " AND btx_events_events.featured = 'on' ";
			}
			
			return static::get(SQL::fetch("SELECT btx_events_date_cache.start, btx_events_date_cache.end,
												btx_events_date_cache.id as instance,
												btx_events_date_cache.title_route AS title_route,
												btx_events_date_cache.date_route AS date_route,
												btx_events_events.*
										   FROM btx_events_events JOIN btx_events_date_cache
										   WHERE btx_events_date_cache.event = btx_events_events.id
										 AND btx_events_date_cache.end >= NOW()
										 $featured
										   ORDER BY RAND() LIMIT 1"));
		}
		
		/*
			Function: getRandomEventByDate
				Returns a random event instance occurring on a specific date.
			
			Parameters:
				date - The date to pull an event for.
			
			Returns:
				An event instance.
			
			See Also:
				<getSingleEventByDate>
		*/
		
		public static function getRandomEventByDate($date) {
			return static::getSingleEventByDate($date, "", "RAND()");
		}
		
		/*
			Function: getRandomFeaturedEvent
				Returns a random featured event instance occurring in the future.
				
			Returns:
				An event instance.
			
			See Also:
				<getRandomEvent>
		*/
		
		public static function getRandomFeaturedEvent() {
			return static::getRandomEvent(true);
		}
		
		/*
			Function: getRandomFeaturedEventByDate
				Returns a random featured event instance occurring on a specific date.
			
			Parameters:
				date - The date to pull an event for.
			
			Returns:
				An event instance.
			
			See Also:
				<getRandomEventByDate>
		*/
		
		public static function getRandomFeaturedEventByDate($date) {
			return static::getSingleEventByDate($date, true, "RAND()");
		}
		
		/*
			Function: getSearchResultsInDateRange
				Returns event instances matching a given query in a specified date range.
			
			Parameters:
				query - The string to search for.
				start_date - Beginning date (Y-m-d).
				end_date - Ending date (Y-m-d).
				featured - Whether to only return featured or not (defaults to false for all).
			
			Returns:
				An array of event instances ordered by soonest.
		*/
		
		public static function getSearchResultsInDateRange($query, $start_date, $end_date, $featured = false) {
			if ($featured) {
				$featured = " AND btx_events_events.featured = 'on' ";
			}
			
			$words = explode(" ", $query);
			$query_words = [];
			
			if ($words) {
				foreach ($words as $word) {
					$word = SQL::escape($word);
					$query_words[] = "(btx_events_events.title LIKE '%$word%' OR btx_events_events.description LIKE '%$word%')";
				}
				
				$query_words = implode(" AND ", $query_words)." AND ";
			} else {
				$query_words = "";
			}
			
			$events = SQL::fetchAll("SELECT btx_events_date_cache.start, btx_events_date_cache.end,
											btx_events_date_cache.id as instance,
											btx_events_date_cache.title_route AS title_route,
											btx_events_date_cache.date_route AS date_route,
											btx_events_events.*
									 FROM btx_events_events JOIN btx_events_date_cache
									 WHERE btx_events_date_cache.event = btx_events_events.id
									   AND $query_words btx_events_date_cache.end >= '$start_date 00:00:00'
									   AND btx_events_date_cache.start <= '$end_date 23:59:59'
									   $featured
									 ORDER BY btx_events_date_cache.start ASC");
			
			foreach ($events as $index => $event) {
				$events[$index] = static::get($event);
			}
			
			return $events;
		}
		
		/*
			Function: getSingleEventByDate
				Returns a single event for a given date.

			Parameters:
				date - The date to check for events (in Y-m-d format).
				featured - Whether to limit the search exclusively to featured events.
				sort - The sort to go by when picking the first event (defaults to most recently created)

			Returns:
				An event instance.
		*/
		
		public static function getSingleEventByDate($date, $featured = false, $sort = "id DESC") {
			if ($featured) {
				$featured = " AND btx_events_events.featured = 'on' ";
			}
			
			return static::get(SQL::fetch("SELECT btx_events_date_cache.start, btx_events_date_cache.end,
												  btx_events_date_cache.id as instance,
												  btx_events_date_cache.title_route AS title_route,
												  btx_events_date_cache.date_route AS date_route,
												  btx_events_events.*
										   FROM btx_events_events JOIN btx_events_date_cache
										   WHERE btx_events_date_cache.event = btx_events_events.id
										 AND btx_events_date_cache.start <= '$date 23:59:59'
										 AND btx_events_date_cache.end >= '$date 00:00:00'
										 $featured
										   ORDER BY $sort LIMIT 1"));
		}
		
		/*
			Function: getSingleFeaturedEventByDate
				Returns a single featured event for a given date.

			Parameters:
				date - The date to check for events (in Y-m-d format).
				sort - The sort to go by when picking the first event (defaults to most recently created)

			Returns:
				An event instance.
		*/
		
		public static function getSingleFeaturedEventByDate($date, $sort = "id DESC") {
			return static::getSingleEventByDate($date, true, $sort);
		}
		
		/*
			Function: getSubcategoriesOfCategory
				Returns all the subcategories (and their subcategories) of a given category.
			
			Parameters:
				category - Either a category id or array.
			
			Returns:
				An array of categories.
		*/
		
		public static function getSubcategoriesOfCategory($category) {
			$category_id = is_array($category) ? $category["id"] : $category;
			$categories = [];
			$query = SQL::query("SELECT * FROM btx_events_categories WHERE parent = ?", $category_id);
			
			while ($category = $query->fetch()) {
				$categories[] = $category;
				$categories = array_merge($categories, static::getSubcategoriesOfCategory($category));
			}
			
			return $categories;
		}

		/*
			Function: getTotalUpcomingEvents
				Returns the total number of upcoming events.

			Returns:
				An integer
		*/

		public static function getTotalUpcomingEvents() {
			return SQL::fetchSingle("SELECT COUNT(*) FROM btx_events_date_cache WHERE end >= NOW()");
		}

		/*
			Function: getTotalUpcomingEventsInCategory
				Returns the total number of upcoming events in a given category.
			
			Parameters:
				category - A category ID

			Returns:
				An integer
		*/

		public static function getTotalUpcomingEventsInCategory($category) {
			return static::getTotalUpcomingEventsInCategories([$category]);
		}

		/*
			Function: getTotalUpcomingEventsInCategories
				Returns the total number of upcoming events in a given category set.
			
			Parameters:
				categories - An array of category IDs

			Returns:
				An integer
		*/

		public static function getTotalUpcomingEventsInCategories($categories) {
			$cat_search = [];
			
			foreach ($categories as $category) {
				$cat_search[] = "btx_events_event_categories.category = '".intval($category)."'";
			}
			
			return SQL::fetchSingle("SELECT COUNT(DISTINCT(CONCAT(btx_events_date_cache.event,btx_events_date_cache.start,btx_events_date_cache.end)))
									 FROM btx_events_date_cache JOIN btx_events_event_categories
									 ON btx_events_date_cache.event = btx_events_event_categories.event
									 WHERE btx_events_date_cache.end >= NOW()
									 AND (".implode(" OR ", $cat_search).")");
		}
		
		/*
			Function: getUpcomingEventInstances
				Returns instances of an event that occur in the future.

			Parameters:
				event - An event ID or event array.

			Returns:
				An array of event instances

			See Also:
				<getEventInstances>
		*/
		
		public static function getUpcomingEventInstances($event) {
			return static::getEventInstances($event, true);
		}
		
		/*
			Function: getUpcomingEvents
				Returns an array of event instances occurring in the future ordered by those happening soonest.

			Parameters:
				limit - The number of events to return.
				featured - Whether to limit the results to exclusively featured events or not (defaults to false).
				page - The page to return (defaults to the first page).

			Returns:
				An array of event instances.
		*/
		
		public static function getUpcomingEvents($limit = 5, $featured = false, $page = 1) {
			$page = $page ? ($page - 1) : 0;
			
			if ($featured) {
				$featured = " AND btx_events_events.featured = 'on' ";
			}
			
			$events = SQL::fetchAll("SELECT btx_events_date_cache.start, btx_events_date_cache.end,
											btx_events_date_cache.id as instance,
											btx_events_date_cache.title_route AS title_route,
											btx_events_date_cache.date_route AS date_route,
											btx_events_events.*
									 FROM btx_events_events JOIN btx_events_date_cache
									 WHERE btx_events_date_cache.event = btx_events_events.id
									   AND btx_events_date_cache.end >= NOW()
									   $featured
									 ORDER BY btx_events_date_cache.start ASC LIMIT ".($page * $limit).", $limit");
			
			foreach ($events as $index => $event) {
				$events[$index] = static::get($event);
			}
			
			return $events;
		}
		
		/*
			Function: getUpcomingEventsPageCount
				Returns the number of pages of upcoming events.

			Parameters:
				per_page - The number of events per page.

			Returns:
				The number of pages.
		*/
		
		public static function getUpcomingEventsPageCount($per_page = 5) {
			$count = SQL::fetchSingle("SELECT COUNT(*) AS `count` FROM btx_events_date_cache WHERE end >= NOW()");
			
			return ceil($count / $per_page) ?: 1;
		}
		
		/*
			Function: getUpcomingFeaturedEvents
				Returns an array of featured event instances occurring in the future ordered by those happening soonest.

			Parameters:
				limit - The number of events to return.
				page - The page to return (defaults to the first page).

			Returns:
				An array of event instances.

			See Also:
				<getUpcomingEvents>
		*/
		
		public static function getUpcomingFeaturedEvents($limit = 5, $page = 1) {
			return static::getUpcomingEvents($limit, true, $page);
		}
		
		/*
			Function: getUpcomingEventsInCategories
				Returns an array of event instances occurring in the future in the provided categories ordered by those happening soonest.

			Parameters:
				limit - The number of events to return.
				categories - An array of categories.
				featured - Whether to limit the results to exclusively featured events or not (defaults to false).
				page - The page to return (defaults to the first page).

			Returns:
				An array of event instances.
		*/
		
		public static function getUpcomingEventsInCategories($limit = 5, $categories = [], $featured = false, $page = 1) {
			$page = $page ? ($page - 1) : 0;
			
			if ($featured) {
				$featured = " AND btx_events_events.featured = 'on' ";
			}
			
			$cat_search = [];
			
			foreach ($categories as $category) {
				$category = is_array($category) ? sqlescape($category["id"]) : sqlescape($category);
				$cat_search[] = "btx_events_event_categories.category = '$category'";
			}
			
			$events = [];
			$instances = SQL::fetchAll("SELECT DISTINCT(CONCAT(btx_events_date_cache.event,btx_events_date_cache.start,btx_events_date_cache.end)),
											   btx_events_date_cache.event,
											   btx_events_date_cache.start,
											   btx_events_date_cache.end,
											   btx_events_date_cache.id as instance,
											   btx_events_date_cache.title_route AS title_route,
											   btx_events_date_cache.date_route AS date_route
										FROM btx_events_date_cache JOIN btx_events_event_categories JOIN btx_events_events
										ON btx_events_events.id = btx_events_date_cache.event
										WHERE btx_events_date_cache.event = btx_events_event_categories.event
										  AND btx_events_date_cache.end >= NOW()
										  AND (".implode(" OR ", $cat_search).")
										  $featured
										ORDER BY btx_events_date_cache.start ASC LIMIT ".($page * $limit).",$limit");
			
			foreach ($instances as $instance) {
				$event = static::get($instance["event"]);
				
				if ($event) {
					$event["start"] = $instance["start"];
					$event["end"] = $instance["end"];
					$event["instance"] = $instance["instance"];
					$event["title_route"] = $instance["title_route"];
					$event["date_route"] = $instance["date_route"];
					$events[] = $event;
				}
			}
			
			return $events;
		}
		
		/*
			Function: getUpcomingEventsInCategoriesWithSubcategories
				Returns an array of event instances occurring in the future in the provided categories and all of their children ordered by those happening soonest.

			Parameters:
				limit - The number of events to return.
				categories - An array of categories.
				featured - Whether to limit the results to exclusively featured events or not (defaults to false).
				page - The page to return (defaults to the first page).

			Returns:
				An array of event instances.
		*/
		public static function getUpcomingEventsInCategoriesWithSubcategories($limit, $categories = [], $featured = false, $page = 1) {
			$with_sub = $categories;
			
			foreach ($categories as $cat) {
				$with_sub = array_merge($with_sub, static::getSubcategoriesOfCategory($cat));
			}
			
			return static::getUpcomingEventsInCategories($limit, $with_sub, $featured, $page);
		}
		
		/*
			Function: getUpcomingFeaturedEventsInCategories
				Returns an array of featured event instances occurring in the future in the provided categories ordered by those happening soonest.

			Parameters:
				limit - The number of events to return.
				categories - An array of categories.
				page - The page to return (defaults to the first page).

			Returns:
				An array of event instances.

			See Also:
				<getUpcomingEventsInCategories>
		*/
		
		public static function getUpcomingFeaturedEventsInCategories($limit = 5, $categories = [], $page = 1) {
			return static::getUpcomingEventsInCategories($limit, $categories, true, $page);
		}
		
		/*
			Function: getUpcomingFeaturedEventsInCategoriesWithSubcategories
				Returns an array of featured event instances occurring in the future in the provided categories and their subcategories ordered by those happening soonest.

			Parameters:
				limit - The number of events to return.
				categories - An array of categories.
				page - The page to return (defaults to the first page).

			Returns:
				An array of event instances.

			See Also:
				<getUpcomingEventsInCategories>
		*/
		
		public static function getUpcomingFeaturedEventsInCategoriesWithSubcategories($limit = 5, $categories = [], $page = 1) {
			return static::getUpcomingEventsInCategoriesWithSubcategories($limit, $categories, true, $page);
		}
		
		/*
			Function: getUpcomingSearchResults
				Returns event instances matching a given query that are occurring in the future.
			
			Parameters:
				query - The string to search for.
				limit - The number of event instances to return.
				featured - Whether to only return featured or not (defaults to false for all).
			
			Returns:
				An array of event instances ordered by soonest.
		*/
		
		public static function getUpcomingSearchResults($query, $limit = 5, $featured = false) {
			if ($featured) {
				$featured = " AND btx_events_events.featured = 'on' ";
			}
			
			$words = explode(" ", $query);
			$query_words = [];
			
			if ($words) {
				foreach ($words as $word) {
					$word = SQL::escape($word);
					$query_words[] = "(btx_events_events.title LIKE '%$word%' OR btx_events_events.description LIKE '%$word%')";
				}
				
				$query_words = implode(" AND ", $query_words)." AND ";
			} else {
				$query_words = "";
			}
			
			$events = SQL::fetchAll("SELECT btx_events_date_cache.start, btx_events_date_cache.end,
											btx_events_date_cache.id as instance,
											btx_events_date_cache.title_route AS title_route,
											btx_events_date_cache.date_route AS date_route,
											btx_events_events.*
									 FROM btx_events_events JOIN btx_events_date_cache
									 WHERE btx_events_date_cache.event = btx_events_events.id
									   AND $query_words btx_events_date_cache.end >= NOW()
									   $featured
									 ORDER BY btx_events_date_cache.start ASC LIMIT $limit");
			
			foreach ($events as $index => $event) {
				$events[$index] = static::get($event);
			}
			
			return $events;
		}
		
		/*
			Function: getUpcomingFeaturedSearchResults
				Returns featured event instances matching a given query that are occurring in the future.
			
			Parameters:
				query - The string to search for.
				limit - The number of event instances to return.
			
			Returns:
				An array of event instances ordered by soonest.
		*/
		
		public static function getUpcomingFeaturedSearchResults($query, $limit = 5) {
			return static::getUpcomingSearchResults($query, $limit, true);
		}		
		
		/*
			Function: publishHook
				Used by the BigTree form to cache the event on publish.
		*/
		
		public static function publishHook($table, $id, $changes, $many_to_many, $tags) {
			static::recacheEvent($id);
		}
		
		/*
			Function: recacheEvent
				Removes cached occurrences and then caches the event again.
			
			Parameters:
				id - The event id.
		*/
		
		public static function recacheEvent($id) {
			static::uncacheEvent($id);
			static::cacheEvent($id);
		}
		
		/*
			Function: searchResults
				Returns event entries that match a given query (not instances).
			
			Parameters:
				query - The string to search for.
			
			Returns:
				An array of decoded event entries from the database.
		*/
		
		public static function searchResults($query) {
			$words = explode(" ", $query);
			$query_words = [];
			
			if ($words) {
				foreach ($words as $word) {
					$word = SQL::escape($word);
					$query_words[] = "(title LIKE '%$word%' OR description LIKE '%$word%')";
				}
				
				$query_words = " AND ".implode(" AND ", $query_words);
			} else {
				$query_words = "";
			}
			
			$events = SQL::fetchAll("SELECT * FROM btx_events_events WHERE 1 $query_words ORDER BY id DESC");
			
			foreach ($events as $index => $event) {
				$events[$index] = static::get($event);
			}
			
			return $events;
		}
		
		/*
			Function: searchResultsInCategory
				Returns event entries that match a given query (not instances) that belong to a category (or one of its subcategories).
			
			Parameters:
				query - The string to search for.
				category - The category to check against.
			
			Returns:
				An array of decoded event entries from the database.
		*/
		
		public static function searchResultsInCategory($query, $category) {
			$category = SQL::escape(is_array($category) ? $category["id"] : $category);
			$with_sub = array_merge([$category], static::getSubcategoriesOfCategory($category));
			
			$cat_search = [];
			
			foreach ($with_sub as $category) {
				$cat_search[] = "btx_events_event_categories.category = '$category'";
			}
			
			$words = explode(" ", $query);
			$query_words = [];
			
			if ($words) {
				foreach ($words as $word) {
					$word = SQL::escape($word);
					$query_words[] = "(btx_events_events.title LIKE '%$word%' OR btx_events_events.description LIKE '%$word%')";
				}
				
				$query_words = " AND ".implode(" AND ", $query_words);
			} else {
				$query_words = "";
			}
			
			$events = SQL::fetchAll("SELECT DISTINCT(btx_events_event_categories.event), btx_events_events.*
									 FROM btx_events_events JOIN btx_events_event_categories
									 WHERE btx_events_events.id = btx_events_event_categories.event
									   AND (".implode(" OR ", $cat_search).")
									 	   $query_words
									 ORDER BY id DESC");
			
			foreach ($events as $index => $event) {
				$events[$index] = static::get($event);
			}
			
			return $events;
		}
		
		/*
			Function: uncacheEvent
				Removes cached occurrences of an event.
			
			Parameters:
				id - The event id.
		*/
		
		public static function uncacheEvent($id) {
			SQL::delete("btx_events_date_cache", ["event" => $id]);
			SQL::delete("btx_events_date_cache_canceled", ["event" => $id]);
		}
		
		/*
			Function: parseMTM
				Helper function for the admin to create sensible category tagging.
		*/
		
		public static function parseMTM($list, $everything = false) {
			if (!$everything) {
				return $list;
			}
			
			$parsed = [];
			
			foreach ($list as $id => $name) {
				$ancestors = static::getCategoryLineage($id);
				$path = [];
				
				foreach ($ancestors as $a) {
					$path[] = $a["name"];
				}
				
				$path[] = $name;
				$parsed[$id] = implode(" » ", $path);
			}
			
			asort($parsed);
			
			return $parsed;
		}
		
	}
	