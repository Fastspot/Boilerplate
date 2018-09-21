var BTXMediaGallery = function(settings) {
	return (function($,settings) {

		var AddButtons;
		var Columns;
		var Container;
		var Count;
		var CurrentItem;
		var Key;
		var LastDialog;
		var List;
		var Max;
		var Options;
		var Style;
		var Subtitle;
		var Title;
		var Type;

		function addItem(e) {
			e.preventDefault();

			Type = $(this).data("type");

			// Prevent double clicks
			if (BigTree.Busy) {
				return;
			}

			$.ajax("admin_root/*/com.fastspot.media-gallery-field-type/ajax/form/", {
				type: "POST",
				data: { columns: Columns, count: Count, key: Key, type: Type, options: Options },
				complete: function(response) {
					BigTreeDialog({
						title: "Add Item",
						content: response.responseText,
						icon: "add",
						preSubmissionCallback: true,
						callback: function(e) {		
							e.preventDefault();
							
							var item;
							if (item = getItem()) {
								// Add the item, remove the dialog, increase the count.
								List.append(item);
								removeDialog();						
								Count++;
								var count = List.find("article, li").length;
								if (Max && count >= Max) {
									AddButtons.hide();
									Container.addClass("max_items_hit");
								}
							}
						}
					});
				}
			});
		};

		function deleteItem(e) {
			e.preventDefault();

			CurrentItem = $(this).parents("li");
			
			BigTreeDialog({
				title: "Delete Item",
				content: '<p class="confirm">Are you sure you want to delete this item?</p>',
				callback: function() {
					CurrentItem.remove();
					var count = List.find("article, li").length;
					if (count < Max) {
						AddButtons.show();
						Container.removeClass("max_items_hit");
					}
				},
				icon: "delete",
				alternateSaveText: "OK"
			});
		};

		function editItem(e) {
			e.preventDefault();

			Type = $(this).data("type");

			// Prevent double clicks
			if (BigTree.Busy) {
				return;
			}

			CurrentItem = $(this).parents("li");
			
			$.ajax("admin_root/*/com.fastspot.media-gallery-field-type/ajax/form/", {
				type: "POST",
				data: { columns: Columns, count: Count, data: CurrentItem.find(".bigtree_matrix_data").val(), key: Key, options: Options },
				complete: function(response) {
					BigTreeDialog({
						title: "Edit Item",
						content: response.responseText,
						icon: "edit",
						preSubmissionCallback: true,
						callback: function(e) {
							e.preventDefault();
							
							var item;
							if (item = getItem()) {
								// Replace the item, remove the dialog, increase the count
								CurrentItem.replaceWith(item);
								removeDialog();
								Count++;
							}
						}
					});
				}
			});
		};
		
		function getItem() {
			LastDialog = $(".bigtree_dialog_form").last();
	
			// Validate required fields.
			var validator = BigTreeFormValidator(LastDialog);
			if (!validator.validateForm(false,true)) {
				return false;
			}
			
			var entry = $('<li>').html('<figure></figure><a href="#" class="icon_delete"></a>');
			
			// Try to get an image preview but fallback to the old upload message
			var img = LastDialog.find("fieldset").first().find("img").eq(0);
			if (Type == "image" && img.length) {
				entry.find("figure").append(img);
			} else if (img.length) {
				entry.find("figure").append(img).addClass("btx_media_gallery_type_" + Type);
			} else {
				if (Type == "vimeo") {
					var klass = "btx_media_gallery_vimeo_block";
				} else if (Type == "youtube") {
					var klass = "btx_media_gallery_youtube_block";
				} else {
					var klass = "";
				}
				entry.find("figure").append('<figcaption class="' + klass + '"></figcaption>');
			}
	
			// Append all the relevant fields into the matrix field so that it gets saved on submit with the rest of the form.
			LastDialog.find("input, textarea, select").each(function() {
				if ($(this).attr("type") != "submit") {
					if ($(this).is("textarea") && $(this).css("display") == "none") {
						var mce = tinyMCE.get($(this).attr("id"));
						if (mce) {
							mce.save();
							tinyMCE.execCommand('mceRemoveControl',false,$(this).attr("id"));
						}
					}
					$(this).hide().get(0).className = "";
					entry.append($(this));
				}
			});

			return entry;
		};

		function removeDialog() {
			LastDialog.parents("div").remove();
			LastDialog.remove();
			$(".bigtree_dialog_overlay").last().remove();
			BigTree.zIndex -= 2;
		};

		// Init routine
		Key = settings.key;
		Columns = settings.columns;
		Container = $(settings.selector);
		AddButtons = Container.find(".add_item");
		List = Container.find(".contain, ul");
		Count = List.find("article, li").length;
		Max = settings.max ? settings.max : 0;
		Options = settings.options;

		// If they've exceed or are at the max, hide the add button
		if (Max && Count >= Max) {
			AddButtons.hide();
			Container.addClass("max_items_hit");
		}

		Container.on("click",".add_item",addItem)
				 .on("click",".icon_edit",editItem)
				 .on("click",".icon_delete",deleteItem)
				 .find("ul").sortable({ items: "li", placeholder: "ui-sortable-placeholder" });

		return { Container: Container, Count: Count, Key: Key, List: List, addItem: addItem };

	})(jQuery,settings);
};