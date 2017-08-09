/*###Задача 2 
Дано массив users: 
```
users = [
{ name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
{ name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
]
``` 
Реализуйте следующее: 
* При GET-запросе по пути '/users' в ответе сервера отправляется массив users в формате JSON. 
* При POST-запросе по пути '/users' в массив users добавляется элемент {name: 'random user', age: 30}.  */

const restify = require('restify');
const server = restify.createServer();
const port = process.env.port || 1337;
var users = [
    { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
    { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
];

server.get('/users', function (req,res) {
    res.json(users)
});

server.post('/users', function (req,res) {
    users.push(JSON.parse('{"name": "random user", "age": 30}'));
    res.json(users)
});

server.on('NotFound', function (req,res,next) {
    res.status(404);
    res.send('This page does not exist. 404 Error');
});

server.listen(port, function () {
    console.log('app running on port ' + port);
});