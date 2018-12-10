Events 2.0
==========

This version of the Events extension is not backwards compatible with data from Events 1.x, though the API interface is mostly identical.

The Events extension implements an admin interface for users to add events to an event calendar including recurring events with the following recurrence types:

- Daily
- Weekly (e.g. every Thursday and Friday)
- Bi-Weekly (e.g. every other Monday and Wednesday)
- Monthly (on a given day or given week & day of each month -- i.e. 1st of every month or 1st Friday of every month)
- Yearly (on a given day)

An unlimited number of recurrence rules can be added to an event.
The admin provides a search interface and calendar interface for editing specific occurences of events as well as a simple list view for editing the "main" event entries.

The BTXEvents class is provided with many useful methods for pulling event data to the front end of your website.

Compatibility
-------------
This module is bundled as an extension for BigTree 4.2.22 and higher.

Licensing
---------
This field type is publicly licensed under the [GNU Lesser General Public License](http://www.gnu.org/copyleft/lesser.html).
If you would like to use this field type under a different license, please [contact us](mailto:info@fastspot.com).