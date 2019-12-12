const Pontos = require('../models/pontos');

exports.get = (req, res) => {
  Pontos.find(function (err, usuarios) {
    if (err) res.status(500).send(err);
    res.status(200).send(pontos);
  })
}

exports.getById = (req, res) => {
  const pontosId = req.params.id

  Pontos.findById(Id, function (err, pontos) {
    if (err) return res.status(500).send(err);

    if (!pontos) {
      return res.status(200).send({ message: `Infelizmente não localizamos seus pontos: ${pontosId}` });
    }

    res.status(200).send(pontos);
  })
}

exports.post = (req, res) => {
  console.log(req.body)
  let pontos = new Pontos (req.body);
 
  usuario.save(function (err) {
    if (err) res.status(500).send(err);

    res.status(201).send(usuario);

  })
  }

exports.postPontos = (req, res) => {
  const usuarioId = req.params.id

  Usuarios.findById(pontosId, function (err, usuario) {
    if (err) return res.status(500).send(err.message);

    if (!usuario) {
      return res.status(200).send({ message: `Infelizmente você não tem pontos: ${pontosId}` });
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

exports.deletarPontos = (req, res) => {
  const idUsuario = req.params.id;

  Usuarios.findById(idpontos, function(err, pontos) {
    if (err) return res.status(500).send(err);

    if (!usuar) {
      return res.status(200).send({ message: `Infelizmente não localizamos a usuario de id: ${req.params.id}` })


    }})}
