const express = require("express");
const app = express();
const path = require('path');

app.get('/', (req, res) => 
    res.status(200).sendFile(path.resolve(__dirname + "/../../frontOffice/html/map.html"))
);

module.exports = app;