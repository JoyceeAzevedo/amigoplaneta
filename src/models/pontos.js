const mongoose = require ('mongoose');
//projeto
const shemaUser = new mongoose.Schema({

codigo:{Type:String},
id:{Type:String},


});

module.exports = mongoose.model('Pontos',schemaPontos);