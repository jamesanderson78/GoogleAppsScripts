/*
 * Loop through all of the task in the project task list.
 * If a task is overdue, send an email to me and the assignee.
 */
function sendOverdueEmails() {
  var cell = "";      // variable to hold A1Notation strings (e.g. "A3" or "C20")
  var emailBody = ""; // email body
  var startRow = 5;   // starting row based on the first row not frozen
  var today = new Date();
  //Logger.log("today = " + today);
  
  var colTaskNumber = 1;
  var colTaskDescription = 2;
  var colDependencies = 3;
  var colAssignee = 4;
  var colAssigneeEmail = 5;
  var colStatus = 6;
  var colEstimatedDuration = 7;
  var colEstimatedStart = 8;
  var colEstimatedFinish = 9;
  var colActualStart = 10;
  var colActualFinish = 11;
  var colComments = 12;
  
  // Get sheet and max rows
  var ss = SpreadsheetApp.getActive();
  var taskListSheet = ss.getSheetByName("Task List");
  var lastRow = taskListSheet.getLastRow(); 
  //Logger.log("lastRow = " + lastRow);
  
  // loop through every row and...
  for( row = startRow; row <= lastRow; row++ ) {
    
    // log the row being processed
    cell = "B" + row;
    Logger.log("==| Task " + cell + " = " + taskListSheet.getRange(row, 2).getValue() + " |==");
    
    // email task is late if task is not done/cancelled, estimated due date is past, and assignee email is not blank)
    // if there is an assignee email in this row...
    if (
      (!(taskListSheet.getRange(row, colAssigneeEmail).isBlank())) &&         // assignee email is not blank
      (taskListSheet.getRange(row, colStatus).getValue() != "DONE") &&        // task is not done
      (taskListSheet.getRange(row, colStatus).getValue() != "CANCELLED") &&   // task is not cancelled
      (!(taskListSheet.getRange(row, colEstimatedFinish).isBlank())) &&       // estimated due date is not blank
      (taskListSheet.getRange(row, colEstimatedFinish).getValue() <= today )  // estimated due date is past
    ){
      
      // nothing
      Logger.log("TASK " + cell + " IS OVERDUE ***");
      
      emailBody = "Task " + cell + " is overdue: " + taskListSheet.getRange(row, 2).getValue() +
                  "<br /><br />" + 
                  "Here is the link to the project task list: " +
                  "<a href='" + ss.getUrl() + "'>" + ss.getName() + "</a>" +
                  "<br /><br />" +
                  "Please update the task accordingly.<br />" +
                  "Thanks.<br />" +
                  "James Anderson | IT Student Success Project Manager<br />" + 
                  "San José State University | ITS Enterprise Solutions<br />" +
                  "Phone: 408-924-8143";
         

      GmailApp.sendEmail(taskListSheet.getRange(row, colAssigneeEmail).getValue(),
                         "Overdue task",
                         "",
                         { bcc: 'james.anderson@sjsu.edu',
                           htmlBody: emailBody });

    }
    
  }
  
  
  
}




// validate the project task list
   // check that all task numbers are unique
   // check that end dates are after start dates
   // check that if a task is DONE, there is an actual finish date
   // check that if there is a finish date, the status = DONE

// share the google sheet with everyone in the assignee column if they're missing

// highlight weekends

// highlight holidays

