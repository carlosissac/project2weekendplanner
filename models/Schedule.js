const orm = require('../config/orm');


const Schedule = {
    all: function(cb) {
        orm.all('Schedule', function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create('Schedule', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('Schedule', objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('Schedule', condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (Controller.js).
module.exports = Schedule;