const mongoose = require ('mongoose');
const { pontos } = require('./pontos');

const schemaUsuario = new mongoose.Schema({

name:{type:String},
cpf:{type:String},
email:{type:String},
senha:{type:String},
totalpontos: {type: Number}

});

module.exports = mongoose.model('Usuario',schemaUsuario);