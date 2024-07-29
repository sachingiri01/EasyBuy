const mongoose = require('mongoose');

const cartschema = new mongoose.Schema({
    productid: {
        ref:"Products",
        type:String
    },
    userid: String,
    quantity: Number
}, { timestamps: true });

const cartmodel = mongoose.model('Cart', cartschema);
module.exports = cartmodel;
