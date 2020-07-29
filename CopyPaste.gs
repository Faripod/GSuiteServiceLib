/**
* Library to perform the copy-paste operations of a certain range
* of data in the cells, with the possibility of using 
* the cut-paste function
*
* @param {Object} Object containing the parameters of the sheet to be copied
* id = 'sheet identifier'
* tabName = 'name of the tab'
* startCellRow = row number of the source cell (the top left)
* startCellCol = column number of the source cell (the top left)
* rowNum = number of row to copy
* colNum = number of columns to copy
* example:
* var source = {id : '1VFbs3j3121ddl2ee3e3HVpd8picdu1WEWEWkQ32S_8nxfh4',
*               tabName: 'Registro',
*               startCellRow: 9,
*               startCellCol: 2,
*               rowNum: 3,
*               colNum: 3};
* @param {Object} sheet containing the destination range of the data to be copied
* id = 'sheet identifier'
* tabName = 'name of the tab'
* startCellRow = row number of the source cell (the top left)
* startCellCol = column number of the source cell (the top left)
* example:
* var destination = {id : '1e4BI9pyOIfeEDeECgese-fPzsZ7tedwdwdwdwRADZ34wA',
*                    tabName: 'test',
*                    startCellRow: 1,
*                    startCellCol: 1};
* @param {string} It can be 'copy' or 'cut'
* @return {void}
*/


function copyPaste(source, destination, operations) {
  
  // Getting values from source sheet
  var data =
      SpreadsheetApp.openById(source.id).getSheetByName(source.tabName)
  .getRange(source.startCellRow, source.startCellCol, source.rowNum, source.colNum).getValues();
  
  // Paste values to destination sheet
  SpreadsheetApp.openById(destination.id).getSheetByName(destination.tabName)
  .getRange(destination.startCellRow, destination.startCellCol, source.rowNum, source.colNum).setValues(data);
  
  if (operations == 'copy') {
    
    console.log('Copied and paste data succesfully');
    
  } else {
    
    // Clearing operations with deleterow and insert row
    SpreadsheetApp.openById(source.id).getSheetByName(source.tabName)
    .getRange(source.startCellRow, source.startCellCol, source.rowNum, source.colNum).clearContent();
    SpreadsheetApp.flush();
    
    console.log('Cutting and paste data succesfully');
  }
}

//============================================================================================================

/**
* Library for drag and fill formulas or value in a cell
* @param {Object} Object containing the parameters of the cell to be drag
* id = 'sheet identifier'
* tabName = 'name of the tab'
* targetCellRow = row number of the cell with data
* targetCellCol = column number of the cell with data
* rowNum = number of row to fill
* CowNum = number of column to fill
* example:
* var source = {id : '1VFbs3j3121ddl2ee3e3HVpd8picdu1WEWEWkQ32S_8nxfh4',
*               tabName: 'Registro',
*               startCellRow: 9,
*               startCellCol: 2,
*               rowNum: 2,
*               colNum: 3};
*
* @return {void}
*/ 

function dragAndFill(source){
  
  // Autofill
  SpreadsheetApp.openById(source.id).getSheetByName(source.tabName)
  .getRange(source.startCellRow, source.startCellCol)
  .autoFill(SpreadsheetApp.openById(source.id).getSheetByName(source.tabName)
            .getRange(source.startCellRow, source.startCellCol, source.rowNum, source.colNum),
            SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
}

//============================================================================================================
