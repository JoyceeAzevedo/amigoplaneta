const mongoose = require ('mongoose');
//const {pontos} = require('./pontos')

const schemaUsuario = new mongoose.Schema({

    //email: { type: String, required: true },
    name:{type:String, required: true },
    cpf:{type:String, required: true },
    email:{type:String, required: true },
    senha:{type:String, required: true },
    quantidadepontos:{type:Number},
    qtdtem:{type:Number},
    cupons:[String]

});


module.exports = mongoose.model('Usuario',schemaUsuario)


