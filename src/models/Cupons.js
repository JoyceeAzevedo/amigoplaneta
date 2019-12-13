const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CuponsSchema = new Schema({
 
 //cupons:[String],
 numcupom:{type:String},
 

})

module.exports = mongoose.model('cupons',CuponsSchema);