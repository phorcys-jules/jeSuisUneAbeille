var express = require('express');
var path = require('path');
const bcrypt = require('bcryptjs')
const sql = require("../db.js");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).sendFile(path.resolve(__dirname + "/../public/register.html"))
});

router.post('/', (req, res) => {
  let mail = req.body.mail
  let nom = req.body.nom
  let mdp = req.body.mdp
  let mdpConf = req.body.mdpConf

  sql.query('SELECT mail FROM utilisateur WHERE mail = ?', [mail], async (error, results) => {

      if (error) throw error

      if (results.length > 0) {
          res.send('Email déjà utilisé')
      }
      else if (mdp !== mdpConf) {
          res.send('Mots de passe différents')
      }

      let hashMdp = await bcrypt.hash(mdp, 8)
      console.log(hashMdp)

      sql.query('INSERT INTO utilisateur SET ?', { mail: mail, nom: nom, mdp: hashMdp }, (error, results) => {
          if (error) {
              throw error
          } else {
            res.status(200).sendFile(path.resolve(__dirname + "/../public/login.html"))
          }
      })

  })
})


module.exports = router;
