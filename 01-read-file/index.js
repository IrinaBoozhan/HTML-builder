const path = require('path'); 
const fs = require('fs'); 


let stream = fs.ReadStream(path.join(__dirname, 'text.txt'));
function readText(){stream.on('data', (data) =>
  console.log(data.toString())
);}
readText();