const fs = require("fs");

let data = JSON.parse(fs.readFileSync("./leaderboard.json"));
console.table(data);