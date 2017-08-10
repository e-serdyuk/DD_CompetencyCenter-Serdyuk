const session = require('express-session');
const expressMysqlSession = require('express-mysql-session')(session);

const sessionStoreOptions = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'session_test',
    // как часто будет проводиться удаление устаревших сессий(миллисекунды)
    checkExpirationInterval: 90000,
    // время устаревания сессии(миллисекунды)
    expiration: 60000
};

const mySessionStore = new expressMysqlSession(sessionStoreOptions);
module.exports = function (app) {
    app.use(session({
        secret:'secret',
        store:mySessionStore,
        saveUninitialized:true,
        resave:true
    }));
};


