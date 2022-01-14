const express = require("express");
let plante = require('./models/Plante');

const app = express();
const PORT = 7456;
//Microservice Gérant le back office

/**
 * Routes available
 */
app.get('/', (req, res) => 
    res.send('Je suis une abeille homepage')
);

app.post('/', function(req, res) {
    console.log(req.params);
    console.log(req.body);
    res.status(201).json({
        firstname: "John",
        lastname: "Snow"
    })
});

//routes from Routers
app.use('/plante', plante);




//Launch the app
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

