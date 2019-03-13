const express = require('express');
const userController = require('../controllers/userController'); 
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', userController.user_create); 

module.exports = router;
