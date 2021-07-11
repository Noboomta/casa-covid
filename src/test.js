

const fs = require('fs')
fs.readFile('./place.json', 'utf8', (err, jsonString) => {
	console.log(jsonString)
})

