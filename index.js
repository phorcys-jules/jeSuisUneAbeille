const express = require('express')
const router = express.Router();
const path = require('path')

const PORT = process.env.PORT || 8080;
const app = express()

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/src/frontOffice/html/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
