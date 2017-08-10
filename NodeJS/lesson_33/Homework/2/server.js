/*###Задача 2 
Модифицируйте код предыдущей задачи. Вместо массива todos для хранения данных используйте базу данных.  */
const restify = require('restify');
const server = restify.createServer();
var serveStatic = require('serve-static-restify');
const port = process.env.port || 1337;
var path = require ("path");
const sendFile = require('./js/sendfile');
const mysql = require('mysql');
const pool= mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'session_test'
});

server.use(restify.bodyParser());
server.get(/\/views\/?.*/, serveStatic(__dirname));
server.get ('/', function (req, res) {
        sendFile (path.join (__dirname, "views/table.html"), res);
    });

server.get ('/get-data', function (req, res, next) {
        pool.query ('SELECT * FROM todo', function (err, rows) {
            if (err) next (err);
            res.send (rows);
        });
    });
server.get ('/check-id/:id', function (req, res) {
        var sql = 'SELECT * FROM todo WHERE id=?';
        var values = [req.params.id];
        pool.query (sql, values, function (err, rows) {
            if (err) {
                res.status (500);
                res.send (err)
            }
            res.status (200);
            res.send (rows);
        });
    });
server.post ('/addItem', function (req, res) {
        let sql = 'INSERT INTO todo(name,description) VALUES (?,?)';
        let values = [req.body.name, req.body.description];
        pool.query (sql, values, function (err, result) {
            if (err) {
                res.status (500);
                res.send (err)
             
            }
            res.status (200);
            res.send ();
        })

    })
server.del ('/delete/:id', function (req, res) {
        let sql = 'DELETE FROM todo WHERE id=?';
        let values = [req.params.id];
        pool.query (sql, values, function (err, result) {
            if (err ) {
                res.status (500);
                res.send (err)
            }
            res.status (200);
            res.send (result.affectedRows.toString());
        })

    })
server.put ('/changeItem', function (req, res) {
        let sql = 'UPDATE todo SET name=?, description=? WHERE id=? ';
        let values = [req.body.name, req.body.description, req.body.id];
        pool.query (sql, values, function (err, result) {
            if (err) {                
               res.status (500);
                res.send (err)
            }
            res.status (200);
               res.send ();
        })

    })
server.on('NotFound', function (req,res) {
    res.status(404);
    res.send('404 error.');
});
server.on('InternalServer', function (req, res, err) {
    err.body = 'Error';
    res.send(err);
});
server.listen (port, function (err) {
    console.log('Server is running on port ', port);
});