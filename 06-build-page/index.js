const fs = require('fs');
const path = require('path');

const projectDist = path.join(__dirname, 'project-dist');
let fileHTML = path.join(__dirname, 'project-dist', 'index.html');
const fileBuildCSS = path.join(__dirname, 'project-dist', 'style.css');
const fileTemplate = path.join(__dirname, 'template.html');
const fileComponentHeader = path.join(__dirname, 'components', 'header.html');


function Ccc(){fs.readFile(fileHTML, 'utf8', (err, fileContent) => {
  if(err) throw err;  //прочитали темплейт
  // console.log(fileHTML);
  // console.log(content);
  fs.readFile(fileComponentHeader, 'utf8', (errorHeader, fileContentHeader) => {
    if(errorHeader) throw errorHeader;
    let t = fileContent.replace(/\{\{header\}\}/, fileContentHeader);
      console.log(t);
      fs.writeFile(fileHTML, t, function(error){
        if(error) throw error; // ошибка чтения файла, если есть
        console.log('Данные успешно записаны записать файл');
     });
  });


});}

function Bbb(){fs.copyFile(fileTemplate, fileHTML, (err) => {  //создали темплейт в папке для билда
  if (err) throw err;
  Ccc();
});}

function Aaa(){fs.mkdir(projectDist, { recursive: true }, function(err){ 
  if (err) throw err;    //создали папку для билда
  Bbb();
})}

Aaa();







// Фактически весь функционал замены реализован в одной строке:
// fileContent = fileContent.replace(/\{\{header\}\}/, fileContentHeader);
// Она вставляет содержимое файла "pages/header.html" на место, где стоит {{header}}. 
// Аналогично можно заменять и подвал сайта на {{footer}} из файла "pages/footer.html". 
// Но обратите внимание, 
// что подключение файлов должно происходить одновременно: 
// внутри метода readFile



// fs.copyFile('fileTemplate', 'projectDist', err => {
//   if(err) throw err; // не удалось скопировать файл
//   console.log('Файл успешно скопирован');
// })



