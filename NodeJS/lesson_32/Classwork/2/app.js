/*###Задача 2 
Создайте HTTP сервер. Используя модуль express-session, создайте сессию и реализуйте ее сохранение в базе данных (используя модуль express-mysql-session). База данных для хранения сессий находится в папке db рядом с файлом с задачами.*/ 
const express = require('express');
const app = express();
const port = process.env.port || 1337;
const session = require('express-session');
const expressMysqlSession = require('express-mysql-session')(session);
const sessionStoreOptions = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'session_test',
    // как часто будет проводиться удаление устаревших сессий(миллисекунды)
    checkExpirationInterval: 900000,
    // время устаревания сессии(миллисекунды)
    expiration: 86400000
};
const sessionStore = new expressMysqlSession(sessionStoreOptions);
app.use(session({
 secret: 'secret',
    saveUninitialized:true,
    resave: true, 
    store: sessionStore
}));
app.all('/', function (req,res) {
  res.send();
});
app.listen(port, function () {
    console.log('app running on port ' + port);
})
