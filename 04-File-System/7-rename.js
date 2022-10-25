var fs = require('fs');

fs.rename('7-file.txt', '7-renamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});