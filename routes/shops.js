const express = require('express');
const userController = require('../controllers/userController'); 
const contactController = require('../controllers/contactController'); 
const transactionController = require('../controllers/transactionController'); 

const router = express.Router();

// contacts 
router.get('/:shop_id/contacts/', contactController.contact_list);
router.get('/:shop_id/contacts/:contact_id', contactController.contact_detail);
router.post('/:shop_id/contacts/create', contactController.contact_create);
router.post('/:shop_id/contacts/:contact_id/update', contactController.contact_update);
router.post('/:shop_id/contacts/:contact_id/delete', contactController.contact_delete);

router.post('/:shop_id/transactions/create', transactionController.transaction_create);

router.get('/:shop_id/api/contacts', contactController.api_contact_list);

module.exports = router;
