const mongoose = require('mongoose'); 

exports.convertToObjectId = (item_value) => { 
    return mongoose.Types.ObjectId(item_value);
}

exports.convertToObjectIdArray = (array_values) => { 
    return array_values.map(x => mongoose.Types.ObjectId(x)); 
}
