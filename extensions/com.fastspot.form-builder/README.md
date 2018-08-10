Form Builder for BigTree CMS 4.2+
=================================

This extension implements a module and a template to allow admin users to build forms for collecting front-end user input. User input is stored in a table and can be exported to a CSV file. Emails can also be sent alerting of user submissions.

Form Elements
-------------

- Section Break (title, description, horizontal rule)
- Two Column Layout
- Single Line Text
- Paragraph Text
- Checkboxes
- Radio Buttons
- Dropdown List
- File Upload
- Name
- Date
- Address
- Email
- Website
- Phone

Changelog
---------

### 1.2 Release
- Fixed potential XSS attack via redraw-field (thanks to Haojun Hou in ADLab of Venustech)
- Fixed drawing back to back column sets breaking the display

### 1.1 Release
- Auto responder email support
- Fixed limiting entries not showing properly after being checked while editing
- Fixed invalid dates coming through date fields (thanks to Jordan Mason)

### 1.0.1 Release
- Added a check to make sure users don't have duplicate values in select / radio / checkboxes when saving

### 1.0 Release
- First public release for BigTree 4.2
