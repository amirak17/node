global.db = require('./0-connect-db');

var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted, ID: " + result.insertId);
  process.exit();
});
