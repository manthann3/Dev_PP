const fs = require("fs");

let pendingPromise = fs.promises.readFile("./text1.txt");

pendingPromise.then(function (data) {
  console.log(data+"");
});

pendingPromise.catch(function (err) {
  console.log(error);
});


console.log(pendingPromise);