const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
let getTopicLink = require("./topic");

const url = "https://github.com/topics";

request(url, function (error, response, body) {
  parseData(body);
});

function parseData(html) {
  // console.log(html);
  const ch = cheerio.load(html);
  // console.log(ch(".f3").text());

  let elements = ch(".f3");

  for (let i = 0; i < 3; i++) {
    let folderName = ch(elements[i]).text().trim();
    fs.mkdirSync(`${folderName}`);
    topicLink = "https://github.com/topics/" + folderName;
    getTopicLink(topicLink);
    console.log(folderName.trim() + " is made!");
  }
}
