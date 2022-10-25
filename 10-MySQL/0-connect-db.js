const mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: "vertic06",
    database: "nodejs_mysql",
    multipleStatements : true
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySql DB');
});

module.exports = conn;
