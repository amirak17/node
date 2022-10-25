var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ppzoubmy_custrec",
  password: "VerTic06-70"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});