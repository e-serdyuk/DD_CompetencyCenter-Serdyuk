/*###Задача 2 
Рядом с файлом с задачами в папке Homework находится файл test.txt. Напишите код, который выведет в консоль с 10 по 15 байт этого файла.   */
const fs = require ('fs');

fs.open ('test.txt', 'r', function (err, fd) {
    var arr = new Uint16Array(6);
    var buff = Buffer.from(arr.buffer);
    if (err) {
        console.log(err);
    }
    else {
        fs.read (fd, buff, 0, 6, 9, function (err, bytes) {
            console.log('reading from file!');
            if (err) throw err;
            console.log(bytes);
            console.log ('String to console :', buff.toString());
            fs.close (fd, function (err) {
                if (err) throw err;
                console.log ('File was closed');
            })
        });
    }
});