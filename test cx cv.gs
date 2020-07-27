/*
Test di implementazione di una libreria per le funzioni di copia ed incolla da un foglio all'altro 
Devono essere indicati nei due fogli un oggetto JSON contenente:
Origine/dest
Id del foglio
Nome del tab
Riga cella inizio,
Riga cella fine,
Numero colonne
Numero righe

*/


function tagliaIncolla() {
  
  var source = {id : '',
                tabName: '',
                startCellRow: '',
                startCellCol: '',
                colNum: '',
                rowNum: ''}
  
  var destination = {id : '',
                     tabName: '',
                     startCellRow: '',
                     startCellCol: '',
                     colNum: '',
                     rowNum: ''}
  
  // Getting values from source sheet
  var data =
  SpreadsheetApp.openById(source.id).getSheetByName(source.tabName)
  .getRange(source.startCellRow, source.startCellCol, source.rowNum, source.ColNum).getValues();
  
  // Paste values to destination sheet
  SpreadsheetApp.openById(destination.id).getSheetByName(destination.tabName)
  .getRange(destination.startCellRow, destination.startCellCol, destination.rowNum, destination.ColNum).setValues(data);
    
  }
