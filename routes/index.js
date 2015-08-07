var express = require('express');
var router = express.Router();
// Add a reference to uploadManager and pass the router object
var uploadManager = require('./uploadManager')(router);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
