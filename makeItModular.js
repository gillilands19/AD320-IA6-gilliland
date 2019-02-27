const fs = require('fs');
const path = require('path');

function filterFiles(directory, extensionFilter, callBack) {
	fs.readdir(directory, 'utf8', (err, files) => {
		if (err) {return callBack(err)};
		files = files.filter(file => path.extname(file).slice(1) === extensionFilter);
		callBack(null, files);
	});
};

module.exports = filterFiles;