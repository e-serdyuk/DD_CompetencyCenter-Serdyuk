/*###Задача 3 
Напишите код, который создаст в текущей директории файл test с текстом, переданным в качестве аргумента командной строки. */

const fs = require ('fs');

var data=process.argv[2];

if (data) {
    fs.writeFile('test.txt',data,function (err) {
        if (err) {console.log(err)}
    });
} 
else console.log("enter the argument")