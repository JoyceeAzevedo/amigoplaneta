const express = require ('express');
const mongoosse = require ('mongoose');
const app = express();

mongoosse.connect('mongodb+srv://admin:admin@projetofinal-pbwau.mongodb.net/test?retryWrites=true&w=majority',{
userNewURLParser: true,
useUnifiedTopology: true,
useCreateindex: true

}).then(() => {
    console.log('Conectado com o mongoDB')
}).catch((err) => {
    console.log('Houve um erro ao se conectar: '+err)
})


//app.get('/', (req, res)=>{
 //return res.send('Projeto Sucesso');

//});

app.use(express.json());

app.use(require('.routes'));

//interpretar no formato json

app.listen(3000,()=>{
console.log('Servidor Online');
});