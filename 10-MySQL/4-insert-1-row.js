global.db = require('./0-connect-db');

var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
db.query(sql);

