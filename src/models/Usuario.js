const mongoose = require ('mongoose');
const {pontos} = require('./pontos')

const schemaUsuario = new mongoose.Schema({

    //email: { type: String, required: true },
    name:{type:String, required: true },
    cpf:{type:String, required: true },
    email:{type:String, required: true },
    senha:{type:String, required: true },
    totl:{type:String},
    pontos: [pontos]


});

module.exports = mongoose.model('Usuario',schemaUsuario);


const SchemaUsuario = new Schema();
replyschema.add({
  usernamen: String,
  timestamp: { type: Date, default: Date.now },
  body: String,
  replies: [replySchema]
});
