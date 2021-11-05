const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

const fs = require('fs');
const path = require('path');
// const process = require('process');
const filePath = path.join(__dirname, 'text.txt');


// rl.question('Что вы хотите сказать? ', function(answer) {
//   createFile(answer);
//   console.log('Спасибо за информацию');
//   // console.log('Что-то еще?');
//   // addFile(answer);
//   // rl.close();
// });
// rl.question('Что-то еще? ', function(info) {
//   addFile(info);
//   console.log('Спасибо за информацию');
//   // rl.close();
// });


// function createFile(ans){
//   fs.writeFile(filePath, `${ans}\n`, (err) => {
//     if(err) {
//       throw err;
//     }
//   });
// }
// function addFile(ans){
//   fs.appendFile(filePath, `${ans}\n`, (err) => {
//     if(err) {
//       throw err;
//     }
//   });
// }

// fs.appendFile(filePath, '\nAdd', (err) => {
//   if(err) {
//     throw err;
//   }
//   console.log('Файл создан2');
// });

// rl.on('close', () => {
//   console.log('До скорого');
// });
