const express = require("express")
const router = express.Router()
const controller = require("../controllers/usuarioControllers")
const CuponsControllers = require("../controllers/CuponsControllers")

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */


 //

router.get("/", controller.get)
router.get("/usuario/:id", controller.getById)
router.post("/cupons/:id", CuponsControllers.Gerarcupons)
router.post("/", controller.post)
router.post("/usuario/:id/pontos", controller.post)
router.post("/pontos", controller.postPontos)
router.put("/:usuarios/", controller.update)

//router.delete("/:id", controller.deletarPontos)

module.exports = router

//apidoc.json no site da api doc copiar 