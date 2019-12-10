const mongoose = require ('mongoose');
//agora vai!!!
const shemaUser = new mongoose.Schema({

codigo:{Type:String},
id:{Type:String},


});

module.exports = mongoose.model('Pontos',schemaPontos);