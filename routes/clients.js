const express = require('express'); 
const clientController = require('../controllers/clients/clientController');
const router = express.Router(); 

router.get('/', clientController.home_page); 
router.get('/i/:itemId', clientController.product_detail);

module.exports = router;
