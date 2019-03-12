let mongoose = require('mongoose'); 

let BrandSchema = new mongoose.Schema({
    name: String, 
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Brand', BrandSchema);
