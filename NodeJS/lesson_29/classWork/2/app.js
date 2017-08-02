/*### Задача 2 
Модифицируйте код предыдущей задачи. Добавьте код, который отправляет GET запрос по пути '/test'.  */

const http = require('http');
const port = process.env.port || 1337; 


const server = http.createServer(function (request, response) {

  console.log( 'method= ' + request.method + '  url= '+ request.url);
    if (request.url === "/test") {
        response.end('<h1>Hello World</h1>');
    }
    else {response.end();}

});

server.listen(port);

console.log('Server running on port ' + port); 

