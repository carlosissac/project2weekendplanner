const connection = require('./connection');

const orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = 'SELECT * FROM User ';
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    }
};
module.exports = orm;