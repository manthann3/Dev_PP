const { log } = require("console");
let fs = require("fs");

console.log("start");

// because this is a sync function this will run normally top to down 
let data = fs.readFileSync("./f1.txt",'utf-8');
console.log(data);



console.log("end");