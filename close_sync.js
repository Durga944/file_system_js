const fs = require("fs")

fs.close("movies.txt", function(err) {
    if (err) {
        console.log(err);
    }else{
        console.log("File closed successfully.");
    }
    
})
