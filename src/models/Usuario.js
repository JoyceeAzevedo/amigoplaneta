const mongoose = require ('mongoose');

const shemaUser = new mongoose.Schema({

name:String,
email:String,
senha:String,
pontos:String,
statusUser:{
type: Boolean,
default: false,

},
dateCreate:{
 type: Date,
 default: Date.now

},


});

module.exports = mongoose.model('User',schemaUser);