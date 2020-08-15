const Joi = require('joi');
const { EventJoiSchema } = require('../../helper/joi/event');
const express = require('express');
const router = express.Router();
let db = require('../../models');
const sch = new EventJoiSchema();

//FIND ALL EVENTS
router.get('/', (req, res) => {
    db.Event.findAll({raw: true}).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});

//ADD AN EVENT
router.post('/', (req, res) => {
    const { error } = Joi.validate(req.body, sch.postMethod());
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    } else {
        db.Event.create({
            raw: true,
            EventName: req.body.EventName,
            EventPlace: req.body.EventPlace,
            EventType: req.body.EventType,
            EventOrganizer: req.body.EventOrganizer,
            EventTimeStart: req.body.EventTimeStart,
            EventTimeEnd: req.body.EventTimeEnd
        }).then(ret => {
            const msg = {
                'msg': 'Post Successful',
                'EventID': ret.dataValues.EventName,
                'EventName': req.body.EventName,
                'EventPlace': req.body.EventPlace,
                'EventType': req.body.EventType,
                'EventOrganizer': req.body.EventOrganizer,
                'EventTimeStart': req.body.EventTimeStart,
                'EventTimeEnd': req.body.EventTimeEnd
            };
            res.json(msg);
            return;
        });
    }
});

router.put('/:EventID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.putMethod());
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
    const { error } = Joi.validate(req.params, sch.deleteMethod());
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