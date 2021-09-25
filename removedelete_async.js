const fs = require("fs")

fs.unlink("pravi.txt" ,function(err){
    if(err) {
        console.log(err);
    }else{
        console.log("File deleted successfully!");
    }
})