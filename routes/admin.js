const express = require('express');
const brandController = require('../controllers/brandController');
const router = express.Router(); 

router.post('/brands/create', brandController.create_brand);

module.exports  = router;
