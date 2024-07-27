const mongoose = require('mongoose');

const cartschema = new mongoose.Schema({
    productid: String,
    userid: String,
    quantity: String
}, { timestamps: true });

const cartmodel = mongoose.model('Cart', cartschema);
module.exports = cartmodel;
