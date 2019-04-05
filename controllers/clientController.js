const util = require('../util/tools');

exports.home_page = (req, res, next) => { 
    res.render('home'); 
}

exports.product_detail = (req, res, next) => { 
    try { 
        const id = util.convertToObjectId(req.params.id);
        res.render('product_detail', { data: 'something' }); 
    }
    catch(err) { 
        next(err);
    }
}

exports.test_page = (req, res) => { 
    res.render('mInventory');
}
