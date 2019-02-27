const fs = require('fs');

const bufferObj = process.argv[2];

fs.readFile(bufferObj, 'UTF-8', (err, data) => {
	if (err) throw err;
	numLines = data.split('\n').length - 1;
	console.log(numLines);
});