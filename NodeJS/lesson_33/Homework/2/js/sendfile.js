const fs = require ('fs');

module.exports = function (filePath, res) {
    var fileStream = fs.createReadStream (filePath);
    var data = '';

    fileStream.on ('readable', function () {

        res.write (fileStream.read ())
    });

    fileStream.on ('end', function () {

        res.end ();
    });
};