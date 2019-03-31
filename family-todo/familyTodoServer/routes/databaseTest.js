var express = require('express');
var router = express.Router();
var dbApi=require('../dbApi')


router.get('/db', function(req, res, next) {

  res.render('databaseTest', { title: 'Db',data:dbApi.getData("name","porszivo") });
});

module.exports = router;
