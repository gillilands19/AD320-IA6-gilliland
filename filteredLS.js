const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const extensionFilter = process.argv[3];

fs.readdir(directory, 'utf8', (err, files) => {
	if (err) throw err;
	
	filteredFiles = files.filter(file => path.extname(file).slice(1) == extensionFilter);

	filteredFiles.forEach( file => console.log(file) );

});
