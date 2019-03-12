let constants = require('./constants');
let mongoose = require('mongoose'); 

let TransactionItemSchema = new mongoose.Schema({
    item_id: { type: mongoose.Types.ObjectId, ref: 'Inventory' },
    transaction_id: { type: mongoose.Types.ObjectId, ref: 'Transaction' },
    quantity_sold: Number,
    shipping_status: { type: String, enum: constants.shipping_status },
    discount_percentage: Number,
    discount_coupon: String
});

module.exports = mongoose.model('TransactionItem', TransactionItemSchema);
