const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const path = require ("path")
const app = express()

//String de conexão com o mongodb
//porta padrão do mongo: 27017
//banco de dados utilizado: reprograma

mongoose.connect("mongodb+srv://admin:admin@cluster0-xfild.mongodb.net/projetolivre",  { useNewUrlParser: true });
//mongoose.connect("mongodb://localhost:27017/projetolivre",  { useNewUrlParser: true });

//representação da conexão com o banco de dados 
let db = mongoose.connection;

//após a conexão, caso ocorra algum erro, será logado o erro
db.on("error", console.log.bind(console, "connection error:"))

//uma vez que a conexão esteja aberta, será exebida essa mensagem
db.once("open", function (){
  console.log("conexão feita com sucesso.")
})

//rotas
const index = require("./routes/index")
const usuario = require("./routes/usuarioRoutes")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json());

app.use("/", index)
app.use("/usuario", usuario)
//app.use("/pontos", pontos)

app.use(express.static('doc'))
app.get('/api-doc',(req,res)=>{
res.sendFile(path.join(__dirname + '/doc/index.html'));

})

module.exports = app

