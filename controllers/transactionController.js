const underscore = require('underscore');
const mongoose = require('mongoose');
const Transaction = require('../models/transaction'); 
const util = require('../util/tools');

exports.transaction_list = async (req, res, next) => { 
    try { 
        const shop_id = mongoose.Types.ObjectId(req.params.shop_id);
        const data = await Transaction.find({ seller_id: shop_id }).exec();
        console.log(data); 
        res.json({ data: data });
    }
    catch(err) { 
        console.log(err);
    }
};

exports.transaction_create = async (req, res) => { 
    try { 
        console.log(req.body);
        const transaction = underscore.extend(req.body, {  
            item_ids: util.convertToObjectIdArray(req.body.item_ids),
            seller_id: req.params.shop_id
        });
        const data = await new Transaction(transaction).save();
        res.json({ error: null, data: data });
    }
    catch(err) { 
        console.log(err);
    }
};

exports.transaction_checkout = (req, res) => { 

};
