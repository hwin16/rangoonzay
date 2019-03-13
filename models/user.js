const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date_of_birth: Date,
    phone_numbers: [{ type: Number }],
    addresses: [{
        address_1: String,
        address_2: String,
        city: String,
        state: String,
        country: String
    }],
    facebook_name: String,
    facebook_url: String
});

module.exports = mongoose.model('User', UserSchema);
