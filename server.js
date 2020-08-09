const express = require('express');
const logger = require('./middleware/logger');
const pages = require('./routes/public/pages');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);
app.use(pages);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
