const express = require("express");
let plante = require('./models/Plante');

const app = express();
const PORT = 7456;
//Microservice Gérant le back office

/**
 * Routes available
 */
app.get('/', (req, res) => 
    res.status(200).json({
        h1: "Je suis une abeille homepage"
    })
);

app.post('/', function(req, res) {
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
    console.log(req.query)
    res.status(201).send(`${nom_latin} created`)
});

//routes from Routers
app.use('/plante', plante);




//Launch the app
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

