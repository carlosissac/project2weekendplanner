const cron = require('node-cron');
const path = require('path');
const { Writer } = require('../../helper/writer/writer');
const { Scrape } = require('../../helper/cheerio/scrape');


const plipath = path.join(__dirname, '../../helper/mercury', '/pageload.json');
let count = 0;
let safety = 0; // set this manually
let task = cron.schedule('*/2 * * * *', async () => {
    let writer = new Writer();
    let scrape = new Scrape();
    if(safety) {
        if(!count) {
            let i = 1;
            for(i=1; i<21; i++) {
                await Promise.all([scrape.scrapePage(i)]);
            }
            writer.fileClear(plipath);
            writer.fileAppend(plipath, String(i), 'DBLOAD');
        } else {
            let pli = await writer.readFile(plipath);
            let inc = Number(pli);
            inc++;
            await writer.fileClear(plipath);
            await writer.fileAppend(plipath, String(inc), 'POST Single');
            await Promise.all([scrape.scrapePage(inc)]);
        }
        count++;
    } else {
        console.log('CRONN TRIGGER SAFETY ON');
    }
});

module.exports = task;