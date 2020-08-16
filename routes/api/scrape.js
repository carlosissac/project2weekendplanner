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
    let i = 0;
    for(i=0; i<20; i++) {
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

router.put('/plindex/:PLIndex', async (req, res) => {
    const plipath = path.join(__dirname, '../../helper/mercury', '/pageload.json');
    let writer = new Writer();
    const { error } = Joi.validate(req.params, sch.putPLIndexMethod());
    if(error) {
        res.status(400).send(error);
        return;
    } else {
        writer.fileClear(plipath);
        writer.fileAppend(plipath, req.params.PLIndex, 'PUT');
        res.json(req.params.PLIndex);
    }
});

router.delete('/plindex', async (req, res) => {
    const plipath = path.join(__dirname, '../../helper/mercury', '/pageload.json');
    let writer = new Writer();
    writer.fileClear(plipath);
    writer.fileAppend(plipath, String(0), 'PUT');
    res.json(0);
});

module.exports = router;