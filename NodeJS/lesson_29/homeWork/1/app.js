/*### Задача 1 
Создайте HTTP сервер, который записывает заголовки каждого запроса в отдельный файл, имя которого - номер запроса(1 - для первого запроса, 2 - для второго и т.д.).*/
const http = require('http');
const fs = require('fs');
const port = process.env.port || 1337;
let count = 0;

var server = http.createServer(function (request,response) {
if ( request.url != "/favicon.ico" ){
        const urlFile = './' + count + ".txt"
        const writeStream = fs.WriteStream(urlFile);
        writeStream.end(JSON.stringify(request.headers));
        response.end('Please see the file-'+count+'.txt');
        count++;}

});

server.listen(port);
console.log('Server running on port ' + port); 