/**
* Search in a parend folder if a folder exists
*
* @param {string} id of parent folder
* @param {string} name of the folder
* @return {string} id of the folder
*/

function createFolder(folderID, folderName){
  
  var parentFolder = DriveApp.getFolderById(folderID);
  var subFolders = parentFolder.getFolders();
  var doesntExists = true;
  var newFolder = '';
  
  // Check if folder already exist
  while(subFolders.hasNext()){
    var folder = subFolders.next();
    
    //if exists return the id of the folder
    if(folder.getName() == folderName){
      doesntExists = false;
      console.log("The folder " + folderName +"exist in the parent folder with id " + folderID);
      newFolder = folder;
      return newFolder.getId();
    };
  };
  
  //if not exists create new one and return id
  if(doesntExists == true){
    newFolder = parentFolder.createFolder(folderName);
    console.log("The folder " + folderName +"are now created in a folder with id " + folderID);
    return newFolder.getId();
  };
};

//============================================================================================================

/**
* Function to check if a file exist in a folder, if not exist 
* create new one with a given ID
*
* @param {string} id of the file
* @param {string} id of the folder
* @param {string} id of the template file
* @return {string} id of the file created
*/

function createByTemplate(filename, folderID, templateid){
  
  var filedacopiare = DriveApp.getFileById(templateid);
  var folder = DriveApp.getFolderById(folderID);
  var file   = folder.getFilesByName(filename);
  
  if(!file.hasNext()){ 
    var files = filedacopiare.makeCopy(filename, folder);
    files =  folder.getFilesByName(filename).next().getId();
    console.log("File created")
    return files;
  }else{
    files = file.next().getId();
    console.log("File found");
    return files;
  }
}

//============================================================================================================