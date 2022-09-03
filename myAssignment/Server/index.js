//import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');

//import modules
const routes = require('./routes');

//access .env file
require('dotenv/config');

const app = express();
app.use(cors ({
    origin: 'http://localhost:3000'
}));

//images
app.use('/productImages', express.static("productImages"));

//middleware to use body parse function
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(routes);

//establish connection
mongoose.connect(process.env.DB_CONNECTION, (err)=>{
    if(err){
        console.log("There was an issue with connecting to Mongo:." + err);
    }else{
        console.log("Mongo DB Atlas Connection Established");
    }
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server started on port: ${PORT}`)});



/*Emailer*/
// const multiparty = require("multiparty");

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: "gmail",
    secureConnection: true, 
    auth:{
        user: process.env.DB_EMAIL,
        pass: process.env.DB_PASS
    },
    tls:{
        rejectUnauthorized:false
    }
})


// let mailOptions = {
//     from:  process.env.DB_EMAIL,
//     to: "alexapettitt14@gmail.com",
//     subject:"Welcome to SkyeSkates",
//     text: "Whoop Whoop! You are officially part of the team!"
// }

// transporter.sendMail(mailOptions, function(err, success){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("email sent!");
//     }


// })
