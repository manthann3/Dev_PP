const request = require("request");
const cheerio = require("cheerio");

const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

infoOfHighestWicketTaker = {};

request(url, function (error, response, body) {
  // fs.writeFileSync("./ans.html", body);
  parseBody(body);
});

function parseBody(html) {
  let name;
  let wickets = 0;
  let economy = 0;
  let ch = cheerio.load(html);

  //table[class="table bowler"]
  let bowlingTables = ch(".table.bowler");

  for (let i = 0; i < bowlingTables.length; i++) {
    bowlingTable = ch(bowlingTables[i]); // table for mi and dc seperately
    let allRowsOfTable = ch(bowlingTable).find("tbody tr");

    for (let j = 0; j < allRowsOfTable.length; j++) {
      let allDivsOfRow = ch(allRowsOfTable[j]).find("td");
      // console.log(ch(allRowsOfTable[j]).text());

      for (let k = 0; k < allDivsOfRow.length; k++) {
        // console.log(ch(allDivsOfRow[k]).text());

        if (ch(allDivsOfRow[4]).text() >= wickets) {
          wickets = ch(allDivsOfRow[4]).text();
          name = ch(allDivsOfRow[0]).text();
          economy = ch(allDivsOfRow[5]).text();
        }
      }
      //   console.log("\n");
    }
  }

  infoOfHighestWicketTaker.name = name;
  infoOfHighestWicketTaker.wickets = wickets;
  infoOfHighestWicketTaker.economy = economy;

  console.log(infoOfHighestWicketTaker);
}
