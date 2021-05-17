const request = require("request");
const cheerio = require("cheerio");

const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary?";

request(url, function (error, response, body) {
  // fs.writeFileSync("./ans.html", body);
  parseBody(body);
});

function parseBody(html) {
  let ch = cheerio.load(html);

    //commentary for last ball
  let tagForAnsObj = ch('div[class="match-comment-long-text"]');
  let ans = ch(tagForAnsObj[0]).text();

  // last 6 ball commentary

  for (let i = 0; i < 1; i++) {
    let ans = ch(tagForAnsObj[i]).text();
    console.log(i + 1 + ". " + ans);
    console.log("\n");
  }
}

