const express = require ('express');
const bodyParser = require ('body-parser');
const ejs = require('ejs');
const port = process.env.port || 1337;
const app = express ();
const mysql = require('mysql');

const connOptions = {
    connectionLimit: 3,
    queueLimit: 10,
    acquireTimeout: 5000,
    host:'localhost',
    port:'3306',
    database:'test',
    user:'evg',
    password:'123'

};
const pool = mysql.createPool(connOptions);
app.set('views', './public');
app.set('view engine', 'ejs');
app.use (bodyParser.text ());
app.use (bodyParser.json ());
app.use ('/public', express.static (__dirname + '/public'));
app.all ('/', function (req, res) {

    res.sendFile (__dirname + '/public/table.html');
});

app.get ('/get-data', function (req, res) {

    pool.query ('SELECT * FROM test_table', function (err, result, fields) {
          res.send (result);
    });
});

app.get ('/addItem', function (req, res) {
    res.sendFile (__dirname + '/public/addItem.html');
});

app.post ('/newItem', function (req, res) {
    pool.query(`INSERT INTO test_table (name,info) VALUES ('${req.body.name}','${req.body.info}')`,function (err, result) {
        if ( err ) { console.log('Error'); }
        res.send ();
    })

});

app.delete ('/deleteItem', function (req, res, next) {
        let sql = 'DELETE FROM test_table WHERE id=?';
        let values = [req.body.id];
        pool.query (sql, values, function (err, result) {
            if (err ) { console.log('Error');}
            res.status (200).send (result.affectedRows.toString());
     })
})

app.put ('/changeItem', function (req, res, next) {

        let sql = 'UPDATE test_table SET name=?, info=? WHERE id=? ';
        let values = [req.body.name, req.body.info, req.body.id];
        pool.query (sql, values, function (err, result) {
           if (err ) { console.log('Error');}
            res.status (200).send ();
        })

    })

app.get ('/editItem/:id', function (req, res, next) {
        var sql = 'SELECT * FROM test_table WHERE id=?';
        var values = [req.params.id];
        pool.query (sql, values, function (err, rows) {
            if (err ) { console.log('Error');}
            res.render ('edit-item', {name: rows[0].name, info: rows[0].info, id: req.params.id})
        });
    })

app.get ('/checkId/:id', function (req, res, next) {

        var sql = 'SELECT * FROM test_table WHERE id=?';
        var values = [req.params.id];
        pool.query (sql, values, function (err, rows) {
             if (err ) { console.log('Error');}
            res.status (200).send (rows.length.toString ());
        });
    });

process.on ('exit', function () {
    pool.end ();
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
}); 
