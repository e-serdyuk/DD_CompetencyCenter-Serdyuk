/*### Задача 3 
Добавьте в код предыдущей задачи обработку GET запроса по пути '/test'.
 Ответом сервера на такой запрос должен быть JSON-объект '{"message": "Hello World!"}'.  */

const http = require('http');
const port = process.env.port || 1337; 


const server = http.createServer(function (request, response) {

  console.log( 'method= ' + request.method + '  url= '+ request.url);
    if (request.url === "/test") {
        response.end('{"message": "Hello World!"}');
    }
    else {response.end();}

});

server.listen(port);

console.log('Server running on port ' + port); 

