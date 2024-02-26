var express = require('express');
const animali = require('./animali.json');

var app = express();
app.set('view engine', 'pug'); 
app.use(express.static(__dirname + '/public')); 
app.get('/', function (req, res) {

    res.render('index', {
        title: 'Homepage',
        /* animali: animali.animali */
    });
});

app.get('/cani', (req, res) => {

    res.render('cani', {
        title: 'I NOSTRI CANI',
        cani: animali.Cani
    });
});

app.get('/gatti', (req, res) => {

    res.render('gatti', {
        title: 'I NOSTRI GATTI',
        gatti: animali.Gatti
    });
});
app.get('/conigli', (req, res) => {

    res.render('conigli', {
        title: 'I NOSTRI CONIGLI',
        conigli: animali.Conigli
    });
});

app.get('/pesci', (req, res) => {

    res.render('pesci', {
        title: 'I NOSTRI PESCI',
        pesci: animali.Pesci
    });

});

app.get('/infoCo', (req, res) => {
    const coniglioId = req.query.id; 
    const coniglio = animali.Conigli.find((c) => c.id === parseInt(coniglioId)); 
    if (coniglio) {
        res.render('infoCo', {
            title: `Sui ${coniglio.nome}`,
            coniglio
        });
    } 
});

app.get('/infoG', (req, res) => {
    const gattoId = req.query.id; 
    const gatto = animali.Gatti.find((g) => g.id === parseInt(gattoId)); 
    if (gatto) {
        res.render('infoG', {
            title: `Sui ${gatto.nome}`,
            gatto
        });
    } 
});


app.get('/infoC', (req, res) => {
    const caneId = req.query.id; 
    const cane = animali.Cani.find((c) => c.id === parseInt(caneId)); 
    if (cane) {
        res.render('infoC', {
            title: `Sui ${cane.nome}`,
            cane
        });
    } 
});


app.get('/infoP', (req, res) => {
    const pesceId = req.query.id; 
    const pesce = animali.Pesci.find((p) => p.id === parseInt(pesceId)); 
    if (pesce) {
        res.render('infoP', {
            title: `Sui ${pesce.nome}`,
            pesce
        });
    } 
});



app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});

app.use('/immagini', express.static('/workspace/Tecnologie_5D/PUG_EXPRESS/views/immagini'));


