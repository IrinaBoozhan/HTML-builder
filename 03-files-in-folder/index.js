const fs = require('fs');
const path = require('path');
let length;
const filePath = path.join(__dirname, 'secret-folder');

fs.readdir(filePath, (err, data) => {
  if (err) throw err;
  length = data.length;
  for (let i = 0; i < length; i++) {
    let currentPath = path.join(filePath, `${data[i]}`);
    let ext = path.extname(currentPath);
    let name = path.basename(`${data[i]}`, ext);
    fs.stat(currentPath, (err, stats) => {
      if (err) throw err;
      if(stats.isFile()){
        console.log(name + ' --- ' + ext + ' --- ' + stats.size / 1024 + ' KB'); 
      }
    });
  }
});





