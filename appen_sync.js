var fs = require('fs');

var data = "\nLearn Node.js";

// Append data to file
fs.appendFileSync('durga.txt', data, 'utf8');
console.log("Data is appended to file successfully.")
