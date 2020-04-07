//Generic method to connect on local db instance not tested
// Read up to 1000 rows of data from the table and log them.
function readFromTable_() {
  
  // Replace the variables in this block with real values.
  var address = 'Your DB Address Here';
  var user = 'Enter USER';
  var userPwd = 'YOUR PASSWORD';
  var db = 'DATABASE NAME';
  
  var dbUrl = 'jdbc:oracle://' + address + '/' + db;  
  
  var conn = Jdbc.getConnection(dbUrl, user, userPwd);
  
  var start = new Date();
  var stmt = conn.createStatement();
  // Read up to 1000 rows of data from the table and log them.
  // stmt.setMaxRows(1000);
  var results = stmt.executeQuery('SELECT * FROM YOURTABLE');
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var cell = sheet.getRange('A1');
  var numCols = results.getMetaData().getColumnCount();
  var row =0;
  
  while (results.next()) {
    var rowString = '';
    for (var col = 0; col < numCols; col++) {
      rowString += results.getString(col + 1) + '\t';
      cell.offset(row, col).setValue(results.getString(col +1 ));
    }
    row++
      Logger.log(rowString)
  }
  
  results.close();
  stmt.close();
  conn.close();
  
  var end = new Date();
  Logger.log('Time elapsed: %sms', end - start);
}