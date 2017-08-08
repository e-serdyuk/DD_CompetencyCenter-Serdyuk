/*### Задача 2 
Добавьте в предыдущую задачу код, отправляющий POST запрос по пути '/test'. Тело запроса - произвольный текст. Ответ сервера должен быть в формате JSON в следующем виде: '{"message": "ТЕКСТ ТЕЛА ЗАПРОСА"}'.   */

const http = require ('http');
const fs = require ('fs');

const url = require ('url');
const port = process.env.port || 1337;
let count = 0;

var server = http.createServer (function (request, response) {

    if (request.url != "/favicon.ico" ) {

        if (request.url === "/test") {

            request.pipe (response);

        } else {

       const urlFile = './' + count + ".txt"
        const writeStream = fs.WriteStream(urlFile);
        writeStream.end(JSON.stringify(request.headers));
        response.end('Please see the file-'+count+'.txt');
        count++;

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

    var request = http.request (options, function (res) {
        console.log ('POST request has been sent \n');

        res.on ('data', function (chunk) {
             console.log(`BODY: ${chunk}`);
        });

        res.on ('end', function () {
           console.log('No more data in response.');
        })
    });

        request.write (postData);
        request.end ()
  

});