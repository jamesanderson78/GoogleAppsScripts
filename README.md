# GoogleAppsScripts

## exportCalendar.gs
This function will export a Google Calendar to a Google Sheet. The sheet's filename will be the name of the calendar with "export_" prefixed to the name. The date range for export can be adjusted in the script, as well as the filename. 

### Where to get the Calendar ID
The calendar id can be found from the calendar settings. Click the dropdown arrow to the right of the calendar and select "Calendar Settings"
Near the bottome of the "Calendar Details" tab, the "Calendar Address" field will contain the Calendar ID.

## sendOverdueTaskEmails.gs
This function is usable from Google Sheets to track project tasks, assignees, estimated end dates, and actual finish dates and will send emails to assignees when the task is overdue. This is helpful for following up with team members on tasks with the click of a button. The code assumes that the Google Sheet has the following columns:

Task Number, Task Description, Dependencies, Assignee, Assignee Email, Status, Estimated Duration, Estimated Start, Estimated Finish, Actual Start, Actual Finish, Comments		

