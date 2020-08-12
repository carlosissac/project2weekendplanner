const ormUsers = require('../config/ormUsers');

const User = {
    listUsersTable: cb => {
        ormUsers.listUsersTable(res => {
            return cb(res);
        });
    },
    listSingleUserByUserID: (userID, cb) => {
        ormUsers.listSingleUserByUserID(userID, res => {
            return cb(res);
        });
    },
    registerUser: (userName, userEmail, userNickname, cb) => {
        ormUsers.registerUser(userName, userEmail, userNickname, res => {
            return cb(res);
        });
    },
    updateUser: (userID, userName, userEmail, userNickname, cb) => {
        ormUsers.updateUser(userID, userName, userEmail, userNickname, res => {
            return cb(res);
        });
    },
};


module.exports = User;