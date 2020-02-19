const http = require('http');
//file system
const fs = require('fs');
const path = require('path');
//create a server
let server = http.createServer(function(req, res) {
  if (req.url === '/') {
    fs.readFile('./index.html', null, function(error, html) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    });
  } else if (req.url === '/script.js') {
    fs.readFile('./script.js', null, function(error, script) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(script);
    });
  } else if (req.url.match('.css$')) {
    let cssPath = path.join(__dirname, req.url);
    let fileStream = fs.createReadStream(cssPath);
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fileStream.pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/css' });
    res.write('No Page found!');
  }
});

server.listen(3000); //the server listens on port 3000
