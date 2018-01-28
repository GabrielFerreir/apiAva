const express = require('express');
const router = express.Router();

const controllerUsers = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', controllerUsers.createUser );

module.exports = router;
