var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "vertic06"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE nodejs_mysql", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
