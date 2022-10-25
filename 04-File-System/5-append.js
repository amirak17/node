var fs = require('fs');

fs.appendFile('2-file.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
