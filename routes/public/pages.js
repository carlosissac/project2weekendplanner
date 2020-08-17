const express = require('express');
const path = require('path');
const app = express();

app.get('/js/schedule.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/js', 'schedule.js'));
});

app.get('/schedule', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public', 'schedule.html'));
});

app.get('/js/event.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/js', 'event.js'));
});

app.get('/css/event.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/css', 'event.css'));
});

app.get('/event', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public', 'event.html'));
});

app.get('/js/register.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/js', 'register.js'));
});

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public', 'register.html'));
});

app.get('/css/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/css', 'style.css'));
});

app.get('/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/js', 'index.js'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

module.exports = app;