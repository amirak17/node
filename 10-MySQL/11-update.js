global.db = require('./0-connect-db');

var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
db.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result.affectedRows + " record(s) updated");
  process.exit();    
});
