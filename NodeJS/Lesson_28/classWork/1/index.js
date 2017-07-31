/* ###Задача 1 
Напишите код, который выводит в консоль сумму аргументов, переданных в командной строке при запуске файла.  */
 process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

 console.log('Sum is ', +process.argv[2]+ +process.argv[3]);





