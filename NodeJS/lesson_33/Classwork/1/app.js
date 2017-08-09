/*###Задача 1 
Создайте базовый сервер с помощью Restify. Реализуйте следующее: 
* При GET-запросе по пути '/test' на странице отображаются заголовки запроса.
* При POST-запросе по пути '/test' на странице отображается тело запроса.  */

const restify = require('restify');
const server = restify.createServer();
const bodyParser = require('restify-plugins').bodyParser;

const port = process.env.port || 1337;

server.use(bodyParser());

server.get('/test', function (req,res) {
    res.json(req.headers)
});

server.post('/test', function (req,res) {
    res.send(req.body)
});

server.on('NotFound', function (req,res,next) {
    res.status(404);
    res.send('This page does not exist. 404 Error');
});

server.listen(port, function () {
    console.log('app running on port ' + port);
});