const Cupons = require('../models/Cupons');
const Usuarios = require('../models/Usuario')




exports.Gerarcupons = (req, res) => {
  let numcumpom = Math.floor(Math.random() * 100);
  let cupom = {numcupom: numcumpom.toString()}
  let Cupom = new Cupons(cupom);
  Cupom.save()


  //subindo no git
  const user = req.params.id;
  
    Usuarios.update(
      { _id: user },
      { $set: {cupons: numcumpom.toString()} },
      { upsert: true },
      function (err) {
        if (err) return res.status(500).send({ message: err });
        res.status(200).send({ message: "Atualizado com sucesso!" });
      })
  }





const getAll = (request, response) => {
  treinadoresModel.find((error, treinadores) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(treinadores)
  })
}


const getById = (request, response) => {
  const id = request.params.id

  return pontos.findById(id, (error, pontos) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (pontos) {
      return response.status(200).send(pontos)
    }

    return response.status(404).send('Você não tem pontos.')
  })
}

const add = (request, response) => {
  const pontos = new Usuariopontos(request.body)

  pontos.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(pontos)
  })
}

const remove = (request, response) => {
  const id = request.params.id

  pontos.findByIdAndDelete(id, (error, pontos) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (pontos) {
      return response.status(200).send(id)
    }

    return response.status(404).send('ponto não encontrado')
  })
}

const update = (request, response) => {
  const id = request.params.id
  const pontosUpdate = request.body
  const options = { new: true }

  pontos.findByIdAndUpdate(
    id,
    pontosUpdate,
    options,
    (error, pontos) => {
      if (error) {
        return response.status(500).sned(error)
      }

      if (pontos) {
        return response.status(200).send(pontos)
      }

      return response.status(404).send('Ponto não encontrado.')
    }
  )
}
