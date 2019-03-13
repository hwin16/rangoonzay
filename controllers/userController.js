// TODO: DOB is needed
const User = require('../models/user'); 

exports.user_create = (req, res, next) => { 
    const user = new User({ 
        name: req.body.name, 
        date_of_birth: req.body.date_of_birth,
        phone_numbers: req.body.phone_number, 
        addresses: req.body.addresses, 
        facebook_name: req.body.facebook_name, 
        facebook_url: req.body.facebook_url
    });
    user.save((err, data) => { 
        if (err) return next(err); 
        res.json({ errors: err, data: data });
    });
};
