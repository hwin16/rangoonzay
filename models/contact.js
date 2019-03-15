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
    phone_numbers: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'PhoneNumber' 
    }],
    addresses: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Address' 
    }],
    facebook_name: String, 
    facebook_url: String
}); 

ContactSchema.pre('remove', function(next) { 
    PhoneNumber.deleteMany({ _id: { $in: this.phone_numbers }}).exec();
    Address.deleteMany({ _id: { $in: this.addresses }}).exec();
    next();
});

module.exports = mongoose.model('Contact', ContactSchema);
