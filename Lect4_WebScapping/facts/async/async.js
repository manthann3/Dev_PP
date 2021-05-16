const { log } = require("console");
let fs = require("fs");

console.log("start");

// because this is an async function this will run after sync funtions see output 
let data = fs.readFile("./f1.txt", function(err,data){
console.log(data+"");
});


console.log("end");