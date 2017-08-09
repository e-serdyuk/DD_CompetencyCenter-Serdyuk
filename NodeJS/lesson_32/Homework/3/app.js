/*###Задача 3 
Дополните код предыдущей задачи. 
Создайте страницу авторизации.  

* Создайте страницу с полями ввода username, password и кнопкой log in. 
* Если поля ввода не пустые, при нажатии на кнопку происходит проверка пароля и имени пользователя. 
* При успешном исходе проверки пароля и имени пользователя, сохраните имя пользователя в качестве свойства сессии. */
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const mysql = require('mysql')
const port = process.env.port || 1337;
const passwordHandler = require ('./js/password_handler');
const session = require('express-session');

const pool = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'session_test'
});
const expressMysqlSession = require('express-mysql-session')(session);
const sessionStoreOptions = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'session_test',
    // как часто будет проводиться удаление устаревших сессий(миллисекунды)
    checkExpirationInterval: 90000,
    // время устаревания сессии(миллисекунды)
    expiration: 60000
};
const sessionStore = new expressMysqlSession(sessionStoreOptions);
app.use(session({
 secret: 'secret',
    saveUninitialized:true,
    resave: true, 
    store: sessionStore
}));

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

app.post ('/userLogin', function (req, res) {
        if (req.session.username) {
            res.status (200).send ('{"message":1,"sessionUserName":"' + req.session.username + '","sessionId":"' + req.session.id + '"}');
        } else {
            let query = passwordHandler.checkPassword (req.body.pass);
            let data = [];
            query.on ('result', function (row) {
                data.push (row);
            });
            query.on ('end', function () {
                if (data.length > 0 && data[0].username === req.body.userName) {
                        req.session.username = data[0].username;
                        res.status (200).send ('{"message":1,"sessionUserName":"' + req.session.username + '","sessionId":"' + req.session.id + '"}');
                } else {
                    res.status (200).send ('{"message":0}');
                }
            });
        }
    })

app.listen(port, function () {
    console.log('App listening on port ' + port);
}); 