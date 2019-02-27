const http = require('http');
const concat = require('concat-stream');

const url = process.argv[2];

http.get(url, (res) => {
	res.setEncoding('utf8');
	res.pipe(concat((data) => {
		console.log(data.length);
		console.log(data);
	}));
}).on('error', console.error);