const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const { get } = require("request");

// let link = "https://github.com/twbs/ratchet/issues";
function getIssueLink(outerFolder, innerFolder, link) {
  request(link, function (error, response, body) {
    parseBody(outerFolder, innerFolder, body);
  });
}

function parseBody(outerFolder, innerFolder, html) {
  let ch = cheerio.load(html);
  //.d-block.d-md-none.position-absolute

  let issueNames = ch(".d-block.d-md-none.position-absolute");

  //   console.log(issueNames[24]);
  let objArray = [];
  for (let i = 0; i < 10; i++) {
    let issue = issueNames[i];
    let val = ch(issue).attr("aria-label");
    if (val ==  undefined) continue;
    let title = ch(issue).attr("aria-label").split(". ")[1];
    let hrefText = "https://github.com" + ch(issue).attr("href");
    let obj = {
      title: title,
      link: hrefText,
    };
    
    // fs.writeFileSync(path, JSON.stringify(obj))
    // console.log(path);
    objArray.push(obj);
  }
  let path = `./${outerFolder}/${innerFolder}/issues.json`;
  fs.writeFileSync(path, JSON.stringify(objArray))
}

module.exports = getIssueLink;
