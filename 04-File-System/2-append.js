var fs = require('fs');

fs.appendFile('2-file.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

