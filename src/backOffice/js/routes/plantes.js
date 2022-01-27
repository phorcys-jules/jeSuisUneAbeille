const express = require("express");
const router = express.Router();

const sql = require("../../../../db");



//cors
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

// define the home page route
router.get('/', function(req, res) {
    res.send('Plante homepage');
});

router.get('/all', async function (req, res, next) {

    sql.query('SELECT * FROM plantes', (err, result) => {
        if (err) throw err
        res.send(result);
    });
});

router.get('/info', function(req, res) {
    let qr_code = req.query.qr_code;
    res.send('Plante info page');
});

router.post('/createUpdate', function(req, res) {
    let nom_latin = req.query.nom_latin;
    let nom_fr = req.query.nom_fr;
    let hauteur = req.query.hauteur;
    let nectar = req.query.nectar;
    let pollen = req.query.pollen;
    let miellat = req.query.miellat;
    let floraison = req.query.floraison;
    let couleur = req.query.couleur;
    let photo = req.query.photo;
    let localisation = req.query.localisation;
    sql.query('INSERT INTO plantes SET ?', { nom_latin: nom_latin, nom_fr : nom_fr,	hauteur : hauteur,
        	nectar : nectar, pollen : pollen, miellat : miellat, floraison : floraison,	couleur : couleur,	
            photo : photo,	localisation : localisation
    }, (error, results) => {
        if (error) {
            throw error
        } else {
            res.status(201).send(`${nom_latin} created`);
        }
    })
    
});

//TODO
router.post('/remove', function(req, res) {
    let id = req.query.id;

    res.status(2).send(`${id} deleted`);
});


module.exports = router;