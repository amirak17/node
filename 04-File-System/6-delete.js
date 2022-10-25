var fs = require('fs');

fs.unlink('6-file.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});