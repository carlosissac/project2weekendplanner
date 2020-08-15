const Joi = require('joi');
const { UserJoiSchema } = require('../../helper/joi/user');
const express = require('express');
const router = express.Router();
let db = require('../../models');
const sch = new UserJoiSchema();

//FIND ALL USERS
router.get('/', (req, res) => {
    db.User.findAll({raw: true}).then(ret => {
        res.json(ret);
    });
});

//FIND ONE USER
router.get('/:UserID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.getSingleMethod());
    if(error) {
        res.status(400).send(error);
        return;
    } else {
        db.User.findOne({
            raw: true,
            where: { UserID: req.params.UserID }
        }).then(ret => {
            if(!ret) {
                res.status(404).send('Update unsuccessful - No change in updated field or Record Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'User Found',
                    'user': ret
                };
                res.json(msg);
                return;
            }
        });
    }
});

//POST NEW USER
router.post('/', (req, res) => {
    const { error } = Joi.validate(req.body, sch.postMethod());
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    } else {
        db.User.create({
            raw: true,
            UserName: req.body.UserName,
            UserEmail: req.body.UserEmail,
            UserNickname: req.body.UserNickname
        }).then(ret => {
            const msg = {
                'msg': 'Post Successful',
                'UserID': ret.dataValues.UserID,
                'UserName': req.body.UserName,
                'UserEmail': req.body.UserEmail,
                'UserNickname': req.body.UserNickname
            };
            res.json(msg);
            return;
        });
    }
});

//UPDATE USER
router.put('/:UserID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.putMethod());
    if(error) {
        res.status(400).send(error);
        return;
    } else {
        db.User.update(
            req.body, {
                raw: true,
                where: { UserID: req.params.UserID }
            }).then(ret => {
            if(!Number(ret)) {
                res.status(404).send('Update unsuccessful - No change in updated field or Record Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'Update Successful',
                    'UserID': req.params.UserID,
                    'body': req.body
                };
                res.json(msg);
                return;
            }
        });
    }
});

//DELETE USER
router.delete('/:UserID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.deleteMethod());
    if(error) {
        res.status(400).send(error);
        return;
    } else {
        db.User.destroy({
            where: { UserID: req.params.UserID }
        }).then(ret => {
            if(!Number(ret)) {
                res.status(404).send('Delete unsuccessful - Record Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'Delete Successful',
                    'UserID': req.params.UserID
                };
                res.json(msg);
                return;
            }
        });
    }
});

module.exports = router;