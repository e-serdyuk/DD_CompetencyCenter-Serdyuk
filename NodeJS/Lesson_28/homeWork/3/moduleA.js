/*###Задача 3 
Используя потоки(Streams) прочитайте с 10 по 20 байт файла test.txt и сохраните результат в файле output.txt.  */
const fs = require('fs');
const readerStream = fs.FileReadStream('./test.txt',{start:9, end:19});
const writerStream = fs.FileWriteStream('./output.txt');
readerStream.pipe(writerStream)
