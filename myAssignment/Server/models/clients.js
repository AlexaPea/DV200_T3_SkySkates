const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    clientEmail:{
        type: String,
        required: true
    },
    clientPassword:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('clients', clientSchema);