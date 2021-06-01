let request = require("request");
let cheerio = require("cheerio");
let getAllMatches = require("./allMatches")

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(url, cb);

function cb(error, response, body) {
  parseBody(body);
}

function parseBody(html) {
  let ch = cheerio.load(html);
  // Selector of view all :- a[data-hover="View All Results"]
  let linkToAllMatchesAtSinglePage =
    "https://www.espncricinfo.com" +
    ch('a[data-hover="View All Results"]').attr("href");

    getAllMatches(linkToAllMatchesAtSinglePage);
}
