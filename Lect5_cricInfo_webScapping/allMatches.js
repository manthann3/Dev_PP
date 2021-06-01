const request = require("request");
const cheerio = require("cheerio");
const { contains } = require("cheerio/lib/static");
const getLink = require("./match");


function getAllMatches(link) {
  request(link, cb);
}

function cb(error, response, body) {
  parseBody(body);
}

function parseBody(html) {
  let ch = cheerio.load(html);

  //selector for scorecard :-  data-hover="Scorecard"

  let allATagsOfScoreBoard = ch('a[data-hover="Scorecard"]');
  console.log(allATagsOfScoreBoard.length +" no. of a Tags");
  for (let i = 0; i < allATagsOfScoreBoard.length; i++) {
    matchLink =
      "https://www.espncricinfo.com/" +
      ch(allATagsOfScoreBoard[i]).attr("href");

    // console.log(matchLink);
    getLink(matchLink);
  }
}

module.exports = getAllMatches;
