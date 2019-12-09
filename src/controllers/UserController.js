const User = require('...model/User');
// // module.exports = {
// //     async consult(req,res){
 
// //     const users = await User.find({}).sort('dateCreate'); 

// //           return res.json (users);

// //           //retornando no formato json
// //     },

// //     async insert (req, res){
// //         const users = await User.create(req.body);
// //     }
// // };

const Usuarios = require('../model/usuarios');

const fs = require('fs');

exports.get = (req, res) => {
  Usuarios.find(function (err, usuarios) {
    if (err) res.status(500).send(err);
    res.status(200).send(usuarios);
  })
}

exports.getById = (req, res) => {
  const alunaId = req.params.id

  Usuarios.findById(alunaId, function (err, usuario) {
    if (err) return res.status(500).send(err);

    if (!usuario) {
      return res.status(200).send({ message: `Infelizmente não localizamos a usuario de id: ${alunaId}` });
    }

    res.status(200).send(usuario);
  })
}

exports.getBooks = (req, res) => {
  const id = req.params.id

  Usuarios.findById(id, function(err, usuario){

    if (err) return res.status(500).send(err)

    if(!usuario){
      return res.status(200).send({ message: `Infelizmente não localizamos a usuario de id: ${req.params.id}` })
    }
    const livrosAluna = usuario.livros
    const livrosLidos = livrosAluna.filter(livro => livro.leu == true)
    const tituloLivros = livrosLidos.map(livro => livro.titulo)

    res.status(200).send(tituloLivros);

  })
}

exports.getSp = (req, res) => {

  Usuarios.find(function (err, usuarios) {
    if (err) res.status(500).send(err)

    const nasceuSp = usuarios.filter(usuario => usuario.nasceuEmSp === "true");
    const meninasSp = nasceuSp.map(usuario => usuario.nome)

    res.status(200).send(meninasSp)
  })
}

exports.getAge = (req, res) => {
  const id = req.params.id
  Usuarios.findById(req.params.id, function (err, usuario) {
  
    if (err) return res.status(500).send(err)

    if (!usuario) {
      return res.status(200).send({ message: `Infelizmente não localizamos a usuario de id: ${req.params.id}` });
    }

    const dataNasc = usuario.dateOfBirth
    const arrData = dataNasc.split("/")
    const dia = arrData[0]
    const mes = arrData[1]
    const ano = arrData[2]
    const idade = calcularIdade(ano, mes, dia)
    res.status(200).send({ idade })

  })
}

function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
  const now = new Date()
  const anoAtual = now.getFullYear()
  const mesAtual = now.getMonth() + 1
  const hoje = now.getDate()

  let idade = anoAtual - anoDeNasc

  if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
    idade -= 1
  }
  return idade
}

exports.post = (req, res) => {
  let usuario = new Usuarios(req.body);

  usuario.save(function (err) {
    if (err) res.status(500).send(err);

    res.status(201).send(usuario);

  })
  }

exports.postBooks = (req, res) => {
  const alunaId = req.params.id

  Usuarios.findById(alunaId, function (err, usuario) {
    if (err) return res.status(500).send(err.message);

    if (!usuario) {
      return res.status(200).send({ message: `Infelizmente não localizamos a usuario de id: ${alunaId}` });
    }
    const livro = req.body;
    (usuario.livros).push(livro);

    usuario.save(function (err) {
      if (err) res.status(500).send(err);
      res.status(201).send(usuario);
    })

  });

}

exports.update = (req, res) => {  
  Usuarios.update(
    { _id: req.params.id },
    { $set: req.body },
    { upsert: true },
    function (err) {
      if (err) return res.status(500).send({ message: err });
      res.status(200).send({ message: "Atualizado com sucesso!" });
    })
}

exports.deletarAluna = (req, res) => {
  const idAluna = req.params.id;

  Usuarios.findById(idAluna, function(err, usuario) {
    if (err) return res.status(500).send(err);

    if (!usuario) {
      return res.status(200).send({ message: `Infelizmente não localizamos a usuario de id: ${req.params.id}` });
    }

    usuario.remove(function (err){
      if (!err) {
        res.status(200).send({ message: 'Aluna removida com sucesso...' });
      } 
    })


  })
}
