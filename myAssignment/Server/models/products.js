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
    image:{
        type: String,
        // required: true
    },
    productRating:{
        type: Number,
        required: true
    },
    availStock:[{
        size: { type: Number,required: true},
        variations: {            
         
        }
    }],
    Date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('products', productSchema);