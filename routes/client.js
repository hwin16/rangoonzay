const express = require('express'); 
const clientController = require('../controllers/clientController');
const router = express.Router(); 

// fake
router.get('/', clientController.home_page); 
router.get('/i/:itemId', clientController.product_detail);

router.get('/test', clientController.test_page); 

module.exports = router;
