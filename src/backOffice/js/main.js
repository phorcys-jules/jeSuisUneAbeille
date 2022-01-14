const express = require("express");
let plante = require('./models/Plante');

const app = express();
const PORT = 8321;

/**
 * Routes available
 */
app.get('/', (req, res) => 
    res.send('Je suis une abeille homepage')
);

app.post('/', function(req, res) {
    res.json({
        firstname: "John",
        lastname: "Snow"
    }, 201)
});

//routes from Routers
app.use('/plante', plante);




//Launch the app
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

