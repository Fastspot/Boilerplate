Reusable Callouts Module
========================

This extension implements three things:
- A class (BTXReusableCallouts) for checking if a callout is being reused
- A module (Reusable Callouts) for creating reusable callouts
- A field type (Callout List) for picking a reusable callout when adding a callout

Usage
-----

On the developer side, the only thing you will need to do is call BTXReusableCallouts::check() on the callout before drawing it.
Example:

	<?php
		foreach ($callouts as $callout) {
			BTXReusableCallouts::check($callout);
			include SERVER_ROOT."templates/callouts/".$callout["type"].".php";
		}
	?>

The "check" method asks for a callout by reference and will modify it to return the reused callout data if your user asks to reuse a callout.

When a user adds a new reusable callout, the callout's resources will be checked to see if a resource with "__reusable_callout_id" as an ID and "com.fastspot.reusable-callouts*callout-list" type exists. If it doesn't, the extension will modify the callout to add it to the top of the callout resource form. This field is only drawn when there are available reusable callouts and should not be deleted from your callout resources.

Compatibility
-------------
This field type is bundled as an extension for BigTree 4.2 and higher.

Licensing
---------
This field type is publicly licensed under the [GNU Lesser General Public License](http://www.gnu.org/copyleft/lesser.html).
If you would like to use this field type under a different license, please [contact us](mailto:info@fastspot.com).
