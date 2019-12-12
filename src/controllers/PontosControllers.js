const Pontuacao = require('../models/pontos');


const calcularqtpontos = (quantidades, calcularqtpontos) => {
  const calcularqtpontos = quantidades + pontos

  
}
//teste

const getAll = (request, response) => {
  pokemonsModel.find((error, pokemons) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(pokemons)
  })
}

const getById = (request, response) => {
  const id = request.params.id

  return pontosModels.findById(id, (error, pokemon) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (pontos) {
      return response.status(200).send(pokemon)
    }

    return response.status(404).send('Você não tem pontos.')
  })
}

const add = (request, response) => {
  const pontosModels = new Usuariopontos(request.body)

  novoPokemon.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoPokemon)
  })
}

const remove = (request, response) => {
  const id = request.params.id

  pontosModels.findByIdAndDelete(id, (error, pokemon) => {
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

  pontosModels.findByIdAndUpdate(
    id,
    pontosUpdate,
    options,
    (error, pontos) => {
      if (error) {
        return response.status(500).sned(error)
      }

      if (pontos) {
        return response.status(200).send(pokemon)
      }

      return response.status(404).send('Ponto não encontrado.')
    }
  )
}
