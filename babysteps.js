function addProcessArgs() {

	let argTotal = 0;

	process.argv.forEach( (arg) => {
		
		if(!isNaN(arg)){
			argTotal += +arg;
		}

	});
	return argTotal;
}

console.log(addProcessArgs());