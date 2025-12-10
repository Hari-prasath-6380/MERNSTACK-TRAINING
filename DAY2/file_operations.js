const fs = require('fs');
console.log(fs);            // Displays the file methods

//Writing content to a file

fs.writeFile("sample.txt","File created using fs module in Node.js",(err)=>{
    if(err){
        console.log("Error in creating file");
    }
    else{
        console.log("File created successfully");
    }
});


// Appending content to a existing file

fs.appendFile("sample.txt","\nThis content is wrote using append file method",(err)=>{
    if(err){
        console.log("Error in appending file");
    }
    else{
        console.log("File appended successfully");
    }
});


// Reading a file 

fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error in reading file");
    }
    else{
        console.log(data);
    }
})


// Deleting a file

fs.unlink("sample.txt",(err)=>{
    if(err){
        console.log("Error in deleting file");
    }
    else{
        console.log("File deleted successfully");
    }
})


// Recreating the file again because file is deleted in the previous step


fs.writeFile("sample.txt","File created using fs module in Node.js",(err)=>{
    if(err){
        console.log("Error in creating file");
    }
    else{
        console.log("File created successfully");
    }
});


// Appending content to a existing file

fs.appendFile("sample.txt","\nThis content is wrote using append file method",(err)=>{
    if(err){
        console.log("Error in appending file");
    }
    else{
        console.log("File appended successfully");
    }
});


// Reading a file 

fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error in reading file");
    }
    else{
        console.log(data);
    }
})