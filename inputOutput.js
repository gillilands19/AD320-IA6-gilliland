const fs = require('fs');


function numLines() {
	return fs.readFileSync(process.argv[2], 'UTF-8').split('\n').length - 1;
}

console.log(numLines());