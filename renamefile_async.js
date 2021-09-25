const fs = require("fs")

fs.rename("sanu.txt","pravi.txt",(err)=>{
        if(err) {
            console.log(err)
        }else{
            console.log("file renamed")
        }
})