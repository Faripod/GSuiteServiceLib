// Method for return integer of the active focused row

function getFocusCell(sheetID, tabName) {
  
  var row = SpreadsheetApp.openById(sheetID).getSheetByName(tabName).getActiveCell().getRow();
  
  return row;
}