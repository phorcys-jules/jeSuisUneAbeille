/**DEPRECATED MICROSERVICE */

const express = require("express");
let plante = require('./models/Plante');
let qrCode = require('./models/qrcode');

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
    console.log(req.query);
});

//routes from Routers
app.use('/plante', plante);
app.use('/qrcode', qrCode);




//Launch the app
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

