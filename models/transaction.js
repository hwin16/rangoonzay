let constants = require('./constants');
let mongoose = require('mongoose');

let TransactionSchema = new mongoose.Schema({
    voucher_id: String,
    seller_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    buyer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    transaction_date: { type: Date, default: Date.now },
    order_store: { type: String, default: 'online' },
    item_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TransactionItem' }],
    discount_percentage: Number,
    discount_coupon: String,
    paid: Number,
    remaining: Number,
    order_total: Number,
    transaction_status: { type: String, enum: constants.transaction_status, default: 'open' }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
