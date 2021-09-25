var fs = require("fs");
  
// Asynchronous - Opening File
console.log("opening file!");
fs.open('movies.txt', 'r+', function(err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("File open successfully");     
});