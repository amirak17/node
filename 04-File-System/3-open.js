var fs = require('fs');

fs.open('3-file.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});