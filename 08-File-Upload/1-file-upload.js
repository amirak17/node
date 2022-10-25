var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

// /Users/amiralikhan/Library/Mobile Documents/com~apple~CloudDocs/Amirs_Docs/_nodejs/08-File-Upload/

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var mainpath = '/Users/amiralikhan/Library/Mobile Documents/com~apple~CloudDocs/Amirs_Docs/_nodejs/08-File-Upload/';
      var newpath = mainpath + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(80);

// http://localhost