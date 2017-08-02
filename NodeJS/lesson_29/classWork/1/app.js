/*### Задача 1 
Создайте HTTP сервер, который выводит в консоль HTTP методы запросов и их пути. */

const http = require('http');
const port = process.env.port || 1337; 


const server = http.createServer(function (request, response) {

  console.log( 'method= ' + request.method + '  url= '+ request.url);
    response.end('<h1>Hello World</h1>');

});

server.listen(port);

console.log('Server running on port ' + port); 