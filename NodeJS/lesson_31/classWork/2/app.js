/*###Задача 2 
Выберите все элементы test_table базы данных test и отобразите на странице в виде таблицы.  */
const express = require('express');
const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'evg',
    password:'123',
    database:'test'
});

connection.connect(function(err) { 
		if (err) throw err; 
	}); 
app.use(function(req, res) {
	

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
}); 

app.listen(1335);