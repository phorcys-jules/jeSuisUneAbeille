const express = require('express')
const path = require('path')
const map = require('./src/backOffice/js/map');
const plantes = require('./src/backOffice/js/plantes');
const qrcode = require('./src/backOffice/js/qrcode');

const PORT = process.env.PORT || 8080;
const app = express()

const vuesDirectory = path.join(__dirname, './src/frontOffice/html')
app.use(express.static(vuesDirectory))

const assetsDirectory = path.join(__dirname, './Maquettes')
app.use(express.static(assetsDirectory))

const stylesDirectory = path.join(__dirname, './src/frontOffice/css')
app.use(express.static(stylesDirectory))

const scriptsDirectory = path.join(__dirname, './src/frontOffice/js')
app.use(express.static(scriptsDirectory))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/map', map);

app.use('/plantes', plantes);

app.use('/qrcode', qrcode);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
