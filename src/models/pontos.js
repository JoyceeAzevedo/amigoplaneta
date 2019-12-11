const mongoose = require ('mongoose');

const SchemaUsuarioPontos = new mongoose.Schema({

totalpontos:{type:Number},
gerador:{type:String}

});

module.exports = mongoose.model('totalpontos',SchemaUsuarioPontos);