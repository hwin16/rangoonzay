const mongoose = require('mongoose'); 
const PhoneNumber = require('./phonenumber'); 
const Address = require('./address');

const ContactSchema = new mongoose.Schema({ 
    shop_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    name: String, 
    date_of_birth: Date, 
    phone_number1: Number,
    address1: String,
    city: String, 
    state: String, 
    country: String,
    facebook_name: String, 
    facebook_url: String
}); 

module.exports = mongoose.model('Contact', ContactSchema);
