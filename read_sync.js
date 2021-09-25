const fs = require("fs")

var data = fs.readFileSync("programming.txt", {encoding:'utf8', flag:'r'});

console.log(data)
