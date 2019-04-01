const express = require('express');
const userController = require('../controllers/userController'); 
const contactController = require('../controllers/contactController'); 
const transactionController = require('../controllers/transactionController'); 
const inventoryController = require('../controllers/inventoryController'); 

const router = express.Router();

// contacts 
router.get('/:shop_id/contacts/', contactController.contact_list);
router.get('/:shop_id/contacts/:contact_id', contactController.contact_detail);
router.post('/:shop_id/contacts/create', contactController.contact_create);
router.post('/:shop_id/contacts/:contact_id/update', contactController.contact_update);
router.post('/:shop_id/contacts/:contact_id/delete', contactController.contact_delete);

router.get('/:shop_id/api/contacts', contactController.api_contact_list);

// transactions
router.get('/:shop_id/transactions', transactionController.transaction_list);
router.post('/:shop_id/transactions/create', transactionController.transaction_create);

// inventory
router.get('/:shop_id/inventories', inventoryController.view_inventory); 
router.get('/:shop_id/api/inventories', inventoryController.inventory_list); 
router.post('/:shop_id/api/inventories/create', inventoryController.inventroy_create); 


module.exports = router;
