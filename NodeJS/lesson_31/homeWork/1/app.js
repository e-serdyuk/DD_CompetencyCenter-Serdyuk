/*###Задача 1 
Создайте подключение к базе данных test через пул соединений. 
При GET-запросе по пути '/' выполните запрос к базе данных для выбора всех элементов таблицы test_table и отобразите ихз в виде таблицы.   */
const express = require('express');
const app = express();

const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 3,
    queueLimit: 10,
    acquireTimeout: 5000,
    host: 'localhost',
    user: 'evg',
    password: '123',
    database: 'test'
});

app.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err.stack);
            return;
        }

	connection.query('SELECT * FROM test_table', function(err, rows, fields) {
		res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write('<table style="border-collapse: collapse; border: 1px solid grey;">'); 
		for (var i = 0; i < rows.length; i++) {
			res.write(`
				<tr>
					<td style="border: 1px solid grey;">${rows[i].id}</td>
                    <td style="border: 1px solid grey;">${rows[i].name}</td>
                    <td style=" border: 1px solid grey;">${rows[i].info}</td>
				</tr>
			`)
		}; 
		res.write('</table>'); 
		res.end(); 
	})

    })
})

app.listen(1337);