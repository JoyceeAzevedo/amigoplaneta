const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CuponsSchema = new Schema({
 
 cupons:[String],
 qtdtem:{type:Number}

})

module.exports = mongoose.model('cupons',CuponsSchema);