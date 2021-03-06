const Joi = require('joi');
const { ScrapeJoiSchema } = require('../../helper/joi/scrape');
const sch = new ScrapeJoiSchema();
const express = require('express');
const router = new express.Router();
const path = require('path');
const { Writer } = require('../../helper/writer/writer');
const { Scrape } = require('../../helper/cheerio/scrape');

router.get('/plindex', async (req, res) => {
    const plipath = path.join(__dirname, '../../helper/mercury', '/pageload.json');
    let writer = new Writer();
    let pli = await writer.readFile(plipath);
    res.json(pli);
});

router.post('/dbload', async (req, res) => {
    const plipath = path.join(__dirname, '../../helper/mercury', '/pageload.json');
    let writer = new Writer();
    let scrape = new Scrape();
    let i = 1;
    for(i=1; i<21; i++) {
        await Promise.all([scrape.scrapePage(i)]);
    }
    writer.fileClear(plipath);
    writer.fileAppend(plipath, String(i), 'DBLOAD');
    res.json(String(i));
});

router.post('/dbload/:PLIndex', async (req, res) => {
    const plipath = path.join(__dirname, '../../helper/mercury', '/pageload.json');
    let writer = new Writer();
    let scrape = new Scrape();
    await Promise.all([scrape.scrapePage(req.params.PLIndex)]);
    writer.fileClear(plipath);
    writer.fileAppend(plipath, String(req.params.PLIndex), 'DBLOAD');
    res.json(String(req.params.PLIndex));
});

router.post('/loadsingle', async (req, res) => {
    const plipath = path.join(__dirname, '../../helper/mercury', '/pageload.json');
    let writer = new Writer();
    let scrape = new Scrape();
    let pli = await writer.readFile(plipath);
    let inc = Number(pli);
    inc++;
    await writer.fileClear(plipath);
    await writer.fileAppend(plipath, String(inc), 'POST Single');
    await Promise.all([scrape.scrapePage(inc)]);
    res.json(String(inc));
});

router.post('/safety', async (req, res) => {
    const spath = path.join(__dirname, '../../helper/mercury', '/safety.json');
    console.log(spath);
    let writer = new Writer();
    let safetyInc = await writer.readFile(spath);
    let safetyOut = 0;
    if(safetyInc === '0'){
        safetyOut = 1; /// SAFETY ENABLED, NO SCRAPING
    }
    if(safetyInc === '1') {
        safetyOut = 0; ///SAFETY DISABLED, SCRAPING ON
    }
    console.log(safetyOut);
    await writer.fileClear(spath);
    await writer.fileAppend(spath, String(safetyOut), 'SAFETY');
    res.json(String(safetyOut));
});


router.put('/plindex/:PLIndex', async (req, res) => {
    const plipath = path.join(__dirname, '../../helper/mercury', '/pageload.json');
    let writer = new Writer();
    const { error } = Joi.validate(req.params, sch.putPLIndexMethod());
    if(error) {
        res.status(400).send(error);
        return;
    } else {
        console.log(Number(req.params.PLIndex));
        await writer.fileClear(plipath);
        await writer.fileAppend(plipath, req.params.PLIndex, 'PUT');
        res.json(req.params.PLIndex);
    }
});

router.delete('/plindex', async (req, res) => {
    const plipath = path.join(__dirname, '../../helper/mercury', '/pageload.json');
    let writer = new Writer();
    await writer.fileClear(plipath);
    console.log(0);
    await writer.fileAppend(plipath, String(0), 'PUT');
    res.json(0);
});

module.exports = router;