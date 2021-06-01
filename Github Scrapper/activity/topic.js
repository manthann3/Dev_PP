const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const getIssueLink = require("./issues");

function getTopicLink(link) {
  // let link = "https://github.com/topics/html"
  let arr = link.split("/");
  let folderName = arr[arr.length - 1];
  // console.log(folderName);
  request(link, function (error, response, body) {
    parseBody(body, folderName);
  });
}

function parseBody(html, folderName) {
  const ch = cheerio.load(html);

  let topics = ch("h1");
  let topicArray = topics.text().split("\n");

  let names = [];
  let names1 = [];

  let count = 0;
  for (let i = 0; i < topicArray.length - 2; i++) {
    if (topicArray[i].includes("/")) {
      if (
        topicArray[i + 2].trim().length > 0 &&
        topicArray[i - 1].trim().length > 0
      )
        names.push(topicArray[i + 2].trim());
      names1.push(topicArray[i - 1].trim());
      count++;
    }
    if (count == 5) break;

    // console.log(topicArray);
  }
  // console.log(names);
  console.log(folderName);
  console.log("==================")
  links = [];
  for(let i=0; i<5;i++){
    //   console.log("Link:      https://github.com/"+names1[i]+"/"+names[i]+"/issues")
      links.push("https://github.com/"+names1[i]+"/"+names[i]+"/issues");
  }

  for (let i = 0; i < names.length; i++) {
    fs.mkdirSync(`./${folderName}/${names[i]}`);
    for(let j=0; j<5;j++){
        getIssueLink(folderName,names[i],links[j]);
    }
  }

  // console.log("==================")
}

module.exports = getTopicLink;
