let cheerio = require("cheerio");
let fs = require("fs");

let htmlKaData = fs.readFileSync("./index.html");
// console.log(htmlKaData+"");

let ch = cheerio.load(htmlKaData);          //in obj form html cheerio mei aa gya 
let pTag = ch("p");                         // will return obj

console.log(ch(pTag["0"]).text());