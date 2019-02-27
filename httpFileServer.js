const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {

  fs.createReadStream(process.argv[3]).pipe(res);
  res.writeHead(200, {'Content-Type': 'text/plain'} );

}).listen(process.argv[2], () => {
  console.log('Listening on Port: ' + process.argv[2])
});