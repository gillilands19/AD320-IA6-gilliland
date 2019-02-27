const filterFiles = require('./makeItModular');

const directory = process.argv[2];
const extensionFilter = process.argv[3];

filterFiles(directory, extensionFilter, (err, data) => {
	if (err) {
		return console.error('There was an error:', err);
	}
	data.forEach(file => console.log(file));
});