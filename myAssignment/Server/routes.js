//import dependencies
const express = require('express');

//multer dependensies
const multer = require('multer');
const path = require('path');

//link schemas
const productSchema = require('./models/products');
const orderSchema = require('./models/orders');
const clientSchema = require('./models/clients');

//user handling dependenxies
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

const UploadProductImage = multer({storage: productImageStore});


//Add product
router.post('/api/addproduct', UploadProductImage.single('image') , (req, res) => {

    //multer stuff
    //destructure payload
    let data = JSON.parse(req.body.information);

    console.log(req.file.filename);

    console.log(req.body);
    const newProduct = new productSchema({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productDiscount: req.body.productDiscount,
        productCollection: req.body.productCollection,
        productDescription: req.body.productDescription,
        image: req.file.filename,
        productRating: req.body.productRating,
        availStock: {
            // req.body.availStock
        },

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
// router.post('/api/addClient', (req, res) => {

//     const newProduct = new clientSchema({
//         clientEmail: req.body.clientEmail,
//         clientPassword: req.body.clientPassword
//     });

//     newProduct.save()
//     .then(item => {
//         res.json(item);
//     })
//     .catch(err => {
//         res.status(400).json({msg: "There was an error", err: err});
//     })

// });


//add order
router.post('/api/addorder', (req, res) => {

    const newOrder = new orderSchema({
        productName: req.body.productName,
        // productId: req.body.productId,
        price: +req.body.price,
        quantity: +req.body.quantity,
        productColour: req.body.productColour,
        clientEmail: req.body.clientEmail,
        size: +req.body.size
    });

    newOrder.save()
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

// read all orders
// the get method requires a asynchronous connection to the database
router.get('/api/readorders', async(req, res) => {
    const findOrders = await orderSchema.find();
    res.json(findOrders);
});

//delete product
//delete method
router.delete('/api/deleteproduct/:id', async(req,res) =>{
    const findProduct = await productSchema.remove({_id: req.params.id});
    res.json(findProduct); 

});

//delete order
//delete method
router.delete('/api/deleteorder/:id', async(req,res) =>{
    const findProduct = await orderSchema.remove({_id: req.params.id});
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


router.post('/api/addclient', (req, res) =>{

    const newUser = new clientSchema({
        username: req.body.username, 
        password: req.body.password 
    }); 

    newUser.save()
    .then(item => {
        res.json(item)
    })
    .catch(err => {
       res.status(400).json({msg:"There is an error", err}); 
    });
});

router.post('/api/loginuser', async (req,res) => {

    const findUser = await clientSchema.findOne({
        username: req.body.username
    });

    if(findUser){
        if(await bcrypt.compare(req.body.password, findUser.password)){
            const userToken = jwt.sign({
                username: req.body.username
            }, '883Xc7F@1dkK') //this is our secret key

            return res.json({status: "Ok", user: userToken});


        }else{
            res.json({user: false})
        }

    }else{
        res.json({msg: "User not found"})
    }

});


router.post('/api/verifytoken', async (req,res) =>{
    const token = req.body.token;
    // console.log(token);
    const decode = jwt.verify(token, '883Xc7F@1dkK');

    
    const findUser = await clientSchema.findOne({
        username: decode.username
    });

    if(findUser){
        res.json({status: "ok", verified: true})
    }else{
        res.json({status: "bad", verified: false})

    }
});








module.exports = router;