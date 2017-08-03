/*###Задача 1 
Создайте подключение к базе данных test(файл с базой данных находится в папке  test_db). */
const express = require('express');
const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'evg',
    password:'123',
    database:'test'
});

connection.connect();
connection.query('SELECT * FROM test_table',(err,rows,fields)=>{
    if(err) throw err;
    console.log(rows[0].name)
})

app.listen(1337);