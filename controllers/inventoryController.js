const Inventory = require('../models/inventory');
const mongoose = require('mongoose');
const underscore = require('underscore');
const util = require('../util/tools');

exports.view_inventory = (req, res) =>  { 
    res.render('inventory');
}

exports.inventory_list = async (req, res) => {
    try {
        const data = await Inventory.find({
            seller_id: req.params.shop_id }).exec();
        res.json({ error: null, data: data });
    }
    catch(err) {
        res.json({ error: err });
    }
}

exports.inventroy_create = async (req, res) => {
    try {
        const data = await new Inventory(
            underscore.extend(req.body, {
                seller_id: util.convertToObjectId(req.params.shop_id)
            })).save();
        res.json({ error: null, data: data });
    }
    catch(err) {
        res.json({ error: err });
    }
}

exports.inventory_delete = async (req, res) => { 
    try { 
        const id = util.convertToObjectId(req.body.inventory_id); 
        const data = await Inventory.findByIdAndDelete(id);
        res.json({ error: null, data: data });
    }
    catch(err) { 
        res.json({ error: err });
    }
}

exports.inventory_update = async (req, res) => { 
    // TODO: will integrate after UI is done
    try { 
    }
    catch(err) { 
        res.json({ error: err });
    }
}
