const express = require('express');

const routes = express.Router();

const UserController = require('..UserController/controllers/UserController');

//consultar a quantidade de pontos, consultar usuários
routes.get('/users',UserController.consult)

//Inserir usuários e pontos a ele

routes.post('/users', UserController.insert);


module.exports = routes;
