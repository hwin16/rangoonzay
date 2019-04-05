const util = require('../../util/tools');

exports.home_page = (req, res, next) => {
    res.render('clients/home');
};

exports.product_detail = (req, res, next) => {
    res.render('clients/productDetail');
};
