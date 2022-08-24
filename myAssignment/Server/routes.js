//import dependencies
const express = require('express');

//multer dependensies
const multer = require('multer');
const path = require('path');

//link schemas
const productSchema = require('./models/products');
const orderSchema = require('./models/orders');
const clientSchema = require('./models/clients');


const router = express();

//multer middleware
const productImageStore = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './productImages');
    },
    filename: (req, file, callBack) => {
        console.log(file);
        callBack(null, Date.now() + path.extname(file.originalname));
    }
})

//run middleware

const UploadProductImage = multer({storage: productImageStore})


//Add product
router.post('/api/addproduct', UploadProductImage.single('image') , (req, res) => {

    //multer stuff
    //destructure payload
    let data = JSON.parse(req.body.information);

    console.log(req.file.filename);

    // console.log(req.body);
    const newProduct = new productSchema({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productDiscount: req.body.productDiscount,
        productCollection: req.body.productCollection,
        productDescription: req.body.productDescription,
        productImg: req.body.productImg,
        productRating: req.body.productRating,
        veganFriendly: req.body.veganFriendly,
        availStock: {
            // req.body.availStock
        },
        image: req.file.filename
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
router.get('/api/readproducts', async(req, res) => {
    const findProducts = await productSchema.find();
    res.json(findProducts);
});

//delete product
//delete method
router.delete('/api/deleteproduct/:id', async(req,res) =>{
    const findProduct = await productSchema.remove({_id: req.params.id});
    res.json(findProduct); 

});

//oneProduct
router.get('/api/oneproduct/:id', async (req, res) =>{
    const findProduct = await productSchema.findById(req.params.id);
    res.json(findProduct);
});

//update product
router.patch('/api/updateproduct/:id', async (req,res) => {
    console.log(req.body);
    // let stock = +req.body.varOne + +req.body.varTwo + +req.body.varThree;
    const findProduct = await productSchema.updateOne(
        {_id:req.params.id},
        {$set: { 
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productDiscount: req.body.productDiscount,
            productCollection: req.body.productCollection,
            productDescription: req.body.productDescription,
            productImg: req.body.productImg,
            productRating: req.body.productRating,
            veganFriendly: req.body.veganFriendly,
            availStock: {
                // req.body.availStock
            }
            }
        }
    );
    res.json(findProduct);
});







module.exports = router;