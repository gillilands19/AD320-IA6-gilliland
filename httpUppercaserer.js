//didn't use through to map module on this one, I wanted to only use the standard node modules
const http = require('http');

const server =  http.createServer( (req, res) => {
  if(req.method === 'POST'){
    
    let upperString = [];

    req.on('data', (chunk) => {
      let reqStr = chunk.toString().toUpperCase();
      upperString.push(reqStr);
    }).on('end', () => {
      res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
      res.end(upperString.join(''));
    });
  }

}).listen(process.argv[2], () => {
  console.log('Listening on Port: ' + process.argv[2])
});