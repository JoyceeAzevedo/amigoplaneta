const mongoose = require ('mongoose');

const schemaUsuario = new mongoose.Schema({

name:{type:String},
email:{type:String},
senha:{type:String},
pontos:{type:String},

});

module.exports = mongoose.model('Usuario',schemaUsuario);