/*###Задача 3  
Загрузите модуль test.js из папки test(папка находится рядом с файлом с задачами) 3-мя разными способами. */

const test1 = require('./test/test.js');
const test2 = require('./test_index');
const test3 = require('./test_package');

test1();
test2();
test3();