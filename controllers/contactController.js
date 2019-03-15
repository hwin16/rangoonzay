const _ = require('underscore');
const mongoose = require('mongoose');
const Contact = require('../models/contact'); 
const User = require('../models/user');
const PhoneNumber = require('../models/phonenumber');
const Address = require('../models/address');

exports.contact_create = async (req, res) => { 
    const phone_numbers = (await PhoneNumber.create(
        req.body.phone_numbers)).map(v => v.id);
    const addresses = (await Address.create(
        req.body.addresses)).map(v => v.id);
    const contact = new Contact(_.extend(req.body, { 
        addresses: addresses, 
        phone_numbers: phone_numbers,
        shop_id: mongoose.Types.ObjectId(req.params.shop_id)
    }));

    try { 
        const new_contact = await contact.save(); 
        res.json({ error: null, data: new_contact });
    }
    catch(err) { 
        res.json({ error: err});
    }
};

exports.contact_delete = async (req, res) => { 
    const _contact_id = mongoose.Types.ObjectId(
        req.params.contact_id);
    try { 
        const removed_contact = await Contact.findById(_contact_id); 
        removed_contact.remove();
        res.json({ error: null, data: removed_contact });
    }
    catch(err) { 
        res.json({ error: err });
    };
};

exports.contact_update = (req, res, next) => { 
    // TODO: never let you to update shop_id
};

exports.contact_list = async (req, res) => { 
    const _shop_id = mongoose.Types.ObjectId(
        req.params.shop_id);
    try { 
        const contacts = await Contact.find({ shop_id: _shop_id })
            .populate('phone_numbers')
            .populate('addresses')
            .exec();
        res.json({ error: null, data: contacts });
    }
    catch(err) { 
        res.json({ error: err });
    }
};

exports.contact_detail = async (req, res) => { 
    const _contact_id = mongoose.Types.ObjectId(
        req.params.contact_id);
    try { 
        const contact = await Contact.findById(_contact_id)
            .populate('phone_numbers')
            .populate('addresses')
            .exec(); 
        res.json({ error: null, data: contact });
    }
    catch (err) { 
        res.json({ error: err });
    }
};
