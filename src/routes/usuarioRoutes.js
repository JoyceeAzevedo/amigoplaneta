const express = require("express")
const router = express.Router()
const controller = require("../controllers/usuarioControllers")

router.get("/", controller.get)
router.get("/:id", controller.getById)
router.post("/", controller.post)
router.post("/usuario/:id/pontos", controller.post)
router.post("/:id/pontos", controller.postPontos)
router.post("/:id/pontos", controller.postPontos)
router.put("/:id", controller.update)
//router.delete("/:id", controller.deletarPontos)

module.exports = router