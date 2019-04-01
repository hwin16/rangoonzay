const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    color: String,
    quantity: { 
        type: Number,
        default: 0
    },
    list_price: Number,
    img_urls: [{ type: String }],
    barcode: String,
    item_details: String
});

module.exports = mongoose.model('Inventory', InventorySchema);
