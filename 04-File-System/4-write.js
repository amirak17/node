var fs = require('fs');

fs.writeFile('4-file.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});