var BTXFormBuilder = (function() {

	var ActiveItem = false;
	var Container = false;
	var ContainerTop = false;
	var LastDropTimestamp = false;
	var List = false;
	var ListHeight = false;
	var ListScrollTimer = false;
	var ListTop = false;
	var ObjectCount = 0;
	
	function init(object_count) {
		ObjectCount = object_count;

		// Cache some objects ahead of time	
		List = $(".form_builder_elements");
		Container = $("#form_builder_fields");

		// Watch for a new form template.
		$("#form_builder_existing_form").change(function() {
			document.location.href = $(this).val();
		});
		
		// Get our positioning information for list of available elements to drag/drop in
		ListHeight = List.height();
		ListTop = List.offset().top;

		// Get our offset information for the main drop area for fields
		ContainerTop = Container.offset().top;
		
		// Setup draggability of the list of elements
		List.find("a").click(function(ev) {
			ev.preventDefault();
		}).draggable({ helper: "clone" });
		
		// Setup observers for elements to be edited and deleted and state changes on selects, radios, and checkboxes
		Container.on("click",".icon_small_delete",deleteElement)
				 .on("click",".icon_small_edit",editElement)
				 .on("click","input[type=radio]",saveRadioState)
				 .on("click","input[type=checkbox]",saveCheckboxState)
				 .on("change","select",saveSelectState);
		
		// Tab toggles
		$("#form_builder_is_paid").click(function() {
			$("#form_builder_payment_tab_link").toggle();
		});

		$("#form_builder_early_bird").click(function() {
			$("#form_builder_early_bird_container").toggle();
		});

		$("#form_builder_limit_entries").click(function() {
			$("#form_builder_limits_tab_link").toggle();
		});

		$("#form_builder_scheduling").click(function() {
			$("#form_builder_scheduling_tab_link").toggle();
		});


		// Setup drop zones and other stuff that needs to be repeated later
		initDropZones();
	}

	function initDropZones() {
		try {
			Container.droppable("destroy");
		} catch (error) {}

		$(".form_builder_column").each(function(el) {
			try {
				$(el).droppable("destroy");
			} catch (error) {}
		});

		// Make each column a drop zone and make the elements inside them sortable
		$(".form_builder_column").droppable({
			drop: function(event,ui) {
				var type = ui.draggable.attr("name");
				
				if (type) {
					addElement(this,event,ui);
				}
			}
		}).find("> div").sortable();
		
		// Rebuild main drop zone
		Container.droppable({
			drop: function(event,ui) {
				var type = ui.draggable.attr("name");
				
				if (type) {
					addElement(this,event,ui);
				}
			}
		}).sortable();
	}

	function saveCheckboxState() {
		var data_field = $(this).parents(".form_builder_element").eq(0).find("input").eq(2);
		var data = JSON.parse(data_field.val());
		var index = $(this).parents(".form_builder_element").eq(0).find("input[type=checkbox]").index(this);
		
		// Save the selected stated in the JSON and store it back
		data.list[index].selected = !data.list[index].selected;
		data_field.val(JSON.stringify(data));
	}

	function saveRadioState() {
		var data_field = $(this).parents(".form_builder_element").eq(0).find("input").eq(2);
		var data = JSON.parse(data_field.val());
		var radios = $(this).parents(".form_builder_element").eq(0).find("input[type=radio]");
		var index = radios.index(this);

		// Clear the selected state of all the other radios
		radios.not(this).prop("checked",false);
		
		// Save the selected stated in the JSON and store it back
		for (var i in data.list) {
			data.list[i].selected = (i == index);
		}

		data_field.val(JSON.stringify(data));
	}

	function saveSelectState() {
		var data_field = $(this).parents(".form_builder_element").eq(0).find("input").eq(2);
		var index = $(this).prop("selectedIndex");
		var data = JSON.parse(data_field.val());
		
		// Save the selected stated in the JSON and store it back
		for (var i in data.list) {
			data.list[i].selected = (i == index);
		}

		data_field.val(JSON.stringify(data));
	}
	
	function addElement(container,event,ui) {
		// Don't want double drops from the same event
		if (event.timeStamp == LastDropTimestamp) {
			return false;
		}
		
		LastDropTimestamp = event.timeStamp;
		
		// The "container" is basically anything that got the event, so we need to find the container that is droppable
		if (!$(container).hasClass("ui-droppable")) {
			container = $(container).parentsUntil(".ui-droppable");
		} else {
			container = $(container);
		}

		// Get element type and increase the count
		var type = ui.draggable.attr("name");
		ObjectCount++;

		// Can't put columns inside columns.
		if (container.hasClass("form_builder_column") && type == "columns") {
			return;
		}
		
		// We're going to figure out where in the container the element was dropped so we know after which element to place it
		var form_builder_target = false;
		var form_builder_direction = "bottom";

		// Get the y value of the drop
		var y = ui.offset.top;
		
		// Get each child element of the container
		container.find(".form_builder_element").each(function() {
			// Get the position of the element
			var offset = $(this).offset();
			var height = $(this).height();
			
			// Figure out where the element begins and ends, then find where the mid point is.
			var begin = offset.top - 5;
			var end = begin + height + 32;
			var middle = begin + (height / 2);
			
			// If the drag ended farther down than the middle, we're going to place it after the element, otherwise before.
			if (y > begin && y <= middle) {
				form_builder_target = this;
				form_builder_direction = "before";
			} else if (y > middle && y <= end) {
				form_builder_target = this;
				form_builder_direction = "after";
			}
		});
			
		// If we didn't find a target to place before or after, just stick it at the bottom
		if (!form_builder_target) {
			if (container.hasClass("form_builder_column")) {
				form_builder_target = container.find("> div");
			} else {
				form_builder_target = container;
			}
		}
		
		var element = $('<div class="form_builder_element" data-type="' + type + '" id="form_builder_element_' + ObjectCount + '">');
		var html = '<input type="hidden" name="id[' + ObjectCount + ']" value="" />' +
				   '<input type="hidden" name="type[' + ObjectCount + ']" value="' + type + '" />' +
				   '<input type="hidden" name="data[' + ObjectCount + ']" value="" id="form_builder_obj_data" />' +
				   '<div class="form_builder_wrapper">';
		var object_data = { label: "Label" };
		
		if (type == "columns") {
			var wrapper = $('<div class="form_builder_element form_builder_column_wrapper">');
			var subwrapper = $('<div class="form_builder_wrapper">');

			// Add two inner columns
			subwrapper.html('<div class="form_builder_column" id="form_builder_element_' + ObjectCount + '">' +
					  			'<input type="hidden" name="type[' + ObjectCount + ']" value="column_start" />' +
								'<div></div>' +
								'<input type="hidden" name="type[' + (ObjectCount + 1) + ']" value="column_end" />' +
							'</div>' + 
							'<div class="form_builder_column" id="form_builder_element_' + (ObjectCount + 2) + '">' + 
					  			'<input type="hidden" name="type[' + (ObjectCount + 2) + ']" value="column_start" />' +
					  			'<div></div>' + 
					  			'<input type="hidden" name="type[' + (ObjectCount + 3) + ']" value="column_end" />' +
					  		'</div>');
			ObjectCount += 4;

			// Add delete controls to the columns
			wrapper.append(subwrapper)
				   .append('<div class="form_builder_controls form_builder_controls_single">' +
				   				'<a href="#" class="icon_small icon_small_delete"></a>' +
				   		   '</div>');
			
			if (form_builder_direction == "before") {
				$(form_builder_target).before(wrapper);
			}
			if (form_builder_direction == "after") {
				$(form_builder_target).after(wrapper);
			}
			if (form_builder_direction == "bottom") {
				$(form_builder_target).append(wrapper);
			}
		}
		
		if (type == "section") {
			html += '<span class="icon"></span>' +
					'<div class="form_builder_object form_builder_section_title">Section Title</div>' +
					'<div class="form_builder_object form_builder_section_description">Section Description</div>';
			object_data = { title: "Section Title", description: "Section Description" };
		}
		
		if (type == "text") {
			html += '<span class="icon"></span>' + 
					'<label>Label</label>' +
					'<input type="text" class="form_builder_text" />';
		}
		
		if (type == "textarea") {
			html += '<span class="icon"></span>' + 
					'<label>Label</label>' +
					'<textarea class="form_builder_textarea"></textarea>';	
		}
		
		if (type == "checkbox") {
			html += '<span class="icon"></span>' +
					'<label>Label</label>' +
					'<div class="form_builder_option">' + 
						'<input type="checkbox" class="form_builder_checkbox custom_control" /> Option 1' +
					'</div>' + 
					'<div class="form_builder_option">' + 
						'<input type="checkbox" class="form_builder_checkbox custom_control" /> Option 2' +
					'</div>' + 
					'<div class="form_builder_option">' + 
						'<input type="checkbox" class="form_builder_checkbox custom_control" /> Option 3' +
					'</div>';
		}
		
		if (type == "radio") {
			html += '<span class="icon"></span>' +
					'<label>Label</label>' +
					'<div class="form_builder_option">' + 
						'<input type="radio" class="form_builder_radiobutton custom_control" /> Option 1' +
					'</div>' + 
					'<div class="form_builder_option">' + 
						'<input type="radio" class="form_builder_radiobutton custom_control" /> Option 2' +
					'</div>' + 
					'<div class="form_builder_option">' + 
						'<input type="radio" class="form_builder_radiobutton custom_control" /> Option 3' +
					'</div>';
		}
		
		if (type == "select") {
			html += '<span class="icon"></span>' +
					'<label>Label</label>' +
					'<select>' +
						'<option>Option 1</option>' +
						'<option>Option 2</option>' +
						'<option>Option 3</option>' +
					'</select>';
		}

		if (type == "checkbox" || type == "radio" || type == "select") {
			object_data.list = [
				{ value: "val1", description: "Option 1" },
				{ value: "val2", description: "Option 2" },
				{ value: "val3", description: "Option 3" }
			];
		}
		
		if (type == "upload") {
			html += '<span class="icon"></span>' +
					'<label>Label</label>' +
					'<input type="file" class="form_builder_upload" />';
		}
		
		if (type == "name") {
			html += '<span class="icon"></span>' +
					'<label>Name</label>' +
					'<div class="form_builder_object form_builder_first_name">' +
						'<input type="text" class="form_builder_text" />' +
						'<label>First</label>' +
					'</div>' +
					'<div class="form_builder_object form_builder_last_name">' +
						'<input type="text" class="form_builder_text" />' +
						'<label>Last</label>' +
					'</div>';
			object_data.label = "Name";
		}
		
		if (type == "date") {
			html += '<span class="icon"></span>' +
					'<label>Date</label>' +
					'<div class="form_builder_object form_builder_month">' +
						'<input type="text" class="form_builder_text" />' +
						'<label class="center">MM</label>' +
					'</div>' +
					'<div class="form_builder_separator">/</div>' +
					'<div class="form_builder_object form_builder_day">' +
						'<input type="text" class="form_builder_text" />' +
						'<label class="center">DD</label>' +
					'</div>' +
					'<div class="form_builder_separator">/</div>' +
					'<div class="form_builder_object form_builder_year">' +
						'<input type="text" class="form_builder_text" />' +
						'<label class="center">YYYY</label>' +
					'</div>';
			object_data.label = "Date";
		}
		
		if (type == "address") {
			html += '<span class="icon"></span>' +
					'<label>Address</label>' +
					'<div class="form_builder_object form_builder_full">' +
						'<input type="text" class="form_builder_text" />' +
						'<label>Street Address</label>' +
					'</div>' +
					'<div class="form_builder_object form_builder_full">' +
						'<input type="text" class="form_builder_text" />' +
						'<label>Street Address Line 2</label>' +
					'</div>' +
					'<div class="form_builder_object form_builder_split">' +
						'<input type="text" class="form_builder_text" />' +
						'<label>City</label>' +
					'</div>' +
					'<div class="form_builder_object form_builder_split form_builder_last">' +
						'<input type="text" class="form_builder_text" />' +
						'<label>State / Province / Region</label>' +
					'</div>' +
					'<div class="form_builder_object form_builder_split">' +
						'<input type="text" class="form_builder_text" />' +
						'<label>Postal / Zip Code</label>' +
					'</div>' +
					'<div class="form_builder_object form_builder_split form_builder_last">' +
						'<input type="text" class="form_builder_text" />' +
						'<label>Country</label>' +
					'</div>';
			object_data.label = "Address";
		}
		
		if (type == "email") {
			html += '<span class="icon"></span>' +
					'<label>Email Address</label>' +
					'<input type="text" class="form_builder_text" />';
			object_data.label = "Email Address";
		}
		
		if (type == "url") {
			html += '<span class="icon"></span>' +
					'<label>Website</label>' +
					'<input type="text" class="form_builder_text" />';
			object_data.label = "Website";
		}
		
		if (type == "phone") {
			html += '<span class="icon"></span>' +
					'<label>Phone Number</label>' +
					'<div class="form_builder_object form_builder_phone">' +
						'<input type="text" class="form_builder_text" />' +
						'<label class="center">###</label>' +
					'</div>' +
					'<div class="form_builder_separator">-</div>' +
					'<div class="form_builder_object form_builder_phone">' +
						'<input type="text" class="form_builder_text" />' +
						'<label class="center">###</label>' +
					'</div>' +
					'<div class="form_builder_separator">-</div>' +
					'<div class="form_builder_object form_builder_phone_wide">' +
						'<input type="text" class="form_builder_text" />' +
						'<label class="center">####</label>' +
					'</div>';
			object_data.label = "Phone Number";
		}
		
		if (type == "captcha") {
			html += '<span class="icon"></span>' +
					'<label>Spam Prevention</label>' +
					'<p>Please help us prevent spam by using the reCAPTCHA below.</p>' +
					'<img src="admin_root/*/com.fastspot.form-builder/images/recaptcha.gif" alt="" height="75" />';
			object_data = { label: "Spam Prevention", instructions: "Please help us prevent spam by using the reCAPTCHA below." };
		}
		
		if (type != "columns") {
			html += '</div>' +
					'<div class="form_builder_controls">' +
						'<a href="#" class="icon_small icon_small_edit"></a>' +
						'<a href="#" class="icon_small icon_small_delete"></a>' +
					'</div>';
			element.html(html);
			
			if (form_builder_direction == "before") {
				$(form_builder_target).before(element);
			}
			if (form_builder_direction == "after") {
				$(form_builder_target).after(element);
			}
			if (form_builder_direction == "bottom") {
				$(form_builder_target).append(element);
			}
			
			$("#form_builder_obj_data").val(JSON.stringify(object_data)).attr("id","");
		}
		
		initDropZones();
	}
	
	function editElement(ev) {
		ev.preventDefault();

		var paid = $("#form_builder_is_paid").prop("checked");
		var element = $(this).parents(".form_builder_element").eq(0);
		
		// Save information
		ActiveItem = { type: element.attr("data-type"), name: element.attr("id"), id: element.find("input").eq(0).val() };
		
		$.ajax("admin_root/*/com.fastspot.form-builder/ajax/edit-field/", { type: "POST", data: { paid: paid, name: ActiveItem.name, type: ActiveItem.type, data: element.find("input").eq(2).val() }, success: function(response) {
			new BigTreeDialog({
				title: "Edit Element",
				content: response,
				icon: "edit",
				callback: function(data) {
					data.name = ActiveItem.name;
					data.type = ActiveItem.type;
					data.id = ActiveItem.id;
					$(element).load("admin_root/*/com.fastspot.form-builder/ajax/redraw-field/", data, initDropZones);
				}
			});
		}});
	}
	
	function deleteElement(ev) {
		ev.preventDefault();
		$(this).parents(".form_builder_element").eq(0).remove();
	}
	
	return { init: init };
})();