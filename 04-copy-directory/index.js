const fs = require('fs');
const path = require('path');

const copyFolderPath = path.join(__dirname, 'files-copy');
const currentFolderPath = path.join(__dirname, 'files');

function createDirectory(){
  fs.mkdir(copyFolderPath, { recursive: true }, function(err){ 
    if (err) throw err; 
  });
  fs.readdir(copyFolderPath, function(err, items) {
    if (err) throw err;  
    for (let i=0; i<items.length; i++) {
      let copyPath = path.join(copyFolderPath, `${items[i]}`);
      fs.unlink(copyPath, err => {
        if(err) throw err; 
      });
    }
  });}
createDirectory();

function copyDir(){
  fs.readdir(currentFolderPath, function(err, items) {
    if (err) throw err;  
    for (let i=0; i<items.length; i++) {
      let currentPath = path.join(currentFolderPath, `${items[i]}`);
      let copyPath = path.join(copyFolderPath, `${items[i]}`);
      fs.copyFile(currentPath, copyPath, (err) => {
        if (err) throw err;
      });
    }
  }
  );
}
copyDir();