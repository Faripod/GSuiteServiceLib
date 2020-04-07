/**
 * Return focus ooordinate of a current active 
 *
 * @return {position{"row","column"}} row number of selected value
 */

function getFocusCell() {
  var position = {};
  
  position.row = SpreadsheetApp.getActive().getCurrentCell().getRow();
  position.column = SpreadsheetApp.getActive().getCurrentCell().getColumn();
  return position;
}

//============================================================================================================