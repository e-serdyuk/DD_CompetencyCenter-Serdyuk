/*###Задача 2 
Дано массив users: 
```
users = [
{ name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
{ name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
]
```
 
Реализуйте следующее: 
* При GET-запросе по пути /users массив users отображается на странице в виде списка(по свойству name). При клике по каждому из элементов списка отправляется GET-запрос по пути /users/userID, где userID - свойство id массива users, соответствующее элементу списка.  
* При GET-запросе по пути /users/userID на странице отображается информация о соответствующем пользователе - свойства элемента массива users - name и age. 

###Задача 3 
Модифицируйте код предыдущией задачи. Добавьте в код middleware-функцию для обработки ошибок. */
const express = require ('express');
const app = express ();
const port = process.env.port || 1337;

var users = [
    {name: 'Jane', age: 23}, {name: 'John', age: 30}, {name: 'Vasya', age: 25},
    {name: 'Yvonne', age: 34}, {name: 'Will', age: 18}, {name: 'Jack', age: 26}
];

app.use ("/public", express.static (__dirname + "/public"));

app.all('/', function (req,res) {

    res.redirect('/users');
});

app.get ('/users', function (req, res) {
     res.sendFile (__dirname + '/public/users.html');
});

app.get ('/users/:id', function (req, res) {
     res.send (JSON.stringify (users[req.params.id]));
});

app.get ('/usersData', function (req, res) {
    res.send (JSON.stringify (users))
});

app.use(function (req,res) {
    res.sendFile (__dirname + '/public/error.html');

console.log("Error.Wrong path.")
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
}); 