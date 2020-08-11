const orm = require('../config/orm');


const User = {
    all: function(cb) {
        orm.all('User', function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create('User', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('User', objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('User', condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (Controller.js).
module.exports = User;