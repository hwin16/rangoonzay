const mongoose = require('mongoose');
const Contact = require('../models/contact'); 
const User = require('../models/user');

exports.contact_create = (req, res, next) => { 
    const contact = new Contact({ 
        name: req.body.name, 
        date_of_birth: req.body.date_of_birth,
        phone_numbers: [ req.body.phone_numbers ], 
        addresses: [ req.body.address ], 
        facebook_name: req.body.facebook_name, 
        facebook_url: req.body.facebook_url
    });

    const _id = mongoose.Types.ObjectId(req.params.shop_id);

    User.findById(_id)
        .then(user => { 
            contact.shop_id = user.id; 
            return contact.save(); 
        })
        .then(data => { 
            res.json({ data: contact });
        })
        .catch(err => { 
            res.json({ error: err });
        });
};
