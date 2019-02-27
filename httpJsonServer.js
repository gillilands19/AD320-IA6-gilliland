const http = require('http');
const url = require('url');


const server = http.createServer(( req, res ) => {

  let parsedUrl = url.parse(req.url, true);
  let path = parsedUrl.pathname;
  let datetime = new Date(parsedUrl.query.iso);

  if(req.method === 'GET'){
    switch(path){
      
      case '/api/parsetime':
        parsedTime = {
          hour: datetime.getHours(),
          minute: datetime.getMinutes(),
          second: datetime.getSeconds()
        };
        res.writeHead(200, 'OK', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(parsedTime))
      
      case '/api/unixtime':
        unixTime = {
          unixtime: datetime.getTime()
        };
        res.writeHead(200, 'OK', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(unixTime));
    }
  } else{
    res.writeHead(405);
    res.end("Not Allowed");
  }

}).listen(+process.argv[2], () => {
  console.log('Listening on Port: ' + process.argv[2]);
});