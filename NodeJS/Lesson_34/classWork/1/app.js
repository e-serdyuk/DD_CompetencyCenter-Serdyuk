/*###Задача 1 
* Создайте Express сервер и подключите к нему модуль socket.io. */
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.port || 1337;

app.get('/', function (req, res) {
    res.send("Server running with socket.io");
});

server.listen(port, function () {
    console.log('app running on port ' + port);
})