var express = require('express');
var path = require('path');
const sql = require("../db.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).sendFile(path.resolve(__dirname + "/../public/leaderboard.html"))
});

router.get('/listUsers', (req, res, next) => {
  sql.query('SELECT bestScore, nom FROM utilisateur ORDER BY bestScore DESC', async (error, results) => {
        if (error) throw error

        res.json(results)
    })
})

module.exports = router;
