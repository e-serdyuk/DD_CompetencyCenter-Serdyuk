/*###Задача 1 
Создайте HTTP сервер с помощью Express, который в ответ на любой запрос возвращает html страницу с заголовком "Hello from Express"(в теге h1). */
var express = require('express');
var app = express();

var port = process.env.port || 1337;

// middleware 
app.use(function (req, res) {
    res.send('Hello from express!');
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
}); 