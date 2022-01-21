const express = require('express')
const path = require('path');
const bcrypt = require('bcryptjs')
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
    res.sendFile(__dirname + "/src/frontOffice/html/index.html");
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/src/frontOffice/html/login.html")
})

app.post('/login', (req, res) => {

    let pseudo = req.body.pseudo
    let mdp = req.body.mdp

    sql.query('SELECT * FROM users WHERE pseudo = ?', [pseudo], (err, result) => {
        if (err) throw err

        if ((result.length) && (bcrypt.compareSync(mdp, result[0].mdp)) && (pseudo == result[0].pseudo)) {
            res.send('Connecté')
        } else {
            res.send('Mauvais pseudo ou mot de passe')
        }
    })
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/src/frontOffice/html/register.html')
})

app.post('/register', (req, res) => {
    let pseudo = req.body.pseudo
    let mdp = req.body.mdp
    let mdpConf = req.body.mdpConf

    sql.query('SELECT pseudo FROM # WHERE pseudo = ?', [pseudo], async (error, results) => {

        if (error) throw error

        if (results.length > 0) {
            res.send('Pseudo déjà utilisé')
        }
        else if (mdp !== mdpConf) {
            res.send('Mots de passe différents')
        }

        let hashMdp = await bcrypt.hash(mdp, 8)
        console.log(hashMdp)

        sql.query('INSERT INTO # SET ?', { pseudo: pseudo, nom: nom, prenom: prenom, mdp: hashMdp }, (error, results) => {
            if (error) {
                throw error
            } else {
                res.send('Enregistré')
            }
        })

    })
})

app.use('/map', map);

app.use('/plantes', plantes);

app.use('/qrcode', qrcode);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
