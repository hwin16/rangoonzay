const express = require('express');
const brandController = require('../controllers/admin/brandController');
const userController = require('../controllers/admin/userController'); 
const router = express.Router(); 

router.post('/brands/create', brandController.create_brand);
router.post('/create', userController.user_create); 

module.exports  = router;
