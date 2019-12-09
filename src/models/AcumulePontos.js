const mongoose = require ('mongoose');

const shemaUser = new mongoose.Schema({

codigo:String,
somar:Number,


});

module.exports = mongoose.model('User',schemaUser);