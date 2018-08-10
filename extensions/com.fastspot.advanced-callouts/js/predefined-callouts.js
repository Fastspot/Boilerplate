var BTXPredefinedCallouts = function(settings) {
	return (function($,settings) {
		var Container = $(settings.selector);

		var AddButton = Container.find(".add_callout");
		var Count;
		var CurrentItem;
		var Description;
		var DescriptionField;
		var Groups = settings.groups;
		var Key = settings.key;
		var LastDialog;
		var List = Container.find(".contain");
		var Locked = false;
		var Max = settings.max ? settings.max : 0;
		var NoDrag = false;
		var Noun = settings.noun;

		function addCallout(e) {
			e.preventDefault();

			// Prevent double clicks
			if (BigTree.Busy) {
				return;
			}

			Locked = false;
			NoDrag = false;

			$.ajax("admin_root/ajax/callouts/add/", { type: "POST", data: { count: Count, groups: Groups, key: Key }, complete: function(response) {
				BigTreeDialog({
					title: "Add " + Noun,
					content: response.responseText,
					icon: "callout",
					preSubmissionCallback: true,
					callback: function(e) {		
						e.preventDefault();
						
						var item;
						if (item = getCallout()) {		
							// Add the callout and hide the dialog.
							List.append(item);
							removeDialog();
							Count++;
							var count = List.find("article").length;
							
							if (Max && count >= Max) {
								AddButton.hide();
							}
						}
					}
				});
			}});
		};

		function editCallout(e) {
			e.preventDefault();

			// Prevent double clicks
			if (BigTree.Busy) {
				return;
			}

			// See if this is a prefilled
			Locked = false;
			NoDrag = false;
			if ($(this).data("locked")) {
				Locked = true;
			}
			if ($(this).data("no-drag")) {
				NoDrag = true;
			}

			CurrentItem = $(this).parents("article");
			$.ajax("admin_root/*/com.fastspot.advanced-callouts/ajax/edit/", { type: "POST", data: { locked: Locked, count: Count, data: CurrentItem.find(".callout_data").val(), groups: Groups, key: Key }, complete: function(response) {
				BigTreeDialog({
					title: "Edit " + Noun,
					content: response.responseText,
					icon: "callout",
					preSubmissionCallback: true,
					callback: function(e) {
						e.preventDefault();
						
						var item;
						
						if (item = getCallout()) {
							CurrentItem.replaceWith(item);
							removeDialog();
							Count++;
						}
					}
				});
			}});
		};

		function deleteCallout(e) {
			e.preventDefault();

			CurrentItem = $(this).parents("article");
			BigTreeDialog({
				title: "Delete " + Noun,
				content: '<p class="confirm">Are you sure you want to delete this ' + Noun.toLowerCase() + '?</p>',
				callback: function() {
					CurrentItem.remove();
					var count = List.find("article").length;
					if (count < Max) {
						AddButton.show();
					}
				},
				icon: "delete",
				alternateSaveText: "OK"
			});
			return false;
		};

		function getCallout() {
			LastDialog = $(".bigtree_dialog_form").last();
	
			// Validate required fields.
			var validator = BigTreeFormValidator(LastDialog);
			
			if (!validator.validateForm(false,true)) {
				return false;
			}
			
			var article = $('<article>');
			var markup = '<h4></h4>';
			
			// Locked elements don't have a dropdown for type
			if (Locked) {
				markup += '<p>' + CurrentItem.find("p").html() + '</p>';
			} else {
				markup += '<p>' + $("#callout_type select").get(0).options[$("#callout_type select").get(0).selectedIndex].text + '</p>';
			}

			markup += '<div class="bottom">';
			
			if (!NoDrag) {
				markup += '<span class="icon_drag"></span>';
			}
			
			if (!Locked) {
				markup += '<a href="#" class="icon_delete"></a>';
			}
			
			article.html(markup + '</div>');
			
			// Try our best to find some way to describe the callout
			Description = "";
			DescriptionField = LastDialog.find("[name='" + LastDialog.find(".display_field").val() + "']");
			
			if (DescriptionField.is('select')) {
				Description = DescriptionField.find("option:selected").text();
			} else {
				Description = DescriptionField.val();
			}

			if ($.trim(Description) == "") {
				Description = LastDialog.find(".display_default").val();
			}
			
			// Append all the relevant fields into the callout field so that it gets saved on submit with the rest of the form.
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
					article.append($(this));
				}
			});

			article.find("h4").html(Description + '<input type="hidden" name="' + Key + '[' + Count + '][display_title]" value="' + htmlspecialchars(Description) + '" />');
	
			return article;
		};

		function removeDialog() {
			LastDialog.parents("div").remove();
			LastDialog.remove();
			$(".bigtree_dialog_overlay").last().remove();
			BigTree.zIndex -= 2;
		}

		// Init routine
		Count = List.find("article").length;
		
		// Hide the add button if we're at or above the limit
		if (Max && Count >= Max) {
			AddButton.hide();
		}
		
		Container.on("click",".add_callout",addCallout)
				 .on("click",".icon_edit",editCallout)
				 .on("click",".icon_delete",deleteCallout);
		List.sortable({ containment: "parent", handle: ".icon_drag", items: ".draggable", placeholder: "ui-sortable-placeholder", tolerance: "pointer" });

		return { Container: Container, Count: Count, Key: Key, Groups: Groups, List: List, addCallout: addCallout };
			
	})(jQuery,settings);
};