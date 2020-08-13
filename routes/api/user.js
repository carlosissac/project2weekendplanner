const express = require('express');
const router = express.Router();
let db = require('../../models');

router.get('/', (req, res) => {
    db.User.findAll({raw: true}).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});

router.get('/:UserID', (req, res) => {
    db.User.findOne({
        raw: true,
        where: { UserID: req.params.UserID }
    }).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});

router.post('/', (req, res) => {
    db.User.create({
        raw: true,
        UserName: req.body.UserName,
        UserEmail: req.body.UserEmail,
        UserNickname: req.body.UserNickname
    }).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});

router.put('/:UserID', (req, res) => {
    db.User.update(
        req.body, {
            raw: true,
            where: { UserID: req.params.UserID }
        }).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});

router.delete('/:UserID', (req, res) => {
    db.User.destroy({
        where: { UserID: req.params.UserID }
    }).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});

module.exports = router;