var express = require('express');
const logger = require('./middleware/logger');
const pages = require('./routes/public/pages');
const user = require('./routes/api/user');
const event = require('./routes/api/event');
const schedule = require('./routes/api/schedule');

var app = express();
var PORT = process.env.PORT || 3000;

var db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger);

app.use('/api/user', user);
app.use('/api/event', event);
app.use('/api/schedule', schedule);


app.use(pages);

//HEROKKU VERSION
/*db.sequelize.sync({force:true}).then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
  });
});*/


//DEV VERSIOM
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