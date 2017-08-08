const express = require ('express');
const bodyParser = require ('body-parser');
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

process.on ('exit', function () {
    pool.end ();
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
}); 
