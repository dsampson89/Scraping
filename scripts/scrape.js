const request = require("request");
const cheerio = require("cheerio");

const scrape = function (cb){
    request("https://www.nytimes.com/", function(err,res, body){
        let $ = cheerio.load(body);

        let articles = [];

        $("css-8atqhb").each(function(i, element){

            let head = $(this).children("css-6p61n1").text().trim();
            let sum = $(this).children("css-ip5ca7").text().trim();

            if (head && sum){
                let headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                let sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                let dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat
                };

                articles.push(dataToAdd);
            }
        });
        cb(articles);
    });
};

module.exports = scrape;


