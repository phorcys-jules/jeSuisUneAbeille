const express = require("express");
const app = express();

app.get('/', (req, res) => 
    res.status(200).json({
        Plantes: "Homepage des plantes"
    })
);

app.get('/rose', (req, res) => 
    res.send('Rose')
);

module.exports = app;