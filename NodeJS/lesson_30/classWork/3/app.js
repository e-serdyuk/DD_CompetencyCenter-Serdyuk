/*###Задача 3 
Дополните код предыдущей задачи. Добавьте 2 middleware-функции: 
* функция для обработки GET запроса по пути '/test'. Функция должна возвращать html страницу с полем ввода и кнопкой. Если поле ввода не пустое, при нажатии на кнопку создается POST запрос по пути '/test'. Тело запроса - текст поля ввода.  
* функция для обработки POST запроса по пути '/test'. Функция выводит на экран тело запроса. */
const express = require('express');
const app = express();
var port = process.env.port || 1337;
app.get('/',(req, res)=>{
    res.send(`<h1>Task3</h1>`)
});

app.route('/test')
    .get((req,res)=>{
     res.sendFile(__dirname+'/test.html');
     console.log('GET request');
    })

    .post((req,res)=>{
       console.log('POST request');
       req.pipe(res);
    })

app.listen(port, function () {
    console.log('App listening on port ' + port);
}); 

