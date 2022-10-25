// npm install upper-case

var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);

// http://localhost:8080

// Node.js Built-in Modules
// https://www.w3schools.com/nodejs/ref_modules.asp

// npm install ...
// https://www.npmjs.com/