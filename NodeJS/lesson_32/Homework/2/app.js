/*###Задача 2 
Создайте страницу регистрации пользователей. 

База данных для сохранения сессий(таблица sessions) и пользователей(таблица users) находится в папке db рядом с файлом с задачами. 
Модуль для работы с паролем(его хэширования и проверки) находится в папке Homework рядом с файлом с задачами.  

* Создайте страницу с полями ввода username и password и кнопкой sign up. 
* Если поля ввода не пустые, при нажатии на кнопку sign up, пароль хэшируется. Хэш пароля и имя пользователя сохраняются в таблице users базы данных session_test.*/
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const mysql = require('mysql')
const port = process.env.port || 1337;
const passwordHandler = require ('./js/password_handler');
const pool = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'session_test'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use('/views', express.static(__dirname + '/views'));

app.get ('/', function (req, res) {
        res.sendFile (__dirname + '/views/login.html');
    });
app.post ('/registerUser', function (req, res) {

        let hash = passwordHandler.encryptPassword (req.body.pass);
        let sql = 'INSERT INTO users (username, passwordHash) VALUES(?,?)';
        let values = [req.body.userName, hash];
        pool.query (sql, values, function (err, result) {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    let obj = '{"message":"duplicate"}';
                    res.status (200).send (obj);
                }
            } else {
                if (result && result.affectedRows > 0) {
                    res.setHeader ('Content-type', 'application/json');
                    let obj = '{"message":"success"}';
                    res.status (200).send (obj);
                }
            }
        });
    })

app.listen(port, function () {
    console.log('App listening on port ' + port);
}); 