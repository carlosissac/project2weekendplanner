const express = require('express');
const router = express.Router();
let db = require('../../models');

router.get('/', (req, res) => {
    db.Event.findAll({raw: true}).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});

/*router.get('/:EventID', (req, res) => {
    db.Event.findOne({
        raw: true,
        where: { EventID: req.params.EventID }
    }).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});*/

/*router.post('/', (req, res) => {
    db.Event.create({
        raw: true,
        EventName: req.body.EventName,
        EventEmail: req.body.EventEmail,
        EventNickname: req.body.EventNickname
    }).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});

router.put('/:EventID', (req, res) => {
    db.Event.update(
        req.body, {
            raw: true,
            where: { EventID: req.params.EventID }
        }).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});*/

/*router.delete('/:EventID', (req, res) => {
    db.User.destroy({
        where: { UserID: req.params.EventID }
    }).then(ret => {
        console.log(ret);
        res.json(ret);
    });
});*/

module.exports = router;