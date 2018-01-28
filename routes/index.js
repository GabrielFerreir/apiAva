var express = require('express');
var router = express.Router();

const controllerTest = require('../controllers/teste');
const controllerAuth = require('../controllers/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', controllerAuth.verifyTokken, controllerTest.getData);
router.post('/login', controllerAuth.generateTokken);


module.exports = router;
