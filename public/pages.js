const express = require('express');
const path = require('path');
const app = express();

app.get('/css/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/css', 'style.css'));
});

app.get('/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/js', 'index.js'));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

module.exports = app;