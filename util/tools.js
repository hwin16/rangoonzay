const mongoose = require('mongoose'); 

exports.convertToObjectId = itemValue => { 
    try { 
        return mongoose.Types.ObjectId(itemValue);
    }
    catch(err) { 
        console.error('Cannot create ObjectId from given value');
        return null;
    }
};

exports.convertToObjectIdArray = array_values => { 
    try { 
        return array_values.map(x => mongoose.Types.ObjectId(x)); 
    }
    catch(err) {
        console.error('Cannot create ObjectIdArray from given values');
        return null;
    }
};
