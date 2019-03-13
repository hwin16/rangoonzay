let mongoose = require('mongoose'); 

let CategorySchema = new mongoose.Schema({ 
    name: String, 
});

module.exports = mongoose.model('Category', CategorySchema);
