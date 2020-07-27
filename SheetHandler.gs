/**
 * Function to copy a tab in a sheet.
 *
 * @param {string} name of the sheet to duplicate
 * @param {string} new name for the duplicated sheet
 * @param {string} id of the destination sheet
 * @param {boolean} activate or not default false
 * @return {Sheet} nae of the sheet
 */

function sheetClone(sheetName, sheetNewName, spreadsheetIDdest, activate) { 
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  var newSheet = sheet.copyTo(SpreadsheetApp.openById(spreadsheetIDdest));
  
  newSheet.setName(sheetNewName);
  
  activate?newSheet.activate():"";
  
  return newSheet;
}