const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    price:{
        type: Number,
    },
    quantity:{
        type: Number,
        required: true
    },
    productColour:{
        type: String,
        required: true
    },
    size:{
        type: Number,
        required: true
    },
    clientEmail:{
        type: String,
    },
    Date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('orders', orderSchema);