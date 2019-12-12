const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PontosSchema = new Schema({
  itemdescartado: { type: String, required: true },
  quantidadeponto: { type: String, required: true },
})

module.exports = mongoose.model('pontos',PontosSchema);