const connection = require('./connection');

const ormUsers = {
    listUsersTable: (cb) => {
        var qs = 'SELECT * FROM User;';
        connection.query(qs, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    listSingleUserByUserID: (userID, cb) => {
        var qs = `SELECT * FROM User WHERE userID = ${userID};`;
        connection.query(qs, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    registerUser: (userName, userEmail, userNickname, cb) => {
        let qs1 = 'INSERT INTO User (username, userEmail, userNickname) ';
        let qs2 = `VALUES ('${userName}', '${userEmail}', '${userNickname}');`;
        let qs = qs1 + qs2;
        connection.query(qs, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateUser: (userID, userName, userEmail, userNickname, cb) => {
        let qs1 = 'UPDATE User ';
        let qs2 = 'SET';
        let qs3 = `WHERE userID = ${userID}`;
        let i = 0;

        if(userName === undefined) {
            userName = '';
        }
        if(userEmail === undefined) {
            userEmail = '';
        }
        if(userNickname === undefined) {
            userNickname = '';
        }

        while(i < 5){
            switch (i) {
            case 0:
                //userName
                if(userName !== '') {
                    qs2 += ` userName = '${userName}'`;
                }
                i++;
                break;
            case 1:
                //comma1
                if(userEmail !== '') {
                    qs2 += ',';
                }
                i++;
                break;
            case 2:
                //userEmail
                if(userEmail !== '') {
                    qs2 += ` userEmail = '${userEmail}'`;
                }
                i++;
                break;
            case 3:
                //comma2
                if(userNickname !== '') {
                    qs2 += ',';
                }
                i++;
                break;
            case 4:
                //userNickname
                if(userNickname !== '') {
                    qs2 += ` userNickname = '${userNickname}'`;
                }
                i++;
                break;
            default:
                console.log('NOT AN OPTION');
                break;
            }
        }
        qs2 += ' ';
        let qs = qs1 + qs2 + qs3 + ';';
        console.log(qs);
        connection.query(qs, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = ormUsers;