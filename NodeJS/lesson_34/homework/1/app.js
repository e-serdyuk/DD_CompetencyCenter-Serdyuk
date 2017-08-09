/*###Задача 1 
* Создайте Express сервер и подключите к нему модуль socket.io.  
* На стороне сервера создайте пространство имен с произвольным именем, которое генерирует событие 'message' и передает через событие объект {text: 'Hello from namespace'}.  
* На стороне клиента создайте обработчик события 'message', который выводит данные, переданные через событие, на экран и генерирует событие 'receive_message'. .
* На стороне сервера установите обработчик события 'receive_message', который выведет в консоль текст 'message received'. */
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.port || 1337;
var path = require('path');
const io = require('socket.io')(server);
const msgNamespace = io.of('/message');
msgNamespace.on('connection', function (socket) {

 socket.send({text: 'Hello from namespace'});

 socket.on('receive_message',function (data) {
            console.log('message from client = ', data);
        });

 socket.on('connect_error',function (err) {
            console.log('connection error= ', err);
        })
    });

app.get('/message', function (req, res) {
       res.sendFile(path.join(__dirname, 'views/app.html'));
});


server.listen(port, function () {
    console.log('app running on port ' + port);
});
