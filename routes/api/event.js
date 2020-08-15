const Joi = require('joi');
const { EventJoiSchema } = require('../../helper/joi/event');
const express = require('express');
const router = new express.Router();
let db = require('../../models');
const sch = new EventJoiSchema();

router.get('/', (req, res) => {
    db.Event.findAll({raw: true}).then(ret => {
        res.json(ret);
    });
});

router.get('/single/:EventID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.getSingleEventMethod());
    if(error) {
        res.status(400).send('EventID Invalid');
        return;
    } else {
        db.Event.findOne({
            raw: true,
            where: { EventID: req.params.EventID }
        }).then(ret => {
            if(!ret) {
                res.status(404).send('Event Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'Event Found',
                    'user': ret
                };
                res.json(msg);
                return;
            }
        });
    }
});

router.post('/', (req, res) => {
    const { error } = Joi.validate(req.body, sch.postEventMethod());
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    } else {
        db.Event.create({
            raw: true,
            EventCategory: req.body.EventCategory,
            EventName: req.body.EventName,
            EventDate: req.body.EventDate,
            EventTimeStart: req.body.EventTimeStart,
            EventTimeEnd: req.body.EventTimeEnd,
            EventPlace: req.body.EventPlace
        }).then(ret => {
            const msg = {
                'msg': 'Post Successful',
                'EventCategory': ret.dataValues.EventCategory,
                'EventName': req.body.EventName,
                'EventDate': req.body.EventDate,
                'EventTimeStart': req.body.EventTimeStart,
                'EventTimeEnd': req.body.EventTimeEnd,
                'EventPlace': req.body.EventPlace,
            };
            res.json(msg);
            return;
        });
    }
});

router.put('/:EventID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.putEventMethod());
    if(error) {
        res.status(400).send(error);
        return;
    } else {
        db.Event.update(
            req.body, {
                raw: true,
                where: { EventID: req.params.EventID }
            }).then(ret => {
            if(!Number(ret)) {
                res.status(404).send('Update unsuccessful - No change in updated field or Record Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'Update Successful',
                    'EventID': req.params.EventID,
                    'body': req.body
                };
                res.json(msg);
                return;
            }
        });
    }
});

router.delete('/:EventID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.deleteEventMethod());
    if(error) {
        res.status(400).send(error);
        return;
    } else {
        db.Event.destroy({
            where: { EventID: req.params.UserID }
        }).then(ret => {
            if(!Number(ret)) {
                res.status(404).send('Delete unsuccessful - Record Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'Delete Successful',
                    'EventID': req.params.EventID
                };
                res.json(msg);
                return;
            }
        });
    }
});

module.exports = router;