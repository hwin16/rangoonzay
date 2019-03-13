let mongoose = require('mongoose');

let InventorySchema = new mongoose.Schema({
    seller_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
    color: String,
    quantity: Number,
    list_price: Number,
    img_urls: [{ type: String }],
    item_details: String
});

module.exports = mongoose.model('Inventory', InventorySchema);
