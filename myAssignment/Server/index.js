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



