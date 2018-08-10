<?php
	/*
		Class: BTXReusableCallouts
			Facilitates reusable callouts for the module and field type.
	*/

	class BTXReusableCallouts extends BigTreeModule {

		private static $CalloutCache = array();

		var $Table = "btx_reusable_callouts";

		/*
			Function: check
				Checks to see if a callout is set to reference a reusable callout, if so it transforms it.
				Callout is passed by reference, e.g. just "BTXReusableCallouts::check($callout)"

			Parameters:
				callout - A callout array (by reference)
		*/

		static function check(&$callout) {
			// Not using a reusable callout
			if (empty($callout["__reusable_callout_id"])) {
				return $callout;
			}

			// Use an anonymous module to allow this to be called statically
			$mod = new BigTreeModule("btx_reusable_callouts");
			$reused = $mod->get($callout["__reusable_callout_id"]);

			// Using a deleted one, just hope there's some other data I guess
			if (empty($reused) || $reused["archived"]) {
				return false;
			}

			// Data is actually an array containing one callout - done this way for ease of code re-use
			$callout = $reused["data"][0];
			$callout["type"] = $reused["type"];

			return $callout;
		}

		/*
		    Function: getUsage
				Returns an array of module entries and pages in which the callout is used.

			Parameters:
				callout - A reusable callout or resuable callout ID

			Returns:
				An array of arrays.
		*/

		static function getUsage($callout) {
			$callout_id = is_int($callout) ? $callout : $callout["id"];
			$settings = array();

			return array(
				"pages" => static::getUsageInPages($callout_id),
				"modules" => static::getUsageInModules($callout_id),
				"settings" => static::getUsageInSettings($callout_id)
			);
		}

		static function getUsageInPages($callout_id) {
			$pages = array();
			$templates = array();

			// We're going to look in every page that has a template containing callouts
			$template_query = array();
			$q = sqlquery("SELECT * FROM bigtree_templates WHERE resources LIKE '%callouts%' OR resources LIKE '%matrix%'");

			while ($template = sqlfetch($q)) {
				$resources = json_decode($template["resources"], true);

				foreach ($resources as $resource) {
					if (!isset($templates[$template["id"]]) && ($resource["type"] == "callouts" || $resource["type"] == "matrix")) {
						$templates[$template["id"]] = $resources;
						$template_query[] = "template = '".$template["id"]."'";
						break;
					}
				}
			}

			$q = sqlquery("SELECT * FROM bigtree_pages WHERE (".implode(" OR ",$template_query).")");

			while ($page = sqlfetch($q)) {
				$resources = json_decode($page["resources"], true);

				foreach ($templates[$page["template"]] as $resource) {
					$found = false;

					if ($resource["type"] == "callouts") {
						foreach (array_filter((array) $resources[$resource["id"]]) as $callout) {
							$found = static::parseCalloutData($callout, $callout_id);

							if ($found) {
								break;
							}
						}
					} elseif ($resource["type"] == "matrix") {
						$found = static::parseMatrix($resource["options"]["columns"], $resource[$resource["id"]], $callout_id);
					}

					if ($found) {
						$pages[] = array(
							"page" => $page["id"],
							"title" => $page["nav_title"],
							"field" => $resource["title"]
						);
					}
				}
			}

			return $pages;
		}

		static function getUsageInModules($callout_id) {
			$modules = array();
			$form_query = sqlquery("SELECT * FROM bigtree_module_forms WHERE fields LIKE '%callouts%' OR fields LIKE '%matrix%'");

			while ($form = sqlfetch($form_query)) {
				$fields = json_decode($form["fields"], true);

				// Now get the contents of the table
				$q = sqlquery("SELECT * FROM `".$form["table"]."`");

				while ($entry = sqlfetch($q)) {
					foreach ($fields as $field) {
						$found = false;

						if ($field["type"] == "matrix") {
							$data = json_decode($entry[$field["column"]], true);
							$found = static::parseMatrix($field["options"]["columns"], $data, $callout_id);
						} elseif ($field["type"] == "callouts") {
							$data = json_decode($entry[$field["column"]], true);

							foreach (array_filter((array) $data) as $callout_entry) {
								$found = static::parseCalloutData($callout_entry, $callout_id);

								if ($found) {
									break;
								}
							}
						}

						if ($found) {
							$modules[] = array(
								"module" => $form["module"],
								"form" => $form["id"],
								"title" => $form["title"],
								"entry" => $entry["id"],
								"field" => $field["title"]
							);
						}
					}
				}
			}

			return $modules;
		}

		static function getUsageInSettings($callout_id) {
			$settings = array();
			$q = sqlquery("SELECT id, options, name, type FROM bigtree_settings WHERE type = 'matrix' OR type = 'callouts'");

			while ($setting = sqlfetch($q)) {
				$found = false;
				$value = BigTreeCMS::getSetting($setting["id"]);

				if ($setting["type"] == "matrix") {
					$options = json_decode($setting["options"], true);
					$found = static::parseMatrix($options["columns"], $value, $callout_id);
				} else {
					foreach ($value as $callout_data) {
						$found = static::parseCalloutData($callout_data, $callout_id);

						if ($found) {
							break;
						}
					}
				}

				if ($found) {
					$settings[] = array(
						"id" => $setting["id"],
						"title" => $setting["name"]
					);
				}
			}

			return $settings;
		}

		static function parseMatrix($matrix_columns, $matrix_data, $callout_id) {
			if (is_array($matrix_columns)) {
				foreach (array_filter((array) $matrix_data) as $entry) {
					foreach ($matrix_columns as $matrix_field) {
						if ($matrix_field["type"] == "matrix") {
							if (is_array($matrix_field["options"])) {
								if (array_key_exists("columns",$matrix_field["options"])) {
									$found = static::parseMatrix($matrix_field["options"]["columns"], $entry[$matrix_field["id"]], $callout_id);

									if ($found) {
										return true;
									}
								}
							}
						} elseif ($matrix_field["type"] == "callouts") {
							foreach ($entry[$matrix_field["id"]] as $callout_entry) {
								$found = static::parseCalloutData($callout_entry, $callout_id);

								if ($found) {
									return true;
								}
							}
						}
					}
				}
			}
			return false;
		}

		static function parseCalloutData($callout_data, $callout_id) {
			// This is the reusable callout
			if (!empty($callout_data["__reusable_callout_id"]) && $callout_data["__reusable_callout_id"] == $callout_id) {
				return true;
			}

			// This callout isn't the one we're looking for but it may contain another callouts or matrix field
			$type = $callout_data["type"];

			if (!isset(static::$CalloutCache[$type])) {
				static::$CalloutCache[$type] = BigTreeAdmin::getCallout($type);
			}

			$callout_fields = static::$CalloutCache[$type]["resources"];

			foreach ($callout_fields as $field) {
				if ($field["type"] == "callouts") {
					foreach ($callout_data[$field["id"]] as $another_callout) {
						$found = static::parseCalloutData($another_callout, $callout_id);

						if ($found) {
							return true;
						}
					}
				} elseif ($field["type"] == "matrix") {
					$found = static::parseMatrix($field["options"]["columns"], $callout_data[$field["id"]], $callout_id);

					if ($found) {
						return true;
					}
				}
			}

			return false;
		}

		static function publishHook($table, $id, $changes, $many_to_many, $tags) {
			// Figure out if the callout type has the field type yet
			$callout = BigTreeAdmin::getCallout($changes["type"]);
			$secret_field_exists = false;

			foreach ($callout["resources"] as $resource) {
				if ($resource["type"] == "com.fastspot.reusable-callouts*callout-list" && $resource["id"] == "__reusable_callout_id") {
					$secret_field_exists = true;
				}
			}

			// Field doesn't exist, update the callout
			if (!$secret_field_exists) {
				array_unshift($callout["resources"], array(
					"id" => "__reusable_callout_id",
					"type" => "com.fastspot.reusable-callouts*callout-list",
					"title" => "Existing Callout",
					"subtitle" => "(leave empty to create a custom callout)"
				));

				sqlquery("UPDATE bigtree_callouts SET resources = '".BigTree::json($callout["resources"], true)."' WHERE id = '".sqlescape($callout["id"])."'");
			}
		}

	}
