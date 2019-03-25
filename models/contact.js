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
    phone_number_1: String,
    phone_number_2: String,
    address_1: String,
    address_2: String,
    city: String, 
    state: String,
    facebook_name: String, 
    facebook_url: String
}, { 
    toObject: { 
        getters: true
    }
}); 

ContactSchema.pre('remove', function(next) { 
    PhoneNumber.deleteMany({ _id: { $in: this.phone_numbers }}).exec();
    Address.deleteMany({ _id: { $in: this.addresses }}).exec();
    next();
});

module.exports = mongoose.model('Contact', ContactSchema);
