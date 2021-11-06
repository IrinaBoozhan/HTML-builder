const fs = require('fs');
const path = require('path');
let length;
const filePath = path.join(__dirname, 'secret-folder');

fs.readdir(filePath, (err, data) => {
  if (err) throw err;
  length = data.length;
  for (let i = 0; i < length; i++) {
    let currentPath = path.join(filePath, `${data[i]}`);
    fs.stat(currentPath, (err, stats) => {
      if (err) throw err;
      if(stats.isFile()){
        console.log(`${data[i]}`+' имеет размер '+stats.size/1024+' KB');
      }
    });
  }
});





