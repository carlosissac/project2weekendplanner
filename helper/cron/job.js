const cron = require('node-cron');
const path = require('path');
const { Writer } = require('../../helper/writer/writer');
const { Scrape } = require('../../helper/cheerio/scrape');

const plipath = path.join(__dirname, '../../helper/mercury', '/pageload.json');
const spath = path.join(__dirname, '../../helper/mercury', '/safety.json');
//let count = 0;
let task = cron.schedule('*/1 * * * *', async () => {
    let scrape = new Scrape();
    let writer = new Writer();
    let safety = await writer.readFile(spath);
    let count = Number(await writer.readFile(plipath));
    let pli = Number(count);
    console.log(pli);
    if(!Number(safety)) {
        if(!Number(count)) {
            let i = 1;
            for(i=1; i<21; i++) {
                await Promise.all([scrape.scrapePage(i)]);
            }
            writer.fileClear(plipath);
            writer.fileAppend(plipath, String(1), 'DBLOAD');
        } else if ((Number(count) > 0) && (Number(count) < 100)) {
            let inc = Number(pli);
            inc++;
            await writer.fileClear(plipath);
            await writer.fileAppend(plipath, String(inc), 'POST Single');
            await Promise.all([scrape.scrapePage(inc)]);
        } else if (Number(count) > 99) {
            console.log('100 SCRAPES FROM SOURCE, CRON SAFETY ENABLED');
            writer.fileClear(spath);
            writer.fileAppend(spath, String(1), 'SAFETY');
            writer.fileClear(plipath);
            writer.fileAppend(plipath, String(0), 'SAFETY');
        }
    } else {
        console.log('CRON SAFETY ENABLED');
        writer.fileClear(plipath);
        writer.fileAppend(plipath, String(0), 'SAFETY');
    }
});

module.exports = task;