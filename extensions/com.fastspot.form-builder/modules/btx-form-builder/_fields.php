<?php
	/**
	 * @global array $form
	 * @global BigTreeAdmin $admin
	 */

	if (method_exists($admin, "drawCSRFToken")) {
		$admin->drawCSRFToken();
	}
?>
<fieldset id="form_builder_fields">
	<?php
		$count = 0;
		$in_cwrapper = false;
		
		foreach ((array) $form["fields"] as $field) {
			$t = $field["type"];
			$d = json_decode($field["data"], true);
			$id = $field["id"];
			
			if ($t != "column") {
				$_POST = array();
				$label = "";
				
				if (!empty($d)) {
					foreach ($d as $key => $val) {
						$_POST[$key] = $val;
					}
				}
				
				$_POST["name"] = "form_builder_element_$count";
				$_POST["type"] = $t;
				$_POST["id"] = $id;

				echo '<div class="form_builder_element form_builder_'.$t.'" data-type="'.$t.'" id="form_builder_element_'.$count.'">';
				include EXTENSION_ROOT."ajax/redraw-field.php";
				echo '</div>';
			} else {
				if (!$in_cwrapper) {
					echo '<div class="form_builder_element form_builder_column_wrapper"><div class="form_builder_wrapper">';
				}
				
				echo '<div class="form_builder_column" id="form_builder_element_'.$count.'">';
				echo '	<input type="hidden" name="id['.$count.']" value="'.$field["id"].'" />';
				echo '	<input type="hidden" name="type['.$count.']" value="column_start" />';
				echo '	<div>';
				
				foreach ($field["fields"] as $subfield) {
					$count++;
					$_POST = array();
					$label = "";
					$d = json_decode($subfield["data"], true);
					
					if (!empty($d)) {
						foreach ($d as $key => $val) {
							$_POST[$key] = $val;
						}
					}
					
					$_POST["name"] = "form_builder_element_$count";
					$_POST["type"] = $subfield["type"];
					$_POST["id"] = $subfield["id"];
					echo '<div class="form_builder_element form_builder_'.$subfield["type"].'" data-type="'.$subfield["type"].'" id="form_builder_element_'.$count.'">';
					include EXTENSION_ROOT."ajax/redraw-field.php";
					echo '</div>';
				}
				
				$count++;
				
				echo '	</div>';
				echo '	<input type="hidden" name="type['.$count.']" value="column_end" />';
				echo '</div>';
				
				if ($in_cwrapper) {
					echo '</div><div class="form_builder_controls form_builder_controls_single"><a href="#" class="icon_small icon_small_delete"></a></div></div>';
					$in_cwrapper = false;
				} else {
					$in_cwrapper = true;
				}
			}
			
			$count++;
		}
	?>
</fieldset>
<menu class="form_builder_elements">
	<?php include "_elements.php" ?>
</menu>