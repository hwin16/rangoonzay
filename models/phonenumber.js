const mongoose = require('mongoose'); 
const Contact = require('./contact');

const PhoneNumberSchema = new mongoose.Schema({
    phone_number: { type: Number, required: true }
});

PhoneNumberSchema.pre('remove', function(next) { 
    Contact.update(
        { phone_numbers: this._id }, 
        { $pull: { phone_numbers: this._id }}, 
        { multi: true }).exec(); 
    next();
});

module.exports = mongoose.model('PhoneNumber', PhoneNumberSchema);
