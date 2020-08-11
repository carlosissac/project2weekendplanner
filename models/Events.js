const orm = require('../config/orm');


const Events = {
    all: function(cb) {
        orm.all('Events', function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create('Events', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('Events', objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('Events', condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (Controller.js).
module.exports = Events;
