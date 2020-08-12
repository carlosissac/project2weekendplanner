const express = require('express');
const router = express.Router();
let user = require('../../models/user');

router.get('/', (req, res) => {
    user.listUsersTable(data => {
        res.json(data);
    });
});

router.get('/:userID', (req, res) => {
    user.listSingleUserByUserID(req.params.userID, data => {
        res.json(data);
    });
});

router.post('/', (req, res) => {
    user.registerUser(req.body.userName, req.body.userEmail, req.body.userNickname, data => {
        let body = req.body;
        res.json({ userID: `${data.insertId}`, body });
    });
});

router.put('/:userID', (req, res) => {
    user.updateUser(req.params.userID, req.body.userName, req.body.userEmail, req.body.userNickname, data => {
        let body = req.body;
        res.json({ userID: `${req.params.userID}`, changedRows: `${data.changedRows}`, body});
    });
});


/////// Delete //////
/*
router.delete('/:userID', (req, res) => {
    user.updateUser(req.params.userID, req.body.userName, req.body.userEmail, req.body.userNickname, data => {
        let body = req.body;
        res.json({ userID: `${req.params.userID}`, changedRows: `${data.changedRows}`, body});
    });
});
*/

module.exports = router;