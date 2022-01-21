const express = require("express");
let router = express.Router();


router.get('/', (req, res) => 
    res.status(200).json({
        QRCode: "Homepage des QRCode"
    })
);

router.get('/test', (req, res) => 
    res.send('testQRcode')
);


module.exports = router;