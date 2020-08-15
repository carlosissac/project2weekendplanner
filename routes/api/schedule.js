const Joi = require('joi');
const { ScheduleJoiSchema } = require('../../helper/joi/schedule');
const express = require('express');
const router = express.Router();
let db = require('../../models');
const sch = new ScheduleJoiSchema();

router.get('/', (req, res) => {
    db.Schedule.findAll({raw: true}).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});

router.post('/', (req, res) => {
    const { error } = Joi.validate(req.body, sch.postMethod());
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    } else {
        db.Schedule.create({
            raw: true,
            UserID: req.body.UserID,
            EventID: req.body.EventID,
            ScheduleNote: req.body.ScheduleNote
        }).then(ret => {
            const msg = {
                'msg': 'Post Successful',
                'UserID': ret.dataValues.UserID,
                'EventID': ret.dataValues.EventID,
                'ScheduleNote': req.body.ScheduleNote
            };
            res.json(msg);
            return;
        });
    }
});

router.put('/:ScheduleID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.putMethod());
    if(error) {
        res.status(400).send(error);
        return;
    } else {
        db.Schedule.update(
            req.body, {
                raw: true,
                where: { ScheduleID: req.params.EventID }
            }).then(ret => {
            if(!Number(ret)) {
                res.status(404).send('Update unsuccessful - No change in updated field or Record Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'Update Successful',
                    'ScheduleID': req.params.ScheduleID,
                    'body': req.body
                };
                res.json(msg);
                return;
            }
        });
    }
});

router.delete('/:ScheduleID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.deleteMethod());
    if(error) {
        res.status(400).send(error);
        return;
    } else {
        db.Schedule.destroy({
            where: { ScheduleID: req.params.UserID }
        }).then(ret => {
            if(!Number(ret)) {
                res.status(404).send('Delete unsuccessful - Record Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'Delete Successful',
                    'ScheduleID': req.params.ScheduleID
                };
                res.json(msg);
                return;
            }
        });
    }
});

module.exports = router;