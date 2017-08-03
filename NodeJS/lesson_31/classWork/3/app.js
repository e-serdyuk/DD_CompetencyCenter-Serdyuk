/*###Задача 3 
Добавьте в таблицу test_table базы данных test один элемент.   */
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
app.get('/',(req,res)=>{
	var sql = "INSERT INTO test_table (name,info) VALUES ('Item4','Info4')";
	 connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 item inserted");
  });

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