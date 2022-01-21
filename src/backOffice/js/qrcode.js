const express = require("express");
const app = express();


app.get('/', (req, res) => 
    res.status(200).json({
        QRCode: "Homepage des QRCode"
    })
);

app.get('/test', (req, res) => 
    res.send('testQRcode')
);


module.exports = app;