const GeradorPontos = require('../models/pontos');

exports.post = (req, res) => {
    console.log(req.body)
    let GeradorPontos = new GeradorPontos(req.body);
    
  
    GeradorPontos.save(function (err) {
      if (err) res.status(500).send(err);
  
      res.status(201).send(pontos);
  
    })
    }
  
  exports.postPontos = (req, res) => {
    const usuarioId = req.params.id
  
    Pontos.findById(pontosId, function (err, usuario) {
      if (err) return res.status(500).send(err.message);
  
    }
    