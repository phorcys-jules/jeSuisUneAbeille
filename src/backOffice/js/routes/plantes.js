const express = require("express");
const app = express();

// middleware that is specific to this router
app.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

// define the home page route
app.get('/', function(req, res) {
    res.send('Plante homepage');
});

app.get('/info', function(req, res) {
    let qr_code = req.query.qr_code;
    res.send('Plante homepage');
});

app.post('/createUpdate', function(req, res) {
    let nom_latin = req.query.nom_latin;
    let nom_fr = req.query.nom_fr;
    let hauteur = req.query.hauteur;
    let nectar = req.query.nectar;
    let pollen = req.query.pollen;
    let miellat = req.query.miellat;
    let floraison = req.query.floraison;
    let emplacement = req.query.emplacement;
    let photo = req.query.photo;
    let localisation = req.query.localisation;
    res.status(201).send(`${nom_latin} created`);
});

app.post('/remove', function(req, res) {
    let id = req.query.id;

    res.status(2).send(`${id} deleted`);
});

module.exports = app;