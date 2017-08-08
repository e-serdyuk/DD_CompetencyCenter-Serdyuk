/*### Задача 3 
Добавьте в код предыдущих задач обработку ошибок: при запросе по несуществующему пути(все пути, кроме '/' и '/test'(с POST запросом)) на экран должно выводиться сообщение об ошибке, а статус-код ответа сервера должен быть 404.  */
const http = require ('http');
const fs = require ('fs');

const url = require ('url');
const port = process.env.port || 1337;
let count = 0;

var server = http.createServer (function (request, response) {
    if (request.url != "/favicon.ico" ) {

        if (request.url === "/test") {

            request.pipe (response);

        } else if(request.url === "/"){

       const urlFile = './' + count + ".txt"
        const writeStream = fs.WriteStream(urlFile);
        writeStream.end(JSON.stringify(request.headers));
        response.end('Please see the file-'+count+'.txt');
        count++;

        }
            else {
            response.setHeader('Content-Type', 'text/html');
            response.writeHead(404,'NOT FOUND');
            response.write("<h1>404 Error</h1>");
            response.end();

    }
    }
     else {
        response.end ();
    }


})

.listen (port, function () {
    let postData = '{"message": "Post request message"}';
     let options = {
        "port": 1337,
        "method": "POST",
        "path": "/test"

    };

    var req = http.request (options, function (res) {
        console.log ('POST request has been sent \n');

        res.on ('data', function (chunk) {
             console.log(`BODY: ${chunk}`);
        });

        res.on ('end', function () {
           console.log('No more data in response.');
        })
    });

        req.write (postData);
        req.end ()
  

});