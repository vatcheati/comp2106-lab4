var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/vatche', function(req, res, next) {
  res.render('vatche', {title: 'Vatche'} );
});

router.get('/hovig', function(req, res, next) {
  res.render('hovig', {title: 'Hovig'} );
});

router.get('/aida', function(req, res, next) {
  res.render('aida', {title: 'Aida'} );
});
// make file public
module.exports = router;
