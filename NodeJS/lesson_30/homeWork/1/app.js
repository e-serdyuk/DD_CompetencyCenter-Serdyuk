/*###Задача 1 
Создайте файловый сервер с помощью Express, который будет получать все данные из директории 'public'. */
var express = require('express');
var app = express();
var port = process.env.port || 1337;
app.use(express.static(__dirname +'/public'));

app.get('/',(req,res)=>{
    res.redirect('/public');
})
app.listen(port, function () {
    console.log('App listening on port ' + port);
}); 