const fs = require('fs');
const path = require('path');
let length;
const projectDist = path.join(__dirname, 'project-dist');
let fileHTML = path.join(__dirname, 'project-dist', 'index.html');
const fileCSS = path.join(__dirname, 'project-dist', 'style.css');
const fileTemplate = path.join(__dirname, 'template.html');
const componentsFolder = path.join(__dirname, 'components');
const styles = path.join(__dirname, 'styles');
const copyFolderPath = path.join(projectDist, 'assets');
const currentFolderPath = path.join(__dirname, 'assets');


function Ccc(){fs.readFile(fileHTML, 'utf8', (err, fileContent) => {
  if(err) throw err;  
  fs.readdir(componentsFolder, function(err, item) {
    if (err) throw err;  
    length = item.length;
    for (let i = 0; i < length; i++) {
      let ext = path.extname(`${item[i]}`);
      let name = path.basename(`${item[i]}`, ext);
      if(ext==='.html'){
        let fileComponent = path.join(__dirname, 'components', `${item[i]}`);
        fs.readFile(fileComponent, 'utf8', (err, component) => {             
          if(err) throw err;
          fileContent = fileContent.replace(`\{\{${name}\}\}`, component);
          fs.writeFile(fileHTML, fileContent, function(err){
            if(err) throw err; 
          });
        });
      }
    }
  });
});}

function Bbb(){fs.copyFile(fileTemplate, fileHTML, (err) => {  //создали темплейт в папке для билда
  if (err) throw err;
  Ccc();
});}

function Aaa(){fs.mkdir(projectDist, { recursive: true }, function(err){ 
  if (err) throw err;    //создали папку для билда
  Bbb();
  createDirectory();
});}

Aaa();


fs.readdir(styles, (err, data) => {
  if (err) throw err;
  fs.writeFile(fileCSS,'',function(err){
    if(err) throw err;
  });
  length = data.length;
  for (let i = 0; i < length; i++) {
    let currentPath = path.join(styles, `${data[i]}`);
    let a = path.extname(currentPath);
    if(a==='.css'){
      fs.readFile(currentPath, 'utf-8', (err, content)=>{
        if(err) throw err;
        let b = content;
        fs.appendFile(fileCSS, b, (err)=>{
          if(err) throw err;
        });
      });
    }}}
);


function createDirectory(){
  fs.mkdir(copyFolderPath, { recursive: true }, function(err){ 
    if (err) throw err; 
  });

  fs.readdir(currentFolderPath, function(err, items) {
    if (err) throw err;  
    for (let i=0; i<items.length; i++) {
      let innerCopyDirPath = path.join(copyFolderPath, `${items[i]}`);
      let innerCurrentDirPath = path.join(currentFolderPath, `${items[i]}`);
      fs.mkdir(innerCopyDirPath, { recursive: true }, function(err){ 
        if (err) throw err; 
      });

      fs.readdir(innerCurrentDirPath, function(err, items) {
        if (err) throw err;  
      });

      fs.readdir(innerCurrentDirPath, function(err, items) {
        if (err) throw err;  
        for (let i=0; i<items.length; i++) {
          let currentPath = path.join(innerCurrentDirPath, `${items[i]}`);
          let copyPath = path.join(innerCopyDirPath, `${items[i]}`);
          fs.copyFile(currentPath, copyPath, (err) => {
            if (err) throw err;
          });
        }
      }
      );}
  });
}
