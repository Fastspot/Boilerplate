<?php
	/*
		When processing a field type you are provided with the $field array with the following keys:
			"key" — The key of the field (this could be the database column for a module or the ID of the template or callout resource)
			"options" — An array of options provided by the developer
			"input" — The end user's $_POST data input for this field
			"file_input" — The end user's uploaded files for this field in a normalized entry from the $_FILES array in the same formatting you'd expect from "input"

		BigTree expects you to set $field["output"] to the value you wish to store. If you want to ignore this field, set $field["ignore"] to true.
		Almost all text that is meant for drawing on the front end is expected to be run through PHP's htmlspecialchars function as seen in the example below.
		If you intend to allow HTML tags you will want to run htmlspecialchars in your drawing file on your value and leave it off in the process file.
	*/

	// Grab any min width/heights from prefixes
	if (!empty($field["options"]["preset"])) {
		if (!isset($bigtree["media_settings"])) {
			$bigtree["media_settings"] = $cms->getSetting("bigtree-internal-media-settings");
		}

		$preset = $bigtree["media_settings"]["presets"][$field["options"]["preset"]];
		
		if (!empty($preset["min_width"])) {
			$field["options"]["min_width"] = $preset["min_width"];
		}
		
		if (!empty($preset["min_height"])) {
			$field["options"]["min_height"] = $preset["min_height"];
		}
	}

	// Setup minimum image width/height
	$min_width = empty($field["options"]["min_width"]) ? 0 : intval($field["options"]["min_width"]);
	$min_height = empty($field["options"]["min_height"]) ? 0 : intval($field["options"]["min_height"]);

	// Attempting to use a new video URL
	if (!empty($field["input"]["new"])) {
		$url = $field["input"]["new"];

		// YouTube
		if (strpos($url,"youtu.be") !== false || strpos($url,"youtube.com") !== false) {

			// Try to grab the ID from the YouTube URL (courtesy of various Stack Overflow authors)
			$pattern =
				'%^# Match any youtube URL
				(?:https?://)?  # Optional scheme. Either http or https
				(?:www\.)?	    # Optional www subdomain
				(?:			    # Group host alternatives
				  youtu\.be/	# Either youtu.be,
				| youtube\.com  # or youtube.com
				  (?:		    # Group path alternatives
					/embed/	    # Either /embed/
				  | /v/		    # or /v/
				  | .*v=		# or /watch\?v=
				  )			    # End path alternatives.
				)			    # End host alternatives.
				([\w-]{10,12})  # Allow 10-12 for 11 char youtube id.
				($|&).*		    # if additional parameters are also in query string after video id.
				$%x';
			$result = preg_match($pattern,$url,$matches);

			// No ID match? Bad URL.
			if ($result === false) {
				$bigtree["errors"][] = array("field" => $field["title"], "error" => "The URL you entered is not a valid YouTube URL.");
				$field["ignore"] = true;
			
			// Got our YouTube ID
			} else {
				$video_id = $matches[1];
				$youtube = new BigTreeYouTubeAPI;
				$video = $youtube->getVideo($video_id);
				
				// Invalid YouTube video :(
				if (!$video) {
					$bigtree["errors"][] = array("field" => $field["title"], "error" => "The YouTube URL provided is invalid.");
					$field["ignore"] = true;	
				} else {
					// Try for max resolution first, then high, then default
					$source_image = $video->Images->Maxres ? $video->Images->Maxres : $video->Images->High;
					$source_image = $source_image ? $source_image : $video->Images->Default;

					$field["output"] = array(
						"service" => "youtube",
						"id" => $video_id,
						"height" => false,
						"width" => false,
						"duration" => ($video->Duration->Hours * 3600 + $video->Duration->Minutes * 60 + $video->Duration->Seconds),
						"embed" => $video->Embed
					);
				}
			}

		// Vimeo
		} elseif (strpos($url,"vimeo.com") !== false) {
			$url_pieces = explode("/",$url);
			$video_id = end($url_pieces);
			$json = json_decode(BigTree::cURL("http://vimeo.com/api/v2/video/$video_id.json"),true);
			
			// Good video
			if (array_filter((array)$json)) {
				// Try to get the largest source image available
				$source_image = $json[0]["thumbnail_large"];
				$source_image = $source_image ? $source_image : $json[0]["thumbnail_medium"];
				$source_image = $source_image ? $source_image : $json[0]["thumbnail_small"];

				$field["output"] = array(
					"service" => "vimeo",
					"id" => $video_id,
					"height" => $json[0]["height"],
					"width" => $json[0]["width"],
					"duration" => $json[0]["duration"],
					"embed" => '<iframe src="https://player.vimeo.com/video/'.$video_id.'?byline=0&portrait=0" width="'.$width.'" height="'.$height.'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
				);

			// No video :(
			} else {
				$bigtree["errors"][] = array("field" => $field["title"], "error" => "The Vimeo URL provided is invalid.");
				$field["ignore"] = true;		
			}
		// Invalid URL
		} else {
			$bigtree["errors"][] = array("field" => $field["title"], "error" => "The URL you entered is not a valid YouTube or Vimeo URL.");
			$field["ignore"] = true;
		}

		// If we haven't failed, we're going to grab our image and set it up for crops and such
		if (!$field["ignore"]) {
			$local_image_copy = SITE_ROOT."files/".uniqid("temp-").".jpg";
			BigTree::cURL($source_image,false,array(),false,$local_image_copy);
			list($width,$height) = getimagesize($local_image_copy);

			// If this is a YouTube video we don't have video dimensions so we're going to guess them from the image size
			if ($field["output"]["service"] == "youtube") {
				$field["output"]["height"] = $height;
				$field["output"]["width"] = $width;
				$field["output"]["embed"] = '<iframe width="'.$width.'" height="'.$height.'" src="https://www.youtube.com/embed/'.$video_id.'" frameborder="0" allowfullscreen></iframe>';
			}
			
			// Normally we'd fail, but it's not like you can create a higher resolution video clip here.
			if ($width < $min_width || $height < $min_height) {
				BigTree::createUpscaledImage($local_image_copy,$local_image_copy,$min_width,$min_height);
			}

			// Pretend to be a normal image field and process it
			$field_copy = $field;
			$field_copy["file_input"] = array("name" => $field["output"]["service"]."-video-".$video_id.".jpg","tmp_name" => $local_image_copy,"error" => false);
			$field["output"]["image"] = BigTreeAdmin::processImageUpload($field_copy);
		}

	// Either this field has never been used or was explicitly deleted
	} elseif (empty($field["input"])) {
		$field["output"] = array();

	// Using existing value
	} else {
		// Directly in the form, unchanged
		if ($field["input"]["existing"]) {
			$field["output"] = json_decode($field["input"]["existing"],true);

		// For when use in a callout or matrix and unchanged
		} elseif ($field["input"]["service"] && $field["input"]["id"]) {
			$field["output"] = $field["input"];
		
		// Wiped
		} else {
			$field["output"] = null;
		}
	}
