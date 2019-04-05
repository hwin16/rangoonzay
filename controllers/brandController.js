const Brand = require('../models/brand'); 
const util = require('../util/tools');

exports.create_brand = async (req, res) => { 
    const record = await Brand.findOne({ name: req.body.name }).exec();
    const categoryId = util.convertToObjectId(req.body.categoryId);
    if (record === null && categoryId != null) { 
        const brand = await new Brand({
            name: req.body.name,
            category: categoryId
        }).save(); 
        res.json({ error: null, data: brand });
    }
    else { 
        const err = 'Cannot create brand name'; 
        console.error(err);
        res.json({ error: err });
    }
};

exports.update_brand = (req, res) => { 

};

exports.delete_brand = (req, res) => { 

};
