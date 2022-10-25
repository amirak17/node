var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "vertic06",
  database: "nodejs_mysql"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});