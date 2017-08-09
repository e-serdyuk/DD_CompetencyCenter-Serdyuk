/*###Задача 2  
Создание простого чата. 

* Создайте Express сервер и подключите к нему модуль socket.io.   
* На стороне клиента создайте html страницу с полем ввода и кнопкой. 
* Если поле ввода не пустое, при нажатии на кнопку генерируется событие 'send_message', через событие передаются данные поля ввода. 
* На стороне сервера создайте обработчик события 'send_message'. Обработчик генерирует событие 'chat_message' и отсылает его всем подключенным клиентам. Через событие 'chat_message' передаются данные, полученные в событии 'send_message'. 
* На стороне клиента создайте обработчик события 'chat_message', который выводит на экран данные, переданные через событие.  */
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.port || 1337;
var path = require('path');
const io = require('socket.io')(server);
io.on('connection', function (socket) {
socket.on('send_message',function (data) {
       socket.emit('chat_message',data);
        });
 socket.on('connect_error',function (err) {
      console.log('connection error= ', err);
        })
    });

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/app.html'));
});
server.listen(port, function () {
    console.log('app running on port ' + port);
});
