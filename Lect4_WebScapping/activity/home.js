const request = require("request");
const cheerio = require("cheerio");

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(url, function (error, response, body) {
    // fs.writeFileSync("./ans.html", body);
    parseBody(body);
});

function parseBody(html){
    let ch = cheerio.load(html);
    //selector a[data-hover="View All Results"]
    let tagForAns = ch('a[data-hover="View All Results"]').text();
    console.log(tagForAns)

}

