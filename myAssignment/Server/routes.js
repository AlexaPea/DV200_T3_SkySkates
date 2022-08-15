//import dependencies
const express = require('express');
//link schemas
const productSchema = require('./models/products');
const orderSchema = require('./models/orders');
const clientSchema = require('./models/clients');


const router = express();


//Add product
router.post('/api/addproduct', (req, res) => {
    console.log(req.body.availStock[0].variations);
    const newProduct = new productSchema({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productDiscount: req.body.productDiscount,
        productCollection: req.body.productCollection,
        productDescription: req.body.productDescription,
        productImg: req.body.productImg,
        productRating: req.body.productRating,
        veganFriendly: req.body.veganFriendly,
        inStock: req.body.inStock,
        availStock: [{
                size: req.body.availStock.size,
                variations:{
                    pink: req.body.availStock.variations.pink,
                    blue: req.body.availStock.variations.blue,
                    green: req.body.availStock.variations.green,

                } 
        }]
    });

    newProduct.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was an error", err: err});
    })

});

//add client
router.post('/api/addClient', (req, res) => {

    const newProduct = new clientSchema({
        clientEmail: req.body.clientEmail,
        clientPassword: req.body.clientPassword
    });

    newProduct.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was an error", err: err});
    })

});


//add order
router.post('/api/addOrder', (req, res) => {

    const newProduct = new orderSchema({
        productName: req.body.productName,
        quantity: req.body.quantity,
        productColour: req.body.productColour,
        clientEmail: req.body.clientEmail,
        size: req.body.size
    });

    newProduct.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was an error", err: err});
    })

});

// read all products
// the get method requires a asynchronous connection to the database
// router.get('/api/readproducts', async(req, res) => {
//     const findProducts = await productSchema.find();
//     res.json(findProducts);
// });







module.exports = router;