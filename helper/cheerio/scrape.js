const request = require('request');
const cheerio = require('cheerio');
let db = require('../../models');

const Scrape = function() {
    this.ID = 'portlandMercuryScrape';
    this.EventCategory = [];
    this.EventName = [];
    this.EventDate = [];
    this.EventTimeStart = [];
    this.EventPlace = [];
};

Scrape.prototype.storeDB = async function(array) {
    await array.forEach(async body => {
        db.Event.create({
            raw: true,
            EventCategory: body.EventCategory,
            EventName: body.EventName,
            EventDate: body.EventDate,
            EventTimeStart: body.EventTimeStart,
            EventTimeEnd: '',
            EventPlace: body.EventPlace
        });
    });
};

Scrape.prototype.createBody = async function() {
    let i = 0;
    const array = [];
    this.EventCategory.forEach(async ec => {
        body = {
            'EventCategory': ec,
            'EventName': this.EventName[i],
            'EventDate': this.EventDate[i],
            'EventTimeStart': this.EventTimeStart[i],
            'EventTimeEnd': '',
            'EventPlace': this.EventPlace[i]
        };
        i++;
        array.push(body);
    });
    await this.storeDB(array);
};

Scrape.prototype.cleanArray = function() {
    const array = this.EventCategory.filter( el => {
        return el !== '';
    });
    this.EventCategory = array;
};

Scrape.prototype.scrapePage = async function(pageNumber) {
    await request(`https://everout.com/portland-mercury/events/?page=${pageNumber}`, async (error, response, html) => {
        if(!error && response.statusCode === 200) {
            const $ = cheerio.load(html);

            //Event Category
            await $('.col-12').each((i, el) => {
                this.EventCategory[i] = $(el).find('.category-tag').text().replace(/\s\s+/g, '');
            });
            this.cleanArray();
            //console.log(this.EventCategory);
            //console.log(this.EventCategory.length);

            //Event Name
            await $('.event-details').each((i, el) => {
                this.EventName[i] = $(el).find('.title-link').text().replace(/\s\s+/g, '\n');
            });
            //console.log(this.EventName);
            //console.log(this.EventName.length);

            //Event Date
            await $('.event-details').each((i, el) => {
                this.EventDate[i] = $(el).find('.event-date').text().replace(/\s\s+/g, '');
            });
            //console.log(this.EventDate);
            //console.log(this.EventDate.length);

            //Event Time Start
            await $('.event-details').each((i, el) => {
                this.EventTimeStart[i] = $(el).find('.event-time').text().replace(/\s\s+/g, '');
            });
            //console.log(this.EventTimeStart);
            //console.log(this.EventTimeStart.length);

            //Event Place
            await $('.location-column').each((i, el) => {
                this.EventPlace[i] = $(el).find('.location-name').text().replace(/\s\s+/g, '');
            });
            //console.log(this.EventPlace);
            //console.log(this.EventPlace.length);

            this.createBody();
        }
    });
};

module.exports = { Scrape };