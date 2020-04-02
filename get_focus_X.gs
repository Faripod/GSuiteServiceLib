/**
 * Return focus ooordinate of a cell
 *
 * @param {string} sheetID the id of the spreadsheet
 * @param {string} tabName name of the tab that the selected spreadsheet
 * @return {number} row number of selected value
 */


function getFocusCell(sheetID, tabName) {
  
  var row = SpreadsheetApp.openById(sheetID).getSheetByName(tabName).getActiveCell().getRow();
  
  return row;
}