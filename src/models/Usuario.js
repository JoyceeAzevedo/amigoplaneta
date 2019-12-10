const mongoose = require ('mongoose');

const schemaUsuario = new mongoose.Schema({

name:{Type:String},
email:{Type:String},
senha:{Type:String},
pontos:{Type:String},

});

module.exports = mongoose.model('Usuario',schemaUsuario);