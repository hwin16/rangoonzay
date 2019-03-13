const express = require('express');
const userController = require('../controllers/userController'); 
const contactController = require('../controllers/contactController'); 
const transactionController = require('../controllers/transactionController'); 

const router = express.Router();

router.post('/:shop_id/contacts/create', contactController.contact_create);
router.delete('/:shop_id/contacts/:contact_id/delete', contactController.contact_delete);
router.put('/:shop_id/contacts/:contact_id/update', contactController.contact_update);
router.post('/:shop_id/transactions/create', transactionController.transaction_create);

module.exports = router;
