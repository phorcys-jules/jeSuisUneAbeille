var express = require('express');
var path = require('path');
const bcrypt = require('bcryptjs')
const sql = require("../db.js");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).sendFile(path.resolve(__dirname + "/../public/login.html"))
});

router.post('/', (req, res) => {

  let mail = req.body.mail
  let mdp = req.body.mdp

  sql.query('SELECT * FROM utilisateur WHERE mail = ?', [mail], (err, result) => {
    if (err) throw err

    if ((result.length) && (bcrypt.compareSync(mdp, result[0].mdp)) && (mail == result[0].mail)) {
      res.status(200).sendFile(path.resolve(__dirname + "/../public/game.html"))
    } else {
      res.send('Mauvais pseudo ou mot de passe')
    }
  })
})

module.exports = router;
