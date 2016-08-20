function exportCalendar() {
  // Export a google calendar as a google sheet
  
  // Get the 'SJSU Enterprise Business Calendar' 
//  var calVar = CalendarApp.getCalendarById('sjsu.edu_7kil3o9q48u2i5pblh25t99b5o@group.calendar.google.com');
  // Get the 'Enterprise Solutions Out of Office'
  var calVar = CalendarApp.getCalendarById('sjsu.edu_jll4sb8ni6mmdk4afaund7092k@group.calendar.google.com');
  
  Logger.log('Calendar Name: ' + calVar.getName());
  Logger.log('Calendar Description: ' + calVar.getDescription());
  
  // Get the events for the time specified
  var startDate = new Date(2016, 7, 1);
  var endDate = new Date(2016, 7, 31);
  var events = calVar.getEvents(startDate, endDate);
  Logger.log('Number of events: ' + events.length);
  
  // Display all information about a given event
  var event = events[50];
  
  /*
  Logger.log('getId() = ' + event.getId());
  Logger.log('getTitle() = ' + event.getTitle());
  Logger.log('getDescription() = ' + event.getDescription());
  Logger.log('getLocation() = ' + event.getLocation());
  Logger.log('getStartTime() = ' + event.getStartTime());
  Logger.log('getEndTime() = ' + event.getEndTime());
  Logger.log('getAllDayStartDate() = ' + event.getAllDayStartDate());
  Logger.log('getAllDayEndDate() = ' + event.getAllDayEndDate());
  Logger.log('getCreators() = ' + event.getCreators());
  Logger.log('getDateCreated() = ' + event.getDateCreated());
  Logger.log('getOriginalCalendarId() = ' + event.getOriginalCalendarId());
  Logger.log('getLastUpdated() = ' + event.getLastUpdated());
  Logger.log('isAllDayEvent = ' + event.isAllDayEvent());
  Logger.log('isOwnedByMe = ' + event.isOwnedByMe());
  Logger.log('isRecurringEvent() = ' + event.isRecurringEvent());
  */
  
  // Create spreadsheet 
  Logger.log('Export Filename: ' + 'export_' + calVar.getName());
  var ss = SpreadsheetApp.create('export_' + calVar.getName());
  var activeSheet = ss.getActiveSheet();
  
  // Freeze the first row
  activeSheet.setFrozenRows(1);
  
  // Write header rows
  var headerValues = [
   [ "ID", "TITLE", "DESCRIPTION", "LOCATION", "START TIME", "END TIME", "CREATORS", "DATE CREATED", "ORIGINAL CALENDAR ID", "LAST UPDATED", "IS ALL DAY EVENT", "IS OWNED BY ME", "IS RECURRING EVENT" ]
  ];

  var range = activeSheet.getRange("A1:M1");
  range.setValues(headerValues);
  
  // Write data rows
  var j = 0;
  var targetCell;
  for (i = 0; i < events.length; i++) {
    event = events[i];
    j = i + 2;
    
    targetCell = activeSheet.setActiveSelection("A" + j);
    targetCell.setValue(event.getId());
    
    targetCell = activeSheet.setActiveSelection("B" + j);
    targetCell.setValue(event.getTitle());

    targetCell = activeSheet.setActiveSelection("C" + j);
    targetCell.setValue(event.getDescription());
    
    targetCell = activeSheet.setActiveSelection("D" + j);
    targetCell.setValue(event.getLocation());
    
    targetCell = activeSheet.setActiveSelection("E" + j);
    targetCell.setValue(event.getStartTime());
    
    targetCell = activeSheet.setActiveSelection("F" + j);
    targetCell.setValue(event.getEndTime());
    
    targetCell = activeSheet.setActiveSelection("G" + j);
    targetCell.setValue(event.getCreators());
    
    targetCell = activeSheet.setActiveSelection("H" + j);
    targetCell.setValue(event.getDateCreated());
    
    targetCell = activeSheet.setActiveSelection("I" + j);
    targetCell.setValue(event.getOriginalCalendarId());
    
    targetCell = activeSheet.setActiveSelection("J" + j);
    targetCell.setValue(event.getLastUpdated());
    
    targetCell = activeSheet.setActiveSelection("K" + j);
    targetCell.setValue(event.isAllDayEvent());
    
    targetCell = activeSheet.setActiveSelection("L" + j);
    targetCell.setValue(event.isOwnedByMe());
    
    targetCell = activeSheet.setActiveSelection("M" + j);
    targetCell.setValue(event.isRecurringEvent());
  
 
  }
  
}