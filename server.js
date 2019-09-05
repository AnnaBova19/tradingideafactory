var finalhandler = require('finalhandler');
var http = require('http');
var fs = require('fs');

var serveStatic = require('serve-static');
 
// Serve up public/ftp folder
var serve = serveStatic('dist', {'index': ['index.html', 'index.htm']});
 
// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, () => {
    fs.readFile('dist/index.html', function (err, buf) {
      if (err) return done(err);
      res.setHeader('Content-Type', 'text/html');
      res.end(buf);
    });
  });
});
 
// Listen
server.listen(3000);