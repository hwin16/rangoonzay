const Transaction = require('../models/transaction'); 
const Contact = require('../models/contact');
const ContactController = require('./contactController');

exports.transaction_list = (req, res, next) => { 
    Transaction.find({ seller_id: req.params.id })
        .sort({ 'create_date': 'desc' })
        .populate('item_ids')
        .exec((err, list_transactions) => { 
            res.render('transaction_list', { transaction_list: list_transactions });
        });
};

exports.transaction_create = (req, res) => { 
    const _shop_id = mongoose.Types.ObjectId(req.params.shop_id);
    let balance = req.body.order_total - req.body.paid; 
    let transaction = new Transaction({ 
        voucher_id: req.body.voucher_id, 
        seller_id: req.body.shop_id,
        order_store: "online", 
        paid: req.body.paid,
        remaining: (balance > 0) ? balance : 0,
        order_total: req.body.order_total,
        transaction_status: req.body.transaction_status
    });

    transaction.save((err, transaction) => { 
        if (err) return next(err);
    });
};

exports.transaction_checkout = (req, res) => { 
    const contact_err = ContactController.contact_create(req, res, next); 
    const transaction_err = transaction_create(req, res, next); 
};
