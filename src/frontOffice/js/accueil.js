const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.sendFile('../html/index.html', {root: __dirname});
});

router.get('/test', function(req, res){
    res.sendFile('../html/test.html', {root: __dirname});
});

