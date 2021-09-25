// const fs = require("fs")
// fs.readFile("word.txt","utf8",function(err,data){
//     console.log(data)
// });

// console.log("readFile called");

const fs = require('fs');
  
// Use fs.readFile() method to read the file
fs.readFile('sanu.txt', "utf8",(err, data) => {
    console.log(data);
 })