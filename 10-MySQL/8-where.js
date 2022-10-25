global.db = require('./0-connect-db');

var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';

db.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
  process.exit();
});