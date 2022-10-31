var docFile = require('fs')
var readFile = docFile.readFileSync('test.txt','ut8')
console.log(readFile)