const fs = require('fs');
const path = require('path'); 
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const stream = fs.WriteStream((path.join(__dirname, 'text.txt')));
const rl = readline.createInterface({ input, output });

function writeText(){
  rl.question('Что вы хотите сказать? ', function(answer) {
    if(answer === 'exit') {
      rl.close();
      // console.log('Спасибо');
    } else{
      stream.write(`${answer}`);
      addText();
    }
  });
}
writeText();

function addText(){
  rl.question('Что-то еще? ', function(answer) {
    if(answer === 'exit') {
      rl.close();
      // console.log('Спасибо');
    } else{stream.write(`\n${answer}`);
      addText();
}})}


process.on('exit', () => {
  console.log('Спасибо');
});




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