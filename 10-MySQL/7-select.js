global.db = require('./0-connect-db');

db.query("SELECT * FROM customers", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
  console.log(fields);
  console.log(result[2]);
  console.log(result[2].address);
  process.exit();
});
