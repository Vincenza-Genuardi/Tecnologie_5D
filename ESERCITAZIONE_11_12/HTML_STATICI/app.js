var express = require('express');
var app = express();
const path = require('path');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/cani', function (req, res) {
    res.sendFile(path.join(__dirname, 'cani.html'));
});
app.get('/gatti', function (req, res) {
    res.sendFile(path.join(__dirname, 'gatti.html'));
});
app.get('/conigli', function (req, res) {
    res.sendFile(path.join(__dirname, 'conigli.html'));
});

app.get('/pesci', function (req, res) {
    res.sendFile(path.join(__dirname, 'pesci.html'));
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
