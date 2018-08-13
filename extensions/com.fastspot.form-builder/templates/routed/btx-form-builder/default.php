<?php
	/**
	 * @global array $form
	 * @global array $settings
	 * @global string $page_content
	 * @global string $page_header
	 * @global string $page_link
	 */

	$form_closed = false;
	
	if (empty($settings["no_css"])) {
?>
<link rel="stylesheet" href="<?=STATIC_ROOT?>extensions/com.fastspot.form-builder/css/front-end.css"/>
<?php
	}

	if (!empty($settings["text_wrapper"])) {
		echo $settings["text_wrapper"];
	}
	
	if (empty($settings["dont_draw_page_header"])) {
		echo "<h1>$page_header</h1>";
	}

	echo $page_content;
	
	if ($form["limit_entries"] && $form["entries"] >= $form["max_entries"]) {
		$form_closed = true;
?>
<h2>Maximum Entries Reached</h2>
<p>This form has reached the maximum number of entries.</p>
<?php
	}

	if ($form["scheduling"]) {
		if (!empty($form["scheduling_open_date"]) && strtotime($form["scheduling_open_date"]) > time()) {
			$form_closed = true;
			echo $form["scheduling_before_message"];
		} elseif (!empty($form["scheduling_close_date"]) && strtotime($form["scheduling_close_date"]) < time()) {
			$form_closed = true;
			echo $form["scheduling_after_message"];
		}
	}

	if (!empty($settings["text_wrapper_end"])) {
		echo $settings["text_wrapper_end"];
	}

	if (!$form_closed) {
?>
<form method="post" action="<?=$page_link?>process/" enctype="multipart/form-data" class="form_builder">
	<?php
		$error_count = is_array($_SESSION["form_builder"]["errors"]) ? count($_SESSION["form_builder"]["errors"]) : 0;
		
		if ($error_count) {
	?>
	<div class="form_builder_errors">
		<?php if ($error_count == 1) { ?>
		<p>A required field was missing. Please fill out all required fields and submit again.</p>
		<?php } else { ?>
		<p>Required fields were missing. Please fill out all required fields and submit again.</p>
		<?php } ?>
	</div>
	<?php
		}
		
		if ($_SESSION["form_builder"]["payment_error"]) {
	?>
	<div class="form_builder_errors">
		<p>Checkout failed — your credit card has not been charged.</p>
		<p class="form_builder_alert">The error returned was: <?=$_SESSION["form_builder"]["payment_error"]?></p>
	</div>
	<?php
		}
	?>
	<div class="form_builder_required_message">
		<p><span class="form_builder_required_star">*</span> = required field</p>
	</div>
	<?php
		// Setup price watchers.
		$check_watch = $radio_watch = $select_watch = $text_watch = array();
		$last_field = false;
		$count = 0;
		
		foreach ($form["fields"] as $field) {
			$count++;
			$field_type = $field["type"];
			$field_data = json_decode($field["data"], true);

			if ($field_type != "column") {
				if ($field_data["name"]) {
					$field_name = $field_data["name"];
				} else {
					$field_name = "data_".$field["id"];
				}
				
				$error = false;
				
				if (isset($_SESSION["form_builder"]["fields"])) {
					$default = $_SESSION["form_builder"]["fields"][$field_name];
				} else {
					if (isset($field_data["default"])) {
						$default = $field_data["default"];
					} else {
						$default = false;
					}
				}
				
				if (is_array($_SESSION["form_builder"]["errors"]) && in_array($field_name,$_SESSION["form_builder"]["errors"])) {
					$error = true;
				}
				
				include "field-types/draw/$field_type.php";
			} else {
				if ($last_field == "column") {
					echo '<div class="form_builder_column form_builder_last">';

					// Reset so that if someone did back to back columns it draws properly
					$field_type = "second_column";
				} else {
					echo '<div class="form_builder_column">';
				}
				
				foreach ($field["fields"] as $subfield) {
					$count++;
					$field_data = json_decode($subfield["data"],true);
					
					if ($field_data["name"]) {
						$field_name = $field_data["name"];
					} else {
						$field_name = "data_".$subfield["id"];
					}
					
					$error = false;
					
					if (isset($_SESSION["form_builder"]["fields"])) {
						$default = $_SESSION["form_builder"]["fields"][$field_name];
					} else {
						if (isset($field_data["default"])) {
							$default = $field_data["default"];
						} else {
							$default = false;
						}
					}
					
					if (is_array($_SESSION["form_builder"]["errors"]) && in_array($field_name,$_SESSION["form_builder"]["errors"])) {
						$error = true;
					}
					
					include "field-types/draw/".$subfield["type"].".php";
				}
				
				echo '</div>';
			}

			$last_field = $field_type;
		}
	?>
	<input type="submit" class="form_builder_submit" value="Submit" />
</form>
<?php
		// Make the price watchers
		if ($form["paid"]) {
			if ($form["early_bird_date"] && strtotime($form["early_bird_date"]) > time()) {
				$base_price = $form["early_bird_base_price"] ? $form["early_bird_base_price"] : $form["base_price"];
			} else {
				$base_price = $form["base_price"] ? $form["base_price"] : "0.00";
			}
?>
<script type="text/javascript">
	(function() {
		var PreviousValues = {};
		var Total = <?=$base_price?>;

		function formatMoney(number, places, symbol, thousand, decimal) {
			places = !isNaN(places = Math.abs(places)) ? places : 2;
			symbol = symbol !== undefined ? symbol : "$";
			thousand = thousand || ",";
			decimal = decimal || ".";
			var negative = number < 0 ? "-" : "",
			    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
			    j = (j = i.length) > 3 ? j % 3 : 0;
			return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
		}

		<?php
			// Text fields to watch for price changes
			foreach ($text_watch as $id) {
		?>
		document.getElementById("<?=$id?>").addEventListener("change", function() {
			var old_price = PreviousValues[this.getAttribute("name")];
			
			if (old_price) {
				Total -= old_price;
			}
			
			var price = parseFloat(this.value.replace(/[^0-9-.]/g, ''));
			
			if (price < 0) {
				price = 0;
			}
			
			this.value = formatMoney(price);
			
			if (isNaN(price)) {
				PreviousValues[this.getAttribute("name")] = 0;
			} else {
				Total += price;
				PreviousValues[this.getAttribute("name")] = price;
			}
			
			document.getElementById("form_builder_total").innerHTML = formatMoney(Total);
		});
		<?php
			}

			// Check boxes to watch for price changes
			foreach ($check_watch as $id) {
		?>
		document.getElementById("<?=$id?>").addEventListener("change", function() {
			var price = this.getAttribute("data-price");
			
			if (this.checked) {
				Total += parseFloat(price);
			} else {
				Total -= parseFloat(price);
			}
			
			document.getElementById("form_builder_total").innerHTML = formatMoney(Total);
		});
		<?php
			}

			// Radio buttons to watch for price changes
			foreach ($radio_watch as $id) {
		?>
		document.getElementById("<?=$id?>").addEventListener("change", function() {
			var old_price = PreviousValues[this.getAttribute("name")];
			var price = this.getAttribute("data-price");
			
			if (old_price) {
				Total -= old_price;
			}
			
			Total += parseFloat(price);
			PreviousValues[this.getAttribute("name")] = parseFloat(price);
			document.getElementById("form_builder_total").innerHTML = formatMoney(Total);
		});
		<?php
			}

			// Select boxes to watch for price changes
			foreach ($select_watch as $id) {
		?>
		document.getElementById("<?=$id?>").addEventListener("change", function() {
			var old_price = PreviousValues[this.getAttribute("name")];
			var price = parseFloat(this.options[this.selectedIndex].getAttribute("data-price"));
			
			if (old_price) {
				Total -= old_price;
			}
			
			Total += price;
			PreviousValues[this.getAttribute("name")] = price;
			document.getElementById("form_builder_total").innerHTML = formatMoney(Total);
		});
		<?php
			}
		?>

		window.addEventListener("load", function() {
			var element;
			var value;
			
			<?php
				// Get all the fields that affect price and get our initial total
				foreach ($text_watch as $id) {
			?>
			element = document.getElementById("<?=$id?>");
			
			if (element.value) {
				var price = parseFloat(element.value.replace(/[^0-9-.]/g, ''));
				if (price < 0) {
					price = 0;
				}
				Total += price;
				PreviousValues[item.getAttribute("name")] = price;
				element.value = formatMoney(price);
			}
			<?php
				}
	
				foreach ($check_watch as $id) {
			?>
			element = document.getElementById("<?=$id?>");
			
			if (element.checked) {
				Total += parseFloat(i.getAttribute("data-price"));
			}
			<?php
				}
				
				foreach ($radio_watch as $id) {
			?>
			element = document.getElementById("<?=$id?>");
			
			if (element.checked) {
				Total += parseFloat(i.getAttribute("data-price"));
				PreviousValues[i.getAttribute("name")] = parseFloat(i.getAttribute("data-price"));
			}
			<?php
				}
				
				foreach ($select_watch as $id) {
			?>
			element = document.getElementById("<?=$id?>");
			value = parseFloat(element.options[element.selectedIndex].getAttribute("data-price"));
			
			if (value) {
				Total += value;
				PreviousValues[element.getAttribute("name")] = parseFloat(element.options[element.selectedIndex].getAttribute("data-price"));
			}
			<?php
				}
			?>
			
			document.getElementById("form_builder_total").innerHTML = formatMoney(Total);
		});
	})();
</script>
<?php
		}

		unset($_SESSION["form_builder"]["payment_error"]);
		unset($_SESSION["form_builder"]["errors"]);
		unset($_SESSION["form_builder"]["fields"]);
	}
