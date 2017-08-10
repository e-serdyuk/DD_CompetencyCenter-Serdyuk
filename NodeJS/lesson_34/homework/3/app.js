/*###Задача 3(Дополнительное задание) 
Добавьте в чат, созданный в предыдущей задаче, возможность авторизации пользователей. */
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.port || 1337;
const ejs = require('ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());
var path = require('path');
const {pool} = require('./js/db-connect');
const passwordHandler = require ('./js/password_handler');
require('./js/sessions-init')(app);
app.set('views','./views');
app.set('view engine','ejs');
app.use('/views', express.static(__dirname + '/views'));
const io = require('socket.io')(server);

io.on('connection', function (socket) {

        socket.on('send_message',function (data) {
            socket.emit('chat_message',data);
  
        });
    });

app.get ('/', function (req, res) {
        if ( req.session.username ) {
            res.redirect('/chat');
        } else {
            res.redirect('/login');
        }
    });

app.get('/login', function (req,res) {
       res.sendFile(path.join(__dirname, './views/app.html'));
    });

app.get('/chat',function (req,res) {
        if ( req.session.username ) {
            res.render('chat',{userName:req.session.username});
        } 

    });

app.get('/logout', function (req,res) {
        req.session.username = '';
        res.redirect('/login');
    })
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
app.use(function (req, res, next) {
    res.statusMessage = "404 error";
    res.status(404);
    res.send();
});


server.listen(port, function () {
    console.log('app running on port ' + port);
});
