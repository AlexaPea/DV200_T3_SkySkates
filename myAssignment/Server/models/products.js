const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    productDiscount:{
        type: Number
    },
    productCollection:{
        type: String,
        required: true
    },
    productDescription:{
        type: String,
        required: true
    },
    productImg:{
        type: String,
        required: true
    },
    productRating:{
        type: Number,
        required: true
    },
    veganFriendly:{
        type: String
    },
    inStock:{
        type: Number,
        required: true
    },
    availStock:[{
        size: { type: Number,required: true},
        variations: { 
            pink: { type: Number, required: true},
            blue: { type: Number, required: true},
            green: { type: Number, required: true}
        }
    }],
    Date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('products', productSchema);