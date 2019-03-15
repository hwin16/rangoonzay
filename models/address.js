const mongoose = require('mongoose'); 

const AddressSchema = new mongoose.Schema({
    address: { type: String, required: true},
    city: String, 
    state: String,
    country: String
});

module.exports = mongoose.model('Address', AddressSchema);
