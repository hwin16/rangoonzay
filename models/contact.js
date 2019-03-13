const mongoose = require('mongoose'); 

const ContactSchema = new mongoose.Schema({ 
    shop_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: String, 
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

module.exports = mongoose.model('Contact', ContactSchema);
