const underscore = require('underscore');
const mongoose = require('mongoose');
const Contact = require('../models/contact');
const User = require('../models/user');

exports.contact_create = async (req, res) => {
    try {
        const contact_data = underscore.extend(req.body, {
            shop_id: req.params.shop_id
        });
        const new_contact = await new Contact(contact_data).save();
        res.json({ error: null, data: new_contact });
    }
    catch (err) {
        res.json({ error: err});
    }
};

exports.contact_delete = async (req, res) => {
    try {
        const contact_id = mongoose.Types.ObjectId(
            req.params.contact_id);
        const removed_contact = await Contact.findByIdAndDelete(contact_id);
        res.json({ error: null, data: removed_contact });
    }
    catch(err) {
        res.json({ error: err });
    };
};

exports.contact_update = async (req, res, next) => {
    // TODO: never let you to update shop_id
    try {
        const contact_id = mongoose.Types.ObjectId(
            req.params.contact_id);
        const shop_id = mongoose.Types.ObjectId(
            req.params.shop_id); 
        const updated_data = underscore.extend(
            req.body, 
            { shop_id: shop_id }
        );
        const updated_contact = await Contact.findByIdAndUpdate(
            contact_id, 
            updated_data
        ); 
        res.json({ error: null, data: updated_contact });
    }
    catch(err) {
        res.json({ error: err });
    }
};

exports.contact_list = async (req, res, next) => {
    res.render('contact');
};

exports.contact_detail = async (req, res) => {
    try {
        const contact_id = mongoose.Types.ObjectId(
            req.params.contact_id);
        const contact = await Contact.findById(contact_id)
            .exec();
        res.json({ error: null, data: contact });
    }
    catch (err) {
        res.json({ error: err });
    }
};

exports.api_contact_list = async(req, res, next) => { 
    try {
        const shop_id = mongoose.Types.ObjectId(
            req.params.shop_id);
        const contacts = await Contact.find({ 
                shop_id: shop_id 
            })
            .exec();
        console.log(contacts);
        res.json({ error: null, data: contacts });
    }
    catch(err) {
        console.log(err);
        res.json({ error: err });
    }
}
