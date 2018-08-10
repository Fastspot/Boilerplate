<?php
	/**
	 * @global array $bigtree
	 */
	
	$entry = BTXFormBuilder::getEntry($bigtree["commands"][0]);
	$form = BTXFormBuilder::getForm($entry["form"]);
	
	function _local_draw_form_builder_form_fields($fields) {
		global $entry;
		
		foreach ($fields as $field) {
			$value = _local_recursive_clean($entry["data"][$field["id"]]);
			$field["data"] = json_decode($field["data"], true);
			$label = $field["data"]["label"] ? $field["data"]["label"] : ucwords($field["type"]);
			
			if ($field["type"] == "column") {
				_local_draw_form_builder_form_fields($field["fields"]);
			} elseif ($field["type"] != "section") {
				echo "<fieldset>";
				echo "<label><strong>$label</strong></label>";
				echo "<p>";
				
				if ($field["type"] == "name") {
					echo $value["first"]." ".$value["last"]."";
				} elseif ($field["type"] == "address") {
					echo $value["street"]."<br />";
					
					if ($value["street2"]) {
						echo $value["street2"]."<br />";
					}
					echo $value["city"].", ".$value["state"]." ".$value["zip"]."<br />".$value["country"]."";
				} elseif ($field["type"] == "checkbox") {
					if (is_array($value)) {
						echo implode(", ", $value)."";
					} else {
						echo $value;
					}
				} elseif ($field["type"] == "upload") {
					echo '<a href="'.$value.'">'.$value.'</a>';
				} else {
					echo $value;
				}
				
				echo "</p>";
				echo "</fieldset>";
			}
		}
	}
	
	function _local_recursive_clean($val) {
		if (is_array($val)) {
			foreach ($val as $k => $v) {
				if (is_array($v)) {
					$val[$k] = _local_recursive_clean($v);
				} else {
					$val[$k] = htmlspecialchars(htmlspecialchars_decode(strip_tags($v)));
				}
			}
			
			return $val;
		} else {
			return htmlspecialchars(htmlspecialchars_decode(strip_tags($val)));
		}
	}

?>
<div class="container">
	<summary>
		<h2>Entry Details
			<small>from &ldquo;<?=$form["title"]?>&rdquo;</small>
		</h2>
	</summary>
	<section>
		<fieldset>
			<label><strong>Date Created</strong></label>
			<p><?=date("F j, Y @ g:ia", strtotime($entry["created_at"]))?></p>
		</fieldset>
		<?php _local_draw_form_builder_form_fields($form["fields"]) ?>
	</section>
</div>