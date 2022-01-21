const express = require("express");
const app = express();

app.get('/', (req, res) => 
    res.status(200).json({
        Map: "Homepage de la map"
    })
);

module.exports = app;