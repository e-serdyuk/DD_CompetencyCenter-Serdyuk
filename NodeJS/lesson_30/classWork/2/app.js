/*###Задача 2 
Дополните код предыдущей задачи. Напишите middleware-функцию, которая будет выводить в консоль путь и HTTP метод запроса.  */
var express = require('express');
var app = express();

var port = process.env.port || 1337;

// middleware 
app.use(function (req, res, next) {
    res.send('Hello from express!');
    next();
});

app.use(function (req, res) {
    console.log ('Method: ', req.method);
    console.log ('Path: ', req.url);
    });

app.listen(port, function () {
    console.log('App listening on port ' + port);
}); 
