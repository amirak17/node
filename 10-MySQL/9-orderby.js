global.db = require('./0-connect-db');

db.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
  if (err) throw err;
  console.log(result);
  process.exit();  
});
