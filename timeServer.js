const net = require('net');


const tcpDate = () => {
  const now = new Date();
  let isoDate = now.toISOString().substr(0, 10);
  let hour = now.getHours();
  let mins = now.getMinutes();

  return isoDate + ' ' + hour + ':' + mins;
}


const server = net.createServer((socket) => {

  socket.end(tcpDate() + '\n');
}).listen(process.argv[2], () => 
  console.log('Listening on Port:' + process.argv[2]));