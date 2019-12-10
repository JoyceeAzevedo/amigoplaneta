const Usuarios = require('../models/Usuario');
// meus usuarios..
//const fs = require('fs');

exports.get = (req, res) => {
  Usuarios.find(function (err, usuarios) {
    if (err) res.status(500).send(err);
    res.status(200).send(usuarios);
  })
}

exports.getById = (req, res) => {
  const usuarioId = req.params.id

  Usuarios.findById(Id, function (err, usuario) {
    if (err) return res.status(500).send(err);

    if (!usuario) {
      return res.status(200).send({ message: `Infelizmente não localizamos a usuario de id: ${usuarioId}` });
    }

    res.status(200).send(usuario);
  })
}

exports.post = (req, res) => {
  console.log(req.body)
  let usuario = new Usuarios(req.body);
  console.log(usuario)

  usuario.save(function (err) {
    if (err) res.status(500).send(err);

    res.status(201).send(usuario);

  })
  }

exports.postPontos = (req, res) => {
  const usuarioId = req.params.id

  Usuarios.findById(alunaId, function (err, usuario) {
    if (err) return res.status(500).send(err.message);

    if (!usuario) {
      return res.status(200).send({ message: `Infelizmente não localizamos a usuario de id: ${usuarioId}` });
    }
    

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
