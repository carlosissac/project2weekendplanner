var express = require('express');
const logger = require('./middleware/logger');
const pages = require('./routes/public/pages');

var app = express();
var PORT = process.env.PORT || 3000;

var db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(logger);
app.use('/api/user', require('./routes/api/user'));
app.use('/api/event', require('./routes/api/event'));
app.use('/api/schedule', require('./routes/api/schedule'));
app.use(pages);

db
    .sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true })
    .then(() => {
        db
            .sequelize.sync({ force: false })
            .then(() => {
                app.listen(PORT, () => {
                    console.log(`App listening on: http://localhost:${PORT}`);
                });
            });
    });