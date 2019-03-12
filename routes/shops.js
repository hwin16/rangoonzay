const express = require('express');
const userController = require('../controllers/userController'); 
const contactController = require('../controllers/contactController'); 
const transactionController = require('../controllers/transactionController'); 

const router = express.Router();

router.post('/:shop_id/contacts/create', contactController.contact_create);
router.post('/:shop_id/transactions/create', transactionController.transaction_create);

module.exports = router;
