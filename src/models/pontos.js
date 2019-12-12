const mongoose = require ('mongoose');

const SchemaPontos = new mongoose.Schema({


geradorpontos:{type:String}

});

module.exports = mongoose.model('pontos', SchemaPontos);