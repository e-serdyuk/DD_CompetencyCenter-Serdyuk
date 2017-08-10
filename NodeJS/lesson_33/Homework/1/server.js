/*###Задача 1 
Дано массив todos: 
```
todos = [
{ id: 1, name: 'Work', description: 'Stuff to do' }, { id: 2, name: 'Walk the dog', description: 'Need to get up early' },
{ id: 3, name: 'Finish project', description: 'An important task' }, { id: 4, name: 'Earn a lot of money', description: 'As soon as possible' },
{ id: 5, name: 'Go to sleep', description: 'late at night'}
]
``` 
Создайте приложение todoApp. 

Используя Restify, создайте REST API приложения с такой структурой: 
* /addItem - POST-запрос, создание нового элемента массива todos
* / - GET-запрос, показать все элементы массива todos в виде таблицы 
* /update/itemID - PUT-запрос, обновить элемент массива todos с указанным id. Тело запроса - в формате JSON. 
* /delete/itemID -DELETE-запрос, удалить элемент массива todos с указанным id 

На странице приложения должны находиться следующие элементы: 
* Таблица, в которой отображены элементы массива todos 
* 3 поля ввода с соответствующими названиями: id, name, description. 
* 3 кнопки с названиями: Add Item(Создать элемент), Delete Item(Удалить элемент), Update Item(Обновить элемент), при нажатии на которые на сервер делаются AJAX-запросы к REST API для выполнения соответствующих операций.  */
const ejs = require('ejs');
const restify = require('restify');
const server = restify.createServer();
var serveStatic = require('serve-static-restify');
const port = process.env.port || 1337;
var todos = require('./js/main');
var path = require ("path");
const sendFile = require('./js/sendfile');
server.use(restify.bodyParser());
server.get(/\/views\/?.*/, serveStatic(__dirname));
server.get ('/', function (req, res) {
        sendFile (path.join (__dirname,"views/table.html"), res);
    });

server.get ('/get-data', function (req, res) {
        res.send (todos.getObj ());
    });

server.get ('/check-id/:id', function (req, res) {
        res.status (200);
        res.send (todos.checkId (req.params.id));
    });
server.post ('/addItem', function (req, res) {
        todos.addItem(req.body.name, req.body.description);
        res.send ();
    })
server.del ('/delete/:id', function (req, res) {
        var e = todos.checkId(req.params.id);
        if ( e.length) {
            todos.deleteItem(req.params.id);
            res.status (200);
            res.send ('success');
        } 
    })
server.put ('/changeItem', function (req, res) {
        todos.changeItem(req.body.name, req.body.description, req.body.id);
        res.status (200);
        res.send ();

    })
server.on('NotFound', function (req,res) {
    res.status(404);
    res.send('404 error.');
});
server.on('InternalServer', function (req, res, err) {
    err.body = 'Error';
    res.send(err);
});
server.listen (port, function (err) {
    console.log('Server is running on port ', port);
});