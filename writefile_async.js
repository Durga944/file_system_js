// const fs = require("fs")

// console.log("Going to write into existing file");

// var data = "i am durga i am from jabalpur"
// fs.writeFile("sanu.txt",data,function(error){
//     if(error) {
//         console.log(error)
//     }
// })

// const fs = require('fs');
  
// let data = "This is a file containing a collection of books.";
  
// fs.writeFile("books.txt", data, (err) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log("File written successfully\n");
//     console.log("The written has the following contents:");
//     console.log(fs.readFileSync("books.txt","utf8"));
//   }
// });

const fs = require('fs');
  
let data = 'console.log("writing");'
  
fs.writeFile("movies.txt", data,"utf8",function(err){
        if (err){
            console.log(err); 
        }
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("movies.txt", "utf8"));
        }
    
});

// console.log("before writing");
// const a = fs.readFile("movies.txt", 'utf8');
// console.log(a);
console.log("after writing");
