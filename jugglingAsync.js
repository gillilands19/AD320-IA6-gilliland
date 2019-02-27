
const http = require('http');
const bl = require('bl');

let count = 2;

function printData(count) {
	http.get(process.argv[count], (response) => {
		response.pipe(bl((err, data) => {
			if(err) {return console.error(err)}
			else {
				console.log(data.toString());
			}
		}));	
	
	if(count <= 3) { 
		printData(count + 1);
	}

	});
}

const print = printData(count);