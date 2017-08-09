/*###Задача 3 
Модифицируйте код предыдущей задачи. Реализуйте следующее: 
* При PUT-запросе по пути '/users/index', где index - индекс элемента в массиве users, элемент по указанному индексу заменяется на следующий объект: {name: 'updated name', age: 'updated age'}. 
* При DELETE-запросе по пути '/users/index', где index - индекс элемента в массиве users, происходит удаление элемента с указанным индексом из массива.  */

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

server.put('/users/:index', function (req,res) {
    users[req.params.index].name = 'updated name';
    users[req.params.index].age = 'updated age';
    res.json(users)
});

server.del('/users/:index', function (req,res) {
	users.splice(req.params.index,1)
    res.json(users)
});
server.on('NotFound', function (req,res,next) {
    res.status(404);
    res.send('This page does not exist. 404 Error');
});

server.listen(port, function () {
    console.log('app running on port ' + port);
});