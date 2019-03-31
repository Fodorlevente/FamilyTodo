var express = require('express');
var router = express.Router();
var dbApi=require('../dbApi')
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
