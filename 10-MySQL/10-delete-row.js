global.db = require('./0-connect-db');

var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Number of records deleted: " + result.affectedRows);
  process.exit();  
});
