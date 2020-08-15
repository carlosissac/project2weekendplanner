const request = require('request');
const cheerio = require('cheerio');

const Scraper = function() {
    this.ID = 'portlandMercuryScraper';
    this.EventCategory = [];
    this.EventName = [];
    this.EventDate = [];
    this.EventTime = [];
    this.EventPlace = [];
};

Scraper.prototype.cleanArray = function() {
    const array = this.EventCategory.filter( el => {
        return el !== '';
    });
    this.EventCategory = array;
};

Scraper.prototype.scrapePage = function(pageNumber) {
    request(`https://everout.com/portland-mercury/events/?page=${pageNumber}`, (error, response, html) => {
        if(!error && response.statusCode === 200) {
            const $ = cheerio.load(html);

            //Event Category
            $('.col-12').each((i, el) => {
                this.EventCategory[i] = $(el).find('.category-tag').text().replace(/\s\s+/g, '');
            });
            this.cleanArray();
            //console.log(this.EventCategory);
            console.log(this.EventCategory.length);

            //Event Name
            $('.event-details').each((i, el) => {
                this.EventName[i] = $(el).find('.title-link').text().replace(/\s\s+/g, '\n');
            });
            //console.log(this.EventName);
            console.log(this.EventName.length);

            //Event Day
            $('.event-details').each((i, el) => {
                this.EventDate[i] = $(el).find('.event-date').text().replace(/\s\s+/g, '');
            });
            //console.log(this.EventDate);
            console.log(this.EventDate.length);

            //Event Time
            $('.event-details').each((i, el) => {
                this.EventTime[i] = $(el).find('.event-time').text().replace(/\s\s+/g, '');
            });
            //console.log(this.EventTime);
            console.log(this.EventTime.length);

            //Event Place
            $('.location-column').each((i, el) => {
                this.EventPlace[i] = $(el).find('.location-name').text().replace(/\s\s+/g, '');
            });
            //console.log(this.EventPlace);
            console.log(this.EventPlace.length);
        }
    });
};

const scp = new Scraper();
scp.scrapePage(1);
scp.scrapePage(2);
scp.scrapePage(3);
scp.scrapePage(4);
scp.scrapePage(5);
scp.scrapePage(6);
