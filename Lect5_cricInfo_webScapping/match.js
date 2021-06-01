const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const { stringify } = require("querystring");
const { data } = require("cheerio/lib/api/attributes");

// let link =
//   "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
function getLink(link) {
  console.log(link);
  request(link, cb);
}
function cb(error, response, body) {
  parseBody(body);
}

function parseBody(html) {
  let ch = cheerio.load(html + "");

  let bothInnings = ch(".Collapsible");
  console.log("########################################");
  for (let i = 0; i < bothInnings.length; i++) {
    let teamName = ch(bothInnings[i]).find("h5").text();
    teamName = teamName.split("INNINGS");
    console.log(teamName[0]);

    let allTrs = ch(bothInnings[i]).find("tbody tr");

    for (let j = 0; j < allTrs.length; j++) {
      let allTds = ch(allTrs[j]).find("td");
      if (allTds.length > 1) {
        if (ch(allTds[0]).text() === "Extras") {
          break;
        }

        let name = ch(allTds[0]).text().trim();
        let runs = ch(allTds[2]).text();
        let balls = ch(allTds[3]).text();
        let fours = ch(allTds[5]).text();
        let sixes = ch(allTds[6]).text();
        let strikerate = ch(allTds[7]).text();

        processBatsman(
          teamName[0],
          name,
          runs,
          balls,
          fours,
          sixes,
          strikerate
        );
      }
    }
  }
}
//for making the IPL folder
// =================================

// function checkTeamFolder(teamName) {
//   let teamPath = `./IPL/${teamName}`;
//   return fs.existsSync(teamPath);
// }

// function checkBatsmanFile(teamName, batsmanName) {
//   // "./IPL/Mumbai Indians/Rohit Sharma.json";
//   let batsmanPath = `./IPL/${teamName}/${batsmanName}.json`;
//   return fs.existsSync(batsmanPath);
// }

// function updateBatsmanFile(
//   teamName,
//   batsmanName,
//   runs,
//   balls,
//   fours,
//   sixes,
//   strikeRate
// ) {
//   let batsmanPath = `./IPL/${teamName}/${batsmanName}.json`;
//   let stringifiedData = fs.readFileSync(batsmanPath);
//   let batsmanFile = JSON.parse(stringifiedData);
//   let inning = {
//     Runs: runs,
//     Balls: balls,
//     Fours: fours,
//     Sixes: sixes,
//     StrikeRate: strikeRate,
//   };
//   batsmanFile.push(inning);
//   fs.writeFileSync(batsmanPath, JSON.stringify(batsmanFile));
// }

// function createBatsmanFile(
//   teamName,
//   batsmanName,
//   runs,
//   balls,
//   fours,
//   sixes,
//   strikeRate
// ) {
//   // "./IPL/Mumbai Indians/Rohit Sharma.json"
//   let batsmanPath = `./IPL/${teamName}/${batsmanName}.json`;
//   let batsmanFile = [];
//   let inning = {
//     Runs: runs,
//     Balls: balls,
//     Fours: fours,
//     Sixes: sixes,
//     StrikeRate: strikeRate,
//   };
//   batsmanFile.push(inning);
//   let stringifiedData = JSON.stringify(batsmanFile); // [object] => [ {}]
//   fs.writeFileSync(batsmanPath, stringifiedData);
// }
// function createTeamFolder(teamName) {
//   let teamPath = `./IPL/${teamName}`;
//   fs.mkdirSync(teamPath);
// }

// function processBatsman(
//   teamName,
//   batsmanName,
//   runs,
//   balls,
//   fours,
//   sixes,
//   strikeRate
// ) {
//   let isTeam = checkTeamFolder(teamName);
//   if (isTeam) {
//     let isBatsman = checkBatsmanFile(teamName, batsmanName);
//     if (isBatsman) {
//       updateBatsmanFile(
//         teamName,
//         batsmanName,
//         runs,
//         balls,
//         fours,
//         sixes,
//         strikeRate
//       );
//     } else {
//       createBatsmanFile(
//         teamName,
//         batsmanName,
//         runs,
//         balls,
//         fours,
//         sixes,
//         strikeRate
//       );
//     }
//   } else {
//     createTeamFolder(teamName);
//     createBatsmanFile(
//       teamName,
//       batsmanName,
//       runs,
//       balls,
//       fours,
//       sixes,
//       strikeRate
//     );
//   }
// }

//steps for leaderboard
//1. check if file is present
//1a if not present create
// 1b. if present
//2a check  for player name and team
//if not present create
// if present add balls and runs etc

function processBatsman(
  teamName,
  batsmanName,
  runs,
  balls,
  fours,
  sixes,
  strikeRate
) {
  // let leaderboardData = JSON.parse(fs.readFileSync("./leaderboard.json"));
  runs = Number(runs);
  balls = Number(balls);
  fours = Number(fours);
  sixes = Number(sixes);
  
  obj = {
    teamName: teamName,
    batsmanName: batsmanName,
    runs: runs,
    balls: balls,
    fours: fours,
    sixes: sixes,
  };
  //check if exist
  if (!fs.existsSync("./leaderboard.json")) {
    let arr = [];
    arr.push(obj);
    fs.writeFileSync("leaderboard.json", JSON.stringify(arr));
  } else {
    ldata = JSON.parse(fs.readFileSync("./leaderboard.json"));

    for (let i = 0; i < ldata.length; i++) {
      if (
        ldata[i].teamName == teamName &&
        ldata[i].batsmanName == batsmanName
      ) {
        console.log(ldata.length);
        ldata[i].runs += runs;
        ldata[i].balls += balls;
        ldata[i].fours += fours;
        ldata[i].sixes += sixes;
        fs.writeFileSync("./leaderboard.json", JSON.stringify(ldata));
        return;
      }
    }
    ldata.push(obj);
    fs.writeFileSync("./leaderboard.json", JSON.stringify(ldata));
    return;
  }
}
module.exports = getLink;
