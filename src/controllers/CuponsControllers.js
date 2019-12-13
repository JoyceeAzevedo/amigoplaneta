const pontos = require('../models/Cupons');


function getRandomArbitrary(min, max) {
  return Math.random() * 100;
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
